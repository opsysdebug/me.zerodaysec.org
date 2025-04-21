import React from 'react';
import { Instagram, Linkedin, ExternalLink, Github } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              Get In Touch
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            Connect with me for consultations, collaborations, or inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <a 
            href="https://instagram.com/youryreborn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:border-pink-500 border border-transparent"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-pink-100 dark:bg-pink-900/30">
                <Instagram className="h-8 w-8 text-pink-600 dark:text-pink-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Instagram</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">@youryreborn</p>
            <span className="inline-flex items-center text-sm font-medium text-pink-600 dark:text-pink-400">
              Follow on Instagram <ExternalLink size={14} className="ml-1" />
            </span>
          </a>

          <a 
            href="https://www.linkedin.com/in/securewithandri/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:border-blue-500 border border-transparent"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900/30">
                <Linkedin className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">LinkedIn</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">linkedin.com/in/securewithandri</p>
            <span className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400">
              Connect on LinkedIn <ExternalLink size={14} className="ml-1" />
            </span>
          </a>

          <a 
            href="https://github.com/odaysec" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:border-purple-500 border border-transparent"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900/30">
                <Github className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">GitHub</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">github.com/odaysec</p>
            <span className="inline-flex items-center text-sm font-medium text-purple-600 dark:text-purple-400">
              View Projects <ExternalLink size={14} className="ml-1" />
            </span>
          </a>

          <a 
            href="https://linktr.ee/youryreborn" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1 hover:border-green-500 border border-transparent"
          >
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-green-100 dark:bg-green-900/30">
                <svg 
                  className="h-8 w-8 text-green-600 dark:text-green-400" 
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.953 15.066c-.08 0-.16-.02-.232-.06-.129-.071-.232-.19-.283-.33l-2.026-5.509c-.061-.181-.061-.373.04-.544a.66.66 0 0 1 .42-.303.6.6 0 0 1 .522.071c.15.111.242.282.262.473l1.661 4.51 1.591-4.51c.02-.181.101-.343.242-.443a.594.594 0 0 1 .513-.04c.171.06.302.201.353.383.04.161.03.343-.051.494l-2.036 5.499a.727.727 0 0 1-.242.242.606.606 0 0 1-.302.06l-.232-.002zm9.34.186c.414 0 .808-.091 1.172-.264.353-.181.666-.423.899-.745l.04-.05a.237.237 0 0 0-.01-.303.229.229 0 0 0-.303-.02l-.051.04a2.053 2.053 0 0 1-.706.564 1.97 1.97 0 0 1-.929.222c-.605.02-1.141-.252-1.443-.695a1.551 1.551 0 0 1-.232-.786h3.883c.06 0 .121-.02.171-.06a.257.257 0 0 0 .091-.151.26.26 0 0 0 .01-.101c-.01-.202-.04-.393-.091-.585a2.535 2.535 0 0 0-.302-.615 2.345 2.345 0 0 0-1.232-.887 2.376 2.376 0 0 0-.797-.131c-.212 0-.424.02-.626.071-.383.101-.736.282-1.04.534a2.38 2.38 0 0 0-.726 1.09c-.071.232-.101.474-.101.726s.03.484.101.716a2.38 2.38 0 0 0 .282.615c.272.383.635.685 1.071.867.454.191.969.262 1.473.222a3.21 3.21 0 0 0 1.06-.181c.333-.121.646-.312.919-.544l.101-.091a.226.226 0 0 0 .04-.252.223.223 0 0 0-.242-.121.21.21 0 0 0-.111.04l-.091.081a2.597 2.597 0 0 1-.807.474c-.312.111-.645.161-.989.161-.444.02-.888-.091-1.272-.323a1.773 1.773 0 0 1-.686-.695l-.04-.071h4.64l.01-.002zm-3.824-1.967c.03-.222.111-.444.222-.635.101-.181.242-.343.404-.464.333-.242.736-.363 1.151-.323.171 0 .333.03.494.091a1.4 1.4 0 0 1 .454.252c.242.201.424.474.504.786h-3.229z" />
                </svg>
              </div>
            </div>
            <h3 className="text-lg font-bold mb-2">Linktree</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">linktr.ee/youryreborn</p>
            <span className="inline-flex items-center text-sm font-medium text-green-600 dark:text-green-400">
              View Links <ExternalLink size={14} className="ml-1" />
            </span>
          </a>
        </div>

        <div className="mt-12 bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <h3 className="text-2xl font-bold mb-4">Ready to Secure Your Digital Assets?</h3>
              <p className="text-gray-600 dark:text-gray-400">
                Whether you need consultation on cybersecurity strategy, penetration testing services, 
                or custom security solutions, I'm here to help protect your digital infrastructure.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <a 
                href="https://www.linkedin.com/in/securewithandri/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium rounded-md shadow hover:shadow-lg transition-all duration-300 text-center"
              >
                Connect on LinkedIn
              </a>
              <a 
                href="mailto:contact@securityuniverse.id" 
                className="px-8 py-3 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 font-medium rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 text-center"
              >
                Send Email
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;