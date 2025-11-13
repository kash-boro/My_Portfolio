import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function AboutSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Image */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl overflow-hidden shadow-2xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
              alt="About Kashmira"
              className="w-full h-auto object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] rounded-3xl -z-10 blur-xl opacity-50" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl mb-6 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="space-y-4 text-[#475569]">
            <p>
              I'm currently pursuing my{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0F172A]">
                  Master of Computer Applications (MCA)
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#7DECC6]/30 -z-0" />
              </span>{" "}
              with a specialization in{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0F172A]">
                  Artificial Intelligence and Machine Learning
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#C6B4FF]/30 -z-0" />
              </span>{" "}
              at Lovely Professional University.
            </p>
            <p>
              I have a deep passion for solving complex problems and exploring
              cutting-edge technologies. My journey in tech has been driven by
              curiosity and a commitment to continuous learning.
            </p>
            <p>
              As the{" "}
              <span className="relative inline-block">
                <span className="relative z-10 text-[#0F172A]">
                  Vice President of the Coding Club
                </span>
                <span className="absolute bottom-0 left-0 w-full h-2 bg-[#DDF2FF]/50 -z-0" />
              </span>
              , I've had the privilege of mentoring fellow students, organizing
              hackathons, and fostering a vibrant coding culture on campus.
            </p>
            <p>
              I believe in the power of technology to transform lives and I'm
              constantly seeking new challenges that push me to grow as a
              developer and innovator.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}