import { motion } from "motion/react";
import { Mail, Github, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Let's Connect
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Left: Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-[#0F172A] mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-white/40 focus:border-[#7DECC6] focus:outline-none transition-all duration-300 text-[#0F172A]"
                placeholder="Your name"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-[#0F172A] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-white/40 focus:border-[#C6B4FF] focus:outline-none transition-all duration-300 text-[#0F172A]"
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-[#0F172A] mb-2">
                Message
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-6 py-4 rounded-2xl bg-white/70 backdrop-blur-md border-2 border-white/40 focus:border-[#7DECC6] focus:outline-none transition-all duration-300 text-[#0F172A] resize-none"
                placeholder="Your message..."
                required
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full px-8 py-4 rounded-2xl bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] text-white shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>
        </motion.div>

        {/* Right: Contact Cards */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6"
        >
          <h3 className="text-3xl text-[#0F172A] mb-8">Connect with me</h3>

          {/* Email Card */}
          <motion.a
            href="mailto:kashmiraborgoyary263@gmail.com"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Mail className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-[#0F172A]">Email</p>
              <p className="text-[#475569]">kashmiraborgoyary263@gmail.com</p>
            </div>
          </motion.a>

          {/* GitHub Card */}
          <motion.a
            href="https://github.com/kash-boro"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#C6B4FF] to-[#DDF2FF] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Github className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-[#0F172A]">GitHub</p>
              <p className="text-[#475569]">@kash-boro</p>
            </div>
          </motion.a>

          {/* LinkedIn Card */}
          <motion.a
            href="https://www.linkedin.com/in/kashmira-borgoyary/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -4 }}
            className="flex items-center gap-4 p-6 rounded-2xl bg-white/70 backdrop-blur-md shadow-lg hover:shadow-xl transition-all duration-300 border border-white/40 group"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#DDF2FF] to-[#7DECC6] flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
              <Linkedin className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-[#0F172A]">LinkedIn</p>
              <p className="text-[#475569]">@kashmira-borgoyary</p>
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}