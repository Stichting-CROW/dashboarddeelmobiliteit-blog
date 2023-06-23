import { defineConfig, sharpImageService } from "astro/config";
import { rehypeHeadingIds } from "@astrojs/markdown-remark";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import svelte from "@astrojs/svelte";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://blog-kml.dashboarddeelmobiliteit-blog.pages.dev",
  compressHTML: true,
  experimental: {
    assets: true,
    inlineStylesheets: "auto"
  },
  scopedStyleStrategy: "class",
  markdown: {
    rehypePlugins: [rehypeHeadingIds, [rehypeAutolinkHeadings, {
      behavior: "wrap",
      properties: {
        class: "heading-linker"
      }
    }]]
  },
  image: {
    service: sharpImageService()
  },
  integrations: [svelte()]
});