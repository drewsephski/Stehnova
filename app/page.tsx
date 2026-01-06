import { Testimonial } from "@/components/ui/design-testimonial"
import About from "@/components/about"
import { HeroGridSection } from "@/components/ui/hero-grid-section"
import { PixelCardRow } from "@/components/ui/pixel-card-row"
import { CombinedFormSection } from "@/components/ui/combined-form-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background w-full relative overflow-hidden">
      {/* Global Grid Background */}
      <div
        className="absolute inset-0"
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
          backgroundSize: "32px 32px",
          opacity: 0.15,
          maskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 40%, transparent 100%)'
        }}
      />
      <div className="relative z-10 w-full">
        <HeroGridSection />
        <PixelCardRow />
        <Testimonial />
        <About />
        <CombinedFormSection />
      </div>
    </main>
  )
}
