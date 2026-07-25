import { hasGlobalComponent } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9.1_@vu_b93fa586a438399e16dc741240b015cb/node_modules/@vuepress/helper/dist/client/index.js";
import VPBanner from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/VPBanner.js";
import VPCard from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/VPCard.js";
import BiliBili from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/BiliBili.js";
import PDF from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/PDF.js";
import SiteInfo from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/SiteInfo.js";
import StackBlitz from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/StackBlitz.js";
import Share from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/Share.js";
import VidStack from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_c850cbf64ee58803bda6c8569f1b2193/node_modules/vuepress-plugin-components/dist/client/components/VidStack.js";

import "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9.1_@vu_b93fa586a438399e16dc741240b015cb/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPBanner")) app.component("VPBanner", VPBanner);
    if(!hasGlobalComponent("VPCard")) app.component("VPCard", VPCard);
    if(!hasGlobalComponent("BiliBili")) app.component("BiliBili", BiliBili);
    if(!hasGlobalComponent("PDF")) app.component("PDF", PDF);
    if(!hasGlobalComponent("SiteInfo")) app.component("SiteInfo", SiteInfo);
    if(!hasGlobalComponent("StackBlitz")) app.component("StackBlitz", StackBlitz);
    if(!hasGlobalComponent("Share")) app.component("Share", Share);
    if(!hasGlobalComponent("VidStack")) app.component("VidStack", VidStack);
    
  },
  setup: () => {

  },
  rootComponents: [

  ],
};
