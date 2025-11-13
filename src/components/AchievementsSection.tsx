import { motion } from "motion/react";
import { Trophy, Users, Code2, Sparkles } from "lucide-react";

export function AchievementsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Achievements
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="p-10 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border border-white/40 relative overflow-hidden group"
      >
        {/* Confetti Icons */}
        <div className="absolute top-4 right-4 text-4xl animate-bounce">
          🎉
        </div>
        <div className="absolute bottom-4 left-4 text-3xl animate-pulse">
          ✨
        </div>

        <div className="flex items-start gap-6 mb-6">
          <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] flex items-center justify-center shadow-lg flex-shrink-0">
            <Trophy className="w-8 h-8 text-white" />
          </div>
          <div>
            <h3 className="text-3xl text-[#0F172A] mb-2">
              Vice President, Coding Club
            </h3>
            <p className="text-[#7DECC6]">2023 - 2024</p>
          </div>
        </div>

        <p className="text-[#475569] mb-8 text-lg">
          Led a vibrant community of over 200+ student developers, fostering a
          collaborative learning environment and promoting coding excellence
          across campus.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#7DECC6]/20 flex items-center justify-center flex-shrink-0">
              <Code2 className="w-5 h-5 text-[#7DECC6]" />
            </div>
            <div>
              <p className="text-[#0F172A]">Organized 15+ Hackathons</p>
              <p className="text-sm text-[#475569]">
                Regional and national level coding competitions
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#C6B4FF]/20 flex items-center justify-center flex-shrink-0">
              <Users className="w-5 h-5 text-[#C6B4FF]" />
            </div>
            <div>
              <p className="text-[#0F172A]">Mentored 100+ Students</p>
              <p className="text-sm text-[#475569]">
                One-on-one coding sessions and career guidance
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#DDF2FF]/40 flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-5 h-5 text-[#7DECC6]" />
            </div>
            <div>
              <p className="text-[#0F172A]">Built Coding Culture</p>
              <p className="text-sm text-[#475569]">
                Weekly workshops and technical talks
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
