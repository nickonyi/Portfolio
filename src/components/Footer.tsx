function Footer() {
  return (
    <footer className="border-t border-zinc-800 py-10">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4 text-center text-sm">
        <div className="flex flex-wrap justify-center gap-6 text-zinc-400">
          <a href="#projects" className="transition-colors hover:text-zinc-100">
            Projects
          </a>
          <a
            href="/resume/Nickleyde_Onyango_System_Administrator.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-100"
          >
            Resume
          </a>
          <a
            href="https://github.com/nickonyi"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-zinc-100"
          >
            GitHub
          </a>
          <a
            href="mailto:nickoluoch1130@gmail.com"
            className="transition-colors hover:text-zinc-100"
          >
            Email
          </a>
        </div>
        <p className="text-zinc-600">© 2026 Nick Onyi</p>
      </div>
    </footer>
  );
}

export default Footer;
