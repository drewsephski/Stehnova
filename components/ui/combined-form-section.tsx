"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState, useEffect } from "react"

type ContactPath = 'deal' | 'investment' | 'careers'

export function CombinedFormSection() {
  const [contactPath, setContactPath] = useState<ContactPath>('deal')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  // Listen for careers tab selection event
  useEffect(() => {
    const handleSelectCareersTab = () => {
      setContactPath('careers')
      setSubmitted(false)
    }

    window.addEventListener('selectCareersTab', handleSelectCareersTab)
    return () => {
      window.removeEventListener('selectCareersTab', handleSelectCareersTab)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append('contactPath', contactPath)
    
    try {
      const response = await fetch('https://formspree.io/f/xnjneapa', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      })
      
      if (response.ok) {
        setSubmitted(true)
      } else {
        console.error('Form submission failed')
        alert('Something went wrong. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      alert('Something went wrong. Please try again.')
    }
    
    setIsSubmitting(false)
  }

  const getSuccessMessage = () => {
    switch (contactPath) {
      case 'deal':
        return "Thank you for submitting your deal. We'll review it and get back to you soon."
      case 'investment':
        return "Thank you for your interest in investing with Stehnova. We'll be in touch shortly."
      case 'careers':
        return "Thank you for your interest in joining our team. We'll review your application and get back to you soon."
    }
  }

  const getSubmitButtonText = () => {
    switch (contactPath) {
      case 'deal':
        return "Submit Deal"
      case 'investment':
        return "Submit Inquiry"
      case 'careers':
        return "Submit Application"
    }
  }

  if (submitted) {
    return (
      <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center px-4 md:px-6">
              <CardTitle className="text-xl md:text-2xl">Message Received!</CardTitle>
              <CardDescription className="text-sm md:text-base">
                {getSuccessMessage()}
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center px-4 md:px-6">
              <Button
                onClick={() => {
                  setSubmitted(false)
                }}
                variant="outline"
                className="w-full md:w-auto"
              >
                Send Another Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="py-12 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-3 md:mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-sm md:text-base lg:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            Whether you&apos;re interested in investment opportunities or ready to join our team, we&apos;d love to hear from you.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader className="px-4 md:px-6">
            <CardTitle className="text-xl md:text-2xl">Get in Touch</CardTitle>
            <CardDescription className="text-sm md:text-base">
              Choose how you&apos;d like to connect with us below.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-4 px-4 md:px-6">
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
          </CardContent>
          <CardContent className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-2 mb-6">
              <Button
                variant={contactPath === 'deal' ? 'default' : 'outline'}
                onClick={() => setContactPath('deal')}
                className="flex-1 text-sm md:text-base"
              >
                Submit a Deal
              </Button>
              <Button
                variant={contactPath === 'investment' ? 'default' : 'outline'}
                onClick={() => setContactPath('investment')}
                className="flex-1 text-sm md:text-base"
              >
                Investment Inquiry
              </Button>
              <Button
                variant={contactPath === 'careers' ? 'default' : 'outline'}
                onClick={() => setContactPath('careers')}
                className="flex-1 text-sm md:text-base"
              >
                Careers
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <Field>
                  <FieldLabel htmlFor="firstName" className="text-sm md:text-base">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                    className="text-sm md:text-base"
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="lastName" className="text-sm md:text-base">Last Name</FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                    className="text-sm md:text-base"
                  />
                </Field>
              </div>
              
              <Field>
                <FieldLabel htmlFor="email" className="text-sm md:text-base">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                  className="text-sm md:text-base"
                />
              </Field>
              
              <Field>
                <FieldLabel htmlFor="phone" className="text-sm md:text-base">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="text-sm md:text-base"
                />
              </Field>
              
              {contactPath === 'careers' && (
                <>
                  <Field>
                    <FieldLabel htmlFor="position" className="text-sm md:text-base">Position of Interest</FieldLabel>
                    <Input
                      id="position"
                      name="position"
                      placeholder="e.g., Investment Analyst, Marketing Intern"
                      required
                      className="text-sm md:text-base"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="experience" className="text-sm md:text-base">Experience Level</FieldLabel>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="e.g., Entry-level, Mid-level, Senior"
                      required
                      className="text-sm md:text-base"
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="resume" className="text-sm md:text-base">Resume / CV Link</FieldLabel>
                    <Input
                      id="resume"
                      name="resume"
                      placeholder="Link to your resume (LinkedIn, Google Drive, etc.)"
                      className="text-sm md:text-base"
                    />
                  </Field>
                </>
              )}
              
              <Field>
                <FieldLabel htmlFor="message" className="text-sm md:text-base">
                  {contactPath === 'careers' ? 'Cover Letter / Why You Want to Join' :
                   contactPath === 'investment' ? 'Tell Us About Your Investment Goals' : 'Describe Your Property'}
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={
                    contactPath === 'careers'
                      ? "Tell us about yourself and why you're interested in this position..."
                      : contactPath === 'investment'
                      ? "Tell us about your investment goals and how we can help..."
                      : "Tell us about the property, including address, asking price, and key details..."
                  }
                  rows={5}
                  required
                  className="text-sm md:text-base"
                />
              </Field>
              
              <Button
                type="submit"
                className="w-full text-sm md:text-base"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : getSubmitButtonText()}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {contactPath === 'careers' && (
          <div className="mt-8 md:mt-12 text-center">
            <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 md:mb-3">
              Current Opportunities
            </h3>
            <p className="text-sm md:text-base text-muted-foreground max-w-3xl mx-auto px-2">
              We&apos;re accepting applications for full-time positions and internships across investment analysis, property management, marketing, and technology. Whether you&apos;re experienced or just starting out, we invite you to join our dynamic team.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
