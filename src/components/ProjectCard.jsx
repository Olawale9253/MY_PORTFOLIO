export default function ProjectCard({ title, description, icon, link }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-[#1a2437] bg-[#0d1424] shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition duration-300 hover:-translate-y-2 hover:border-[#d4af72]/40 hover:shadow-[0_25px_55px_rgba(212,175,114,0.08)]">
      <div className="flex h-52 items-center justify-center bg-gradient-to-br from-[#16233e] via-[#0c1426] to-[#d4af72]/15 text-5xl text-[#f3d698]">
        <i className={icon} aria-hidden="true" />
      </div>

      <div className="space-y-4 p-6">
        <h3 className="text-xl font-semibold text-white">{title}</h3>
        <p className="text-sm leading-6 text-slate-300">{description}</p>
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-semibold text-[#f3d698] transition group-hover:text-[#f8e6b8]"
        >
          View Project
          <i className="fa-solid fa-arrow-right text-xs" aria-hidden="true" />
        </a>
      </div>
    </article>
  )
}
