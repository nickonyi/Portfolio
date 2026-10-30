function Navigation() {
  return (
    <nav
      aria-label="primary  navigation"
      className="sticky top-0 z-50 w-full border-b border-zinc-900 bg-neutral-950/80 backdrop-blur-sm transition-colors"
    >
      <div className="container mx-auto p-4">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between">
          <a
            href="#"
            className="font-mono text-xl font-bold"
            aria-label="Go to top"
          >
            Nickonyi<span className="text-zinc-600">.</span>
          </a>

          <div className="flex items-center gap-1 sm:gap-1">
            <a
              href="#projects"
              aria-label="View projects"
              className="rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100"
            >
              Projects
            </a>
            <a
              href="#skills"
              aria-label="View skills"
              className="hidden rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:block"
            >
              Skills
            </a>
            <a
              href="#about"
              aria-label="About me"
              className="hidden rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:block"
            >
              About
            </a>
            <a
              href="#contact"
              aria-label="Contact me"
              className="hidden rounded-md px-2.5 py-1.5 text-sm text-zinc-400 transition-colors hover:text-zinc-100 sm:block"
            >
              Contact
            </a>
            <a
              href="/resume/Sameer_Ali_Backend_Engineer.pdf"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              className="ml-1 rounded-md border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-sm text-zinc-100 transition-colors hover:bg-zinc-800 sm:ml-2"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
