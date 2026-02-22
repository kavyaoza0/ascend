
import { Project, Service } from './types';

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Aura Beauty',
    category: 'E-commerce',
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=1200',
    description: 'A luxurious shopping experience for a natural skincare brand.',
    longDescription: 'Aura wanted a website that felt as natural and high-end as their skincare line. We built a custom storefront that focuses on large, beautiful product photos and a simple, fast checkout process.',
    techStack: ['React', 'Shopify', 'Tailwind CSS', 'Framer Motion'],
    challenge: 'The brand needed to look expensive but stay extremely easy for customers to navigate on their phones.',
    solution: 'We used a minimal design approach with "sticky" navigation and a mobile-first checkout system.',
    link: '#'
  },
  {
    id: '2',
    title: 'Verve Studio',
    category: 'Architecture',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200',
    description: 'A minimal portfolio for a top architecture firm.',
    longDescription: 'Verve designs modern, clean spaces. Their website needed to reflect that. We created a portfolio that feels like a physical gallery, where the work takes center stage.',
    techStack: ['TypeScript', 'GSAP', 'Next.js'],
    challenge: 'Making large architectural photos load instantly without losing any detail.',
    solution: 'We implemented smart image processing that delivers the perfect size for every screen, keeping the site lightning fast.',
    link: '#'
  },
  {
    id: '3',
    title: 'Nexus Flow',
    category: 'Finance Tool',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200',
    description: 'A clear and simple dashboard for a modern startup.',
    longDescription: 'Nexus helps businesses track their growth. We designed a dashboard that makes complicated data look simple, helping founders make better decisions quickly.',
    techStack: ['React', 'D3.js', 'Node.js'],
    challenge: 'Displaying thousands of data points without overwhelming the user.',
    solution: 'We used custom charts and a clean layout that only shows the most important information first.',
    link: '#'
  }
];

export const SERVICES: Service[] = [
  {
    id: 'basic',
    title: 'The Simple Launch',
    price: '$159',
    description: 'A beautiful single-page website to get your business online fast.',
    features: [
      'Custom modern design',
      'Fully mobile friendly',
      'Built-in contact form',
      'SEO foundational setup',
      'Fast 5-day delivery'
    ]
  },
  {
    id: 'pro',
    title: 'The Full Studio',
    price: '$449',
    description: 'A complete custom website with multiple pages and smooth animations.',
    features: [
      'Multi-page architecture',
      'Advanced custom animations',
      'Easy content management',
      'Performance optimization',
      '30 days of free support'
    ]
  }
];
