"use client";
import HyperTextParagraph from "@/components/ui/hyper-text-with-decryption";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function About() {
  const scrollToContact = () => {
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  };

  const narrative =
    "Stehnova Holdings LLC was founded on a simple premise: small deals deserve the same analytical rigor and operational discipline applied to institutional transactions.";

  const narrative2 =
    "In addition to real estate, we selectively pursue strategic investments aligned with long-term capital preservation and growth.";

  const narrative3 =
    "We believe that value creation happens through active management—not just capital allocation. That's why we don't acquire and forget.";

  const mission =
    "To generate superior risk-adjusted returns through disciplined investment while building lasting partnerships with investors, operators, and communities.";

  const vision =
    "To become the trusted partner for disciplined investment in our target markets, known for operational excellence, transparent communication, and consistent execution.";

  // Key words to trigger the effect
  const triggers = ["Stehnova", "rigor", "discipline", "value", "operational", "returns", "active", "management", "excellence", "transparent", "long-term"];

  return (
    <section className="min-h-screen bg-background flex items-center justify-center p-4 md:p-6 lg:p-12 py-8 md:py-12 relative overflow-hidden">
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
          <div className="flex-1 pl-0 md:pl-16 py-6 md:py-12 px-2 md:px-0">
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
              className="space-y-6 md:space-y-8"
            >
              <HyperTextParagraph
                text={narrative}
                highlightWords={[...triggers, "long-term"]}
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.2] tracking-tight"
              />
              <HyperTextParagraph
                text={narrative2}
                highlightWords={[...triggers, "long-term"]}
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.2] tracking-tight"
              />
              <HyperTextParagraph
                text={narrative3}
                highlightWords={[...triggers, "long-term"]}
                className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-light text-foreground leading-[1.2] tracking-tight"
              />
            </motion.div>

            {/* Mission and Vision */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="mt-12 md:mt-16 space-y-6 md:space-y-8"
            >
              <div className="border-l-4 border-primary pl-6">
                <h3 className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-wider mb-3">
                  Mission
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {mission}
                </p>
              </div>
              
              <div className="border-l-4 border-primary/70 pl-6">
                <h3 className="text-sm md:text-base font-mono text-muted-foreground uppercase tracking-wider mb-3">
                  Vision
                </h3>
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  {vision}
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="mt-12 md:mt-16"
            >
              <Button
                onClick={scrollToContact}
                size="lg"
                className="w-full md:w-auto px-8 py-6 text-base md:text-lg"
              >
                Partner With Us
              </Button>
            </motion.div>

            {/* Footer info - similar to author info in testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              className="flex flex-col md:flex-row items-start md:items-center gap-2 md:gap-4 mt-12 md:mt-16"
            >
              <motion.div
                className="w-8 h-px bg-foreground hidden md:block"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
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
