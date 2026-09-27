import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { PersonalBrand } from "./components/PersonalBrand";
import { ExperiencesEvidence } from "./components/ExperiencesEvidence";
import { Education } from "./components/Education";
import { AcademicPerformance } from "./components/AcademicPerformance";
import { EducationDocuments } from "./components/EducationDocuments";
import { Coursework } from "./components/Coursework";
import { Skills } from "./components/Skills";
import { Interests } from "./components/Interests";
import { Projects } from "./components/Projects";
import { CareerProgress } from "./components/CareerProgress";
import { GrowthReflection } from "./components/GrowthReflection";
import { CVSection } from "./components/CV";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#fafbfd] dark:bg-[#0d1220]">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-lg focus:bg-navy-900 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <PersonalBrand />
        <ExperiencesEvidence />
        <Education />
        <AcademicPerformance />
        <EducationDocuments />
        <Coursework />
        <Skills />
        <Interests />
        <Projects />
        <CareerProgress />
        <GrowthReflection />
        <CVSection />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}