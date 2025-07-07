import { Trophy, Users, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";

export default function Achievements() {
  const achievements = [
    {
      year: "2024",
      title: "Smart India Hackathon 2024",
      role: "Frontend Developer & UI Designer",
      description: "Developed Detectify, an advanced deepfake detection tool. Responsible for creating intuitive user interfaces and seamless user experiences.",
      icon: <Trophy className="h-6 w-6 text-[var(--neon-purple)]" />,
      color: "text-[var(--neon-purple)]",
      side: "left"
    },
    {
      year: "2023",
      title: "Manipal Hackathon 2023",
      role: "Organizing Committee Member",
      description: "Played a key role in organizing one of the largest hackathons in the region, coordinating events and managing participant engagement.",
      icon: <Users className="h-6 w-6 text-[var(--neon-blue)]" />,
      color: "text-[var(--neon-blue)]",
      side: "right"
    },
    {
      year: "2023",
      title: "Tech Tatva '23",
      role: "Web & System Team",
      description: "Contributed to the technical infrastructure of Manipal's premier tech fest, managing web systems and digital platforms.",
      icon: <Code className="h-6 w-6 text-[var(--neon-pink)]" />,
      color: "text-[var(--neon-pink)]",
      side: "left"
    },
    {
      year: "2023",
      title: "Dronaid Recruit",
      role: "Drone Technology Training",
      description: "Specialized training in drone-based search and rescue operations, combining technology with humanitarian applications.",
      icon: <Zap className="h-6 w-6 text-green-400" />,
      color: "text-green-400",
      side: "right"
    },
  ];

  return (
    <section id="achievements" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          Achievements & Experience
        </motion.h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full from-[var(--neon-blue)] to-[var(--neon-purple)] rounded-full bg-[#8d76ff]" />

          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: achievement.side === 'left' ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center justify-center"
              >
                {achievement.side === 'left' ? (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center justify-end mb-3">
                          {achievement.icon}
                          <h3 className={`text-xl font-bold ml-3 ${achievement.color}`}>
                            {achievement.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-2 font-medium">{achievement.role}</p>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-4 border-slate-900 z-10 ${achievement.color.replace('text-', 'bg-')}`} />
                    <div className="w-1/2 pl-8">
                      <span className={`font-semibold ${achievement.color}`}>{achievement.year}</span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="w-1/2 pr-8 text-right">
                      <span className={`font-semibold ${achievement.color}`}>{achievement.year}</span>
                    </div>
                    <div className={`w-4 h-4 rounded-full border-4 border-slate-900 z-10 ${achievement.color.replace('text-', 'bg-')}`} />
                    <div className="w-1/2 pl-8">
                      <div className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                        <div className="flex items-center mb-3">
                          {achievement.icon}
                          <h3 className={`text-xl font-bold ml-3 ${achievement.color}`}>
                            {achievement.title}
                          </h3>
                        </div>
                        <p className="text-gray-300 mb-2 font-medium">{achievement.role}</p>
                        <p className="text-gray-400 text-sm">{achievement.description}</p>
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
