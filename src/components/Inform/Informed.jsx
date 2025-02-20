import React, { Fragment } from "react";
import {
  Form as Inform,
  useFormState,
  useFormApi,
  Debug,
  useField,
  Checkbox,
} from "informed";
import { Container, Row, Col, Button } from "react-bootstrap";
import { useIntl } from "react-intl";

import { useFormHandlers } from "../../hooks/useFormHandlers";
import useToast from "../../hooks/Toast/useToast";

import CustomSelect from "./CustomSelect";
import InformInput from "./InformInput";
import LanguageSwitcher from "../Language/LanguageSwitcher";
import PhoneNumber from "../Form/PhoneNumber";
import CustomCheckboxGroup from "./grouped/CustomCheckboxGroup";

export default function Informed({ setLocale }) {
  const { formatMessage } = useIntl();
  const {
    validateName,
    validatePlace,
    validatePincode,
    validateNumber,
    validateForm,
  } = useFormHandlers();

  const { showSuccess, showError } = useToast();

  const handleSubmit = (formApi, formState) => {
    const { values } = formState;
    console.log(values, "form values");
    const err = validateForm(values);
    if (err) {
      showError(formatMessage({ id: "Invalid Response." }));
    } else {
      showSuccess(formatMessage({ id: "successMessage" }));
      formApi.reset({});
    }
  };

  const handleLanguageChange = (lang) => {
    setLocale(lang);
  };

  return (
    <Container className="mt-5">
      <Inform onSubmit={handleSubmit}>
        {({ formApi, formState }) => (
          <>
            <LanguageSwitcher handleLanguageChange={handleLanguageChange} />

            <Row>
              <Col md={6}>
                <InformInput
                  id="firstName"
                  name="firstName"
                  label={formatMessage({ id: "firstName" })}
                  validateOn="change"
                  placeholder={formatMessage({ id: "Elon" })}
                  validate={(value) => {
                    const errorKey = validateName(value);
                    return errorKey ? formatMessage({ id: errorKey }) : undefined;
                  }}
                  showErrorIfError
                />
              </Col>
              <Col md={6}>
                <InformInput
                  id="lastName"
                  name="lastName"
                  label={formatMessage({ id: "lastName" })}
                  validateOn="change"
                  placeholder={formatMessage({ id: "Musk" })}
                  validate={(value) => {
                    const errorKey = validateName(value);
                    return errorKey ? formatMessage({ id: errorKey }) : undefined;
                  }}
                  showErrorIfError
                />
              </Col>
            </Row>

            <Row>
              <Col md={6}>
                <InformInput
                  id="street"
                  name="street"
                  label={formatMessage({ id: "street" })}
                  validateOn="change"
                  placeholder={formatMessage({ id: "Beverly Hills" })}
                  validate={(value) => {
                    const errorKey = validatePlace(value);
                    return errorKey ? formatMessage({ id: errorKey }) : undefined;
                  }}
                  showErrorIfError
                />
              </Col>
              <Col md={6}>
                <InformInput
                  id="city"
                  name="city"
                  label={formatMessage({ id: "city" })}
                  validateOn="change"
                  placeholder={formatMessage({ id: "California" })}
                  validate={(value) => {
                    const errorKey = validatePlace(value);
                    return errorKey ? formatMessage({ id: errorKey }) : undefined;
                  }}
                  showErrorIfError
                />
              </Col>
            </Row>

            {/* <CustomSelect
              name="country"
              id="country"
              label={formatMessage({ id: "Country" })}
              validateOn="change"
              validate={(value) =>
                !value ? formatMessage({ id: "Select Country" }) : undefined
              }
              showErrorIfError
            /> */}

            <InformInput
              id="pincode"
              name="pincode"
              label={formatMessage({ id: "pincode" })}
              validateOn="change"
              placeholder={formatMessage({ id: "Enter your pincode" })}
              validate={(value) => {
                const errorKey = validatePincode(value);
                return errorKey ? formatMessage({ id: errorKey }) : undefined;
              }}
              showErrorIfError
            />

            <PhoneNumber
              validateNumber={(value) => {
                const errorKey = validateNumber(value);
                return errorKey ? formatMessage({ id: errorKey }) : undefined;
              }}
            />

            <CustomSelect
              field="state"
              label={formatMessage({ id: "state" })}
              validate={(value) =>
                !value ? formatMessage({ id: "Select State" }) : undefined
              }
            />

            <InformInput
              id="message"
              name="message"
              label={formatMessage({ id: "message" })}
              validateOn="change"
              placeholder={formatMessage({ id: "Enter a message (optional)" })}
            />

            <CustomCheckboxGroup />

            <button
              type="submit"
              onClick={() => handleSubmit(formApi, formState)}
              className="btn btn-primary"
            >
              {formatMessage({ id: "submit" })}
            </button>
          </>
        )}
      </Inform>
    </Container>
  );
}

