export type GalleryCategory = 'Framed Art' | 'Deep Pours' | 'Other'

export type GalleryImage = {
  src: string
  alt: string
  category: GalleryCategory
}

export const categories: GalleryCategory[] = ['Framed Art', 'Deep Pours', 'Other']

export const galleryImages: GalleryImage[] = [
  {
    src: '/assets/beach_umbrella.jpg',
    alt: 'A framed mixed-media piece, showing a beach umbrella in the sand overlooking the ocean with a sailing boat',
    category: 'Framed Art',
  },
  {
    src: '/assets/bird_with_border.jpg',
    alt: 'A framed seaglass piece with a bluebird on a branch and blue seaglass set into the wooden frame',
    category: 'Framed Art',
  },
  {
    src: '/assets/bloom_green.jpg',
    alt: 'A resin piece poured to look like a pink blooming flower',
    category: 'Deep Pours',
  },
  {
    src: '/assets/bloom_purple.jpg',
    alt: 'A resin piece poured to look like a purple and blue flower',
    category: 'Deep Pours',
  },
  {
    src: '/assets/chunky_blue_ocean.jpg',
    alt: 'A framed seaglass piece using larger chunks of glass in gradient shades of blue, representing waves against a beach',
    category: 'Framed Art',
  },
  {
    src: '/assets/deep_pour_heart.jpg',
    alt: 'A heart-shaped deep pour resin piece with an arrangement of flowers inset',
    category: 'Deep Pours',
  },
  {
    src: '/assets/deep_pour_hexagon.jpg',
    alt: 'A hexagonal deep pour resin piece with an arrangement of flowers inset',
    category: 'Deep Pours',
  },
  {
    src: '/assets/deep_pour_peonies.jpg',
    alt: 'A square deep pour resin piece with peonies inset',
    category: 'Deep Pours',
  },
  {
    src: '/assets/jar.jpg',
    alt: 'A small resin jar made to look like wood',
    category: 'Other',
  },
  {
    src: '/assets/lindon_temple.jpg',
    alt: 'Seaglass mosaic of the Lindon, Utah Temple of The Church of Jesus Christ of Latter-day Saints with blue and white patterns',
    category: 'Framed Art',
  },
  {
    src: '/assets/mama_turtle_with_baby.jpg',
    alt: 'A framed seaglass piece depicting a mother sea turtle swimming with her child',
    category: 'Framed Art',
  },
  {
    src: '/assets/shell_with_beach_scene.jpg',
    alt: 'A seashell with a beach resin pour inset',
    category: 'Other',
  },
  {
    src: '/assets/turtles.jpg',
    alt: 'An arrangement of resin turtle pours on white display shelving',
    category: 'Deep Pours',
  },
]
