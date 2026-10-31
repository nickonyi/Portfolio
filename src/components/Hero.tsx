import { FiGithub, FiLinkedin, FiMapPin } from "react-icons/fi";
import { SiGoogledocs } from "react-icons/si";

function Hero() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <div className="mb flex items-center gap-4">
            <img
              src="https://github.com/devxsameer.png"
              alt="Sameer Ali"
              className="h-24 w-24 rounded-full ring-2 ring-zinc-800"
            />
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">
                Hi, I'm Nick 👋
              </h2>
              <div className="mt-1 flex items-center gap-2 text-zinc-500">
                <FiMapPin className="h-3.5 w-3.5" />
                <span className="text-sm">Nairobi, Kenya</span>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 rounded-full bg-zinc-900 px-3 py-1 font-mono text-sm font-medium text-zinc-300 ring-1 ring-zinc-800">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              Open to Systems Administration, IT Infrastructure & Software
              Engineering Roles
            </span>
          </div>

          <h1 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
            Systems & Software Engineer
            <span className="mt-1 block text-xl text-zinc-500 sm:text-2xl">
              Focused on IT Infrastructure, Systems Administration & Software
              Development
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-relaxed text-zinc-400 sm:text-lg">
            I work across IT infrastructure, systems administration, automation,
            and software development to solve practical business and operational
            problems. I focus on understanding requirements, identifying the
            root cause of challenges, and applying appropriate technology
            solutions to improve reliability, efficiency, and how organizations
            operate.
          </p>

          <div className="flex flex-wrap gap-3 mt-6">
            <a
              href="https://github.com/nickonyi"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-950 transition-colors hover:bg-white"
            >
              <FiGithub className="h-4 w-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/nickleyde-onyango-586436246/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              <FiLinkedin className="h-4 w-4" />
              LinkedIn
            </a>
            <a
              href="/resume/Sameer_Ali_Backend_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm font-medium text-zinc-100 transition-colors hover:bg-zinc-800"
            >
              <SiGoogledocs className="h-4 w-4" />
              Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
