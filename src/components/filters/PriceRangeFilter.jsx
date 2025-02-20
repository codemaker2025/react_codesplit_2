import { Form } from "react-bootstrap";

const PriceRangeFilter = ({ filters, searchParams, handleRadioChange }) => {
  return (
    <div>
      <h3>Price Range</h3>
      {filters.map((ele) => (
        <Form.Group key={ele.value} controlId={`priceRange-${ele.value}`}>
          <Form.Check
            type="radio"
            name="priceRange"
            label={ele.label}
            checked={searchParams.get("priceRange") === ele.value}
            onChange={() => handleRadioChange(ele.value)}
          />
        </Form.Group>
      ))}
    </div>
  );
};

export default PriceRangeFilter;
