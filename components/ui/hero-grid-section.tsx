"use client"

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils"
import { ReactNode } from "react";

interface Avatar {
    id: number;
    src: string;
    alt: string;
};

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
        <section className={cn("relative min-h-[calc(100vh-var(--header-height))] md:min-h-[calc(630px-var(--header-height))] overflow-hidden pt-12 pb-20", className)}>
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
        <div className="relative z-10 flex flex-col divide-y divide-border">
            <div className="flex flex-col items-center justify-end">
                <div className="flex items-center gap-3 !border !border-b-0 border-border">
                    {/* Logo - Hidden on mobile */}
                    <div className="hidden md:flex">
                        {
                            avatars.map((avatar) => (
                                <img
                                    key={avatar.id}
                                    src={avatar.src}
                                    alt={avatar.alt}
                                    className="h-50 w-50 rounded-full transition-all duration-300 hover:scale-110"
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div>
                <div className="mx-auto flex min-h-[200px] md:min-h-[288px] max-w-[90vw] md:max-w-[80vw] shrink-0 flex-col items-center justify-center gap-2 px-4 py-4 sm:px-16 lg:px-24">
                    <h1 className="!max-w-screen-lg text-pretty text-center text-[clamp(28px,8vw,64px)] font-medium leading-none tracking-[-1.44px] text-foreground md:tracking-[-2.16px]">
                        {title}
                    </h1>
                    <h2 className="text-sm md:text-md max-w-2xl text-pretty text-center text-muted-foreground md:text-lg">
                        {subtitle}
                    </h2>
                </div>
            </div>
            <div className="flex items-start justify-center px-4 sm:px-8.25 md:px-24">
                <div className="flex w-full max-w-[90vw] md:max-w-[80vw] flex-col items-center justify-start md:!max-w-[392px]">
                    <Button
                        className="max-w-sm:!border-x-0 flex w-full !border-x !border-y-0 border-border bg-primary backdrop-blur-xl transition-colors duration-150 hover:!bg-primary/80 !h-12 md:!h-14 flex-col items-center justify-center rounded-none !text-sm md:!text-base cursor-pointer text-primary-foreground"
                        onClick={onPrimaryCtaClick}
                    >
                        {primaryCtaText}
                    </Button>
                    <Button
                        className="!h-12 md:!h-14 flex-col items-center justify-center rounded-none !text-sm md:!text-base flex w-full max-w-sm:!border-x-0 !border-x !border-y-0 border-border !bg-transparent backdrop-blur-xl transition-colors duration-150 hover:!bg-black/5 cursor-pointer"
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
