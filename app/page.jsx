import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Client from "@/components/client/Client";
import Counter from "@/components/Counter/Counter";
import Technology from "@/components/Technology/Technology";
import Portfolio from "@/components/Portfolio/Portfolio";
import Industries from "@/components/Industries/Industries";
import News from "@/components/News/News";
import Testimonial from "@/components/Testimonial/Testimonial";
import Contact from "@/components/Contact/Contact";
import Video from "@/components/video/Video";

export default function Home() {
  return (
    <>
      <Video />
      <Hero />
      <Client />
      <About />
      <Services />
      <Counter />
      <Technology />
      <Portfolio />
      <Industries />
      <News />
      <Testimonial />
      <Contact />
    </>
  );
}
