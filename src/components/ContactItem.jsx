export default function ContactItem({ icon, label, value, href }) {
  const content = (
    <div className="flex items-start gap-4 rounded-2xl border border-[#1a2437] bg-[#0d1424] p-4 shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-[#f3d698] to-[#d4af72] text-lg text-[#0b1120] shadow-[0_12px_24px_rgba(212,175,114,0.25)]">
        <i className={icon} aria-hidden="true" />
      </div>
      <div>
        <h4 className="text-base font-semibold text-white">{label}</h4>
        <p className="mt-1 text-sm text-slate-300">{value}</p>
      </div>
    </div>
  )

  if (!href || href === '#') {
    return content
  }

  return (
    <a href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noreferrer' : undefined} className="block transition hover:-translate-y-0.5">
      {content}
    </a>
  )
}
