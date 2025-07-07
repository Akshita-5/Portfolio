import { X, Github, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card border-white/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-[var(--neon-blue)] flex items-center justify-between">
            {project.title}
            {project.badge && (
              <span className="text-sm bg-gradient-to-r from-[var(--neon-purple)] to-[var(--neon-pink)] px-3 py-1 rounded-full font-semibold">
                {project.badge}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            {/* Project mockup */}
            <div className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mb-6`}>
              {project.icon}
            </div>

            <div className="space-y-4">
              <div className="flex space-x-4">
                <Button className="bg-gradient-to-r from-[var(--neon-blue)] to-[var(--neon-purple)] hover:scale-105 transition-transform">
                  <Github className="mr-2 h-4 w-4" />
                  View on GitHub
                </Button>
                <Button
                  variant="outline"
                  className="glass-card border-white/20 hover:scale-105 transition-transform"
                >
                  <ExternalLink className="mr-2 h-4 w-4" />
                  Live Demo
                </Button>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 text-[var(--neon-blue)]">Project Overview</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              {project.details.overview}
            </p>

            <h3 className="text-xl font-semibold mb-4 text-[var(--neon-purple)]">Key Features</h3>
            <ul className="space-y-2 text-gray-300 mb-6">
              {project.details.features.map((feature: string, index: number) => (
                <li key={index} className="flex items-center space-x-2">
                  <Check className="h-4 w-4 text-[var(--neon-blue)] flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <h3 className="text-xl font-semibold mb-4 text-[var(--neon-pink)]">Technologies Used</h3>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech: string) => (
                <span key={tech} className="bg-gray-600 px-3 py-1 rounded-full text-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
