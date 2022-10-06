import { navbar } from 'vuepress-theme-hope';

export const enNavBarConfig = navbar([
  '/',
  '/about',
  { text: 'Read', link: '/posts/' },
  { text: 'Contact', link: '/contact-me' },
  // {
  //   text: 'Change Language',
  //   children: [
  //     {
  //       text: 'English',
  //       link: '/',
  //     },
  //     {
  //       text: 'French',
  //       link: '/fr/',
  //     },
  //   ],
  // },
]);
