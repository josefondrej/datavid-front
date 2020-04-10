import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import Testimonials from "./Testimonials";

function TestimonialsSection(props) {
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
        <Testimonials
          items={[
            {
              avatar: "https://avatars2.githubusercontent.com/u/50045455?s=460&u=0660b482f78425d0e7e69c7bf8696959181e0b25&v=4",
              name: "Tomas Novak",
              testimonial:
                "Zelenou?",
              company: "Self employee"
            },
            {
              avatar: "https://avatars0.githubusercontent.com/u/14038818?s=460&u=7a30f58316cdc01ca00d9281a69e16d6db9b4435&v=4",
              name: "Lukas Forrester",
              testimonial:
                "Jezisi marne!",
              company: "Dudak"
            },
            {
              avatar: "https://www.patria.cz/Fotobank/6d9831ea-faec-4e65-aa4b-02e8a38e0ec1?width=201&height=250&action=Resize&position=Center",
              name: "Andrej Babis",
              testimonial:
                "Je to kampan!",
              company: "Vubec nic"
            }
          ]}
        ></Testimonials>
      </Container>
    </Section>
  );
}

export default TestimonialsSection;
