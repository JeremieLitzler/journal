const version = '1.0.202';
const { path } = require('@vuepress/utils');
const { vuePressThemeJeremieL } = require('./theme');
const { viteBundler } = require('@vuepress/bundler-vite');

const { pwaPlugin } = require('@vuepress/plugin-pwa');
const { pwaPopupPlugin } = require('@vuepress/plugin-pwa-popup');

const headEn = require(path.resolve(__dirname, 'configs/head/en'));
const headFr = require(path.resolve(__dirname, 'configs/head/fr'));

// console.log(headEn);
// console.log(headFr);
module.exports = {
  lang: 'en-US',
  locales: {
    '/': headEn,
    '/fr/': headFr,
  },
  theme: vuePressThemeJeremieL({
    //path.resolve(__dirname, './theme'),
    repo: 'JeremieLitzler/journal',
    docsRepo: 'https://github.com/JeremieLitzler/journal',
    docsBranch: 'main',
    docsDir: 'docs',
    editLinkPattern: ':repo/edit/:branch/:path',
    darkMode: false,
    logo: '/icons/favicon-32x32.png',
    logoDark: '/icons/dark-favicon-32x32.png',
    locales: {
      '/': {
        selectLanguageText: 'Change language',
        selectLanguageAriaLabel: 'Change language',
        selectLanguageName: 'English',
        navbar: [
          { text: 'Home', link: '/' },
          { text: 'Who am I', link: '/about' },
          { text: 'Read', link: '/posts/' },
          { text: 'Contact', link: '/contact-me' },
        ],
      },
      '/fr/': {
        selectLanguageText: 'Changer de langue',
        selectLanguageAriaLabel: 'Changer de langue',
        selectLanguageName: 'Français',
        navbar: [
          { text: 'Accueil', link: '/fr/' },
          { text: 'Qui suis-je', link: '/fr/a-propos/' },
          { text: 'Lire', link: '/fr/articles/' },
          { text: 'Contact', link: '/fr/contactez-moi' },
        ],
      },
    },
    themePlugins: {
      nprogress: true,
    },
  }),
  bundler: viteBundler({
    build: {
      rollupOptions: {
        external: ['docs/.vuepress/helpers/MarkdownFilesIndexBuilder.js'],
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        // For security concerns, accessing files outside of serving allow list will be restricted by default in the future version of Vite.
        // Refer to https://vitejs.dev/config/#server-fs-allow for more details.
        allow: ['/Git/GitHub/journal/docs/.vuepress/.temp/pages.js'],
      },
    },
  }),
  //See https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md#200-beta40-2022-04-25
  plugins: [
    pwaPlugin({}),
    pwaPopupPlugin({
      locales: {
        '/fr/': {
          message: 'Nouveaux contenus disponibles. Pour rafraichir,',
          buttonText: 'Cliquez ici',
        },
      },
    }),
  ],
  onPrepared: async (app) => {
    console.log('Pages generated by Vite => ', app.pages.length);
    const pagesData = app.pages.map((page) => {
      console.log(page.filePathRelative);
      return page;
    });
    //save markdown file data to a dynamically generated JavaScript file
    await app.writeTemp(
      'pages.js',
      `export default ${JSON.stringify(pagesData)}`,
    );
  },
};
