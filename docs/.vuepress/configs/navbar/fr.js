import { navbar } from 'vuepress-theme-hope';

export const frNavBarConfig = navbar([
  'https://jeremielitzler.fr/',
  'https://jeremielitzler.fr/page/a-propos/',
  {
    text: 'Lire',
    children: [
      {
        text: 'Tous les articles',
        link: 'https://jeremielitzler.fr/article/',
      },
      {
        text: 'Par catégorie',
        link: 'https://jeremielitzler.fr/category/jardin/',
      },
      {
        text: 'Par tag',
        link: 'https://jeremielitzler.fr/tag/photovoltaique/',
      },
    ],
  },
  {
    text: 'Soutenez-moi',
    link: 'https://jeremielitzler.fr/page/soutenez-moi/',
  },
  { text: 'Contact', link: 'https://jeremielitzler.fr/page/contactez-moi/' },
]);
