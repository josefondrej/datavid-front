import React from "react";
import Section from "./Section";
import Container from "react-bootstrap/Container";
import SectionHeader from "./SectionHeader";
import TeamBios from "./TeamBios";

const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function TeamBiosSection(props) {
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
        <TeamBios
          items={shuffle([
            {
              avatar: "https://avatars2.githubusercontent.com/u/50045455?s=460&u=0660b482f78425d0e7e69c7bf8696959181e0b25&v=4",
              name: "Tomáš Kouřim",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "https://avatars0.githubusercontent.com/u/14038818?s=460&u=7a30f58316cdc01ca00d9281a69e16d6db9b4435&v=4",
              name: "Lukáš Forst",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "https://media-exp1.licdn.com/dms/image/C5603AQHjR7_XlP7oDg/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=-Lb-6IL5HRtI3qrUdoBgXxBa_AA9vLeukFgyFeGMypQ",
              name: "Jan Kubant",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "https://media-exp1.licdn.com/dms/image/C4D03AQF2AZ0uJGLe4A/profile-displayphoto-shrink_200_200/0?e=1591833600&v=beta&t=ERV7_aPBVA795To9EP1sdwruuFgeGVUnp2rZAqjDN7s",
              name: "Josef Ondřej",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "https://scontent-prg1-1.xx.fbcdn.net/v/t1.0-9/53692841_824665291213776_3289823216477929472_n.jpg?_nc_cat=101&_nc_sid=09cbfe&_nc_ohc=BzTgvJa-nXoAX_B5kJe&_nc_ht=scontent-prg1-1.xx&oh=f914ab28978fc8505161cd6cd645b86e&oe=5EB62D6A",
              name: "Jiří Jurík",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "TODO",
              name: "Daniel Malachov",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "TODO",
              name: "Jan Ondráček",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            },
            {
              avatar: "https://avatars2.githubusercontent.com/u/323018?s=460&u=7968ee6e168735510e48895bf320c5d227521d74&v=4",
              name: "Marek Polák",
              role: "",
              bio:
                "",
              twitterUrl: "https://twitter.com",
              facebookUrl: "https://facebook.com",
              linkedinUrl: "https://linkedin.com"
            }
          ])}
        ></TeamBios>
      </Container>
    </Section>
  );
}

export default TeamBiosSection;
