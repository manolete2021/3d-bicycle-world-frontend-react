export const bicycleTypes = [
  {
    id: 'road',
    name: 'Road',
    label: 'Road',
    image: '/images/Road.avif',
    accent: '#b83232',
    accentGlow: 'rgba(184, 50, 50, 0.45)',
    tagline: 'Speed upon the asphalt',
    priceAud: 3299,
    description:
      'Lightweight race geometry and 700c wheels built for fast rides on sealed roads.',
  },
  {
    id: 'mountain',
    name: 'Mountain',
    label: 'Mountain',
    image: '/images/Mountain.avif',
    accent: '#3d7a52',
    accentGlow: 'rgba(61, 122, 82, 0.45)',
    tagline: 'Conquer the wild terrain',
    priceAud: 2899,
    description:
      'Trail-ready suspension and grip for rocks, roots, and steep off-road rides.',
  },
  {
    id: 'gravel',
    name: 'Gravel',
    label: 'Gravel',
    image: '/images/Gravel.avif',
    accent: '#c47a2a',
    accentGlow: 'rgba(196, 122, 42, 0.45)',
    tagline: 'Between paths and legends',
    priceAud: 3599,
    description:
      'Wider tyres and endurance geometry for mixed tarmac, gravel, and light touring.',
  },
  {
    id: 'bmx',
    name: 'BMX',
    label: 'BMX',
    image: '/images/BMX.avif',
    accent: '#7b3fa8',
    accentGlow: 'rgba(123, 63, 168, 0.45)',
    tagline: 'Acrobatics in the penumbra',
    priceAud: 899,
    description:
      'Compact, durable frame made for parks, street tricks, and pump tracks.',
  },
  {
    id: 'electric',
    name: 'Electric',
    label: 'Electric',
    image: '/images/Electrical.avif',
    accent: '#2a9dad',
    accentGlow: 'rgba(42, 157, 173, 0.45)',
    tagline: 'Arcane impulse',
    priceAud: 4999,
    description:
      'Smooth pedal-assist and integrated battery for easier hills and longer commutes.',
  },
  {
    id: 'commuter',
    name: 'Commuter',
    label: 'Commuter',
    image: '/images/Communter.avif',
    accent: '#4a6fa8',
    accentGlow: 'rgba(74, 111, 168, 0.45)',
    tagline: 'Daily ritual of the city',
    priceAud: 1899,
    description:
      'Upright, comfortable setup for daily commutes, errands, and city bike paths.',
  },
];

export function formatPriceAud(amount) {
  return new Intl.NumberFormat('en-AU', {
    style: 'currency',
    currency: 'AUD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
}
