import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/fr/',
  '/fr/a-propos',
  { text: 'Lire', link: '/fr/articles/' },
  { text: 'Contactez-moi', link: '/fr/contactez-moi' },
  // {
  //   text: 'Changer la langue',
  //   children: [
  //     {
  //       text: 'Anglais',
  //       link: '/',
  //     },
  //     {
  //       text: 'Français',
  //       link: '/fr/',
  //     },
  //   ],
  // },
]);
