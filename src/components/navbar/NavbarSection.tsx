interface SectionListProps {
  sections: { id: string }[];
  activeSection: string;
}
export default function NavbarSectionList({ sections, activeSection }: SectionListProps) {
  return (
    <ul className="flex list-none items-center justify-center gap-1 lg:gap-2 rounded-full border border-black/10 bg-black/5 px-2 py-1 dark:border-white/10 dark:bg-white/10">
      {sections.map((s) => (
        <li key={s.id} className="relative">
          <div
            className={`rounded-full transition-all duration-300 ease-in-out py-1 ${
              activeSection === s.id ? "bg-white/10" : "bg-transparent"
            }`}
          >
            <a
              href={`#${s.id}`}
              className="px-3 lg:px-4 py-2 rounded-full transition relative text-base whitespace-nowrap animated-line"
            >
              {s.id.charAt(0).toUpperCase() + s.id.slice(1)}
              <span className="absolute left-1/2 top-[-8px] transform -translate-x-1/2 h-[4px] w-[32px] overflow-visible pointer-events-none">
                <span
                  className={`block h-full w-full bg-[var(--foreground)] transition-transform duration-300 ease-in-out origin-center rounded-t-xl shadow-[rgba(255,255,255,0.8)] ${
                    activeSection === s.id
                      ? "scale-x-100 opacity-100 shadow-[0_0_12px_#ffffff,0_0_24px_#ffffff,0_0_40px_#ffffff]"
                      : "scale-x-0"
                  }`}
                />
              </span>
            </a>
          </div>
        </li>
      ))}
    </ul>
  );
}