import { motion } from 'framer-motion'
import { FaGithub } from 'react-icons/fa'

const projects = [
  {
    title: 'SmartPath',
    subtitle: 'Intelligent Learning Platform',
    description:
      'Design and development of an intelligent educational platform featuring AI chatbots and voice tutors enhanced with EVA and personas to improve response relevance and performance, integrating real-time speech recognition and text generation.',
    technologies: ['Next.js', 'Tailwind CSS', 'Django REST Framework', 'WebSockets', 'Exa', 'LiveKit', 'Deepgram', 'Cerebras LLM'],
    github: 'https://github.com/haroun-Benameur/SmartPath-EducationPlatform',
  },
  {
    title: 'IssatSo',
    subtitle: 'Classroom Reservation Management System',
    description:
      'Web application enabling department heads to manage classroom reservations for professors with specific time slots. Professors can submit reservation requests and receive real-time notifications through WebSockets.',
    technologies: ['React', 'Bootstrap', 'Redux', 'Spring Boot', 'PostgreSQL', 'WebSockets'],
    github: 'https://github.com/haroun-Benameur/ISSATSO-DEPARTMENT-FULL',
  },
  {
    title: 'HireSphere',
    subtitle: 'Employment Platform',
    description:
      'Design and development of a comprehensive recruitment platform enabling job posting management, candidate tracking, and monitoring of the entire hiring process with a full MERN stack.',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB'],
    github: 'https://github.com/haroun-Benameur/-Employment-Platform.git',
  },
  {
    title: 'CarCare App',
    subtitle: 'Automotive Appointment Scheduling',
    description:
      'Scheduling platform for automotive dealerships allowing clients to book services online with integrated time-slot management. Improves customer experience while optimizing workshop resource allocation.',
    technologies: ['React', 'Redux', 'Django', 'PostgreSQL'],
    github: 'https://github.com/haroun-Benameur/Appointment-Service-Car',
  },
  {
    title: 'GestionPFE',
    subtitle: 'Thesis Defense Management System',
    description:
      'Backend development for an intelligent scheduling system allocating classrooms for thesis defenses. A genetic algorithm optimized room distribution while considering teacher availability and constraints, exposed via REST API.',
    technologies: ['Python', 'Django', 'REST API', 'Genetic Algorithm', 'React', 'Redux', 'SQLite'],
    github: 'https://github.com/walaoueslati/Gestion-pfes',
  },
  {
    title: 'Brain Tumor Detection',
    subtitle: 'Computer Vision Project',
    description:
      'Development of a CNN model for automatic brain tumor detection from MRI images. Implemented preprocessing and data augmentation, and compared a custom CNN with MobileNetV2 transfer learning to improve classification accuracy.',
    technologies: ['Python', 'TensorFlow', 'Keras', 'OpenCV', 'NumPy', 'MobileNetV2'],
    github: '#',
  },
]

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <h2 className="section-title">Projects</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                className="card p-6 flex flex-col justify-between group hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300"
              >
                {/* Top */}
                <div>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-bold text-textPrimary group-hover:text-secondary transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-secondary/80 text-xs font-medium mt-0.5">{project.subtitle}</p>
                    </div>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-textSecondary hover:text-secondary transition-colors ml-2 flex-shrink-0"
                      aria-label={`GitHub – ${project.title}`}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>

                  <p className="text-textSecondary text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                </div>

                {/* Tech badges */}
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-primary text-secondary border border-secondary/20 rounded-md"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
