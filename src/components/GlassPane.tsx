import type { ReactNode } from 'react'

type GlassPaneProps = {
  children: ReactNode
  className?: string
  as?: 'main' | 'div' | 'section'
}

export function GlassPane({
  children,
  className = '',
  as: Tag = 'main',
}: GlassPaneProps) {
  return (
    <Tag
      className={[
        'mx-auto mt-4 mb-6 max-w-[75%] flex-1 rounded-2xl bg-sea-glass p-4 shadow-xl shadow-sea-navy/10 backdrop-blur-[10px] md:p-8',
        className,
      ]
        .filter(Boolean)
        .join(' ')}
    >
      {children}
    </Tag>
  )
}
