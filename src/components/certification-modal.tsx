// client/src/components/Certifications/certification-modal.tsx

import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface CertificationModalProps {
  certification: any; // Consider creating a more specific type for Certification
  onClose: () => void;
}

export default function CertificationModal({ certification, onClose }: CertificationModalProps) {
  return (
    <Dialog open={true} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl w-full glass-card border-white/20">
        <DialogHeader>
          <DialogTitle className="text-xl md:text-2xl font-bold text-blue-400">
            {certification.title}
          </DialogTitle>
        </DialogHeader>

        <div className="mt-6">
          {/* Optional: Display an image of the certificate if you have one in public folder */}
          {/* If you have a specific image for the certificate itself, you could add:
          {certification.certificateImage && (
            <img
              src={`/${certification.certificateImage}`} // Assuming certificateImage is a path like "cert_google.jpg"
              alt={`${certification.title} certificate`}
              className="w-full h-auto rounded-lg mb-6 shadow-md"
            />
          )}
          */}

          <p className="text-white mb-6 leading-relaxed">
            {certification.details.overview}
          </p>

          <h4 className="text-base font-semibold text-blue-400 mb-3">Key Learning Areas:</h4>
          <ul className="text-white space-y-2 mb-6">
            {certification.details.learningAreas.map((area: string, index: number) => (
              <li key={index}>• {area}</li>
            ))}
          </ul>

          {certification.certificateLink && ( // Conditionally render button if link exists
            <Button
              className={`bg-gradient-to-r ${certification.gradient} hover:scale-105 transition-transform text-white`}
              onClick={() => window.open(certification.certificateLink, '_blank')} // <--- ADDED onClick HANDLER
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Certificate
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}