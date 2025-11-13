import { motion } from "motion/react";
import { FileText, ExternalLink } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function ResearchSection() {
  return (
    <section className="py-20 md:py-32 px-4 md:px-8 max-w-5xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl text-center mb-16 bg-gradient-to-r from-[#7DECC6] to-[#C6B4FF] bg-clip-text text-transparent"
      >
        Research Publication
      </motion.h2>

      <motion.a
        href="https://drive.google.com/file/d/1U8IJa0DZ9LE6AXcN6SnjII78Rp8HFvj0/view"
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="block p-8 md:p-10 rounded-3xl bg-white/70 backdrop-blur-md shadow-2xl border-2 border-transparent hover:border-[#7DECC6] transition-all duration-500 relative overflow-hidden group cursor-pointer"
        style={{
          boxShadow:
            "0 0 0 1px rgba(125, 236, 198, 0.1), 0 20px 60px rgba(125, 236, 198, 0.15)",
        }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#7DECC6]/10 via-[#C6B4FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10 grid md:grid-cols-3 gap-8 items-center">
          <div className="md:col-span-2">
            <div className="flex items-start gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#7DECC6] to-[#C6B4FF] flex items-center justify-center shadow-lg flex-shrink-0">
                <FileText className="w-7 h-7 text-white" />
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl text-[#0F172A] mb-2">
                  Role of 5G in Healthcare
                </h3>
                <span className="inline-flex items-center gap-2 text-[#7DECC6] hover:text-[#C6B4FF] transition-colors duration-300">
                  NABSET 2023 Conference
                  <ExternalLink className="w-4 h-4" />
                </span>
              </div>
            </div>
            <p className="text-[#475569] ml-0 md:ml-18">
              This research explores the transformative impact of 5G technology
              on modern healthcare systems, focusing on telemedicine,
              real-time patient monitoring, and the integration of IoT devices
              in medical facilities. The paper was presented at the National
              Conference on Business, Science, Engineering and Technology
              (NABSET) 2023.
            </p>
          </div>

          {/* Thumbnail Preview */}
          <div className="rounded-2xl overflow-hidden shadow-xl">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=300&fit=crop"
              alt="Research Paper Preview"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </motion.a>
    </section>
  );
}