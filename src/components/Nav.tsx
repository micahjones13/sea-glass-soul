import { NavLink } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/gallery', label: 'Gallery', end: false },
  { to: '/contact', label: 'Contact', end: false },
] as const

export function Nav() {
  return (
    <nav
      className="sticky top-0 z-20 flex w-full justify-center gap-2 bg-sea-navy/90 px-2 py-3 backdrop-blur-[10px] md:gap-4"
      aria-label="Main"
    >
      {links.map(({ to, label, end }) => (
        <NavLink
          key={to}
          to={to}
          end={end}
          className={({ isActive }) =>
            [
              'rounded-full px-4 py-2 text-base text-sea-text no-underline transition-colors duration-[250ms] ease-in-out hover:bg-sea-navy-hover',
              isActive ? 'bg-sea-gold text-sea-ink hover:bg-sea-gold' : '',
            ].join(' ')
          }
        >
          {label}
        </NavLink>
      ))}
    </nav>
  )
}
