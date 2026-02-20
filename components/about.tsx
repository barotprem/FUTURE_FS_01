'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function About() {
  const { ref, isVisible } = useScrollAnimation()

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-card border-y border-border"
    >
      <div className="max-w-3xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            About Me
          </h2>

          <div className="space-y-4 text-muted-foreground">
            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              I'm a passionate full stack developer with a strong foundation in building scalable web applications. With expertise in modern frameworks and technologies, I transform ideas into elegant, high-performance solutions that users love.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              My approach combines clean code principles with attention to detail, ensuring maintainability and performance. I'm committed to continuous learning and staying current with industry best practices.
            </p>

            <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to open source projects, or designing intuitive user experiences that bridge the gap between functionality and aesthetics.
            </p>
          </div>

          {/* Key attributes */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-10">
            {[
              { label: 'Clean Code', value: '✓' },
              { label: 'Scalable Apps', value: '✓' },
              { label: 'Performance', value: '✓' },
              { label: 'UI/UX Focus', value: '✓' },
              { label: 'API Design', value: '✓' },
              { label: 'DevOps Ready', value: '✓' },
            ].map((item) => (
              <div
                key={item.label}
                className="p-4 rounded-lg bg-background/50 border border-border text-center"
              >
                <div className="text-xl font-semibold text-accent mb-1">
                  {item.value}
                </div>
                <div className="text-sm text-muted-foreground">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
