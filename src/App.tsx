import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Code, Database, Brain, Send, FileText } from 'lucide-react';
import prof_image from './Portfolio_Pics.jpg'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:devajin12@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}`;
  };

  const skills = {
    'Data Structures & Algorithms': [
      'Array & String Manipulation', 'Tree Traversal', 'Graph Algorithms', 'Dynamic Programming'
    ],
    'Frontend Development': [
      'React.js', 'JavaScript', 'Tailwind CSS', 'HTML5/CSS3'
    ],
    'Backend Development': [
      'NodeJS', 'Django', 'Django REST Framework', 'API Design', 'Authentication'
    ],
    'Database': [
      'PostgreSQL', 'MongoDB', 'SQL', 'Database Design'
    ],
    'Additional Skills': [
      'C', 'C++', 'Git', 'GitHub'
    ]
  };

  const projects = [
    {
      title: 'SevaMitra',
      description: 'Full-stack Application for helping blue-collar workers find a job',
      tech: ['React', 'NodeJS', 'PostgreSQL', 'Socket.io', 'ExpressJS']
    },
    {
      title: 'FlatMate',
      description: 'Application for users to search a roommate & find a nice place to live along',
      tech: ['ReactJS', 'Node.js', 'PostgreSQL', 'Socket.io', 'NeonDB']
    },
    {
      title: 'Scriptify',
      description: 'A MarketPlace Platform for Developers to sell their projects online',
      tech: ['Python', 'Django', 'DjangoRestFramework', 'PostgreSQL', 'Bootstrap']
    },
    {
      title: 'ChatWithMe',
      description: 'An online platform for friends relatives & family members to streamline real time chat with each other along with images and files',
      tech: ['ReactJS', 'MongoDB', 'Node.js', 'TailwindCSS', 'Socket.io']
    },
    {
      title: 'Memogram',
      description: 'An online platform for friends relatives & family members to share memories with each other',
      tech: ['ReactJS', 'MongoDB', 'Node.js', 'TailwindCSS']
    },
    {
      title: 'CollegeERP',
      description: 'CollegeERP a College Management App that manages student enrollment, grades, attendance, faculty data, and website content like banners and images.',
      tech: ['ReactJS', 'PostgreSQL', 'Node.js', 'ExpressJS']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-purple-900 to-indigo-900">
        <div className="container mx-auto px-8 py-24">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">Ajinkya Muley</h1>
              <p className="text-2xl mb-8 text-purple-200">Full Stack Developer</p>
              <div className="flex items-center space-x-4 mb-8 text-purple-200 hover:text-white transition-colors">
                <Mail className="w-6 h-6" />
                <span>avm121104@gmail.com</span>
              </div>
              <div className="flex items-center space-x-4 text-purple-200 hover:text-white transition-colors">
                <Phone className="w-6 h-6" />
                <span>+91 8780531901</span>
              </div>
              <div className="flex space-x-6 mt-8">
                <a href="https://github.com/AjinkyaMuley" className="text-purple-200 hover:text-white transition-transform hover:scale-110">
                  <Github className="w-8 h-8" />
                </a>
                <a href="https://www.linkedin.com/in/ajinkya-muley-6bb205272/" className="text-purple-200 hover:text-white transition-transform hover:scale-110">
                  <Linkedin className="w-8 h-8" />
                </a>
              </div>
              <div className="flex space-x-6 mt-10">
                <a
                  href="https://drive.google.com/file/d/1dhjr8GEGr4cCJtiwhsywlCbDYqd7enFv/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Resume
                </a>
                <a
                  href="https://drive.google.com/uc?export=download&id=1dhjr8GEGr4cCJtiwhsywlCbDYqd7enFv"
                  download
                  className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-purple-400 hover:border-purple-300 text-purple-200 hover:text-white rounded-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  Download Resume
                </a>
              </div>
            </div>
            <div className="md:w-1/2">
              <div className="transform transition-transform duration-500 hover:scale-105">
                <img
                  src={prof_image}
                  alt="Profile"
                  className="rounded-full w-72 h-72 object-cover mx-auto border-4 border-purple-300 shadow-xl hover:border-purple-200 transition-colors duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-24 bg-gray-800" id="skills">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-200">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {Object.entries(skills).map(([category, skillList]) => (
              <div
                key={category}
                className="bg-gray-900 rounded-lg p-8 shadow-xl border border-purple-900 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-purple-700"
              >
                <div className="flex items-center mb-6">
                  {category.includes('Data') ? (
                    <Brain className="w-7 h-7 text-purple-400 mr-3" />
                  ) : category.includes('Database') ? (
                    <Database className="w-7 h-7 text-purple-400 mr-3" />
                  ) : (
                    <Code className="w-7 h-7 text-purple-400 mr-3" />
                  )}
                  <h3 className="text-2xl font-semibold text-purple-200">{category}</h3>
                </div>
                <ul className="space-y-3">
                  {skillList.map((skill) => (
                    <li key={skill} className="flex items-center text-gray-300 hover:text-purple-200 transition-colors duration-200">
                      <span className="w-2 h-2 bg-purple-400 rounded-full mr-3"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-24 bg-gray-900" id="projects">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-200">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project) => (
              <div
                key={project.title}
                className="bg-gray-800 rounded-lg shadow-xl overflow-hidden border border-purple-900 transition-all duration-300 hover:shadow-2xl hover:scale-105 hover:border-purple-700"
              >
                <div className="p-8">
                  <h3 className="text-2xl font-semibold mb-4 text-purple-200">{project.title}</h3>
                  <p className="text-gray-400 mb-6">{project.description}</p>
                  <div className="flex flex-wrap gap-3">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-1 bg-purple-900 text-purple-200 rounded-full text-sm transition-colors duration-300 hover:bg-purple-800"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-800" id="contact">
        <div className="container mx-auto px-8">
          <h2 className="text-4xl font-bold text-center mb-16 text-purple-200">Contact Me</h2>
          <div className="max-w-xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-lg font-medium text-purple-200 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 p-3"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-medium text-purple-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 p-3"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-medium text-purple-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md bg-gray-700 border-gray-600 text-white shadow-sm focus:border-purple-500 focus:ring-purple-500 transition-all duration-300 p-3"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-lg font-medium text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 transition-all duration-300 hover:scale-105"
              >
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;