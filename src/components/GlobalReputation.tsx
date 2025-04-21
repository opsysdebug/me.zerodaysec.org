import React from 'react';
import { Globe, Flag, Award, Users } from 'lucide-react';

const GlobalReputation: React.FC = () => {
  const conferences = [
    { country: 'United Kingdom', flag: '🇬🇧' },
    { country: 'United States', flag: '🇺🇸' },
    { country: 'Russia', flag: '🇷🇺' },
    { country: 'Singapore', flag: '🇸🇬' },
  ];

  return (
    <section id="reputation" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              Global Reputation
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Recognition in the international cybersecurity community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6">
              <Globe className="h-12 w-12 text-white mb-4" />
              <h3 className="text-2xl font-bold text-white">International Recognition</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                As an ethical hacker from Indonesia, I've gained recognition in the international 
                hacking community and have been invited as a speaker at security conferences in 
                multiple countries. My contributions to the cybersecurity field have helped various 
                organizations strengthen their digital defenses.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {conferences.map((conference, index) => (
                  <div 
                    key={index}
                    className="flex items-center p-3 bg-gray-50 dark:bg-gray-800 rounded-lg"
                  >
                    <div className="text-2xl mr-3">{conference.flag}</div>
                    <span className="font-medium">{conference.country}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-cyan-500">
              <div className="flex items-start">
                <Flag className="h-8 w-8 text-cyan-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Representing Indonesia</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Proud to represent Indonesia in the global cybersecurity arena, showing that 
                    talent and expertise in this field know no geographical boundaries.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-blue-500">
              <div className="flex items-start">
                <Award className="h-8 w-8 text-blue-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Personal vs. Institutional Recognition</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    While my contributions are increasingly recognized within Indonesia, 
                    acknowledgment tends to come more from individuals than government institutions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border-l-4 border-purple-500">
              <div className="flex items-start">
                <Users className="h-8 w-8 text-purple-500 mr-4 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold mb-2">Community Engagement</h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    Actively involved in nurturing the next generation of cybersecurity professionals 
                    through mentorship, knowledge sharing, and community initiatives.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalReputation;