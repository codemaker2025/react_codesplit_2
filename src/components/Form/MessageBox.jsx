import React from 'react';
import { InputGroup, Form } from 'react-bootstrap';

const MessageBox = ({
  label,
  name,
  value,
  placeholder = 'Type your message...',
  rows = 4,
  onChange,
  disabled = false,
}) => {
  return (
    <div className="mb-3">
      {label && (
        <Form.Label htmlFor={name} className="mb-2 font-semibold text-sm">
          {label}
        </Form.Label>
      )}
      <InputGroup>
        <Form.Control
          as="textarea"
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows}
          disabled={disabled}
          aria-label="With textarea"
        />
      </InputGroup>
    </div>
  );
};

export default MessageBox;
