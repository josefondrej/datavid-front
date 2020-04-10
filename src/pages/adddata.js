import React from "react";
import AddPatientDataSection from "./../components/AddPatientDataSection";

function AddDataPage(props) {
  return (
    <AddPatientDataSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Fill in patient data"
      subtitle=""
      buttonText="Send data"
      buttonColor="primary"
      showNameField={true}
      inputSize="md"
    ></AddPatientDataSection>
  );
}

export default AddDataPage;
