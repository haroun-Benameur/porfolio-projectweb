import { FaGithub } from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "ISSATSO – Classroom Reservation Management System for Department Heads",
      description: (
        <>
          Development of a web application enabling department heads to manage classroom reservations
          for professors according to specific time slots. The system also allowed professors to submit reservation requests and
          receive real-time notifications through WebSockets, ensuring efficient communication and scheduling within academic
          departments.
        </>
      ),
      technologies: [
        "React",
        "Bootstrap",
        "Redux",
        "Spring Boot",
        "PostgreSQL",
        "WebSockets",
      ],
      github: "https://github.com/haroun-Benameur/ISSATSO-DEPARTMENT-FULL",
    },
    {
      title: "SmartPath – Intelligent Learning Platform",
      description: (
        <>
          Design and development of an intelligent educational platform featuring AI chatbots and voice tutors
          enhanced with EVA and personas to improve response relevance and performance, integrating real-time speech recognition
          and text generation.
        </>
      ),
      technologies: [
        "Next.js",
        "Tailwind CSS",
        "Django REST Framework",
        "PostgreSQL",
        "WebSockets",
        "Eva",
        "LiveKit",
        "Deepgram",
        "Cerebras LLM",
      ],
      github: "https://github.com/haroun-Benameur/SmartPath-EducationPlatform",
    },
    {
      title: "CarCare App – Automotive Appointment Scheduling",
      description: (
        <>
          Design and implementation of a scheduling platform for automotive dealerships, allowing clients to book
          services online with integrated time-slot management. The solution improved customer experience while optimizing
          workshop resource allocation.
        </>
      ),
      technologies: ["React", "Redux", "Django", "PostgreSQL"],
      github: "https://github.com/haroun-Benameur/Appointment-Service-Car",
    },
    {
      title: "Thesis Defense Management System (Classroom Distribution System)",
      description: (
        <>
          Backend development for an intelligent scheduling system allocating classrooms for thesis defenses.
          A genetic algorithm optimized room distribution while considering teacher availability and constraints. Exposed via a
          REST API and integrated with a React frontend for efficiency.
        </>
      ),
      technologies: [
        "Python",
        "Django",
        "REST API",
        "Genetic Algorithm",
        "React",
        "Redux",
      ],
      github: "https://github.com/walaoueslati/Gestion-pfes",
    },
    {
      title: "HireSphere – Employment Platform",
      description: (
        <>
         Backend development of a recruitment platform streamlining the hiring process from job posting to candidate selection. Implemented a RESTful API with secure authentication, real-time applicant tracking, and an intuitive recruiter dashboard to enhance efficiency and collaboration.
        </>
      ),
      technologies: ["React.js", "Node.js", "Express.js", "MongoDB"],
      github: "https://github.com/haroun-Benameur/-Employment-Platform.git",
    },
    {
      title: "Brain Tumor Detection – Computer Vision Project",
      description: (
        <>
          Development of a CNN model for automatic brain tumor detection from MRI images. Implemented preprocessing and data augmentation, and compared a custom CNN with MobileNetV2 to improve classification accuracy and achieve high validation performance
        </>
      ),
      technologies: [
        "Python",
        "TensorFlow",
        "Keras",
        "OpenCV",
        "NumPy",
        "Matplotlib",
        "MobileNetV2",
      ],
      github: "#",
    },
  ];

  // --- Certificates with PDF links ---
  const certificates = [
    {
      title: "Building LLM Applications with Prompt Engineering – NVIDIA (2025)",
      description:
        "Hands-on training on large language models, prompt design, and application development using generative AI.",
      pdf: "/BuildingLlmCertification.pdf",
    },
    {
      title: "Deep Learning Certificate – NVIDIA (2025)",
      description:
        "Training on neural networks, model optimization, and AI workflows.",
      pdf: "/certif_deep_learning.pdf",
    },
    {
      title:
        "Advanced Fullstack Web Development (MERN) – Orange Digital Center (2025)",
      description:
        "Comprehensive certification in fullstack development with MongoDB, Express.js, React, and Node.js.",
      pdf: "/WebDev.pdf",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* PROJECTS SECTION */}
        <h2 className="text-3xl font-bold text-textPrimary mb-8">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-tertiary rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold text-textPrimary mb-2">
                  {project.title}
                </h3>
                <p className="text-textSecondary mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
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

        {/* CERTIFICATES SECTION */}
        <h2 className="text-3xl font-bold text-textPrimary mt-16 mb-8">
          Certificates
        </h2>
        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.pdf}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-tertiary p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow hover:scale-[1.01] duration-200"
            >
              <h3 className="text-xl font-semibold text-textPrimary mb-2 hover:text-secondary transition-colors">
                {cert.title}
              </h3>
              <p className="text-textSecondary">{cert.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
