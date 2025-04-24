import React from 'react';
import { Shield, Lock, Search, Code } from 'lucide-react';

interface TeamMember {
  id: number;
  role: string;
  specialization: string;
  experience: string;
  imageUrl: string;
}

const Community: React.FC = () => {
  const teamMembers: TeamMember[] = [
    {
      id: 1,
      role: "Cybersecurity Intelligence",
      specialization: "Threat Analysis & Intelligence Gathering",
      experience: "8+ years",
      imageUrl: "https://i.ibb.co.com/j9ksh0QT/imageedit-7-4116316551.png"
    },
    {
      id: 2,
      role: "Digital Forensics Expert",
      specialization: "Malware Analysis & Incident Response",
      experience: "6+ years",
      imageUrl: "https://i.ibb.co.com/yry3DFW/Create-an-image-for-my-Instagram-profile-pwnforensic-The-theme-should-reflect-my-expertise-in-hackin.jpg"
    },
    {
      id: 3,
      role: "Penetration Tester",
      specialization: "Web & Mobile Application Security",
      experience: "7+ years",
      imageUrl: "https://i.ibb.co.com/Q30pH0fw/BC697-F8-F-2791-495-A-A322-EB1-B8-CFC8-FE5.jpg"
    },
    {
      id: 4,
      role: "Security Researcher",
      specialization: "Zero-day Vulnerability Research",
      experience: "5+ years",
      imageUrl: "https://i.ibb.co.com/fdppqq1H/47277287.jpg"
    }
  ];

  return (
    <section id="community" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              PwnOsec Cybersecurity
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Elite private bug bounty and security research community
          </p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-xl p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-cyan-500">About Our Community</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                PwnOsec is an exclusive community of elite security researchers and ethical hackers dedicated to 
                discovering and responsibly disclosing security vulnerabilities. Our members have contributed to 
                the security of major organizations worldwide.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-5 h-5 text-cyan-500 mr-2" />
                  <span>Private Bug Bounty Programs</span>
                </div>
                <div className="flex items-center">
                  <Lock className="w-5 h-5 text-cyan-500 mr-2" />
                  <span>Exclusive Member Access</span>
                </div>
                <div className="flex items-center">
                  <Search className="w-5 h-5 text-cyan-500 mr-2" />
                  <span>Advanced Research Projects</span>
                </div>
                <div className="flex items-center">
                  <Code className="w-5 h-5 text-cyan-500 mr-2" />
                  <span>Custom Security Tools</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
                <div className="relative w-full h-full">
                  <img 
                    src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg" 
                    alt="Community representation" 
                    className="w-full h-full object-cover"
                  />
                  <div 
                    className="absolute top-[20%] left-[35%] w-[30%] h-[20%]"
                    style={{
                      background: 'rgba(0,0,0,0.7)',
                      filter: 'blur(8px) contrast(0.5)',
                      mixBlendMode: 'multiply'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member) => (
            <div 
              key={member.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
            >
              <div className="relative">
                <div className="aspect-square overflow-hidden">
                  <div className="relative w-full h-full">
                    <img 
                      src={member.imageUrl} 
                      alt={member.role}
                      className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-300"
                    />
                    <div 
                      className="absolute top-[20%] left-[35%] w-[30%] h-[20%]"
                      style={{
                        background: 'rgba(0,0,0,0.7)',
                        filter: 'blur(8px) contrast(0.5)',
                        mixBlendMode: 'multiply'
                      }}
                    ></div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h4 className="font-bold text-lg">{member.role}</h4>
                  <p className="text-sm opacity-90">{member.experience}</p>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {member.specialization}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Interested in joining our community? Membership is by invitation only and requires demonstrated expertise in cybersecurity.
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md shadow hover:shadow-lg transition-all duration-300"
          >
            Contact for Membership
          </a>
        </div>
      </div>
    </section>
  );
};

export default Community;