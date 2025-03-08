import React from 'react';
import { Github, Linkedin } from 'lucide-react';

const ContactUs = () => {
  const team = [
    {
      name: 'Adrija A',
      role: 'Frontend/Backend Developer',
      github: 'adrija-ani',
      githubUrl: 'https://github.com/adrija-ani',
      linkedin: 'Adrija A',
      linkedinUrl: 'https://linkedin.com/in/adrija-ani'
    },
    {
      name: 'Adithyan S Pillai',
      role: 'Backend/AI Developer',
      github: 'XXOriginalXX',
      githubUrl: 'https://github.com/XXOriginalXX',
      linkedin: 'Adithyan S Pillai',
      linkedinUrl: 'https://linkedin.com/in/xxoriginalxx'
    },
    {
      name: 'Thushar Vijay',
      role: 'Blockchain/AI Developer',
      github: 'thusharvijay',
      githubUrl: 'https://github.com/thusharvijay',
      linkedin: 'Thushar Vijay',
      linkedinUrl: 'https://linkedin.com/in/thusharvijay'
    },
    {
      name: 'S V Dhanya',
      role: 'Frontend/Blockchain',
      github: 'Ayna184',
      githubUrl: 'https://github.com/Ayna184',
      linkedin: 'Dhanya Vinod',
      linkedinUrl: 'https://linkedin.com/in/dhanya-vinod'
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400 mb-4">
            Meet Our Team
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our dedicated team of developers
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.github}
              className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-colors"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-gray-400 mb-4">{member.role}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={member.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactUs;