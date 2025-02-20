import React from "react";
import Form from 'react-bootstrap/Form';

const DropDown = ({ label, name, options, value, onChange, disabled = false }) => {
  const isSingleOption = options.length === 1;

  return (
    <Form.Group className="mb-3">
      {label && <Form.Label>{label}</Form.Label>}
      <Form.Select
        name={name}
        value={isSingleOption ? options[0] : value}
        onChange={onChange}
        disabled={isSingleOption || disabled}
        aria-label={`Select ${label}`}
      >
        {!isSingleOption && <option value="">Select {label}</option>}
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
};

export default DropDown;
