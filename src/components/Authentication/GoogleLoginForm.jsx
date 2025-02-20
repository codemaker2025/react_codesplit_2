import React from "react";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import useAuth from "../../hooks/useAuth";
import { jwtDecode } from "jwt-decode"; // Correct import
import { Container, Row, Col, Card, Button, Image } from "react-bootstrap";

const clientId =
  "726252295971-bgaujf253t731rqhiosiid8gu13rffgp.apps.googleusercontent.com";

export default function GoogleLoginForm() {
  const { login, logout, isAuthenticated } = useAuth();

  const handleLogin = (response) => {
    if (!response || !response.credential) {
      console.error("Google Login failed:", response);
      return;
    }
    console.log(response, "response");

    const decoded = jwtDecode(response.credential);
    console.log(decoded, "decoded data");

    const userInfo = {
      name: decoded.name,
      email: decoded.email,
      picture: decoded.picture,
    };

    login(userInfo);
  };

  console.log(isAuthenticated, "isAuthenticated");

  return (
    <GoogleOAuthProvider clientId={clientId}>
      <Container className="">
        {/* <Row className="w-100"> */}
          {/* <Col md={6} lg={4} className="mx-auto"> */}
            <Card className="">
              {!isAuthenticated ? (
                <>
                  <GoogleLogin
                    onSuccess={handleLogin}
                    onFailure={logout}
                    useOneTap
                    theme="outline"
                    width="100%"
                  />
                </>
              ) : (
                <div>
                  <h3>Welcome, {isAuthenticated?.name}</h3>
                  <h5>{isAuthenticated?.email}</h5>
                  {isAuthenticated?.picture && (
                    <Image
                      src={isAuthenticated.picture}
                      alt="Profile"
                      roundedCircle
                      fluid
                      className="my-3"
                    />
                  )}
                  <Button variant="danger" onClick={logout} className="mt-3">
                    Logout
                  </Button>
                </div>
              )}
            </Card>
          {/* </Col> */}
        {/* </Row> */}
      </Container>
    </GoogleOAuthProvider>
  );
}
