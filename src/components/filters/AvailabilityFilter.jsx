import { Form } from "react-bootstrap";

const AvailabilityFilter = ({ filters, searchParams, handleCheckboxChange }) => {
  return (
    <div>
      <h3>Availability</h3>
      {filters.map((ele) => (
        <Form.Group key={ele.value} controlId={`availability-${ele.value}`}>
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

export default AvailabilityFilter;
