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
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-mind_map_cwng.svg"
            },
            {
              title: "Speech Recognition",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Speech-to-text.svg/2560px-Speech-to-text.svg.png"
            },
            {
              title: "Prescription",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "http://m4solutions.com.sg/wp-content/uploads/2016/01/MedicalDox-300x300.png"
            },
            {
              title: "Explore",
              description:
                "Integer ornare neque mauris, ac vulputate lacus venenatis et. Pellentesque ut ultrices purus.",
              image: "https://uploads.divjoy.com/undraw-balloons_vxx5.svg"
            }
          ]}
        ></Features>
      </Container>
    </Section>
  );
}

export default FeaturesSection;
