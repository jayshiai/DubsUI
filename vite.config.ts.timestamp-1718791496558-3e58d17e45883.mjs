// vite.config.ts
import { defineConfig } from "file:///D:/Code/DubsUI/node_modules/vite/dist/node/index.js";
import { extname, relative, resolve } from "path";
import { fileURLToPath } from "node:url";
import { glob } from "file:///D:/Code/DubsUI/node_modules/glob/dist/esm/index.js";
import react from "file:///D:/Code/DubsUI/node_modules/@vitejs/plugin-react/dist/index.mjs";
import dts from "file:///D:/Code/DubsUI/node_modules/vite-plugin-dts/dist/index.mjs";
import { libInjectCss } from "file:///D:/Code/DubsUI/node_modules/vite-plugin-lib-inject-css/dist/index.js";
import tsconfigPaths from "file:///D:/Code/DubsUI/node_modules/vite-tsconfig-paths/dist/index.mjs";
import tailwindcss from "file:///D:/Code/DubsUI/node_modules/tailwindcss/lib/index.js";
var __vite_injected_original_dirname = "D:\\Code\\DubsUI";
var __vite_injected_original_import_meta_url = "file:///D:/Code/DubsUI/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    libInjectCss(),
    tsconfigPaths(),
    dts({ include: ["lib"], exclude: ["**/*.stories.tsx"] })
  ],
  build: {
    copyPublicDir: false,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "lib/index.ts"),
      formats: ["es"]
    },
    rollupOptions: {
      external: ["react", "react/jsx-runtime", "tailwindcss", "react-dom"],
      input: Object.fromEntries(
        // https://rollupjs.org/configuration-options/#input
        glob.sync("lib/**/*.{ts,tsx}", { ignore: ["lib/**/*.stories.tsx", "lib/**/*.d.ts"] }).map((file) => [
          // 1. The name of the entry point
          // lib/nested/foo.js becomes nested/foo
          relative(
            "lib",
            file.slice(0, file.length - extname(file).length)
          ),
          // 2. The absolute path to the entry file
          // lib/nested/foo.ts becomes /project/lib/nested/foo.ts
          fileURLToPath(new URL(file, __vite_injected_original_import_meta_url))
        ])
      ),
      output: {
        assetFileNames: "assets/[name][extname]",
        entryFileNames: "[name].js"
      }
    },
    sourcemap: true,
    emptyOutDir: true
  },
  css: {
    postcss: {
      plugins: [tailwindcss]
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxDb2RlXFxcXER1YnNVSVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRDpcXFxcQ29kZVxcXFxEdWJzVUlcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0Q6L0NvZGUvRHVic1VJL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHsgZXh0bmFtZSwgcmVsYXRpdmUsIHJlc29sdmUgfSBmcm9tICdwYXRoJ1xyXG5pbXBvcnQgeyBmaWxlVVJMVG9QYXRoIH0gZnJvbSAnbm9kZTp1cmwnXHJcbmltcG9ydCB7IGdsb2IgfSBmcm9tICdnbG9iJ1xyXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJ1xyXG5pbXBvcnQgeyBsaWJJbmplY3RDc3MgfSBmcm9tICd2aXRlLXBsdWdpbi1saWItaW5qZWN0LWNzcydcclxuaW1wb3J0IHRzY29uZmlnUGF0aHMgZnJvbSAndml0ZS10c2NvbmZpZy1wYXRocyc7XHJcbmltcG9ydCB0YWlsd2luZGNzcyBmcm9tICd0YWlsd2luZGNzcyc7XHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGxpYkluamVjdENzcygpLFxyXG4gICAgdHNjb25maWdQYXRocygpLFxyXG4gICAgZHRzKHsgaW5jbHVkZTogWydsaWInXSwgZXhjbHVkZTogWycqKi8qLnN0b3JpZXMudHN4J10gfSlcclxuICBdLFxyXG5cclxuICBidWlsZDoge1xyXG4gICAgY29weVB1YmxpY0RpcjogZmFsc2UsXHJcbiAgICBsaWI6IHtcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnbGliL2luZGV4LnRzJyksXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnXVxyXG4gICAgfSxcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgZXh0ZXJuYWw6IFsncmVhY3QnLCAncmVhY3QvanN4LXJ1bnRpbWUnLCAndGFpbHdpbmRjc3MnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgIGlucHV0OiBPYmplY3QuZnJvbUVudHJpZXMoXHJcbiAgICAgICAgLy8gaHR0cHM6Ly9yb2xsdXBqcy5vcmcvY29uZmlndXJhdGlvbi1vcHRpb25zLyNpbnB1dFxyXG4gICAgICAgIGdsb2Iuc3luYygnbGliLyoqLyoue3RzLHRzeH0nLCB7IGlnbm9yZTogWydsaWIvKiovKi5zdG9yaWVzLnRzeCcsICdsaWIvKiovKi5kLnRzJ10gfSkubWFwKGZpbGUgPT4gW1xyXG4gICAgICAgICAgLy8gMS4gVGhlIG5hbWUgb2YgdGhlIGVudHJ5IHBvaW50XHJcbiAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby5qcyBiZWNvbWVzIG5lc3RlZC9mb29cclxuICAgICAgICAgIHJlbGF0aXZlKFxyXG4gICAgICAgICAgICAnbGliJyxcclxuICAgICAgICAgICAgZmlsZS5zbGljZSgwLCBmaWxlLmxlbmd0aCAtIGV4dG5hbWUoZmlsZSkubGVuZ3RoKVxyXG4gICAgICAgICAgKSxcclxuICAgICAgICAgIC8vIDIuIFRoZSBhYnNvbHV0ZSBwYXRoIHRvIHRoZSBlbnRyeSBmaWxlXHJcbiAgICAgICAgICAvLyBsaWIvbmVzdGVkL2Zvby50cyBiZWNvbWVzIC9wcm9qZWN0L2xpYi9uZXN0ZWQvZm9vLnRzXHJcbiAgICAgICAgICBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoZmlsZSwgaW1wb3J0Lm1ldGEudXJsKSlcclxuICAgICAgICBdKVxyXG4gICAgICApLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuXHJcbiAgICAgICAgYXNzZXRGaWxlTmFtZXM6ICdhc3NldHMvW25hbWVdW2V4dG5hbWVdJyxcclxuICAgICAgICBlbnRyeUZpbGVOYW1lczogJ1tuYW1lXS5qcycsXHJcbiAgICAgIH1cclxuICAgIH0sXHJcbiAgICBzb3VyY2VtYXA6IHRydWUsXHJcbiAgICBlbXB0eU91dERpcjogdHJ1ZSxcclxuICB9LFxyXG4gIGNzczoge1xyXG4gICAgcG9zdGNzczoge1xyXG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmRjc3NdLFxyXG4gICAgfSxcclxuICB9LFxyXG59KSJdLAogICJtYXBwaW5ncyI6ICI7QUFBa08sU0FBUyxvQkFBb0I7QUFDL1AsU0FBUyxTQUFTLFVBQVUsZUFBZTtBQUMzQyxTQUFTLHFCQUFxQjtBQUM5QixTQUFTLFlBQVk7QUFDckIsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sU0FBUztBQUNoQixTQUFTLG9CQUFvQjtBQUM3QixPQUFPLG1CQUFtQjtBQUMxQixPQUFPLGlCQUFpQjtBQVJ4QixJQUFNLG1DQUFtQztBQUFnRyxJQUFNLDJDQUEyQztBQVUxTCxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixhQUFhO0FBQUEsSUFDYixjQUFjO0FBQUEsSUFDZCxJQUFJLEVBQUUsU0FBUyxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUMsa0JBQWtCLEVBQUUsQ0FBQztBQUFBLEVBQ3pEO0FBQUEsRUFFQSxPQUFPO0FBQUEsSUFDTCxlQUFlO0FBQUEsSUFDZixLQUFLO0FBQUEsTUFDSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLFNBQVMsQ0FBQyxJQUFJO0FBQUEsSUFDaEI7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUNiLFVBQVUsQ0FBQyxTQUFTLHFCQUFxQixlQUFlLFdBQVc7QUFBQSxNQUNuRSxPQUFPLE9BQU87QUFBQTtBQUFBLFFBRVosS0FBSyxLQUFLLHFCQUFxQixFQUFFLFFBQVEsQ0FBQyx3QkFBd0IsZUFBZSxFQUFFLENBQUMsRUFBRSxJQUFJLFVBQVE7QUFBQTtBQUFBO0FBQUEsVUFHaEc7QUFBQSxZQUNFO0FBQUEsWUFDQSxLQUFLLE1BQU0sR0FBRyxLQUFLLFNBQVMsUUFBUSxJQUFJLEVBQUUsTUFBTTtBQUFBLFVBQ2xEO0FBQUE7QUFBQTtBQUFBLFVBR0EsY0FBYyxJQUFJLElBQUksTUFBTSx3Q0FBZSxDQUFDO0FBQUEsUUFDOUMsQ0FBQztBQUFBLE1BQ0g7QUFBQSxNQUNBLFFBQVE7QUFBQSxRQUVOLGdCQUFnQjtBQUFBLFFBQ2hCLGdCQUFnQjtBQUFBLE1BQ2xCO0FBQUEsSUFDRjtBQUFBLElBQ0EsV0FBVztBQUFBLElBQ1gsYUFBYTtBQUFBLEVBQ2Y7QUFBQSxFQUNBLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxXQUFXO0FBQUEsSUFDdkI7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
