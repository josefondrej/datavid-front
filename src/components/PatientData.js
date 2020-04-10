import React, { useState } from "react";
import FormStatus from "./FormStatus";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import contact from "./../util/contact.js";
import { useForm } from "react-hook-form";

function Contact(props) {
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
            <Form.Group as={Col} xs={12} sm={6} controlId="formName">
              <FormField
                size={props.inputSize}
                name="name"
                type="text"
                placeholder="Name"
                error={errors.name}
                inputRef={register({
                  required: "Please enter your name"
                })}
              ></FormField>
            </Form.Group>
          )}

          <Form.Group
            as={Col}
            xs={12}
            sm={props.showNameField ? 6 : 12}
            controlId="formEmail"
          >
            <FormField
              size={props.inputSize}
              name="email"
              type="email"
              placeholder="Email"
              error={errors.email}
              inputRef={register({
                required: "Please enter your email"
              })}
            ></FormField>
          </Form.Group>
        </Form.Row>
        <Form.Group controlId="formMessage">
          <FormField
            size={props.inputSize}
            name="message"
            type="textarea"
            placeholder="Message"
            rows={5}
            error={errors.message}
            inputRef={register({
              required: "Please enter a message"
            })}
          ></FormField>
        </Form.Group>
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

export default Contact;
