import { useState } from 'react'
import SectionTitle from './components/SectionTitle'
import ProjectCard from './components/ProjectCard'
import ContactItem from './components/ContactItem'
import { navLinks, skills, services, projects, contactItems, socialLinks } from './data/portfolioData'

function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const name = formData.get('name')?.toString().trim() || 'Client'
    const email = formData.get('email')?.toString().trim() || 'No email provided'
    const message = formData.get('message')?.toString().trim() || 'No message provided'

    const whatsappMessage = `New Contact Message:\nName: ${name}\nEmail: ${email}\nMessage: ${message}`
    const whatsappUrl = `https://wa.me/2347017784572?text=${encodeURIComponent(whatsappMessage)}`

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
    event.currentTarget.reset()
  }

  return (
    <div className="min-h-screen bg-[#070d18] text-slate-200">
      <header className="sticky top-0 z-50 border-b border-[#1a2437] bg-[#0b1120]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <a href="#home" className="flex items-center gap-3">
              <img src="/favicon.png" alt="Logo" className="h-10 w-10 rounded-xl object-cover ring-1 ring-[#d4af72]/40" />
              <span className="text-xl font-black tracking-tight text-[#f3d698]">Taofeek</span>
            </a>

            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md border border-[#d4af72]/30 bg-[#111a2d] p-2 text-[#f3d698] md:hidden"
              onClick={() => setMobileMenuOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              <i className="fa-solid fa-bars" aria-hidden="true" />
            </button>

            <nav className={`${mobileMenuOpen ? 'block' : 'hidden'} absolute left-4 right-4 top-full rounded-2xl border border-[#1a2437] bg-[#0d1424] p-4 shadow-2xl md:static md:block md:rounded-none md:border-0 md:bg-transparent md:p-0 md:shadow-none`}>
              <ul className="flex flex-col gap-4 text-sm font-semibold text-slate-300 md:flex-row md:items-center md:gap-8">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="transition hover:text-[#f3d698]" onClick={() => setMobileMenuOpen(false)}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-[#090f1b] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(212,175,114,0.18),_transparent_24%)]" />
          <div className="absolute -right-16 top-6 h-72 w-72 rounded-full bg-[#d4af72]/20 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-60 w-60 rounded-full bg-[#8db8ff]/10 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
            <div className="max-w-3xl">
              <p className="mb-5 inline-flex rounded-full border border-[#d4af72]/20 bg-[#d4af72]/5 px-3 py-1 text-sm font-medium text-[#f5e7c5]">
                Full Stack Developer • UI/UX Designer
              </p>
              <h1 className="text-4xl font-black tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
                Hi, I&apos;m <span className="text-[#f3d698]">Taofeek Olawale</span>
              </h1>
              <p className="mt-6 max-w-2xl text-lg text-slate-300">
                I design and build modern digital experiences that blend product thinking, clean engineering, and elegant user experiences.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="inline-flex items-center rounded-full bg-gradient-to-r from-[#f3d698] via-[#d4af72] to-[#c89b3c] px-6 py-3 font-semibold text-[#0b1120] shadow-[0_20px_40px_rgba(212,175,114,0.30)] transition hover:-translate-y-1"
                >
                  View My Work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center rounded-full border border-[#d4af72]/30 bg-white/5 px-6 py-3 font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-[#0d1424] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="About Me" />

            <div className="mt-14 grid items-center gap-12 lg:grid-cols-2">
              <div className="flex justify-center">
                <img
                  src="/md.jpeg"
                  alt="Taofeek Olawale"
                  className="h-[420px] w-full max-w-md rounded-[28px] border border-[#d4af72]/20 object-cover shadow-[0_35px_65px_rgba(0,0,0,0.35)]"
                />
              </div>

              <div>
                <h3 className="text-3xl font-bold tracking-tight text-white">Full Stack Developer &amp; UI/UX Designer</h3>
                <div className="mt-6 space-y-5 text-base leading-7 text-slate-300">
                  <p>
                    Hello! I&apos;m Olawale, a passionate full stack developer with over five years of experience creating
                    web and mobile applications. I specialize in modern JavaScript frameworks and bring a strong eye for
                    clean user experience and product design.
                  </p>
                  <p>
                    My journey in app development began during my software development studies, and I&apos;ve continued to
                    grow by building solutions that are practical, scalable, and user-focused.
                  </p>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-[#d4af72]/25 bg-[#111a2d] px-3 py-2 text-sm font-medium text-[#f5e7c5] transition hover:border-[#d4af72] hover:bg-[#d4af72] hover:text-[#08111d]"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-[#090f1b] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="My Services" subtitle="I deliver digital products that combine strategy, design, and engineering." />

            <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {services.map((service) => (
                <div key={service.title} className="rounded-2xl border border-[#1a2437] bg-[#0d1424] p-8 shadow-[0_20px_45px_rgba(0,0,0,0.20)] transition duration-300 hover:-translate-y-2 hover:border-[#d4af72]/40 hover:shadow-[0_25px_55px_rgba(212,175,114,0.10)]">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-[#d4af72]/15 to-[#8db8ff]/15 text-2xl text-[#f3d698]">
                    <i className={service.icon} aria-hidden="true" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">{service.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-300">{service.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="bg-[#0d1424] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="My Projects" subtitle="A few examples of products and systems I have built and contributed to." />

            <div className="mt-14 grid gap-8 lg:grid-cols-3">
              {projects.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  icon={project.icon}
                  link={project.link}
                />
              ))}
            </div>

            <div className="mt-12 text-center">
              <a
                href="https://github.com/Olawale9253"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 rounded-full bg-[#f3d698] px-6 py-3 text-sm font-semibold text-[#0b1120] transition hover:bg-[#f8e6b8]"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                View All Projects on GitHub
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#090f1b] py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
            <SectionTitle title="Contact Me" subtitle="Let&apos;s build something meaningful together." />

            <div className="mt-14 grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
              <div className="space-y-4">
                {contactItems.map((item) => (
                  <ContactItem
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    value={item.value}
                    href={item.href}
                  />
                ))}
              </div>

              <form onSubmit={handleSubmit} className="rounded-3xl border border-[#1a2437] bg-[#0d1424] p-6 shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:p-8">
                <div className="space-y-5">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-200">
                      Your Name
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      className="w-full rounded-xl border border-[#283750] bg-[#101a2c] px-4 py-3 text-white outline-none transition focus:border-[#d4af72] focus:ring-4 focus:ring-[#d4af72]/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-200">
                      Your Email
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="w-full rounded-xl border border-[#283750] bg-[#101a2c] px-4 py-3 text-white outline-none transition focus:border-[#d4af72] focus:ring-4 focus:ring-[#d4af72]/15"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-200">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows="5"
                      className="w-full resize-none rounded-xl border border-[#283750] bg-[#101a2c] px-4 py-3 text-white outline-none transition focus:border-[#d4af72] focus:ring-4 focus:ring-[#d4af72]/15"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#f3d698] to-[#d4af72] px-6 py-3 font-semibold text-[#0b1120] shadow-[0_20px_40px_rgba(212,175,114,0.25)] transition hover:-translate-y-1"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-[#040a13] py-10 text-white">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 border-b border-white/10 pb-8 md:flex-row md:items-center md:justify-between">
           

            <div className="flex items-center gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.icon}
                  href={link.href}
                  target={link.href.startsWith('http') ? '_blank' : undefined}
                  rel={link.href.startsWith('http') ? 'noreferrer' : undefined}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4af72]/20 bg-[#101a2c] text-[#f3d698] transition hover:border-[#d4af72] hover:bg-[#d4af72] hover:text-[#0b1120]"
                  aria-label="Social link"
                >
                  <i className={link.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="pt-6 text-center text-sm text-slate-400">
            © 2026 Taofeek Olawale. All Rights Reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
