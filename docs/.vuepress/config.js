const version = '1.0.388';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import theme from './theme';
import { enHeadConfig, frHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'en-US',
  locales: {
    '/': enHeadConfig,
    '/fr/': frHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler({
    //https://vitejs.dev/config/build-options.html
    build: {
      chunkSizeWarningLimit: 1500,
      rollupOptions: {
        external: ['docs/.vuepress/helpers/MarkdownFilesIndexBuilder.js'],
        output: {
          //https://rollupjs.org/guide/en/#outputmanualchunks
          /*manualChunks: (id, { getModuleInfo }) => {
            if (/\/node_modules\//.test(id)) {
              console.log('%d : "%s" goes into VENDOR', nr, id);
              return 'VENDOR';
            }

            const entryPoints = [];

            // We use a Set here so we handle each module at most once. This
            // prevents infinite loops in case of circular dependencies
            const idsToHandle = new Set(getModuleInfo(id).importers);

            for (const moduleId of idsToHandle) {
              const { isEntry, importers } = getModuleInfo(moduleId);
              if (isEntry) {
                entryPoints.push(moduleId);
              }

              // The Set iterator is intelligent enough to iterate over elements that
              // are added during iteration
              for (const importerId of importers) idsToHandle.add(importerId);
            }

            // This is an entry (root level)
            if (entryPoints.length === 0) {
              let entryName = `${id.split('/').slice(-1)[0].split('.')[0]}`;
              console.log('%d : "%s" is the ENTRY %s', nr, id, entryName);
              return entryName;
            }

            // If there is a unique entry, we bundle the code with that entry
            if (entryPoints.length === 1) {
              let entryName = `${
                entryPoints[0].split('/').slice(-1)[0].split('.')[0]
              }`;
              console.log('"%s" goes into UNIQUE ENTRY %s', id, entryName);
              return entryName;
            }

            // For multiple entries, we put it into a "shared code" bundle
            if (entryPoints.length > 1) {
              console.log('"%s" goes into COMMONS (non-vendor) chunk', id);
              return 'common';
            }
          },*/
        },
      },
    },
    //disabled 2022-10-28: not needed anymore
    /*server: {
      fs: {
        // Allow serving files from one level up to the project root
        // For security concerns, accessing files outside of serving allow list will be restricted by default in the future version of Vite.
        // Refer to https://vitejs.dev/config/#server-fs-allow for more details.
        allow: ['/Git/GitHub/journal/docs/.vuepress/.temp/pages.js'],
      },
    },*/
  }),
  //disabled 2022-10-28: not needed anymore
  /*onPrepared: async (app) => {
    console.log('Pages generated by Vite => ', app.pages.length);
    const pagesData = app.pages.map(
      ({ filePathRelative, frontmatter, data, page, path, slug }) => {
        console.log(filePathRelative);
        return {
          frontmatter,
          data,
          page,
          path,
          slug,
        };
      },
    );
    //save markdown file data to a dynamically generated JavaScript file
    await app.writeTemp(
      'pages.js',
      `export default ${JSON.stringify(pagesData)}`,
    );
  },*/
});
