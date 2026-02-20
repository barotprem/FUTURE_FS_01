'use client'

import { useScrollAnimation } from '@/hooks/use-scroll-animation'

export function Skills() {
  const { ref, isVisible } = useScrollAnimation()

  const skills = [
    { name: 'HTML', category: 'Frontend' },
    { name: 'CSS', category: 'Frontend' },
    { name: 'JavaScript', category: 'Frontend' },
    { name: 'React.js', category: 'Frontend' },
    { name: 'Node.js', category: 'Backend' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Git & GitHub', category: 'Tools' },
    { name: 'TypeScript', category: 'Language' },
  ]

  return (
    <section
      id="skills"
      ref={ref}
      className="py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-5xl mx-auto">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-12 text-center">
            Technical Skills
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {skills.map((skill, index) => (
              <div
                key={skill.name}
                className={`p-6 rounded-2xl bg-card border border-border shadow-soft hover-lift transition-all duration-500 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 0.1}s` : '0s',
                }}
              >
                <div className="text-center">
                  <h3 className="font-semibold text-lg mb-1">{skill.name}</h3>
                  <p className="text-sm text-muted-foreground">{skill.category}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
