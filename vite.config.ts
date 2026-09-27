import { defineConfig, type Plugin } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { viteSingleFile } from "vite-plugin-singlefile";

function preservePdfAssets(): Plugin {
  return {
    name: "preserve-pdf-assets",
    enforce: "post",
    config() {
      return {
        build: {
          assetsInlineLimit: (filePath: string) => !/\.(pdf|png|jpe?g|webp)$/i.test(filePath),
        },
      };
    },
  };
}

export default defineConfig({
  plugins: [react(), tailwindcss(), viteSingleFile(), preservePdfAssets()],
  base: "./",
});
