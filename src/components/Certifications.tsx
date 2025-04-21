import React, { useState } from 'react';
import { Award, ExternalLink, X } from 'lucide-react';

interface Certificate {
  id: number;
  name: string;
  organization: string;
  issueDate: string;
  credentialUrl: string;
  credentialId?: string;
}

const Certifications: React.FC = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const certificates: Certificate[] = [
    {
      id: 1,
      name: "Certificate of Appreciation for Cybersecurity Contribution",
      organization: "Provincial Government of DKI Jakarta",
      issueDate: "Jan 2024",
      credentialUrl: "https://soc.jakarta.go.id//certificate/view?token=$2y$13$qAdCfcD9FX4p9AEUxawhpO3NGNVfz7m5pDdBFYyOyGmkKRpoa8nxO"
    },
    {
      id: 2,
      name: "Ethical Vulnerability Disclosure in Collaboration with ACP",
      organization: "Axioo Class Program (ACP)",
      issueDate: "Jan 2020",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 3,
      name: "Menjawab Tantangan Kapabilitas Siber Indonesia",
      organization: "National Cyber and Crypto Agency (Indonesia)",
      issueDate: "Dec 2020",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 4,
      name: "Certificate of Completion: Strengthen Your Cybersecurity Posture with Blue Team Operation",
      organization: "PT. Spentera",
      issueDate: "Sep 2021",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 5,
      name: "Talkshow Daring Kampanye Awareness Kita dan UMKM Go Digital",
      organization: "National Cyber and Crypto Agency (Indonesia)",
      issueDate: "Oct 2021",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 6,
      name: "Certificate of Completion: Kick Start Your Journey and Career in Cybersecurity",
      organization: "PT. Spentera",
      issueDate: "Oct 2021",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 7,
      name: "Edukasi Penilaian Kerentanan Siber (Offline)",
      organization: "National Cyber and Crypto Agency (Indonesia)",
      issueDate: "Nov 2021",
      credentialId: "SERT.8443/BSSN/D4/PP.01.07/11/2021"
    },
    {
      id: 8,
      name: "Certificate of Appreciation for Cybersecurity Contribution in (DPR RI)",
      organization: "The House of Representatives, Republic of Indonesia (DPR RI)",
      issueDate: "Nov 2023",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 9,
      name: "Certificate of Appreciation for Cybersecurity Contribution",
      organization: "Information and Communication Technology Division of the Indonesian National Police",
      issueDate: "Jun 2024",
      credentialUrl: "https://tte.polri.go.id/preview/file/9c4455cd-fa84-4e72-a072-f51335dcca59"
    },
    {
      id: 10,
      name: "Ethical Vulnerability Disclosure in Collaboration with KPK",
      organization: "Corruption Eradication Commission Indonesia",
      issueDate: "Jul 2024",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 11,
      name: "Certificate of Appreciation for Cybersecurity Contribution in East Java",
      organization: "East Java provincial Government",
      issueDate: "Aug 2024",
      credentialUrl: "https://www.linkedin.com/in/securewithandri/details/certifications/"
    },
    {
      id: 12,
      name: "Security Management and Governance",
      organization: "Royal Holloway, University of London",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/V736MBIP8KRF"
    },
    {
      id: 13,
      name: "Security Governance & Compliance",
      organization: "University of California, Irvine - The Paul Merage School of Business",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/C9VAZ2AIJH1C"
    },
    {
      id: 14,
      name: "Introduction to Cybersecurity & Cyberattacks V3",
      organization: "IBM",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.credly.com/badges/a831ebb1-8c47-4452-aeb1-70216f8b07f4"
    },
    {
      id: 15,
      name: "Incident Response and Digital Forensics",
      organization: "IBM",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.credly.com/badges/e20ae823-dcc1-417d-9027-b61f38e9b634/public_url"
    },
    {
      id: 16,
      name: "Ciso Introduction to Cybersecurity",
      organization: "CISO",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.credly.com/badges/be7be59b-e0f3-454e-8e0b-57bc73ca5d89"
    },
    {
      id: 17,
      name: "CS 647: Cybersecurity and Secure Software Design. (2024)",
      organization: "Ball State University",
      issueDate: "Nov 2024",
      credentialUrl: "https://www.coursera.org/account/accomplishments/verify/TP2GLFDF11MW"
    },
    {
      id: 18,
      name: "Offensive Security Experienced Penetration Tester (OSEP)",
      organization: "Offensive Security",
      issueDate: "Aug 2023",
      credentialUrl: "https://www.credential.net/profile/andri/wallet"
    },
    {
      id: 19,
      name: "GIAC Exploit Researcher and Advanced Penetration Tester (GXPN)",
      organization: "GIAC",
      issueDate: "Jul 2023",
      credentialUrl: "https://www.credly.com/badges/1234567"
    },
    {
      id: 20,
      name: "Offensive Security Certified Expert (OSCE)",
      organization: "Offensive Security",
      issueDate: "Jun 2023",
      credentialUrl: "https://www.credential.net/profile/andri/wallet"
    },
    {
      id: 21,
      name: "Offensive Security Exploitation Expert (OSEE)",
      organization: "Offensive Security",
      issueDate: "May 2023",
      credentialUrl: "https://www.credential.net/profile/andri/wallet"
    }
  ];

  const filteredCertificates = certificates
    .filter(cert => 
      cert.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      cert.organization.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => new Date(b.issueDate).getTime() - new Date(a.issueDate).getTime());

  return (
    <section id="certifications" className="py-16 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">
            <span className="inline-block relative">
              Professional Certifications
              <span className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500"></span>
            </span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            Industry-recognized certifications and achievements
          </p>

          <div className="relative max-w-xl mx-auto">
            <input
              type="text"
              placeholder="Search certificates..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              >
                <X size={16} />
              </button>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCertificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg transform hover:-translate-y-1"
            >
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="p-2 rounded-md bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400">
                    <Award className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-bold ml-3 line-clamp-2">{cert.name}</h3>
                </div>
                
                <div className="space-y-2 mb-4">
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Issuer:</span> {cert.organization}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    <span className="font-medium">Issued:</span> {cert.issueDate}
                  </p>
                  {cert.credentialId && (
                    <p className="text-gray-600 dark:text-gray-400">
                      <span className="font-medium">ID:</span> {cert.credentialId}
                    </p>
                  )}
                </div>

                {cert.credentialUrl && (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 transition-colors"
                  >
                    Verify Certificate <ExternalLink size={16} className="ml-1" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredCertificates.length === 0 && (
          <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
            No certificates found matching your search.
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;