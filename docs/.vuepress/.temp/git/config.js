import { GitContributors } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9.1_53212d0e6c0928c43743c837d7aada71/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9.1_53212d0e6c0928c43743c837d7aada71/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
