import { useState } from 'react'
import { motion } from 'framer-motion'
import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/outline'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  return (
    <section id="contact" className="py-20 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary/5 rounded-full filter blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="section-title">Get In Touch</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-textPrimary mb-4">
                  Let's create something amazing together
                </h3>
                <p className="text-textSecondary text-lg">
                  I'm currently available for freelance work or full-time positions.
                  If you have a project that needs some creative touch, I'd love to hear about it.
                </p>
              </div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-tertiary/50 backdrop-blur-sm border border-tertiary hover:border-secondary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <EnvelopeIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-textSecondary text-sm">Email</p>
                    <a href="mailto:your.email@example.com" className="text-textPrimary hover:text-secondary transition-colors">
                      harounbam@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-tertiary/50 backdrop-blur-sm border border-tertiary hover:border-secondary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <PhoneIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-textSecondary text-sm">Phone</p>
                    <a href="tel:+1234567890" className="text-textPrimary hover:text-secondary transition-colors">
                      +216 92652502
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 rounded-lg bg-tertiary/50 backdrop-blur-sm border border-tertiary hover:border-secondary/50 transition-colors">
                  <div className="p-3 rounded-lg bg-secondary/10">
                    <MapPinIcon className="h-6 w-6 text-secondary" />
                  </div>
                  <div>
                    <p className="text-textSecondary text-sm">Location</p>
                    <span className="text-textPrimary">
                      Sousse,tunisia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-textPrimary mb-2 font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="haroun ben ameur"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-textPrimary mb-2 font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="haroun@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-textPrimary mb-2 font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="input-field"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn-primary w-full"
              >
                Send Message
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact 