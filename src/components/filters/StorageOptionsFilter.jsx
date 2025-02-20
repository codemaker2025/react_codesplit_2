import { Form } from "react-bootstrap";

const StorageOptionsFilter = ({ filters, searchParams, handleCheckboxChange }) => {
  return (
    <div>
      <h3>Storage Options</h3>
      {filters.map((ele) => (
        <Form.Group key={ele.value} controlId={`storageOptions-${ele.value}`}>
          <Form.Check
            type="checkbox"
            label={ele.label}
            checked={searchParams.has(ele.value)}
            onChange={() => handleCheckboxChange(ele.value)}
          />
        </Form.Group>
      ))}
    </div>
  );
};

export default StorageOptionsFilter;
