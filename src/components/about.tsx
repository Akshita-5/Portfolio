import { GraduationCap, Heart, Code, Palette } from "lucide-react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          About Me
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Education Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-6">
              <GraduationCap className="h-8 w-8 text-blue-400 mr-4" />
              <h3 className="text-xl font-semibold text-blue-400">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <div className="w-3 h-3 bg-purple-400 rounded-full mt-2 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-lg">Bachelor of Technology</h4>
                  <p className="text-gray-300">Cyber Physical Systems</p>
                  <p className="text-gray-400">Manipal Institute of Technology</p>
                  <p className="text-sm text-blue-400 font-medium">Aug 2022 – May 2026</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Updated Personal Summary Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl hover:scale-105 transition-transform duration-300"
          >
            <div className="flex items-center mb-6">
              <Heart className="h-8 w-8 text-pink-400 mr-4" />
              <h3 className="text-xl font-semibold text-pink-400">Personal Summary</h3>
            </div>
            <div className="space-y-4">
              <p className="text-gray-300 leading-relaxed">
                I'm a pre-final year B.Tech student in Cyber-Physical Systems, passionate about full-stack development, cybersecurity, and impactful AI applications. I co-founded Axory AI to tackle digital fraud with deep learning.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I enjoy solving real-world problems through design-centric development and continue to learn and build in fast-paced environments.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Updated Interests Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Code className="h-6 w-6 text-purple-400 mr-3" />
              <h4 className="text-lg font-semibold text-purple-400">Technical Interests</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              Full-Stack Web Development, Cybersecurity, AI/ML, IoT Systems, Scalable Architectures
            </p>
          </div>

          <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
            <div className="flex items-center mb-4">
              <Palette className="h-6 w-6 text-blue-400 mr-3" />
              <h4 className="text-lg font-semibold text-blue-400">Creative Pursuits</h4>
            </div>
            <p className="text-gray-300 leading-relaxed">
              UI/UX Design, Tech Branding, Dance
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}