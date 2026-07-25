import { hasGlobalComponent } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9.1_@vu_b93fa586a438399e16dc741240b015cb/node_modules/@vuepress/helper/dist/client/index.js";
import { useStyleTag } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vueuse+core@14.3.0_vue@3.5.34/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "/Users/huangjiabao/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@25.9._169b62a73d10c6769d576fdbb620d80f/node_modules/@vuepress/plugin-icon/dist/client/index.js"

export default {
  enhance: ({ app }) => {
    if(!hasGlobalComponent("VPIcon")) {
      app.component(
        "VPIcon",
        (props) =>
          h(VPIcon, {
            type: "unknown",
            prefix: "iconfont icon-",
            ...props,
          })
      )
    }
  },
  setup: () => {
    useStyleTag(`\
@import url("/icon/iconfont.css");
`);
  },
}
