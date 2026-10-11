export default function SectionTitle({ title, subtitle }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <h2 className="relative inline-block text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl">
        {title}
        <span className="absolute -bottom-3 left-1/2 h-1 w-16 -translate-x-1/2 rounded-full bg-gradient-to-r from-[#8db8ff] via-[#d4af72] to-[#f3d698]" />
      </h2>
      {subtitle ? <p className="mt-7 text-base text-slate-300 sm:text-lg">{subtitle}</p> : null}
    </div>
  )
}
