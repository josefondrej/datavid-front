import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import PatientData from "./PatientData";
import "./AddPatientDataSection.scss";



function AddPatientDataSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
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

export default AddPatientDataSection;
