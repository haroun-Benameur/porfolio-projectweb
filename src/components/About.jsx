import { motion } from 'framer-motion'

const skillCategories = [
  {
    category: 'Languages',
    skills: ['JavaScript', 'TypeScript', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Frontend',
    skills: ['React', 'Next.js', 'Angular', 'Tailwind CSS', 'Bootstrap'],
  },
  {
    category: 'State & Data Management',
    skills: ['Redux', 'Zustand', 'TanStack Query'],
  },
  {
    category: 'Backend',
    skills: ['Spring Boot', 'FastAPI', 'Django', 'Django REST Framework', 'Express.js'],
  },
  {
    category: 'Databases',
    skills: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    category: 'AI & Data',
    skills: ['LangChain', 'LangGraph', 'RAG', 'LLM', 'FinBERT', 'Chronos', 'TensorFlow', 'Keras', 'OpenCV', 'Pandas', 'NumPy'],
  },
  {
    category: 'Real-Time & Messaging',
    skills: ['WebSocket', 'Kafka'],
  },
  {
    category: 'DevOps & Cloud',
    skills: ['Docker', 'Docker Compose', 'Azure VM', 'Jenkins'],
  },
  {
    category: 'Monitoring & Observability',
    skills: ['Prometheus', 'Grafana', 'Langfuse', 'Spring Boot Actuator', 'Kibana'],
  },
  {
    category: 'Search & Indexing',
    skills: ['Elasticsearch'],
  },
  {
    category: 'Dev Tools',
    skills: ['Git', 'GitHub', 'Postman'],
  },
]

const education = [
  {
    degree: 'Engineering Degree – Software Engineering',
    school: 'ISSATSO – Institut Supérieur des Sciences Appliquées et de Technologie de Sousse',
    period: '2023 – 2026',
    detail: 'Focused on full-stack development, AI integration, and project-based learning.',
  },
  {
    degree: 'Integrated Preparatory Cycle – MPI',
    school: 'ISSATSO',
    period: '2021 – 2023',
    detail: 'Mathematics, Physics, and Computer Science track.',
  },
  {
    degree: 'Baccalaureate – Technical Sciences (High Honors)',
    school: 'Lycée Mahmoud Mesaadi, Nabeul',
    period: '2021',
    detail: 'Top grades with excellence in mathematics and physics.',
  },
]

const associations = [
  {
    role: 'Vice-President',
    org: 'NATEG ISSATSO (North American Tunisian Engineers Group)',
    detail: 'Organized events and hackathons; enhanced public speaking and leadership skills.',
  },
  {
    role: 'Member',
    org: 'ONET (National Organization for Children in Tunisia)',
    detail: 'Participated in community projects, fostering teamwork and adaptability.',
  },
]

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-textSecondary text-lg leading-relaxed max-w-3xl">
              I&apos;m a <span className="text-textPrimary font-medium">Software Engineer</span> specializing in 
              full-stack development and AI. I build end-to-end, production-oriented applications across modern 
              JavaScript and TypeScript frontends, scalable backend services, real-time systems, and AI-powered 
              pipelines. My experience spans <span className="text-textPrimary font-medium">React, Spring Boot, 
              Django, FastAPI, and Express.js</span>, as well as <span className="text-textPrimary font-medium">
              LLMs, RAG, and multi-agent architectures</span>. I focus on scalable architecture, observability, 
              CI/CD, and reliable deployment.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10">

            {/* Left column: Education + Associations */}
            <div className="space-y-8">

              {/* Education */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.15 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
                  <span className="text-secondary">▹</span> Education
                </h3>
                <div className="space-y-3">
                  {education.map((edu, i) => (
                    <div key={i} className="bg-tertiary/50 p-4 rounded-lg border border-tertiary hover:border-secondary/30 transition-colors">
                      <div className="flex justify-between items-start gap-2 flex-wrap mb-1">
                        <h4 className="font-semibold text-textPrimary text-sm">{edu.degree}</h4>
                        <span className="text-secondary text-xs font-mono whitespace-nowrap">{edu.period}</span>
                      </div>
                      <p className="text-secondary/80 text-xs font-medium mb-1">{edu.school}</p>
                      <p className="text-textSecondary text-xs">{edu.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Associative Experience */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
                  <span className="text-secondary">▹</span> Associative Experience
                </h3>
                <div className="space-y-3">
                  {associations.map((assoc, i) => (
                    <div key={i} className="bg-tertiary/50 p-4 rounded-lg border border-tertiary hover:border-secondary/30 transition-colors">
                      <h4 className="font-semibold text-textPrimary text-sm">
                        {assoc.role} –{' '}
                        <span className="text-secondary/90">{assoc.org}</span>
                      </h4>
                      <p className="text-textSecondary text-xs mt-1">{assoc.detail}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Right column: Technical Skills */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold text-textPrimary mb-4 flex items-center gap-2">
                <span className="text-secondary">▹</span> Technical Skills
              </h3>
              <div className="relative">
                <div className="absolute inset-0 bg-tertiary rounded-xl transform rotate-1 opacity-50" />
                <div className="relative bg-primary/80 p-5 rounded-xl border border-tertiary space-y-4">
                  {skillCategories.map((cat, i) => (
                    <motion.div
                      key={cat.category}
                      initial={{ opacity: 0, y: 8 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      viewport={{ once: true }}
                    >
                      <p className="text-xs font-semibold text-secondary uppercase tracking-wider mb-2">
                        {cat.category}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {cat.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-2 py-1 text-xs bg-tertiary text-textSecondary rounded-md border border-tertiary hover:border-secondary/50 hover:text-secondary transition-all"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
