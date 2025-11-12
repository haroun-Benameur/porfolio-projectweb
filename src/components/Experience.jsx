import React from 'react'

const Experience = () => {
  const experiences = [
    {
      company: "Proxym-IT",
      role: " Internship - FSD File Analysis Platform with Automatic Test Case Generation",
      duration: "1 month – July 2025",
      location: "Sousse, Tunisia",
      technologies: [
        "Python",
        "Django",
        "Elasticsearch",
        "Google Gemini",
        "AI (Generative Models)"
      ],
      description:
        "Developed the backend of a platform to automate test case generation from Functional Specification Documents (FSD). Designed and implemented a Retrieval-Augmented Generation (RAG) pipeline that splits FSD files, performs semantic indexing in Elasticsearch using Google Gemini embeddings, and generates accurate test cases via AI prompts. Built and optimized the Django backend with semantic search and API endpoints to enhance validation and testing processes at Proxym-IT."
    },
    {
      company: "Proxym-IT",
      role: "Internship - Analysis and Reporting on Project Progress via Git and Elasticsearch",
      duration: "1 month – August 2024",
      location: "Sousse, Tunisia",
      technologies: [
        "Git",
        "GitHub",
        "Elasticsearch",
        "Python",
        "Cohere",
        "AI (Generative Models)"
      ],
      description:
        "Enhanced management and analysis of development operations data by integrating GitHub with Elasticsearch. Implemented fuzzy queries to improve search and statistical analysis, and optimized data transfer with semantic search functions to deliver detailed insights via analytics dashboards, enabling better project monitoring and evaluation."
    }
  ]

  return (
    <section id="experience" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-textPrimary mb-8">Experience</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-tertiary rounded-lg overflow-hidden">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-1">{exp.role}</h3>
                <p className="text-textSecondary mb-2">{exp.company} • {exp.location}</p>
                <p className="text-textSecondary text-sm mb-4">{exp.duration}</p>
                <p className="text-textSecondary mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 text-sm bg-primary text-secondary rounded-full"
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
  )
}

export default Experience 