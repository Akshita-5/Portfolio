import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { SiGoogle} from "react-icons/si";
import CertificationModal from "./certification-modal";

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState<any | null>(null);

  const certifications = [
    {
      id: "google-cyber",
      title: "Google Cybersecurity Professional Certificate",
      issuer: "Google Career Certificates",
      icon: <SiGoogle className="h-8 w-8 text-white" />,
      gradient: "from-blue-500 to-green-500",
      description: "Comprehensive cybersecurity program covering network security, incident response, and security operations with hands-on labs and real-world scenarios.",
      tags: ["Security", "Networks"],
      certificateLink: "https://coursera.org/share/d87a23b53ffa08ef9d3b12f4a94cbdc8", // <--- ADD THIS LINE
      details: {
        overview: "Comprehensive cybersecurity program covering network security, incident response, risk management, and security operations. Gained hands-on experience with security tools and real-world scenarios through practical labs and case studies.",
        learningAreas: [
          "Network Security Fundamentals",
          "Incident Detection and Response",
          "Risk Assessment and Management",
          "Security Tools and Technologies",
          "Compliance and Governance"
        ]
      }
    },
    {
      id: "nptel-matlab",
      title: "NPTEL MATLAB Certification",
      issuer: "NPTEL - IIT/IISc",
      icon: <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold">N</div>,
      gradient: "from-orange-500 to-red-500",
      description: "Advanced MATLAB programming course covering numerical computing, data analysis, and algorithm development with practical applications.",
      tags: ["MATLAB", "Programming"],
      certificateLink: "/certificates/nptel-matlab.pdf", // <--- ADD THIS LINE (example for a PDF in public folder)
      details: {
        overview: "Advanced MATLAB programming course from IIT/IISc covering numerical computing, data analysis, algorithm development, and scientific visualization. Completed with practical assignments and project implementations.",
        learningAreas: [
          "MATLAB Programming Fundamentals",
          "Numerical Computing Methods",
          "Data Analysis and Visualization",
          "Algorithm Development",
          "Scientific Computing Applications"
        ]
      }
    },
    {
      id: "gcloud-security",
      title: "Security in Google Cloud",
      issuer: "Google Cloud",
      icon: <SiGoogle className="h-8 w-8 text-white" />,
      gradient: "from-blue-400 to-cyan-400",
      description: "Cloud security fundamentals covering IAM, VPC security, and best practices for securing applications on Google Cloud Platform.",
      tags: ["Cloud", "Security"],
      certificateLink: "https://coursera.org/share/3af646f1e50f2a7fdc103170edcfa8ce",
      details: {
        overview: "Cloud security fundamentals covering Identity and Access Management (IAM), VPC security, encryption strategies, and best practices for securing applications on Google Cloud Platform.",
        learningAreas: [
          "Identity and Access Management",
          "VPC Security Configuration",
          "Encryption and Key Management",
          "Security Monitoring and Logging",
          "Compliance and Best Practices"
        ]
      }
    },
    {
      id: "packt-backend",
      title: "Backend Development and API Creation",
      issuer: "Packt Publishing",
      icon: <div className="w-8 h-8 bg-purple-500 rounded-lg flex items-center justify-center text-white font-bold">P</div>,
      gradient: "from-purple-500 to-pink-500",
      description: "Comprehensive backend development course covering RESTful APIs, database design, and server-side programming with modern frameworks.",
      tags: ["Backend", "APIs"],
      certificateLink: "https://www.packtpub.com/your-cert-page", // <--- ADD THIS LINE
      details: {
        overview: "Comprehensive backend development course covering RESTful API design, database architecture, server-side programming, authentication systems, and deployment strategies with modern frameworks.",
        learningAreas: [
          "RESTful API Design and Development",
          "Database Architecture and Design",
          "Server-Side Programming",
          "Authentication and Authorization",
          "Deployment and DevOps Practices"
        ]
      }
    },
  ];

  return (
    <section id="certifications" className="py-20 px-6 relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          Courses & Certifications
        </motion.h2>

        <div className="grid sm:grid-cols-1 lg:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card p-6 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
              onClick={() => setSelectedCertification(cert)}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${cert.gradient} rounded-lg flex items-center justify-center mr-4`}>
                  {cert.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-[var(--neon-blue)]">{cert.title}</h3>
                  <p className="text-gray-400 text-sm">{cert.issuer}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">
                {cert.description}
              </p>

              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  {cert.tags.map((tag) => (
                    <span key={tag} className="bg-gray-600 px-3 py-1 rounded-full text-xs">
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Optional: Add a 'View Certificate' button here as well, if you want it visible on the main card */}
                {/* You can make this button open the modal OR directly open the link.
                    For this example, the modal opens first, and the link is inside the modal.
                    So, no change needed here in certifications.tsx for the button in the card.
                */}
                <Button
                  size="sm"
                  variant="ghost"
                  className="text-[var(--neon-blue)] hover:text-white transition-colors"
                  // Removed onClick here to ensure click on card opens modal
                  // The button in the modal will handle the link
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Details {/* Changed text since click opens modal, not direct link */}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={() => setSelectedCertification(null)}
        />
      )}
    </section>
  );
}