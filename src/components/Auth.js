import React, { useState } from "react";
import FormStatus from "./FormStatus";
import AuthForm from "./AuthForm";
import AuthSocial from "./AuthSocial";
import AuthFooter from "./AuthFooter";
import { useRouter } from "./../util/router.js";

function Auth(props) {
  const router = useRouter();
  const [status, setStatus] = useState({
    type: null, // error or success
    message: "" // message text
  });

  const handleAuth = user => {
    router.push(props.afterAuthPath);
  };

  const handleStatus = status => {
    setStatus(status);
  };

  return (
    <>
      {status && status.message && (
        <FormStatus type={status.type} message={status.message}></FormStatus>
      )}

      <AuthForm
        type={props.type}
        typeValues={props.typeValues}
        inputSize={props.inputSize}
        onAuth={handleAuth}
        onStatus={handleStatus}
      ></AuthForm>

      {["signup", "signin"].includes(props.type) && (
        <>
          {props.providers && props.providers.length && (
            <>
              <small className="text-center d-block my-3">OR</small>
              <AuthSocial
                type={props.type}
                buttonText={props.typeValues.buttonText}
                inputSize={props.inputSize}
                providers={props.providers}
                showLastUsed={true}
                onAuth={handleAuth}
                onError={message => {
                  handleStatus({
                    type: "error",
                    message: message
                  });
                }}
              ></AuthSocial>
            </>
          )}

          <AuthFooter
            type={props.type}
            typeValues={props.typeValues}
          ></AuthFooter>
        </>
      )}
    </>
  );
}

export default Auth;
