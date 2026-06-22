/** @type {import('next').Metadata} */
export const rootMetadata = {
  metadataBase: new URL('https://vivek.technewity.com/'),
  title: {
    template: '%s | Vivek Pandey',
    default: 'Vivek Pandey • Full Stack Developer & AI Engineer',
  },
  description:
    "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
  generator: 'Vivek Pandey',
  applicationName: 'Vivek Pandey',
  referrer: 'origin-when-cross-origin',
  keywords: [
    'Vivek Pandey',
    'Portfolio',
    'Full Stack Developer',
    'AI Engineer',
    'Machine Learning',
    'Three.js',
    'Next.js',
  ],
  authors: [{ name: 'Vivek Pandey', url: 'https://github.com/Vpandey-tech' }],
  creator: 'Vivek Pandey',
  publisher: 'Vivek Pandey',
  twitter: {
    card: 'summary_large_image',
    title: 'Vivek Pandey',
    description:
      "Explore Vivek Pandey's interactive portfolio featuring Full Stack and AI projects.",
    siteId: '1467726470533754880',
    creator: '@Vpandey_tech',
    creatorId: '1467726470533754880',
    images: {
      url: 'https://vivek.technewity.com/website-screenshot.png',
      alt: 'Portfolio Screenshot',
    },
  },
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};
