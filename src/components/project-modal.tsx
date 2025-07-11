import { X, Github, ExternalLink, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ProjectModalProps {
  project: any;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-card border-white/20">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-blue-400 flex items-center justify-between">
            {project.title}
            {project.badge && (
              <span className="text-sm bg-gradient-to-r from-purple-400 to-pink-400 text-white px-3 py-1 rounded-full font-semibold">
                {project.badge}
              </span>
            )}
          </DialogTitle>
        </DialogHeader>

        <div className="grid md:grid-cols-2 gap-8 mt-6">
          <div>
            {/* Project Images Section - This is the primary addition */}
            {project.images && project.images.length > 0 && (
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-semibold text-white">
                  Screenshots / Mockups
                </h3>
                <div className="grid grid-cols-1 gap-4">
                  {project.images.map((imageName: string, index: number) => (
                    <img
                      key={index}
                      src={`/${imageName}`}
                      alt={`${project.title} screenshot ${index + 1}`}
                      className="w-full h-auto rounded-lg object-cover shadow-lg"
                    />
                  ))}
                </div>
              </div>
            )}
            {!project.images ||
              (project.images.length === 0 && (
                <div
                  className={`aspect-video bg-gradient-to-br ${project.gradient} rounded-lg flex items-center justify-center mb-6`}
                >
                  {project.icon}
                </div>
              ))}

            <div className="space-y-4">
              <div className="flex space-x-4">
                {/* Conditionally render GitHub button if a link exists */}
                {project.githubLink && (
                  <Button
                    onClick={() => window.open(project.githubLink, "_blank")}
                    className="bg-gradient-to-r from-blue-400 to-purple-400 hover:scale-105 transition-transform text-white"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    View on GitHub
                  </Button>
                )}
                {/* Conditionally render Live Demo button if a link exists */}
                {project.liveDemoLink && (
                  <Button
                    onClick={() => window.open(project.liveDemoLink, "_blank")}
                    variant="outline"
                    className="glass-card border-white/20 hover:scale-105 transition-transform text-white hover:text-blue-400"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Live
                  </Button>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400">
              Project Overview
            </h3>
            <p className="text-white mb-6 leading-relaxed">
              {project.details.overview}
            </p>

            <h3 className="text-lg font-semibold mb-4 text-purple-400">
              Key Features
            </h3>
            <ul className="space-y-2 text-white mb-6">
              {project.details.features.map(
                (feature: string, index: number) => (
                  <li key={index} className="flex items-center space-x-2">
                    <Check className="h-4 w-4 text-blue-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                )
              )}
            </ul>

            <h3 className="text-lg font-semibold mb-4 text-pink-400">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.details.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="bg-gray-600 text-white px-3 py-1 rounded-full text-sm"
                >
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
