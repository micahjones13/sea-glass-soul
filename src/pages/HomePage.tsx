import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlassPane } from '../components/GlassPane'
import { categories } from '../data/gallery'

export function HomePage() {
  useEffect(() => {
    document.title = 'Seaglass Soul — Handcrafted Sea Glass Art & Resin Creations'
  }, [])

  return (
    <GlassPane className="home">
      <h1 className="text-center font-display text-[2rem] font-bold">Seaglass Soul</h1>
      <p className="mx-auto mt-1 max-w-md text-center font-script text-2xl text-sea-gold">
        Crafted by the sea, inspired by the soul
      </p>
      <section className="mx-auto mt-6 flex max-w-2xl flex-col items-center">
        <div className="intro m-4">
          <img
            src="/assets/patty_at_booth.jpg"
            alt="Patty at market"
            className="mx-auto max-w-[300px] shadow-lg shadow-sea-navy/30"
          />
        </div>
        <div className="intro m-4 w-full">
          <h2 className="mb-4 text-center font-display text-xl font-bold">About</h2>
          <p className="mb-4 leading-relaxed">
            I have a life-long love of the beach, especially collecting sea
            glass. I&apos;ve spent hours scouring beaches on the east &amp; west
            coasts of the US, Mexico, Hawaii, and even Bali. What began as a
            hobby grew into a passion for creating art. Eventually I discovered
            resin as the perfect medium to preserve these treasures. This has
            evolved into including flowers my husband grows in our yard, crushed
            glass, tile, beads, and other bits and bobs. Thank you for letting
            me share my passion with you. Each piece I create is unique and
            tells a story of the ocean, the seasons, and the moments that bring
            beauty to everyday life.
          </p>
          <p className="mb-2">My art falls under three categories:</p>
          <ul className="mb-6 flex flex-wrap gap-2 pl-0">
            {categories.map((category) => (
              <li key={category} className="list-none">
                <Link
                  to={`/gallery?category=${encodeURIComponent(category)}`}
                  className="inline-block rounded-full border border-sea-text/40 px-4 py-1.5 text-sm no-underline transition-colors duration-150 hover:border-sea-text hover:bg-sea-text/10"
                >
                  {category}
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              to="/gallery"
              className="pill-button bg-sea-gold hover:bg-sea-gold/90 text-sea-ink shadow-md shadow-sea-navy/20"
            >
              Browse the Gallery
            </Link>
            <Link
              to="/contact"
              className="pill-button border border-sea-text/60 :ho text-sea-text"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>
    </GlassPane>
  )
}
