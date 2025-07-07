import { ChevronDown, Download, Eye, Star, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative pt-16 overflow-hidden z-10">
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
          style={{ animationDelay: '-4s' }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 0.3, scale: 1 }}
          transition={{ duration: 3, delay: 1.5 }}
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full mix-blend-screen filter blur-3xl animate-float"
          style={{ animationDelay: '-2s' }}
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
          className="w-56 h-56 mx-auto mb-10 rounded-full glass-card p-3 relative"
        >
          <div className="w-full h-full bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 rounded-full flex items-center justify-center text-5xl font-bold relative overflow-hidden shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
              className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent rounded-full animate-pulse"
            />
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="relative z-10 font-inter"
            >
              AJ
            </motion.div>
          </div>
        </motion.div>

        {/* Main Heading - V2 Style */}
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold font-inter mb-8 text-glow leading-tight"
        >
          Hi, I'm{" "}
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1, type: "spring", stiffness: 50 }}
            className="gradient-text inline-block"
          >
            Akshita Jain
          </motion.span>
        </motion.h1>

        {/* V2 Tagline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="text-lg sm:text-xl md:text-2xl lg:text-4xl text-gray-300 mb-10 font-poppins font-light"
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="block mb-2"
          >
            Engineering{" "}
            <span className="text-blue-400 font-medium">Innovative</span>{" "}
            Tech,
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.7 }}
            className="block text-purple-400 font-medium"
          >
            Pixel by Pixel
          </motion.span>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.9 }}
          className="text-xl text-gray-400 mb-12 max-w-3xl mx-auto font-poppins leading-relaxed"
        >
          Passionate web developer crafting beautiful digital experiences with modern technologies
        </motion.p>

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
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-400 hover:to-purple-500 transition-all duration-500 neon-glow px-10 py-7 text-xl font-semibold rounded-2xl shadow-2xl"
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
              className="glass-card border-2 border-white/30 hover:bg-white/10 hover:border-white/50 transition-all duration-500 px-10 py-7 text-xl font-semibold rounded-2xl backdrop-blur-xl"
            >
              <Download className="mr-3 h-6 w-6" />
              Download Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* V2 Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <div className="w-6 h-10 border-2 border-blue-400 rounded-full relative mb-4">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="w-1 h-3 bg-blue-400 rounded-full absolute left-1/2 top-2 transform -translate-x-1/2"
              />
            </div>
            <span className="text-sm text-gray-400 font-poppins">Scroll to explore</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
