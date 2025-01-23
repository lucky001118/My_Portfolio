// import Demo from "./Pages/Demo";
import Hero from "./Pages/Hero";
import Navbar from "./Pages/Navbar";
import Projects from "./Pages/Projects";
import Bio from "./Pages/Bio";
import Skills from "./Pages/Skills";
import WorkExperience from "./Pages/WorkExperience";
import Education from "./Pages/Education";
import ContactForm from "./Pages/ContactForm";
import Footer from "./Pages/Footer";

function App() {
  return (
    <div className=" relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
        <div className="relative z-10 flex-col items-center p-4 space-y-8 container mx-auto">
        <Hero />
        <Navbar />
        <Projects />
        <Bio />
        <Skills />
        <WorkExperience />
        <Education />
        <ContactForm />
        <Footer />
        {/* <Demo /> */}
        </div>
      </div>
  );
}

export default App;
