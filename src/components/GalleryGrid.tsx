import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import type { GalleryCategory } from '../data/gallery'
import { categories, galleryImages } from '../data/gallery'
import { Lightbox } from './Lightbox'

const ALL = 'All' as const
type Filter = GalleryCategory | typeof ALL

function isGalleryCategory(value: string | null): value is GalleryCategory {
  return value !== null && (categories as readonly string[]).includes(value)
}

export function GalleryGrid() {
  const [searchParams, setSearchParams] = useSearchParams()
  const [filter, setFilter] = useState<Filter>(() => {
    const requested = searchParams.get('category')
    return isGalleryCategory(requested) ? requested : ALL
  })
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  const filteredImages = useMemo(
    () =>
      filter === ALL ? galleryImages : galleryImages.filter((image) => image.category === filter),
    [filter],
  )

  const handleFilterChange = (next: Filter) => {
    setFilter(next)
    setSelectedIndex(null)
    setSearchParams(next === ALL ? {} : { category: next }, { replace: true })
  }

  return (
    <div>
      <div
        role="group"
        aria-label="Filter by category"
        className="mb-6 flex flex-wrap justify-center gap-2"
      >
        {([ALL, ...categories] as Filter[]).map((cat) => (
          <button
            key={cat}
            type="button"
            aria-pressed={filter === cat}
            onClick={() => handleFilterChange(cat)}
            className={[
              'rounded-full border px-4 py-1.5 text-sm transition-colors duration-150 cursor-pointer',
              filter === cat
                ? 'border-sea-gold bg-sea-gold text-sea-ink'
                : 'border-sea-text/40 text-sea-text hover:border-sea-text hover:bg-sea-text/10',
            ].join(' ')}
          >
            {cat}
          </button>
        ))}
      </div>

      {filteredImages.length === 0 ? (
        <p className="text-center text-sea-text/80">No pieces in this category yet.</p>
      ) : (
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 md:gap-4">
          {filteredImages.map((image, i) => (
            <button
              key={image.src}
              type="button"
              onClick={() => setSelectedIndex(i)}
              className="group aspect-square cursor-zoom-in overflow-hidden rounded-xl border-0 bg-sea-text/10 p-0 shadow-md shadow-sea-navy/20 transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-current"
            >
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="h-full w-full rounded-none object-cover transition-transform duration-200 group-hover:scale-105"
              />
            </button>
          ))}
        </div>
      )}

      {selectedIndex !== null && (
        <Lightbox
          images={filteredImages}
          index={selectedIndex}
          onClose={() => setSelectedIndex(null)}
          onNavigate={setSelectedIndex}
        />
      )}
    </div>
  )
}
