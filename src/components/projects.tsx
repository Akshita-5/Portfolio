import { useState } from "react";
import {
  ExternalLink,
  Github,
  Target,
  Shield,
  Bot,
  Recycle,
  Eye,
  Wand,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectModal from "./project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "focusmate",
      title: "FocusMate",
      description:
        "Productivity web app with task management, Pomodoro, and focus analytics.",
      icon: <Target className="h-9 w-9 text-white" />,
      gradient: "from-blue-500 to-purple-600",
      tags: ["MERN", "Tailwind CSS", "Redux Toolkit", "Framer Motion"],
      featured: true,
      images: ["pic1.jpg", "pic2.jpg"],
      githubLink: "https://github.com/Akshita-5",
      liveDemoLink: "https://focusmate.vercel.app",
      details: {
        overview:
          "Helps users manage productivity via timers, analytics, and task systems.",
        features: [
          "Pomodoro Integration",
          "Real-time Charts",
          "Task Priority Manager",
        ],
        technologies: ["MongoDB", "Express", "React", "Node.js", "Redux"],
      },
    },
    {
      id: "axory-ai",
      title: "Axory AI",
      description:
        "AI-powered fraud detection using deep learning and visual forensics.",
      icon: <Bot className="h-9 w-9 text-white" />,
      gradient: "from-purple-500 to-pink-500",
      tags: ["React", "Flask", "Node.js", "TensorFlow"],
      badge: "Co-founded",
      images: ["pic3.jpg", "pic4.jpg"],
      githubLink: "https://github.com/Akshita-5/Axory-AI",
      liveDemoLink: "https://axory.ai/",
      details: {
        overview:
          "Detects digital fraud using AI models and real-time dashboards.",
        features: [
          "Deep Learning Analysis",
          "Real-time Detection",
          "Threat Dashboards",
        ],
        technologies: ["Flask", "React", "Python", "OpenCV"],
      },
    },
    {
      id: "detectAI",
      title: "DetectAI",
      description:
        "CNN-based deepfake detection tool for Smart India Hackathon.",
      icon: <Shield className="h-9 w-9 text-white" />,
      gradient: "from-red-500 to-orange-500",
      tags: ["React", "Flask", "Python", "OpenCV"],
      badge: "SIH 2024",
      images: ["pic5.jpg", "pic6.jpg"],
      githubLink: "https://github.com/Akshita-5/Detect-AI",
      liveDemoLink: "https://detect-ai-akshita.vercel.app/",
      details: {
        overview: "Detects manipulated video using AI and CNN techniques.",
        features: [
          "CNN Detection",
          "Real-time Scanning",
          "Video Accuracy Reports",
        ],
        technologies: ["Python", "Flask", "TensorFlow", "React"],
      },
    },
    {
      id: "scrapmate",
      title: "ScrapMate",
      description:
        "Scrap marketplace platform with responsive UI and real-time APIs.",
      icon: <Recycle className="h-9 w-9 text-white" />,
      gradient: "from-green-500 to-teal-500",
      tags: ["HTML", "CSS", "JavaScript"],
      badge: "Vitakaze Labs",
      images: ["pic7.jpg", "pic8.jpg"],
      githubLink: "https://github.com/Akshita-5/ScrapMate", // Edit this link
      liveDemoLink: "https://akshita-5.github.io/ScrapMate/", // Edit this link
      details: {
        overview:
          "Connects scrap sellers with buyers via a real-time transactional platform.",
        features: ["Clean UI", "Real-time Transactions", "Inventory Dashboard"],
        technologies: ["JavaScript", "REST APIs", "CSS"],
      },
    },
    {
      id: "innovision",
      title: "Innovision",
      description:
        "Smart Cane for the visually impaired with sensors and haptic feedback.",
      icon: <Wand className="h-9 w-9 text-white" />,
      gradient: "from-yellow-500 to-lime-500",
      tags: ["Arduino", "Ultrasonic", "GPS", "Infrared"],
      badge: "Assistive Tech",
      images: ["pic9.jpg", "pic10.jpg"],
      githubLink: "https://github.com/yourusername/innovision",
      liveDemoLink: null,
      details: {
        overview:
          "Assistive device built using CPS principles for real-time obstacle and pothole detection.",
        features: [
          "Ultrasonic & IR Sensors",
          "Haptic Vibration Feedback",
          "GPS Navigation Integration",
          "Arduino-based Data Processing",
          "Pothole & Obstacle Detection",
          "Real-time Alert System",
        ],
        technologies: ["Arduino", "HC-SR04", "IR Sensor", "GPS Module", "C++"],
      },
    },
  ];

  const handleCardClick = (project: any, e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest("button")) {
      return;
    }
    setSelectedProject(project);
  };

  const handleGithubClick = (githubLink: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(githubLink, "_blank");
  };

  const handleLiveDemoClick = (liveDemoLink: string, e: React.MouseEvent) => {
    e.stopPropagation();
    window.open(liveDemoLink, "_blank");
  };

  return (
    <section id="projects" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-12 font-inter text-glow"
        >
          Featured Projects
        </motion.h2>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="glass-card p-5 rounded-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer h-full flex flex-col shadow-lg"
              onClick={(e) => handleCardClick(project, e)}
            >
              <div
                className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-md mb-4 flex items-center justify-center`}
              >
                {project.icon}
              </div>

              <div className="flex items-center mb-2 flex-wrap gap-2">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                    Featured
                  </span>
                )}
                {project.badge && (
                  <span className="text-xs bg-pink-500 text-white px-2 py-0.5 rounded-full">
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-sm text-gray-300 mb-3 flex-grow leading-snug min-h-[3.2rem]">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs bg-gray-700 text-white px-2 py-0.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex gap-2 mt-auto">
                {project.githubLink && (
                  <Button
                    onClick={(e) => handleGithubClick(project.githubLink, e)}
                    className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-500 hover:to-gray-600 text-white flex-1 text-sm"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                )}
                {project.liveDemoLink && (
                  <Button
                    onClick={(e) =>
                      handleLiveDemoClick(project.liveDemoLink, e)
                    }
                    className="bg-gradient-to-r from-blue-400 to-purple-400 hover:from-blue-500 hover:to-purple-500 text-white flex-1 text-sm"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}
