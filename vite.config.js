import {defineConfig} from 'vite';
import Inspect from 'vite-plugin-inspect';
import {resolve} from 'path';
import fs from 'fs';

function getPagesInput() {
   const pagesDir = resolve(__dirname, 'pages');
   const pages = {};
   fs.readdirSync(pagesDir).forEach(file => {
      if (file.endsWith('.html')) {
         const name = file.replace(/\.html$/, '');
         pages[name] = resolve(pagesDir, file);
      }
   });
   return pages;
}

export default defineConfig({
   plugins: [Inspect()],
   resolve: {
      alias: {
         '@': resolve(__dirname, 'src'),
      },
   },
   build: {
      rollupOptions: {
         input: getPagesInput(),
      },
   },
   server: {
      open: '/pages/dashboard.html',
   },
});