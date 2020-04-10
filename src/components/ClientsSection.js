import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Clients from "./Clients";

function ClientsSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container className="text-center">
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
        ></SectionHeader>
        <Clients
          items={[
            {
              name: "Pornhub",
              image: "https://download.logo.wine/logo/Pornhub/Pornhub-Logo.wine.png",
              width: "150px"
            },
            {
              name: "Agrofert",
              image: "https://i.pinimg.com/originals/07/72/03/077203a0940440805a622d78b541ed43.jpg",
              width: "135px"
            }
          ]}
        ></Clients>
      </Container>
    </Section>
  );
}

export default ClientsSection;
