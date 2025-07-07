import { Linkedin, Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-6 md:mb-0">
            <h3 className="text-2xl font-bold font-inter text-glow mb-2">Akshita Jain</h3>
            <p className="text-gray-400">Engineering Innovative Tech, Pixel by Pixel</p>
          </div>
          <div className="flex space-x-6">
            <a
              href="https://www.linkedin.com/in/akshita-jain-2884a7287"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--neon-blue)] transition-colors text-2xl"
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/Akshita-5"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[var(--neon-purple)] transition-colors text-2xl"
            >
              <Github />
            </a>
            <a
              href="mailto:akshita.rj583@gmail.com"
              className="text-gray-400 hover:text-[var(--neon-pink)] transition-colors text-2xl"
            >
              <Mail />
            </a>
          </div>
        </div>
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-gray-500">
          <p>&copy; 2024 Akshita Jain. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
