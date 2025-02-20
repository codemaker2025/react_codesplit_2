import React from "react";
import GoogleLoginForm from "./GoogleLoginForm";
import FacebookLoginForm from "./FacebookLoginForm";
import { Container, Row, Col, Card, Button } from "react-bootstrap";

export default function LoginLayout() {
  return (
    <Container className="d-flex justify-content-center align-items-center vh-100">
      <Row className="w-100">
        <Col md={6} lg={4} className="mx-auto">
          <Card className="shadow-lg p-4 rounded-3 border-0">
            <h3 className="mb-4 text-primary">Login</h3>
            <div className="mb-3">
              <GoogleLoginForm />
            </div>
            <div className="mb-3">
              <FacebookLoginForm />
            </div>
            <div className="text-center">
              <Button variant="link" className="text-muted">
                Forgot Password?
              </Button>
            </div>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
