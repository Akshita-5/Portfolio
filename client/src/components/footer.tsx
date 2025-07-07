import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Akshita-5", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/akshita-jain-2884a7287", label: "LinkedIn" },
    { icon: Mail, href: "mailto:akshita.rj583@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-black via-gray-900/50 to-transparent py-16 px-6 border-t border-white/10">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 right-1/3 w-48 h-48 bg-purple-500/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
              Akshita Jain
            </h3>
            <p className="text-gray-400 leading-relaxed">
              Passionate developer crafting innovative solutions at the intersection of technology and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold text-white mb-6">Quick Links</h4>
            <nav className="space-y-3">
              {['About', 'Skills', 'Projects', 'Achievements', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => document.getElementById(item.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })}
                  className="block mx-auto text-gray-400 hover:text-blue-400 transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center md:text-right"
          >
            <h4 className="text-xl font-semibold text-white mb-6">Let's Connect</h4>
            <div className="flex justify-center md:justify-end space-x-6 mb-6">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 group"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors duration-300" />
                </motion.a>
              ))}
            </div>
            <p className="text-gray-400 text-sm">
              Open to collaboration and new opportunities
            </p>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center"
        >
          <div className="flex items-center space-x-2 text-gray-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-pink-400 fill-current" />
            <span>by Akshita Jain</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <p className="text-gray-400 text-sm">
              © 2024 Akshita Jain. All rights reserved.
            </p>
            <motion.button
              onClick={scrollToTop}
              className="w-10 h-10 glass-card rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="h-4 w-4 text-gray-400 hover:text-blue-400 transition-colors duration-300" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
