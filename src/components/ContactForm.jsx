import { Row, Col,  Spinner } from "react-bootstrap";
import { Form as Inform } from "informed";
import InformInput from "./Inform/InformInput";
import InformTextArea from "./Inform/InformTextArea";
import PhoneNumber from "./Form/PhoneNumber";
import { useContactForm } from "../hooks/useContactForm";
import { useFormHandlers } from "../hooks/useFormHandlers";

export default function ContactForm() {
  const { handleSubmit, loading } = useContactForm();
  const { validateName, validateNumber, validateEmail } = useFormHandlers();

  return (
    <Inform>
      {({ formApi, formState }) => (
         <>
          <h2 className="mb-4">Contact Information</h2>

          <Row className="mb-3">
            <Col md={6}>
              <InformInput
                id="firstName"
                name="firstName"
                label="First Name"
                placeholder="Elon"
                validate={(value) => validateName(value) || undefined}
                showErrorIfError
              />
            </Col>
            <Col md={6}>
              <InformInput
                id="lastName"
                name="lastName"
                label="Last Name"
                placeholder="Musk"
                validate={(value) => validateName(value) || undefined}
                showErrorIfError
              />
            </Col>
          </Row>

          <Row className="mb-3">
            <Col md={6}>
              <InformInput
                id="email"
                name="email"
                label="Email"
                placeholder="Enter your email"
                validate={(value) => validateEmail(value) || undefined}
                showErrorIfError
              />
            </Col>
            <Col md={6}>
              <PhoneNumber validateNumber={(value) => validateNumber(value) || undefined} />
            </Col>
          </Row>

          <InformInput id="orderNumber" name="orderNumber" label="Order Number" placeholder="Order Number" />
          <InformTextArea id="message" name="message" label="Message" placeholder="Enter your message" rows={5} />

          <div className="text-end">
            <button type="submit" onClick={() => handleSubmit(formState.values, formApi)} className="btn btn-primary" disabled={loading}>
              {loading ? <Spinner animation="border" size="sm" /> : "Submit"}
            </button>
          </div>
         </>
      )}
    </Inform>
  );
}
