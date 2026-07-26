import { GitContributors } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1.1_02162f2d52dd5b0dac2f2918aee0ec93/node_modules/@vuepress/plugin-git/dist/client/components/GitContributors.js";
import { GitChangelog } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-git@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1.1_02162f2d52dd5b0dac2f2918aee0ec93/node_modules/@vuepress/plugin-git/dist/client/components/GitChangelog.js";

export default {
  enhance: ({ app }) => {
    app.component("GitContributors", GitContributors);
    app.component("GitChangelog", GitChangelog);
  },
};
