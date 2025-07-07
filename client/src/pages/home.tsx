import { useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Skills from "@/components/skills";
import Projects from "@/components/projects";
import Certifications from "@/components/certifications";
import Achievements from "@/components/achievements";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Home() {
  useEffect(() => {
    // Add scroll animation observer
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      });
    }, observerOptions);

    // Observe all sections
    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white relative dark">
      {/* Animated Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(120,_119,_198,_0.3),_transparent_70%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(120,_53,_199,_0.3),_transparent_70%)] opacity-60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_80%,rgba(236,_72,_153,_0.3),_transparent_70%)] opacity-60" />
        <div className="absolute inset-0 bg-[conic-gradient(from_180deg_at_50%_50%,_transparent_0deg,_rgba(79,_70,_229,_0.1)_360deg)]" />
      </div>
      
      <Navigation />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Achievements />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}
