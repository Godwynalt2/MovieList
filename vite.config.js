import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default {
  server: {
    host: '0.0.0.0',  // Listen on all network interfaces
    port: 5173,       // Default port for Vite
  },  // <-- Remove this comma to fix the error
};

