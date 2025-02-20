import React from "react";
import { Form, Alert } from "react-bootstrap";

const SingleFileUpload = ({ file, onFileChange, error }) => {
  return (
    <Form.Group className="mb-4">
      <Form.Label>Upload File</Form.Label>
      <Form.Control
        type="file"
        onChange={onFileChange}
        accept="image/*"
      />
      {file && (
        <div className="mt-3">
          <img
            src={URL.createObjectURL(file)}
            alt="Uploaded Preview"
            style={{ width: "250px", height: "250px", objectFit: "contain" }}
            className="rounded shadow-md"
          />
        </div>
      )}
      {error && <Alert variant="danger" className="mt-2">{error}</Alert>}
    </Form.Group>
  );
};

export default SingleFileUpload;
