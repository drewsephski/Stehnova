"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Field, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export function CareersForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const formData = new FormData(e.currentTarget)
    
    try {
      // Replace 'YOUR_FORMSPREE_FORM_ID' with your actual Formspree form ID
      const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_FORM_ID', {
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
      <Card className="max-w-2xl mx-auto">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Application Received!</CardTitle>
          <CardDescription>
            Thank you for your interest in joining our team. We'll review your application and get back to you soon.
          </CardDescription>
        </CardHeader>
        <CardContent className="text-center">
          <Button 
            onClick={() => setSubmitted(false)}
            variant="outline"
          >
            Submit Another Application
          </Button>
        </CardContent>
      </Card>
    )
  }

  return (
    <section id="careers" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Careers / Internships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join our innovative team and help shape the future of real estate investment. 
            We're always looking for talented individuals who are passionate about making a difference.
          </p>
        </div>
        
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
            Current Opportunities
          </h3>
          <p className="text-muted-foreground text-center max-w-3xl mx-auto">
            We are currently accepting applications for full-time positions and internship programs across various departments including investment analysis, property management, marketing, and technology. Whether you're an experienced professional or a student looking to gain hands-on experience, we invite you to apply and become part of our dynamic team.
          </p>
        </div>
        
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle>Apply Now</CardTitle>
            <CardDescription>
              Fill out the form below to submit your application. We'll review your information and reach out if there's a match.
            </CardDescription>
          </CardHeader>
          <CardContent>
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
                <FieldLabel htmlFor="coverLetter">Cover Letter / Why You Want to Join</FieldLabel>
                <Textarea
                  id="coverLetter"
                  name="coverLetter"
                  placeholder="Tell us about yourself and why you're interested in this position..."
                  rows={5}
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
              
              <Button 
                type="submit" 
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit Application"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
