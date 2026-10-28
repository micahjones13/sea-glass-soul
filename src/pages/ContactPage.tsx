import { useEffect } from 'react'
import { GlassPane } from '../components/GlassPane'

export function ContactPage() {
  useEffect(() => {
    document.title = 'Contact — Seaglass Soul'
  }, [])

  return (
    <GlassPane className="contact">
      <h1 className="text-center font-display text-[2rem] font-bold">Contact</h1>
      <section className="mt-6 flex flex-col items-center gap-8 lg:mx-auto lg:max-w-[75%] lg:flex-row lg:items-center">
        <img
          src="/assets/patty_with_family.jpg"
          alt="Patty with family"
          className="order-2 mx-auto max-w-[300px] shadow-lg shadow-sea-navy/30 lg:order-1 lg:max-w-[45%]"
        />
        <div className="cta order-1 flex-1 lg:order-2">
          <p className="mx-auto mb-4 block max-w-[30em] text-center lg:mx-0 lg:text-left">
            Whether you&apos;ve got a question or would like to commission a
            piece, I&apos;d love to hear from you!
          </p>
          <a
            href="mailto:contact@seaglass-soul.com"
            className="pill-button mx-auto block max-w-[10em] bg-sea-gold hover:bg-sea-gold/90 text-sea-ink shadow-md shadow-sea-navy/20 lg:mx-0"
          >
            Email Me
          </a>
        </div>
      </section>
    </GlassPane>
  )
}
