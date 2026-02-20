'use client'

import { useEffect, useState } from 'react'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto text-center">
        <div
          className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            Full Stack Developer
          </h1>
        </div>

        <div
          className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <p className="text-lg sm:text-xl text-muted-foreground mb-4 max-w-2xl mx-auto">
            I'm <span className="font-semibold">Barot Prem Kumar</span>, crafting clean code and scalable applications with a focus on performance and modern UI/UX.
          </p>
        </div>

        <div
          className={`transition-all duration-1000 delay-400 flex flex-col sm:flex-row gap-4 justify-center mt-8 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
        >
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3 bg-accent text-accent-foreground font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            View Projects
            <ArrowRight className="ml-2 w-4 h-4" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center px-8 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-all duration-300"
          >
            Contact Me
          </a>
        </div>

        {/* Scroll indicator */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
        >
          <div className="animate-bounce">
            <svg
              className="w-6 h-6 text-muted-foreground"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </div>
    </section>
  )
}
