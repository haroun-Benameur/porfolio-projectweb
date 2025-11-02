import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { EnvelopeIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Footer = () => {
  return (
    <footer className="bg-tertiary py-10 border-t border-secondary/20">
      <div className="container mx-auto px-4">
        {/* Main content */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Contact Info */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-textPrimary mb-2">
              Let’s Connect
            </h3>
            <p className="text-textSecondary mb-4">
              I’m always open to discussing new projects, creative ideas, or opportunities to collaborate.
            </p>
            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 text-textSecondary">
              <div className="flex items-center space-x-2">
                <EnvelopeIcon className="h-5 w-5 text-secondary" />
                <a
                  href="mailto:harounbam@gmail.com"
                  className="hover:text-secondary transition-colors"
                >
                  harounbam@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <PhoneIcon className="h-5 w-5 text-secondary" />
                <a
                  href="tel:+21692652502"
                  className="hover:text-secondary transition-colors"
                >
                  +216 92 652 502
                </a>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/haroun-Benameur"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub size={26} />
            </a>
            <a
              href="https://www.linkedin.com/in/haroun-ben-ameur-857a872b4/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-textSecondary hover:text-secondary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={26} />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-secondary/20 mt-8 pt-4 text-center">
          <p className="text-sm text-textSecondary">
            © {new Date().getFullYear()} <span className="font-medium text-textPrimary">Haroun Ben Ameur</span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
