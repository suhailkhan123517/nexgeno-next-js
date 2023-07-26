import Hero from "@/components/Hero/Hero";
import About from "@/components/About/About";
import Services from "@/components/Services/Services";
import Client from "@/components/client/Client";
import Counter from "@/components/Counter/Counter";
import Technology from "@/components/Technology/Technology";
import Portfolio from "@/components/Portfolio/Portfolio";
import Footer from "@/components/Footer/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Client />
      <Services />
      <Counter />
      <Technology />
      {/* <Portfolio /> */}
      <Footer />
    </>
  );
}
