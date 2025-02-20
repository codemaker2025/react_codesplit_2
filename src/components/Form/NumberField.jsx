import React from 'react';
import { Form } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

const NumberField = ({ name, label, value, onChange, placeholder, error, min, max, step }) => {
 

  return (
    <Form.Group controlId={name}>
      <Form.Label>{label}</Form.Label>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">+91</InputGroup.Text>
        <Form.Control
        type="text"
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder || "Enter your number"}
        isInvalid={!!error}
        min={min}
        max={max}
        step={step} 
      />
      </InputGroup>
      
      <Form.Control.Feedback type="invalid">{error}</Form.Control.Feedback>
    </Form.Group>
  );
};

export default NumberField;
