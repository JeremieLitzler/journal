import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/',
  '/about/',
  {
    text: 'Read',
    children: [
      {
        text: 'All articles',
        link: '/article/',
      },
      {
        text: 'By category',
        link: '/category/gardening',
      },
      {
        text: 'By tag',
        link: '/tag/compost',
      },
    ],
  },
  { text: 'Sponsor', link: '/sponsor-me/' },
  { text: 'Contact', link: '/contact-me/' },
]);
