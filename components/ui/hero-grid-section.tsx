"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";
import { Navbar } from "@/components/ui/navbar";

interface Avatar {
    id: number;
    src: string;
    alt: string;
}

const AVATARS: Avatar[] = [
    { id: 1, src: "/stehnova.png", alt: "Stehnova Holdings LLC logo" },
];

export function HeroGridSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <HeroGrid
      avatars={AVATARS}
      title="Strategic Real Estate Investment & Property Redevelopment"
      subtitle="Stehnova Holdings LLC: Applying disciplined market research and on-the-ground analysis to identify value-add real estate opportunities."
      primaryCtaText="Contact Us"
      secondaryCtaText="Learn More"
      onPrimaryCtaClick={() => scrollToSection('contact')}
      onSecondaryCtaClick={() => scrollToSection('features')}
    />
   );
}

interface HeroGridSectionProps {
    avatars: Avatar[];
    title?: ReactNode | string;
    subtitle?: ReactNode | string;
    primaryCtaText?: string;
    secondaryCtaText?: string;
    onPrimaryCtaClick?: () => void;
    onSecondaryCtaClick?: () => void;
    className?: string;
}

export function HeroGrid({
    avatars = AVATARS,
    title = "Strategic Real Estate Investment & Property Redevelopment",
    subtitle = "Stehnova Holdings LLC: Applying disciplined market research and on-the-ground analysis to identify value-add real estate opportunities.",
    primaryCtaText = "Contact Us",
    secondaryCtaText = "Learn More",
    onPrimaryCtaClick,
    onSecondaryCtaClick,
    className,
}: HeroGridSectionProps) {
    return (
        <section className={cn("relative min-h-screen overflow-hidden", className)}>
        <Navbar />
        <div className="absolute left-0 top-0 z-0 h-full w-full">
          {/* Gradient Grid Background */}
          <div 
            className="absolute inset-0 grid h-full w-full grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]"
            style={{
              background: `
                linear-gradient(to bottom, 
                  hsl(var(--foreground)) 0px, 
                  transparent 1px
                ),
                linear-gradient(90deg, 
                  hsl(var(--foreground)) 0px, 
                  transparent 1px
                )
              `,
              backgroundSize: 'clamp(28px,10vw,120px) clamp(28px,10vw,120px)',
              maskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 60%, transparent 100%)'
            }}
          />
          {/* Vertical Borders with Gradient */}
          <div className="absolute inset-0 flex">
            <div className="w-full h-full grid grid-cols-[clamp(28px,10vw,120px)_auto_clamp(28px,10vw,120px)]">
              <div />
              <div 
                className="border-x"
                style={{
                  borderColor: 'hsl(var(--border))',
                  opacity: 1,
                  maskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)',
                  WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 70%, transparent 100%)'
                }}
              />
              <div />
            </div>
          </div>
          {/* Bottom Border with Gradient */}
          <div 
            className="absolute bottom-0 left-0 right-0 border-b"
            style={{
              borderColor: 'hsl(var(--border))',
              opacity: 1,
              maskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)',
              WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 20%, black 80%, transparent 100%)'
            }}
          />
        </div>
        {/* --- */}
        <figure className="pointer-events-none absolute -bottom-[70%] left-1/2 z-0 block aspect-square w-[520px] -translate-x-1/2 rounded-full bg-primary/20 blur-[200px]" />
        <figure className="pointer-events-none absolute left-[4vw] top-[64px] z-20 hidden aspect-square w-[32vw] rounded-full bg-card/50 opacity-50 blur-[100px] md:block" />
        <figure className="pointer-events-none absolute bottom-[-50px] right-[7vw] z-20 hidden aspect-square w-[30vw] rounded-full bg-card/50 opacity-50 blur-[100px] md:block" />
        {/* --- */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-80px)] pt-20">
            <div className="text-center space-y-8 px-4 max-w-5xl">
                <div className="space-y-4">
                    <h1 className="!max-w-screen-lg text-pretty text-[clamp(40px,8vw,72px)] font-bold leading-none tracking-[-1.44px] text-foreground md:tracking-[-2.16px] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                        {title}
                    </h1>
                    <h2 className="text-lg md:text-xl max-w-3xl mx-auto text-pretty text-muted-foreground animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
                        {subtitle}
                    </h2>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                    <Button 
                        className="w-full sm:w-auto px-8 h-14 text-base font-semibold bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 hover:scale-105"
                        onClick={onPrimaryCtaClick}
                    >
                        {primaryCtaText}
                    </Button>
                    <Button 
                        className="w-full sm:w-auto px-8 h-14 text-base font-semibold border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:scale-105"
                        variant="outline"
                        onClick={onSecondaryCtaClick}
                    >
                        {secondaryCtaText}
                    </Button>
                </div>
            </div>
        </div>
        </section>
    );
}
