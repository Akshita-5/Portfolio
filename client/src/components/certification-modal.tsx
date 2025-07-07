import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CertificationModalProps {
  certification: any;
  onClose: () => void;
}

export default function CertificationModal({ certification, onClose }: CertificationModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full glass-card border-white/20">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-[var(--neon-blue)]">
            {certification.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          <p className="text-gray-300 mb-6 leading-relaxed">
            {certification.details.overview}
          </p>

          <h4 className="text-lg font-semibold text-[var(--neon-blue)] mb-3">Key Learning Areas:</h4>
          <ul className="text-gray-300 space-y-2 mb-6">
            {certification.details.learningAreas.map((area: string, index: number) => (
              <li key={index}>• {area}</li>
            ))}
          </ul>

          <Button className={`bg-gradient-to-r ${certification.gradient} hover:scale-105 transition-transform`}>
            <ExternalLink className="mr-2 h-4 w-4" />
            View Certificate
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
