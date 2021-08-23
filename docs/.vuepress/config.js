const { path } = require("@vuepress/utils");

const headEn = require(path.resolve(__dirname, "configs/head/en"));
const headFr = require(path.resolve(__dirname, "configs/head/fr"));

// console.log(headEn);
// console.log(headFr);
module.exports = {
  lang: "en-US",
  locales: {
    "/": headEn,
    "/fr/": headFr,
  },
  theme: path.resolve(__dirname, "./theme"),
  themeConfig: {
    repo: "JeremieLitzler/journal",
    docsRepo: "https://github.com/JeremieLitzler/journal",
    docsBranch: "main",
    docsDir: "docs",
    editLinkPattern: ":repo/-/edit/:branch/:path",
    darkMode: true,
    logo: "/icons/favicon-32x32.png",
    logoDark: "/icons/dark-favicon-32x32.png",
    navbar: [
      { text: "Who am I", link: "/" },
      { text: "Read now", link: "/posts/" },
    ],
    selectLanguageText: "English",
    selectLanguageAriaLabel: "Change language",
    locales: {
      "/": { selectLanguageName: "English" },
      "/fr/": {
        selectLanguageText: "Français",
        selectLanguageAriaLabel: "Changer de langue",
        selectLanguageName: "Français",
      },
      navbar: [
        { text: "About", link: "/fr/" },
        { text: "Blog", link: "/fr/articles/" },
      ],
    },
  },
  bundler: "@vuepress/vite",
  bundlerConfig: {
    build: {
      rollupOptions: {
        external: ["docs/.vuepress/helpers/MarkdownFilesIndexBuilder.js"],
      },
    },
    server: {
      fs: {
        // Allow serving files from one level up to the project root
        // For security concerns, accessing files outside of serving allow list will be restricted by default in the future version of Vite.
        // Refer to https://vitejs.dev/config/#server-fs-allow for more details.
        allow: ["/Git/GitHub/journal/docs/.vuepress/.temp/pages.js"],
      },
    },
  },
  plugins: [
    ["@vuepress/plugin-pwa"],
    [
      "@vuepress/plugin-pwa-popup",
      {
        locales: {
          "/fr/": {
            message: "Nouveaux contenus disponibles. Pour rafraichir,",
            buttonText: "Cliquez ici",
          },
        },
      },
    ],
  ],
  onPrepared: async (app) => {
    console.log("Pages generated by Vite => ", app.pages.length);
    const pagesData = app.pages.map((page) => {
      console.log(page.filePathRelative);
      return page;
    });
    //save markdown file data to a dynamically generated JavaScript file
    await app.writeTemp(
      "pages.js",
      `export default ${JSON.stringify(pagesData)}`,
    );
  },
};
