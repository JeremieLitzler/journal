import { defineUserConfig } from '@vuepress/cli';
import { viteBundler } from '@vuepress/bundler-vite';

import theme from './theme';
import { enHeadConfig } from './configs/head';

export default defineUserConfig({
  lang: 'en-US',
  locales: {
    '/': enHeadConfig,
  },
  theme,
  shouldPrefetch: false,
  bundler: viteBundler(),
});
