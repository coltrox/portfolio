import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  // Define a base como '/' para garantir caminhos relativos corretos no deploy
  base: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      // Garante que o @ aponte corretamente para a pasta src
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    // Otimização para produção
    outDir: "dist",
    sourcemap: false,
  }
}));