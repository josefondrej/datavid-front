import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import FormField from "./FormField";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import { useAuth } from "./../util/auth.js";
import { useForm } from "react-hook-form";

function AuthForm(props) {
  const auth = useAuth();

  const [pending, setPending] = useState(false);
  const { handleSubmit, register, errors, getValues } = useForm();

  const submitHandlersByType = {
    signin: ({ email, pass }) => {
      return auth.signin(email, pass).then(user => {
        props.onAuth(user);
      });
    },
    signup: ({ email, pass }) => {
      return auth.signup(email, pass).then(user => {
        props.onAuth(user);
      });
    },
    forgotpass: ({ email }) => {
      return auth.sendPasswordResetEmail(email).then(() => {
        props.onStatus({
          type: "success",
          message: "Password reset email sent"
        });
      });
    },
    changepass: ({ pass }) => {
      return auth.confirmPasswordReset(pass).then(() => {
        props.onStatus({
          type: "success",
          message: "Your password has been changed"
        });
      });
    }
  };

  // Handle form submission
  const onSubmit = ({ email, pass }) => {
    setPending(true);

    // Call submit handler for auth type
    submitHandlersByType[props.type]({
      email,
      pass
    })
      .catch(error => {
        props.onStatus({
          type: "error",
          message: error.message
        });
      })
      .finally(() => {
        setPending(false);
      });
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {["signup", "signin", "forgotpass"].includes(props.type) && (
        <Form.Group controlId="formEmail">
          <FormField
            size={props.inputSize}
            name="email"
            type="email"
            placeholder="Email"
            error={errors.email}
            inputRef={register({
              required: "Please enter an email"
            })}
          ></FormField>
        </Form.Group>
      )}

      {["signup", "signin", "changepass"].includes(props.type) && (
        <Form.Group controlId="formPassword">
          <FormField
            size={props.inputSize}
            name="pass"
            type="password"
            placeholder="Password"
            error={errors.pass}
            inputRef={register({
              required: "Please enter a password"
            })}
          ></FormField>
        </Form.Group>
      )}

      {["signup", "changepass"].includes(props.type) && (
        <Form.Group controlId="formConfirmPass">
          <FormField
            size={props.inputSize}
            name="confirmPass"
            type="password"
            placeholder="Confirm Password"
            error={errors.confirmPass}
            inputRef={register({
              required: "Please enter your password again",
              validate: value => {
                if (value === getValues().pass) {
                  return true;
                } else {
                  return "This doesn't match your password";
                }
              }
            })}
          ></FormField>
        </Form.Group>
      )}

      <Button
        variant="primary"
        block={true}
        size={props.inputSize}
        type="submit"
        disabled={pending ? true : false}
      >
        {!pending && <span>{props.typeValues.buttonText}</span>}

        {pending && (
          <Spinner
            animation="border"
            size="sm"
            role="status"
            aria-hidden={true}
            className="align-baseline"
          >
            <span className="sr-only">Loading...</span>
          </Spinner>
        )}
      </Button>
    </Form>
  );
}

export default AuthForm;
