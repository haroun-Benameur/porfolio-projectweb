import { motion } from 'framer-motion'

const experiences = [
  {
    role: 'AI Instructor',
    company: 'GoMyCode Maghreb',
    period: 'September 2026 – Present',
    type: 'Instructor',
    project: 'AI & DevOps Training',
    projectLabel: 'Web Dev, AI Agents, RAG, MCP & DevOps Bootcamp',
    description:
      'Training covering web development and Python foundations, alongside an advanced track in AI (prompt engineering, LLM agents, RAG, MCP, deployment, risk management) and DevOps (Linux, Docker, CI/CD, Azure, monitoring). Responsible for curriculum delivery, hands-on labs, and guiding learners through real-world AI and cloud deployment scenarios.',
    technologies: [
      'Python', 'LangChain', 'LLM', 'RAG', 'MCP',
      'Docker', 'CI/CD', 'Azure', 'Linux', 'Prometheus', 'Grafana',
    ],
  },
  {
    role: 'Fullstack & AI Developer',
    company: 'Talan Tunisia',
    period: 'February 2026 – June 2026',
    type: 'Final Year Internship',
    project: 'SmartInvest',
    projectLabel: 'Intelligent Financial Investment Platform',
    description:
      'Designed and developed an intelligent financial investment platform enabling market data analysis, portfolio tracking, financial news sentiment analysis, market trend prediction, and automatic analytical report generation. Implemented a React frontend, a secure Spring Boot backend, and a FastAPI AI service orchestrating a multi-agent pipeline. Integrated Kafka, Redis, and WebSocket for real-time processing, as well as Prometheus, Grafana, and Langfuse for monitoring. Containerized with Docker and deployed via CI/CD on Microsoft Azure VM.',
    technologies: [
      'Spring Boot', 'FastAPI', 'React', 'TypeScript', 'PostgreSQL',
      'Redis', 'Kafka', 'WebSocket', 'Docker', 'Azure VM',
      'LangGraph', 'LangChain', 'Chronos', 'FinBERT', 'LLM',
      'Prometheus', 'Grafana', 'Langfuse',
    ],
  },
  {
    role: 'Backend Developer – AI & Data',
    company: 'Proxym-IT',
    period: 'July 2025',
    type: 'Internship',
    project: 'FSD Analysis',
    projectLabel: 'Automatic Test Case Generation from FSD Files',
    description:
      'Developed a platform to automate test case generation from Functional Specification Documents (FSD). Implemented a Retrieval-Augmented Generation (RAG) pipeline that splits FSD files, performs semantic indexing in Elasticsearch using Google Gemini embeddings, and generates accurate test cases via AI prompts. Built and optimized the Django backend with semantic search and REST API endpoints.',
    technologies: [
      'Python', 'Django', 'Elasticsearch', 'Kibana', 'Angular', 'Google Gemini', 'RAG',
    ],
  },
  {
    role: 'Backend Developer – Data Engineering',
    company: 'Proxym-IT',
    period: 'August 2024',
    type: 'Internship',
    project: 'Git Analytics',
    projectLabel: 'Project Progress Analytics via Git & Elasticsearch',
    description:
      'Enhanced management and analysis of development operations data by integrating GitHub with Elasticsearch. Implemented fuzzy queries to improve search and statistical analysis, and optimized data transfer with semantic search functions using Cohere to deliver detailed insights via Kibana dashboards, enabling better project monitoring and evaluation.',
    technologies: [
      'Git', 'GitHub', 'Elasticsearch', 'Kibana', 'Python', 'Cohere',
    ],
  },
]

const Experience = () => {
  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Experience</h2>

          {/* Vertical timeline */}
          <div className="relative mt-12">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-secondary/20" />

            <div className="space-y-10">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.15, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="relative pl-12 md:pl-16"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-4 top-5 w-4 h-4 rounded-full bg-secondary border-2 border-primary shadow-lg shadow-secondary/30" />

                  {/* Card */}
                  <div className="card p-6 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-300">

                    {/* Header */}
                    <div className="flex flex-wrap items-start justify-between gap-3 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-textPrimary">{exp.role}</h3>
                        <p className="text-secondary font-medium">{exp.company}</p>
                      </div>
                      <div className="text-right">
                        <span className="text-textSecondary text-sm font-mono">{exp.period}</span>
                        <p className="text-textSecondary/60 text-xs mt-1">{exp.type}</p>
                      </div>
                    </div>

                    {/* Project badge */}
                    <div className="mb-3">
                      <span className="inline-flex items-center gap-1 px-3 py-1 text-xs bg-secondary/10 text-secondary border border-secondary/30 rounded-full font-medium">
                        <span>◈</span> {exp.project} — {exp.projectLabel}
                      </span>
                    </div>

                    {/* Description */}
                    <p className="text-textSecondary text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tech stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 text-xs bg-primary text-secondary border border-secondary/20 rounded-md hover:border-secondary/50 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
