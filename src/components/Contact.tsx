import { FiMail, FiGithub, FiLinkedin } from "react-icons/fi";

function Contact() {
  return (
    <section id="contact" className="border-t border-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Get In Touch</h2>

          <p className="mb-10 max-w-xl text-zinc-400">
            I'm open to connecting with professionals and organizations working
            across IT infrastructure, systems administration, and software
            engineering. If you'd like to discuss technology, collaboration, or
            potential opportunities, I'd love to connect.
          </p>

          <div className="grid gap-4 sm:grid-cols-3">
            {/* Email - Primary */}
            <a
              href="mailto:devxsameer@gmail.com"
              className="group rounded-xl border border-zinc-700 bg-linear-to-br from-zinc-900 to-zinc-900/50 p-5 transition-colors hover:border-zinc-600"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800 text-zinc-300 transition-colors group-hover:bg-zinc-700 group-hover:text-zinc-100">
                <FiMail className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-semibold">Email</h3>
              <p className="text-xs text-zinc-400">Nickoluoch1130@gmail.com</p>
            </a>

            {/* GitHub - Secondary */}
            <a
              href="https://github.com/nickonyi"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/50"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-500 transition-colors group-hover:bg-zinc-800 group-hover:text-zinc-300">
                <FiGithub className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-medium text-zinc-300">GitHub</h3>
              <p className="text-xs text-zinc-500">@nickonyi</p>
            </a>

            {/* LinkedIn - Secondary */}
            <a
              href="https://www.linkedin.com/in/nickleyde-onyango/"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-xl border border-zinc-800/60 bg-zinc-900/30 p-5 transition-colors hover:bg-zinc-900/50"
            >
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-zinc-800/50 text-zinc-500 transition-colors group-hover:bg-zinc-800 group-hover:text-zinc-300">
                <FiLinkedin className="h-5 w-5" />
              </div>
              <h3 className="mb-1 text-sm font-medium text-zinc-300">
                LinkedIn
              </h3>
              <p className="text-xs text-zinc-500">@nickonyi</p>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
