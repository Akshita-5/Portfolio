import { useState } from "react";
import { Trophy, Award, Medal, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type Achievement = {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  year: string;
  description: string;
  icon: JSX.Element;
  color: string;
  bgColor: string;
  borderColor: string;
  image: string; // This is the main image for the achievement
  details: string;
  achievements: string[]; // These seem to be text items, not images
};

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState<Achievement | null>(null);

  const achievements: Achievement[] = [
    {
      id: "sih-2024",
      title: "Smart India Hackathon 2024 Finalist",
      subtitle: "National Level Innovation Challenge",
      category: "Competition",
      year: "2024",
      description: "Built Detectify – a deepfake detection tool to aid government and media sectors.",
      icon: <Trophy className="h-8 w-8" />,
      color: "from-yellow-400 to-orange-500",
      bgColor: "bg-gradient-to-br from-yellow-400/10 to-orange-500/10",
      borderColor: "border-yellow-400/30",
      image: "logo1.jpg", // Ensure logo1.jpg is in your public folder
      details:
        "Detectify represents a cutting-edge solution in the fight against misinformation and digital fraud. As the frontend developer and UI designer, I created an intuitive interface that makes complex deepfake detection accessible to government officials and media professionals. The tool leverages advanced machine learning algorithms to analyze video and audio content, providing real-time detection capabilities with high accuracy rates. This project addresses the critical need for reliable content verification in an era of increasing digital manipulation.",
      achievements: [
        "Reached national finals among 1000+ teams",
        "Developed AI-powered deepfake detection system",
        "Created intuitive government-focused UI",
        "Implemented real-time video analysis"
      ]
    },
    {
      id: "hult-prize",
      title: "Hult Prize MAHE – 3rd Place",
      subtitle: "Sustainable Innovation Competition",
      category: "Social Impact",
      year: "2024",
      description: "Competed on the theme of sustainable innovation; reached campus finals.",
      icon: <Award className="h-8 w-8" />,
      color: "from-green-400 to-blue-500",
      bgColor: "bg-gradient-to-br from-green-400/10 to-blue-500/10",
      borderColor: "border-green-400/30",
      image: "logo2.jpg", // Ensure logo2.jpg is in your public folder
      details:
        "The Hult Prize competition challenged us to develop innovative solutions for global sustainability challenges. Our team focused on creating scalable solutions that could make a meaningful impact on environmental and social issues. Reaching the campus finals and securing 3rd place was a testament to our team's dedication to sustainable innovation and our ability to present compelling solutions to complex global problems. This experience enhanced my understanding of social entrepreneurship and the importance of technology in addressing sustainability challenges.",
      achievements: [
        "Secured 3rd place in campus finals",
        "Developed sustainable innovation solution",
        "Pitched to industry experts and investors",
        "Focused on environmental impact reduction"
      ]
    }
  ];

  const handleAchievementClick = (achievement: Achievement) => {
    setSelectedAchievement(achievement);
  };

  const closeModal = () => {
    setSelectedAchievement(null);
  };

  return (
    <section id="achievements" className="py-20 px-6 section-bg relative z-10">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-center mb-16 font-inter text-glow"
        >
          Achievements & Awards
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`glass-card p-8 rounded-2xl hover:scale-105 transition-all duration-300 cursor-pointer border-2 ${achievement.borderColor} ${achievement.bgColor} hover:shadow-2xl`}
              onClick={() => handleAchievementClick(achievement)}
            >
              <div className="flex items-center justify-between mb-6">
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {achievement.icon}
                </div>
                <div className="text-right">
                  <span className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-semibold text-sm`}>
                    {achievement.category}
                  </span>
                  <p className="text-gray-400 text-sm">{achievement.year}</p>
                </div>
              </div>

              <div className="mb-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  {achievement.title}
                </h3>
                <p className={`bg-gradient-to-r ${achievement.color} bg-clip-text text-transparent font-medium text-sm mb-3`}>
                  {achievement.subtitle}
                </p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {achievement.description}
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Medal className="h-4 w-4 text-yellow-400" />
                  <span className="text-xs text-gray-400">Click for details</span>
                </div>
                <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAchievement && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.8, opacity: 0, y: 50 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="glass-card p-8 rounded-2xl max-w-3xl w-full max-h-[80vh] overflow-y-auto border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedAchievement.color} rounded-full flex items-center justify-center mr-4 text-white`}>
                    {selectedAchievement.icon}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-1">
                      {selectedAchievement.title}
                    </h3>
                    <p className={`bg-gradient-to-r ${selectedAchievement.color} bg-clip-text text-transparent font-medium`}>
                      {selectedAchievement.subtitle}
                    </p>
                    <p className="text-gray-400 text-sm">{selectedAchievement.category} • {selectedAchievement.year}</p>
                  </div>
                </div>
                <button
                  onClick={closeModal}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  {/* FIX: Changed the div to an img tag and added the correct src path */}
                  <img
                    src={`/${selectedAchievement.image}`} // This is the main fix
                    alt={selectedAchievement.title}
                    className="w-full h-48 object-cover rounded-lg mb-4 shadow-lg"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {/* The `achievements` array contains strings, not image paths */}
                    {selectedAchievement.achievements.map((item, index) => (
                      <li key={index} className="flex items-start"> {/* Changed <img> to <li> */}
                        <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-300 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-3">Project Overview</h4>
                <p className="text-gray-200 leading-relaxed">
                  {selectedAchievement.details}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}