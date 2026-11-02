function About() {
  return (
    <section id="about" className="border-t border-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">About Me</h2>
          <p className="mb-10 text-zinc-500">
            Technology professional focused on systems, software, and solving
            practical business problems.
          </p>

          <div className="space-y-5 text-base leading-relaxed text-zinc-400">
            <p>
              I'm a Systems & Software Engineer based in Nairobi, Kenya, with
              professional experience in IT support and systems operations
              across multiple locations in East Africa. My experience involves
              supporting business technology environments, troubleshooting
              technical issues, maintaining systems, and helping ensure that
              technology supports daily operations.
            </p>

            <p>
              Alongside my work in IT operations, I've been developing my
              software engineering capabilities through building web
              applications and working with backend technologies, databases, and
              APIs. I'm interested in understanding how infrastructure,
              software, and automation work together to support complete
              technology environments.
            </p>

            <p>
              My approach to technology starts with understanding the problem
              rather than immediately choosing a tool or implementation. I focus
              on identifying requirements, investigating root causes, evaluating
              possible solutions, and applying the approach that best addresses
              the situation. Depending on the problem, that could involve
              systems administration, infrastructure improvements, automation,
              software development, or a combination of these.
            </p>

            <p>
              I'm continuously developing my technical capabilities,
              strengthening my understanding of systems and software
              engineering, and looking for opportunities to apply technology to
              meaningful operational and business challenges.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2">
            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-5">
              <h3 className="mb-1 text-sm font-medium text-zinc-300">
                Location
              </h3>
              <p className="text-sm text-zinc-500">Nairobi, Kenya</p>
            </div>

            <div className="rounded-lg border border-zinc-800/60 bg-zinc-900/30 p-5">
              <h3 className="mb-1 text-sm font-medium text-zinc-300">
                Education
              </h3>
              <p className="text-sm text-zinc-500">
                Bachelor of Technology in Information Technology
              </p>
              <p className="text-xs text-zinc-600">
                Technical University of Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
