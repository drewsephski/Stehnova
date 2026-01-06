import type { Metadata } from "next";
import { Geist, Geist_Mono, Figtree } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const figtree = Figtree({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Stehnova Holdings LLC",
  description: "Stehnova Holdings LLC: Applying disciplined market research and on-the-ground analysis to identify value-add real estate opportunities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={figtree.variable} style={{ scrollBehavior: 'smooth' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          {children}
          <footer className="border-t border-border bg-background py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                {/* Company Info */}
                <div className="space-y-3">
                  <img
                    src="/stehnova.png"
                    alt="Stehnova Holdings LLC logo"
                    className="h-56 w-56 rounded-full"
                  />
                </div>

                {/* Quick Links */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
                  <div className="flex flex-col space-y-2">
                    <a href="#hero" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Home
                    </a>
                    <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      About
                    </a>
                    <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Contact
                    </a>
                  </div>
                </div>

                {/* Contact */}
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-foreground">Contact</h3>
                  <a
                    href="mailto:stehnovaholdings@hotmail.com"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                      <path d="m22 7-8.97 5.7-1.66-2.03"/>
                    </svg>
                    stehnovaholdings@hotmail.com
                  </a>
                </div>
              </div>

              {/* Bottom Bar */}
              <div className="border-t border-border pt-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                  <div className="text-sm text-muted-foreground">
                    © 2026 Stehnova Holdings LLC. All rights reserved.
                  </div>
                  <div className="flex items-center space-x-4">
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Privacy Policy
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                      Terms of Service
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
