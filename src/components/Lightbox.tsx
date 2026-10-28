import { useCallback, useEffect, useRef } from 'react'
import type { GalleryImage } from '../data/gallery'

type LightboxProps = {
  images: GalleryImage[]
  index: number
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const total = images.length
  const current = images[index]

  const goPrev = useCallback(() => {
    onNavigate((index - 1 + total) % total)
  }, [index, total, onNavigate])

  const goNext = useCallback(() => {
    onNavigate((index + 1) % total)
  }, [index, total, onNavigate])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return
    if (!dialog.open) dialog.showModal()
    const onDialogClose = () => onClose()
    dialog.addEventListener('close', onDialogClose)
    return () => dialog.removeEventListener('close', onDialogClose)
  }, [onClose])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [goPrev, goNext])

  if (!current) return null

  const controlClass =
    'absolute z-[1] cursor-pointer rounded-lg border-0 bg-sea-text/80 px-3 py-2 text-sea-ink shadow-[1px_1px_5px_#1b4372] backdrop-blur-[10px] hover:bg-sea-text'

  return (
    <dialog
      ref={dialogRef}
      aria-label={`Image viewer, ${index + 1} of ${total}`}
      className="fixed inset-0 m-0 h-full max-h-none w-full max-w-none border-0 bg-transparent p-0 backdrop:bg-sea-ink/70 backdrop:backdrop-blur-[10px] open:flex open:cursor-zoom-out open:items-center open:justify-center"
      onClick={() => dialogRef.current?.close()}
    >
      <div className="relative cursor-auto" onClick={(e) => e.stopPropagation()}>
        <img
          src={current.src}
          alt={current.alt}
          className="block max-h-[92vh] max-w-[92vw] rounded-lg object-contain"
        />

        <button
          type="button"
          aria-label="Close"
          className={`${controlClass} top-2 right-2 text-xs`}
          onClick={() => dialogRef.current?.close()}
        >
          ✕
        </button>

        {total > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              className={`${controlClass} top-1/2 left-2 -translate-y-1/2`}
              onClick={goPrev}
            >
              ‹
            </button>
            <button
              type="button"
              aria-label="Next image"
              className={`${controlClass} top-1/2 right-2 -translate-y-1/2`}
              onClick={goNext}
            >
              ›
            </button>
          </>
        )}

        <p className="sr-only">
          Image {index + 1} of {total}
        </p>
      </div>
    </dialog>
  )
}
