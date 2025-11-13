import { motion } from "motion/react";

export function Footer() {
  return (
    <footer className="py-12 px-4 border-t border-white/20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <p className="text-[#475569]">
          © 2025 Kashmira Borgoyary | Designed with ❤️ using AI
        </p>
      </motion.div>
    </footer>
  );
}
