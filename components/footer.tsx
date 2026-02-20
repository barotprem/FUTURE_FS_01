'use client'

import { Github, Linkedin } from 'lucide-react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-card border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">Barot Prem Kumar</h3>
            <p className="text-muted-foreground">
              Full Stack Developer & UI/UX Enthusiast
            </p>
          </div>

          <div className="flex gap-4 mt-6 md:mt-0">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all hover-lift"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center hover:border-accent hover:text-accent transition-all hover-lift"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        <div className="border-t border-border pt-8">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} Barot Prem Kumar. All rights reserved. | Crafted with
            <span className="text-accent mx-1">✨</span>
            using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  )
}
