import { CodeTabs } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+no_b90e9107cfec77ffb46e21b37310a2e2/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/CodeTabs.js";
import { Tabs } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+no_b90e9107cfec77ffb46e21b37310a2e2/node_modules/@vuepress/plugin-markdown-tab/dist/client/components/Tabs.js";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
