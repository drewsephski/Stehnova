"use client";
import HyperTextParagraph from "@/components/ui/hyper-text-with-decryption";
import { motion } from "framer-motion";

export default function About() {
  const bio =
    "Strategic real estate investment through disciplined analysis.";

  const bio2 =
    "Building capital structures for long-term growth.";

  // Key words to trigger the effect
  const triggers = ["Strategic", "investment", "analysis", "opportunities", "partnerships", "growth"];

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6 lg:p-12 relative overflow-hidden">
      {/* Background Ambience - subtle like testimonial */}
      <div className="absolute inset-0 z-0">
        <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-secondary/5 rounded-full blur-[120px]" />
      </div>

      {/* Main content - match testimonial layout */}
      <div className="relative z-10 w-full max-w-7xl">
        {/* Left column - vertical text like testimonial - hidden on mobile */}
        <div className="flex">
          <div className="hidden md:flex flex-col items-center justify-center pr-16 border-r border-border">
            <motion.span
              className="text-xs font-mono text-muted-foreground tracking-widest uppercase"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              About
            </motion.span>
            
            {/* Vertical progress indicator */}
            <div className="relative h-32 w-px bg-border mt-8">
              <motion.div
                className="absolute top-0 left-0 w-full bg-foreground origin-top"
                animate={{ height: "100%" }}
                transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              />
            </div>
          </div>

          {/* Center - main content */}
          <div className="flex-1 pl-0 md:pl-16 py-8 md:py-12 px-2 md:px-0">
            {/* Company badge - similar to testimonial */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-8"
            >
              <span className="inline-flex items-center gap-2 text-xs font-mono text-muted-foreground border border-border rounded-full px-3 py-1">
                <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                Stehnova Holdings LLC
              </span>
            </motion.div>

            {/* Main content - no card background, clean like testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <HyperTextParagraph
                text={bio}
                highlightWords={triggers}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-[1.1] tracking-tight"
              />
              <HyperTextParagraph
                text={bio2}
                highlightWords={triggers}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-light text-foreground leading-[1.1] tracking-tight"
              />
            </motion.div>

            {/* Footer info - similar to author info in testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-8 md:mt-12"
            >
              <motion.div
                className="w-8 h-px bg-foreground hidden md:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                style={{ originX: 0 }}
              />
              <div>
                <p className="text-xs md:text-sm text-muted-foreground font-mono leading-relaxed">Real Estate Investment • Property Redevelopment • Strategic Asset Management</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
