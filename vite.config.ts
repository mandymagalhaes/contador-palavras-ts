import { defineConfig } from 'vite';

export default defineConfig({
    root: './public',
    publicDir: 'public',
    build: {
        outDir: '../docs',
        emptyOutDir: true
    },
    server: {
        port: 3000,
        open: true
    }
});