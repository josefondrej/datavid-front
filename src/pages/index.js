import React from "react";
import HeroSection from "./../components/HeroSection";
import ClientsSection from "./../components/ClientsSection";
import FeaturesSection from "./../components/FeaturesSection";
import TestimonialsSection from "./../components/TestimonialsSection";
import NewsletterSection from "./../components/NewsletterSection";
import {useRouter} from "./../util/router.js";
import TeamBiosSection from "../components/TeamBiosSection";

function IndexPage(props) {
  const router = useRouter();

  return (
    <>
      <HeroSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Welcome to DataVID"
        subtitle="Datavid - the ultimate tool to fight coronavirus using data - is a web and mobile based application used to collect vital patient information. It is a virtual assistant activated by a single click that helps medical doctors extract and store all relevant coronavirus related information about a patient - age, sex, comorbidities, epidemic anamnesis, medication, symptoms, time since infection etc. It uses speech-to-text modules to quickly collect all information and AI based tools to filter and assess the information provided by the doctor. The assistant also makes sure the doctor did not forget to mention any important part of the diagnosis."
        buttonText="Get Started"
        buttonColor="primary"
        image="/logo.png"
        buttonOnClick={() => {
          // Navigate to pricing page
          router.push("/dashboard");
        }}
      ></HeroSection>
      <ClientsSection
        bg="light"
        textColor="dark"
        size="sm"
        bgImage=""
        bgImageOpacity={1}
        title=""
        subtitle=""
      ></ClientsSection>
      <FeaturesSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Features"
        subtitle="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud."
      ></FeaturesSection>
      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TeamBiosSection>
      {/*<TestimonialsSection*/}
      {/*  bg="light"*/}
      {/*  textColor="dark"*/}
      {/*  size="md"*/}
      {/*  bgImage=""*/}
      {/*  bgImageOpacity={1}*/}
      {/*  title="Here's what users are saying"*/}
      {/*  subtitle=""*/}
      {/*></TestimonialsSection>*/}
      {/*<NewsletterSection*/}
      {/*  bg="white"*/}
      {/*  textColor="dark"*/}
      {/*  size="md"*/}
      {/*  bgImage=""*/}
      {/*  bgImageOpacity={1}*/}
      {/*  title="Stay in the know"*/}
      {/*  subtitle="Receive our latest articles and feature updates"*/}
      {/*  buttonText="Subscribe"*/}
      {/*  buttonColor="primary"*/}
      {/*  inputPlaceholder="Enter your email"*/}
      {/*  subscribedMessage="You are now subscribed!"*/}
      {/*></NewsletterSection>*/}
    </>
  );
}

export default IndexPage;
