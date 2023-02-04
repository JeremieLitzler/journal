const version = '1.0.499';

import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import docsearchPlugin from '@vuepress/plugin-docsearch';

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
  }),
  plugins: [
    docsearchPlugin({
      appId: 'OEWJGZ6584',
      apiKey: '9da6989deaa25628c61dce09c61710b5',
      indexName: 'iamjeremie',
      locales: {
        '/': {
          placeholder: 'Search',
          translations: {
            button: {
              buttonText: 'Search',
              buttonAriaLabel: 'Search',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Clear',
                resetButtonAriaLabel: 'Clear',
                cancelButtonText: 'Cancel',
                cancelButtonAriaLabel: 'Cancel',
              },
              startScreen: {
                recentSearchesTitle: 'Search history',
                noRecentSearchesText: 'No recent search',
                saveRecentSearchButtonTitle: 'Save recent searches',
                removeRecentSearchButtonTitle: 'Remove recent searches',
                favoriteSearchesTitle: 'Collect',
                removeFavoriteSearchButtonTitle: 'Remove',
              },
              errorScreen: {
                titleText: 'Unable to get results',
                helpText: 'You may need to check your internet connection',
              },
              footer: {
                selectText: 'Choose',
                navigateText: 'Switch',
                closeText: 'Close',
                searchByText: 'Search by',
              },
              noResultsScreen: {
                noResultsText: 'No relevant results found',
                suggestedQueryText: 'You can try...',
                reportMissingResultsText:
                  'Do you think this query should have results?',
                reportMissingResultsLinkText: 'Report missing result',
              },
            },
          },
        },
        '/fr/': {
          placeholder: 'Rechercher',
          translations: {
            button: {
              buttonText: 'Rechercher',
              buttonAriaLabel: 'Rechercher',
            },
            modal: {
              searchBox: {
                resetButtonTitle: 'Effacer',
                resetButtonAriaLabel: 'Effacer',
                cancelButtonText: 'Annuler',
                cancelButtonAriaLabel: 'Annuler',
              },
              startScreen: {
                recentSearchesTitle: "Rechercher l'historique",
                noRecentSearchesText: 'Aucun recherche récente',
                saveRecentSearchButtonTitle:
                  'Sauvegarder les recherches récentes',
                removeRecentSearchButtonTitle:
                  'Supprimer les recherches récentes',
                favoriteSearchesTitle: 'Mettre en favori',
                removeFavoriteSearchButtonTitle: 'Supprimer des favoris',
              },
              errorScreen: {
                titleText: 'Aucun résultat',
                helpText: 'Vérifiez peut-être votre connexion Internet.',
              },
              footer: {
                selectText: 'Sélectionner',
                navigateText: 'Changer',
                closeText: 'Fermer',
                searchByText: 'Rechercher par',
              },
              noResultsScreen: {
                noResultsText: 'Aucun résultat trouvé par votre recherche.',
                suggestedQueryText: 'Essayez peut-être...',
                reportMissingResultsText:
                  'Pensez-vous que cette recherche devrait retourner des résultats ?',
                reportMissingResultsLinkText: 'Rapporter un résultat manquant',
              },
            },
          },
        },
      },
    }),
  ],
});
