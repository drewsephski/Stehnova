"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowRight } from "lucide-react"

export function CombinedFormSection() {
  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Get in Touch
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Submit your property or investment inquiry through our secure form below.
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          <CardHeader className="px-4 md:px-6 text-center">
            <CardTitle className="text-xl md:text-2xl">Submit Your Information</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Choose how you'd like to connect with us
            </CardDescription>
          </CardHeader>
          <CardContent className="px-4 md:px-6">
            <div className="space-y-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc17ZvJd3SmMmUVQnGbokpPFIiBxSIyTHJZc05sA_LykdM8Bg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button className="w-full text-sm md:text-base py-6 md:py-8">
                  Submit a Property Deal
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>

              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc17ZvJd3SmMmUVQnGbokpPFIiBxSIyTHJZc05sA_LykdM8Bg/viewform?usp=publish-editor"
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <Button variant="outline" className="w-full text-sm md:text-base">
                  Investment Inquiry
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </a>
            </div>

            <div className="mt-8 pt-6 border-t">
              <div className="flex flex-col items-center gap-3">
                <p className="text-xs md:text-sm text-muted-foreground">Prefer email?</p>
                <a
                  href="mailto:stehnovaholdings@hotmail.com?subject=Inquiry from Stehnova Website"
                  className="inline-flex items-center gap-2 px-3 md:px-4 py-2 bg-primary/10 hover:bg-primary/20 text-foreground rounded-lg transition-all duration-200 hover:scale-105 text-sm md:text-base"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="md:w-[18px] md:h-[18px]">
                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                    <path d="m22 7-8.97 5.7-1.66-2.03"/>
                  </svg>
                  <span className="font-medium text-xs md:text-sm">stehnovaholdings@hotmail.com</span>
                </a>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
