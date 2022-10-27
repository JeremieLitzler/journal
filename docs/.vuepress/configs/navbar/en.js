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
        link: '/category/garden',
      },
      {
        text: 'By tag',
        link: '/fr/tag/seeds',
      },
    ],
  },
  { text: 'Contact', link: '/contact-me/' },
]);
