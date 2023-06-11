import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { dependencies } from './package.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      manualChunks(id) {
        const nodeModules = id.indexOf('node_modules');
        if (nodeModules > -1) {
          let name = id.substring(nodeModules + 13);
          name = name.substring(0, name.indexOf('/'));
          return name;
        }
      },
    },
  },
})
