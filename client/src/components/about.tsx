import { GraduationCap, Heart, Code, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 font-inter text-glow"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-[var(--neon-blue)] mr-4" />
              <h3 className="text-2xl font-semibold text-[var(--neon-blue)]">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-[var(--neon-purple)] rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-gray-300">Cyber Physical Systems</p>
                  <p className="text-gray-400">Manipal Institute of Technology</p>
                  <p className="text-sm text-[var(--neon-blue)] font-medium">Aug 2022 – May 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Personal Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-[var(--neon-pink)] mr-4" />
              <h3 className="text-2xl font-semibold text-[var(--neon-pink)]">Personal Summary</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                Passionate web developer with a keen interest in UI/UX design and AI/ML integration. 
                I thrive on solving complex problems through innovative technical solutions.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Beyond coding, I'm an active member of the Showstoppers dance crew, 
                bringing creativity and rhythm to both my personal and professional life.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I believe in the perfect balance between technology and design, 
                creating digital experiences that are both functional and beautiful.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-[var(--neon-purple)] mr-3" />
              <h4 className="text-xl font-semibold text-[var(--neon-purple)]">Technical Interests</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Frontend Development & UI/UX Design</li>
              <li>• Cybersecurity & Ethical Hacking</li>
              <li>• AI/ML Integration in Web Applications</li>
              <li>• Modern Web Technologies & Frameworks</li>
            </ul>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 text-[var(--neon-blue)] mr-3" />
              <h4 className="text-xl font-semibold text-[var(--neon-blue)]">Creative Pursuits</h4>
            </div>
            <ul className="space-y-2 text-gray-300">
              <li>• Showstoppers Dance Crew Member</li>
              <li>• Digital Art & Design</li>
              <li>• Photography & Visual Storytelling</li>
              <li>• Music Production & Sound Design</li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
