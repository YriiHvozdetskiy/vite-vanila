import {defineConfig} from 'vite';
import Inspect from 'vite-plugin-inspect';
import {resolve} from 'path';

export default defineConfig({
   plugins: [
      Inspect(),
   ],
   resolve: {
      alias: {
         '@': '/src',
      },
   },
   build: {
      rollupOptions: {
         input: {
            main: resolve(__dirname, 'index.html'),
            about: resolve(__dirname, 'public/about.html'),
         },
      },
   },
});
