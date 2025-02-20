import React from "react";
import { useFormHandlers } from "../../hooks/useFormHandlers";
import { Multistep, useFormApi, useFormState, useMultistepApi } from "informed";
import { useIntl } from "react-intl";
import { Col, Row, Button } from "react-bootstrap";
import CustomCheckboxGroup from "../Inform/grouped/CustomCheckboxGroup";
import useToast from "../../hooks/Toast/useToast";

export default function OtherDetails() {
  const { formatMessage } = useIntl();
  const {
    validateName,
    validatePlace,
    validatePincode,
    validateNumber,
    validateForm,
  } = useFormHandlers();
  const { previous, setCurrent } = useMultistepApi();
  const { reset } = useFormApi();
  const { showSuccess } = useToast();
  const { values } = useFormState();

  function handleSubmit() {
    reset();
    setCurrent("info");
    showSuccess(formatMessage({ id: "Your response has been recorded." }));
    console.log(values);
  }

  return (
    <Multistep.Step step="other" next="allergies">
      <div className="p-4">
        <Row>
          <Col md={6}>
            <CustomCheckboxGroup />
          </Col>
        </Row>
        <Row className="m-4">
          <Col className="d-flex justify-content-between">
            <Button variant="secondary" type="button" onClick={previous}>
              {formatMessage({ id: "Previous" })}
            </Button>
            <Button variant="primary" type="button" onClick={handleSubmit}>
              {formatMessage({ id: "Submit" })}
            </Button>
          </Col>
        </Row>
      </div>
    </Multistep.Step>
  );
}
