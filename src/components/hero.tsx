import { ChevronDown, Download, Eye, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden z-10"
    >
      {/* V2 Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 3, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mix-blend-screen filter blur-3xl animate-float"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.4, scale: 1 }}
          transition={{ duration: 3, delay: 1 }}
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full mix-blend-screen filter blur-3xl animate-float"
          style={{ animationDelay: "-4s" }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-float"
          style={{ animationDelay: "-2s" }}
        />
      </div>

      {/* Geometric Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-24 h-24 border border-blue-400 rotate-45"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 0.1, rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-32 h-32 border border-purple-400 rounded-full"
        />
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 0.1, y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-40 right-40 w-16 h-16 bg-gradient-to-r from-pink-400 to-purple-400 rotate-45"
        />
      </div>

      <div className="text-center z-10 px-6 max-w-4xl mx-auto">
        {/* Professional Photo Placeholder - V2 Style */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.5, type: "spring", stiffness: 80 }}
          className="w-56 h-56 mx-auto mb-10 rounded-full glass-card p-2 relative"
        >
          <img
            src="/profile.jpg"
            alt="Akshita Jain"
            className="w-full h-full object-cover rounded-full shadow-xl"
          />
        </motion.div>

        {/* Main Heading - V2 Style */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold font-inter mb-8 leading-tight"
          style={{
            textShadow:
              "0 0 30px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6)",
          }}
        >
          Hi, I'm{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 1,
              type: "spring",
              stiffness: 50,
            }}
            className="inline-block"
            style={{
              background:
                "linear-gradient(135deg, #ffffff 0%, #e2e8f0 50%, #ffffff 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Akshita Jain
          </motion.span>
        </motion.h1>

        {/* Updated Professional Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-center mb-12"
        >
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-poppins font-light"
          >
            <span className="text-blue-400 font-medium">Web Developer</span>{" "}
            <span className="text-gray-400">•</span>{" "}
            <span className="text-purple-400 font-medium">Aspiring SDE</span>{" "}
            <span className="text-gray-400">•</span>{" "}
            <span className="text-pink-400 font-medium">
              Cybersecurity Enthusiast
            </span>
          </motion.p>
        </motion.div>

        {/* V2 CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.1 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <motion.div
            whileHover={{ scale: 1.08, rotateY: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 transition-all duration-500 neon-glow px-8 py-7 text-l font-semibold rounded-2xl shadow-2xl"
            >
              <Eye className="mr-3 h-6 w-6" />
              View My Work
            </Button>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.08, rotateY: -5 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button
              variant="outline"
              className="flex glass-card border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-500 px-12 py-7 text-l font-semibold rounded-2xl backdrop-blur-xl"
            >
              <a href="https://drive.google.com/file/d/11wiQRM7pS1Ni68cW3cjlZRmV8uKGRGkW/view?usp=drive_link">
                <Download className="mr-3 h-6 w-6" />
                Download Resume
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
      <br />
      <br />
    </section>
  );
}
