import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Features from "./Features";

function FeaturesSection(props) {
  return (
    <Section
      bg={props.bg}
      textColor={props.textColor}
      size={props.size}
      bgImage={props.bgImage}
      bgImageOpacity={props.bgImageOpacity}
    >
      <Container>
        <SectionHeader
          title={props.title}
          subtitle={props.subtitle}
          size={2}
          spaced={true}
          className="text-center"
        ></SectionHeader>
        <Features
          items={[
            {
              title: "CoVID-19",
              description:
                "TODO",
              image: "https://image.flaticon.com/icons/svg/2659/2659980.svg"
            },
            {
              title: "Artificial Intelligence",
              description:
                "TODO",
              image: "https://image.flaticon.com/icons/svg/1671/1671429.svg"
            },
            {
              title: "Speech Recognition",
              description:
                "TODO",
              image:
                "https://image.flaticon.com/icons/svg/503/503947.svg"
            },
            {
              title: "Prescription",
              description:
                "TODO",
              image: "https://image.flaticon.com/icons/svg/1192/1192711.svg"
            },
            {
              title: "Doctor",
              description:
                "TODO",
              image: "https://image.flaticon.com/icons/svg/843/843293.svg"
            }
          ]}
        ></Features>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
