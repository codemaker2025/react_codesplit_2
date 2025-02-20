import { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";

const BrandsFilter = ({ filters, searchParams, handleCheckboxChange }) => {
  const [hasMore, setHasMore] = useState(filters.length > 4);
  const [searchQuery, setSearchQuery] = useState("");
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => setShowModal(!showModal);

  const visibleFilters = filters.slice(0, 4);

  const modalFilters = searchQuery.length > 0 
    ? filters.filter((ele) => ele.label.toLowerCase().includes(searchQuery.toLowerCase())) 
    : filters;

  return (
    <div>
      <h3>Brands</h3>
      {visibleFilters.map((ele) => (
        <Form.Group key={ele.value} controlId={`brands-${ele.value}`}>
          <Form.Check
            type="checkbox"
            label={ele.label}
            checked={searchParams.has(ele.value)}
            onChange={() => handleCheckboxChange(ele.value)}
          />
        </Form.Group>
      ))}

      {filters.length > 4 && (
        <div>
          {hasMore && (
            <Button variant="link" onClick={toggleModal}>
              Show All in Modal
            </Button>
          )}
        </div>
      )}

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>All Brands</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <input
              type="text"
              placeholder="Search brands..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {modalFilters.map((ele) => (
            <Form.Group key={ele.value} controlId={`brands-modal-${ele.value}`}>
              <Form.Check
                type="checkbox"
                label={ele.label}
                checked={searchParams.has(ele.value)}
                onChange={() => handleCheckboxChange(ele.value)}
              />
            </Form.Group>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={toggleModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default BrandsFilter;
