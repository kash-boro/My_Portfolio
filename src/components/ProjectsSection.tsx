import { motion } from "motion/react";
import { Github, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Plant Nursery Management System",
    description:
      "A comprehensive nursery management system built with Kotlin and Firebase, enabling efficient inventory tracking, plant care scheduling, and customer management.",
    tags: ["Kotlin", "Firebase", "Android"],
    github: "https://github.com/kash-boro/NMS",
    gradient: "from-[#C6B4FF] to-[#DDF2FF]",
  },
  {
    title: "CareConnect",
    description:
      "An innovative assistance booking application designed to help elderly and disabled individuals connect with caregivers and service providers seamlessly.",
    tags: ["Flutter", "Dart", "MySQL"],
    github: "https://github.com/kash-boro/CareConnect",
    gradient: "from-[#7DECC6] to-[#C6B4FF]",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Featured Projects
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            whileHover={{ y: -8 }}
            className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/40 relative overflow-hidden group"
          >
            {/* Gradient Background on Hover */}
            <div
              className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
            />

            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl text-[#0F172A] mb-4">
                {project.title}
              </h3>
              <p className="text-[#475569] mb-6">{project.description}</p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag, tagIndex) => (
                  <span
                    key={tagIndex}
                    className="px-4 py-1 rounded-full text-sm bg-white/50 text-[#0F172A] border border-white/60"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] text-white shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Github className="w-4 h-4" />
                  View on GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}