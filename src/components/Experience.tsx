import React from 'react';
import { FileCode, Award, ExternalLink } from 'lucide-react';

interface Achievement {
  id: number;
  icon: React.ReactNode;
  title: string;
  organization: string;
  year: string;
  description: string;
  link?: string;
}

const Experience: React.FC = () => {
  const achievements: Achievement[] = [
    {
      id: 1,
      icon: <FileCode className="h-6 w-6 text-cyan-500" />,
      title: "Vulnerability Discovery in US Department of Defense (DC3)",
      organization: "DC3",
      year: "2019",
      description: "Successfully identified critical security vulnerabilities in the Department of Defense Cyber Crime Center (DC3) systems, contributing to the strengthening of national security infrastructure.",
      link: "https://linktr.ee/youryreborn"
    },
    {
      id: 2,
      icon: <Award className="h-6 w-6 text-blue-500" />,
      title: "Security Flaws Identification in IBM Systems",
      organization: "IBM",
      year: "2019",
      description: "Discovered and responsibly disclosed multiple security vulnerabilities in IBM's enterprise systems, helping to secure critical business infrastructure.",
      link: "https://linktr.ee/youryreborn"
    },
    {
      id: 3,
      icon: <FileCode className="h-6 w-6 text-purple-500" />,
      title: "International Recognition in Ethical Hacking",
      organization: "Global Security Community",
      year: "2020",
      description: "Received international recognition for contributions to ethical hacking and vulnerability research, establishing a reputation in the global cybersecurity community.",
    },
    {
      id: 4,
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Cyber Security Research - Malaysia Airlines",
      organization: "Malaysia Airlines",
      year: "2020",
      description: "Contracted to identify and address security vulnerabilities in Malaysia Airlines web applications. Successfully discovered and reported security flaws, recorded in the security hunter database under reference number BBP2020070100. Contracted by Izham Ismail.",
    },
    {
      id: 5,
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Custom Security Tool Development",
      organization: "Security Universe",
      year: "2021",
      description: "Developed specialized security assessment tools that have been adopted by professionals in the field for enhanced vulnerability detection and system hardening.",
      link: "http://www.securityuniverse.id"
    }
  ];

  return (
    <section id="experience" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              Professional Experience
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Key achievements and professional milestones
          </p>
        </div>

        <div className="relative border-l-2 border-cyan-500 pl-8 ml-4 md:ml-0 space-y-10">
          {achievements.map((achievement, index) => (
            <div 
              key={achievement.id} 
              className="relative"
            >
              <div className="absolute -left-12 p-2 bg-white dark:bg-gray-900 rounded-full border-2 border-cyan-500">
                {achievement.icon}
              </div>
              
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 relative z-10 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <div className="flex flex-wrap justify-between items-start mb-4">
                  <h3 className="text-xl font-bold pr-10">{achievement.title}</h3>
                  <div className="text-sm font-semibold px-3 py-1 bg-gradient-to-r from-cyan-50 to-blue-50 dark:from-cyan-900/30 dark:to-blue-900/30 text-cyan-700 dark:text-cyan-300 rounded-full">
                    {achievement.year}
                  </div>
                </div>
                
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  <span className="font-medium">{achievement.organization}</span>
                </p>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {achievement.description}
                </p>
                
                {achievement.link && (
                  <a 
                    href={achievement.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                  >
                    View Details
                    <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;