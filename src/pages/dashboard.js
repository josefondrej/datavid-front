import React, {useEffect} from "react";
import DashboardSection from "./../components/DashboardSection";
import {useAuth} from "./../util/auth.js";
import {useRouter} from "./../util/router.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "./Dashboard.scss";

function DashboardPage(props) {
  const auth = useAuth();
  const router = useRouter();

  // Redirect to signin
  // if not signed in.
  useEffect(() => {
    if (auth.user === false) {
      router.push("/auth/signin");
    }
  }, [auth, router]);

  return (
    <Container className="Container">
      <DashboardSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Dashboard"
        subtitle="Welcome to DataVid. Select, if you want to record or view patient data"
      >
      </DashboardSection>
      <Row className="align-items-center">
        <Col lg={6} className="text-center text-lg-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => {
              // Navigate to pricing page
              router.push("/add-data");
            }}
          >
            Add new patient data
          </Button>
        </Col>
        <Col lg={6} className="text-center text-lg-center">
          <Button
            variant="info"
            size="lg"
            onClick={() => {
              // Navigate to pricing page
              router.push("/view-data");
            }}
          >
            View patient data
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default DashboardPage;
