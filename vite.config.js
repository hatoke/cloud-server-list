import { defineConfig } from "vite";

export default defineConfig(({ mode }) => {
  const includeFontAwesome = mode === "fontawesome";

  return {
    build: {
      outDir: `build/${includeFontAwesome ? "dist-fontawesome" : "dist-nofontawesome"}`,
      cssCodeSplit: true,
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `$INCLUDE_FONTAWESOME: ${includeFontAwesome};`,
        },
      },
    },
  };
});
