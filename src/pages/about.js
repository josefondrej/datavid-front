import React from "react";
import HeroSection2 from "./../components/HeroSection2";
import TeamBiosSection from "./../components/TeamBiosSection";
import FaqItem from "../components/FaqItem";
import Container from "react-bootstrap/Container";

function AboutPage(props) {
  return (
    <>
      <HeroSection2
        bg="primary"
        textColor="white"
        size="lg"
        bgImage=""
        bgImageOpacity={1}
        title="Our Motivation"
        subtitle="Coronavirus is spreading extremely fast. The information about it, however, lacks behind. But to defeat the pandemic, we need information. Despite the tremendous efforts from around the world the complex databases we have today contain only very basic patients’ info – usually just age, sex and a place of residence. To really understand the disease, we need more. Symptoms, comorbidities, epidemiological anamnesis, medications, treatment etc. This information is scattered around the world and still very scarce. Different factors play they role, for sure, but the main reason is obvious. Medical doctors have to take care about their patients and do not have time to fill forms. We know it, we are medical doctors ourselves. Therefore we created DataVID – a tool that helps collect all necessary information in just a few seconds and takes care about all the rest. A tool that will allow us, the humans, tremendously speed up the search for a COVID-19 cure. "
      ></HeroSection2>

      <Container>
        <FaqItem
          question="What does the tool do?"
          answer="DataVID-19 - the ultimate tool to fight coronavirus using data - is a web and mobile based application used to collect vital patient information. It is a virtual assistant activated by a single click that helps medical doctors extract and store all relevant coronavirus related information about a patient - age, sex, comorbidities, epidemic anamnesis, medication, symptoms, time since infection etc. It uses speech-to-text modules to quickly collect all information and AI based tools to filter and assess the information provided by the doctor. The assistant also makes sure the doctor did not forget to mention any important part of the diagnosis."
          key="1"
          icon="question"
        ></FaqItem>

        <FaqItem
          question="Who is it designed for?"
          answer="The data input is performed by a qualified person – doctor, nurse, research worker – to assure its correctness and quality. The usage of the data is open to the broadest possible audience to speed up the research process while maintaining all necessary data sensitivity limitations and legislative requirementssatisfied."
          key="2"
          icon="question"
        ></FaqItem>

        <FaqItem
          question="Data"
          answer="DataVID-19 works worldwide and makes sure the data it contains is consistent. It translates all information into English (or Latin) so that the medical doctor does not have to spend time with dictionaries. It makes sure only standard units are used and does the conversion if necessary. It knows all country-specific treatmentand reporting habits and unites them into a single unified database. DataVID-19 serves as a centralized database with completely anonymized data ready to use by participating doctors and relevant research, government or public organizations. A medical doctor can then easily lookup historic cases with specificconditions and choose the best treatment for the current patient. A researcher can have relevant, unbiased and clean data at hand within seconds and can start with the research immediately. A government can easily get a relevant data backed analysis to make their tough decisions at least a bit easier."
          key="3"
          icon="database"
        ></FaqItem>

        <FaqItem
          question="DataVID Extensions"
          answer="It is open to other researchers and developers and ready to have new applications build on top of it, which will then in turn further help medical doctors,institutions or governments with their day to day work. The strong AI based medical understanding tools can be used to help hospitals with their internal dataprocessing – it can help create doctor’s reports, store and handle data, provide information for patients etc. It can help with reporting for insurance companies, to periodically check patients or anything else a doctor or researcher needs. The possibilities are unconstrained."
          key="4"
          icon="star"
        ></FaqItem>
      </Container>


      <TeamBiosSection
        bg="white"
        textColor="dark"
        size="md"
        bgImage=""
        bgImageOpacity={1}
        title="Meet the Team"
        subtitle=""
      ></TeamBiosSection>
    </>
  )
    ;
}

export default AboutPage;
