import React from "react";
import ViewPatientDataSection from "./../components/ViewPatientDataSection";

function ViewDataPage(props) {
  return (
    <ViewPatientDataSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="View Patient Data"
      subtitle=""
      buttonText="Load data"
      buttonColor="primary"
      showNameField={true}
      inputSize="md"
    ></ViewPatientDataSection>
  );
}

export default ViewDataPage;
