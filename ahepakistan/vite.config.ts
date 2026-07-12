import path from "node:path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
  },
  build: {
    // Emit hashed JS/CSS directly at the build root instead of inside an
    // assets/ subfolder — some shared-hosting zip extractors mis-set
    // permissions on nested folders, which breaks these render-blocking
    // files. Keeping them flat avoids that failure mode entirely.
    assetsDir: "",
  },
})
