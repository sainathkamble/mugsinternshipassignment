import "./globals.css";
import { Navbar } from "./components/navbar.jsx";
import { Hero } from "./hero/hero.js";
import { AboutMe } from "./aboutme/aboutme.js";
import { Services } from "./serv/services.js";
import { Projects } from "./projects/projects.js";
import { Testimonials } from "./testimonials/testimonials.js";
import { Contact } from "./contact/contact.js";
import { Footer } from "./components/footer.jsx";

function Home(){
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Services />
      <Projects />
      <Testimonials />
      <Contact />  
      <Footer />
    </>  
  );
}

export default Home;