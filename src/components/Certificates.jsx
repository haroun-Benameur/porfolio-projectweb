import { motion } from 'framer-motion'

const certificates = [
  {
    title: 'Building LLM Applications with Prompt Engineering',
    issuer: 'NVIDIA',
    year: '2025',
    description:
      'Hands-on training on large language models, prompt design, and application development using generative AI.',
    pdf: '/BuildingLlmCertification.pdf',
    icon: '🤖',
  },
  {
    title: 'Deep Learning Certificate',
    issuer: 'NVIDIA',
    year: '2025',
    description:
      'Training on neural networks, model optimization, and AI workflows using GPU-accelerated frameworks.',
    pdf: '/certif_deep_learning.pdf',
    icon: '🧠',
  },
  {
    title: 'Advanced Fullstack MERN Web Development',
    issuer: 'Orange Digital Center',
    year: '2025',
    description:
      'Comprehensive certification in fullstack development with MongoDB, Express.js, React, and Node.js.',
    pdf: '/WebDev.pdf',
    icon: '🌐',
  },
]

const Certificates = () => {
  return (
    <section id="certifications" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Certifications</h2>

          <div className="mt-12 space-y-5">
            {certificates.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.pdf}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15, duration: 0.4 }}
                viewport={{ once: true }}
                className="card flex items-start gap-5 p-6 group hover:shadow-xl hover:shadow-secondary/5 cursor-pointer block transition-all duration-300"
              >
                {/* Icon */}
                <div className="text-3xl flex-shrink-0 mt-1">{cert.icon}</div>

                {/* Content */}
                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-base font-bold text-textPrimary group-hover:text-secondary transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-secondary text-xs font-mono">{cert.year}</span>
                  </div>
                  <p className="text-secondary/80 text-sm font-medium mb-2">{cert.issuer}</p>
                  <p className="text-textSecondary text-sm">{cert.description}</p>
                </div>

                {/* View badge */}
                <div className="flex-shrink-0 self-center">
                  <span className="text-xs text-secondary border border-secondary/30 rounded-full px-3 py-1 group-hover:bg-secondary/10 transition-colors whitespace-nowrap">
                    View PDF ↗
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Certificates
