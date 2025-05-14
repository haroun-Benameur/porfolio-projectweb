import { FaGithub } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: "Proxym-IT Internship - Git & Elasticsearch Analytics",
      description: "Developed an advanced analytics system integrating GitHub with Elasticsearch for project progress tracking. Implemented fuzzy queries and semantic search capabilities to enhance data analysis and performance metrics visualization. Created detailed performance curves and statistical reports for development operations.",
      technologies: ["Git", "Elasticsearch", "Data Analytics", "Fuzzy Search", "Performance Metrics", "Statistical Analysis"],
      github: "https://github.com/haroun-Benameur/proxym_project/tree/main/Desktop/Stage-Proxym-2024/gitPython/gitTerminal"
    },
    {
      title: "Car Service Appointment System",
      description: "A comprehensive automotive service booking platform enabling clients to schedule maintenance appointments at car dealerships. Features include intelligent time slot management, service type selection, and automated scheduling system for optimal resource utilization.",
      technologies: ["JavaScript", "React", "Bootstrap", "Django", "Redux"],
      github: "https://github.com/haroun-Benameur/Appointment-Service-Car"
    },
    {
      title: "Gestion-pfes - Classroom Distribution System",
      description: "Backend development for an intelligent classroom distribution system using genetic algorithms. Collaborated on a team project to optimize classroom allocation with real-time scheduling and conflict resolution. Implemented RESTful APIs and database management using Django/Python.",
      technologies: ["Python", "Django", "REST API", "Genetic Algorithm", "Team Collaboration"],
      github: "https://github.com/walaoueslati/Gestion-pfes"
    },
   
    {
      title: "ISSATSO Department Management",
      description: "A comprehensive department management system for classroom reservations by professors with real-time notifications via WebSockets. Department heads can manage Claasroom bookings according to specific time slots.",
      technologies: ["JavaScript", "React", "Redux", "Spring Boot", "WebSocket", "Bootstrap"],
      github: "https://github.com/haroun-Benameur/ISSATSO-DEPARTMENT-FULL"
    },
    {
      title: "E-Commerce Platform",
      description: "An e-commerce solution featuring product catalog management, shopping cart functionality, and user-friendly product browsing. Implemented secure user authentication and intuitive product search with category filtering.",
      technologies: ["JavaScript", "React", "Django"],
      github: "https://github.com/haroun-Benameur/E-Commerce"
    },
    {
      title: "Employment Platform",
      description: "A comprehensive employment platform built with TypeScript, featuring job listings, candidate management, and application tracking.",
      technologies: ["TypeScript", "React", "Node.js", "PostgreSQL"],
      github: "https://github.com/haroun-Benameur/Employment-Platform"
    },
    {
      title: "Hotel Management System",
      description: "A comprehensive hotel management solution with room booking, staff management, and billing features.",
      technologies: ["TypeScript", "React", "Spring Boot", "MySQL"],
      github: "https://github.com/haroun-Benameur/-Hotel-Management-System"
    },

   
    
  ]

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-textPrimary mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-tertiary rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">{project.title}</h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary text-secondary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-textSecondary hover:text-secondary transition-colors"
                >
                  <FaGithub className="mr-2" />
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects 