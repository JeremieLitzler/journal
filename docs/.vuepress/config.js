const version = '1.0.226';
import { defineUserConfig } from '@vuepress/cli';

import theme from './theme';
import { viteBundler } from '@vuepress/bundler-vite';

import { pwaPlugin } from '@vuepress/plugin-pwa';
import { pwaPopupPlugin } from '@vuepress/plugin-pwa-popup';

import { enHeadConfig, frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'en-US',
  locales: {
    '/': enHeadConfig,
    '/fr/': frHeadConfig,
  },
  theme,
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
  /*plugins: [
    pwaPlugin({}),
    pwaPopupPlugin({
      locales: {
        '/fr/': {
          message: 'Nouveaux contenus disponibles. Pour rafraichir,',
          buttonText: 'Cliquez ici',
        },
      },
    }),
  ],*/
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
});
