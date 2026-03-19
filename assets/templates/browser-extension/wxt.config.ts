import { resolve } from 'node:path';

import { defineConfig } from 'wxt';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  modules: ['@wxt-dev/module-solid'],
  webExt: {
    chromiumProfile: resolve('.wxt/chromium-profile'),
    keepProfileChanges: true,
  },
  vite: () => ({
    plugins: [tailwindcss()],
  }),
  manifest: {
    default_locale: 'en',
    name: '__MSG_extName__',
    short_name: '__MSG_extShortName__',
    description: '__MSG_extDescription__',
    permissions: ['storage', 'tabs', 'activeTab'],
    optional_host_permissions: ['https://*/*', 'http://*/*'],
  },
});
