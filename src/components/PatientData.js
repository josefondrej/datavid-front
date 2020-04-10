import React, { useState } from "react";
import FormStatus from "./FormStatus";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import contact from "./../util/contact.js";
import { useForm } from "react-hook-form";

function PatientData(props) {
  const [status, setStatus] = useState({ type: "none" });
  const { handleSubmit, register, errors, reset } = useForm();

  const onSubmit = ({ name, email, message }) => {
    setStatus({ type: "pending" });

    contact.submit({ name, email, message }).then(() => {
      reset(); // Reset form
      setStatus({
        type: "success",
        message: "Your message has been sent! We'll get back to you soon."
      });
    });
  };

  return (
    <>
      {status && status.message && (
        <FormStatus type={status.type} message={status.message}></FormStatus>
      )}

      <Form onSubmit={handleSubmit(onSubmit)}>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formAge">
              <FormField
                size={props.inputSize}
                name="age"
                type="number"
                placeholder="Age"
                error={errors.name}
                inputRef={register({
                  required: "Please enter age"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formSex">
              <FormField
                size={props.inputSize}
                name="sex"
                type="text"
                placeholder="Sex"
                error={errors.name}
                inputRef={register({
                  required: "Please enter your sex"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formSymptoms">
              <FormField
                size={props.inputSize}
                name="symptoms"
                type="text"
                placeholder="Symptoms"
                error={errors.name}
                inputRef={register({
                  required: "Please enter symptoms"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formDateOfFirstSymptoms">
              <FormField
                size={props.inputSize}
                name="dateOfFirstSymptoms"
                type="date"
                placeholder="DateOfFirstSymptoms"
                error={errors.name}
                inputRef={register({
                  required: "Please enter date of first Symptoms"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formComorbidity">
              <FormField
                size={props.inputSize}
                name="comorbidity"
                type="text"
                placeholder="Comorbidity"
                error={errors.name}
                inputRef={register({
                  required: "Please enter comorbidity"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formEpidemiologicalAnamnesis">
              <FormField
                size={props.inputSize}
                name="epidemiologicalAnamnesis"
                type="text"
                placeholder="Epidemiological anamnesis"
                error={errors.name}
                inputRef={register({
                  required: "Please enter epidemiological anamnesis"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formChronicMedication">
              <FormField
                size={props.inputSize}
                name="chronicMedication"
                type="text"
                placeholder="Chronic medication"
                error={errors.name}
                inputRef={register({
                  required: "Please enter chronic medication"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formConfirmationOfDisease">
              <FormField
                size={props.inputSize}
                name="confirmationOfDisease"
                type="text"
                placeholder="Confirmation of disease"
                error={errors.name}
                inputRef={register({
                  required: "Please enter confirmation of disease"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formComplicationsOfDisease">
              <FormField
                size={props.inputSize}
                name="complicationsOfDisease"
                type="text"
                placeholder="Complications of disease"
                error={errors.name}
                inputRef={register({
                  required: "Please enter complications of disease"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formTreatmentOfDisease">
              <FormField
                size={props.inputSize}
                name="treatmentOfDisease"
                type="text"
                placeholder="Treatment of disease"
                error={errors.name}
                inputRef={register({
                  required: "Please enter treatment of disease"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        <Form.Row>
          {props.showNameField && (
            <Form.Group as={Col} xs={12} sm={12} controlId="formOutcomeOfPatients">
              <FormField
                size={props.inputSize}
                name="outcomeOfPatients"
                type="text"
                placeholder="Outcome of patients"
                error={errors.name}
                inputRef={register({
                  required: "Please enter outcome of patients"
                })}
              ></FormField>
            </Form.Group>
          )}
        </Form.Row>
        {/*<Form.Group controlId="formMessage">*/}
        {/*  <FormField*/}
        {/*    size={props.inputSize}*/}
        {/*    name="message"*/}
        {/*    type="textarea"*/}
        {/*    placeholder="Message"*/}
        {/*    rows={5}*/}
        {/*    error={errors.message}*/}
        {/*    inputRef={register({*/}
        {/*      required: "Please enter a message"*/}
        {/*    })}*/}
        {/*  ></FormField>*/}
        {/*</Form.Group>*/}
        <Button
          variant={props.buttonColor}
          size={props.inputSize}
          type="submit"
          disabled={status.type === "pending"}
        >
          <span>{props.buttonText}</span>

          {status.type === "pending" && (
            <Spinner
              animation="border"
              size="sm"
              role="status"
              aria-hidden={true}
              className="ml-2"
            >
              <span className="sr-only">Sending...</span>
            </Spinner>
          )}
        </Button>
      </Form>
    </>
  );
}

export default PatientData;
