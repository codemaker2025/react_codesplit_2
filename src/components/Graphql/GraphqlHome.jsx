import {
  Container,
  Row,
  Col,
  Form,
  Spinner,
} from "react-bootstrap";
import { useFormHandlers } from "../../hooks/useFormHandlers";
import { Form as Inform } from "informed";
import InformInput from "../Inform/InformInput";
import InformTextArea from "../Inform/InformTextArea";
import PhoneNumber from "../Form/PhoneNumber";
import GraphqlContent from "./GraphqlContent";
import { useContactForm } from "../../hooks/useContactForm";

export default function GraphqlHome() {

  const { validateName, validateNumber, validateEmail } = useFormHandlers();
  const { handleFormSubmit, data, mutationLoading } = useContactForm();
  
  return (
    <Inform>
      {({ formApi, formState }) => (
        <Container className="py-5">
          <div className="bg-black text-white text-center py-2 mb-4">
            Get 5% off on your first order
          </div>

          <div className="text-center mb-5">
            <h1 className="mb-3">{data?.contactUsPage?.title}</h1>
            <p
              className="mb-4"
              dangerouslySetInnerHTML={{
                __html: data?.contactUsPage?.description,
              }}
            />
          </div>

          <Row>
            <Col md={8}>
              <h2 className="mb-4">Contact Information</h2>
              <Row className="mb-3">
                <Col md={6}>
                  <InformInput
                    id="firstName"
                    name="firstName"
                    label="First Name"
                    validateOn="change"
                    placeholder="Elon"
                    validate={(value) => {
                      const errorKey = validateName(value);
                      return errorKey ? errorKey : undefined;
                    }}
                    showErrorIfError
                  />
                </Col>
                <Col md={6}>
                  <InformInput
                    id="lastName"
                    name="lastName"
                    label="Last Name"
                    validateOn="change"
                    placeholder="Musk"
                    validate={(value) => {
                      const errorKey = validateName(value);
                      return errorKey ? errorKey : undefined;
                    }}
                    showErrorIfError
                  />
                </Col>
              </Row>

              <Row className="mb-3">
                <Col md={6}>
                  <Form.Group>
                    <InformInput
                      id="email"
                      name="email"
                      label="Email"
                      validateOn="change"
                      validate={(value) => {
                        const errorKey = validateEmail(value);
                        return errorKey ? errorKey : undefined;
                      }}
                      placeholder="enter your email"
                      showErrorIfError
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <PhoneNumber
                      validateNumber={(value) => {
                        const errorKey = validateNumber(value);
                        return errorKey ? errorKey : undefined;
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <InformInput
                  id="orderNumber"
                  name="orderNumber"
                  label="Order Number"
                  validateOn="change"
                  placeholder="Order Number"
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <InformTextArea
                  id="message"
                  name="message"
                  label="Message"
                  validateOn="change"
                  placeholder="Enter your message"
                  rows={5}
                />
              </Form.Group>

              <div className="text-end">
                <button
                  type="submit"
                  onClick={() => handleFormSubmit(formApi, formState)}
                  className="btn btn-primary"
                  disabled={mutationLoading}
                >
                  {mutationLoading ? (
                    <Spinner animation="border" size="sm" />
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </Col>

            <Col md={4}>
              <GraphqlContent data={data} />
            </Col>
          </Row>
        </Container>
      )}
    </Inform>
  );
}
