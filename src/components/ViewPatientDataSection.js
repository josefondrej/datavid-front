import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import PatientData from "./PatientData";
import "./ViewPatientDataSection.scss";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import {useForm} from "react-hook-form";
import loadPatientData from "../util/loadPatientData";

function ViewPatientDataSection(props) {
  const { handleSubmit, register, errors } = useForm();

  const onSubmit = () => {
    loadPatientData.loadPatientData();
  };

  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          <Col>
          </Col>
          <Col xs="auto">
            <Button
              variant={props.buttonColor}
              size={props.size}
              type="submit"
            >
              TEST API CALL
            </Button>
          </Col>
        </Form.Row>
      </Form>
      )}


      <Container
        style={{
          maxWidth: "850px"
        }}
      >
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <PatientData
          showNameField={props.showNameField}
          buttonText={props.buttonText}
          buttonColor={props.buttonColor}
          inputSize={props.inputSize}
        ></PatientData>
      </Container>
    </Section>
  );
}

export default ViewPatientDataSection;
