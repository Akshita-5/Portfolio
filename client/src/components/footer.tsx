import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp, Terminal } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

const socialLinks = [
  { icon: Github, href: "https://github.com/Akshita-5", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/akshita-jain-2884a7287", label: "LinkedIn" },
  { icon: Mail, href: "mailto:akshita.rj583@gmail.com", label: "Email" },
  { icon: Terminal, href: "https://leetcode.com/u/Akshita__05/", label: "LeetCode" },
];

  return (
    <footer className="relative from-black via-gray-900/50 to-transparent py-12 px-6 border-t border-white/10 bg-[#10172f]">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left mb-6 md:mb-0"
          >
            <h3 className="text-xl font-bold text-white mb-2">
              Akshita Jain
            </h3>
            <p className="text-gray-400 text-sm">
              Web Developer, SIH Finalist'24
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex space-x-6"
          >
            {socialLinks.map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group bg-[#004182]"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="h-4 w-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center text-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 sm:mb-0 text-sm">
            <span>Made by Akshita Jain</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <p className="text-gray-400 text-sm">
              © 2025 All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-8 h-8 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-3 w-3 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
