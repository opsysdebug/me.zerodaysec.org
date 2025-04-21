import React, { useState } from 'react';
import { Shield, Code, Search, Server, Database, Webhook, Cpu, Lock } from 'lucide-react';

interface Skill {
  icon: React.ReactNode;
  name: string;
  description: string;
  level: number;
  category: 'offensive' | 'defensive' | 'intelligence';
}

const Expertise: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'offensive' | 'defensive' | 'intelligence'>('all');

  const skills: Skill[] = [
    {
      icon: <Shield size={24} />,
      name: 'Penetration Testing & Red Teaming',
      description: 'Identifying vulnerabilities through simulated attacks on networks, applications, and infrastructure.',
      level: 95,
      category: 'offensive'
    },
    {
      icon: <Code size={24} />,
      name: 'Reverse Engineering',
      description: 'Analyzing software, malware, and binaries to understand functionality and identify vulnerabilities.',
      level: 90,
      category: 'offensive'
    },
    {
      icon: <Search size={24} />,
      name: 'Threat Intelligence & Risk Analysis',
      description: 'Collecting and analyzing data to identify potential threats and vulnerabilities.',
      level: 85,
      category: 'intelligence'
    },
    {
      icon: <Server size={24} />,
      name: 'Infrastructure Security Auditing',
      description: 'Comprehensive assessment of critical infrastructure security posture.',
      level: 90,
      category: 'defensive'
    },
    {
      icon: <Database size={24} />,
      name: 'Custom Security Tool Development',
      description: 'Creating specialized tools to address specific security needs and challenges.',
      level: 80,
      category: 'offensive'
    },
    {
      icon: <Webhook size={24} />,
      name: 'Bug Bounty & Vulnerability Disclosure',
      description: 'Responsible disclosure of security vulnerabilities to organizations.',
      level: 95,
      category: 'offensive'
    },
    {
      icon: <Cpu size={24} />,
      name: 'Digital Forensics',
      description: 'Collecting, analyzing, and preserving digital evidence for investigations.',
      level: 85,
      category: 'defensive'
    },
    {
      icon: <Lock size={24} />,
      name: 'Cybersecurity Intelligence',
      description: 'Gathering, analyzing and distributing intelligence about threats and vulnerabilities.',
      level: 90,
      category: 'intelligence'
    }
  ];

  const filteredSkills = activeFilter === 'all' 
    ? skills 
    : skills.filter(skill => skill.category === activeFilter);

  return (
    <section id="expertise" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              Area of Expertise
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Key skills and specializations in the cybersecurity domain
          </p>
        </div>

        <div className="flex justify-center mb-8">
          <div className="inline-flex bg-gray-100 dark:bg-gray-800 p-1 rounded-lg">
            {['all', 'offensive', 'defensive', 'intelligence'].map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter as any)}
                className={`px-4 py-2 text-sm font-medium rounded-md transition-all ${
                  activeFilter === filter
                    ? 'bg-white dark:bg-gray-700 shadow-sm text-cyan-600 dark:text-cyan-400'
                    : 'text-gray-700 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400 mr-3">
                    {skill.icon}
                  </div>
                  <h3 className="text-lg font-bold">{skill.name}</h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{skill.description}</p>
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">
                  Expertise: {skill.level}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise;