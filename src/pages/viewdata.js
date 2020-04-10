import React from "react";
import ContactSection from "./../components/ContactSection";

function ViewDataPage(props) {
  return (
    <ContactSection
      bg="white"
      textColor="dark"
      size="md"
      bgImage=""
      bgImageOpacity={1}
      title="Contact Us"
      subtitle=""
      buttonText="Send message"
      buttonColor="primary"
      showNameField={true}
      inputSize="md"
    ></ContactSection>
  );
}

export default ViewDataPage;
