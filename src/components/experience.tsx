import { Trophy, Users, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Experience() {
  const experience = [
    {
      year: "2025",
      title: "Axory AI",
      role: "Co-founder & Web Developer",
      description: "Co-founded a startup focused on fraud detection using AI. Designed full-stack architecture and handled product strategy.",
      icon: <Code className="h-6 w-6 text-[var(--neon-purple)]" />,
      color: "text-[var(--neon-purple)]",
      side: "left"
    },
    {
      year: "2024",
      title: "Vitakaze Labs",
      role: "Frontend Developer Intern",
      description: "Built frontend and dashboard UI for a scrap management platform using React.js and Tailwind.",
      icon: <Zap className="h-6 w-6 text-[var(--neon-blue)]" />,
      color: "text-[var(--neon-blue)]",
      side: "right"
    }
  ];

  return (
    <section id="experience" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          Professional Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line - brighter fallback color */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#00d4ff] to-[#b967ff] rounded-full z-0" />

          <div className="space-y-12 z-10 relative">
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: exp.side === "left" ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center justify-center"
              >
                {exp.side === "left" ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-end mb-3">
                          {exp.icon}
                          <h3 className={`text-xl font-bold ml-3 ${exp.color}`}>
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-2 font-medium">{exp.role}</p>
                        <p className="text-gray-400 text-sm">{exp.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-black z-10 bg-[#64d97e]" />
                    <div className="w-1/2 pl-8">
                      <span className={`font-semibold ${exp.color}`}>{exp.year}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <span className={`font-semibold ${exp.color}`}>{exp.year}</span>
                    </div>
                    <div className="w-4 h-4 rounded-full border-4 border-black z-10 bg-[#f87171]" />
                    <div className="w-1/2 pl-8">
                      <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center mb-3">
                          {exp.icon}
                          <h3 className={`text-xl font-bold ml-3 ${exp.color}`}>
                            {exp.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-2 font-medium">{exp.role}</p>
                        <p className="text-gray-400 text-sm">{exp.description}</p>
                      </div>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
