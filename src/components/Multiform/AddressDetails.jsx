import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import InformInput from "../Inform/InformInput";
import { useFormHandlers } from "../../hooks/useFormHandlers";
import { useIntl } from "react-intl";
import { Multistep, useMultistepApi } from "informed";
import CustomSelectField from "../Inform/CustomSelectField";
import CustomSelect from "../Inform/CustomSelect";

export default function AddressDetails() {
  const { formatMessage } = useIntl();
  const {
    validateName,
    validatePlace,
    validatePincode,
    validateNumber,
    validateForm,
  } = useFormHandlers();
  const { next, previous } = useMultistepApi();

  return (
    <Multistep.Step step="address" previous="color">
      <div className="p-4">
        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <InformInput
              id="street"
              name="street"
              label={formatMessage({ id: "street" })}
              validateOn="change"
              placeholder={formatMessage({ id: "Beverly Hills" })}
              validate={validatePlace}
              showErrorIfError
            />
          </Col>
          <Col md={6} className="mb-3">
            <InformInput
              id="city"
              name="city"
              label={formatMessage({ id: "city" })}
              validateOn="change"
              placeholder={formatMessage({ id: "California" })}
              validate={validatePlace}
              showErrorIfError
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <CustomSelectField
              name="country"
              id="country"
              label={formatMessage({ id: "Country" })}
              validateOn="change"
              validate={(value) => (!value ? formatMessage({ id: "Select Country" }) : undefined)}
              showErrorIfError
            />
          </Col>
          <Col md={6} className="mb-3">
            <InformInput
              id="pincode"
              name="pincode"
              label={formatMessage({ id: "pincode" })}
              validateOn="change"
              placeholder={formatMessage({ id: "Enter your pincode" })}
              validate={validatePincode}
              showErrorIfError
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6} className="mb-3">
            <CustomSelect
              field="state"
              label={formatMessage({ id: "state" })}
              validate={(value) => (!value ? formatMessage({ id: "Select State" }) : undefined)}
            />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
            <Button
              variant="secondary"
              type="button"
              onClick={previous}
              className="px-4 py-2"
            >
              {formatMessage({ id: "Previous" })}
            </Button>
            <Button
              variant="primary"
              type="button"
              onClick={next}
              className="px-4 py-2"
            >
              {formatMessage({ id: "Next" })}
            </Button>
          </Col>
        </Row>
      </div>
    </Multistep.Step>
  );
}
