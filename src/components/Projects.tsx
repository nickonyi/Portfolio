import { FiExternalLink, FiGithub } from "react-icons/fi";
import { projects } from "../data/utils.ts";

function Projects() {
  return (
    <section id="projects" className="border-t border-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mb-12 text-zinc-500">
            Real systems I designed, built, and deployed end-to-end.
          </p>

          <div className="space-y-8">
            {projects.map((project) => (
              <div
                key={project.title}
                className={`rounded-xl border p-6 transition-colors sm:p-8 ${
                  project.flagship
                    ? "border-zinc-700 bg-linear-to-br from-zinc-900 to-zinc-900/50"
                    : "border-zinc-800/60 bg-zinc-900/30 hover:bg-zinc-900/50"
                }`}
              >
                {/* Header */}
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="mb-1 flex items-center gap-2">
                      <h3 className="text-xl font-bold sm:text-2xl">
                        {project.title}
                      </h3>
                      {project.flagship && (
                        <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-xs font-medium text-zinc-400">
                          Flagship
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-zinc-500">{project.subtitle}</p>
                  </div>

                  {/* Primary CTA: GitHub */}
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
                  >
                    <FiGithub className="h-4 w-4" />
                    View Code
                  </a>
                </div>

                <p className="mb-5 text-sm leading-relaxed text-zinc-400 sm:text-base">
                  {project.description}
                </p>

                {/* What I Built */}
                <div className="mb-5">
                  <h4 className="mb-3 text-sm font-semibold text-zinc-300">
                    What I Built
                  </h4>
                  <ul className="grid gap-2 sm:grid-cols-2">
                    {project.highlights.map((highlight) => (
                      <li
                        key={highlight}
                        className="flex items-start gap-2 text-sm text-zinc-500"
                      >
                        <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-zinc-600" />
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech stack */}
                <div className="mb-5 flex flex-wrap gap-1.5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-md bg-zinc-800/50 px-2.5 py-1 text-xs text-zinc-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Secondary links */}
                <div className="flex flex-wrap gap-4 border-t border-zinc-800/50 pt-4">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-500 transition-colors hover:text-zinc-300"
                    >
                      <FiExternalLink className="h-3.5 w-3.5" />
                      Live
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
