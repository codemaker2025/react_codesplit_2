import React from "react";
import { Button } from "react-bootstrap";

const NavigationButtons = ({ currentStep, setCurrent }) => {
  return (
    <div className="d-flex flex-column">
      <Button
        variant={currentStep === "info" ? "primary" : "outline-secondary"}
        onClick={() => setCurrent("info")}
        className="mb-2"
      >
        Personal Info
      </Button>
      <Button
        variant={currentStep === "address" ? "primary" : "outline-secondary"}
        onClick={() => setCurrent("address")}
        className="mb-2"
      >
        Address Details
      </Button>
      <Button
        variant={currentStep === "other" ? "primary" : "outline-secondary"}
        onClick={() => setCurrent("other")}
        className="mb-2"
      >
        Other Details
      </Button>
    </div>
  );
};

export default NavigationButtons;
