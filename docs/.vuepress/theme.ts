//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope'

import { enNavBarConfig, frNavBarConfig } from "./configs/navbar";

export default hopeTheme({
    //path.resolve(__dirname, './theme'),
    hostname: "https://iamjeremie.me",
    author: {
      name: "Jeremie Litzler",
      url: "https://iamjeremie.me"
    },
    repo: 'JeremieLitzler/journal',
    docsRepo: 'https://github.com/JeremieLitzler/journal',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    logo: '/icons/favicon-32x32.png',
    logoDark: '/icons/dark-favicon-32x32.png',
    locales: {
      '/': {
        navbar: enNavBarConfig,
        sidebar: false
      },
      '/fr/': {
        navbar: frNavBarConfig,
        sidebar: false
      } 
    },
    displayFooter: true,
    footer: 'GPLv3 Licensed | <a href="./terms" title="Read termes and conditions of this website">Terms</a>',
    plugins: {
      blog: true,
      mdEnhance: {
        imageTitle: true,
        imageLazyload: true
      },
      pwa: {
        cacheHTML: true,
        //cachePic: true
      }
    }
});
