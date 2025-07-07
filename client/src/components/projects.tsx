import { useState } from "react";
import { ExternalLink, Github, Target, Shield, Recycle, Bot, Plane } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ProjectModal from "./project-modal";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const projects = [
    {
      id: "focusmate",
      title: "Focusmate",
      description: "A comprehensive productivity and focus tracking platform featuring task management, analytics dashboard, and focus mode with Pomodoro timer integration.",
      icon: <Target className="h-16 w-16 text-white" />,
      gradient: "from-[var(--neon-blue)] to-[var(--neon-purple)]",
      tags: ["React", "Node.js", "MongoDB", "Chart.js"],
      featured: true,
      colSpan: "md:col-span-2 lg:col-span-2",
      details: {
        overview: "Focusmate is a comprehensive productivity platform designed to help users manage their tasks, track focus sessions, and analyze their productivity patterns. The application features a modern interface with real-time analytics, Pomodoro timer integration, and collaborative task management capabilities.",
        features: [
          "Task Management with Priority Levels",
          "Pomodoro Timer with Custom Intervals",
          "Analytics Dashboard with Charts",
          "Focus Mode with Distraction Blocking",
          "Team Collaboration Features"
        ],
        technologies: ["React", "Node.js", "MongoDB", "Chart.js", "Express.js", "Socket.io"]
      }
    },
    {
      id: "detectify",
      title: "Detectify",
      description: "Advanced deepfake detection tool developed for Smart India Hackathon 2024. Frontend development with modern UI/UX design.",
      icon: <Shield className="h-12 w-12 text-white" />,
      gradient: "from-[var(--neon-purple)] to-[var(--neon-pink)]",
      tags: ["React", "AI/ML", "TensorFlow"],
      badge: "SIH 2024",
      details: {
        overview: "Detectify is an advanced deepfake detection tool developed for Smart India Hackathon 2024. The project aims to combat the growing threat of deepfake technology by providing real-time detection capabilities with high accuracy rates.",
        features: [
          "Frontend Development with React",
          "UI/UX Design and Prototyping",
          "Real-time Video Processing Interface",
          "Dashboard for Detection Analytics"
        ],
        technologies: ["React", "TensorFlow", "OpenCV", "Python", "WebRTC"]
      }
    },
    {
      id: "scrap",
      title: "Scrap Selling Platform",
      description: "Collaborative web platform for scrap selling with responsive landing page design and full-stack implementation.",
      icon: <Recycle className="h-12 w-12 text-white" />,
      gradient: "from-green-500 to-teal-500",
      tags: ["HTML", "CSS", "JavaScript"],
      details: {
        overview: "Collaborative web platform for scrap selling with responsive design and full-stack implementation. The project focuses on creating a user-friendly interface for connecting scrap sellers with buyers.",
        features: [
          "Responsive Landing Page Design",
          "User Authentication System",
          "Scrap Listing Management",
          "Buyer-Seller Communication"
        ],
        technologies: ["HTML5", "CSS3", "JavaScript", "Git"]
      }
    },
    {
      id: "axory",
      title: "Axory AI",
      description: "Intelligent automation platform for modern businesses. Designed sleek landing page UI with React and integrated scroll effects using Framer Motion.",
      icon: <Bot className="h-12 w-12 text-white" />,
      gradient: "from-orange-500 to-red-500",
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      details: {
        overview: "Axory AI is an end-to-end intelligent automation system built to streamline repetitive business tasks using machine learning and predictive analytics. The platform offers features like smart document processing, chatbot support, and workflow optimization.",
        features: [
          "Designed sleek, responsive landing page UI using React and Tailwind CSS",
          "Integrated animated sections with scroll effects using Framer Motion",
          "Developed feature highlights with interactive cards and modal-based expansion",
          "Focused on UX-first design with custom illustrations and micro-interactions"
        ],
        technologies: ["React", "Tailwind CSS", "Framer Motion", "SVG animations"]
      }
    },
    {
      id: "drone",
      title: "MSF Drone Project",
      description: "Drone-based search and rescue system developed during Dronaid training program with advanced flight control systems.",
      icon: <Plane className="h-12 w-12 text-white" />,
      gradient: "from-indigo-500 to-purple-500",
      tags: ["Python", "IoT", "Robotics"],
      details: {
        overview: "Drone-based search and rescue system developed during Dronaid training program with advanced flight control systems. Focuses on humanitarian applications using cutting-edge drone technology.",
        features: [
          "Autonomous Flight Control",
          "Search and Rescue Operations",
          "Real-time Video Streaming",
          "GPS Navigation System"
        ],
        technologies: ["Python", "IoT", "Robotics", "Computer Vision"]
      }
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-16 font-inter text-glow"
        >
          Featured Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className={`${project.colSpan || ''} glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 group cursor-pointer`}
              onClick={() => setSelectedProject(project)}
            >
              <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg mb-6 flex items-center justify-center`}>
                {project.icon}
              </div>
              
              <div className="flex items-center mb-4">
                <h3 className={`text-2xl font-bold mr-3 ${project.featured ? 'text-[var(--neon-blue)]' : 'text-white'}`}>
                  {project.title}
                </h3>
                {project.featured && (
                  <span className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </span>
                )}
                {project.badge && (
                  <span className="bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] px-2 py-1 rounded-full text-xs font-semibold">
                    {project.badge}
                  </span>
                )}
              </div>

              <p className="text-gray-300 mb-4 text-sm">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4">
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] hover:scale-105 transition-transform"
                >
                  <Github className="mr-2 h-4 w-4" />
                  View Code
                </Button>
                <Button
                  size="sm"
                  variant="outline"
                  className="glass-card border-white/20 hover:scale-105 transition-transform"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
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
