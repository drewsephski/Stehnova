"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/stehnova.png"
              alt="Stehnova Holdings LLC logo"
              className="h-12 w-12 rounded-full transition-all duration-300 hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="text-lg font-semibold text-foreground tracking-tight">
                Stehnova Holdings
              </span>
              <span className="text-xs text-muted-foreground">
                Real Estate Investment
              </span>
            </div>
          </div>

          {/* Navigation Links & Theme Toggle */}
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection('about')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </button>
              <button
                onClick={() => scrollToSection('careers')}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </button>
            </div>
            <ModeToggle />
          </div>
        </div>
      </div>
    </nav>
  )
}
