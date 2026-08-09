/**
 * Merchandise Data Catalog
 * - id: Unique identifier
 * - name: Item title
 * - blurb: Item description / drop details
 * - icon: SVG vector path geometry
 * - imgUrl: Optional photo URL (falls back to SVG icon if null or empty)
 */
export const merchItems = [
  {
    id: 'merch-hoodie',
    name: 'SCD Hoodie',
    blurb: 'Heavyweight fleece with summit mark. Soft drop closer to event day.',
    icon: '<path d="M8 4l4 2 4-2 3 4-3 2v10H5V10L2 8z"/>',
    imgUrl: null
  },
  {
    id: 'merch-tee',
    name: 'Build.Power.Lead Tee',
    blurb: 'Everyday tee with the three-motion theme lockup.',
    icon: '<path d="M7 4h10l2 4-3 2v10H8V10L5 8z"/>',
    imgUrl: null
  },
  {
    id: 'merch-pins',
    name: 'Enamel Pin Set',
    blurb: 'Collectible chip + grid pins for bags and lanyards.',
    icon: '<circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="2.4"/>',
    imgUrl: null
  },
  {
    id: 'merch-tote',
    name: 'Tote Bag',
    blurb: 'Carry-all tote for community hub days and booths.',
    icon: '<rect x="4" y="8" width="16" height="12" rx="1.5"/><path d="M8 8V6a4 4 0 018 0v2"/>',
    imgUrl: null
  },
  {
    id: 'merch-stickers',
    name: 'Sticker Sheet',
    blurb: 'Laptop-ready stickers from the South Summit primer.',
    icon: '<rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 7h6M9 11h6M9 15h3"/>',
    imgUrl: null
  },
  {
    id: 'merch-lanyard',
    name: 'Lanyard',
    blurb: 'Badge lanyard for twin-venue check-in.',
    icon: '<path d="M12 3v6M9 9h6l2 12H7L9 9z"/>',
    imgUrl: null
  }
];