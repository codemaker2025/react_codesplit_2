import React from 'react';
import { useFormHandlers } from '../../hooks/useFormHandlers';
import { Multistep, useMultistepApi } from 'informed';
import { useIntl } from 'react-intl';
import { Col, Row, Button } from 'react-bootstrap';
import InformInput from '../Inform/InformInput';
import PhoneNumber from '../Form/PhoneNumber';

export default function PersonalDetails() {
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
    <Multistep.Step step="info" next="allergies">
      <div className="p-4">
        <Row className="mb-4">
          <Col md={6}>
            <InformInput
              id="firstName"
              name="firstName"
              label={formatMessage({ id: "firstName" })}
              validateOn="change"
              placeholder={formatMessage({ id: "Elon" })}
              validate={validateName}
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
              validate={validateName}
              showErrorIfError
            />
          </Col>
        </Row>

        <Row className="mb-4">
          <Col md={6}>
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
          <Col md={6}>
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
          <Col md={12}>
            <PhoneNumber validateNumber={validateNumber} />
          </Col>
        </Row>

        <Row className="mt-4">
          <Col className="d-flex justify-content-between">
            <Button variant="secondary" type="button" onClick={previous}>
              {formatMessage({ id: "Previous" })}
            </Button>
            <Button variant="primary" type="button" onClick={next}>
              {formatMessage({ id: "Next" })}
            </Button>
          </Col>
        </Row>
      </div>
    </Multistep.Step>
  );
}
