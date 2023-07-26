import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/',
  '/page/about/',
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
  { text: 'Sponsor', link: '/page/sponsor-me/' },
  { text: 'Contact', link: '/page/contact-me/' },
  { text: 'Mon blog en français', link: 'http://jeremielitzler.fr/' },
]);
