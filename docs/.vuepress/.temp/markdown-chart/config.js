import { defineClientConfig } from "vuepress/client";
import Mermaid from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-markdown-chart@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+_515eff4a87f3cabb34cb86c8f935161c/node_modules/@vuepress/plugin-markdown-chart/dist/client/components/Mermaid.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("Mermaid", Mermaid);
  },
});
