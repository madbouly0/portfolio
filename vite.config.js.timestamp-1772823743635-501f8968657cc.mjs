// vite.config.js
import { vitePlugin as remix } from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/@remix-run/dev/dist/index.js";
import { defineConfig } from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/vite/dist/node/index.js";
import jsconfigPaths from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/vite-jsconfig-paths/dist/index.mjs";
import mdx from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/@mdx-js/rollup/index.js";
import remarkFrontmatter from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/remark-frontmatter/index.js";
import remarkMdxFrontmatter from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/remark-mdx-frontmatter/index.js";
import rehypeImgSize from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/rehype-img-size/index.js";
import rehypeSlug from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/rehype-slug/index.js";
import rehypePrism from "file:///C:/Users/ALSAAD/Desktop/portfolio/node_modules/@mapbox/rehype-prism/index.js";
var isGitHubPages = process.env.GITHUB_PAGES === "true";
var vite_config_default = defineConfig({
  assetsInclude: ["**/*.glb", "**/*.hdr", "**/*.glsl"],
  base: isGitHubPages ? "/portfolio/" : "/",
  build: {
    assetsInlineLimit: 1024
  },
  server: {
    port: 7777
  },
  plugins: [
    mdx({
      rehypePlugins: [[rehypeImgSize, { dir: "public" }], rehypeSlug, rehypePrism],
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      providerImportSource: "@mdx-js/react"
    }),
    remix({
      ssr: false,
      basename: isGitHubPages ? "/portfolio/" : "/",
      routes(defineRoutes) {
        return defineRoutes((route) => {
          route("/", "routes/home/route.js", { index: true });
        });
      }
    }),
    jsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxBTFNBQURcXFxcRGVza3RvcFxcXFxwb3J0Zm9saW9cIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkM6XFxcXFVzZXJzXFxcXEFMU0FBRFxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1xcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vQzovVXNlcnMvQUxTQUFEL0Rlc2t0b3AvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgdml0ZVBsdWdpbiBhcyByZW1peCB9IGZyb20gJ0ByZW1peC1ydW4vZGV2JztcclxuaW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBqc2NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtanNjb25maWctcGF0aHMnO1xyXG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJztcclxuaW1wb3J0IHJlbWFya0Zyb250bWF0dGVyIGZyb20gJ3JlbWFyay1mcm9udG1hdHRlcic7XHJcbmltcG9ydCByZW1hcmtNZHhGcm9udG1hdHRlciBmcm9tICdyZW1hcmstbWR4LWZyb250bWF0dGVyJztcclxuaW1wb3J0IHJlaHlwZUltZ1NpemUgZnJvbSAncmVoeXBlLWltZy1zaXplJztcclxuaW1wb3J0IHJlaHlwZVNsdWcgZnJvbSAncmVoeXBlLXNsdWcnO1xyXG5pbXBvcnQgcmVoeXBlUHJpc20gZnJvbSAnQG1hcGJveC9yZWh5cGUtcHJpc20nO1xyXG5cclxuY29uc3QgaXNHaXRIdWJQYWdlcyA9IHByb2Nlc3MuZW52LkdJVEhVQl9QQUdFUyA9PT0gJ3RydWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBhc3NldHNJbmNsdWRlOiBbJyoqLyouZ2xiJywgJyoqLyouaGRyJywgJyoqLyouZ2xzbCddLFxyXG4gIGJhc2U6IGlzR2l0SHViUGFnZXMgPyAnL3BvcnRmb2xpby8nIDogJy8nLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBhc3NldHNJbmxpbmVMaW1pdDogMTAyNCxcclxuICB9LFxyXG4gIHNlcnZlcjoge1xyXG4gICAgcG9ydDogNzc3NyxcclxuICB9LFxyXG4gIHBsdWdpbnM6IFtcclxuICAgIG1keCh7XHJcbiAgICAgIHJlaHlwZVBsdWdpbnM6IFtbcmVoeXBlSW1nU2l6ZSwgeyBkaXI6ICdwdWJsaWMnIH1dLCByZWh5cGVTbHVnLCByZWh5cGVQcmlzbV0sXHJcbiAgICAgIHJlbWFya1BsdWdpbnM6IFtyZW1hcmtGcm9udG1hdHRlciwgcmVtYXJrTWR4RnJvbnRtYXR0ZXJdLFxyXG4gICAgICBwcm92aWRlckltcG9ydFNvdXJjZTogJ0BtZHgtanMvcmVhY3QnLFxyXG4gICAgfSksXHJcbiAgICByZW1peCh7XHJcbiAgICAgIHNzcjogZmFsc2UsXHJcbiAgICAgIGJhc2VuYW1lOiBpc0dpdEh1YlBhZ2VzID8gJy9wb3J0Zm9saW8vJyA6ICcvJyxcclxuICAgICAgcm91dGVzKGRlZmluZVJvdXRlcykge1xyXG4gICAgICAgIHJldHVybiBkZWZpbmVSb3V0ZXMocm91dGUgPT4ge1xyXG4gICAgICAgICAgcm91dGUoJy8nLCAncm91dGVzL2hvbWUvcm91dGUuanMnLCB7IGluZGV4OiB0cnVlIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICBqc2NvbmZpZ1BhdGhzKCksXHJcbiAgXSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBK1IsU0FBUyxjQUFjLGFBQWE7QUFDblUsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxtQkFBbUI7QUFDMUIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sdUJBQXVCO0FBQzlCLE9BQU8sMEJBQTBCO0FBQ2pDLE9BQU8sbUJBQW1CO0FBQzFCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBRXhCLElBQU0sZ0JBQWdCLFFBQVEsSUFBSSxpQkFBaUI7QUFFbkQsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsZUFBZSxDQUFDLFlBQVksWUFBWSxXQUFXO0FBQUEsRUFDbkQsTUFBTSxnQkFBZ0IsZ0JBQWdCO0FBQUEsRUFDdEMsT0FBTztBQUFBLElBQ0wsbUJBQW1CO0FBQUEsRUFDckI7QUFBQSxFQUNBLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQSxFQUNSO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsTUFDRixlQUFlLENBQUMsQ0FBQyxlQUFlLEVBQUUsS0FBSyxTQUFTLENBQUMsR0FBRyxZQUFZLFdBQVc7QUFBQSxNQUMzRSxlQUFlLENBQUMsbUJBQW1CLG9CQUFvQjtBQUFBLE1BQ3ZELHNCQUFzQjtBQUFBLElBQ3hCLENBQUM7QUFBQSxJQUNELE1BQU07QUFBQSxNQUNKLEtBQUs7QUFBQSxNQUNMLFVBQVUsZ0JBQWdCLGdCQUFnQjtBQUFBLE1BQzFDLE9BQU8sY0FBYztBQUNuQixlQUFPLGFBQWEsV0FBUztBQUMzQixnQkFBTSxLQUFLLHdCQUF3QixFQUFFLE9BQU8sS0FBSyxDQUFDO0FBQUEsUUFDcEQsQ0FBQztBQUFBLE1BQ0g7QUFBQSxJQUNGLENBQUM7QUFBQSxJQUNELGNBQWM7QUFBQSxFQUNoQjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
