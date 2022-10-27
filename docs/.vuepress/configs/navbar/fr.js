import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  '/fr/',
  '/fr/a-propos/',
  {
    text: 'Lire',
    children: [
      {
        text: 'Tous les articles',
        link: '/fr/article/',
      },
      {
        text: 'Par catégorie',
        link: '/fr/category/energie',
      },
      {
        text: 'Par tag',
        link: '/fr/tag/energie-solaire',
      },
    ],
  },
  { text: 'Contactez-moi', link: '/fr/contactez-moi/' },
]);
