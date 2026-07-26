import { hasGlobalComponent } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+helper@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1.1_@vu_ef5a9d2df27158e9ea086394b5b0666c/node_modules/@vuepress/helper/dist/client/index.js";
import { useStyleTag } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vueuse+core@14.3.0_vue@3.5.40/node_modules/@vueuse/core/dist/index.js";
import { h } from "vue";
import { VPIcon } from "/Users/bornforthis/Desktop/bornforthis.cn/node_modules/.pnpm/@vuepress+plugin-icon@2.0.0-rc.130_@vuepress+bundler-vite@2.0.0-rc.30_@types+node@26.1._3297c0eb2836b5dbcb8689b06b9f11e0/node_modules/@vuepress/plugin-icon/dist/client/index.js"

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
