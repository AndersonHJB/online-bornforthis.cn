export const NOTICE_OPTIONS = JSON.parse("[{\"content\":\"关于编程私教&加密文章\",\"path\":\"/\",\"title\":\"通知\",\"showOnce\":true,\"actions\":[{\"text\":\"查看\",\"link\":\"/Notice.md\",\"type\":\"primary\"},{\"text\":\"Why Blog?\",\"link\":\"/aboutblog.md\",\"type\":\"default\"}]}]")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateNoticeOptions) {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ NOTICE_OPTIONS }) => {
    __VUE_HMR_RUNTIME__.updateNoticeOptions(NOTICE_OPTIONS)
  })
}
