import React from "react";
import Alert from "react-bootstrap/Alert";

function FormStatus(props) {
  return (
    <Alert variant={props.type === "error" ? "danger" : "success"}>
      {props.message}
    </Alert>
  );
}

export default FormStatus;
