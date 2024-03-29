const version = '1.0.645';
const publishDate = new Date(Date.now());
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat
const publishDateFormatted = new Intl.DateTimeFormat("en-US", {
  dateStyle: "full",
  timeStyle: "long",
  timeZone: "Europe/Paris",
}).format(publishDate);

//https://v2.vuepress.vuejs.org/reference/default-theme/extending.html

import { hopeTheme } from 'vuepress-theme-hope'

import { enNavBarConfig } from "./configs/navbar";

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
    editLink: false,
    logo: '/icons/favicon-32x32.png',
    logoDark: '/icons/dark-favicon-32x32.png',
    locales: {
      '/': {
        navbar: enNavBarConfig,
        sidebar: false, 
        headerDepth: 3,
      },
    },
    displayFooter: true,
    footer: `GPLv3 Licensed | <a href="https://iamjeremie.me/page/terms" title="Read terms and conditions of this website">Terms</a> | v${version} published on ${publishDateFormatted}`,
    plugins: {
      blog: true,
      comment: {
        provider: 'Giscus',
        repo: "JeremieLitzler/journal",
        repoId: "MDEwOlJlcG9zaXRvcnkzOTQ1MzE2NTg=",
        category: "Comments",
        categoryId: "DIC_kwDOF4QTSs4CTng3",
        mapping: "title",
      },
      mdEnhance: {
        linksCheck: 'always',
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/align.html
        align: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/attrs.html
        attrs: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/chart.html
        //chart: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/container.html
        container: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/echarts.html
        echarts: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/footnote.html
        //See also https://echarts.apache.org/en/index.html
        footnote: true,
        //use the figure, figureCaption to wrap an image
        figure: true,
        //load image lazily with native method
        imgLazyload: true,
        //Syntax: ==this text is marked==
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/mark.html
        mark: true,
        //Supports RevealJS
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/presentation.html
        //presentation: true,
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/stylize.html
        //I'm not sure I need it for now
        //stylize: []
        //See https://vuepress-theme-hope.github.io/v2/guide/markdown/tabs.html
        tabs: true,
      },
      pwa: {
        cacheHTML: true,
        //caching pictures is quite heavy...
        //cachePic: true
      }
    }
});
