import { useEffect } from 'react'
import { GalleryGrid } from '../components/GalleryGrid'
import { GlassPane } from '../components/GlassPane'

export function GalleryPage() {
  useEffect(() => {
    document.title = 'Gallery — Seaglass Soul'
  }, [])

  return (
    <GlassPane className="gallery">
      <h1 className="mb-1 text-center font-display text-[2rem] font-bold">Gallery</h1>
      <p className="mb-6 text-center text-sm text-sea-text/80">Click any piece to see it full-size</p>
      <GalleryGrid />
    </GlassPane>
  )
}
