import { motion } from 'framer-motion'

const About = () => {
  const technicalSkills = [
    'Full-Stack Development',
    'JavaScript',
    'Bootstrap',
    'React.js',
    'Tailwind CSS',
    'Next.js',
    'Git/Github',
    'Python',
    'Java',
    'Django',
    'Spring Boot',  
    'SQL',
    'PostgreSQL',
  ]

  const softSkills = [
    'Public Speaking',
    'Team Leadership',
    'Adaptability',
    'Quick Learning',
    'Team Collaboration',
  ]

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">About Me</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <p className="text-textSecondary">
                  Hello! I'm a Full-Stack Developer passionate about creating end-to-end solutions that combine beautiful user interfaces with robust backend systems. With expertise in both frontend and backend technologies, I specialize in building scalable web applications that deliver exceptional user experiences. My journey in web development has equipped me with a comprehensive understanding of the entire development stack, from user interface design to database architecture.
                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-xl font-bold text-textPrimary">Associative Experience</h3>
                <div className="space-y-2">
                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-textPrimary">Vice-President – NATEG ISSATSO (North American Tunisian Engineers Group)</h4>
                    <p className="text-textSecondary text-sm">Since September 2024</p>
                  </div>

                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-textPrimary">External Relations Member – NATEG ISSATSO</h4>
                    <p className="text-textSecondary text-sm">Since September 2023</p>

                  </div>

                  <div className="bg-tertiary/50 p-4 rounded-lg">
                    <h4 className="font-semibold text-textPrimary">Member - ONET (Organisation Nationale des Enfants en Tunisie)</h4>
                    <p className="text-textSecondary text-sm">Since September 2018</p>

                  </div>

                 
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-tertiary rounded-lg transform rotate-3"></div>
                <div className="relative bg-primary p-6 rounded-lg border border-tertiary">
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Technical Skills</h3>
                  <div className="grid grid-cols-2 gap-2">
                    {technicalSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-secondary">▹</span>
                        <span className="text-textSecondary">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-tertiary rounded-lg transform rotate-3"></div>
                <div className="relative bg-primary p-6 rounded-lg border border-tertiary">
                  <h3 className="text-xl font-bold text-textPrimary mb-4">Soft Skills</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {softSkills.map((skill, index) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="flex items-center space-x-2"
                      >
                        <span className="text-secondary">▹</span>
                        <span className="text-textSecondary">{skill}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About 