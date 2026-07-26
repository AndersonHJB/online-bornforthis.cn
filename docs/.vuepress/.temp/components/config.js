import { hasGlobalComponent } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1.1_@vu_ef5a9d2df27158e9ea086394b5b0666c/node_modules/@vuepress/helper/dist/client/index.js";
import VPBanner from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/VPBanner.js";
import VPCard from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/VPCard.js";
import BiliBili from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/BiliBili.js";
import PDF from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/PDF.js";
import SiteInfo from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/SiteInfo.js";
import StackBlitz from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/StackBlitz.js";
import Share from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/Share.js";
import VidStack from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/vuepress-plugin-components@2.0.0-rc.107_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@_d3b33001c050e5d0869192e1f9839ad5/node_modules/vuepress-plugin-components/dist/client/components/VidStack.js";

import "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1.1_@vu_ef5a9d2df27158e9ea086394b5b0666c/node_modules/@vuepress/helper/dist/client/styles/sr-only.css";

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
