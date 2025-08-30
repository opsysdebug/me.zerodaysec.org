import React from 'react';
import { FileCode, Award, ExternalLink, Shield } from 'lucide-react';

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
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Cyber Security Intelligence",
      organization: "Private Company",
      year: "Jul 2022 - Jun 2025",
      description: "In my role as a Cyber Security Intelligence professional, I am responsible for designing and developing cutting-edge security tools that are unprecedented globally. My primary focus is to strengthen and advance cybersecurity technology within the Republic of Indonesia, enhancing the resilience of our national technology systems. By prioritizing sophisticated and innovative solutions, I work to establish a robust security foundation capable of withstanding evolving cyber threats. This role involves direct service to the nation, where I am entrusted with critical assignments that emphasize safeguarding Indonesia's digital infrastructure and sensitive information. My work extends into research and development efforts aimed at boosting our country's cyber defense capabilities, creating a secure technological ecosystem that can withstand emerging risks. This commitment not only aims to protect digital assets but also to uphold the sovereignty and resilience of Indonesia's digital landscape. Through this position, I am privileged to contribute to Indonesia's vision of a secure digital future and play a vital role in the collective effort to enhance our country's technological and information security at both national and global levels.",
    },
    {
      id: 2,
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Cybersecurity Intern",
      organization: "Malaysia Airlines",
      year: "Jul 2020 - Dec 2020",
      description: "6-Month Security Contract (Remote/WFH) - Engaged in a six-month contract with Malaysia Airlines to identify and remediate security vulnerabilities within their web applications. Successfully discovered and reported multiple security flaws, which were officially documented in the Security Hunter database under reference number BBP2020070100. Client: Malaysia Airlines (contracted by Izham Ismail). Key Skills Applied: Penetration Testing, Vulnerability Assessment, and Vulnerability Research.",
    },
    {
      id: 3,
      icon: <Award className="h-6 w-6 text-red-500" />,
      title: "Cybersecurity Analyst & Cybercrime Investigator",
      organization: "Central Java Regional Police",
      year: "Jun 2020 - Aug 2021",
      description: "Dual-role engagement with the Central Java Regional Police spanning 15 months across two distinct positions. Initially served as Cybersecurity Analyst (Jun 2020 - Jun 2021) focusing on vulnerability assessment and security protocol enhancement, followed by Cybercrime Investigator role (Jun 2021 - Aug 2021) handling complex cybercrime cases in the digital era.",
    },
    {
      id: 4,
      icon: <Award className="h-6 w-6 text-green-500" />,
      title: "Software Protection Engineer",
      organization: "PT.Kreon Gemscool Indonesia",
      year: "2015",
      description: "Worked as a Reverse Engineer specializing in creating D3D menus, game exploitation, and penetration testing for beta-stage games. Conducted reverse engineering processes to identify vulnerabilities, develop custom tools, and enhance system security. Collaborated with clients such as PT. Kreon Gemscool Indonesia to ensure their games were thoroughly tested against potential exploits and security risks. Delivered actionable insights and solutions to improve the robustness of gaming systems and maintain integrity during pre-release phases.",
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
                
                {/* Special formatting for Malaysia Airlines entry */}
                {achievement.id === 2 && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                        Contract Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Client:</span> Malaysia Airlines
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Duration:</span> 6 months (Remote/WFH)
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Reference:</span> BBP2020070100
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Role:</span> Security Researcher
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Focus:</span> Web Application Security
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Work Type:</span> Vulnerability Assessment
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Key Skills Applied:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Penetration Testing, Vulnerability Assessment, Vulnerability Research
                      </p>
                    </div>
                    
                    <div className="bg-green-50 dark:bg-green-900/20 p-3 rounded-lg">
                      <p className="text-sm font-medium text-green-700 dark:text-green-300 mb-1">
                        Contract Authority:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Contracted by Izham Ismail
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Special formatting for Central Java Regional Police entry */}
                {achievement.id === 3 && (
                  <div className="mt-4 space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                        <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                          Cybersecurity Analyst
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Jun 2020 - Jun 2021 (1 yr 1 mo)
                        </p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Vulnerability assessment and mitigation</li>
                          <li>• Security protocol enhancement</li>
                          <li>• Digital infrastructure strengthening</li>
                        </ul>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
                          Contracted by: Kombes Pol Muhammad Endro, S.I.K., M.H.
                        </p>
                      </div>
                      
                      <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                        <h4 className="font-bold text-red-700 dark:text-red-300 mb-2">
                          Cybercrime Investigator
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                          Jun 2021 - Aug 2021 (3 mos)
                        </p>
                        <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                          <li>• Cross-sector coordination with forensics teams</li>
                          <li>• Digital evidence collection and analysis</li>
                          <li>• Cybersecurity policy recommendations</li>
                        </ul>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Key Skills Applied:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Security Research, Cyber Security Risk Assessment, Digital Forensics, 
                        Cyber Operations, Information Security Analysis, Cybercrime Investigation
                      </p>
                    </div>
                  </div>
                )}
                
                {/* Special formatting for Cyber Security Intelligence entry */}
                {achievement.id === 1 && (
                  <div className="mt-4 space-y-4">
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg">
                      <h4 className="font-bold text-blue-700 dark:text-blue-300 mb-2">
                        Contract Details
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Client:</span> <span className="bg-gray-800 text-gray-800 dark:bg-gray-200 dark:text-gray-200 px-2 py-1 rounded">███████</span>
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Duration:</span> 3 years (On-site)
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Reference:</span> AN/0B208301740319
                          </p>
                        </div>
                        <div>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Role:</span> Cyber Security Intelligence
                          </p>
                          <p className="text-gray-600 dark:text-gray-400 mb-1">
                            <span className="font-medium">Focus:</span> National Security Technology
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            <span className="font-medium">Work Type:</span> Full-time
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-gray-50 dark:bg-gray-800/50 p-3 rounded-lg">
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                        Key Skills Applied:
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        CSI Confidentials, Confidentials, Confidentials
                      </p>
                    </div>
                    
                    <div className="bg-red-50 dark:bg-red-900/20 p-3 rounded-lg">
                      <p className="text-sm font-medium text-red-700 dark:text-red-300 mb-1">
                        Deputi VI (Confidentials):
                      </p>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Jul 2022 - Jun 2025 · 3 yrs
                      </p>
                    </div>
                  </div>
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