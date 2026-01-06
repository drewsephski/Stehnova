"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

type FormType = 'contact' | 'careers'

export function CombinedFormSection() {
  const [formType, setFormType] = useState<FormType>('contact')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    formData.append('formType', formType)
    
    try {
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
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

  if (submitted) {
    return (
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Message Received!</CardTitle>
              <CardDescription>
                {formType === 'careers' 
                  ? "Thank you for your interest in joining our team. We'll review your application and get back to you soon."
                  : "Thank you for reaching out. We'll get back to you as soon as possible."
                }
              </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button 
                onClick={() => {
                  setSubmitted(false)
                }}
                variant="outline"
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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you&apos;re interested in investment opportunities or ready to join our team, we&apos;d love to hear from you.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>
              Choose how you&apos;d like to connect with us below.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center pb-4">
            <a
              href="mailto:stehnovaholdings@hotmail.com"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center justify-center gap-2"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="16" x="2" y="4" rx="2"/>
                <path d="m22 7-8.97 5.7-1.66-2.03"/>
              </svg>
              stehnovaholdings@hotmail.com
            </a>
          </CardContent>
            <div className="flex gap-2 mb-6">
              <Button
                variant={formType === 'contact' ? 'default' : 'outline'}
                onClick={() => setFormType('contact')}
                className="flex-1"
              >
                Contact Us
              </Button>
              <Button
                variant={formType === 'careers' ? 'default' : 'outline'}
                onClick={() => setFormType('careers')}
                className="flex-1"
              >
                Careers / Internships
              </Button>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Field>
                  <FieldLabel htmlFor="firstName">First Name</FieldLabel>
                  <Input
                    id="firstName"
                    name="firstName"
                    placeholder="John"
                    required
                  />
                </Field>
                
                <Field>
                  <FieldLabel htmlFor="lastName">Last Name</FieldLabel>
                  <Input
                    id="lastName"
                    name="lastName"
                    placeholder="Doe"
                    required
                  />
                </Field>
              </div>
              
              <Field>
                <FieldLabel htmlFor="email">Email</FieldLabel>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="john.doe@example.com"
                  required
                />
              </Field>
              
              <Field>
                <FieldLabel htmlFor="phone">Phone Number</FieldLabel>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                />
              </Field>
              
              {formType === 'careers' && (
                <>
                  <Field>
                    <FieldLabel htmlFor="position">Position of Interest</FieldLabel>
                    <Input
                      id="position"
                      name="position"
                      placeholder="e.g., Investment Analyst, Marketing Intern"
                      required
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="experience">Experience Level</FieldLabel>
                    <Input
                      id="experience"
                      name="experience"
                      placeholder="e.g., Entry-level, Mid-level, Senior"
                      required
                    />
                  </Field>
                  
                  <Field>
                    <FieldLabel htmlFor="resume">Resume / CV Link</FieldLabel>
                    <Input
                      id="resume"
                      name="resume"
                      placeholder="Link to your resume (LinkedIn, Google Drive, etc.)"
                    />
                  </Field>
                </>
              )}
              
              <Field>
                <FieldLabel htmlFor="message">
                  {formType === 'careers' ? 'Cover Letter / Why You Want to Join' : 'Message'}
                </FieldLabel>
                <Textarea
                  id="message"
                  name="message"
                  placeholder={
                    formType === 'careers'
                      ? "Tell us about yourself and why you're interested in this position..."
                      : "Tell us about your investment goals and how we can help..."
                  }
                  rows={5}
                  required
                />
              </Field>
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : formType === 'careers' ? "Submit Application" : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
        
        {formType === 'careers' && (
          <div className="mt-12 text-center">
            <h3 className="text-xl font-semibold text-foreground mb-3">
              Current Opportunities
            </h3>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              We&apos;re accepting applications for full-time positions and internships across investment analysis, property management, marketing, and technology. Whether you&apos;re experienced or just starting out, we invite you to join our dynamic team.
            </p>
          </div>
        )}
      </div>
    </section>
  )
}
