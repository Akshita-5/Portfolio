import { Mail, Phone, Linkedin, Github, Shield, Code, Brain } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted");
  };

  return (
    <section id="contact" className="py-20 px-6 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 font-inter text-glow"
        >
          Get In Touch
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="glass-card p-8 rounded-2xl"
          >
            <h3 className="text-2xl font-semibold mb-6 text-[var(--neon-blue)]">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Name</label>
                <Input
                  type="text"
                  placeholder="Your Name"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[var(--neon-blue)]"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email</label>
                <Input
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[var(--neon-blue)]"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <Textarea
                  rows={5}
                  placeholder="Your message..."
                  className="bg-white/10 border-white/20 text-white placeholder-gray-400 focus:border-[var(--neon-blue)] resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] hover:scale-105 transition-transform duration-300 py-6"
              >
                Send Message
              </Button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-2xl font-semibold mb-6 text-[var(--neon-purple)]">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="h-5 w-5 text-[var(--neon-blue)]" />
                  <a
                    href="mailto:akshita.rj583@gmail.com"
                    className="text-gray-300 hover:text-[var(--neon-blue)] transition-colors"
                  >
                    akshita.rj583@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-5 w-5 text-[var(--neon-purple)]" />
                  <a
                    href="tel:+916398550731"
                    className="text-gray-300 hover:text-[var(--neon-purple)] transition-colors"
                  >
                    +91 6398550731
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="h-5 w-5 text-[var(--neon-blue)]" />
                  <a
                    href="https://www.linkedin.com/in/akshita-jain-2884a7287"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--neon-blue)] transition-colors"
                  >
                    LinkedIn Profile
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="h-5 w-5 text-[var(--neon-pink)]" />
                  <a
                    href="https://github.com/Akshita-5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-[var(--neon-pink)] transition-colors"
                  >
                    GitHub Profile
                  </a>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-semibold mb-4 text-[var(--neon-blue)]">Career Interests</h3>
              <p className="text-gray-300 mb-4">
                Actively seeking software development internships in:
              </p>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <Shield className="h-4 w-4 text-[var(--neon-blue)]" />
                  <span>Cybersecurity</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Code className="h-4 w-4 text-[var(--neon-purple)]" />
                  <span>Frontend Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Brain className="h-4 w-4 text-[var(--neon-pink)]" />
                  <span>AI/ML Integration</span>
                </li>
              </ul>
              <div className="mt-6 p-4 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-lg border border-red-500/30">
                <p className="text-sm text-red-300 font-semibold">
                  🎯 Goal: Adobe Internship | Adobe Hackathon 2025 Participant
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
