import { Code, Server, Database, Wrench, Cloud, Layers, Zap, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Technologies",
      icon: <Code className="h-6 w-6" />,
      color: "from-blue-400 to-purple-400",
      borderColor: "border-blue-400/30",
      skills: ["React.js", "Tailwind CSS", "HTML5", "CSS3", "JavaScript ES6+"]
    },
    {
      title: "Backend & APIs",
      icon: <Server className="h-6 w-6" />,
      color: "from-purple-400 to-pink-400",
      borderColor: "border-purple-400/30",
      skills: ["Node.js", "Express.js", "Flask", "RESTful APIs"]
    },
    {
      title: "Programming Languages",
      icon: <Layers className="h-6 w-6" />,
      color: "from-green-400 to-blue-400",
      borderColor: "border-green-400/30",
      skills: ["C++", "Python", "JavaScript", "SQL"]
    },
    {
      title: "Database Systems",
      icon: <Database className="h-6 w-6" />,
      color: "from-cyan-400 to-blue-400",
      borderColor: "border-cyan-400/30",
      skills: ["PostgreSQL", "MySQL", "Database Design"]
    },
    {
      title: "Development Tools",
      icon: <Wrench className="h-6 w-6" />,
      color: "from-orange-400 to-red-400",
      borderColor: "border-orange-400/30",
      skills: ["Git", "GitHub", "Linux", "VS Code", "CI/CD Pipelines"]
    },
    {
      title: "Cloud & DevOps",
      icon: <Cloud className="h-6 w-6" />,
      color: "from-pink-400 to-purple-400",
      borderColor: "border-pink-400/30",
      skills: ["AWS", "Azure", "Cloud Security", "Infrastructure"]
    },
    {
      title: "Core Concepts",
      icon: <Zap className="h-6 w-6" />,
      color: "from-yellow-400 to-orange-400",
      borderColor: "border-yellow-400/30",
      skills: ["Data Structures", "Algorithms", "OOP", "System Design"]
    },
    {
      title: "Specialized Skills",
      icon: <Globe className="h-6 w-6" />,
      color: "from-indigo-400 to-purple-400",
      borderColor: "border-indigo-400/30",
      skills: ["Cybersecurity", "AI/ML Integration", "Fraud Detection", "UI/UX Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          Skills & Technologies
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 border-2 ${category.borderColor} hover:shadow-lg`}
            >
              <div className="text-center mb-6">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-full flex items-center justify-center mx-auto mb-3 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold text-[var(--neon-blue)]">{category.title}</h3>
              </div>

              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: skillIndex * 0.1 }}
                    className="flex items-center justify-center"
                  >
                    <span className={`bg-gradient-to-r ${category.color} bg-clip-text text-transparent font-medium text-sm text-center px-3 py-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-colors w-full`}>
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl">
            <h3 className="text-xl font-semibold text-[var(--neon-blue)] mb-4">
              Technology Stack Overview
            </h3>
            <p className="text-gray-300 leading-relaxed max-w-4xl mx-auto">
              Experienced in full-stack development with expertise in modern web technologies, 
              cloud platforms, and cybersecurity. Passionate about creating secure, scalable 
              applications and leveraging AI/ML for innovative solutions. Strong foundation in 
              computer science fundamentals with hands-on experience in enterprise-level projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
