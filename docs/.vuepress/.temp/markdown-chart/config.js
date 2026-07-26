import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+_8f4ed5da1a9ff566a34e5ca1a25526c4/node_modules/@vuepress/plugin-markdown-chart/dist/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
