"use client"

import { ModeToggle } from "@/components/mode-toggle"
import { cn } from "@/lib/utils"
import { useState } from "react"

interface NavbarProps {
  className?: string
}

export function Navbar({ className }: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={cn(
      "top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl h-20",
      className
    )}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2 md:gap-3">
            <img
              src="/stehnova2.png"
              alt="Stehnova Holdings LLC logo"
              className="h-14 w-14 md:h-20 md:w-20 rounded-full transition-all duration-300 hover:scale-110"
            />
            <div className="flex flex-col">
              <span className="text-base md:text-lg font-semibold text-foreground tracking-tight">
                Stehnova Holdings
              </span>
              <span className="text-[10px] md:text-xs text-muted-foreground">
                Purposeful Investing
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links & Theme Toggle */}
          <div className="hidden md:flex items-center gap-6">
            <div className="flex items-center gap-6">
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
                onClick={() => {
                  scrollToSection('contact')
                  // Trigger careers tab selection
                  const event = new CustomEvent('selectCareersTab')
                  window.dispatchEvent(event)
                }}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Careers
              </button>
            </div>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center gap-3">
            <ModeToggle />
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-accent transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl">
            <div className="px-4 py-4 space-y-3">
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Contact
              </button>
              <button
                onClick={() => {
                  scrollToSection('contact')
                  // Trigger careers tab selection
                  const event = new CustomEvent('selectCareersTab')
                  window.dispatchEvent(event)
                }}
                className="block w-full text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              >
                Careers
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
