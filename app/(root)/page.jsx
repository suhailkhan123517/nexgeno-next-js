import Hero from "@/components/Hero/Hero";
import Expertise from "@/components/Experties/Experties";
import Solutions from "@/components/Solutions/Solutions";
import CallToAction from "@/components/CallToAction/CallToAction";
import RecentWork from "@/components/RecentWork/RecentWork";
import CounterNew from "@/components/CounterNew/CounterNew";
import Stories from "@/components/Stories/Stories";
import WhoWeAre from "@/components/WhoWeAre/WhoWeAre";
import DigitalSolutions from "@/components/DigitalSolutions/DigitalSolutions";
import TestimonialClient from "@/components/Testimonial/Testimonial";
import Client from "@/components/client/Client";
import Faq from "@/components/Faq/Faq";
import Faq2 from "@/components/Faq2/Faq2";
import Connect from "@/components/Connect/Connect";
import Contact from "@/components/Contact/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Expertise />
      <Solutions />

      <RecentWork />
      <CounterNew />
      {/* <Stories /> */}

      <WhoWeAre
        title="We are your digital partner to create inspirational design and robust solution for Web, Mobile & Cloud."
        desc="Nexgeno is a web and mobile app development company dedicated to providing innovative and custom solutions to businesses of all sizes. We are a team of creative designers and expert developers who design, develop, and deliver digital products to enhance user engagement, improve brand awareness, and drive business growth. From digital product design to development, our on-demand Agile product team will ensure that your digital product stands out in today's competitive market."
      />
      {/* <DigitalSolutions /> */}
      <TestimonialClient />
      <Client />
      <CallToAction
        title="Let's Discuss Your Project"
        desc="Let us know your project idea and Get free consultation to turn it
        into an amazing digital product."
        buttonTitle="Talk To Our Expert"
      />
      <Faq2 />
      <Contact />
    </>
  );
}
