import { Code, Server, Wrench } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Code className="h-8 w-8 text-[var(--neon-blue)]" />,
      color: "from-[var(--neon-blue)] to-[var(--neon-purple)]",
      skills: [
        { name: "HTML/CSS", level: 95 },
        { name: "JavaScript", level: 90 },
        { name: "React", level: 85 },
        { name: "Tailwind CSS", level: 88 },
      ]
    },
    {
      title: "Backend & Languages",
      icon: <Server className="h-8 w-8 text-[var(--neon-purple)]" />,
      color: "from-[var(--neon-purple)] to-[var(--neon-pink)]",
      skills: [
        { name: "Python", level: 80 },
        { name: "C/C++", level: 75 },
        { name: "SQL", level: 70 },
        { name: "Node.js", level: 65 },
      ]
    },
    {
      title: "Tools & Cloud",
      icon: <Wrench className="h-8 w-8 text-[var(--neon-pink)]" />,
      color: "from-[var(--neon-pink)] to-amber-400",
      skills: [
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Google Cloud", level: 65 },
        { name: "Microsoft Azure", level: 60 },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 font-inter text-glow"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-transform duration-300"
            >
              <div className="text-center mb-6">
                <div className="mb-4">{category.icon}</div>
                <h3 className="text-xl font-semibold text-[var(--neon-blue)]">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
