import { primarySkills, secondarySkills, practices } from "../data/utils";

function Skills() {
  return (
    <section id="skills" className="border-t border-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            What I Work With
          </h2>
          <p className="mb-12 text-zinc-500">
            Working across IT infrastructure, systems administration, software
            development, and automation to solve practical technology problems.
            <span className="block text-sm text-zinc-600">
              Technologies and practices drawn from my professional experience,
              hands-on projects, and continued learning.
            </span>
          </p>

          {/* Primary: Backend - visually dominant */}
          <div className="mb-8 rounded-xl border border-zinc-800 bg-zinc-900 p-6">
            <div className="mb-4 flex items-center gap-3">
              <h3 className="text-lg font-semibold text-zinc-100">
                {primarySkills.title}
              </h3>
              <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                {primarySkills.subtitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {primarySkills.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md bg-zinc-800 px-3 py-1.5 text-sm font-medium text-zinc-200"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Secondary: Database & Frontend */}
          <div className="mb-8 grid gap-6 sm:grid-cols-2">
            {secondarySkills.map((category) => (
              <div
                key={category.title}
                className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-5"
              >
                <div className="mb-3 flex items-center gap-2">
                  <h3 className="font-medium text-zinc-200">
                    {category.title}
                  </h3>
                  {category.subtitle && (
                    <span className="text-xs text-zinc-600">
                      {category.subtitle}
                    </span>
                  )}
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-md bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-400"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Differentiator: Engineering Practices */}
          <div className="rounded-lg border border-dashed border-zinc-800 bg-zinc-900/20 p-5">
            <div className="mb-3 flex items-center gap-2">
              <h3 className="font-medium text-zinc-200">{practices.title}</h3>
              <span className="text-xs text-zinc-500">
                {practices.subtitle}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              {practices.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-md border border-zinc-800 bg-zinc-900/50 px-2.5 py-1 text-xs text-zinc-400"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
