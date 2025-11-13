import { motion } from "motion/react";
import { Code, Database, Smartphone, Heart } from "lucide-react";

const skills = {
  programming: [
    { name: "Java", level: 50 },
    { name: "Kotlin", level: 40 },
    { name: "Python", level: 84 },
    { name: "JavaScript", level: 60 },
    { name: "Dart", level: 50 },
  ],
  database: [
    { name: "MySQL", level: 87 },
    { name: "Firebase", level: 80 },
  ],
  mobile: [
    { name: "Flutter", level: 86 },
    { name: "Android", level: 81 },
  ],
  soft: [
    "Leadership",
    "Problem Solving",
    "Collaboration",
  ],
};

const skillColors = [
  "#7DECC6",
  "#C6B4FF",
  "#DDF2FF",
  "#7DECC6",
  "#C6B4FF",
];

export function SkillsSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Skills & Expertise
      </motion.h2>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Programming Languages */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-[#0F172A]">Programming Languages</h3>
          </div>
          <div className="space-y-4">
            {skills.programming.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#475569]">{skill.name}</span>
                  <span className="text-[#0F172A]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skillColors[index % skillColors.length]}, ${skillColors[(index + 1) % skillColors.length]})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Database & Cloud */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C6B4FF] to-[#DDF2FF] flex items-center justify-center shadow-lg">
              <Database className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-[#0F172A]">Database & Cloud</h3>
          </div>
          <div className="space-y-4">
            {skills.database.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#475569]">{skill.name}</span>
                  <span className="text-[#0F172A]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${skillColors[(index + 2) % skillColors.length]}, ${skillColors[(index + 3) % skillColors.length]})`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Mobile Development */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#DDF2FF] to-[#7DECC6] flex items-center justify-center shadow-lg">
              <Smartphone className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-[#0F172A]">Mobile Development</h3>
          </div>
          <div className="space-y-4">
            {skills.mobile.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="text-[#475569]">{skill.name}</span>
                  <span className="text-[#0F172A]">{skill.level}%</span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF]"
                  />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="p-8 rounded-3xl bg-white/70 backdrop-blur-md shadow-xl border border-white/40"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#C6B4FF] to-[#7DECC6] flex items-center justify-center shadow-lg">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-2xl text-[#0F172A]">Soft Skills</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            {skills.soft.map((skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="px-5 py-2 rounded-full text-white shadow-lg"
                style={{
                  background: `linear-gradient(135deg, ${skillColors[index % skillColors.length]}, ${skillColors[(index + 1) % skillColors.length]})`,
                }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}