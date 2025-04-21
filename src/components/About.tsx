import React from 'react';
import { Cpu, Shield, Award, Code } from 'lucide-react';

const About: React.FC = () => {
  const certifications = [
    { id: 1, name: 'OSEP', description: 'Offensive Security Experienced Penetration Tester' },
    { id: 2, name: 'OSEE', description: 'Offensive Security Exploitation Expert' },
    { id: 3, name: 'OSCE', description: 'Offensive Security Certified Expert' },
    { id: 4, name: 'GXPN', description: 'GIAC Exploit Researcher and Advanced Penetration Tester' },
  ];

  return (
    <section id="about" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              About Me
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Cybersecurity professional with a passion for securing digital infrastructures
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-cyan-500 transform transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Shield className="mr-2 text-cyan-500" size={20} />
                Professional Background
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm Andri, a cybersecurity professional from Indonesia with experience dating back to 2012. 
                My expertise spans penetration testing, threat intelligence, and developing tailored security 
                solutions. Backed by advanced certifications, I tackle complex digital security challenges 
                with precision and creativity.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-500 transform transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Award className="mr-2 text-blue-500" size={20} />
                Notable Achievements
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                In 2019, I successfully identified and exploited security vulnerabilities in systems 
                belonging to the US Department of Defense (DC3), IBM, and other prominent organizations. 
                These achievements earned international recognition and marked significant milestones in my career.
              </p>
              <a 
                href="https://linktr.ee/youryreborn" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-500 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium"
              >
                View details →
              </a>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-purple-500 transform transition-transform hover:-translate-y-1">
              <h3 className="text-xl font-bold mb-2 flex items-center">
                <Code className="mr-2 text-purple-500" size={20} />
                Dedication to Security
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                I'm committed to strengthening digital defenses and raising awareness about cybersecurity 
                best practices. My approach combines technical expertise with a deep understanding of 
                threat actors' methodologies, enabling me to anticipate and mitigate security risks effectively.
              </p>
            </div>
          </div>

          <div>
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-t-4 border-cyan-500">
              <h3 className="text-xl font-bold mb-4 flex items-center">
                <Cpu className="mr-2 text-cyan-500" size={20} />
                Advanced Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div key={cert.id} className="flex items-start p-3 rounded-md bg-gray-50 dark:bg-gray-800 transition-all hover:shadow-md">
                    <div className="h-8 w-8 flex-shrink-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md flex items-center justify-center text-white font-bold text-sm">
                      {cert.id}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold">{cert.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{cert.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-gradient-to-r from-cyan-500 to-blue-500 p-6 rounded-lg shadow-md text-white">
              <blockquote className="italic font-medium">
                "Cybersecurity is not just a technical challenge, but a continuous pursuit of knowledge and adaptation in an evolving digital landscape."
              </blockquote>
              <div className="mt-4 text-sm font-medium">— Andri</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;