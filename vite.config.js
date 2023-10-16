import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';


const env = loadEnv('all', process.cwd());

// https://vitejs.dev/config/
export default defineConfig({
  
  plugins: [react()],
  base: `${env.VITE_URL}`,
});
