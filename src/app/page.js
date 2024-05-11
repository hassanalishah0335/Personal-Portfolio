import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import Experiance from "./components/Experiance";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import Chat from "./components/Chat";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <Chat/>
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Experiance/>
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}
