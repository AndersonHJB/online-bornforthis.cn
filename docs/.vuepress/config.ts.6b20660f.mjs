// docs/.vuepress/config.ts
import { defineUserConfig } from "vuepress";

// docs/.vuepress/theme.ts
import { hopeTheme } from "vuepress-theme-hope";

// docs/.vuepress/navbar.ts
import { navbar } from "vuepress-theme-hope";
var zhNavbar = navbar([
  // "/",
  // { 
  //   text: "关于悦创",
  //   icon: "people",
  //   link: "/intro",
  // },
  {
    text: "Memoirs",
    icon: "blog",
    link: "/Memoirs.html"
  },
  {
    text: "Column",
    icon: "columnszhuanlan",
    link: "/column"
    // children: [
    // { 
    // text: "IT 文档主页",
    // link: "/column.md",
    // children: [
    // "/column.md",
    // { text: "私教回放", icon: "biaoshilei_huifang", link: "/column/playback/"},
    // { text: "Python 合集", icon: "python", link: "/column/py/Python_tutorial/"},
    // { text: "Python 私教", icon: "python", link: "/column/py/basequestion/"},
    // { text: "Web 专栏", icon: "web", link: "/column/web/catalogue.html"},
    // { text: "Python 办公自动化", icon: "python", link: "/column/pyauto"},
    // { text: "题解", icon: "biancheng-01", link: "/column/tijie"},
    // { text: "公开课资料", icon: "blog", link: "/column/pyauto/gkk/"},
    // { text: "编程思维", icon: "siwei", link: "/column/Programmingthinking/"},
    // { text: "零基础学习机器学习", icon: "_rengongzhineng", link: "/column/TensorFlow/零基础实战机器学习/"},
    // { text: "数据分析", icon: "zhuzhuangtu", link: "/column/data_analysis/week1/01"},
    // { text: "数据结构与算法", icon: "shujujiegou-01", link: "/column/data-structure/week1/01"},
    // { text: "Python 60 Day", icon: "python", link: "/column/python60/01"},
    // { text: "AI悦创·天池计划", icon: "dianchi1", link: "/column/tianchi/Python/Python01"},
    // { text: "Java体系课", icon: "java", link: "/column/Java"},
    // { text: "AI悦创·1v1", icon: "1v1-4", link: "/1v1/"},
    // { text: "摄影入门课", icon: "cameraadd", link: "/column/摄影入门课/"},
    // { text: "Python核心技术与实战", icon: "python", link: "/column/Python-core-technology-and-practice/01"},
    // { text: "人工智能基础课", icon: "_rengongzhineng", link: "/column/Basic-course-of-artificial-intelligence"},
    // ]
    // },
    // { 
    //   text: "程序员的私房菜",
    //   children: [
    //     { text: "私房菜", link: "/column/cookdinner/01-yogurt"},
    //   ]
    // },
    // {
    // text: "艺术",
    // children: [
    // { text: "摄影", icon: "cameraadd", link: "/column/photography/"},
    // { text: "五哥摄影课堂", icon: "cameraadd", link: "/column/Fifth_brother_photography_class/"},
    // { text: "PPT 教程", icon: "PPT", link: "/column/PPT/"},
    // ],
    // },
    // {
    //   text: "得到",
    //   children: [
    //     { text: "薛兆丰的经济学课", icon: "blog", link: "/dedao/01-Xue-Zhaofengs-economics-class/"},
    //   ]
    // }
    // ]
  },
  {
    text: "Community",
    icon: "shequ-jihuo",
    children: [
      {
        text: "\u5728\u7EBF\u5E73\u53F0",
        children: [
          // { text: "Python 在线平台", icon: "edit", link: "https://py.bornforthis.cn/" },
          { text: "Python Online", icon: "python", link: "https://py.bornforthis.cn/" },
          { text: "Data Structure", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/" },
          // { text: "Markdown Online", icon: "markdown", link: "https://bornforthis.cn/markdown-editor/ "},
          { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/" },
          { text: "m3u8 Play", icon: "preview", link: "https://bornforthis.cn/m3u8" },
          { text: "Decimal online conversion", icon: "tool", link: "https://bornforthis.cn/tool/" },
          { text: "HTML Online", icon: "web", link: "https://bornforthis.cn/html_online/" },
          // { text: "格式在线转换", icon: "web", link: "https://convertio.co/zh/"},
          // { text: "在线转换2", icon: "web", link: "https://www.aconvert.com/cn/"},
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/#/" }
          // { text: "Python", icon: "python", link: "https://bornforthis.cn/python/index.html#/"},
          // { text: "fonts", link: "https://fontshub.pro/"},
          // { text: "iloveimg", icon: "-love", link: "https://www.iloveimg.com/zh-cn"},
        ]
      }
      // {
      //   text: "文章平台",
      //   children: [
      //     { text: "CSDN", link: "https://aiyuechuang.blog.csdn.net/"},
      //     { text: "知乎", link: "https://www.zhihu.com/people/aiyuechuang"},
      //     { text: "掘金", link: "https://juejin.cn/user/2305051222344061"},
      //     { text: "思否", link: "https://segmentfault.com/u/aiyc"},
      //     { text: "51CTO博客", link: "https://blog.51cto.com/aiyc"},
      //     { text: "medium", link: "https://medium.com/@aiyuechuang"},
      //     { text: "medium", link: "https://medium.bornforthis.cn"},
      //     { text: "腾讯云社区", link: "https://cloud.tencent.com/developer/user/7111610"},
      //     { text: "阿里云社区", link: "https://developer.aliyun.com/profile/expert/a65od3nwohg4i"},
      //     { text: "博客园", link: "https://www.cnblogs.com/bornforthis/"},
      //     { text: "简书", link: "https://www.jianshu.com/u/7def888b8c12"},
      //     { text: "墨天轮", link: "https://www.modb.pro/u/482441"},
      // { text: "留言", link: "https://comment.bornforthis.cn/"},
      // { text: "悦兮小栈", link: "https://comment.blovey.art/"},
      // { text: "评论管理", link: "https://comment.bornforthis.cn/ui"},
      // { text: "Stackoverflow", link: "https://stackoverflow.com/users/19551173/ai%e6%82%a6%e5%88%9b"},
      // { text: "Mdnice", link: "https://mdnice.com/user/417729638227"},
      // { text: "AI悦创随笔1", link: "/posts/12.html"},
      // { text: "随笔2", link: "/essays"},
      // { text: "摄影", icon: "cameraadd", link: "https://huangjiabaoaiyc.gitee.io/img/"},
      // { text: "Search", link: "https://crawler.algolia.com/admin/crawlers"},
      // { text: "领英", link: "https://www.linkedin.com/in/bornforthis/"},
      // { text: "AndersonHJB.github.io", icon: "github", link: "https://github.com/AndersonHJB/AndersonHJB.github.io/issues"},
      // { text: "1v1", icon: "github", link: "https://github.com/AndersonHJB/1v1/issues"},
      // { text: "AI悦创·谷歌分析", icon: "google", link: "https://analytics.google.com/analytics/web/#/p345911954/reports/intelligenthome"},
      // { text: "AI悦创·百度联盟", icon: "baidu-fill", link: "https://union.baidu.com/bqt/#/"},
      // { text: "AI悦创·learnku", icon: "blog", link: "https://learnku.com/blog/AndersonHJB"},
      // { text: "随笔", children: [{ text: "AI悦创随笔1", link: "https://bornforthis.cn/posts/12.html"}, { text: "随笔2", link: "/essays"}]},
    ]
  },
  // { 
  //   text: "Git",
  //   children: [
  //     { text: "Github", icon: "github", link: "https://github.com/AndersonHJB"},
  //     { text: "Gitee", icon: "gitee", link: "https://gitee.com/huangjiabaoaiyc"},
  //     { text: "vercel", icon: "gitee", link: "https://vercel.com/"},
  //   ]
  // },
  // ]
  // },
  // {
  //   text: "私教计划",
  //   icon: "1v1-4",
  //   link: "https://web.online.bornforthis.cn/Tester/1554.html",
  // },
  // {
  //   text: "Course",
  //   icon: "banjiketang",
  //   children: [
  //     { text: "网易云课堂主页", icon: "zhuanjiaketang-jihuo", link: "https://study.163.com/provider/480000002277025/course.htm"},
  //     // { text: "AI悦创·讲师主页", icon: "view", link: "https://m.study.163.com/user/1144240044.htm"},
  //     { text: "51CTO", icon: "zhuanjiaketang-jihuo", link: "https://edu.51cto.com/lecturer/13952552.html"},
  //     // { text: "录课悲惨经历", icon: "zhuanjiaketang-jihuo", link: "/Record_the_class"}
  //   ]
  // },
  // { 
  //   text: "开源/订阅",
  //   icon: "jiyukaiyuanjianrongkaiyuan",
  //   children: [
  //     { text: "开源库", icon: "python", link: "https://pypi.org/user/Bornforthis/" },
  //     { text: "HTML模版/插件", icon: "web1", link: "https://github.com/AndersonHJB/bootstrapmb" },
  //     { text: "Feed Json", icon: "rss", link: "https://bornforthis.cn/feed.json" },
  //     { text: "Feed Atom", icon: "rss", link: "https://bornforthis.cn/atom.xml" },
  //     { text: "Feed Rss", icon: "rss", link: "https://bornforthis.cn/rss.xml" },
  //   ]
  // },
  {
    text: "Friendship",
    icon: "pengyouquan3",
    children: [
      {
        text: "\u5F00\u53D1\u672C\u7AD9",
        // icon: "diagram",
        // link: "https://bornforthis.cn",
        children: [
          // { text: "Vue", icon: "vuejs", link: "https://v2.vuepress.vuejs.org/zh/"},
          // { text: "hope主题", icon: "vue", link: "https://vuepress-theme-hope.github.io/v2/zh/"},
          // { text: "Waline", icon: "waline", link: "https://waline.js.org/"},
          // { text: "iconfont", link: "https://www.iconfont.cn/"},
          // { text: "Leancloud", link: "https://leancloud.app/"},
          // { text: "变更日志", icon: "time", link: "/changelog"},
          // { text: "Vercel", link: "https://vercel.com/dashboard"},
          // { text: "turingapi", link: "http://www.turingapi.com/"},
          { text: "1v1\u5B98\u7F51", icon: "1v1-4", link: "https://www.class1v1.com/" },
          { text: "\u53CB\u60C5\u94FE\u63A5", icon: "pengyoufill", link: "/friendship-link" },
          { text: "\u6587\u7AE0\u6D89\u53CA\u8D44\u6599", icon: "github", link: "https://github.com/AndersonHJB/BornforthisData" }
          // { text: "QQ开放平台", icon: "QQ1", link: "https://open.tencent.com/"},
          // { text: "微信公众号", icon: "QQ1", link: "/WechatShare/index.html"},
        ]
      },
      {
        text: "\u5BA1\u7F8E",
        icon: "eye",
        children: [
          { text: "Unsplash", icon: "pic", link: "https://unsplash.com/" },
          { text: "Dribbble", icon: "emoji", link: "https://dribbble.com/" },
          { text: "openprocessing", icon: "VIsheji", link: "https://openprocessing.org/" },
          { text: "dribbble", icon: "chuangyi", link: "https://dribbble.com/" }
        ]
      },
      {
        text: "\u5F00\u6E90/\u8BA2\u9605",
        icon: "jiyukaiyuanjianrongkaiyuan",
        children: [
          { text: "Open library", icon: "python", link: "https://pypi.org/user/Bornforthis/" },
          { text: "HTML Template", icon: "web1", link: "https://github.com/AndersonHJB/bootstrapmb" },
          { text: "Feed Json", icon: "rss", link: "https://bornforthis.cn/feed.json" },
          { text: "Feed Atom", icon: "rss", link: "https://bornforthis.cn/atom.xml" },
          { text: "Feed Rss", icon: "rss", link: "https://bornforthis.cn/rss.xml" }
        ]
      },
      {
        text: "AI\u5B9E\u9A8C\u5BA4",
        icon: "gemini-ai",
        link: "https://ai.bornforthis.cn/"
      }
      // { 
      //   text: "悦创视频平台", 
      //   icon: "play",
      //   children: [
      //     { text: "哔哩哔哩", link: "https://space.bilibili.com/405961705"},
      //     { text: "YouTube", link: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg"},
      //     { text: "抖音", link: "https://www.douyin.com/user/MS4wLjABAAAAXMiezc1TmBxz0zFxeqmWHo3JpceLXlMChTLU4cHFMCA"},
      //     { text: "西瓜视频", link: "https://www.ixigua.com/home/2049088928100061"},
      //     { text: "今日头条", link: "https://www.toutiao.com/c/user/token/MS4wLjABAAAA0lL5AB1qcqjHTRzZskVepIpHq_GlaDZqSs5DG1qjRpCBxyXEniSGIGiIIEFXrXme/?source=mine_home&log_from=1c726ddbc65f6_1655376345491&wid=1655376400664"},
      //     { text: "CSDN 视频", link: "https://blog.csdn.net/qq_33254766?type=video"},
      //     { text: "知乎视频", link: "https://www.zhihu.com/people/aiyuechuang/zvideos"},
      //     { text: "摄影课程", link: "https://list.youku.com/albumlist/show/id_68857050"},
      //   ]
      // },
    ]
  }
  // {
  //   text: "Now",
  //   icon: "plane", 
  //   link: "/Now",
  // },
  // {
  //   text: "好奇我最近做啥？",
  //   icon: "plane",
  //   children: [
  //     {
  //       text: "Now",
  //       icon: "plane", 
  //       link: "/Now.md",
  //     },
  //     {
  //       text: "Plan",
  //       icon: "plane", 
  //       link: "/plan",
  //     },
  //   ]
  // },
  // {
  //   text: "谷歌学术助手",
  //   icon: "chrome", 
  //   link: "/vpn",
  // },
  // "/portfolio"
]);

// docs/.vuepress/sidebar.ts
import { sidebar } from "vuepress-theme-hope";
var zhSidebar = sidebar({
  "/en/": "structure",
  "/": [
    "",
    // { text: "Home", icon: "shouye", like: ""},
    // { text: "About Me", icon: "shouye", like: "intro"},
    "intro",
    {
      text: "1v1 About",
      icon: "1v1-3",
      // collapsible: true,
      children: [
        {
          text: "\u79C1\u6559\u7B14\u8BB0",
          icon: "1v1-4",
          link: "/1v1/"
        },
        {
          text: "Python\u4E00\u5BF9\u4E00\u6559\u5B66",
          icon: "python",
          link: "onepython"
        },
        {
          text: "Python 1v1",
          icon: "python",
          link: "python1v1"
        },
        {
          text: "Python \u4F53\u7CFB\u8BFE",
          icon: "python",
          link: "1v1-txk"
        },
        "Notice",
        "Class-guide",
        "ai-model",
        // "Scale-of-charges",
        "math",
        // "VIP",
        "AI-drawing"
        // {
        // 	text: "Column",
        // 	icon: "columnszhuanlan",
        // 	link: "/column.md",
        // }
      ]
    },
    {
      text: "Life",
      icon: "life",
      // collapsible: true,
      children: [
        "friendship-link",
        "plan",
        "Now",
        "aboutblog",
        "why-blog",
        "essays",
        "password"
        // "chatgpt",
      ]
    },
    // {
    // 	text: "Other",
    // 	icon: "tool",
    // 	// collapsible: true,
    // 	children: [
    // 		"Record_the_class",
    // 		// "vpn",
    // 		"home",
    // 		"Download",
    // 	]
    // },
    { text: "\u7F51\u7AD9\u5206\u4EAB", icon: "JC_054", link: "learning_web/" },
    {
      text: "Advertising",
      icon: "guanggaopai",
      collapsible: true,
      prefix: "advertising",
      children: [
        "Python1v1"
      ]
    }
  ],
  "/column/research-ability/": [
    "00-Why-do-you-need-to-have-research-skills"
  ],
  "/1v1/88-Simple-swimming-leech/": [
    { text: "lecture01", icon: "python", link: "lecture01" },
    { text: "lecture02", icon: "python", link: "lecture02" },
    { text: "Exam", icon: "python", link: "lecture03" },
    { text: "Exam2", icon: "python", link: "lecture04" }
  ],
  "travel": "structure",
  "/column/AI\u5927\u6A21\u578B\u5B9E\u6218\u9AD8\u624B\u8BFE/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "rengongzhineng",
      children: [
        "00-\u5F00\u7BC7\u8BCD-\u5F00\u53D1\u5DE5\u7A0B\u5E08\u5982\u4F55\u8FDB\u9636\u4E3AAI\u5E94\u7528\u578B\u4EBA\u624D\uFF1F"
      ]
    },
    {
      text: "\u7B2C\u4E00\u7AE0\uFF1A\u5C0F\u8BD5\u725B\u5200\uFF0C\u7406\u89E3\u57FA\u7840\u6982\u5FF5",
      icon: "rengongzhineng",
      children: [
        "01-\u6D1E\u5BDF\u672C\u8D28\uFF1A\u4ECE\u5DE5\u7A0B\u5B66\u89D2\u5EA6\u770BChatGPT\u4E3A\u4EC0\u4E48\u4F1A\u5D1B\u8D77",
        "02-\u5B66\u597D\u63D0\u793A\u5DE5\u7A0B\uFF0C\u8F7B\u677E\u9A7E\u9A6D\u5927\u6A21\u578B",
        "03-\u63A2\u7D22\u667A\u80FD\u4F53\u4E16\u754C\uFF1ALangChain\u4E0ERAG\u68C0\u7D22\u589E\u5F3A\u751F\u6210"
      ]
    },
    {
      text: "\u8D85\u71C3\u5B9E\u6218\uFF0C\u6DF1\u5EA6\u73A9\u8F6C AI \u6A21\u578B",
      icon: "rengongzhineng",
      children: [
        "04-\u672C\u5730\u90E8\u7F72\uFF1A\u5982\u4F55\u672C\u5730\u5316\u90E8\u7F72\u5F00\u6E90\u5927\u6A21\u578BChatGLM3-6B\uFF1F",
        "05-\u5927\u6A21\u578B\u5FAE\u8C03\uFF1A\u5982\u4F55\u57FA\u4E8EChatGLM3-6B_Lora\u6784\u5EFA\u57FA\u672C\u6CD5\u5F8B\u5E38\u8BC6\u5927\u6A21\u578B\uFF1F",
        "06-RAG\u5B9E\u6218\uFF1A\u57FA\u4E8EChatGLM3-6B+LangChain+Faiss\u642D\u5EFA\u4F01\u4E1A\u5185\u90E8\u77E5\u8BC6\u5E93"
      ]
    },
    {
      text: "Tips",
      icon: "rengongzhineng",
      prefix: "Tips",
      children: [
        "01-Windows-ssh-macos-connect",
        "02-git-huggingface-error",
        "03-llamacpp"
      ]
    }
  ],
  "/column/AI\u5927\u6A21\u578B\u9879\u76EE\u843D\u5730\u5B9E\u6218/": [
    {
      text: "\u5F00\u7BC7\u8BCD\uFF081\u8BB2\uFF09",
      icon: "rengongzhineng",
      link: "00-\u5F00\u7BC7\u8BCD\uFF5C\u666E\u901A\u5F00\u53D1\u8005\u9047\u4E0AAI\u65F6\u4EE3\uFF0C\u5982\u4F55\u7834\u5C40\uFF1F"
    },
    {
      text: "\u7B2C\u4E00\u7AE0 \u57FA\u672C\u539F\u7406\uFF084\u8BB2\uFF09",
      icon: "rengongzhineng",
      children: [
        "01-\u539F\u7406\uFF1A\u4E00\u4E2A\u4F8B\u5B50\u8BB2\u6E05\u695ATransformer\u539F\u7406.md"
      ]
    }
  ],
  "/column/Unity-casual-mobile-game-development/": [
    "",
    "00-\u4ECE0\u5F00\u59CB\u505A\u6E38\u620F",
    "01-\u914D\u7F6E\u5F00\u53D1\u73AF\u5883",
    "02-\u5BFC\u5165\u6574\u7406\u7D20\u6750",
    "03-\u9879\u76EE\u89C4\u5212\u4E0E\u65B9\u6CD5",
    "04-2D\u4FEF\u89C6\u89D2\u6E32\u67D3\u8BBE\u7F6E",
    "05-\u5168\u65B0\u8F93\u5165\u7CFB\u7EDF-input-system",
    "06-\u5B9E\u73B0\u5411\u524D\u8DF3\u8DC3",
    "07-\u521B\u5EFA\u52A8\u753B",
    "08-\u81EA\u9002\u5E94\u76F8\u673A\u63A7\u5236",
    "09-\u5B9E\u73B0\u5DE6\u53F3\u79FB\u52A8",
    "10-\u521B\u5EFA\u5DE6\u53F3\u79FB\u52A8\u52A8\u753B",
    "11-\u521B\u5EFA\u573A\u666F-\u8349\u576A",
    "12-\u521B\u5EFA\u573A\u666F-\u9A6C\u8DEF",
    "13-\u968F\u673A\u751F\u6210\u7269\u4F53",
    "14-\u521B\u5EFA\u573A\u666F-\u5C0F\u6CB3",
    "15-\u65E0\u9650\u968F\u673A\u751F\u6210\u5730\u56FE"
  ],
  // "/column/AI-Large-model/LangChain-practice-class/": [
  // 	"",
  // 	"01",
  // ],
  "/column/c-course/": [
    {
      text: "\u6559\u7A0B",
      icon: "yongyan",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08"
      ]
    },
    {
      text: "\u7EC3\u4E60",
      icon: "shequ-jihuo",
      prefix: "practice/",
      children: [
        "01-c-function"
      ]
    }
  ],
  "/medium/": false,
  "/column/StableDiffusion/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "huihua",
      children: [
        { text: "\u5982\u4F55\u5B9E\u73B0\u7ED8\u753B\u6A21\u578B\u81EA\u7531\uFF1F", icon: "SVG", link: "01" },
        { text: "AI \u7ED8\u753B\u4F5C\u54C1\u96C6", icon: "SVG", link: "02" }
      ]
    },
    {
      text: "\u70ED\u8EAB\u7BC7:AI \u7ED8\u753B\u521D\u4F53\u9A8C",
      icon: "huihua",
      children: [
        { text: "01-WebUI \u7684 N \u5927\u7ED8\u56FE\u529F\u80FD", icon: "SVG", link: "03" },
        { text: "02-\u5982\u4F55\u66F4\u7CBE\u51C6\u5730\u63A7\u5236\u7ED8\u753B\u98CE\u683C\u548C\u5185\u5BB9\uFF1F", icon: "SVG", link: "04" },
        { text: "03-\u8FDB\u9636\u5E94\u7528\uFF1A\u56FE\u751F\u56FE\u6280\u5DE7\u4E0E\u521B\u4F5C\u793E\u533A\u521D\u63A2", icon: "SVG", link: "05" },
        { text: "04-\u5B9E\u6218\u9879\u76EE\uFF08\u4E00\uFF09\uFF1A\u7528 LoRA \u5236\u4F5C\u4E00\u4E2A\u4F60\u81EA\u5DF1\u7684\u6F2B\u753B\u6545\u4E8B", icon: "SVG", link: "06" }
      ]
    },
    {
      text: "\u57FA\u7840\u7BC7:AI \u7ED8\u753B\u539F\u7406\u63ED\u79D8",
      icon: "huihua",
      children: [
        { text: "05-\u65E7\u753B\u5E08GAN\uFF1A\u5929\u751F\u6709\u7F3A\u9677\u8FD8\u662F\u5B66\u827A\u4E0D\u7CBE\u6E5B\uFF1F", icon: "SVG", link: "07" },
        { text: "06-\u98A0\u8986\u8005\u6269\u6563\u6A21\u578B\uFF1A\u76F4\u89C2\u53BB\u7406\u89E3\u52A0\u566A\u4E0E\u53BB\u566A", icon: "SVG", link: "08" },
        { text: "07-AIGC \u7684\u6838\u5FC3\u9B54\u6CD5\uFF1A\u641E\u61C2 Transformer", icon: "SVG", link: "09" },
        { text: "08-\u5DE7\u7528\u795E\u7ECF\u7F51\u7EDC\uFF1A\u5982\u4F55\u7528UNet\u9884\u6D4B\u566A\u58F0", icon: "SVG", link: "10" }
      ]
    }
  ],
  "/column/Zero-Based-Data-Thinking-Course/": [
    "01",
    "02"
  ],
  "/1v1/53-FanFan/": [
    "01"
  ],
  "/1v1/52-Pandora/": [
    {
      text: "\u6E38\u620F\u5F00\u53D1",
      icon: "idea2",
      children: [
        "02-game"
      ]
    },
    {
      text: "\u9898\u76EE",
      icon: "yongyan",
      children: [
        "01-quiz"
      ]
    }
  ],
  "/1v1/49-CaoYuguang/": "structure",
  "/1v1/37-JIngWenn/": "structure",
  "/1v1/36-Ricardo/": [
    "",
    "Project-A",
    "Project-B",
    "Project-B-two",
    "01-kaoshi"
  ],
  "/1v1/33-chenyaoyao/": [
    "",
    {
      text: "Homework",
      icon: "python",
      prefix: "2023year",
      // 前缀,这部分目录的文件都在 2023year 文件夹下
      children: [
        "01-Assignment01",
        "02-Assignment02",
        "03-qizhonkao",
        "04-hw3",
        "05",
        "06-Assignment4",
        "07"
      ]
    }
  ],
  "/blog/": "structure",
  "/column/cpp/": [
    "",
    {
      text: "C++\u6559\u7A0B",
      icon: "language-cpp",
      prefix: "cpp-tutorial/",
      collapsible: true,
      children: [
        "01-cpp-intro",
        "02-cpp-environment-setup",
        "03-cpp-basic-syntax"
      ]
    },
    {
      text: "CPP \u6781\u901F",
      icon: "language-cpp",
      prefix: "cpp_rumen/",
      collapsible: true,
      children: [
        "01"
      ]
    },
    {
      text: "\u8865\u5145",
      icon: "language-cpp",
      prefix: "supplement/",
      collapsible: true,
      children: [
        "01-cpp-keyword-intro"
      ]
    }
  ],
  "/column/document-style-guide/": [
    {
      text: "\u4E2D\u6587\u6280\u672F\u6587\u6863\u7684\u5199\u4F5C\u89C4\u8303",
      icon: "docs",
      children: [
        "title",
        "text",
        "paragraph",
        "number",
        "marks",
        "structure",
        "reference",
        "filename-should-be-lowercase",
        "camelcase"
      ]
    }
  ],
  "/column/nlp/": [
    "",
    {
      text: "Base",
      icon: "a-294_nlpf",
      prefix: "base/",
      children: [
        "01"
      ]
    }
  ],
  "/column/Probability-theory/": [
    "",
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "MathOperations",
      collapsible: true,
      children: [
        "01",
        "02"
      ]
    }
  ],
  "/column/Vue-Get-started/": [
    "",
    "01"
  ],
  "/column/Mok-asked/": [
    "",
    {
      text: "\u6C60\u5EFA\u5F3A\xB7\u521B\u4E1A\u624B\u8BB0",
      prefix: "Entrepreneurial-notes/",
      icon: "a-bijibenbiji",
      collapsible: true,
      children: [
        "2022/01",
        "2022/02",
        "2022/03",
        "2022/04",
        "2022/05"
      ]
    }
  ],
  "/1v1/85-AmyXiao/": "structure",
  "/column/CS/base/": [
    {
      text: "\u57FA\u7840\u5165\u95E8",
      icon: "c",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07"
      ]
    },
    {
      text: "Tips",
      icon: "blog",
      children: [
        "tips3",
        "tips1",
        "tips2"
      ]
    }
  ],
  "/1v1/90-Ganglion/": "structure",
  "/column/Rust/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "rust",
      collapsible: true,
      children: [
        ""
      ]
    },
    {
      text: "\u57FA\u7840\u7BC7 (11\u8BB2)",
      icon: "rust",
      collapsible: true,
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06"
      ]
    },
    {
      text: "Tips",
      icon: "rust",
      collapsible: true,
      prefix: "Tips",
      children: [
        "01-Functional-Programming"
      ]
    }
  ],
  "/letter/": [
    "",
    {
      text: "Abalone",
      icon: "blog",
      prefix: "Abalone/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "2023\u5E74",
      icon: "letter",
      children: [
        "2023/01",
        "2023/02",
        "2023/03",
        "2023/04",
        "2023/05"
        // "2023/like",  // tt
        // "2023/heart",  // tt
      ]
    },
    {
      text: "2024\u5E74",
      icon: "letter",
      children: [
        // "2024/importance",  // kk
        // "2024/one-is-all",  // kk
        "2024/12-gift",
        "life/2024-Year-EveryDay-Message",
        "life/Cook-for-the-wife",
        "life/Wedding-photos",
        "life/change",
        "life/over",
        "life/mv-change",
        "life/2024-Money",
        "life/message",
        "life/20240502"
      ]
    },
    {
      text: "\u6000\u5B55",
      icon: "gift",
      prefix: "pregnancy",
      children: [
        "pregnancy-log",
        "Matters-needing-attention"
      ]
    },
    {
      text: "Book Write",
      icon: "book",
      prefix: "book-write",
      children: [
        "01",
        "write-data"
      ]
    }
    // {
    // 	text: "NoteBook",
    // 	icon: "letter",
    // 	collapsible: true,
    // 	children: [
    // "2023/heart",
    // "2023/like",
    // ]
    // }
  ],
  "/column/Python-Flask/": [
    "",
    {
      text: "Python Flask Web\u5F00\u53D1\u5165\u95E8\u4E0E\u5B9E\u6218",
      collapsible: true,
      children: [
        "Project1/01.md",
        "Project1/02.md"
      ]
    }
  ],
  "/enlighten/": [
    "",
    {
      text: "2023\u5E74",
      icon: "dongwutubiao-xianxing-tuzi",
      collapsible: true,
      children: [
        { text: "2023\u8DE8\u5E74\u6F14\u8BB2\uFF5C\u8FD9\u4E2A\u601D\u8DEF\u6709\u542F\u53D1\uFF01\u300C\u5168\u6587\u7A3F\u300D", icon: "idea2", link: "2023-Friend-of-Time-Enlighten" }
      ]
    }
  ],
  "/column/book/The-Three-Body-Problem/": [
    { text: "\u4E09\u4F53\u9996\u9875", icon: "book", link: "README.md" },
    {
      text: "\u4E09\u4F531:\u5730\u7403\u5F80\u4E8B",
      icon: "book1",
      collapsible: true,
      children: [
        "\u7B2C\u4E00\u90E8-\u5730\u7403\u5F80\u4E8B/01",
        {
          text: "\u7B2C\u4E00\u7AE0:\u79D1\u5B66\u8FB9\u754C",
          icon: "book1",
          children: [
            "\u7B2C\u4E00\u90E8-\u5730\u7403\u5F80\u4E8B/02"
          ]
        }
      ]
    }
  ],
  "/learning_web/": [
    "",
    "Open-source",
    "Learning-Websites",
    "Browser",
    "Resource-Website",
    "Design-websites-to-share",
    "Personal",
    "blog"
  ],
  "/1v1/46-Jenny/": "structure",
  "/1v1/27-111923/": [
    {
      text: "\u9898\u76EE",
      icon: "python",
      children: [
        "01",
        "02",
        "03",
        "04"
      ]
    },
    {
      text: "Answer",
      icon: "python",
      prefix: "Answer",
      children: [
        "01-Answer",
        "02-Answer",
        "03-Answer",
        "04-Answer"
      ]
    }
  ],
  "/1v1/26-Shoop/": [
    "01-question"
  ],
  "/1v1/24-Borghi/": [
    "01",
    "02",
    "03"
  ],
  "/1v1/21-YuXinyi/": [
    {
      text: "Python \u56DE\u987E",
      icon: "python",
      collapsible: true,
      children: [
        "01-function"
      ]
    }
  ],
  "/1v1/43-JoJunYan/": [
    {
      text: "Final review",
      icon: "python",
      children: [
        "01",
        "02-Unit1",
        "03-Unit2",
        "04",
        "05",
        "06"
      ]
    }
  ],
  "/1v1/22-DongYuhang/": [
    {
      text: "Problem",
      collapsible: true,
      icon: "python",
      children: [
        "01-lab01",
        "02-lab02",
        "03-NYU-Tandon-School-of-Engineering",
        { text: "04-Homework02", icon: "python", link: "04-NYU-Tandon-School-of-Engineering-Homework02" },
        { text: "05-Homework03", icon: "python", link: "05-HW03" },
        { text: "06-Homework04", icon: "python", link: "06-HW04" },
        { text: "07-Exam-1-Review-CS-1114-Spring-2022", icon: "python", link: "07-Exam-1-Review-CS-1114-Spring-2022" },
        "08-CS-UY-1114-Intro-to-Programming-Problem-Solving"
      ]
    },
    {
      text: "Answer",
      icon: "python",
      prefix: "Answer",
      collapsible: true,
      children: [
        "01-lab01_answer",
        "02-NYU-Tandon-School-of-Engineering",
        { text: "04-Homework02", icon: "python", link: "04-NYU-Tandon-School-of-Engineering-Homework02" },
        { text: "05-Homework03", icon: "python", link: "05-HW03" }
      ]
    }
  ],
  "/1v1/40-yushu/": [
    {
      text: "HomeWork",
      icon: "yongyan",
      children: [
        "",
        "01",
        "Final-Project-K-Means-Clustering",
        "02"
      ]
    },
    {
      text: "School",
      icon: "gongsi",
      prefix: "2034-python-bris",
      children: [
        { text: "Introductory Scientific Computing - SCIF10001", icon: "github", link: "01" },
        { text: "Introductor", icon: "github", link: "02" },
        { text: "Introductc1", icon: "github", link: "03" },
        { text: "Introduccing - SCIF10001", icon: "github", link: "04" },
        { text: "quiz", icon: "github", link: "05" }
      ]
    }
  ],
  "/1v1/16-mdm505/": [
    "",
    "01",
    "02",
    "03"
  ],
  "/1v1/18-Jason/": [
    "",
    {
      text: "\u535A\u5BA2\u642D\u5EFA",
      icon: "blog",
      collapsible: true,
      children: [
        "01",
        "02",
        "03"
      ]
    },
    {
      text: "Unity",
      icon: "unity",
      children: [
        "04"
      ]
    },
    {
      text: "\u6C47\u603B",
      icon: "blog",
      collapsible: true,
      children: [
        "command"
      ]
    }
  ],
  "/column/ChatGPT-Midjourney/": [
    {
      text: "1. AI \u524D\u6CBF\u8BFE",
      icon: "rengongzhineng",
      // icon: "rengongzhinengdanao",
      // icon: "icon-rgb_jiqixuexisuanfayinqing",
      prefix: "AI-leading-edge",
      children: [
        { text: "\u4F60\u7684 AI \u526F\u9A7E", icon: "chat1", link: "01" }
      ]
    },
    {
      text: "2. AI \u7ED8\u753B\u{1F3A8}",
      icon: "huahua",
      prefix: "How-to-use-AI-for-painting/",
      children: [
        { text: "\u524D\u8A00\uFF5C\u4F60\u7684\u4E13\u5C5E\u8BBE\u8BA1\u5E08", icon: "huabi", link: "01" },
        { text: "01\uFF5CAI \u7ED8\u753B\u65B9\u6CD5\u662F\u4EC0\u4E48\uFF1F", icon: "huabi", link: "02" },
        { text: "02\uFF5C\u600E\u6837\u4E3A\u6253\u9020\u591A\u98CE\u683C\u5F62\u8C61?", icon: "huabi", link: "03" },
        { text: "03\uFF5C\u600E\u6837\u7ED9\u5BA0\u7269\u521B\u9020Q\u7248\u5F62\u8C61?", icon: "huabi", link: "04" },
        { text: "04\uFF5C\u600E\u6837\u5B9A\u5236\u4F60\u7684\u4E13\u5C5E\u58C1\u7EB8\uFF1F", icon: "huabi", link: "05" },
        { text: "05\uFF5C\u600E\u4E48=\u6837\u5FEB\u901F\u4E0A\u624B\u54C1\u724C logo \u8BBE\u8BA1\uFF1F", icon: "huabi", link: "06" }
      ]
    },
    {
      text: "3. \u6E05\u5355",
      icon: "zhanwaituiguangguanggaoshuju",
      prefix: "Models/",
      children: [
        "list"
      ]
    },
    {
      text: "4. \u52A0\u9910",
      icon: "chat",
      prefix: "StableDiffusion",
      children: [
        "01"
      ]
    },
    {
      text: "5. Public",
      icon: "mysql",
      prefix: "public",
      children: [
        "/column/ChatGPT-Midjourney/How-to-use-AI-for-painting/00",
        "01",
        "02-draw-prompt",
        "03-ChatGPT-list",
        "04-ChatGPT-Role-presupposition"
      ]
    },
    {
      text: "ChatGPT Prompt",
      icon: "rengongzhinengdanao",
      prefix: "wuenda/",
      children: [
        "01-Introduction"
      ]
    }
  ],
  "/column/Python-data-visualization/": [
    {
      text: "\u6848\u4F8B\u4E0A\u624B Python \u6570\u636E\u53EF\u89C6\u5316",
      icon: "home",
      collapsible: true,
      children: [
        "",
        "01"
      ]
    },
    {
      text: "Matplotlib Python \u6570\u636E\u53EF\u89C6\u5316",
      icon: "home",
      collapsible: true,
      prefix: "Matplotlib",
      children: [
        "",
        {
          text: "0.\u4ECB\u7ECD",
          icon: "python",
          children: [
            "01",
            "02"
          ]
        },
        {
          text: "1.\u753B\u56FE\u5143\u7D20",
          icon: "python",
          children: [
            "03",
            "04"
          ]
        }
      ]
    }
  ],
  "/1v1/30-TangRujia/": [
    ""
  ],
  "/1v1/29-Wulili/": [
    ""
  ],
  "/1v1/15-Lantern_Fs/": [
    ""
  ],
  "/column/Computer-basic-practical-course/": [
    "",
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      icon: "caozuoxitong",
      collapsible: true,
      children: [
        "00"
      ]
    },
    {
      text: "\u4EE5\u53F2\u4E3A\u9274 (3\u8BB2)",
      icon: "caozuoxitong",
      collapsible: true,
      children: [
        "01",
        "02",
        "02-1"
      ]
    },
    {
      text: "\u786C\u4EF6-\u82AF\u7247(\u624B\u5199MiniCPU)(10\u8BB2)",
      icon: "caozuoxitong",
      collapsible: true,
      children: [
        "03"
      ]
    }
  ],
  "/1v1/62-SuzIhAn/": [
    {
      text: "HomeWork",
      icon: "employee-rank",
      prefix: "Homework",
      children: [
        "Lab2",
        "Lab3",
        "Lab4",
        "Lab5",
        "Lab6",
        "Lab7-Street-Craps",
        "Homework1",
        "Homework2",
        "Homework3",
        "Homework3-1",
        "Homework4",
        "Homework5",
        "Homework6",
        "Homework7"
      ]
    }
  ],
  "/1v1/39-xiaohonshu/": [
    { text: "01-\u4E2A\u6027\u7B7E\u540D", icon: "a-jibijilianxibianji", link: "README.md" },
    { text: "02-YOYO \u7EC3\u4E60\u9898", icon: "a-jibijilianxibianji", link: "q1" },
    { text: "02-\u66B4\u8E81\u7684\u8001\u94C1", icon: "a-jibijilianxibianji", link: "q2" },
    "q3",
    "q4",
    "q5",
    "q6",
    "q7"
  ],
  "/1v1/34-WangQien/": [
    {
      text: "\u7B54\u7591",
      icon: "fankuifaqs",
      children: [
        "",
        "01-fuxi",
        "02"
      ]
    }
  ],
  "/1v1/38-coisini/": [
    ""
  ],
  "/1v1/28-GaoTianQi/": [
    "",
    {
      text: "2023 Semester1",
      collapsible: true,
      icon: "python",
      children: [
        "01-W00-Worksheet-0-Building-blocks"
      ]
    },
    {
      text: "\u7B54\u7591",
      icon: "fankuifaqs",
      collapsible: true,
      children: [
        "Question01",
        "01-The-Culprit",
        "02-Canner-can",
        "03-Dodgy-Brothers-Price-List",
        "04-Chess-Problem-v4",
        "05-All-Question",
        "06-Assignment01",
        "08-Practice-Mid-Semester-Test-April-2023",
        "09-fuxi01",
        "11-P2-Project2-FoCdle",
        "12-Project-Answer"
      ]
    },
    {
      text: "Review",
      icon: "python",
      collapsible: true,
      children: [
        "07-review-question",
        "10-unimelb-COMP10001-Mid-term-review",
        "13-exam-2019s1",
        "14-Practice-Exam-May2023"
      ]
    },
    {
      text: "C",
      icon: "cpp",
      collapsible: true,
      children: [
        "16-C1",
        "17-quiz",
        "18-middle-quiz",
        "19-look-like",
        "20-Quiz",
        "/column/Python-core-technology-and-practice/Algorithm/02",
        "21-project01",
        "22-Practice-Quiz",
        "23-Coursework02-A-Game-Implemented-with-Tkinter"
      ]
    },
    {
      text: "\u9879\u76EE",
      icon: "github",
      collapsible: true,
      prefix: "Project/",
      children: [
        "01-Project1-Matching-Game",
        "02-Project2-FoCdle",
        "03-comp10002-Foundations-of-Algorithms-Semester2-2023-Assignment1",
        "04-comp10002-Foundations-of-Algorithms-Semester2-2023-Assignment2",
        {
          text: "Point",
          icon: "mysql",
          prefix: "point/",
          // collapsible: true,
          children: [
            "00-list",
            "01-typedef"
          ]
        }
      ]
    },
    {
      text: "Java",
      icon: "java",
      children: [
        "24-ShadowTaxi"
      ]
    }
  ],
  "/column/ChatGPT/": [
    "",
    {
      text: "ChatBot",
      icon: "rengongzhineng",
      prefix: "Chatbot",
      children: [
        "01"
      ]
    },
    {
      text: "ChatGPT Manual",
      icon: "chat",
      prefix: "ChatGPTManual/",
      children: [
        "01",
        "02"
      ]
    },
    {
      text: "ChatPPT",
      icon: "PPT",
      prefix: "ChatPPT",
      children: [
        "01",
        "02"
      ]
    }
  ],
  "/column/Data-Structures-and-Algorithms/": [
    "",
    {
      text: "01-Recursion",
      icon: "guidang",
      prefix: "01-Recursion/",
      children: [
        "01-Hanoi",
        "02-Frog-Jumping-Stairs"
      ]
    }
  ],
  "/column/clang-tutorial/": [
    "",
    "intro",
    "syntax",
    "variable",
    {
      text: "Lab",
      collapsible: true,
      icon: "cyuyan",
      prefix: "Lab",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12"
      ]
    },
    {
      text: "FAQ",
      icon: "cyuyan",
      prefix: "FAQ",
      children: [
        "01"
      ]
    }
  ],
  "/column/download/": [
    "",
    "\u6700\u597D\u7528\u7684Markdown\u7F16\u8F91\u5668Typora\u7834\u89E3\u6307\u5357"
  ],
  "/column/Django-fast-development-practice/": [
    // "",
    { text: "Django\u9996\u9875", icon: "django", link: "/column/Django-fast-development-practice/" },
    {
      text: "Django \u5B66\u4E60\u7B14\u8BB0",
      icon: "django",
      prefix: "Django-Study-Notes",
      children: [
        {
          text: "\u5377\u4E00:\u4ECEDjango\u5165\u624B",
          icon: "django",
          children: [
            { text: "01-Django\u5165\u95E8", icon: "django", link: "01-Start-with-Django" },
            { text: "02-\u7528\u6237\u8D26\u6237", icon: "django", link: "02-Django-User" }
          ]
        }
      ]
    },
    {
      text: "\u521D\u8BC6Django (4\u8BB2)",
      icon: "django",
      children: [
        { text: "\u8BFE\u7A0B\u4ECB\u7ECD", icon: "django", link: "chapter01/01-django-intro" }
      ]
    },
    {
      text: "Django Tips",
      icon: "django",
      prefix: "Tips",
      children: [
        { text: "Django \u66F4\u6362\u6570\u636E\u5E93\u4E3A Mysql", icon: "django", link: "01-Django-changes-the-database-to-mysql" },
        { text: "Django \u5B9E\u73B0\u8BC4\u8BBA\u7CFB\u7EDF", icon: "django", link: "02-Django-comments" },
        { text: "\u5982\u4F55\u7F16\u5199\u81EA\u5B9A\u4E49\u7684\u6A21\u677F\u6807\u7B7E\u548C\u8FC7\u6EE4\u5668", icon: "django", link: "03-custom-template-tags" }
      ]
    },
    {
      text: "\u968F\u7B14\u6559\u7A0B",
      icon: "django",
      prefix: "gossip",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "Markdown"
      ]
    }
  ],
  "/popular-science/": [
    "",
    "01-How-does-OBS-multiplex-push"
  ],
  // "/blog/The-public-class/": [
  // 	{ "text": "01-初识Kitten", link: "01-初识Kitten",}
  // ],
  "/column/git/": [
    "",
    {
      text: "\u5165\u95E8\u57FA\u7840",
      icon: "git",
      children: [
        "base/01",
        "base/02",
        "base/03",
        "base/04"
      ]
    }
  ],
  "/column/svg-tutorial/": [
    "",
    "svg-intro",
    "svg-example",
    "svg-inhtml",
    "svg-rect",
    "svg-circle",
    "svg-ellipse",
    "svg-line",
    "svg-polygon",
    "svg-polyline",
    "svg-path",
    "svg-text",
    "svg-stroke"
  ],
  "/column/Python-practice/": [
    {
      text: "\u58A8\u5C14\u672C\u5927\u5B66 Python",
      icon: "python",
      children: [
        "The-University-of-Melbourne/exam-2016s1",
        "The-University-of-Melbourne/exam-2019s2",
        "The-University-of-Melbourne/exam-2022-online"
      ]
    },
    {
      text: "\u7B54\u6848",
      icon: "python",
      children: [
        {
          text: "\u58A8\u5C14\u672C\u5927\u5B66 Answer",
          icon: "python",
          children: [
            { text: "exam-2016s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2016s1-solution" },
            { text: "exam-2017s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2017s1-solution" },
            { text: "exam-2018s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2018s1-solution" },
            { text: "exam-2019s1-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2019s1-solution" },
            { text: "exam-2019s2-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2019s2-solution" },
            { text: "exam-2022-solution", icon: "python", link: "Answer/The-University-of-Melbourne/exam-2022-solution" }
          ]
        }
      ]
    }
  ],
  "/column/Basic-course-of-artificial-intelligence/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      icon: "rengongzhineng",
      children: [
        "detail/chapter01/01"
      ]
    },
    {
      text: "\u6570\u5B66\u57FA\u7840 (7\u8BB2)",
      icon: "rengongzhineng",
      children: [
        "chapter02/01"
      ]
    }
  ],
  "/column/Final-Cut-Pro/": [
    {
      text: "Question",
      icon: "icon_answer",
      prefix: "Question/",
      children: [
        "01-Question1"
      ]
    }
  ],
  "/column/video_loging/": [
    "",
    {
      text: "\u7814\u7A76\u{1F9D0}",
      icon: "readingandwritingabookwithinkandafeather",
      prefix: "Question",
      children: [
        "01-Apollo"
      ]
    },
    {
      text: "Plan",
      icon: "guanggao1",
      children: [
        "update_plan"
      ]
    }
    // {
    // 	text: "Gifts",
    // 	icon: "gift",
    // 	prefix: "gifts/",
    // 	children: [
    // 		"vpn"
    // 	]
    // }
  ],
  "/column/shangshou/": [
    {
      text: "Shangshou",
      icon: "home",
      link: "shangshou"
    },
    {
      text: "\u4ECE\u4E0A\u300C\u624B\u300D\u5230\u300C\u4E0A\u300D\u624B",
      icon: "employee-rank",
      prefix: "From-upper-hand-to-master-hand/",
      children: [
        "01"
      ]
    },
    {
      text: "\u6709\u6548\u8BAD\u7EC3\u4F60\u7684\u7814\u7A76\u80FD\u529B",
      icon: "chat",
      prefix: "research-ability/",
      children: [
        "00-Why-do-you-need-to-have-research-skills",
        "01-Three-essential-types-of-awareness-for-research"
      ]
    },
    {
      text: "\u4E0A\u624B\uFF1A\u6559\u4F60\u5982\u4F55\u5FEB\u901F\u638C\u63E1\u4E00\u9879\u6280\u80FD",
      icon: "blog",
      prefix: "Getting-Started-Teaching-You-How-to-Quickly-Master-a-Skill/",
      children: [
        "",
        "00-Introduction-Wherever-you-want-to-go-start-from-where-you-are",
        "01-Part-1-Getting-the-Hang-of-It"
      ]
    }
  ],
  "/column/DeepSeek-Application-Development-Practical-Guide/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "rengongzhineng",
      link: ""
    },
    {
      text: "\u524D\u7F6E\u8BFE\u7A0B\uFF1A\u5FEB\u901F\u5165\u95E8 DeepSeek \u4EE5\u53CA AI \u5F00\u53D1\u5FC5\u5907\u6280\u672F",
      icon: "blog",
      children: [
        "00",
        "01"
      ]
    }
  ],
  "/column/An-introductory-programming-class-that-anyone-can-learn/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      icon: "code",
      children: [
        "detail/chapter01/01"
      ]
    },
    {
      text: "\u8BED\u8A00\u57FA\u7840\u7BC7 (13\u8BB2)",
      icon: "code",
      children: [
        "detail/chapter02/01"
      ]
    }
  ],
  // "/blog/vuepress/": "structure",
  "/ps/": [
    "01",
    "02"
  ],
  "/1v1/79-SuKungran/": "structure",
  "/column/Python-core-technology-and-practice/": [
    {
      text: "\u5F00\u7BC7\u8BCD",
      collapsible: true,
      icon: "python",
      children: [
        "00"
      ]
    },
    {
      text: "\u57FA\u7840\u7BC7",
      icon: "python",
      collapsible: true,
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14"
      ]
    },
    {
      text: "\u8FDB\u9636\u7BC7",
      icon: "python",
      collapsible: true,
      children: [
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21"
      ]
    },
    {
      text: "Supplement",
      icon: "python",
      collapsible: true,
      prefix: "supplement/",
      children: [
        "01-why-args-kwargs",
        "02-if-not",
        "03-python-dictionary-comprehension-guide-and-examples",
        "04-Python-Logic-Pitfalls-Changing-Lists"
      ]
    },
    {
      text: "Binary-search",
      icon: "python",
      collapsible: true,
      prefix: "Binary-search",
      children: [
        "00",
        "01",
        "practice"
      ]
    },
    {
      text: "Algorithm",
      icon: "shujujiegou1",
      prefix: "Algorithm/",
      children: [
        {
          text: "\u7B2C1\u7AE0\uFF1A\u4F60\u9700\u8981\u4E86\u89E3\u7684\u7B97\u6CD5\u57FA\u7840",
          icon: "yongyan",
          collapsible: true,
          children: [
            "01",
            "02"
          ]
        },
        "12",
        "13",
        "14",
        "15",
        "19",
        "40"
      ]
    },
    {
      text: "\u968F\u7B14",
      icon: "idea",
      prefix: "Casual-essay/",
      children: [
        "01-binary-tree"
      ]
    }
  ],
  "/1v1/64-MKQ/": [
    {
      text: "Python Analytics",
      icon: "dev",
      prefix: "IEORE4502_001_2023_3-Python-for-Analytics/",
      children: [
        {
          text: "Getting Started",
          icon: "laboratorylab",
          prefix: "Getting-Started/",
          children: [
            "01-Prepare-for-Technological-Success",
            "02-Observe-Proper-Netiquette"
          ]
        }
      ]
    },
    {
      text: "TOOLS FOR ANALYTICS",
      icon: "dev",
      prefix: "IEORE4501_001_2023_3-TOOLS-FOR-ANALYTICS",
      children: [
        {
          text: "01 - Fundamentals",
          icon: "laboratorylab",
          prefix: "01-Fundamentals",
          children: [
            "01-How-to-Complete-the-Homeworks"
          ]
        }
      ]
    }
  ],
  "/1v1/97-Loyal/": "structure",
  "/1v1/65-ihatesilentletter": "structure",
  "/1v1/69-OuyangYijie/": "structure",
  "/1v1/96-Four-dimensional/": [
    {
      text: "Lab",
      icon: "laboratorylab",
      children: [
        "CSCA20-Lab1",
        "CSCA20-Lab2",
        "CSCA20-Lab3",
        "CSCA20-Lab4",
        "CSCA20-Lab5"
        // "CSCA20-Lab6",
        // "CSCA20-Lab7",
      ]
    },
    {
      text: "HomeWork",
      icon: "lianxi",
      children: []
    },
    {
      text: "Review",
      icon: "idea",
      children: [
        "2022F_TT2",
        "yufa"
      ]
    }
  ],
  "/1v1/63-BiLLLL/": [
    {
      text: "HomeWork",
      icon: "doc",
      prefix: "Homework/",
      children: [
        "Econometric-Python-Lab-Assignment1"
      ]
    }
  ],
  "/column/AI-Large-model/": [
    {
      text: "\u5377\u4E00: AI \u5927\u6A21\u578B",
      icon: "moxing",
      children: [
        { text: "GPT \u6765\u4E86", icon: "chat1", link: "01" },
        { text: "\u4F60\u7684\u8D34\u8EAB\u52A9\u7406", icon: "chat1", link: "02" },
        { text: "01-\u8BA9\u6211\u4EEC\u5B66\u4F1A\u548CAI\u8BF4\u8BDD", icon: "chat1", link: "03" },
        { text: "02-\u5982\u4F55\u5229\u7528\u5927\u8BED\u8A00\u6A21\u578B\u505A\u60C5\u611F\u5206\u6790\uFF1F", icon: "chat1", link: "04" },
        { text: "03-\u5DE7\u7528\u63D0\u793A\u8BED\uFF0C\u8BF4\u8BF4\u8BDD\u5C31\u80FD\u505A\u4E2A\u804A\u5929\u673A\u5668\u4EBA", icon: "chat1", link: "05" }
      ]
    },
    {
      text: "LangChain \u57FA\u7840\u4ECB\u7ECD\u53CA\u6848\u4F8B\u8BB2\u89E3",
      icon: "message-language",
      prefix: "LangChain/51/",
      children: [
        "00",
        "01",
        "02",
        "03"
      ]
    },
    {
      text: "\u52A0\u9910",
      icon: "readingandwritingabookwithinkandafeather",
      prefix: "extra_meal/",
      children: [
        "01",
        {
          text: "\u77E5\u8BC6\u70B9\u8865\u5145",
          icon: "shequ-jihuo",
          collapsible: true,
          children: [
            "01-1",
            "01-2",
            "01-3",
            "01-4"
          ]
        }
      ]
    },
    {
      text: "\u667A\u80FD\u5BA2\u670D",
      icon: "zhuanjiaketang-jihuo",
      prefix: "AI-customer-service",
      children: [
        "",
        "01"
      ]
    },
    {
      text: "LangChain \u5B9E\u6218\u8BFE",
      icon: "shequ-jihuo",
      prefix: "LangChain-practice-class",
      children: [
        "",
        "01"
      ]
    }
  ],
  "/column/Teacher-certificate/": [
    "01",
    "02",
    "03"
  ],
  "/1v1/48-Bob/": "structure",
  "/column/Turtle/": [
    "",
    {
      text: "\u57FA\u7840\u6559\u7A0B",
      icon: "Turtle",
      prefix: "Base-Turtle",
      children: [
        "01"
      ]
    }
  ],
  "/column/\u6444\u5F71\u5165\u95E8\u8BFE/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      collapsible: true,
      icon: "cameraadd",
      children: [
        ""
      ]
    }
  ],
  "/1v1/20-Frank/": [
    {
      text: "\u9898\u76EE",
      icon: "docs",
      collapsible: true,
      children: [
        "",
        "01",
        "02",
        "03"
      ]
    },
    {
      text: "\u7B54\u6848",
      icon: "python",
      collapsible: true,
      prefix: "answer",
      children: [
        "Answer1"
      ]
    }
  ],
  "/1v1/13-liuyiton": [
    "",
    "01",
    "02"
  ],
  "/1v1/04-TommyTian": [
    "01",
    "02-PROJECT-4-REVIEW-EXERCISES",
    "03-Keep-working-on-your-midterm-sites",
    "04-HW04",
    "05-web-notebook",
    "06-Answer",
    "07-Homework05",
    "08-Lab8",
    "09-Homework06",
    "10-Homework07",
    "11-Homework08",
    "12-CS-UY-1114-Python",
    "13-\u67E5\u7F3A\u8865\u6F0F",
    "12-HomeWork09",
    "13-Homework10",
    "14-Review"
  ],
  "/1v1/03-Dannie": [
    {
      text: "\u9636\u6BB5\u4E00:Python\u57FA\u7840",
      collapsible: true,
      icon: "python",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15"
      ]
    }
  ],
  "/column/R-Course/": [
    {
      text: "R \u5FEB\u901F\u5165\u95E8",
      icon: "moxing",
      prefix: "base/",
      children: [
        "01",
        "02"
      ]
    }
  ],
  "/1v1/68-GUI-Zhiyi-Engineering/": [
    {
      text: "HomeWork",
      icon: "laboratorylab",
      prefix: "HomeWork",
      children: [
        { text: "Exercises 1", icon: "linux", link: "01-Variables-assignment-and-operator-precedence" },
        { text: "Exercises 2", icon: "linux", link: "02-Control-statements" },
        { text: "Exercises 3", icon: "linux", link: "03-Types-type-conversions-and-floating-point-arithmetic" },
        { text: "04-Math", icon: "linux", link: "04-Math" }
      ]
    }
  ],
  "/1v1/73-MKQ/": "structure",
  "/1v1/76-Jianxin-Berkeley-Optoelectronics/": "structure",
  "/letter/36-stratagem": [
    "",
    "01",
    "02"
  ],
  "/1v1/60-wudi/": [
    {
      text: "HomeWork",
      icon: "idea2",
      prefix: "HomeWork/",
      children: [
        "Exercise0",
        "Exercise1",
        "Exercise2",
        "Exercise3",
        "Exercise4",
        "Exercise5",
        "Exercise6",
        "Exercise7",
        "ma407_AT23_assessedcw-instructions"
      ]
    },
    {
      text: "Question",
      icon: "mysql",
      prefix: "Question/",
      children: [
        "Question1"
      ]
    }
  ],
  "/1v1/59-x_10/": [
    "01",
    "02",
    "03"
  ],
  "/1v1/58-sbhw/": "structure",
  "/column/macOS-Tips/": [
    "",
    "01-macOS\u5165\u95E8\u6307\u5357",
    "02-macOS\u5E38\u7528\u5FEB\u6377\u952E",
    "03-macOS\u5E38\u89C1\u95EE\u9898",
    "04-macOS\u8F6F\u4EF6\u6E05\u5355",
    "05-macOS\u8F6F\u4EF6\u81EA\u7528",
    "06-macOS\u8F6F\u4EF6\u6280\u5DE7",
    "07-macOS\u6574\u7406\u6280\u5DE7",
    "08-macOS\u6548\u7387\u6307\u5357"
  ],
  "/1v1/54-BananaYuShu/": [
    "",
    {
      text: "MATH20017",
      icon: "MathOperations",
      collapsible: true,
      prefix: "MATH20017",
      children: [
        { text: "Welcome Page", icon: "shujujiegou", link: "01" },
        {
          text: "Lecture Notes",
          icon: "guidang",
          prefix: "Lecture-Notes/",
          children: [
            { text: "Lecture 0", icon: "employee-rank", link: "Lecture0" },
            { text: "Lab 1", icon: "employee-rank", link: "Lab1" }
          ]
        }
      ]
    },
    {
      text: "Other",
      icon: "laboratorylab",
      prefix: "Other",
      collapsible: true,
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        // "07",
        // "08",
        { text: "Test 1 Data Science 1", icon: "MathOperations", link: "08" },
        "09",
        "10",
        "11",
        "12",
        "13",
        "14-Test4",
        "15",
        "16",
        "17",
        "18",
        "Assessment-Nearest-and-Furthest",
        "SCIF30005-Forest-Fire-Mini-Project"
      ]
    },
    {
      text: "Statistics 2 2023",
      icon: "cib-r",
      prefix: "Statistics22023",
      collapsible: true,
      children: [
        { text: "Practical 1", icon: "MathOperations", link: "01-Statistics2-Computer-Practical1" },
        { text: "Practical 2", icon: "MathOperations", link: "02-Statistics2ComputerPractical2" },
        { text: "Practical 3", icon: "MathOperations", link: "03-Statistics3ComputerPractical3" }
      ]
    },
    {
      text: "Algorithms and Machine Learning 2023",
      icon: "shouye",
      prefix: "Algorithms-and-Machine-Learning-2023",
      collapsible: true,
      children: [
        { text: "coursework 1", icon: "MathOperations", link: "Assessed-coursework1" },
        { text: "coursework 2", icon: "MathOperations", link: "Assessed-coursework2" },
        { text: "coursework 3", icon: "MathOperations", link: "Assessed-coursework3" },
        { text: "coursework 4", icon: "MathOperations", link: "Assessed-coursework4" },
        { text: "coursework 5", icon: "MathOperations", link: "Assessed-coursework5" },
        "Assessment1"
      ]
    },
    {
      text: "Review",
      icon: "python",
      prefix: "Review",
      children: [
        "01-Algorithm"
      ]
    }
  ],
  "/1v1/61-XuXin-Nora/": [
    {
      text: "\u4E32\u300C\u4E71\u300D\u8BB2",
      icon: "message-language",
      prefix: "String-disorderly-talk",
      children: [
        "Question",
        "01"
      ]
    }
  ],
  // "/Vpn-clash-win-mac/": "structure",
  "/1v1/72-zhangborui": "structure",
  "/1v1/41-ZhengHaoyuan/": [
    {
      text: "Old",
      icon: "zhuanjiaketang-jihuo",
      // collapsible: true,
      children: [
        "",
        "01",
        "02-CS-UY-1114-Final-Review",
        "03-Lab1",
        "04-Lab3",
        "06-Topic",
        "07-dh-Midterm-Exam",
        "08-fuxi",
        "09-fuxi2"
      ]
    },
    {
      text: "HomeWork",
      icon: "laboratorylab",
      // collapsible: true,
      prefix: "HomeWork",
      children: [
        { text: "Homework1", icon: "mysql", link: "Homework1" },
        { text: "Homework2", icon: "mysql", link: "Homework2" },
        { text: "Homework3", icon: "mysql", link: "Homework3" },
        { text: "Homework4", icon: "mysql", link: "Homework4" },
        { text: "Homework5", icon: "mysql", link: "Homework5" },
        { text: "Homework6", icon: "mysql", link: "Homework6" },
        { text: "Homework7", icon: "mysql", link: "Homework7" },
        { text: "Homework8", icon: "mysql", link: "Homework8" },
        {
          text: "Lab Answer",
          icon: "shequ-jihuo",
          collapsible: true,
          prefix: "Answer",
          children: [
            { text: "Homework1-Answer", icon: "zhuanjiaketang-jihuo", link: "Homework1-Answer" }
          ]
        }
      ]
    }
  ],
  "/1v1/77-xiaoxianyue/": "structure",
  "/1v1/78-scott-guan2008/": "structure",
  "/1v1/75-chen/": "structure",
  "/1v1/70-WuYue/": [
    {
      text: "HomeWork",
      icon: "language-fortran",
      prefix: "HomeWork",
      children: [
        "01-HomeWork1",
        "02-HomeWork3",
        "03-HomeWork4",
        "04-HomeWork5",
        "05-HomeWork6",
        "06-HomeWork7",
        "07-HomeWork8"
      ]
    },
    {
      text: "Question",
      icon: "shequ-jihuo",
      prefix: "Question",
      children: [
        "Question1",
        "Question2",
        "Question3",
        "Question4"
      ]
    }
  ],
  "/1v1/66-doubao/": "structure",
  "/1v1/67-Doncic/": "structure",
  "/1v1/56-YY-University-of-Pennsylvania/": [
    "Homework3"
  ],
  "/1v1/57-Ren-Xinxing-gatech-edu-USA/": "structure",
  // [
  // 	"Part0",
  // 	"R-hw01",
  // 	"01-Midterm-Exam-Part-2-Computation",
  // ],
  "/1v1/55-Mooncake-eason/": [
    "01-hw1"
  ],
  "/1v1/35-LiuYirao/": [
    {
      text: "Quiz",
      icon: "lianxi",
      children: [
        "",
        "01-While",
        "02-Programming-Assignment2",
        "03-Assignment2_MultipleChoice",
        "04-1004_assignment2_programming",
        "05-Final-Project",
        "06-codingbat",
        "07-MATLAB-Tutorial-for-Calculus-III-Part-1",
        "08-uic-python-all-quiz",
        "09-monikao",
        "10-lianxi",
        "11-quiz7"
      ]
    }
  ],
  "/1v1/45-wangxuerou/": [
    "01"
  ],
  "/1v1/23-gengmiao/": [
    "01",
    "02"
  ],
  "/1v1/12-T0Mnn": [
    "01-Diploma-in-Information-Technology",
    "01"
  ],
  "/1v1/07-AJuN": [
    "01-W14-Worksheet-14-File-IO-and-CSV-Files",
    "02-Wugs",
    "03-Exam-Foundations-of-Computing-COMP10001_2022_SM2"
  ],
  "/1v1/06-KAI/": [
    {
      text: "\u4E00\u3001Web",
      icon: "web",
      collapsible: true,
      children: [
        { text: "01-Assignment-1-Unix", icon: "web", link: "01-Assignment-1-Unix" },
        { text: "02-Assignment2-HTML", icon: "web", link: "04-Assignment2-HTML" },
        { text: "03-Assignment3-CSS", icon: "web", link: "05-Assignment3-CSS" },
        { text: "04-Assignment4 Raster Graphics", icon: "web", link: "08-Assignment4-Raster-Graphics" },
        { text: "05-Assignment5-Vector-Graphics", icon: "web", link: "09-Assignment5-Vector-Graphics" },
        { text: "06-Assignment 6: Website Layout", icon: "web", link: "11-Assignment-6-Website-Layout" },
        { text: "07-Final-Project", icon: "web", link: "13-Final-Project" },
        { text: "08-Macro-Assignment-01-HTML-CSS-HelloWorld", icon: "web", link: "16-Macro-Assignment-01-HTML-CSS-HelloWorld" },
        { text: "09-Macro Assignment 02: Everything is Awesome!", icon: "web", link: "17-Macro-Assignment02-Everything-is-Awesome" },
        { text: "10-Lab01-web", icon: "web", link: "19-Lab01-web" },
        { text: "11-Lab02-web", icon: "web", link: "20-Lab02-web" },
        { text: "12-Lab03-web", icon: "web", link: "21-Lab03-web" },
        { text: "13-Gotta Catch em All!", icon: "web", link: "22-Macro-Assignment-03-Gotta-Catch-em-All" },
        { text: "14-Lab04-web", icon: "web", link: "23-Lab04-web" },
        { text: "15-Assignment04", icon: "web", link: "24-Macro-Assignment04-Harry-Potter-and-the-Chamber-of-the-DOM" },
        { text: "16-kaoshi", icon: "web", link: "26-kaoshi" },
        { text: "17-Assignment05", icon: "web", link: "27-Assignment05" },
        { text: "18-Micro-Assignment06", icon: "web", link: "29-Micro-Assignment06" },
        { text: "19-Assignment06-Matching-Game", icon: "web", link: "30-Assignment06-Matching-Game" },
        { text: "20-Assignment 07: Server-side Quizzing System", icon: "php", link: "31-Assignment07-Server-side-Quizzing-System" },
        { text: "21-Micro Assignment 07", icon: "php", link: "32-Micro-Assignment07" },
        { text: "22-Micro Assignment 08", icon: "php", link: "33-Micro-Assignment08" },
        { text: "34-Assignment 08", icon: "php", link: "34-Assignment-08-Interactive-Database" },
        { text: "35-Assignment 09: Let's Chat", icon: "php", link: "35-Assignment09-Lets-Chat" },
        { text: "36-Assignment 10: Node.js: Let's Chat", icon: "php", link: "36-Assignment10-Nodejs" }
      ]
    },
    {
      text: "\u4E8C\u3001Java",
      icon: "java",
      collapsible: true,
      children: [
        "",
        { text: "02-Part-1-Birth-Date-Application-30-pts", icon: "java", link: "02-Part-1-Birth-Date-Application-30-pts" },
        { text: "03-Mac-Windows\u547D\u4EE4\u884C\u7F16\u5199Java", icon: "java", link: "03-Mac-Windows\u547D\u4EE4\u884C\u7F16\u5199Java" },
        { text: "06-Weaving-a-Kilim-Carpet-Application", icon: "java", link: "06-Weaving-a-Kilim-Carpet-Application" },
        { text: "07-Assignment-3-java", icon: "java", link: "07-Assignment-3-java" },
        { text: "08-Assignment4-Hangman-Game", icon: "java", link: "10-Assignment4-Hangman-Game" },
        { text: "09-Assignment3-Battleship", icon: "java", link: "12-Assignment3-Battleship" },
        { text: "10-Assignment6", icon: "java", link: "14-Assignment6" },
        { text: "11-group-hw", icon: "java", link: "15-group-hw" }
        // { text: "12-Postfix-Calculator", icon: "java", link: "25-Postfix-2Calculator" },
        // { text: "13-QueueAssignment", icon: "java", link: "28-QueueAssignment" },
      ]
    },
    {
      text: "\u4E09\u3001\u6570\u636E\u7ED3\u6784",
      icon: "shujujiegou-01",
      collapsible: true,
      children: [
        { text: "01-Data-Structures-Programming-Assignment-1-OOP-Review", icon: "java", link: "18-Data-Structures-Programming-Assignment-1-OOP-Review" },
        { text: "02-Postfix-2Calculator", icon: "java", link: "25-Postfix-2Calculator" },
        { text: "03-QueueAssignment", icon: "java", link: "28-QueueAssignment" }
      ]
    },
    {
      text: "\u56DB\u3001\u6570\u636E\u5206\u6790/\u5E93",
      collapsible: true,
      icon: "mysql",
      prefix: "Database-Design-and-Implementation-Section001",
      children: [
        { text: "01-schedule", icon: "icon_SQL", link: "01-schedule" },
        "02-Raw-Data-Munging",
        "03-Quiz",
        "03-spreadsheet",
        "04-SQL-CRUD",
        "05-Data-Normalization-and-Entity-Relationship-Diagramming",
        { text: "05-Exam 1", icon: "icon_SQL", link: "05-Exam1" },
        { text: "06-Exam 2", icon: "icon_SQL", link: "06-Exam2" },
        { text: "07-AirBnB MongoDB Analysis", icon: "icon_SQL", link: "07-AirBnB-MongoDB-Analysis" },
        { text: "08-pandas-exploration", icon: "icon_SQL", link: "08-pandas-exploration" },
        {
          text: "Notes",
          icon: "Notebook",
          prefix: "Notes",
          children: [
            "submit",
            { text: "Course intro", icon: "a-bijibenbiji1", link: "Course-intro" }
          ]
        }
      ]
    },
    {
      text: "\u4E94\u3001C \u7CFB\u7EDF\u8BBE\u7F6E",
      icon: "c",
      collapsible: true,
      children: [
        { text: "Assignment 1", icon: "a-bijibenbiji1", link: "37-C-Assignment1" },
        { text: "Assignment 2", icon: "a-bijibenbiji1", link: "38-Programming-Assignment2" },
        { text: "Assignment 3", icon: "a-bijibenbiji1", link: "39-ProgrammingAssignment3" },
        { text: "Part1 Main Memory", icon: "a-bijibenbiji1", link: "40-Cache-Project-Part1-Main-Memory" },
        { text: "Part2 Main Memory", icon: "a-bijibenbiji1", link: "41-Cache-Project-Part2-L2-Cache" },
        { text: "Part3 Main Memory", icon: "a-bijibenbiji1", link: "42-Cache-Project-Part3-L1-Cache" }
      ]
    },
    {
      text: "SQL",
      icon: "mysql",
      collapsible: true,
      // prefix: "",
      children: [
        "44-Homework1-sql",
        "45-Homework2-sql"
      ]
    },
    {
      text: "Other",
      icon: "python",
      collapsible: true,
      // prefix: "",
      children: [
        "47-Fall-2024-Machine-Learning-Final-Competition-Guidelines",
        "46-CSCI-SHU360-Machine-Learning-Homework4",
        "50-Text-Post"
      ]
    }
  ],
  "/1v1/59-Chenxi-Huang/": "structure",
  "/1v1/71-YangZichen/": "structure",
  "/1v1/31-ZhangShuoteng/": [
    "",
    "01-assignment3"
  ],
  "/1v1/11-MaLin": [
    "01-Java-Hw",
    "02-minproject",
    "03-Coursework-2-World-of-Zuul"
  ],
  "/1v1/32-FYN/": [
    "",
    "01"
  ],
  "/1v1/09-liujiahui": [
    {
      text: "Java",
      icon: "java",
      children: [
        "01-Coursework-1-Property-Viewer",
        "01-Coursework-1-Property-Viewer-zh",
        "02-Coursework-2-World-of-Zuul",
        "03-Coursework-2-World-of-Zuul-ZH",
        "04-CW1-2023-Brief"
      ]
    }
  ],
  "/1v1/08-LionGuo": [
    {
      text: "Python HW",
      icon: "python",
      children: [
        "01-Homework-Problem-DNA-sequencing",
        "02-Homework-Problem-2-Arctic-Ice",
        "03-Homework-Problem-3-Finding-an-exoplanet"
      ]
    }
  ],
  "/1v1/02-yuebao": [
    "",
    {
      text: "2022\u5E74",
      icon: "jihua2",
      collapsible: true,
      children: [
        "01-Plan"
      ]
    }
  ],
  "/1v1/05-Patrick/": [
    {
      text: "HomeWork",
      icon: "python",
      children: [
        "01-CITS1401-Computational-Thinking-with-Python",
        "02-CS-shaoshuai-Python-cs",
        "03-CITS1401-Computational-Thinking-wit-Python"
      ]
    }
  ],
  "/column/Java/": [
    {
      text: "\u7B2C\u4E00\u7AE0 Java \u7F16\u7A0B\u57FA\u7840",
      collapsible: true,
      icon: "java",
      children: [
        "chapter01/01",
        "chapter01/02",
        "chapter01/03",
        "chapter01/04",
        "chapter01/05",
        "chapter01/06",
        "chapter01/07",
        "chapter01/08",
        "chapter01/09",
        "chapter01/10",
        "chapter01/11",
        "chapter01/12",
        "chapter01/13",
        "chapter01/14",
        "chapter01/15",
        "chapter01/16",
        "chapter01/17",
        "chapter01/18",
        "chapter01/19",
        "chapter01/20",
        "chapter01/21",
        "chapter01/22"
      ]
    },
    {
      text: "\u7B2C\u4E8C\u7AE0 Java\u9762\u5411\u5BF9\u8C61\u7F16\u7A0B",
      collapsible: true,
      icon: "java",
      children: [
        "chapter02/23",
        "chapter02/24",
        "chapter02/25",
        "chapter02/26",
        "chapter02/27",
        "chapter02/28",
        "chapter02/29",
        "chapter02/30",
        "chapter02/31",
        "chapter02/32",
        "chapter02/33",
        "chapter02/34",
        "chapter02/35",
        "chapter02/36",
        "chapter02/37",
        "chapter02/38",
        "chapter02/39",
        "chapter02/40",
        "chapter02/41",
        "chapter02/42"
      ]
    },
    {
      text: "FQA",
      collapsible: true,
      icon: "java",
      children: [
        "FQA/01-Why-do-switch-case-statements-need-to-include-breaks",
        "FQA/02-Java-String-to-int-Translate",
        "FQA/03-for-generate-rhombus",
        "FQA/05-Java-trim()\u65B9\u6CD5",
        "FQA/06-instance-object"
      ]
    },
    {
      text: "\u8865\u5145",
      icon: "java",
      collapsible: true,
      children: [
        "supplement/01-Java-String-contains-Method",
        "supplement/02-Java-String-charAt-Method"
      ]
    },
    {
      text: "Quiz",
      icon: "java",
      collapsible: true,
      children: [
        "Quiz/quiz01"
      ]
    },
    {
      text: "Test",
      icon: "java",
      collapsible: true,
      prefix: "Test/",
      children: [
        {
          text: "\u9898\u76EE",
          icon: "yongyan",
          children: [
            "test01"
          ]
        },
        {
          text: "\u7B54\u6848",
          icon: "kepujiaoyu",
          prefix: "Answer/",
          children: [
            "test01-answer"
          ]
        }
      ]
    },
    {
      text: "\u7EC3\u4E60\u9898",
      icon: "java",
      prefix: "practice",
      collapsible: true,
      children: [
        "01-Array-exercise"
      ]
    }
  ],
  "/column/tianchi/": [
    {
      text: "Python \u5165\u95E8\u4E0E\u5B9E\u8DF5",
      icon: "python",
      collapsible: true,
      children: [
        "Python/Python01"
      ]
    }
  ],
  "/1v1/25-Cynthia/": [
    { text: "01-\u53D8\u91CF", icon: "python", link: "01.md" },
    { text: "02-\u521D\u8BC6\u6570\u636E\u7C7B\u578B", icon: "python", link: "02.md" },
    { text: "03-\u6570\u5B57\u578B", icon: "python", link: "03.md" }
  ],
  "/1v1/19-zhaojinwei/": [
    "",
    "01",
    "02",
    "03"
  ],
  "/1v1/10-java-note/": [
    {
      text: "\u7B2C\u4E00\u7AE0 Java\u7F16\u7A0B\u57FA\u7840 (30\u8BB2)",
      icon: "java",
      children: [
        "01"
      ]
    }
  ],
  "/1v1/17-R/": [
    "",
    "01"
  ],
  "/1v1/01-Thomas-hw-note/": [
    {
      text: "\u642D\u5EFA\u4E2A\u4EBA\u535A\u5BA2",
      collapsible: true,
      children: [
        "02-Cocos",
        "03-web02",
        "04-web03",
        "05-web04",
        "06-web05",
        "07-web06",
        "08-web07",
        "09-web08",
        "10-web09",
        "11-web10",
        "12-web11"
      ]
    },
    {
      text: "Python \u57FA\u7840",
      collapsible: true,
      children: [
        "01-Variable",
        { text: "02-\u521D\u8BC6\u6570\u636E\u7C7B\u578B", icon: "python", link: "13-Python01" },
        { text: "14-\u7B2C\u4E8C\u8282-\u521D\u8BC6\u6570\u636E\u7C7B\u578B", icon: "python", link: "14-\u7B2C\u4E8C\u8282-\u521D\u8BC6\u6570\u636E\u7C7B\u578B" },
        { text: "15-\u6570\u5B57\u578B", icon: "python", link: "15-\u6570\u5B57\u578B" },
        { text: "16-\u5B57\u7B26\u4E32", icon: "python", link: "16-python-string" }
      ]
    }
  ],
  "/column/python60/": [
    { text: "Day 1", icon: "python", link: "01" },
    { text: "Day 2", icon: "python", link: "02" },
    { text: "Day 3", icon: "python", link: "03" },
    { text: "Day 4", icon: "python", link: "04" },
    { text: "Day 5", icon: "python", link: "05" },
    { text: "Day 6", icon: "python", link: "06" },
    { text: "Day 7", icon: "python", link: "07" },
    { text: "Day 8", icon: "python", link: "08" },
    { text: "Day 9", icon: "python", link: "09" },
    { text: "Day 10", icon: "python", link: "10" },
    { text: "Day 11", icon: "python", link: "11" }
  ],
  "/archives/": "structure",
  // "/blog/crawler/": "structure",
  // "/blog/2022/": "structure",
  "/column/data_analysis": [
    {
      text: "pyecharts",
      collapsible: true,
      children: [
        "pyecharts/01",
        "pyecharts/02"
      ]
    },
    {
      text: "FAQ",
      collapsible: true,
      children: [
        "FAQ/01-Excel\u4E2D$.md",
        "FAQ/02"
      ]
    },
    {
      text: "Math Base",
      collapsible: true,
      children: [
        { text: "01-\u5E73\u5747\u5DEE", icon: "zhuzhuangtu", link: "Math/01-mean-deviation" },
        { text: "02-\u6807\u51C6\u5DEE\u548C\u65B9\u5DEE", icon: "zhuzhuangtu", link: "Math/02-standard-deviation" }
      ]
    },
    {
      text: "\u6570\u636E\u5206\u679045\u8BB2",
      collapsible: true,
      children: [
        {
          text: "Introduction (Lecture 1)",
          children: [
            "Data-analysis-practice-45-lectures/Phase-one/01"
          ]
        },
        {
          text: "Module 2: Data Analysis Algorithms (20 lectures)",
          children: [
            "Data-analysis-practice-45-lectures/Phase-three/01",
            "Data-analysis-practice-45-lectures/Phase-three/02",
            "Data-analysis-practice-45-lectures/Phase-three/03",
            "Data-analysis-practice-45-lectures/Phase-three/04-1",
            "Data-analysis-practice-45-lectures/Phase-three/04-2",
            "Data-analysis-practice-45-lectures/Phase-three/17",
            "Data-analysis-practice-45-lectures/Phase-three/18",
            "Data-analysis-practice-45-lectures/Phase-three/24",
            "Data-analysis-practice-45-lectures/Phase-three/25"
          ]
        }
      ]
    },
    {
      text: "\u8865\u5145",
      collapsible: true,
      children: [
        "supplement/01-\u6700\u8FD1\u90BB\u7B97\u6CD5KNN"
      ]
    }
  ],
  // "/learning_web/": [
  // 	"",
  // 	"01",
  // ],
  "/column/data-structure/": [
    {
      // text: "阶段一：算法与数据结构基础",
      text: "\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u57FA\u7840",
      icon: "employee-rank",
      collapsible: true,
      children: [
        {
          text: "\u7B2C1\u5468 \u7EBF\u6027\u67E5\u627E\u6CD5",
          icon: "shujujiegou",
          // collapsible: true,
          children: [
            {
              text: "\u7B2C1\u7AE0 \u6B22\u8FCE\u5927\u5BB6\u6765\u5230\u7B97\u6CD5\u4E0E\u6570\u636E\u7ED3\u6784\u7684\u4E16\u754C",
              children: [
                "week1/01",
                "week1/02"
              ]
            }
          ]
        }
      ]
    },
    {
      text: "\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u4E4B\u7F8E",
      icon: "laboratorylab",
      collapsible: true,
      children: [
        {
          text: "\u5F00\u7BC7\u8BCD",
          icon: "shujujiegou",
          prefix: "The-beauty-of-data-structures-and-algorithms/",
          // collapsible: true,
          children: [
            { text: "\u5F00\u7BC7\u8BCD", icon: "shujujiegou-01", link: "00-\u5F00\u7BC7\u8BCD-\u4ECE\u4ECA\u5929\u8D77-\u8DE8\u8FC7\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\u8FD9\u9053\u574E" }
          ]
        },
        {
          text: "\u5165\u95E8\u7BC7",
          icon: "shujujiegou",
          prefix: "The-beauty-of-data-structures-and-algorithms/",
          // collapsible: true,
          children: [
            { text: "01-\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5\uFF1F", icon: "shujujiegou-01", link: "01-\u4E3A\u4EC0\u4E48\u8981\u5B66\u4E60\u6570\u636E\u7ED3\u6784\u548C\u7B97\u6CD5" },
            { text: "02-\u9AD8\u6548\u5730\u5B66\u4E60", icon: "shujujiegou-01", link: "02-\u5982\u4F55\u6293\u4F4F\u91CD\u70B9\uFF0C\u7CFB\u7EDF\u9AD8\u6548\u5730\u5B66\u4E60\u6570\u636E\u7ED3\u6784\u4E0E\u7B97\u6CD5\uFF1F" },
            { text: "03-\u590D\u6742\u5EA6\u5206\u6790\uFF08\u4E0A\uFF09", icon: "shujujiegou-01", link: "03-\u590D\u6742\u5EA6\u5206\u6790\uFF08\u4E0A\uFF09\uFF1A\u5982\u4F55\u5206\u6790\u3001\u7EDF\u8BA1\u7B97\u6CD5\u7684\u6267\u884C\u6548\u7387\u548C\u8D44\u6E90\u6D88\u8017\uFF1F" },
            { text: "04-\u590D\u6742\u5EA6\u5206\u6790\uFF08\u4E0B\uFF09", icon: "shujujiegou-01", link: "04-\u590D\u6742\u5EA6\u5206\u6790\uFF08\u4E0B\uFF09\uFF1A\u6D45\u6790\u6700\u597D\u3001\u6700\u574F\u3001\u5E73\u5747\u3001\u5747\u644A\u65F6\u95F4\u590D\u6742\u5EA6" }
          ]
        },
        {
          text: "\u57FA\u7840\u7BC7",
          icon: "shujujiegou",
          prefix: "The-beauty-of-data-structures-and-algorithms/",
          // collapsible: true,
          children: [
            { text: "05-\u4E3A\u4EC0\u4E48\u6570\u7EC4\u4ECE0\u5F00\u59CB\u7F16\u53F7?", icon: "shujujiegou-01", link: "05-\u6570\u7EC4\uFF1A\u4E3A\u4EC0\u4E48\u5F88\u591A\u7F16\u7A0B\u8BED\u8A00\u4E2D\u6570\u7EC4\u90FD\u4ECE0\u5F00\u59CB\u7F16\u53F7\uFF1F" },
            { text: "06-\u94FE\u8868\u300C\u4E0A\u300D", icon: "shujujiegou-01", link: "06-\u94FE\u8868\uFF08\u4E0A\uFF09\uFF1A\u5982\u4F55\u5B9E\u73B0LRU\u7F13\u5B58\u6DD8\u6C70\u7B97\u6CD5\uFF1F" },
            { text: "07-\u94FE\u8868\u300C\u4E0B\u300D", icon: "shujujiegou-01", link: "07-\u94FE\u8868\uFF08\u4E0B\uFF09\uFF1A\u5982\u4F55\u8F7B\u677E\u5199\u51FA\u6B63\u786E\u7684\u94FE\u8868\u4EE3\u7801\uFF1F" },
            { text: "08-\u6808", icon: "shujujiegou-01", link: "08-\u6808\uFF1A\u5982\u4F55\u5B9E\u73B0\u6D4F\u89C8\u5668\u7684\u524D\u8FDB\u548C\u540E\u9000\u529F\u80FD\uFF1F" },
            { text: "09-\u961F\u5217", icon: "shujujiegou-01", link: "09-\u961F\u5217\uFF1A\u961F\u5217\u5728\u7EBF\u7A0B\u6C60\u7B49\u6709\u9650\u8D44\u6E90\u6C60\u4E2D\u7684\u5E94\u7528" },
            { text: "10-\u9012\u5F52\uFF1A\u627E\u5230\u201C\u6700\u7EC8\u63A8\u8350\u4EBA\u201D", icon: "shujujiegou-01", link: "10-\u9012\u5F52\uFF1A\u5982\u4F55\u7528\u4E09\u884C\u4EE3\u7801\u627E\u5230\u201C\u6700\u7EC8\u63A8\u8350\u4EBA\u201D\uFF1F" },
            { text: "21-\u54C8\u5E0C\u7B97\u6CD5\uFF08\u4E0A\uFF09", icon: "shujujiegou-01", link: "21-\u54C8\u5E0C\u7B97\u6CD5\u4E0A-\u5982\u4F55\u9632\u6B62\u6570\u636E\u5E93\u4E2D\u7684\u7528\u6237\u4FE1\u606F\u88AB\u8131\u5E93\uFF1F" }
          ]
        }
      ]
    },
    {
      text: "Tips",
      collapsible: true,
      icon: "shequ-jihuo",
      prefix: "Tips",
      children: [
        "01-Climbing-the-Stairs",
        "02-Java-Stack",
        "03-binarysearch-to-log2n"
      ]
    },
    {
      text: "supplement",
      collapsible: true,
      icon: "alisis",
      prefix: "supplement",
      children: [
        "big-O-proof-and-big-\u0398proof"
      ]
    },
    {
      text: "MakerYue",
      collapsible: true,
      icon: "worksheet",
      prefix: "MakerYue",
      children: [
        "week1-python-basics-and-linked-lists",
        "week1-solution",
        "week2-linked-lists-abstract-data-types",
        "Week3-Asymptotic-analysis-1"
      ]
    },
    {
      text: "Algorithm General",
      collapsible: true,
      icon: "zhuanjiaketang-jihuo",
      prefix: "Algorithm-General-16",
      children: [
        "00-Era-of-Human-Machine-Interaction-Understanding-Algorithms-for-Success"
      ]
    },
    {
      text: "Python \u7B97\u6CD5",
      icon: "python",
      prefix: "Python-DSA",
      collapsible: true,
      children: [
        "00-chapter-computational-complexity",
        "01-bogosort-sorting-algorithms",
        "02-Insertion-Sort",
        "03-linear-search",
        "04-binary-tree",
        "05-Prims-algorithm",
        "06-Kruskal-algorithm",
        "07-hash_map"
      ]
    }
  ],
  "/column/AI-practice-class-for-front-end-engineers/": [
    "01"
  ],
  "/1v1/95-Diotai/": "structure",
  "/1v1/94-Gregre_/": "structure",
  "/1v1/51-YeDanning/": "structure",
  "/1v1/92-lztc1751/": "structure",
  "/column/TensorFlow/\u96F6\u57FA\u7840\u5B9E\u6218\u673A\u5668\u5B66\u4E60/": [
    {
      text: "\u5F00\u7BC7\u8BCD (1\u8BB2)",
      collapsible: true,
      children: [
        ""
      ]
    },
    {
      text: "\u51C6\u5907\u7BC7 (4\u8BB2)",
      collapsible: true,
      children: [
        "01",
        "02",
        "03"
      ]
    }
  ],
  "/column/Programmingthinking/": "structure",
  "/dedao/01-Xue-Zhaofengs-economics-class/": [
    {
      text: "\u8BFE\u524D\u5FC5\u8BFB(1\u8BB2)",
      collapsible: true,
      children: [
        "",
        "01"
      ]
    }
  ],
  "/column/Fifth_brother_photography_class/": [
    ""
  ],
  "/Code1v1/": [
    "",
    {
      text: "chapter1",
      icon: "python",
      collapsible: true,
      children: []
    },
    "changelog",
    "Development-plan"
    // {
    // 	text: "Changelog",
    // 	icon: "time",
    // 	// collapsible: true,
    // 	children: [
    // 		"changelog",
    // 	]
    // },
  ],
  "/column/PPT/": [
    "note",
    {
      text: "\u5377\u4E00:\u96F6\u57FA\u7840\u5B66\u4E60 PPT",
      collapsible: true,
      children: [
        "",
        "01"
      ]
    },
    {
      text: "\u5377\u4E8C:PPT \u6539\u4E11\u8BA1\u5212",
      collapsible: true,
      children: [
        ""
      ]
    }
  ],
  "/posts/": "structure",
  // "/posts/html": "structure",
  // "/Open_up_your_pattern/": [
  // 	"01",
  // 	"02"
  // ],
  "/Open_up_your_pattern/": "structure",
  "/column/web/": [
    "catalogue",
    {
      text: "Web \u524D\u7AEF\u5165\u95E8\u626B\u76F2\u8BFE\u7A0B",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        {
          text: "\u7B2C\u4E00\u7AE0 Web \u6982\u8FF0",
          icon: "Web",
          // collapsable: true,
          children: [
            "base/",
            "base/base_01",
            "base/base_02"
          ]
        },
        {
          text: "\u7B2C\u4E8C\u7AE0 HTML \u5165\u95E8",
          icon: "Web",
          // collapsable: true,
          children: [
            "base/base_03",
            "base/base_04",
            "base/base_05",
            "base/base_06"
          ]
        },
        {
          text: "\u7B2C\u4E09\u7AE0 CSS \u5165\u95E8",
          icon: "Web",
          // collapsable: true,
          children: [
            "base/base_07",
            "base/base_08",
            "base/base_09"
          ]
        },
        {
          text: "\u7B2C\u56DB\u7AE0 JavaScript \u5165\u95E8",
          icon: "Web",
          // collapsable: true,
          children: [
            "base/base_10",
            "base/base_11",
            "base/base_12"
          ]
        }
      ]
    },
    {
      text: "\u524D\u7AEF\u5DE5\u7A0B\u5E082022\u7248",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        {
          text: "\u9636\u6BB5\u4E00\uFF1A\u524D\u7AEF\u57FA\u7840\u5165\u95E8",
          icon: "24gl-folderOpen",
          collapsible: true,
          children: [
            {
              text: "\u7B2C1\u5468: HTML5 \u57FA\u7840\u8BED\u6CD5\u4E0E\u6807\u7B7E",
              icon: "network",
              // collapsible: true,
              children: [
                {
                  text: "\u524D\u7F6E\u5F15\u5BFC\u8BFE\uFF08\u8BFE\u524D\u5FC5\u770B\uFF09",
                  // collapsible: true,
                  children: [
                    {
                      text: "\u7B2C1\u7AE0 \u8BFE\u7A0B\u7B80\u4ECB",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_01",
                        "txk/week1/txk_02",
                        "txk/week1/txk_03"
                      ]
                    },
                    {
                      text: "\u7B2C2\u7AE0 \u524D\u7AEF\u5F00\u53D1\u884C\u60C5\u4E0E\u8BFE\u7A0B\u4F53\u7CFB\u4ECB\u7ECD",
                      icon: "Web",
                      // collapsable: true,
                      children: [
                        "txk/week1/txk_04",
                        "txk/week1/txk_05",
                        "txk/week1/txk_06",
                        "txk/week1/txk_07",
                        "txk/week1/txk_08"
                      ]
                    },
                    {
                      text: "\u7B2C3\u7AE0 \u5F00\u53D1\u5DE5\u5177\u548C\u73AF\u5883\u51C6\u5907",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_09",
                        "txk/week1/txk_10",
                        "txk/week1/txk_11"
                      ]
                    },
                    {
                      text: "\u7B2C4\u7AE0 \u8BFE\u7A0B\u603B\u7ED3",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_12"
                      ]
                    }
                  ]
                },
                {
                  text: "HTML5\u8BED\u6CD5\u4E0E\u57FA\u7840\u6807\u7B7E",
                  // collapsible: true,
                  children: [
                    {
                      text: "\u7B2C1\u7AE0 \u8BFE\u7A0B\u7B80\u4ECB",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_13"
                      ]
                    },
                    {
                      text: "\u7B2C2\u7AE0 \u8BA4\u8BC6\u4E92\u8054\u7F51\u300C\u4E86\u89E3\u5373\u53EF\u300D",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_14"
                      ]
                    },
                    {
                      text: "\u7B2C3\u7AE0 \u57FA\u7840\u8BED\u6CD5\u4E0E\u7279\u6027",
                      icon: "Web",
                      children: [
                        "txk/week1/txk_15",
                        "txk/week1/txk_16",
                        "txk/week1/txk_17",
                        "txk/week1/txk_18",
                        "txk/week1/txk_19"
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      text: "\u7535\u5B50\u6559\u8F85",
      collapsible: true,
      children: [
        "book/html-01"
      ]
    },
    {
      text: "FAQ",
      collapsible: true,
      children: [
        "FAQ/01-HTML\u56FE\u7247\u5E76\u6392\u663E\u793A",
        "FAQ/02-footer"
      ]
    }
  ],
  "/1v1/81-guizhiyi/": "structure",
  "/1v1/87-Final-assignment/": "structure",
  "/column/easy_sql/": [
    "",
    {
      text: "\u8001\u53F8\u673A\u5E26\u4F60\u8F7B\u677E\u73A9\u8F6C SQL",
      collapsible: true,
      children: [
        {
          text: "\u7B2C1\u7AE0:\u57FA\u7840\u6559\u7A0B",
          icon: "jiediansql",
          collapsible: true,
          children: [
            "old-hand/01-Is-it-necessary-to-learn-SQL-at-this-time",
            "old-hand/02-Understand-the-relationship-between-databases-and-the-SQL-language",
            "old-hand/03-Preliminary-study-of-database-The-use-of-simple-query-statements"
          ]
        }
      ]
    },
    {
      text: "SQL/MySQL \u96F6\u57FA\u7840\u4ECE\u5165\u95E8\u5230\u7CBE\u901A",
      collapsible: true,
      children: [
        {
          text: "\u7B2C1\u8282:Introduction and Installation",
          icon: "jiediansql",
          collapsible: true,
          children: [
            "Easy-Sql-Mysql/\u7B2C1\u8282-Introduction-and-Installation/01-What-Database",
            "Easy-Sql-Mysql/\u7B2C1\u8282-Introduction-and-Installation/02-sql-and-nosql"
          ]
        }
      ]
    },
    {
      text: "SQL",
      collapsible: true,
      prefix: "SQL",
      children: [
        "00-sql-tutorial",
        "01-sql-intro"
      ]
    },
    {
      text: "SQL \u4F53\u7CFB\u8BFE",
      collapsible: true,
      icon: "mysql",
      prefix: "Systematic-course",
      children: [
        "01-why-database"
      ]
    },
    {
      text: "SQL Tips",
      icon: "mysql",
      collapsible: true,
      prefix: "Tips",
      children: [
        "01-ER"
      ]
    }
  ],
  "/column/photography/": [
    {
      text: "\u5668\u6750\u57FA\u7840Plus",
      collapsible: true,
      children: [
        {
          text: "\u5B66\u524D\u73ED",
          // collapsable: true,
          children: [
            "",
            "01",
            "02",
            "03",
            "04",
            "05",
            "06"
          ]
        }
      ]
    }
  ],
  "/column/pdf/": [
    {
      text: "IT\u7C7B",
      collapsible: true,
      children: [
        ""
      ]
    }
  ],
  "/column/tijie/": [
    "",
    {
      text: "\u725B\u5BA2\u7F51",
      collapsible: true,
      children: [
        {
          text: "\u534E\u4E3A\u673A\u8BD5",
          // collapsable: true,
          children: [
            "nkw_hw01",
            "nkw_hw02",
            "nkw_hw03",
            "nkw_hw04"
          ]
        }
      ]
    },
    {
      text: "\u4E00\u672C\u901A",
      collapsible: true,
      children: [
        {
          text: "Python\u8BED\u8A00\u5165\u95E8",
          icon: "python",
          // collapsible: true,
          children: [
            "ybt_py19"
          ]
        },
        {
          text: "\u987A\u5E8F\u7ED3\u6784",
          icon: "python",
          // collapsible: true,
          children: [
            "ybt_py01",
            "ybt_py02",
            "ybt_py18"
          ]
        },
        {
          text: "\u63A7\u5236\u7ED3\u6784",
          icon: "python",
          // collapsible: true,
          children: [
            "ybt_py03",
            "ybt_py04",
            "ybt_py06",
            "ybt_py08",
            "ybt_py09",
            "ybt_py10"
          ]
        },
        {
          text: "\u5FAA\u73AF\u7ED3\u6784",
          icon: "python",
          // collapsible: true,
          children: [
            "ybt_py05",
            "ybt_py07",
            "ybt_py11",
            "ybt_py12",
            "ybt_py13",
            "ybt_py14",
            "ybt_py15",
            "ybt_py16",
            "ybt_py17"
          ]
        }
        // "ybt_py20",
        // "ybt_py21",
        // "ybt_py22",
        // "ybt_py23",
        // "ybt_py24",
        // "ybt_py25",
      ]
    },
    {
      text: "\u5B57\u8282\u8DF3\u52A8",
      collapsible: true,
      children: [
        "bytedance",
        {
          text: "\u5B57\u8282\u8DF3\u52A8\u6280\u672F\u4E60\u9898\u7B2C\u4E00\u671F(\u4E0A)",
          collapsible: true,
          icon: "python",
          children: [
            "bytedance/01",
            "bytedance/02",
            "bytedance/03",
            "bytedance/04",
            "bytedance/05",
            "bytedance/06",
            "bytedance/07",
            "bytedance/08",
            "bytedance/09",
            "bytedance/10"
          ]
        },
        {
          text: "\u5B57\u8282\u8DF3\u52A8\u6280\u672F\u4E60\u9898\u7B2C\u4E00\u671F(\u4E0A)",
          collapsible: true,
          icon: "python",
          children: [
            "bytedance/11",
            "bytedance/12",
            "bytedance/13",
            "bytedance/14",
            "bytedance/15",
            "bytedance/16",
            "bytedance/17",
            "bytedance/18",
            "bytedance/19",
            "bytedance/20"
          ]
        }
      ]
    },
    {
      text: "\u4E2D\u5C71\u5927\u5B66",
      collapsible: true,
      children: [
        "sysu",
        {
          text: "\u300CPython\u300D\u57FA\u78402022\u7EA7",
          collapsible: true,
          icon: "python",
          children: [
            "sysu/01",
            "sysu/02",
            "sysu/03",
            "sysu/04",
            "sysu/05"
          ]
        }
      ]
    },
    {
      text: "\u7EBD\u7EA6\u5927\u5B66",
      icon: "python",
      collapsible: true,
      prefix: "nyu",
      children: [
        "01"
      ]
    }
  ],
  "/1v1/50-STomp/": "structure",
  "/column/cookdinner/": "structure",
  "/1v1/80-Qingfeng/": "structure",
  "/column/pyauto/gkk/": [
    ""
    // { text: "公众号", link: "01"},
  ],
  "/column/pyauto/": [
    "",
    {
      text: "\u5377\u4E00:\u529E\u516C\u81EA\u52A8\u5316 BASE",
      collapsible: true,
      children: [
        {
          text: "\u4E00\u3001 Python \u81EA\u52A8\u5316\u529E\u516C",
          children: [
            "auto_base01",
            "auto_base02"
          ]
        },
        {
          text: "\u4E8C\u3001Python \u73AF\u5883\u5B89\u88C5",
          children: [
            "auto_base03",
            "auto_base04"
          ]
        },
        {
          text: "\u4E09\u3001Python \u81EA\u52A8\u5316\u5904\u7406 Excel",
          children: [
            "auto_base05",
            "auto_base06",
            "auto_base07",
            "auto_base08",
            "auto_base09",
            "auto_base10",
            "auto_base11",
            "auto_base12",
            "auto_base13"
          ]
        }
      ]
    },
    {
      text: "\u5377\u4E8C:\u8BFE\u524D\u51C6\u5907",
      collapsible: true,
      children: [
        "auto_01",
        "auto_02"
      ]
    }
  ],
  "/1v1/101-Sallymisty/": "structure",
  "/column/tkinter/": [
    {
      text: "FQA",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      //   link: "https://bornforthis.cn/onepython.html",
      children: [
        "tearoff"
      ]
    }
  ],
  "/column/md/": [
    "",
    {
      // 必要的，分组的标题文字
      text: "Markdown \u5FEB\u901F\u5165\u95E8\u6559\u7A0B",
      // 可选的, 分组标题对应的图标
      icon: "creative",
      // 可选的, 分组标题对应的链接
      link: "/column/md/",
      // 可选的, 设置分组是否可以折叠，默认值是 false,
      collapsible: true,
      // 必要的，分组的子项目
      children: [
        "01",
        "02",
        "03"
      ]
    }
  ],
  "/1v1/83-LuXingjiu/": "structure",
  "/1v1/84-Z/": "structure",
  "/column/\u6570\u636E\u5206\u6790\u601D\u7EF4\u4E0E\u5B9E\u621823\u8BB2/": "structure",
  "/Books/": [
    { text: "\u76EE\u5F55", icon: "book", link: "README.md" },
    // "",
    {
      text: "01-\u672C\u4E66\u7EA0\u9519",
      icon: "book",
      collapsible: true,
      prefix: "01-BookCorrectsErrors/",
      children: "structure"
    },
    {
      text: "02-\u8865\u5145\u6587\u7AE0",
      icon: "book",
      collapsible: true,
      prefix: "02-SupplementaryArticles/",
      children: [
        {
          text: "01-\u7F16\u7A0B\u601D\u7EF4",
          icon: "read",
          prefix: "Thinking/",
          collapsible: true,
          children: [
            { text: "01-\u8BA1\u7B97\u673A\u201C\u5F53\u6559\u6388\uFF1F\u201D", icon: "read", link: "01-Can-computers-be-university-professors" },
            "02-Are-war-robots-reliable",
            { text: "03-\u4F60\u771F\u7684\u5B89\u5168\u5417\uFF1F", icon: "read", link: "03-How-did-hackers-steal-your-lucky-money" },
            { text: "04-\u81EA\u52A8\u9A7E\u9A76\uFF0C\u8FD8\u5728\u8DEF\u4E0A", icon: "read", link: "04-Why-havent-self-driving-cars-become-widespread-yet" },
            { text: "05-\u673A\u5668\u80FD\u53DB\u53D8\u5417\uFF1F", icon: "read", link: "05-All-artificial-intelligence-turns-out-to-be-very-weak" }
          ]
        },
        {
          text: "02-Python \u7F16\u7A0B",
          prefix: "Python/",
          icon: "python",
          collapsible: true,
          children: "structure"
        },
        {
          text: "03-Share",
          prefix: "Share/",
          icon: "blog",
          collapsible: true,
          children: "structure"
        }
      ]
    },
    {
      text: "03-\u672C\u4E66\u7EC3\u4E60",
      icon: "book",
      collapsible: true,
      prefix: "03-TargetedPractice/",
      children: "structure"
    },
    {
      text: "04-\u672C\u4E66\u8D44\u6E90",
      icon: "book",
      collapsible: true,
      prefix: "04-BookResources/",
      children: "structure"
    },
    {
      text: "05-\u4E0E\u51FA\u7248\u793E\u6C9F\u901A",
      icon: "book",
      collapsible: true,
      prefix: "05-Liaising-with-the-publisher/",
      children: "structure"
    },
    {
      text: "06-\u51FA\u7248\u5BA3\u8BB2",
      icon: "book",
      collapsible: true,
      prefix: "06-publishing-and-speaking/",
      children: "structure"
    },
    {
      text: "07-CodeMark \u5B66\u4E60\u7CFB\u7EDF",
      icon: "book",
      collapsible: true,
      prefix: "07-CodeMark/",
      children: "structure"
    }
  ],
  "/1v1/100-Leo/": "structure",
  "/column/Python-Programming-Course/": [
    "Preface",
    { text: "Python \u8BFE\u7A0B\u8868", icon: "python", link: "ClassSchedule" },
    {
      text: "\u5377\u4E00\uFF1A\u7F16\u7A0B\u601D\u7EF4",
      prefix: "P01-Programming-thinking",
      icon: "readingandwritingabookwithinkandafeather",
      collapsible: true,
      // children: "structure",
      children: [
        {
          text: "\u7B2C\u4E00\u7AE0\uFF5C\u4F55\u4E3A\u7F16\u7A0B\u601D\u7EF4\uFF1F",
          icon: "blog",
          collapsible: true,
          children: [
            "01-Why-learn-to-program",
            "02-Programming-thinking-makes-kids-smarter"
          ]
        },
        {
          text: "\u7B2C\u4E8C\u7AE0\uFF5C\u6700\u7B80\u5355\u7684\u7F16\u7A0B\u53F2",
          icon: "blog",
          collapsible: true,
          children: [
            "03-People-started-programming-over-800-years-ago",
            "04-Why-is-the-Father-of-the-Computer-a-fraud",
            "05-How-could-the-Father-of-artificial-Intelligence-end-war"
          ]
        },
        {
          text: "\u7B2C\u4E09\u7AE0\uFF5C\u7F16\u7A0B\u601D\u7EF4\uFF0C\u6559\u4F60\u601D\u8003",
          icon: "blog",
          collapsible: true,
          children: [
            "06-How-can-mobile-phones-give-us-beauty",
            "07-How-do-you-teach-a-computer-to-recognize-a-puppy",
            "08-You-can-measure-the-height-of-a-pyramid-by-looking-at-its-shadow",
            "09-Computers-dont-even-know-the-number-2",
            "10-How-does-a-computer-analyze-a-problem",
            "11-Can-Siri-understand-you",
            "12-Computers-can-learn-by-themselves",
            "13-How-to-catch-a-robot-spy-with-programming-thinking",
            "14-How-do-you-prove-youre-not-a-robot",
            "15-Man-vs-machine-man-loses-the-first-battle",
            "16-Man-machine-war-the-computer-steal-the-trick",
            "17-Why-dont-the-waiters-in-the-restaurant-cook"
          ]
        },
        {
          text: "\u7B2C\u56DB\u7AE0\uFF5C\u7528\u7B97\u6CD5\uFF0C\u89E3\u51B3\u751F\u6D3B\u96BE\u9898",
          icon: "blog",
          collapsible: true,
          children: [
            "18-How-to-calculate-PI-with-a-handful-of-rice",
            "19-How-to-make-a-parallel-computing-scrambled-egg-dish",
            "20-How-to-choose-the-class-monitor-in-the-fairest-way",
            "21-Will-the-world-come-to-an-end-in-2038",
            "22-Can-computer-programs-really-kill-people",
            "23-Who-exactly-is-the-author-of-Dream-of-the-Red-Chamber",
            "24-Little-ants-can-also-write-algorithms",
            "25-How-to-build-cars-with-the-idea-of-establishing-archives",
            "26-Who-knows-you-best-Search",
            "27-Who-knows-you-best-Recommended"
          ]
        },
        {
          text: "\u7B2C\u4E94\u7AE0\uFF5C\u4EBA\u5DE5\u667A\u80FD\u672A\u6765",
          icon: "blog",
          collapsible: true,
          children: [
            "28-Can-computers-be-university-professors",
            "29-Are-war-robots-reliable",
            "30-How-did-hackers-steal-your-lucky-money",
            "31-Why-havent-self-driving-cars-become-widespread-yet",
            "32-All-artificial-intelligence-turns-out-to-be-very-weak"
          ]
        }
      ]
    },
    {
      text: "\u5377\u4E8C\uFF1APython \u5C0F\u5496\u517B\u6210",
      icon: "readingandwritingabookwithinkandafeather",
      // prefix: "NoteBook/",
      collapsible: true,
      children: [
        "P02-1-Python-Starter-Journey/00-Newproject",
        {
          text: "\u7B2C\u4E00\u7AE0 \u53D8\u91CF\u548C\u6570\u636E\u7C7B\u578B",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u53D8\u91CF", icon: "yongyan", link: "P02-1-Python-Starter-Journey/01-Variable" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u521D\u8BC6\u6570\u636E\u7C7B\u578B", icon: "yongyan", link: "P02-1-Python-Starter-Journey/02-Introduction-to-Data-Types" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E00", icon: "yongyan", link: "P02-2-basequestion/q1" },
            { text: "\u7B2C\u56DB\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer1" }
          ]
        },
        {
          text: "\u7B2C\u4E8C\u7AE0 \u6570\u636E\u7C7B\u578B\uFF08\u4E0A\uFF09",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u6570\u503C", icon: "yongyan", link: "P02-1-Python-Starter-Journey/03-Numeric-type" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u5B57\u7B26\u4E32", icon: "yongyan", link: "P02-1-Python-Starter-Journey/04-python-string" },
            { text: "\u4F5C\u4E1A\u4E00\u4E28\u95EE\u7B54\u5F0F\u7B80\u5386", icon: "yongyan", link: "P02-2-basequestion/hw1" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E8C", icon: "yongyan", link: "P02-2-basequestion/q2" },
            { text: "\u7B2C\u56DB\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer2" },
            { text: "\u7B2C\u4E94\u8282\u4E28\u4F55\u4E3A\u8FED\u4EE3\uFF1F", icon: "yongyan", link: "P02-1-Python-Starter-Journey/05-0-iterable" }
          ]
        },
        {
          text: "\u7B2C\u4E09\u7AE0 \u6570\u636E\u7C7B\u578B\uFF08\u4E2D\uFF09",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u5217\u8868", icon: "yongyan", link: "P02-1-Python-Starter-Journey/05-python-list" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u5143\u7EC4", icon: "yongyan", link: "P02-1-Python-Starter-Journey/06-python-tuple" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E09", icon: "yongyan", link: "P02-2-basequestion/q3" },
            { text: "\u7B2C\u56DB\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer3" }
          ]
        },
        {
          text: "\u7B2C\u56DB\u7AE0 \u6570\u636E\u7C7B\u578B\uFF08\u4E0B\uFF09",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u5B57\u5178", icon: "yongyan", link: "P02-1-Python-Starter-Journey/07-python-dict" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u96C6\u5408", icon: "yongyan", link: "P02-1-Python-Starter-Journey/08-python-set" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u56DB", icon: "yongyan", link: "P02-2-basequestion/q4" },
            { text: "\u7B2C\u56DB\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer4" }
          ]
        },
        {
          text: "\u7B2C\u4E94\u7AE0 if \u6761\u4EF6\u5224\u65AD",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u5E03\u5C14\u8868\u8FBE\u5F0F", icon: "yongyan", link: "P02-1-Python-Starter-Journey/09-python-bool" },
            { text: "\u7B2C\u4E8C\u8282\u4E28if \u6761\u4EF6\u5224\u65AD", icon: "yongyan", link: "P02-1-Python-Starter-Journey/10-python-if" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E94", icon: "yongyan", link: "P02-2-basequestion/q5" },
            { text: "\u7B2C\u56DB\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer5" }
          ]
        },
        {
          text: "\u7B2C\u516D\u7AE0 while \u5FAA\u73AF",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28while \u5FAA\u73AF", icon: "yongyan", link: "P02-1-Python-Starter-Journey/11-python-while" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u516D", icon: "yongyan", link: "P02-2-basequestion/q6" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer6" }
          ]
        },
        {
          text: "\u7B2C\u4E03\u7AE0 for \u5FAA\u73AF",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28for \u5FAA\u73AF", icon: "yongyan", link: "P02-1-Python-Starter-Journey/12-python-for" },
            { text: "\u4F5C\u4E1A\u4E8C\u4E28\u8FD0\u52BF\u9884\u6D4B\u8F6F\u4EF6", icon: "yongyan", link: "P02-2-basequestion/hw2" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E03", icon: "yongyan", link: "P02-2-basequestion/q7" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer7" }
          ]
        },
        {
          text: "\u7B2C\u516B\u7AE0 \u51FD\u6570",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u51FD\u6570", icon: "yongyan", link: "P02-1-Python-Starter-Journey/13-function" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u516B", icon: "yongyan", link: "P02-2-basequestion/q8" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer8" }
          ]
        },
        {
          text: "\u7B2C\u4E5D\u7AE0 \u7C7B",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u9762\u5411\u5BF9\u8C61", icon: "yongyan", link: "P02-1-Python-Starter-Journey/14-class" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u7AE0\u8282\u6D4B\u8BD5\u4E5D", icon: "yongyan", link: "P02-2-basequestion/q9" },
            { text: "\u7B2C\u4E09\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer9" },
            { text: "\u9879\u76EE\u4F5C\u4E1A\u4E28\u5BF9\u8BDD\u5F0F\u5BF9\u6218\u6E38\u620F\u8BBE\u8BA1", icon: "yongyan", link: "P02-2-basequestion/hw_word_game" }
          ]
        },
        {
          text: "\u7B2C\u5341\u7AE0 \u6587\u4EF6\u64CD\u4F5C",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u6587\u4EF6\u64CD\u4F5C", icon: "yongyan", link: "P02-1-Python-Starter-Journey/15-python-file-operation" }
          ]
        },
        {
          text: "\u7B2C\u5341\u4E00\u7AE0 \u9519\u8BEF\u4E0E\u5F02\u5E38",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u9519\u8BEF\u4E0E\u5F02\u5E38", icon: "yongyan", link: "P02-1-Python-Starter-Journey/16-python3-errors-and-exceptions" }
          ]
        },
        {
          text: "\u7B2C\u5341*\u7AE0 \u7ED3\u4E1A\u6D4B\u8BD5",
          icon: "python",
          collapsible: true,
          children: [
            { text: "\u7B2C\u4E00\u8282\u4E28\u7ED3\u4E1A\u6D4B\u8BD5", icon: "yongyan", link: "P02-2-basequestion/q10" },
            { text: "\u7B2C\u4E8C\u8282\u4E28\u7B54\u6848", icon: "answer_font", link: "P02-2-basequestion/answer10" }
          ]
        },
        {
          text: "Other",
          icon: "python",
          collapsible: true,
          children: [
            "P02-1-Python-Starter-Journey/00-TODO-LIST",
            "P02-1-Python-Starter-Journey/All",
            "P02-1-Python-Starter-Journey/Practice"
          ]
        }
      ]
    },
    {
      text: "\u5377\u4E09\uFF1AAssignment",
      icon: "assignment",
      prefix: "P03-Assignment/",
      collapsible: true,
      children: "structure"
      // [
      // 	"Assignment1",
      // 	"Assignment1-Solution",
      // 	"Assignment2",
      // 	"Assignment2-Solution",
      // 	"Assignment3",
      // 	"01-File-IO-and-CSV-Files",
      // ]
    },
    {
      text: "\u5377\u56DB\uFF1AProjects",
      icon: "shequ-jihuo",
      prefix: "P04-Projects/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u4E94\uFF1AAI\u5927\u6A21\u578B\u521D\u4F53\u9A8C",
      icon: "rengongzhineng",
      prefix: "P05-AI-large-model/",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u516D\uFF1A\u6570\u636E\u5206\u6790",
      icon: "zhuzhuangtu",
      collapsible: true,
      prefix: "P06-data_analysis/",
      children: [
        {
          text: "P01\uFF1A\u6570\u636E\u601D\u7EF4\u8BFE\u300C\u524D\u7F6E\u300D",
          icon: "laboratorylab",
          collapsible: true,
          prefix: "P06-0-0-Basic-Data-Thinking-Course/",
          children: "structure"
        },
        {
          text: "P02\uFF1A\u6570\u636E\u601D\u7EF4\u8BFE\u300C\u6838\u5FC3\u300D",
          icon: "laboratorylab",
          collapsible: true,
          prefix: "P06-1-data-analysis-thinking-course/",
          children: "structure"
        },
        {
          text: "P03\uFF1A\u6570\u636E\u5206\u6790\u4F53\u7CFB\u8BFE",
          // text: "阶段一：快速掌握数据分析必备技能",
          icon: "laboratorylab",
          // laboratorylab // yongyan
          collapsible: true,
          children: [
            {
              text: "\u7B2C1\u5468 \u8D70\u8FDB\u6570\u636E\u5206\u6790",
              collapsible: true,
              icon: "laboratorylab",
              children: [
                "Week1",
                "Week4"
              ]
            }
          ]
        }
      ]
    },
    {
      // text: "卷六：如何成为有效学习的高手",
      text: "\u5377\u4E03:\u6210\u4E3A\u6709\u6548\u5B66\u4E60\u7684\u9AD8\u624B",
      prefix: "P07-How-to-become-an-expert-in-effective-learning/",
      icon: "zhuanjiaketang-jihuo",
      collapsible: true,
      children: "structure"
    },
    {
      // text: "卷七：有效训练你的研究能力",
      text: "\u5377\u516B:\u6709\u6548\u8BAD\u7EC3\u7814\u7A76\u80FD\u529B",
      prefix: "P08-research-ability/",
      icon: "siwei1",
      // zhuanjiaketang-jihuo
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u4E5D\uFF1AFQA",
      prefix: "P09-FAQ/",
      icon: "fankuifaqs",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\uFF1AShare",
      prefix: "P10-Share/",
      icon: "share1",
      collapsible: true,
      children: [
        {
          text: "\u77E5\u8BC6\u5361\u7247\xB7\u7B14\u8BB0",
          icon: "card",
          // collapsible: true,
          prefix: "Card/",
          children: [
            { text: "01-\u53D8\u91CF\u77E5\u8BC6\u5361\u7247", icon: "yongyan", link: "01-Variable" }
          ]
        },
        {
          text: "\u6709\u8DA3\u7684\u9879\u76EE",
          icon: "youqu",
          // collapsible: true,
          prefix: "Interesting-project/",
          children: "structure"
        },
        {
          text: "\u60F3\u6CD5\u{1F4A1}",
          icon: "idea",
          prefix: "Idea/",
          children: "structure"
        }
      ]
    },
    {
      text: "\u5377\u5341\u4E00\uFF1ARegex \u5B66\u4E60",
      prefix: "P11-regex-intro-course/",
      icon: "regex",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\u4E8C\uFF1A\u5927\u6A21\u578B\u5B89\u5168\u5B9E\u6218\u8BFE",
      prefix: "P12-llm-security-hands-on-course/",
      icon: "anquan",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\u4E09\uFF1A\u4E2A\u4EBA\u535A\u5BA2\u642D\u5EFA",
      prefix: "P13-personal-blog-building/",
      icon: "web",
      collapsible: true,
      children: [
        { text: "01-Waline \u8BC4\u8BBA\u642D\u5EFA", icon: "blog", link: "01-waline-server" },
        { text: "02-\u642D\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684\u5E73\u53F0", icon: "blog", link: "02-Blog-build" }
      ]
    },
    {
      text: "\u5377\u5341\u56DB\uFF1AClaude Code \u5DE5\u7A0B\u5316\u5B9E\u6218",
      prefix: "P14-claude-code-engineering-practice/",
      icon: "claude1",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\u4E94\uFF1AOpenClaw \u9879\u76EE\u5B9E\u6218",
      prefix: "P15-OpenClaw/",
      icon: "longxia2",
      collapsible: true,
      children: [
        {
          text: "OpenClaw \u7CFB\u7EDF\u5B9E\u6218",
          icon: "longxia2",
          collapsible: true,
          prefix: "openclaw-core-principles-practice/",
          children: [
            ""
          ]
        },
        { text: "01-OpenClaw \u5B89\u88C5", icon: "longxia2", link: "01-install-step" },
        { text: "02-OpenClaw \u662F\u4EC0\u4E48", icon: "longxia2", link: "01-openclaw-what-is" },
        { text: "03-OpenClaw WSL", icon: "longxia2", link: "02-openclaw-wsl-install" },
        { text: "04-OpenClaw \u90E8\u7F72", icon: "longxia2", link: "03-OpenClaw-step-up" },
        { text: "05-\u73A9\u8F6C Skills", icon: "longxia2", link: "04-OpenClaw-Skills" },
        { text: "06-FAQ", icon: "longxia2", link: "05-OpenClaw-FAQ" },
        { text: "07-OpenClaw \u6848\u4F8B", icon: "longxia2", link: "06-openclaw-case-studies" },
        { text: "08-\u98DE\u4E66\u63D2\u4EF6\u6559\u7A0B", icon: "longxia2", link: "07-openclaw-lark-tools" },
        { text: "09-OpenClaw \u5236\u4F5C\u5BA2\u670D", icon: "longxia2", link: "08-openclaw-ecommerce-customer-service" },
        { text: "10-OpenClaw\u53EF\u4EE5\u8BA9\u5927\u5382\u6536\u624B\u4E48\uFF1F", icon: "longxia2", link: "09-openclaw-update-shell-crisis" },
        { text: "11-OpenClaw \u5BF9\u63A5\u9489\u9489\u300C\u5F85\u5B9A\u300D", icon: "longxia2", link: "10-openclaw-dingtalk-integration" },
        { text: "12-\u7ED9\u51E0\u4E2A\u4ED8\u8D39\u7C89\u4E1D\u5B89\u88C5 OpenClaw \u540E\u7684\u4E00\u4E9B\u5FC3\u5F97", icon: "longxia2", link: "11-OpenClaw-Think" },
        { text: "13-\u4E3A\u4EC0\u4E48\u9F99\u867E\u4E0D\u6210\u719F\u4ECD\u8981\u5148\u7528\u8D77\u6765\uFF1F", icon: "longxia2", link: "12-why-use-lobster-before-it-is-mature" },
        { text: "14-\u667A\u725B API \u9080\u8BF7\u6D4B\u8BC4", icon: "longxia2", link: "13-niuapi-test" }
      ]
    },
    {
      text: "\u5377\u5341\u516D\uFF1AAI\u7ED8\u753B\u5B9E\u6218",
      prefix: "P16-ai-drawing-core-tech-and-practice/",
      icon: "AIhuatu1",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\u4E03\uFF1A\u96F6\u95E8\u69DB AI \u505A\u5F71\u7BC7",
      prefix: "P17-ai-course-resources/",
      icon: "workingDirectory",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u5377\u5341\u516B\uFF1ACodex \u5B9E\u6218",
      prefix: "P18-Codex/",
      icon: "damoxing",
      collapsible: true,
      children: "structure"
    },
    {
      text: "\u4E13\u9879\u7EC3\u4E60",
      prefix: "P02-2-basequestion/",
      icon: "a-jibijilianxibianji",
      collapsible: true,
      children: [
        "special_variabl",
        "special_yunsuanfu",
        "special_for",
        "special_while",
        "special_list",
        "special_function",
        "special_class"
      ]
    },
    {
      text: "\u6280\u5DE7\u70B9\u62E8",
      prefix: "P02-2-basequestion/",
      icon: "idea",
      collapsible: true,
      children: [
        "skill_pycharm1",
        "skill_ipython1"
      ]
    },
    {
      text: "\u8865\u5145\u77E5\u8BC6",
      prefix: "P02-2-basequestion/",
      icon: "siwei1",
      collapsible: true,
      children: [
        "requirements",
        "radix_point",
        "format"
      ]
    },
    {
      text: "CS-PY101 Lab",
      icon: "a-jibijilianxibianji",
      collapsible: true,
      prefix: "Lab",
      children: [
        { text: "CS-PY101 Lab 1", icon: "employee-rank", link: "Lab01" },
        { text: "CS-PY101 Lab 2", icon: "employee-rank", link: "Lab02" },
        { text: "CS-PY101 Lab 3", icon: "employee-rank", link: "Lab03" }
      ]
    },
    {
      text: "CS_PY101 Lab Solution",
      icon: "laboratorylab",
      prefix: "Lab-Solution",
      collapsible: true,
      children: [
        "Lab01-Solution",
        "Lab02-Solution"
      ]
    },
    {
      text: "Python_tutorial",
      icon: "python",
      prefix: "Python_tutorial/",
      collapsible: true,
      children: [
        // "",
        {
          text: "Python \u57FA\u7840",
          collapsible: true,
          children: [
            ""
          ]
        },
        {
          text: "Python \u901A\u7528\u6559\u7A0B",
          collapsible: true,
          children: [
            {
              text: "\u7B2C 1 \u7AE0 \u5165\u95E8\u51C6\u5907",
              collapsible: true,
              children: [
                "mk_py01",
                "mk_py02",
                "mk_py03",
                "mk_py04"
              ]
            },
            {
              text: "\u7B2C 2 \u7AE0 \u901A\u7528\u8BED\u8A00\u7279\u6027",
              collapsible: true,
              children: [
                "mk_py05",
                "mk_py06"
              ]
            }
          ]
        }
      ]
    },
    {
      text: "Python \u5B9E\u6218:\u4ECE 0 \u5230 1 \u642D\u5EFA\u76F4\u64AD\u89C6\u9891\u5E73\u53F0",
      icon: "flask",
      collapsible: true,
      prefix: "Python-in-Action-Building-a-Live-Streaming-Video-Platform-from-Scratch/",
      children: [
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08"
      ]
    }
  ],
  "/column/education/": [
    "01",
    "02"
  ],
  "/Yuechuangs-Family-EducationHandbook/": "structure",
  "/1v1/93-LiquidLeon/": "structure",
  "/1v1/47-qiuzhen/": [
    {
      text: "Python \u51B2\u523A",
      collapsible: true,
      icon: "python",
      children: [
        "docs",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07-Question1",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17"
      ]
    },
    {
      text: "\u535A\u5BA2\u642D\u5EFA",
      icon: "web1",
      prefix: "Blog/",
      children: [
        "18-web-log"
      ]
    }
  ],
  "/column/\u6CBB\u6108\u5FC3\u7406\u5B66/": "structure",
  "/column/mianshi/": [
    {
      text: "\u7A0B\u5E8F\u5458\u7EC3\u7EA7\u653B\u7565",
      icon: "employee-rank",
      children: [
        "05"
      ]
    },
    {
      text: "\u9762\u8BD5\u653B\u7565",
      icon: "shipinmianshi",
      children: [
        "01",
        "02",
        "03",
        "04"
      ]
    }
  ],
  "/column/Programming-algorithm-synchronization/": [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17"
  ],
  "/column/playback/": [
    {
      text: "2022\u5E74",
      collapsible: true,
      children: [
        "",
        "01-Tommy",
        "02-LKW",
        "03-20220610"
      ]
    }
  ],
  "/column/javascript-tutorial": [
    "",
    "preface",
    {
      text: "1. \u5165\u95E8\u7BC7",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "basic/introduction",
        "basic/history",
        "basic/grammar"
      ]
    },
    {
      text: "2. \u6570\u636E\u7C7B\u578B",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "types/general",
        "types/null-undefined-boolean",
        "types/number",
        "types/string",
        "types/object",
        "types/function",
        "types/array"
      ]
    },
    {
      text: "3. \u8FD0\u7B97\u7B26",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "operators/arithmetic",
        "operators/comparison",
        "operators/boolean",
        "operators/bit",
        "operators/priority"
      ]
    },
    {
      text: "4. \u8BED\u6CD5\u4E13\u9898",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "features/conversion",
        "features/error",
        "features/style",
        "features/console"
      ]
    },
    {
      text: "5. \u6807\u51C6\u5E93",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "stdlib/object",
        "stdlib/attributes",
        "stdlib/array",
        "stdlib/wrapper",
        "stdlib/boolean",
        "stdlib/number",
        "stdlib/string",
        "stdlib/math",
        "stdlib/date",
        "stdlib/regexp",
        "stdlib/json"
      ]
    },
    {
      text: "6. \u9762\u5411\u5BF9\u8C61\u7F16\u7A0B",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "oop/new",
        "oop/this",
        "oop/prototype",
        "oop/object",
        "oop/strict"
      ]
    },
    {
      text: "7. \u5F02\u6B65\u64CD\u4F5C",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "async/general",
        "async/timer",
        "async/promise"
      ]
    },
    {
      text: "8. DOM",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "dom/general",
        "dom/node",
        "dom/nodelist",
        "dom/parentnode",
        "dom/document",
        "dom/element",
        "dom/attributes",
        "dom/text",
        "dom/css",
        "dom/mutationobserver"
      ]
    },
    {
      text: "9. \u4E8B\u4EF6",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "events/eventtarget",
        "events/model",
        "events/event",
        "events/mouse",
        "events/keyboard",
        "events/progress",
        "events/form",
        "events/touch",
        "events/drag",
        "events/common",
        "events/globaleventhandlers"
      ]
    },
    {
      text: "10. \u6D4F\u89C8\u5668\u6A21\u578B",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "bom/engine",
        "bom/window",
        "bom/navigator",
        "bom/cookie",
        "bom/xmlhttprequest",
        "bom/same-origin",
        "bom/cors",
        "bom/storage",
        "bom/history",
        "bom/location",
        "bom/arraybuffer",
        "bom/file",
        "bom/form",
        "bom/indexeddb",
        "bom/webworker"
      ]
    },
    {
      text: "11. \u9644\u5F55\uFF1A\u7F51\u9875\u5143\u7D20\u63A5\u53E3",
      icon: "24gl-folderOpen",
      collapsible: true,
      children: [
        "elements/a",
        "elements/image",
        "elements/form",
        "elements/input",
        "elements/button",
        "elements/option",
        "elements/video"
      ]
    }
  ],
  "/column/html-tutorial": [
    "",
    "intro",
    "url",
    "attribute",
    "encode",
    "semantic",
    "text",
    "list",
    "image",
    "link",
    "multimedia",
    "iframe",
    "table",
    "form",
    "elements",
    "mobile"
  ],
  "/1v1/89-liuyue/": "structure",
  "/column/Python-thinking/": [
    "",
    {
      text: "\u5F00\u7BC7\u8BCD",
      icon: "docs",
      prefix: "thinking/",
      collapsible: true,
      children: [
        "01"
      ]
    },
    {
      text: "Pygame",
      icon: "Game",
      collapsible: true,
      prefix: "Pygame",
      children: [
        "01-Pygame-just-met",
        "02-Pgame-picture-processing",
        "03-pygame-keyboard-and-mouse",
        "04-pygame-music-class"
      ]
    },
    {
      text: "Python tutorial",
      icon: "python",
      collapsible: true,
      prefix: "Python-tutorial",
      children: [
        "00-Python-introduction",
        "01-Python-Variable",
        "02-Preliminary-DataType"
      ]
    }
  ],
  "/company/": [
    {
      text: "Company",
      icon: "gongsi",
      children: [
        "conference01",
        "conference02"
      ]
    },
    {
      text: "WebSite",
      icon: "web",
      prefix: "WebSite",
      children: [
        "Data"
      ]
    }
  ],
  "/column/crawler/": [
    "",
    {
      text: "\u5F00\u7BC7\u8BCD",
      collapsible: true,
      icon: "Spider",
      children: [
        { text: "01-Python \u73AF\u5883\u642D\u5EFA", icon: "debug", link: "s1_01" },
        // "s1_01",
        { text: "02-\u4E3A\u4EC0\u4E48\u505A\uFF1F", icon: "debug", link: "s1_02" },
        { text: "03-\u60A6\u521B\u968F\u7B14", icon: "debug", link: "s1_03" },
        { text: "04-\u5982\u4F55\u88AB\u52A8\u8FC7\u4E07\u6536\u5165", icon: "debug", link: "s1_04" },
        { text: "04-\u722C\u866B\u6280\u672F\u6210\u5C31\u4E86\u8FD9\u4E9B\u5546\u4E1A\u516C\u53F8\u7684", icon: "debug", link: "s1_05" }
      ]
    },
    {
      text: "\u6A21\u5757\u4E00\uFF1A\u722C\u866B\u57FA\u7840\u539F\u7406",
      collapsible: true,
      icon: "Spider",
      children: [
        "s2_01",
        "s2_02",
        "s2_03",
        "s2_04",
        "s2_05",
        "s2_06",
        "s2_07",
        "s2_08",
        "s2_09",
        "s2_10",
        "s2_11",
        "s2_12"
      ]
    },
    {
      text: "\u6A21\u5757\u4E8C\uFF1A\u722C\u866B\u57FA\u672C\u5E93\u7684\u4F7F\u7528",
      icon: "Spider",
      collapsible: true,
      children: [
        "s3_01",
        "s3_02",
        "s3_03",
        "s3_04",
        "s3_05",
        "s3_06",
        "s3_07",
        "s3_08",
        "s3_09",
        "s3_10"
      ]
    },
    {
      text: "\u6A21\u5757\u4E09\uFF1A\u591A\u79CD\u5F62\u5F0F\u7684\u722C\u53D6\u65B9\u6CD5",
      icon: "Spider",
      collapsible: true,
      children: [
        "s4_01",
        "s4_02",
        "s4_06"
      ]
    },
    {
      text: "\u8865\u5145",
      icon: "Spider",
      collapsible: true,
      children: [
        { text: "01-Referer \u6848\u4F8B", icon: "debug", link: "replenish01" },
        { text: "02-\u66F4\u667A\u80FD\u7684\u5EF6\u8FDF\u63D2\u4EF6", icon: "debug", link: "replenish02" },
        { text: "03-\u4ECE\u8F93\u5165 url \u5230\u9875\u9762\u5C55\u73B0\u53D1\u751F\u4E86\u4EC0\u4E48\uFF1F", icon: "debug", link: "replenish03" },
        { text: "04-Session \u4E0E Cookies", icon: "debug", link: "replenish04" },
        { text: "05-\u722C\u866B\u5206\u6790\u5229\u5668:\u8C37\u6B4CChrome F12\u6293\u5305\u5206\u6790", icon: "debug", link: "replenish05" }
      ]
    },
    {
      text: "\u6742\u8C08",
      icon: "Spider",
      collapsible: true,
      children: [
        { text: "01-\u4EC0\u4E48\u662F\u7F51\u7EDC\u722C\u866B", icon: "debug", link: "supplement/what-is-web-crawler" },
        { text: "02-\u5FC5\u77E5\u5FC5\u4F1A\u638C\u63E1HTTP\u57FA\u672C\u539F\u7406", icon: "debug", link: "supplement/\u5FC5\u77E5\u5FC5\u4F1A\u638C\u63E1HTTP\u57FA\u672C\u539F\u7406" },
        { text: "03-\u4E3A\u4EC0\u4E48\u5199\u7F51\u7EDC\u722C\u866B\u5929\u7136\u5C31\u662F\u62E9Python\u800C\u7528", icon: "debug", link: "supplement/why-is-python-for-crawler" },
        { text: "04-\u5199\u7F51\u7EDC\u722C\u866B\u7A0B\u5E8F\u7684\u4E09\u79CD\u96BE\u5EA6", icon: "debug", link: "supplement/three-state-of-crawler" },
        { text: "05-\u5FEB\u6536\u4E0B\u8FD9\u679A Scrapy Requests \u53E3\u5473\u7684\u722C\u866B\u201C\u56DE\u9B42\u4E39\u201D", icon: "debug", link: "supplement/Crawler-Speed-101" },
        { text: "06-\u6B63\u5219\u8868\u8FBE\u5F0F\u8BE6\u89E3", icon: "debug", link: "supplement/regex" },
        { text: "07-pyquery \u7684\u5B89\u88C5", icon: "debug", link: "supplement/pyquery-install" },
        { text: "08-lxml \u7684\u5B89\u88C5", icon: "debug", link: "supplement/lxml-install" },
        { text: "09-MongoDB \u7684\u5B89\u88C5", icon: "debug", link: "supplement/mongodb-install" },
        { text: "10-\u591A\u4E2A\u7AD9\u70B9\u540C\u65F6\u6293\u53D6\uFF01\u600E\u4E48\u505A\u5230\u7684\uFF1F", icon: "debug", link: "supplement/many-websites" }
      ]
    },
    {
      text: "\u5F02\u6B65\u65B0\u95FB\u722C\u866B",
      icon: "Spider",
      collapsible: true,
      children: [
        "Project1-news/01.md",
        "Project1-news/02.md",
        "Project1-news/03.md"
      ]
    },
    {
      text: "\u722C\u866B800\u4F8B",
      icon: "Spider",
      collapsible: true,
      prefix: "Practical-operation",
      children: [
        {
          text: "\u{1F4D9}requests\u5E93+re\u6A21\u5757",
          icon: "",
          children: [
            "01-10-lines-of-code-set-2000-pictures-of-beautiful-women",
            { text: "\u53D1\u73B060%\u5973\u88C5\u5927\u4F6C\u6E38\u8D70\u5728cosplay\u9886\u57DF", icon: "Spider", link: "02-Through-Python-crawler-we-found-that-60-of-womens-bigwigs-roam-the-cosplay-field" },
            { text: "Python \u5343\u732B\u56FE\uFF0C\u7B80\u5355\u6280\u672F\u6EE1\u8DB3\u4F60\u7684\u6536\u96C6\u63A7", icon: "Spider", link: "03-Python-Thousand-Cats-Chart-a-simple-technique-to-satisfy-your-collection-control" },
            { text: "\u90A3\u7BC7\u5343\u732B\u56FE\u722C\u866B\u7ADF\u88AB\u53CD\u722C\u4E86,\u590D\u76D8\u89E3\u51B3", icon: "Spider", link: "04-That-a-thousand-cat-map-crawler-was-even-anti-crawl-todays-review-to-solve-a-little-Python-crawler-120-examples" }
          ]
        }
      ]
    }
  ]
});

// docs/.vuepress/theme.ts
var theme = hopeTheme({
  // rtl: true,
  // hotReload: true,
  // fullscreen: true,
  toc: {
    levels: [1, 6]
  },
  navbarLayout: {
    start: ["Brand"],
    center: ["Links"],
    end: ["Language", "Repo", "Outlook", "Search"]
  },
  hostname: "https://bornforthis.cn/",
  author: {
    name: "AndersonHJB",
    url: "https://bornforthis.cn/",
    email: "aiyuechuang@gmail.com"
  },
  logo: "/aiyc.svg",
  // navTitle: "AI悦创-Python一对一辅导",
  // navTitle: false,
  changelog: false,
  editLink: false,
  lastUpdated: false,
  contributors: false,
  docsBranch: "main",
  docsDir: "docs",
  docsRepo: "AndersonHJB/bornforthis.cn",
  repo: "AndersonHJB/bornforthis.cn",
  darkmode: "switch",
  displayFooter: true,
  // copyright: 'Copyright©2023 Bornforthis',
  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime", "PageView", "Word"],
  blog: {
    name: "AI\u60A6\u521B",
    avatar: "/aiyc.jpg",
    description: "\u4E00\u4E2A\u601D\u8003\u8005,\u7F16\u7A0B\u79C1\u6559 1v1",
    intro: "/intro",
    articlePerPage: 18,
    medias: {
      Email: "mailto:info@bornforthis@bornforthis.cn",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      Gmail: "mailto:aiyuechuang@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
      Instagram: "https://www.instagram.com/coding1v1/",
      Wechat: "/wechat.JPG",
      MrJiabao: {
        link: "https://bornforthis.cn",
        icon: '<svg width="100%" height="100%" viewBox="0 0 1000 1000" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xml:space="preserve" xmlns:serif="http://www.serif.com/" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"><g id="Layer-2" serif:id="Layer 2" transform="matrix(1.4026,0,0,1.4026,-203.526,-204.224)"><g transform="matrix(0,-1,-1,0,501.589,155.604)"><path d="M-346.482,-346.482C-537.84,-346.482 -692.964,-191.356 -692.964,0C-692.964,191.356 -537.84,346.482 -346.482,346.482C-155.125,346.482 0,191.356 0,0C0,-191.356 -155.125,-346.482 -346.482,-346.482" style="fill:rgb(255,248,0);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,501.589,838.569)"><path d="M0,-672.965C-185.537,-672.965 -336.482,-522.02 -336.482,-336.483C-336.482,-150.945 -185.537,0 0,0C185.537,0 336.482,-150.945 336.482,-336.483C336.482,-522.02 185.537,-672.965 0,-672.965M0,20C-48.121,20 -94.807,10.573 -138.762,-8.019C-181.213,-25.974 -219.335,-51.676 -252.071,-84.411C-284.807,-117.147 -310.509,-155.27 -328.464,-197.72C-347.056,-241.676 -356.482,-288.362 -356.482,-336.483C-356.482,-384.603 -347.056,-431.289 -328.464,-475.245C-310.509,-517.695 -284.807,-555.818 -252.071,-588.554C-219.335,-621.289 -181.213,-646.991 -138.762,-664.947C-94.807,-683.538 -48.121,-692.965 0,-692.965C48.12,-692.965 94.807,-683.538 138.762,-664.947C181.213,-646.991 219.335,-621.289 252.071,-588.554C284.807,-555.818 310.509,-517.695 328.464,-475.245C347.056,-431.289 356.482,-384.603 356.482,-336.483C356.482,-288.362 347.056,-241.676 328.464,-197.72C310.509,-155.27 284.807,-117.147 252.071,-84.411C219.335,-51.676 181.213,-25.974 138.762,-8.019C94.807,10.573 48.12,20 0,20" style="fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,367.718,410.379)"><path d="M0,-36.841L37.819,-36.841L33.188,0.769L-4.623,0.844L0,-36.841ZM-40.716,68.511L-12.924,68.511L-8.008,28.438L29.781,28.438L24.886,68.187L53.001,68.187L57.822,28.438L92.427,28.438L95.659,0.646L61.184,0.714L65.738,-36.841L101.153,-36.841L104.384,-64.633L69.1,-64.564L74.007,-105.029L46.215,-105.029L41.226,-64.509L3.385,-64.434L8.405,-105.352L-19.71,-105.352L-24.661,-64.379L-59.783,-64.31L-63.338,-36.841L-27.988,-36.841L-32.547,0.898L-68.509,0.969L-72.063,28.438L-35.875,28.438L-40.716,68.511Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,711.06,323.151)"><path d="M0,154.223L-2.723,119.566L-111.149,85.404L-9.654,35.152L-12.625,0L-143.825,68.571L-140.607,108.179L0,154.223Z" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g><g transform="matrix(1,0,0,1,659.86,639.05)"><path d="M0,-10.069C-4.68,-0.523 -14.224,5.839 -27.699,5.278C-41.175,4.716 -106.493,-4.08 -124.461,-4.641C-142.429,-5.203 -151.6,12.203 -163.952,25.679C-173.123,2.846 -180.609,-7.823 -192.775,-11.566C-204.94,-15.309 -266.328,-20.549 -283.36,-22.608C-300.392,-24.667 -306.755,-26.351 -312.744,-38.517C-318.733,-50.683 -315.177,-70.521 -315.177,-70.521L-349.24,-74.452C-349.24,-74.452 -351.861,-60.415 -351.486,-38.33C-351.112,-16.245 -348.117,-1.834 -329.775,6.402C-311.434,14.637 -258.092,20.064 -224.965,22.497C-191.837,24.931 -187.533,29.61 -184.351,37.283C-181.169,44.955 -184.675,60.199 -184.675,60.199C-184.675,60.199 -177.436,61.216 -150.292,64.383C-149.274,46.513 -147.351,41.989 -141.131,36.899C-134.911,31.809 -124.505,33.618 -93.063,36.897C-61.62,40.176 -37.417,46.057 -10.159,45.152C17.099,44.246 26.485,27.846 32.479,10.202C38.474,-7.441 39.154,-31.647 39.154,-31.647L5.45,-35.266C5.45,-35.266 4.68,-19.615 0,-10.069" style="fill:rgb(5,5,5);fill-rule:nonzero;"/></g></g></svg>'
      }
    }
  },
  footer: '\u957F\u671F\u62DB\u6536\u7F16\u7A0B\u4E00\u5BF9\u4E00\u5B66\u5458!\u5FAE\u4FE1:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">\u95FDICP\u590719021486\u53F7-6</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35030502000172" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/beian.png" style="float:left;"/>\u95FD\u516C\u7F51\u5B89\u5907 35030502000172\u53F7</a>',
  locales: {
    "/": {
      // navbar
      navbar: zhNavbar,
      // sidebar
      sidebar: zhSidebar,
      changelog: false,
      editLink: false,
      lastUpdated: false,
      contributors: false,
      footer: '\u957F\u671F\u62DB\u6536\u7F16\u7A0B\u4E00\u5BF9\u4E00\u5B66\u5458!\u5FAE\u4FE1:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">\u95FDICP\u590719021486\u53F7-6</a><a target="_blank" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=35030502000172" style="display:inline-block;text-decoration:none;height:20px;line-height:20px;"><img src="/beian.png" style="float:left;"/>\u95FD\u516C\u7F51\u5B89\u5907 35030502000172\u53F7</a>',
      displayFooter: true
    }
  },
  encrypt: {
    config: {
      // "/column/py/basequestion/hw_word_game.html": {
      //     hint: "Password: 提示",
      //     password: "aiyc",
      // },
      "/column/Python-Programming-Course/P15-OpenClaw/openclaw-core-principles-practice/": ["aiyc", "oc"],
      "/column/Python-Programming-Course/P17-ai-course-resources/": ["aiyc"],
      "/column/Python-Programming-Course/python-exam-crash-course/": ["aiyc", "liang-20052016"],
      "/VIP": "aiyccc",
      // "/SOC": "aiyccc",
      "/intro": "aiyccc",
      "/Books/05-Liaising-with-the-publisher/": "zl",
      "/RP": "RPRP",
      "/Vpn-clash-win-mac/": "titi2025",
      "/column/Python-Programming-Course/P02-1-Python-Starter-Journey/": ["aiyc", "tcf"],
      "/column/Python-Programming-Course/P01-Programming-thinking/": ["aiyc", "tcf"],
      // "/column/Python-Programming-Course/P06-data_analysis/": ["aiyc", "tcf"],
      "/column/Python-Programming-Course/P03-Assignment/Assignment1-Solution.html": ["aiyc"],
      "/column/Python-Programming-Course/P03-Assignment/Assignment2-Solution.html": ["aiyc"],
      "/column/Python-Programming-Course/P06-data_analysis/": "aiyc",
      "/letter/2024/12-gift": ["aiyc", "hr", "hjr", "love", "true"],
      "/letter/2024/importance.html": "aiyc",
      "/letter/2024/one-is-all": ["aiyc", "kjz", "zyq", "tcf", "miss"],
      "/letter/book-write/": ["aiyc", "tcf"],
      "/letter/2023/05": "aiyccc",
      "/1v1/02-yuebao/": ["xsxsxsxsxs", "cscs"],
      // "/Vpn-clash-win-mac/": ["tztz", "aiyc", "neibu", "dl"],
      "/vpn.html": ["tztz", "aiyc"],
      "/Yuechuangs-Family-EducationHandbook/Private/": ["aiyc", "hjrb", "rb"],
      "/company/": ["aiyc", "company", "kai"],
      "/password": "aiycpw123",
      "/letter/2023/like": ["ttt2", "like"],
      "/column/Probability-theory/": ["aiyc", "gll"],
      "/letter/2023/heart": ["ttt1", "heart"],
      "/letter/life/": ["aiyc", "hr", "love"],
      "/letter/life/Wedding-photos": ["aiyc", "hr", "love", "yj"],
      "/letter/life/change": ["aiyc", "hr", "love", "yj"],
      "/letter/life/mv-change": ["aiyc", "hr", "love", "qy"],
      "/column/Programmingthinking/": ["aiyc"],
      "/1v1/18-Jason/01": ["aiyc", "jason"],
      "/column/An-introductory-programming-class-that-anyone-can-learn/detail/": ["123123", "aiyc"]
    }
  },
  markdown: {
    figure: true,
    imgLazyload: true,
    imgMark: true,
    imgSize: true,
    mark: true,
    codeTabs: true,
    tabs: true,
    math: true,
    hint: true,
    alert: true,
    chartjs: false,
    echarts: false,
    mermaid: true,
    vuePlayground: false,
    sub: true,
    spoiler: true,
    sup: true,
    tasklist: true,
    include: true,
    attrs: false,
    footnote: true,
    align: true,
    flowchart: false,
    gfm: true,
    preview: true,
    stylize: [
      {
        matcher: "Recommended",
        replacer: ({ tag }) => {
          if (tag === "em")
            return {
              tag: "Badge",
              attrs: { type: "tip" },
              content: "Recommended"
            };
        }
      }
    ],
    highlighter: {
      type: "shiki",
      collapsedLines: 15,
      // lineNumbers: 1,
      notationDiff: true,
      // [!code --]
      notationFocus: true,
      // [!code focus:3]
      highlightLines: true,
      notationHighlight: true,
      notationWordHighlight: true,
      //   langs: ['sql', 'python', 'java', 'javascript', 'c', 'c#', 'c++', 'html', 'css',
      //     'bash', 'rust', 'php', 'r', 'cmd', 'yaml', 'markdown', 'http', 'cmake', 'matlab',
      //     'plsql', 'ini', "fortran-free-form", "fortran-fixed-form", 'go', 'vue', 'tex', 'text', 'csv', 'fish',
      //     'makefile', 'typescript',
      //   ],
      langAlias: {
        ["excel"]: "bash",
        ["url"]: "bash"
      }
      // theme: "monokai",
      //   // themes: {
      //   //   light: "monokai",
      //   //   dark: "one-dark-pro",
      //   // },
    },
    vPre: true
  },
  plugins: {
    icon: {
      prefix: "iconfont icon-",
      assets: [
        // "https://bornforthis.cn/icon/iconfont.css",
        "/icon/iconfont.css"
        // "//at.alicdn.com/t/c/font_3426793_89l82yqh1lh.css",
      ]
    },
    git: false,
    watermark: {
      enabled: true,
      watermarkOptions: {
        content: "AI\u60A6\u521B-Python\u4E00\u5BF9\u4E00\u8F85\u5BFC bornforthis.cn"
      }
    },
    notice: [
      {
        path: "/",
        title: "\u901A\u77E5",
        content: "\u5EFA\u8BAE\u5F00\u542F\uFF1A\u68AF\u5B50\u{1FA9C}(VPN)\u6765\u8BBF\u95EE\u672C\u7F51\u7AD9\uFF0C\u4F1A\u52A0\u901F\u56FE\u7247\u52A0\u8F7D\u901F\u5EA6\uFF01",
        showOnce: true,
        actions: [
          {
            text: "\u67E5\u770B",
            link: "/Notice.md",
            type: "primary"
          },
          {
            text: "Why Blog?",
            link: "/aboutblog.md",
            type: "default"
          }
          // {
          //   text: "Discord",
          //   link: "https://discord.gg/PwE4twnVmM",
          //   type: "default",
          // },
          // {
          //   text: "QQ客服",
          //   link: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
          //   type: "default",
          // },
          // {
          //   text: "Now",
          //   link: "/Now.md",
          //   type: "default",
          // },
        ]
      }
    ],
    // slimsearch: {
    //   hotKeys: [{ key: "k", ctrl: true }, { key: "/", ctrl: true }],
    //   // 你的选项
    //   indexContent: true,
    //   suggestion: true,
    //   queryHistoryCount: 5,
    //   resultHistoryCount: 5,
    //   sortStrategy: 'max',
    //   hotReload: false,
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     }
    //   }
    // },
    // slimsearch: true,
    // search: {
    //   maxSuggestions: 10,
    //   hotKeys: [],
    //   // 你的选项
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     }
    //   }
    // },
    docsearch: {
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "ACD1S100IT",
      apiKey: "409311158985cfee5c0a535e5998ddd2",
      indexName: "bornforthis",
      // placeholder: "搜索",
      locales: {
        "/": {
          placeholder: "\u641C\u7D22\u6587\u6863",
          // initialQuery: 'AI悦创·长期招收编程私教学员！微信:Jiabcdefh',
          maxResultsPerGroup: 10,
          translations: {
            button: {
              buttonText: "\u641C\u7D22\u6587\u6863",
              buttonAriaLabel: "\u641C\u7D22\u6587\u6863"
            },
            modal: {
              startScreen: {
                recentSearchesTitle: "\u641C\u7D22\u5386\u53F2",
                noRecentSearchesText: "\u6CA1\u6709\u641C\u7D22\u5386\u53F2",
                saveRecentSearchButtonTitle: "\u4FDD\u5B58\u81F3\u641C\u7D22\u5386\u53F2",
                removeRecentSearchButtonTitle: "\u4ECE\u641C\u7D22\u5386\u53F2\u4E2D\u79FB\u9664",
                favoriteSearchesTitle: "\u6536\u85CF",
                removeFavoriteSearchButtonTitle: "\u4ECE\u6536\u85CF\u4E2D\u79FB\u9664"
              },
              errorScreen: {
                titleText: "\u65E0\u6CD5\u83B7\u53D6\u7ED3\u679C",
                helpText: "\u4F60\u53EF\u80FD\u9700\u8981\u68C0\u67E5\u4F60\u7684\u7F51\u7EDC\u8FDE\u63A5"
              },
              footer: {
                selectText: "\u9009\u62E9",
                navigateText: "\u5207\u6362",
                closeText: "\u5173\u95ED"
              },
              noResultsScreen: {
                noResultsText: "\u65E0\u6CD5\u627E\u5230\u76F8\u5173\u7ED3\u679C",
                suggestedQueryText: "\u4F60\u53EF\u4EE5\u5C1D\u8BD5\u67E5\u8BE2",
                reportMissingResultsText: "\u4F60\u8BA4\u4E3A\u8BE5\u67E5\u8BE2\u5E94\u8BE5\u6709\u7ED3\u679C\uFF1F",
                reportMissingResultsLinkText: "\u70B9\u51FB\u53CD\u9988"
              }
            }
          }
        }
      }
    },
    copyCode: {
      showInMobile: true,
      inline: true
    },
    feed: {
      count: 100,
      rssOutputFilename: "rss.xml",
      image: "/aiyc.png",
      icon: "python",
      rss: true,
      atom: true,
      json: true,
      channel: {
        title: "AI\u60A6\u521B|\u9EC4\u5BB6\u5B9D\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00\u6559\u5B66\u8BA2\u9605\u9891\u9053",
        link: "https://bornforthis.cn/rss.xml",
        icon: "/aiyc.svg",
        description: "Python 1v1,AI\u60A6\u521B,\u4E00\u5BF9\u4E00,Python,\u7F16\u7A0B\u4E00\u5BF9\u4E00,C++,Java,AI,\u4EBA\u5DE5\u667A\u80FD,\u9EC4\u5BB6\u5B9D,Python\u4E00\u5BF9\u4E00\u6559\u5B66"
      }
    },
    blog: true,
    comment: {
      provider: "Waline",
      serverURL: "https://waline.bornforthis.cn/",
      reaction: [
        "/Waline/tieba/tieba_agree.png",
        "/Waline/tieba/tieba_sunglasses.png",
        "/Waline/tieba/tieba_pick_nose.png",
        "/Waline/tieba/tieba_awkward.png",
        "/Waline/tieba/1f613.png",
        "/Waline/tieba/1f60f.png"
      ],
      comment: true,
      // 评论数统计
      pageview: true,
      // 浏览量统计
      noCopyright: true,
      dark: "auto"
    },
    // If you don’t need comment feature, you can remove following option
    // The following config is for demo ONLY, if you need comment feature, please generate and use your own config, see comment plugin documentation for details.
    // To avoid disturbing the theme developer and consuming his resources, please DO NOT use the following config directly in your production environment!!!!!
    // comment: {
    //   /**
    //    * Using Giscus
    //    */
    //   // provider: "giscus",
    //   // repo: "BornforthisHJB/comment",
    //   // repoId: "R_kgDOHTJESw",
    //   // category: "Announcements",
    //   // categoryId: "DIC_kwDOHTJES84CO_Qz",
    //   /**
    //    * Using Twikoo
    //    */
    //   // provider: "Twikoo",
    //   // envId: "https://twikoo.ccknbc.vercel.app",
    components: {
      components: [
        "VPCard",
        "PDF"
      ]
    },
    copyright: {
      author: "AI\u60A6\u521B",
      global: true,
      triggerLength: 1e3,
      disableCopy: false,
      disableSelection: false
    }
  }
});
var theme_default = (app) => {
  app.use({ name: "@vuepress/plugin-git" });
  return theme(app);
};

// docs/.vuepress/config.ts
import { googleAnalyticsPlugin } from "@vuepress/plugin-google-analytics";
var config_default = defineUserConfig({
  // bundler: viteBundler({
  //   viteOptions: {
  //     server: {
  //       watch: {
  //         // 重点：忽略大目录/生成目录
  //         ignored: [
  //           "**/.git/**",
  //           "**/node_modules/**",
  //           "**/dist/**",
  //           "**/.temp/**",
  //           "**/.cache/**",
  //           "**/.vuepress/.temp/**",
  //           "**/.vuepress/.cache/**",
  //           "**/.vuepress/dist/**",
  //           "**/.DS_Store",
  //         ],
  //       },
  //     },
  //   },
  // }),
  // lang: "zh-CN",
  // title: "AI悦创-Python一对一辅导",
  // description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
  base: "/",
  theme: theme_default,
  // theme: hopeTheme({
  //   plugins: {
  //     comment: {
  //       provider: "Waline",
  //     serverURL: "https://comment.bornforthis.cn/",
  //     },
  //   },
  // }),
  locales: {
    // "/en/": {
    //   lang: "en-US",
    //   title: "AI悦创-Python一对一辅导",
    //   description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
    // },
    "/": {
      lang: "zh-CN",
      title: "AI\u60A6\u521B-Python\u4E00\u5BF9\u4E00\u8F85\u5BFC",
      description: "Python 1v1,AI\u60A6\u521B,\u4E00\u5BF9\u4E00,Python,\u7F16\u7A0B\u4E00\u5BF9\u4E00,C++,Java,AI,\u4EBA\u5DE5\u667A\u80FD,\u9EC4\u5BB6\u5B9D,Python\u4E00\u5BF9\u4E00\u6559\u5B66"
    }
  },
  head: [
    ["meta", { name: "google-adsense-account", content: "ca-pub-5987340307114699" }],
    ["link", { rel: "icon", href: "/favicon.ico" }],
    // [
    //   "link", {
    //     rel: "shortcut icon",
    //     href: "/favicon.ico",
    //     // href: "/aiyc.svg",
    //   }
    // ],
    [
      "script",
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?2c924d7bcd249a2eaa2d4d003771cead";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();
      `
    ],
    // [
    //   "link", {
    //     rel: "stylesheet",
    //     href: "https://pyscript.net/latest/pyscript.css"
    //   }
    // ],
    [
      "script",
      {
        async: "",
        href: "https://www.googletagmanager.com/gtag/js?id=G-PK3BBE140P"
      },
      `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
    
      gtag('config', 'G-ZTEFJDCG66');
      `
    ]
  ],
  plugins: [
    // componentsPlugin({
    //   componentOptions: {
    //     artPlayer: {
    //       airplay: true,
    //       autoplay: true,
    //       fastForward: true,
    //       screenshot: true,
    //     },
    //   },
    // }),
    // searchConsolePlugin({
    //   baiduId: "2c924d7bcd249a2eaa2d4d003771cead",
    //   autoPushBaiduSwitch: true,
    // }),
    googleAnalyticsPlugin({
      id: "G-ZTEFJDCG66",
      debug: true
    })
    // docsearchPlugin({
    //   // 你的选项
    //   // appId, apiKey 和 indexName 是必填的
    //   appId: "ACD1S100IT",
    //   apiKey: "409311158985cfee5c0a535e5998ddd2",
    //   indexName: "bornforthis",
    //   // placeholder: "搜索",
    //   locales: {
    //     "/": {
    //       placeholder: "搜索文档",
    //       translations: {
    //         button: {
    //           buttonText: "搜索文档",
    //           buttonAriaLabel: "搜索文档",
    //         },
    //         modal: {
    //           searchBox: {
    //             resetButtonTitle: "清除查询条件",
    //             resetButtonAriaLabel: "清除查询条件",
    //             cancelButtonText: "取消",
    //             cancelButtonAriaLabel: "取消",
    //           },
    //           startScreen: {
    //             recentSearchesTitle: "搜索历史",
    //             noRecentSearchesText: "没有搜索历史",
    //             saveRecentSearchButtonTitle: "保存至搜索历史",
    //             removeRecentSearchButtonTitle: "从搜索历史中移除",
    //             favoriteSearchesTitle: "收藏",
    //             removeFavoriteSearchButtonTitle: "从收藏中移除",
    //           },
    //           errorScreen: {
    //             titleText: "无法获取结果",
    //             helpText: "你可能需要检查你的网络连接",
    //           },
    //           footer: {
    //             selectText: "选择",
    //             navigateText: "切换",
    //             closeText: "关闭",
    //             searchByText: "搜索提供者",
    //           },
    //           noResultsScreen: {
    //             noResultsText: "无法找到相关结果",
    //             suggestedQueryText: "你可以尝试查询",
    //             reportMissingResultsText: "你认为该查询应该有结果？",
    //             reportMissingResultsLinkText: "点击反馈",
    //           },
    //         },
    //       },
    //     },
    //   },
    // }),
    // searchPlugin({
    //   maxSuggestions: 16,
    //   hotKeys: [],
    //   // 你的选项
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
    //     }
    //   }
    // }),
  ],
  // shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6]
    }
  }
});
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiZG9jcy8udnVlcHJlc3MvY29uZmlnLnRzIiwgImRvY3MvLnZ1ZXByZXNzL3RoZW1lLnRzIiwgImRvY3MvLnZ1ZXByZXNzL25hdmJhci50cyIsICJkb2NzLy52dWVwcmVzcy9zaWRlYmFyLnRzIl0sCiAgInNvdXJjZXNDb250ZW50IjogWyJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ib3JuZm9ydGhpcy9EZXNrdG9wL2Jvcm5mb3J0aGlzLmNuL2RvY3MvLnZ1ZXByZXNzL2NvbmZpZy50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYm9ybmZvcnRoaXMvRGVza3RvcC9ib3JuZm9ydGhpcy5jbi9kb2NzLy52dWVwcmVzcy9jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVVc2VyQ29uZmlnIH0gZnJvbSBcInZ1ZXByZXNzXCI7XG5pbXBvcnQgdGhlbWUgZnJvbSBcIi4vdGhlbWUuanNcIjtcbi8vIGltcG9ydCB7IHNlYXJjaFBsdWdpbiB9IGZyb20gXCJAdnVlcHJlc3MvcGx1Z2luLXNlYXJjaFwiO1xuLy8gaW1wb3J0IHsgZG9jc2VhcmNoUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1kb2NzZWFyY2gnO1xuaW1wb3J0IHsgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luIH0gZnJvbSAnQHZ1ZXByZXNzL3BsdWdpbi1nb29nbGUtYW5hbHl0aWNzJztcbi8vIGltcG9ydCB7IHNlYXJjaFByb1BsdWdpbiB9IGZyb20gXCJ2dWVwcmVzcy1wbHVnaW4tc2VhcmNoLXByb1wiO1xuLy8gaW1wb3J0IHsgY3V0IH0gZnJvbSBcIm5vZGVqcy1qaWViYVwiO1xuLy8gaW1wb3J0IHsgY29tbWVudCB9IGZyb20gXCJ2dWVwcmVzcy10aGVtZS1ob3BlXCI7XG4vLyBpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuLy8gaW1wb3J0IHsgYXV0b0NhdGFsb2dQbHVnaW4gfSBmcm9tIFwidnVlcHJlc3MtcGx1Z2luLWF1dG8tY2F0YWxvZ1wiO1xuLy8gaW1wb3J0IHsgdml0ZUJ1bmRsZXIgfSBmcm9tICdAdnVlcHJlc3MvYnVuZGxlci12aXRlJztcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lVXNlckNvbmZpZyh7XG4gIC8vIGJ1bmRsZXI6IHZpdGVCdW5kbGVyKHtcbiAgLy8gICB2aXRlT3B0aW9uczoge1xuICAvLyAgICAgc2VydmVyOiB7XG4gIC8vICAgICAgIHdhdGNoOiB7XG4gIC8vICAgICAgICAgLy8gXHU5MUNEXHU3MEI5XHVGRjFBXHU1RkZEXHU3NTY1XHU1OTI3XHU3NkVFXHU1RjU1L1x1NzUxRlx1NjIxMFx1NzZFRVx1NUY1NVxuICAvLyAgICAgICAgIGlnbm9yZWQ6IFtcbiAgLy8gICAgICAgICAgIFwiKiovLmdpdC8qKlwiLFxuICAvLyAgICAgICAgICAgXCIqKi9ub2RlX21vZHVsZXMvKipcIixcbiAgLy8gICAgICAgICAgIFwiKiovZGlzdC8qKlwiLFxuICAvLyAgICAgICAgICAgXCIqKi8udGVtcC8qKlwiLFxuICAvLyAgICAgICAgICAgXCIqKi8uY2FjaGUvKipcIixcbiAgLy8gICAgICAgICAgIFwiKiovLnZ1ZXByZXNzLy50ZW1wLyoqXCIsXG4gIC8vICAgICAgICAgICBcIioqLy52dWVwcmVzcy8uY2FjaGUvKipcIixcbiAgLy8gICAgICAgICAgIFwiKiovLnZ1ZXByZXNzL2Rpc3QvKipcIixcbiAgLy8gICAgICAgICAgIFwiKiovLkRTX1N0b3JlXCIsXG4gIC8vICAgICAgICAgXSxcbiAgLy8gICAgICAgfSxcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gfSksXG4gIC8vIGxhbmc6IFwiemgtQ05cIixcbiAgLy8gdGl0bGU6IFwiQUlcdTYwQTZcdTUyMUItUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU4Rjg1XHU1QkZDXCIsXG4gIC8vIGRlc2NyaXB0aW9uOiBcIlB5dGhvbiAxdjEsQUlcdTYwQTZcdTUyMUIsXHU0RTAwXHU1QkY5XHU0RTAwLFB5dGhvbixcdTdGMTZcdTdBMEJcdTRFMDBcdTVCRjlcdTRFMDAsQysrLEphdmEsQUksXHU0RUJBXHU1REU1XHU2NjdBXHU4MEZELFx1OUVDNFx1NUJCNlx1NUI5RCxQeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdTY1NTlcdTVCNjZcIixcbiAgYmFzZTogXCIvXCIsXG4gIHRoZW1lLFxuICAvLyB0aGVtZTogaG9wZVRoZW1lKHtcbiAgLy8gICBwbHVnaW5zOiB7XG4gIC8vICAgICBjb21tZW50OiB7XG4gIC8vICAgICAgIHByb3ZpZGVyOiBcIldhbGluZVwiLFxuICAvLyAgICAgc2VydmVyVVJMOiBcImh0dHBzOi8vY29tbWVudC5ib3JuZm9ydGhpcy5jbi9cIixcbiAgLy8gICAgIH0sXG4gIC8vICAgfSxcbiAgLy8gfSksXG4gIGxvY2FsZXM6IHtcbiAgICAvLyBcIi9lbi9cIjoge1xuICAgIC8vICAgbGFuZzogXCJlbi1VU1wiLFxuICAgIC8vICAgdGl0bGU6IFwiQUlcdTYwQTZcdTUyMUItUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU4Rjg1XHU1QkZDXCIsXG4gICAgLy8gICBkZXNjcmlwdGlvbjogXCJQeXRob24gMXYxLEFJXHU2MEE2XHU1MjFCLFx1NEUwMFx1NUJGOVx1NEUwMCxQeXRob24sXHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwLEMrKyxKYXZhLEFJLFx1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCxcdTlFQzRcdTVCQjZcdTVCOUQsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG4gICAgLy8gfSxcbiAgICBcIi9cIjoge1xuICAgICAgbGFuZzogXCJ6aC1DTlwiLFxuICAgICAgdGl0bGU6IFwiQUlcdTYwQTZcdTUyMUItUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU4Rjg1XHU1QkZDXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJQeXRob24gMXYxLEFJXHU2MEE2XHU1MjFCLFx1NEUwMFx1NUJGOVx1NEUwMCxQeXRob24sXHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwLEMrKyxKYXZhLEFJLFx1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCxcdTlFQzRcdTVCQjZcdTVCOUQsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG5cbiAgICB9LFxuICB9LFxuXG4gIGhlYWQ6IFtcbiAgICBbJ21ldGEnLCB7IG5hbWU6ICdnb29nbGUtYWRzZW5zZS1hY2NvdW50JywgY29udGVudDogJ2NhLXB1Yi01OTg3MzQwMzA3MTE0Njk5JyB9XSxcbiAgICBbJ2xpbmsnLCB7IHJlbDogJ2ljb24nLCBocmVmOiAnL2Zhdmljb24uaWNvJyB9XSxcbiAgICAvLyBbXG4gICAgLy8gICBcImxpbmtcIiwge1xuICAgIC8vICAgICByZWw6IFwic2hvcnRjdXQgaWNvblwiLFxuICAgIC8vICAgICBocmVmOiBcIi9mYXZpY29uLmljb1wiLFxuICAgIC8vICAgICAvLyBocmVmOiBcIi9haXljLnN2Z1wiLFxuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgW1xuICAgICAgJ3NjcmlwdCcsXG4gICAgICB7fSxcbiAgICAgIGBcbiAgICAgIHZhciBfaG10ID0gX2htdCB8fCBbXTtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGhtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNjcmlwdFwiKTtcbiAgICAgICAgaG0uc3JjID0gXCJodHRwczovL2htLmJhaWR1LmNvbS9obS5qcz8yYzkyNGQ3YmNkMjQ5YTJlYWEyZDRkMDAzNzcxY2VhZFwiO1xuICAgICAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdOyBcbiAgICAgICAgcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShobSwgcyk7XG4gICAgICB9KSgpO1xuICAgICAgYFxuICAgIF0sXG5cbiAgICAvLyBbXG4gICAgLy8gICBcImxpbmtcIiwge1xuICAgIC8vICAgICByZWw6IFwic3R5bGVzaGVldFwiLFxuICAgIC8vICAgICBocmVmOiBcImh0dHBzOi8vcHlzY3JpcHQubmV0L2xhdGVzdC9weXNjcmlwdC5jc3NcIlxuICAgIC8vICAgfVxuICAgIC8vIF0sXG4gICAgW1xuICAgICAgXCJzY3JpcHRcIiwge1xuICAgICAgICBhc3luYzogXCJcIixcbiAgICAgICAgaHJlZjogXCJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbS9ndGFnL2pzP2lkPUctUEszQkJFMTQwUFwiXG4gICAgICB9LFxuICAgICAgYFxuICAgICAgd2luZG93LmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgfHwgW107XG4gICAgICBmdW5jdGlvbiBndGFnKCl7ZGF0YUxheWVyLnB1c2goYXJndW1lbnRzKTt9XG4gICAgICBndGFnKCdqcycsIG5ldyBEYXRlKCkpO1xuICAgIFxuICAgICAgZ3RhZygnY29uZmlnJywgJ0ctWlRFRkpEQ0c2NicpO1xuICAgICAgYFxuICAgIF1cblxuICBdLFxuXG4gIFxuICBwbHVnaW5zOiBbXG4gIFxuICAgIC8vIGNvbXBvbmVudHNQbHVnaW4oe1xuXG4gICAgLy8gICBjb21wb25lbnRPcHRpb25zOiB7XG4gICAgLy8gICAgIGFydFBsYXllcjoge1xuICAgIC8vICAgICAgIGFpcnBsYXk6IHRydWUsXG4gICAgLy8gICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgLy8gICAgICAgZmFzdEZvcndhcmQ6IHRydWUsXG5cbiAgICAvLyAgICAgICBzY3JlZW5zaG90OiB0cnVlLFxuICAgIC8vICAgICB9LFxuICAgIC8vICAgfSxcbiAgICAvLyB9KSxcbiAgICAvLyBzZWFyY2hDb25zb2xlUGx1Z2luKHtcbiAgICAvLyAgIGJhaWR1SWQ6IFwiMmM5MjRkN2JjZDI0OWEyZWFhMmQ0ZDAwMzc3MWNlYWRcIixcbiAgICAvLyAgIGF1dG9QdXNoQmFpZHVTd2l0Y2g6IHRydWUsXG4gICAgLy8gfSksXG4gICAgZ29vZ2xlQW5hbHl0aWNzUGx1Z2luKHtcbiAgICAgIGlkOiBcIkctWlRFRkpEQ0c2NlwiLFxuICAgICAgZGVidWc6IHRydWUsXG4gICAgfSksXG4gICAgLy8gZG9jc2VhcmNoUGx1Z2luKHtcbiAgICAvLyAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgIC8vICAgLy8gYXBwSWQsIGFwaUtleSBcdTU0OEMgaW5kZXhOYW1lIFx1NjYyRlx1NUZDNVx1NTg2Qlx1NzY4NFxuICAgIC8vICAgYXBwSWQ6IFwiQUNEMVMxMDBJVFwiLFxuICAgIC8vICAgYXBpS2V5OiBcIjQwOTMxMTE1ODk4NWNmZWU1YzBhNTM1ZTU5OThkZGQyXCIsXG4gICAgLy8gICBpbmRleE5hbWU6IFwiYm9ybmZvcnRoaXNcIixcbiAgICAvLyAgIC8vIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlwiLFxuICAgIC8vICAgbG9jYWxlczoge1xuICAgIC8vICAgICBcIi9cIjoge1xuICAgIC8vICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2M1wiLFxuICAgIC8vICAgICAgIHRyYW5zbGF0aW9uczoge1xuICAgIC8vICAgICAgICAgYnV0dG9uOiB7XG4gICAgLy8gICAgICAgICAgIGJ1dHRvblRleHQ6IFwiXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzXCIsXG4gICAgLy8gICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAvLyAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICBtb2RhbDoge1xuICAgIC8vICAgICAgICAgICBzZWFyY2hCb3g6IHtcbiAgICAvLyAgICAgICAgICAgICByZXNldEJ1dHRvblRpdGxlOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgIC8vICAgICAgICAgICAgIHJlc2V0QnV0dG9uQXJpYUxhYmVsOiBcIlx1NkUwNVx1OTY2NFx1NjdFNVx1OEJFMlx1Njc2MVx1NEVGNlwiLFxuICAgIC8vICAgICAgICAgICAgIGNhbmNlbEJ1dHRvblRleHQ6IFwiXHU1M0Q2XHU2RDg4XCIsXG4gICAgLy8gICAgICAgICAgICAgY2FuY2VsQnV0dG9uQXJpYUxhYmVsOiBcIlx1NTNENlx1NkQ4OFwiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgIC8vICAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6IFwiXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgLy8gICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6IFwiXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgLy8gICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgIC8vICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgIC8vICAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogXCJcdTY1MzZcdTg1Q0ZcIixcbiAgICAvLyAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgIC8vICAgICAgICAgICB9LFxuICAgIC8vICAgICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgIC8vICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcbiAgICAvLyAgICAgICAgICAgICBoZWxwVGV4dDogXCJcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTVcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgLy8gICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcbiAgICAvLyAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXG4gICAgLy8gICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgIC8vICAgICAgICAgICAgIHNlYXJjaEJ5VGV4dDogXCJcdTY0MUNcdTdEMjJcdTYzRDBcdTRGOUJcdTgwMDVcIixcbiAgICAvLyAgICAgICAgICAgfSxcbiAgICAvLyAgICAgICAgICAgbm9SZXN1bHRzU2NyZWVuOiB7XG4gICAgLy8gICAgICAgICAgICAgbm9SZXN1bHRzVGV4dDogXCJcdTY1RTBcdTZDRDVcdTYyN0VcdTUyMzBcdTc2RjhcdTUxNzNcdTdFRDNcdTY3OUNcIixcbiAgICAvLyAgICAgICAgICAgICBzdWdnZXN0ZWRRdWVyeVRleHQ6IFwiXHU0RjYwXHU1M0VGXHU0RUU1XHU1QzFEXHU4QkQ1XHU2N0U1XHU4QkUyXCIsXG4gICAgLy8gICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNUZXh0OiBcIlx1NEY2MFx1OEJBNFx1NEUzQVx1OEJFNVx1NjdFNVx1OEJFMlx1NUU5NFx1OEJFNVx1NjcwOVx1N0VEM1x1Njc5Q1x1RkYxRlwiLFxuICAgIC8vICAgICAgICAgICAgIHJlcG9ydE1pc3NpbmdSZXN1bHRzTGlua1RleHQ6IFwiXHU3MEI5XHU1MUZCXHU1M0NEXHU5OTg4XCIsXG4gICAgLy8gICAgICAgICAgIH0sXG4gICAgLy8gICAgICAgICB9LFxuICAgIC8vICAgICAgIH0sXG4gICAgLy8gICAgIH0sXG4gICAgLy8gICB9LFxuICAgIC8vIH0pLFxuXG4gICAgLy8gc2VhcmNoUGx1Z2luKHtcbiAgICAvLyAgIG1heFN1Z2dlc3Rpb25zOiAxNixcbiAgICAvLyAgIGhvdEtleXM6IFtdLFxuICAgIC8vICAgLy8gXHU0RjYwXHU3Njg0XHU5MDA5XHU5ODc5XG4gICAgLy8gICBsb2NhbGVzOiB7XG4gICAgLy8gICAgIFwiL1wiOiB7XG4gICAgLy8gICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9KSxcbiAgXSxcblxuICAvLyBzaG91bGRQcmVmZXRjaDogZmFsc2UsXG4gIG1hcmtkb3duOiB7XG4gICAgaGVhZGVyczoge1xuICAgICAgbGV2ZWw6IFsyLCAzLCA0LCA1LCA2XSxcbiAgICB9XG4gIH1cbn0pO1xuIiwgImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYm9ybmZvcnRoaXMvRGVza3RvcC9ib3JuZm9ydGhpcy5jbi9kb2NzLy52dWVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3MvdGhlbWUudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3MvdGhlbWUudHNcIjtpbXBvcnQgeyBob3BlVGhlbWUgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuaW1wb3J0IHsgemhOYXZiYXIgfSBmcm9tIFwiLi9uYXZiYXIuanNcIjtcbmltcG9ydCB7IHpoU2lkZWJhciB9IGZyb20gXCIuL3NpZGViYXIuanNcIjtcbi8vIDxtZXRhIG5hbWU9XCJrZXl3b3Jkc1wiIGNvbnRlbnQ9XCJcdTRFMDBcdTVCRjlcdTRFMDBcdThGODVcdTVCRkNcdTdGMTZcdTdBMEIsXHU3RjE2XHU3QTBCMXYxLENTXHU4Rjg1XHU1QkZDLFx1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1OEY4NVx1NUJGQyxcdTVDMTFcdTUxM0ZcdTdGMTZcdTdBMEJcdTRFMDBcdTVCRjlcdTRFMDAsUHl0aG9uIDF2MSxBSVx1NjBBNlx1NTIxQixcdTRFMDBcdTVCRjlcdTRFMDAsXHU4M0RDXHU5RTFGXHU2NTU5XHU3QTBCLFB5dGhvbixcdTdGMTZcdTdBMEJcdTRFMDBcdTVCRjlcdTRFMDAsQysrLEphdmEsQUksXHU0RUJBXHU1REU1XHU2NjdBXHU4MEZELFx1OUVDNFx1NUJCNlx1NUI5RCxQeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdTY1NTlcdTVCNjYsUHl0aG9uXHU4Rjg1XHU1QkZDLFx1NzU1OVx1NUI2Nlx1NzUxRkNTXHU4Rjg1XHU1QkZDLENoYXRHUFRcdTRFRTNcdTZDRThcdTUxOENcIj5cbi8vIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJQeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdThGODVcdTVCRkMsXHU3RjE2XHU3QTBCMXYxLEphdmFcdTRFMDBcdTVCRjlcdTRFMDBcdThGODVcdTVCRkMsXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XHU4Rjg1XHU1QkZDLENTXHU4Rjg1XHU1QkZDLFx1OTc2Mlx1OEJENVx1OEY4NVx1NUJGQyxcdTcyMkNcdTg2NkJcdTRFMDBcdTVCRjlcdTRFMDBcdTY1NTlcdTVCNjYsXHU4M0RDXHU5RTFGXHU2NTU5XHU3QTBCLFx1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1NjU1OVx1NUI2NixcdTVDMTFcdTUxM0ZcdTdGMTZcdTdBMEJcdTRFMDBcdTVCRjlcdTRFMDAsXHU0RUJBXHU1REU1XHU2NjdBXHU4MEZELFx1OUVDNFx1NUJCNlx1NUI5RCxcdTUxNjhcdTdGNTEzMDAwK1x1NUI2Nlx1NTQ1OCxcdTUwM0NcdTVGOTdcdTRGRTFcdThENTYsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2LEphdmFcdTRFMDBcdTVCRjlcdTRFMDBcdTY1NTlcdTVCNjYsXHU3NTU5XHU1QjY2XHU3NTFGQ1NcdThGODVcdTVCRkMsQ2hhdEdQVFx1NEVFM1x1NkNFOFx1NTE4Q1wiPiAgIFxuLy8gZXhwb3J0IGRlZmF1bHQgaG9wZVRoZW1lKHtcbmNvbnN0IHRoZW1lID0gaG9wZVRoZW1lKHtcbiAgLy8gcnRsOiB0cnVlLFxuICAvLyBob3RSZWxvYWQ6IHRydWUsXG4gIC8vIGZ1bGxzY3JlZW46IHRydWUsXG4gIHRvYzoge1xuICAgIGxldmVsczogWzEsIDZdXG4gIH0sXG4gIG5hdmJhckxheW91dDoge1xuICAgIHN0YXJ0OiBbXCJCcmFuZFwiXSxcbiAgICBjZW50ZXI6IFtcIkxpbmtzXCJdLFxuICAgIGVuZDogW1wiTGFuZ3VhZ2VcIiwgXCJSZXBvXCIsIFwiT3V0bG9va1wiLCBcIlNlYXJjaFwiXSxcbiAgfSxcbiAgaG9zdG5hbWU6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9cIixcblxuICBhdXRob3I6IHtcbiAgICBuYW1lOiBcIkFuZGVyc29uSEpCXCIsXG4gICAgdXJsOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vXCIsXG4gICAgZW1haWw6IFwiYWl5dWVjaHVhbmdAZ21haWwuY29tXCJcbiAgfSxcblxuICBsb2dvOiBcIi9haXljLnN2Z1wiLFxuICAvLyBuYXZUaXRsZTogXCJBSVx1NjBBNlx1NTIxQi1QeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdThGODVcdTVCRkNcIixcbiAgLy8gbmF2VGl0bGU6IGZhbHNlLFxuICBjaGFuZ2Vsb2c6IGZhbHNlLFxuICBlZGl0TGluazogZmFsc2UsXG4gIGxhc3RVcGRhdGVkOiBmYWxzZSxcbiAgY29udHJpYnV0b3JzOiBmYWxzZSxcblxuICBcbiAgZG9jc0JyYW5jaDogXCJtYWluXCIsXG4gIGRvY3NEaXI6IFwiZG9jc1wiLFxuICBkb2NzUmVwbzogXCJBbmRlcnNvbkhKQi9ib3JuZm9ydGhpcy5jblwiLFxuICByZXBvOiBcIkFuZGVyc29uSEpCL2Jvcm5mb3J0aGlzLmNuXCIsXG5cbiAgZGFya21vZGU6IFwic3dpdGNoXCIsXG5cbiAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcbiAgLy8gY29weXJpZ2h0OiAnQ29weXJpZ2h0XHUwMEE5MjAyMyBCb3JuZm9ydGhpcycsXG5cbiAgcGFnZUluZm86IFtcIkF1dGhvclwiLCBcIk9yaWdpbmFsXCIsIFwiRGF0ZVwiLCBcIkNhdGVnb3J5XCIsIFwiVGFnXCIsIFwiUmVhZGluZ1RpbWVcIiwgXCJQYWdlVmlld1wiLCBcIldvcmRcIl0sXG5cbiAgYmxvZzoge1xuICAgIG5hbWU6IFwiQUlcdTYwQTZcdTUyMUJcIixcbiAgICBhdmF0YXI6IFwiL2FpeWMuanBnXCIsXG4gICAgZGVzY3JpcHRpb246IFwiXHU0RTAwXHU0RTJBXHU2MDFEXHU4MDAzXHU4MDA1LFx1N0YxNlx1N0EwQlx1NzlDMVx1NjU1OSAxdjFcIixcbiAgICBpbnRybzogXCIvaW50cm9cIixcbiAgICBhcnRpY2xlUGVyUGFnZTogMTgsXG4gICAgbWVkaWFzOiB7XG4gICAgICBFbWFpbDogXCJtYWlsdG86aW5mb0Bib3JuZm9ydGhpc0Bib3JuZm9ydGhpcy5jblwiLFxuICAgICAgR2l0ZWU6IFwiaHR0cHM6Ly9naXRlZS5jb20vaHVhbmdqaWFiYW9haXljXCIsXG4gICAgICBHaXRIdWI6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCXCIsXG4gICAgICBHbWFpbDogXCJtYWlsdG86YWl5dWVjaHVhbmdAZ21haWwuY29tXCIsXG4gICAgICBRUTogXCJodHRwOi8vd3BhLnFxLmNvbS9tc2dyZD92PTMmdWluPTE0MzI4MDM3NzYmc2l0ZT1xcSZtZW51PXllc1wiLFxuICAgICAgWW91dHViZTogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDVDUyNUZrNzR3X2w5UGswNk94a0x4Z1wiLFxuICAgICAgWmhpaHU6IFwiaHR0cHM6Ly93d3cuemhpaHUuY29tL3Blb3BsZS9haXl1ZWNodWFuZ1wiLFxuICAgICAgSW5zdGFncmFtOiBcImh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vY29kaW5nMXYxL1wiLFxuICAgICAgV2VjaGF0OiBcIi93ZWNoYXQuSlBHXCIsXG4gICAgICBNckppYWJhbzoge1xuICAgICAgICBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY25cIixcbiAgICAgICAgaWNvbjogJzxzdmcgd2lkdGg9XCIxMDAlXCIgaGVpZ2h0PVwiMTAwJVwiIHZpZXdCb3g9XCIwIDAgMTAwMCAxMDAwXCIgdmVyc2lvbj1cIjEuMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiB4bWxuczp4bGluaz1cImh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmtcIiB4bWw6c3BhY2U9XCJwcmVzZXJ2ZVwiIHhtbG5zOnNlcmlmPVwiaHR0cDovL3d3dy5zZXJpZi5jb20vXCIgc3R5bGU9XCJmaWxsLXJ1bGU6ZXZlbm9kZDtjbGlwLXJ1bGU6ZXZlbm9kZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MjtcIj48ZyBpZD1cIkxheWVyLTJcIiBzZXJpZjppZD1cIkxheWVyIDJcIiB0cmFuc2Zvcm09XCJtYXRyaXgoMS40MDI2LDAsMCwxLjQwMjYsLTIwMy41MjYsLTIwNC4yMjQpXCI+PGcgdHJhbnNmb3JtPVwibWF0cml4KDAsLTEsLTEsMCw1MDEuNTg5LDE1NS42MDQpXCI+PHBhdGggZD1cIk0tMzQ2LjQ4MiwtMzQ2LjQ4MkMtNTM3Ljg0LC0zNDYuNDgyIC02OTIuOTY0LC0xOTEuMzU2IC02OTIuOTY0LDBDLTY5Mi45NjQsMTkxLjM1NiAtNTM3Ljg0LDM0Ni40ODIgLTM0Ni40ODIsMzQ2LjQ4MkMtMTU1LjEyNSwzNDYuNDgyIDAsMTkxLjM1NiAwLDBDMCwtMTkxLjM1NiAtMTU1LjEyNSwtMzQ2LjQ4MiAtMzQ2LjQ4MiwtMzQ2LjQ4MlwiIHN0eWxlPVwiZmlsbDpyZ2IoMjU1LDI0OCwwKTtmaWxsLXJ1bGU6bm9uemVybztcIi8+PC9nPjxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDUwMS41ODksODM4LjU2OSlcIj48cGF0aCBkPVwiTTAsLTY3Mi45NjVDLTE4NS41MzcsLTY3Mi45NjUgLTMzNi40ODIsLTUyMi4wMiAtMzM2LjQ4MiwtMzM2LjQ4M0MtMzM2LjQ4MiwtMTUwLjk0NSAtMTg1LjUzNywwIDAsMEMxODUuNTM3LDAgMzM2LjQ4MiwtMTUwLjk0NSAzMzYuNDgyLC0zMzYuNDgzQzMzNi40ODIsLTUyMi4wMiAxODUuNTM3LC02NzIuOTY1IDAsLTY3Mi45NjVNMCwyMEMtNDguMTIxLDIwIC05NC44MDcsMTAuNTczIC0xMzguNzYyLC04LjAxOUMtMTgxLjIxMywtMjUuOTc0IC0yMTkuMzM1LC01MS42NzYgLTI1Mi4wNzEsLTg0LjQxMUMtMjg0LjgwNywtMTE3LjE0NyAtMzEwLjUwOSwtMTU1LjI3IC0zMjguNDY0LC0xOTcuNzJDLTM0Ny4wNTYsLTI0MS42NzYgLTM1Ni40ODIsLTI4OC4zNjIgLTM1Ni40ODIsLTMzNi40ODNDLTM1Ni40ODIsLTM4NC42MDMgLTM0Ny4wNTYsLTQzMS4yODkgLTMyOC40NjQsLTQ3NS4yNDVDLTMxMC41MDksLTUxNy42OTUgLTI4NC44MDcsLTU1NS44MTggLTI1Mi4wNzEsLTU4OC41NTRDLTIxOS4zMzUsLTYyMS4yODkgLTE4MS4yMTMsLTY0Ni45OTEgLTEzOC43NjIsLTY2NC45NDdDLTk0LjgwNywtNjgzLjUzOCAtNDguMTIxLC02OTIuOTY1IDAsLTY5Mi45NjVDNDguMTIsLTY5Mi45NjUgOTQuODA3LC02ODMuNTM4IDEzOC43NjIsLTY2NC45NDdDMTgxLjIxMywtNjQ2Ljk5MSAyMTkuMzM1LC02MjEuMjg5IDI1Mi4wNzEsLTU4OC41NTRDMjg0LjgwNywtNTU1LjgxOCAzMTAuNTA5LC01MTcuNjk1IDMyOC40NjQsLTQ3NS4yNDVDMzQ3LjA1NiwtNDMxLjI4OSAzNTYuNDgyLC0zODQuNjAzIDM1Ni40ODIsLTMzNi40ODNDMzU2LjQ4MiwtMjg4LjM2MiAzNDcuMDU2LC0yNDEuNjc2IDMyOC40NjQsLTE5Ny43MkMzMTAuNTA5LC0xNTUuMjcgMjg0LjgwNywtMTE3LjE0NyAyNTIuMDcxLC04NC40MTFDMjE5LjMzNSwtNTEuNjc2IDE4MS4yMTMsLTI1Ljk3NCAxMzguNzYyLC04LjAxOUM5NC44MDcsMTAuNTczIDQ4LjEyLDIwIDAsMjBcIiBzdHlsZT1cImZpbGwtcnVsZTpub256ZXJvO1wiLz48L2c+PGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsMzY3LjcxOCw0MTAuMzc5KVwiPjxwYXRoIGQ9XCJNMCwtMzYuODQxTDM3LjgxOSwtMzYuODQxTDMzLjE4OCwwLjc2OUwtNC42MjMsMC44NDRMMCwtMzYuODQxWk0tNDAuNzE2LDY4LjUxMUwtMTIuOTI0LDY4LjUxMUwtOC4wMDgsMjguNDM4TDI5Ljc4MSwyOC40MzhMMjQuODg2LDY4LjE4N0w1My4wMDEsNjguMTg3TDU3LjgyMiwyOC40MzhMOTIuNDI3LDI4LjQzOEw5NS42NTksMC42NDZMNjEuMTg0LDAuNzE0TDY1LjczOCwtMzYuODQxTDEwMS4xNTMsLTM2Ljg0MUwxMDQuMzg0LC02NC42MzNMNjkuMSwtNjQuNTY0TDc0LjAwNywtMTA1LjAyOUw0Ni4yMTUsLTEwNS4wMjlMNDEuMjI2LC02NC41MDlMMy4zODUsLTY0LjQzNEw4LjQwNSwtMTA1LjM1MkwtMTkuNzEsLTEwNS4zNTJMLTI0LjY2MSwtNjQuMzc5TC01OS43ODMsLTY0LjMxTC02My4zMzgsLTM2Ljg0MUwtMjcuOTg4LC0zNi44NDFMLTMyLjU0NywwLjg5OEwtNjguNTA5LDAuOTY5TC03Mi4wNjMsMjguNDM4TC0zNS44NzUsMjguNDM4TC00MC43MTYsNjguNTExWlwiIHN0eWxlPVwiZmlsbDpyZ2IoNSw1LDUpO2ZpbGwtcnVsZTpub256ZXJvO1wiLz48L2c+PGcgdHJhbnNmb3JtPVwibWF0cml4KDEsMCwwLDEsNzExLjA2LDMyMy4xNTEpXCI+PHBhdGggZD1cIk0wLDE1NC4yMjNMLTIuNzIzLDExOS41NjZMLTExMS4xNDksODUuNDA0TC05LjY1NCwzNS4xNTJMLTEyLjYyNSwwTC0xNDMuODI1LDY4LjU3MUwtMTQwLjYwNywxMDguMTc5TDAsMTU0LjIyM1pcIiBzdHlsZT1cImZpbGw6cmdiKDUsNSw1KTtmaWxsLXJ1bGU6bm9uemVybztcIi8+PC9nPjxnIHRyYW5zZm9ybT1cIm1hdHJpeCgxLDAsMCwxLDY1OS44Niw2MzkuMDUpXCI+PHBhdGggZD1cIk0wLC0xMC4wNjlDLTQuNjgsLTAuNTIzIC0xNC4yMjQsNS44MzkgLTI3LjY5OSw1LjI3OEMtNDEuMTc1LDQuNzE2IC0xMDYuNDkzLC00LjA4IC0xMjQuNDYxLC00LjY0MUMtMTQyLjQyOSwtNS4yMDMgLTE1MS42LDEyLjIwMyAtMTYzLjk1MiwyNS42NzlDLTE3My4xMjMsMi44NDYgLTE4MC42MDksLTcuODIzIC0xOTIuNzc1LC0xMS41NjZDLTIwNC45NCwtMTUuMzA5IC0yNjYuMzI4LC0yMC41NDkgLTI4My4zNiwtMjIuNjA4Qy0zMDAuMzkyLC0yNC42NjcgLTMwNi43NTUsLTI2LjM1MSAtMzEyLjc0NCwtMzguNTE3Qy0zMTguNzMzLC01MC42ODMgLTMxNS4xNzcsLTcwLjUyMSAtMzE1LjE3NywtNzAuNTIxTC0zNDkuMjQsLTc0LjQ1MkMtMzQ5LjI0LC03NC40NTIgLTM1MS44NjEsLTYwLjQxNSAtMzUxLjQ4NiwtMzguMzNDLTM1MS4xMTIsLTE2LjI0NSAtMzQ4LjExNywtMS44MzQgLTMyOS43NzUsNi40MDJDLTMxMS40MzQsMTQuNjM3IC0yNTguMDkyLDIwLjA2NCAtMjI0Ljk2NSwyMi40OTdDLTE5MS44MzcsMjQuOTMxIC0xODcuNTMzLDI5LjYxIC0xODQuMzUxLDM3LjI4M0MtMTgxLjE2OSw0NC45NTUgLTE4NC42NzUsNjAuMTk5IC0xODQuNjc1LDYwLjE5OUMtMTg0LjY3NSw2MC4xOTkgLTE3Ny40MzYsNjEuMjE2IC0xNTAuMjkyLDY0LjM4M0MtMTQ5LjI3NCw0Ni41MTMgLTE0Ny4zNTEsNDEuOTg5IC0xNDEuMTMxLDM2Ljg5OUMtMTM0LjkxMSwzMS44MDkgLTEyNC41MDUsMzMuNjE4IC05My4wNjMsMzYuODk3Qy02MS42Miw0MC4xNzYgLTM3LjQxNyw0Ni4wNTcgLTEwLjE1OSw0NS4xNTJDMTcuMDk5LDQ0LjI0NiAyNi40ODUsMjcuODQ2IDMyLjQ3OSwxMC4yMDJDMzguNDc0LC03LjQ0MSAzOS4xNTQsLTMxLjY0NyAzOS4xNTQsLTMxLjY0N0w1LjQ1LC0zNS4yNjZDNS40NSwtMzUuMjY2IDQuNjgsLTE5LjYxNSAwLC0xMC4wNjlcIiBzdHlsZT1cImZpbGw6cmdiKDUsNSw1KTtmaWxsLXJ1bGU6bm9uemVybztcIi8+PC9nPjwvZz48L3N2Zz4nLFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIGZvb3RlcjogJ1x1OTU3Rlx1NjcxRlx1NjJEQlx1NjUzNlx1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1NUI2Nlx1NTQ1OCFcdTVGQUVcdTRGRTE6SmlhYmNkZWZoLCA8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdTk1RkRJQ1BcdTU5MDcxOTAyMTQ4Nlx1NTNGNy02PC9hPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9MzUwMzA1MDIwMDAxNzJcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7XCI+PGltZyBzcmM9XCIvYmVpYW4ucG5nXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O1wiLz5cdTk1RkRcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDcgMzUwMzA1MDIwMDAxNzJcdTUzRjc8L2E+JyxcblxuICBsb2NhbGVzOiB7XG4gICAgXCIvXCI6IHtcbiAgICAgIC8vIG5hdmJhclxuICAgICAgbmF2YmFyOiB6aE5hdmJhcixcblxuICAgICAgLy8gc2lkZWJhclxuICAgICAgc2lkZWJhcjogemhTaWRlYmFyLFxuICAgICAgY2hhbmdlbG9nOiBmYWxzZSxcbiAgICAgIGVkaXRMaW5rOiBmYWxzZSxcbiAgICAgIGxhc3RVcGRhdGVkOiBmYWxzZSxcbiAgICAgIGNvbnRyaWJ1dG9yczogZmFsc2UsXG5cbiAgICAgIGZvb3RlcjogJ1x1OTU3Rlx1NjcxRlx1NjJEQlx1NjUzNlx1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1NUI2Nlx1NTQ1OCFcdTVGQUVcdTRGRTE6SmlhYmNkZWZoLCA8YSBocmVmPVwiaHR0cHM6Ly9iZWlhbi5taWl0Lmdvdi5jbi9cIiB0YXJnZXQ9XCJfYmxhbmtcIj5cdTk1RkRJQ1BcdTU5MDcxOTAyMTQ4Nlx1NTNGNy02PC9hPjxhIHRhcmdldD1cIl9ibGFua1wiIGhyZWY9XCJodHRwOi8vd3d3LmJlaWFuLmdvdi5jbi9wb3J0YWwvcmVnaXN0ZXJTeXN0ZW1JbmZvP3JlY29yZGNvZGU9MzUwMzA1MDIwMDAxNzJcIiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrO3RleHQtZGVjb3JhdGlvbjpub25lO2hlaWdodDoyMHB4O2xpbmUtaGVpZ2h0OjIwcHg7XCI+PGltZyBzcmM9XCIvYmVpYW4ucG5nXCIgc3R5bGU9XCJmbG9hdDpsZWZ0O1wiLz5cdTk1RkRcdTUxNkNcdTdGNTFcdTVCODlcdTU5MDcgMzUwMzA1MDIwMDAxNzJcdTUzRjc8L2E+JyxcblxuICAgICAgZGlzcGxheUZvb3RlcjogdHJ1ZSxcblxuICAgIH0sXG5cbiAgfSxcblxuICBlbmNyeXB0OiB7XG4gICAgY29uZmlnOiB7XG4gICAgICAvLyBcIi9jb2x1bW4vcHkvYmFzZXF1ZXN0aW9uL2h3X3dvcmRfZ2FtZS5odG1sXCI6IHtcbiAgICAgIC8vICAgICBoaW50OiBcIlBhc3N3b3JkOiBcdTYzRDBcdTc5M0FcIixcbiAgICAgIC8vICAgICBwYXNzd29yZDogXCJhaXljXCIsXG4gICAgICAvLyB9LFxuICAgICAgXCIvY29sdW1uL1B5dGhvbi1Qcm9ncmFtbWluZy1Db3Vyc2UvUDE1LU9wZW5DbGF3L29wZW5jbGF3LWNvcmUtcHJpbmNpcGxlcy1wcmFjdGljZS9cIjogW1wiYWl5Y1wiLCBcIm9jXCJdLFxuICAgICAgXCIvY29sdW1uL1B5dGhvbi1Qcm9ncmFtbWluZy1Db3Vyc2UvUDE3LWFpLWNvdXJzZS1yZXNvdXJjZXMvXCI6IFtcImFpeWNcIl0sXG4gICAgICBcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9weXRob24tZXhhbS1jcmFzaC1jb3Vyc2UvXCI6IFtcImFpeWNcIiwgXCJsaWFuZy0yMDA1MjAxNlwiXSxcbiAgICAgIFwiL1ZJUFwiOiBcImFpeWNjY1wiLFxuICAgICAgLy8gXCIvU09DXCI6IFwiYWl5Y2NjXCIsXG4gICAgICBcIi9pbnRyb1wiOiBcImFpeWNjY1wiLFxuICAgICAgXCIvQm9va3MvMDUtTGlhaXNpbmctd2l0aC10aGUtcHVibGlzaGVyL1wiOiBcInpsXCIsXG4gICAgICBcIi9SUFwiOiBcIlJQUlBcIixcbiAgICAgIFwiL1Zwbi1jbGFzaC13aW4tbWFjL1wiOiBcInRpdGkyMDI1XCIsXG4gICAgICBcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9QMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5L1wiOiBbXCJhaXljXCIsIFwidGNmXCJdLFxuICAgICAgXCIvY29sdW1uL1B5dGhvbi1Qcm9ncmFtbWluZy1Db3Vyc2UvUDAxLVByb2dyYW1taW5nLXRoaW5raW5nL1wiOiBbXCJhaXljXCIsIFwidGNmXCJdLFxuICAgICAgLy8gXCIvY29sdW1uL1B5dGhvbi1Qcm9ncmFtbWluZy1Db3Vyc2UvUDA2LWRhdGFfYW5hbHlzaXMvXCI6IFtcImFpeWNcIiwgXCJ0Y2ZcIl0sXG4gICAgICBcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9QMDMtQXNzaWdubWVudC9Bc3NpZ25tZW50MS1Tb2x1dGlvbi5odG1sXCI6IFtcImFpeWNcIl0sXG4gICAgICBcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9QMDMtQXNzaWdubWVudC9Bc3NpZ25tZW50Mi1Tb2x1dGlvbi5odG1sXCI6IFtcImFpeWNcIl0sXG4gICAgICBcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9QMDYtZGF0YV9hbmFseXNpcy9cIjogXCJhaXljXCIsXG4gICAgICBcIi9sZXR0ZXIvMjAyNC8xMi1naWZ0XCI6IFtcImFpeWNcIiwgXCJoclwiLCBcImhqclwiLCBcImxvdmVcIiwgXCJ0cnVlXCJdLFxuICAgICAgXCIvbGV0dGVyLzIwMjQvaW1wb3J0YW5jZS5odG1sXCI6IFwiYWl5Y1wiLFxuICAgICAgXCIvbGV0dGVyLzIwMjQvb25lLWlzLWFsbFwiOiBbXCJhaXljXCIsIFwia2p6XCIsIFwienlxXCIsIFwidGNmXCIsIFwibWlzc1wiXSxcbiAgICAgIFwiL2xldHRlci9ib29rLXdyaXRlL1wiOiBbXCJhaXljXCIsIFwidGNmXCJdLFxuICAgICAgXCIvbGV0dGVyLzIwMjMvMDVcIjogXCJhaXljY2NcIixcbiAgICAgIFwiLzF2MS8wMi15dWViYW8vXCI6IFtcInhzeHN4c3hzeHNcIiwgXCJjc2NzXCJdLFxuICAgICAgLy8gXCIvVnBuLWNsYXNoLXdpbi1tYWMvXCI6IFtcInR6dHpcIiwgXCJhaXljXCIsIFwibmVpYnVcIiwgXCJkbFwiXSxcbiAgICAgIFwiL3Zwbi5odG1sXCI6IFsndHp0eicsICdhaXljJ10sXG4gICAgICBcIi9ZdWVjaHVhbmdzLUZhbWlseS1FZHVjYXRpb25IYW5kYm9vay9Qcml2YXRlL1wiOiBbXCJhaXljXCIsIFwiaGpyYlwiLCBcInJiXCJdLFxuICAgICAgXCIvY29tcGFueS9cIjogW1wiYWl5Y1wiLCBcImNvbXBhbnlcIiwgXCJrYWlcIl0sXG4gICAgICBcIi9wYXNzd29yZFwiOiBcImFpeWNwdzEyM1wiLFxuICAgICAgXCIvbGV0dGVyLzIwMjMvbGlrZVwiOiBbXCJ0dHQyXCIsIFwibGlrZVwiXSxcbiAgICAgIFwiL2NvbHVtbi9Qcm9iYWJpbGl0eS10aGVvcnkvXCI6IFtcImFpeWNcIiwgXCJnbGxcIl0sXG4gICAgICBcIi9sZXR0ZXIvMjAyMy9oZWFydFwiOiBbXCJ0dHQxXCIsIFwiaGVhcnRcIl0sXG4gICAgICBcIi9sZXR0ZXIvbGlmZS9cIjogW1wiYWl5Y1wiLCBcImhyXCIsIFwibG92ZVwiXSxcbiAgICAgIFwiL2xldHRlci9saWZlL1dlZGRpbmctcGhvdG9zXCI6IFtcImFpeWNcIiwgXCJoclwiLCBcImxvdmVcIiwgXCJ5alwiXSxcbiAgICAgIFwiL2xldHRlci9saWZlL2NoYW5nZVwiOiBbXCJhaXljXCIsIFwiaHJcIiwgXCJsb3ZlXCIsIFwieWpcIl0sXG4gICAgICBcIi9sZXR0ZXIvbGlmZS9tdi1jaGFuZ2VcIjogW1wiYWl5Y1wiLCBcImhyXCIsIFwibG92ZVwiLCBcInF5XCJdLFxuICAgICAgXCIvY29sdW1uL1Byb2dyYW1taW5ndGhpbmtpbmcvXCI6IFtcImFpeWNcIl0sXG4gICAgICBcIi8xdjEvMTgtSmFzb24vMDFcIjogW1wiYWl5Y1wiLCBcImphc29uXCJdLFxuICAgICAgXCIvY29sdW1uL0FuLWludHJvZHVjdG9yeS1wcm9ncmFtbWluZy1jbGFzcy10aGF0LWFueW9uZS1jYW4tbGVhcm4vZGV0YWlsL1wiOiBbXCIxMjMxMjNcIiwgXCJhaXljXCJdLFxuICAgIH0sXG4gIH0sXG4gIG1hcmtkb3duOiB7XG4gICAgZmlndXJlOiB0cnVlLFxuICAgIGltZ0xhenlsb2FkOiB0cnVlLFxuICAgIGltZ01hcms6IHRydWUsXG4gICAgaW1nU2l6ZTogdHJ1ZSxcbiAgICBtYXJrOiB0cnVlLFxuICAgIGNvZGVUYWJzOiB0cnVlLFxuICAgIHRhYnM6IHRydWUsXG4gICAgbWF0aDogdHJ1ZSxcbiAgICBoaW50OiB0cnVlLFxuICAgIGFsZXJ0OiB0cnVlLFxuICAgIGNoYXJ0anM6IGZhbHNlLFxuICAgIGVjaGFydHM6IGZhbHNlLFxuICAgIG1lcm1haWQ6IHRydWUsXG4gICAgdnVlUGxheWdyb3VuZDogZmFsc2UsXG4gICAgc3ViOiB0cnVlLFxuICAgIHNwb2lsZXI6IHRydWUsXG4gICAgc3VwOiB0cnVlLFxuICAgIHRhc2tsaXN0OiB0cnVlLFxuICAgIGluY2x1ZGU6IHRydWUsXG4gICAgYXR0cnM6IGZhbHNlLFxuICAgIGZvb3Rub3RlOiB0cnVlLFxuICAgIGFsaWduOiB0cnVlLFxuICAgIGZsb3djaGFydDogZmFsc2UsXG4gICAgZ2ZtOiB0cnVlLFxuICAgIHByZXZpZXc6IHRydWUsXG4gICAgc3R5bGl6ZTogW1xuICAgICAge1xuICAgICAgICBtYXRjaGVyOiBcIlJlY29tbWVuZGVkXCIsXG4gICAgICAgIHJlcGxhY2VyOiAoeyB0YWcgfSkgPT4ge1xuICAgICAgICAgIGlmICh0YWcgPT09IFwiZW1cIilcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIHRhZzogXCJCYWRnZVwiLFxuICAgICAgICAgICAgICBhdHRyczogeyB0eXBlOiBcInRpcFwiIH0sXG4gICAgICAgICAgICAgIGNvbnRlbnQ6IFwiUmVjb21tZW5kZWRcIixcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIF0sXG4gICAgaGlnaGxpZ2h0ZXI6IHtcbiAgICAgIHR5cGU6IFwic2hpa2lcIixcbiAgICAgIGNvbGxhcHNlZExpbmVzOiAxNSxcbiAgICAgIC8vIGxpbmVOdW1iZXJzOiAxLFxuICAgICAgbm90YXRpb25EaWZmOiB0cnVlLCAgLy8gWyFjb2RlIC0tXVxuICAgICAgbm90YXRpb25Gb2N1czogdHJ1ZSwgLy8gWyFjb2RlIGZvY3VzOjNdXG4gICAgICBoaWdobGlnaHRMaW5lczogdHJ1ZSxcbiAgICAgIG5vdGF0aW9uSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgbm90YXRpb25Xb3JkSGlnaGxpZ2h0OiB0cnVlLFxuICAgICAgLy8gICBsYW5nczogWydzcWwnLCAncHl0aG9uJywgJ2phdmEnLCAnamF2YXNjcmlwdCcsICdjJywgJ2MjJywgJ2MrKycsICdodG1sJywgJ2NzcycsXG4gICAgICAvLyAgICAgJ2Jhc2gnLCAncnVzdCcsICdwaHAnLCAncicsICdjbWQnLCAneWFtbCcsICdtYXJrZG93bicsICdodHRwJywgJ2NtYWtlJywgJ21hdGxhYicsXG4gICAgICAvLyAgICAgJ3Bsc3FsJywgJ2luaScsIFwiZm9ydHJhbi1mcmVlLWZvcm1cIiwgXCJmb3J0cmFuLWZpeGVkLWZvcm1cIiwgJ2dvJywgJ3Z1ZScsICd0ZXgnLCAndGV4dCcsICdjc3YnLCAnZmlzaCcsXG4gICAgICAvLyAgICAgJ21ha2VmaWxlJywgJ3R5cGVzY3JpcHQnLFxuICAgICAgLy8gICBdLFxuICAgICAgbGFuZ0FsaWFzOiB7XG4gICAgICAgIFtcImV4Y2VsXCJdOiBcImJhc2hcIixcbiAgICAgICAgW1widXJsXCJdOiBcImJhc2hcIixcbiAgICAgIH0sXG4gICAgICAvLyB0aGVtZTogXCJtb25va2FpXCIsXG4gICAgLy8gICAvLyB0aGVtZXM6IHtcbiAgICAvLyAgIC8vICAgbGlnaHQ6IFwibW9ub2thaVwiLFxuICAgIC8vICAgLy8gICBkYXJrOiBcIm9uZS1kYXJrLXByb1wiLFxuICAgIC8vICAgLy8gfSxcbiAgICB9LFxuICAgIHZQcmU6IHRydWUsXG4gIH0sXG4gIFxuXG4gIHBsdWdpbnM6IHtcbiAgICBpY29uOiB7XG4gICAgICBwcmVmaXg6IFwiaWNvbmZvbnQgaWNvbi1cIixcbiAgICAgIGFzc2V0czogW1xuICAgICAgICAvLyBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vaWNvbi9pY29uZm9udC5jc3NcIixcbiAgICAgICAgXCIvaWNvbi9pY29uZm9udC5jc3NcIixcbiAgICAgICAgLy8gXCIvL2F0LmFsaWNkbi5jb20vdC9jL2ZvbnRfMzQyNjc5M184OWw4MnlxaDFsaC5jc3NcIixcbiAgICAgIF0sXG4gICAgfSxcbiAgICBnaXQ6IGZhbHNlLFxuICAgIHdhdGVybWFyazoge1xuICAgICAgZW5hYmxlZDogdHJ1ZSxcbiAgICAgIHdhdGVybWFya09wdGlvbnM6IHtcbiAgICAgICAgY29udGVudDogXCJBSVx1NjBBNlx1NTIxQi1QeXRob25cdTRFMDBcdTVCRjlcdTRFMDBcdThGODVcdTVCRkMgYm9ybmZvcnRoaXMuY25cIlxuICAgICAgfSxcbiAgICB9LFxuICAgIG5vdGljZTogW1xuICAgICAge1xuICAgICAgICBwYXRoOiBcIi9cIixcbiAgICAgICAgdGl0bGU6IFwiXHU5MDFBXHU3N0U1XCIsXG4gICAgICAgIGNvbnRlbnQ6IFwiXHU1RUZBXHU4QkFFXHU1RjAwXHU1NDJGXHVGRjFBXHU2OEFGXHU1QjUwXHVEODNFXHVERTlDKFZQTilcdTY3NjVcdThCQkZcdTk1RUVcdTY3MkNcdTdGNTFcdTdBRDlcdUZGMENcdTRGMUFcdTUyQTBcdTkwMUZcdTU2RkVcdTcyNDdcdTUyQTBcdThGN0RcdTkwMUZcdTVFQTZcdUZGMDFcIixcbiAgICAgICAgc2hvd09uY2U6IHRydWUsXG4gICAgICAgIGFjdGlvbnM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICB0ZXh0OiBcIlx1NjdFNVx1NzcwQlwiLFxuICAgICAgICAgICAgbGluazogXCIvTm90aWNlLm1kXCIsXG4gICAgICAgICAgICB0eXBlOiBcInByaW1hcnlcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHRleHQ6IFwiV2h5IEJsb2c/XCIsXG4gICAgICAgICAgICBsaW5rOiBcIi9hYm91dGJsb2cubWRcIixcbiAgICAgICAgICAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdGV4dDogXCJEaXNjb3JkXCIsXG4gICAgICAgICAgLy8gICBsaW5rOiBcImh0dHBzOi8vZGlzY29yZC5nZy9Qd0U0dHduVm1NXCIsXG4gICAgICAgICAgLy8gICB0eXBlOiBcImRlZmF1bHRcIixcbiAgICAgICAgICAvLyB9LFxuICAgICAgICAgIC8vIHtcbiAgICAgICAgICAvLyAgIHRleHQ6IFwiUVFcdTVCQTJcdTY3MERcIixcbiAgICAgICAgICAvLyAgIGxpbms6IFwiaHR0cDovL3dwYS5xcS5jb20vbXNncmQ/dj0zJnVpbj0xNDMyODAzNzc2JnNpdGU9cXEmbWVudT15ZXNcIixcbiAgICAgICAgICAvLyAgIHR5cGU6IFwiZGVmYXVsdFwiLFxuICAgICAgICAgIC8vIH0sXG4gICAgICAgICAgLy8ge1xuICAgICAgICAgIC8vICAgdGV4dDogXCJOb3dcIixcbiAgICAgICAgICAvLyAgIGxpbms6IFwiL05vdy5tZFwiLFxuICAgICAgICAgIC8vICAgdHlwZTogXCJkZWZhdWx0XCIsXG4gICAgICAgICAgLy8gfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgXSxcbiAgICAvLyBzbGltc2VhcmNoOiB7XG4gICAgLy8gICBob3RLZXlzOiBbeyBrZXk6IFwia1wiLCBjdHJsOiB0cnVlIH0sIHsga2V5OiBcIi9cIiwgY3RybDogdHJ1ZSB9XSxcbiAgICAvLyAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgIC8vICAgaW5kZXhDb250ZW50OiB0cnVlLFxuICAgIC8vICAgc3VnZ2VzdGlvbjogdHJ1ZSxcbiAgICAvLyAgIHF1ZXJ5SGlzdG9yeUNvdW50OiA1LFxuICAgIC8vICAgcmVzdWx0SGlzdG9yeUNvdW50OiA1LFxuICAgIC8vICAgc29ydFN0cmF0ZWd5OiAnbWF4JyxcbiAgICAvLyAgIGhvdFJlbG9hZDogZmFsc2UsXG4gICAgLy8gICBsb2NhbGVzOiB7XG4gICAgLy8gICAgIFwiL1wiOiB7XG4gICAgLy8gICAgICAgcGxhY2Vob2xkZXI6IFwiXHU2NDFDXHU3RDIyXCIsXG4gICAgLy8gICAgIH1cbiAgICAvLyAgIH1cbiAgICAvLyB9LFxuICAgIC8vIHNsaW1zZWFyY2g6IHRydWUsXG4gICAgLy8gc2VhcmNoOiB7XG4gICAgLy8gICBtYXhTdWdnZXN0aW9uczogMTAsXG4gICAgLy8gICBob3RLZXlzOiBbXSxcbiAgICAvLyAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgIC8vICAgbG9jYWxlczoge1xuICAgIC8vICAgICBcIi9cIjoge1xuICAgIC8vICAgICAgIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlwiLFxuICAgIC8vICAgICB9XG4gICAgLy8gICB9XG4gICAgLy8gfSxcbiAgICBkb2NzZWFyY2g6IHtcbiAgICAgIC8vIFx1NEY2MFx1NzY4NFx1OTAwOVx1OTg3OVxuICAgICAgLy8gYXBwSWQsIGFwaUtleSBcdTU0OEMgaW5kZXhOYW1lIFx1NjYyRlx1NUZDNVx1NTg2Qlx1NzY4NFxuICAgICAgYXBwSWQ6IFwiQUNEMVMxMDBJVFwiLFxuICAgICAgYXBpS2V5OiBcIjQwOTMxMTE1ODk4NWNmZWU1YzBhNTM1ZTU5OThkZGQyXCIsXG4gICAgICBpbmRleE5hbWU6IFwiYm9ybmZvcnRoaXNcIixcbiAgICAgIC8vIHBsYWNlaG9sZGVyOiBcIlx1NjQxQ1x1N0QyMlwiLFxuICAgICAgbG9jYWxlczoge1xuICAgICAgICBcIi9cIjoge1xuICAgICAgICAgIHBsYWNlaG9sZGVyOiAnXHU2NDFDXHU3RDIyXHU2NTg3XHU2ODYzJyxcbiAgICAgICAgICAvLyBpbml0aWFsUXVlcnk6ICdBSVx1NjBBNlx1NTIxQlx1MDBCN1x1OTU3Rlx1NjcxRlx1NjJEQlx1NjUzNlx1N0YxNlx1N0EwQlx1NzlDMVx1NjU1OVx1NUI2Nlx1NTQ1OFx1RkYwMVx1NUZBRVx1NEZFMTpKaWFiY2RlZmgnLFxuICAgICAgICAgIG1heFJlc3VsdHNQZXJHcm91cDogMTAsXG4gICAgICAgICAgdHJhbnNsYXRpb25zOiB7XG4gICAgICAgICAgICBidXR0b246IHtcbiAgICAgICAgICAgICAgYnV0dG9uVGV4dDogJ1x1NjQxQ1x1N0QyMlx1NjU4N1x1Njg2MycsXG4gICAgICAgICAgICAgIGJ1dHRvbkFyaWFMYWJlbDogXCJcdTY0MUNcdTdEMjJcdTY1ODdcdTY4NjNcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb2RhbDoge1xuICAgICAgICAgICAgICBzdGFydFNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHJlY2VudFNlYXJjaGVzVGl0bGU6IFwiXHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgbm9SZWNlbnRTZWFyY2hlc1RleHQ6IFwiXHU2Q0ExXHU2NzA5XHU2NDFDXHU3RDIyXHU1Mzg2XHU1M0YyXCIsXG4gICAgICAgICAgICAgICAgc2F2ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEZERFx1NUI1OFx1ODFGM1x1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlwiLFxuICAgICAgICAgICAgICAgIHJlbW92ZVJlY2VudFNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjQxQ1x1N0QyMlx1NTM4Nlx1NTNGMlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICAgIGZhdm9yaXRlU2VhcmNoZXNUaXRsZTogXCJcdTY1MzZcdTg1Q0ZcIixcbiAgICAgICAgICAgICAgICByZW1vdmVGYXZvcml0ZVNlYXJjaEJ1dHRvblRpdGxlOiBcIlx1NEVDRVx1NjUzNlx1ODVDRlx1NEUyRFx1NzlGQlx1OTY2NFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBlcnJvclNjcmVlbjoge1xuICAgICAgICAgICAgICAgIHRpdGxlVGV4dDogXCJcdTY1RTBcdTZDRDVcdTgzQjdcdTUzRDZcdTdFRDNcdTY3OUNcIixcbiAgICAgICAgICAgICAgICBoZWxwVGV4dDogXCJcdTRGNjBcdTUzRUZcdTgwRkRcdTk3MDBcdTg5ODFcdTY4QzBcdTY3RTVcdTRGNjBcdTc2ODRcdTdGNTFcdTdFRENcdThGREVcdTYzQTVcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZm9vdGVyOiB7XG4gICAgICAgICAgICAgICAgc2VsZWN0VGV4dDogXCJcdTkwMDlcdTYyRTlcIixcbiAgICAgICAgICAgICAgICBuYXZpZ2F0ZVRleHQ6IFwiXHU1MjA3XHU2MzYyXCIsXG4gICAgICAgICAgICAgICAgY2xvc2VUZXh0OiBcIlx1NTE3M1x1OTVFRFwiLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBub1Jlc3VsdHNTY3JlZW46IHtcbiAgICAgICAgICAgICAgICBub1Jlc3VsdHNUZXh0OiBcIlx1NjVFMFx1NkNENVx1NjI3RVx1NTIzMFx1NzZGOFx1NTE3M1x1N0VEM1x1Njc5Q1wiLFxuICAgICAgICAgICAgICAgIHN1Z2dlc3RlZFF1ZXJ5VGV4dDogXCJcdTRGNjBcdTUzRUZcdTRFRTVcdTVDMURcdThCRDVcdTY3RTVcdThCRTJcIixcbiAgICAgICAgICAgICAgICByZXBvcnRNaXNzaW5nUmVzdWx0c1RleHQ6IFwiXHU0RjYwXHU4QkE0XHU0RTNBXHU4QkU1XHU2N0U1XHU4QkUyXHU1RTk0XHU4QkU1XHU2NzA5XHU3RUQzXHU2NzlDXHVGRjFGXCIsXG4gICAgICAgICAgICAgICAgcmVwb3J0TWlzc2luZ1Jlc3VsdHNMaW5rVGV4dDogXCJcdTcwQjlcdTUxRkJcdTUzQ0RcdTk5ODhcIixcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcblxuICAgIGNvcHlDb2RlOiB7XG4gICAgICBzaG93SW5Nb2JpbGU6IHRydWUsXG4gICAgICBpbmxpbmU6IHRydWUsXG4gICAgfSxcbiAgICBmZWVkOiB7XG4gICAgICBjb3VudDogMTAwLFxuICAgICAgcnNzT3V0cHV0RmlsZW5hbWU6IFwicnNzLnhtbFwiLFxuICAgICAgaW1hZ2U6IFwiL2FpeWMucG5nXCIsXG4gICAgICBpY29uOiBcInB5dGhvblwiLFxuICAgICAgcnNzOiB0cnVlLFxuICAgICAgYXRvbTogdHJ1ZSxcbiAgICAgIGpzb246IHRydWUsXG4gICAgICBjaGFubmVsOiB7XG4gICAgICAgIHRpdGxlOiBcIkFJXHU2MEE2XHU1MjFCfFx1OUVDNFx1NUJCNlx1NUI5RFx1MDBCN1x1N0YxNlx1N0EwQlx1NEUwMFx1NUJGOVx1NEUwMFx1NjU1OVx1NUI2Nlx1OEJBMlx1OTYwNVx1OTg5MVx1OTA1M1wiLFxuICAgICAgICBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vcnNzLnhtbFwiLFxuICAgICAgICBpY29uOiBcIi9haXljLnN2Z1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJQeXRob24gMXYxLEFJXHU2MEE2XHU1MjFCLFx1NEUwMFx1NUJGOVx1NEUwMCxQeXRob24sXHU3RjE2XHU3QTBCXHU0RTAwXHU1QkY5XHU0RTAwLEMrKyxKYXZhLEFJLFx1NEVCQVx1NURFNVx1NjY3QVx1ODBGRCxcdTlFQzRcdTVCQjZcdTVCOUQsUHl0aG9uXHU0RTAwXHU1QkY5XHU0RTAwXHU2NTU5XHU1QjY2XCIsXG5cbiAgICAgIH0sXG5cbiAgICB9LFxuXG4gICAgYmxvZzogdHJ1ZSxcbiAgICBjb21tZW50OiB7XG4gICAgICBwcm92aWRlcjogXCJXYWxpbmVcIixcbiAgICAgIHNlcnZlclVSTDogXCJodHRwczovL3dhbGluZS5ib3JuZm9ydGhpcy5jbi9cIixcbiAgICAgIHJlYWN0aW9uOiBbXG4gICAgICAgICcvV2FsaW5lL3RpZWJhL3RpZWJhX2FncmVlLnBuZycsXG4gICAgICAgICcvV2FsaW5lL3RpZWJhL3RpZWJhX3N1bmdsYXNzZXMucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvdGllYmFfcGlja19ub3NlLnBuZycsXG4gICAgICAgICcvV2FsaW5lL3RpZWJhL3RpZWJhX2F3a3dhcmQucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvMWY2MTMucG5nJyxcbiAgICAgICAgJy9XYWxpbmUvdGllYmEvMWY2MGYucG5nJyxcbiAgICAgIF0sXG4gICAgICBjb21tZW50OiB0cnVlLCAvLyBcdThCQzRcdThCQkFcdTY1NzBcdTdFREZcdThCQTFcbiAgICAgIHBhZ2V2aWV3OiB0cnVlLCAvLyBcdTZENEZcdTg5QzhcdTkxQ0ZcdTdFREZcdThCQTFcbiAgICAgIG5vQ29weXJpZ2h0OiB0cnVlLFxuICAgICAgZGFyazogXCJhdXRvXCIsXG4gICAgfSxcbiAgICAvLyBJZiB5b3UgZG9uXHUyMDE5dCBuZWVkIGNvbW1lbnQgZmVhdHVyZSwgeW91IGNhbiByZW1vdmUgZm9sbG93aW5nIG9wdGlvblxuICAgIC8vIFRoZSBmb2xsb3dpbmcgY29uZmlnIGlzIGZvciBkZW1vIE9OTFksIGlmIHlvdSBuZWVkIGNvbW1lbnQgZmVhdHVyZSwgcGxlYXNlIGdlbmVyYXRlIGFuZCB1c2UgeW91ciBvd24gY29uZmlnLCBzZWUgY29tbWVudCBwbHVnaW4gZG9jdW1lbnRhdGlvbiBmb3IgZGV0YWlscy5cbiAgICAvLyBUbyBhdm9pZCBkaXN0dXJiaW5nIHRoZSB0aGVtZSBkZXZlbG9wZXIgYW5kIGNvbnN1bWluZyBoaXMgcmVzb3VyY2VzLCBwbGVhc2UgRE8gTk9UIHVzZSB0aGUgZm9sbG93aW5nIGNvbmZpZyBkaXJlY3RseSBpbiB5b3VyIHByb2R1Y3Rpb24gZW52aXJvbm1lbnQhISEhIVxuICAgIC8vIGNvbW1lbnQ6IHtcbiAgICAvLyAgIC8qKlxuICAgIC8vICAgICogVXNpbmcgR2lzY3VzXG4gICAgLy8gICAgKi9cbiAgICAvLyAgIC8vIHByb3ZpZGVyOiBcImdpc2N1c1wiLFxuICAgIC8vICAgLy8gcmVwbzogXCJCb3JuZm9ydGhpc0hKQi9jb21tZW50XCIsXG4gICAgLy8gICAvLyByZXBvSWQ6IFwiUl9rZ0RPSFRKRVN3XCIsXG4gICAgLy8gICAvLyBjYXRlZ29yeTogXCJBbm5vdW5jZW1lbnRzXCIsXG4gICAgLy8gICAvLyBjYXRlZ29yeUlkOiBcIkRJQ19rd0RPSFRKRVM4NENPX1F6XCIsXG5cbiAgICAvLyAgIC8qKlxuICAgIC8vICAgICogVXNpbmcgVHdpa29vXG4gICAgLy8gICAgKi9cbiAgICAvLyAgIC8vIHByb3ZpZGVyOiBcIlR3aWtvb1wiLFxuICAgIC8vICAgLy8gZW52SWQ6IFwiaHR0cHM6Ly90d2lrb28uY2NrbmJjLnZlcmNlbC5hcHBcIixcblxuICAgIGNvbXBvbmVudHM6IHtcbiAgICAgIGNvbXBvbmVudHM6IFtcbiAgICAgICAgXCJWUENhcmRcIixcbiAgICAgICAgXCJQREZcIixcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIGNvcHlyaWdodDoge1xuICAgICAgYXV0aG9yOiBcIkFJXHU2MEE2XHU1MjFCXCIsXG4gICAgICBnbG9iYWw6IHRydWUsXG4gICAgICB0cmlnZ2VyTGVuZ3RoOiAxMDAwLFxuICAgICAgZGlzYWJsZUNvcHk6IGZhbHNlLFxuICAgICAgZGlzYWJsZVNlbGVjdGlvbjogZmFsc2UsXG4gICAgfSxcbiAgfSxcbn0pO1xuXG5leHBvcnQgZGVmYXVsdCAoYXBwOiBQYXJhbWV0ZXJzPHR5cGVvZiB0aGVtZT5bMF0pID0+IHtcbiAgLy8gVGhlbWUgSG9wZSByYy4xMDcgZW5hYmxlcyB0aGUgZ2l0IHBsdWdpbiBkdXJpbmcgYnVpbGRzIGV2ZW4gd2hlblxuICAvLyBgcGx1Z2lucy5naXRgIGlzIGZhbHNlLiBSZWdpc3RlciBhbiBpbmVydCBwbHVnaW4gd2l0aCB0aGUgc2FtZSBuYW1lIGZpcnN0XG4gIC8vIHNvIHRoZSB0aGVtZSBjYW5ub3QgcmVnaXN0ZXIgYW5kIGV4ZWN1dGUgQHZ1ZXByZXNzL3BsdWdpbi1naXQuXG4gIGFwcC51c2UoeyBuYW1lOiBcIkB2dWVwcmVzcy9wbHVnaW4tZ2l0XCIgfSk7XG5cbiAgcmV0dXJuIHRoZW1lKGFwcCk7XG59OyIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ib3JuZm9ydGhpcy9EZXNrdG9wL2Jvcm5mb3J0aGlzLmNuL2RvY3MvLnZ1ZXByZXNzL25hdmJhci50c1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvYm9ybmZvcnRoaXMvRGVza3RvcC9ib3JuZm9ydGhpcy5jbi9kb2NzLy52dWVwcmVzcy9uYXZiYXIudHNcIjtpbXBvcnQgeyBuYXZiYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhOYXZiYXIgPSBuYXZiYXIoW1xuICAvLyBcIi9cIixcbiAgLy8geyBcbiAgLy8gICB0ZXh0OiBcIlx1NTE3M1x1NEU4RVx1NjBBNlx1NTIxQlwiLFxuICAvLyAgIGljb246IFwicGVvcGxlXCIsXG4gIC8vICAgbGluazogXCIvaW50cm9cIixcbiAgLy8gfSxcbiAgeyBcbiAgICB0ZXh0OiBcIk1lbW9pcnNcIixcbiAgICBpY29uOiBcImJsb2dcIixcbiAgICBsaW5rOiBcIi9NZW1vaXJzLmh0bWxcIixcbiAgfSxcbiAgeyBcbiAgICB0ZXh0OiBcIkNvbHVtblwiLFxuICAgIGljb246IFwiY29sdW1uc3podWFubGFuXCIsXG4gICAgbGluazogXCIvY29sdW1uXCIsXG4gICAgLy8gY2hpbGRyZW46IFtcbiAgICAgIC8vIHsgXG4gICAgICAgIC8vIHRleHQ6IFwiSVQgXHU2NTg3XHU2ODYzXHU0RTNCXHU5ODc1XCIsXG4gICAgICAgIC8vIGxpbms6IFwiL2NvbHVtbi5tZFwiLFxuICAgICAgICAvLyBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vIFwiL2NvbHVtbi5tZFwiLFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTc5QzFcdTY1NTlcdTU2REVcdTY1M0VcIiwgaWNvbjogXCJiaWFvc2hpbGVpX2h1aWZhbmdcIiwgbGluazogXCIvY29sdW1uL3BsYXliYWNrL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUHl0aG9uIFx1NTQwOFx1OTZDNlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIi9jb2x1bW4vcHkvUHl0aG9uX3R1dG9yaWFsL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUHl0aG9uIFx1NzlDMVx1NjU1OVwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIi9jb2x1bW4vcHkvYmFzZXF1ZXN0aW9uL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiV2ViIFx1NEUxM1x1NjgwRlwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIi9jb2x1bW4vd2ViL2NhdGFsb2d1ZS5odG1sXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJQeXRob24gXHU1MjlFXHU1MTZDXHU4MUVBXHU1MkE4XHU1MzE2XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9weWF1dG9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1OTg5OFx1ODlFM1wiLCBpY29uOiBcImJpYW5jaGVuZy0wMVwiLCBsaW5rOiBcIi9jb2x1bW4vdGlqaWVcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NTE2Q1x1NUYwMFx1OEJGRVx1OEQ0NFx1NjU5OVwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCIvY29sdW1uL3B5YXV0by9na2svXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTdGMTZcdTdBMEJcdTYwMURcdTdFRjRcIiwgaWNvbjogXCJzaXdlaVwiLCBsaW5rOiBcIi9jb2x1bW4vUHJvZ3JhbW1pbmd0aGlua2luZy9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1OTZGNlx1NTdGQVx1Nzg0MFx1NUI2Nlx1NEU2MFx1NjczQVx1NTY2OFx1NUI2Nlx1NEU2MFwiLCBpY29uOiBcIl9yZW5nb25nemhpbmVuZ1wiLCBsaW5rOiBcIi9jb2x1bW4vVGVuc29yRmxvdy9cdTk2RjZcdTU3RkFcdTc4NDBcdTVCOUVcdTYyMThcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjAvXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcIiwgaWNvbjogXCJ6aHV6aHVhbmd0dVwiLCBsaW5rOiBcIi9jb2x1bW4vZGF0YV9hbmFseXNpcy93ZWVrMS8wMVwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1XCIsIGljb246IFwic2h1anVqaWVnb3UtMDFcIiwgbGluazogXCIvY29sdW1uL2RhdGEtc3RydWN0dXJlL3dlZWsxLzAxXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJQeXRob24gNjAgRGF5XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9weXRob242MC8wMVwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiQUlcdTYwQTZcdTUyMUJcdTAwQjdcdTU5MjlcdTZDNjBcdThCQTFcdTUyMTJcIiwgaWNvbjogXCJkaWFuY2hpMVwiLCBsaW5rOiBcIi9jb2x1bW4vdGlhbmNoaS9QeXRob24vUHl0aG9uMDFcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIkphdmFcdTRGNTNcdTdDRkJcdThCRkVcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiL2NvbHVtbi9KYXZhXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCNzF2MVwiLCBpY29uOiBcIjF2MS00XCIsIGxpbms6IFwiLzF2MS9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVx1NTE2NVx1OTVFOFx1OEJGRVwiLCBpY29uOiBcImNhbWVyYWFkZFwiLCBsaW5rOiBcIi9jb2x1bW4vXHU2NDQ0XHU1RjcxXHU1MTY1XHU5NUU4XHU4QkZFL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUHl0aG9uXHU2ODM4XHU1RkMzXHU2MjgwXHU2NzJGXHU0RTBFXHU1QjlFXHU2MjE4XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiL2NvbHVtbi9QeXRob24tY29yZS10ZWNobm9sb2d5LWFuZC1wcmFjdGljZS8wMVwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU0RUJBXHU1REU1XHU2NjdBXHU4MEZEXHU1N0ZBXHU3ODQwXHU4QkZFXCIsIGljb246IFwiX3Jlbmdvbmd6aGluZW5nXCIsIGxpbms6IFwiL2NvbHVtbi9CYXNpYy1jb3Vyc2Utb2YtYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2VcIn0sXG4gICAgICAgIC8vIF1cbiAgICAgIC8vIH0sXG4gICAgICAvLyB7IFxuICAgICAgLy8gICB0ZXh0OiBcIlx1N0EwQlx1NUU4Rlx1NTQ1OFx1NzY4NFx1NzlDMVx1NjIzRlx1ODNEQ1wiLFxuICAgICAgLy8gICBjaGlsZHJlbjogW1xuICAgICAgLy8gICAgIHsgdGV4dDogXCJcdTc5QzFcdTYyM0ZcdTgzRENcIiwgbGluazogXCIvY29sdW1uL2Nvb2tkaW5uZXIvMDEteW9ndXJ0XCJ9LFxuICAgICAgLy8gICBdXG4gICAgICAvLyB9LFxuICAgICAgLy8ge1xuICAgICAgICAvLyB0ZXh0OiBcIlx1ODI3QVx1NjcyRlwiLFxuICAgICAgICAvLyBjaGlsZHJlbjogW1xuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTY0NDRcdTVGNzFcIiwgaWNvbjogXCJjYW1lcmFhZGRcIiwgbGluazogXCIvY29sdW1uL3Bob3RvZ3JhcGh5L1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU0RTk0XHU1NEU1XHU2NDQ0XHU1RjcxXHU4QkZFXHU1ODAyXCIsIGljb246IFwiY2FtZXJhYWRkXCIsIGxpbms6IFwiL2NvbHVtbi9GaWZ0aF9icm90aGVyX3Bob3RvZ3JhcGh5X2NsYXNzL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUFBUIFx1NjU1OVx1N0EwQlwiLCBpY29uOiBcIlBQVFwiLCBsaW5rOiBcIi9jb2x1bW4vUFBUL1wifSxcbiAgICAgICAgLy8gXSxcbiAgICAgIC8vIH0sXG4gICAgICAvLyB7XG4gICAgICAvLyAgIHRleHQ6IFwiXHU1Rjk3XHU1MjMwXCIsXG4gICAgICAvLyAgIGNoaWxkcmVuOiBbXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1ODU5Qlx1NTE0Nlx1NEUzMFx1NzY4NFx1N0VDRlx1NkQ0RVx1NUI2Nlx1OEJGRVwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCIvZGVkYW8vMDEtWHVlLVpoYW9mZW5ncy1lY29ub21pY3MtY2xhc3MvXCJ9LFxuICAgICAgLy8gICBdXG4gICAgICAvLyB9XG4gICAgLy8gXVxuICB9LFxuICB7IFxuICAgIHRleHQ6IFwiQ29tbXVuaXR5XCIsIFxuICAgIGljb246IFwic2hlcXUtamlodW9cIiwgXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTU3MjhcdTdFQkZcdTVFNzNcdTUzRjBcIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUHl0aG9uIFx1NTcyOFx1N0VCRlx1NUU3M1x1NTNGMFwiLCBpY29uOiBcImVkaXRcIiwgbGluazogXCJodHRwczovL3B5LmJvcm5mb3J0aGlzLmNuL1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlB5dGhvbiBPbmxpbmVcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJodHRwczovL3B5LmJvcm5mb3J0aGlzLmNuL1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkRhdGEgU3RydWN0dXJlXCIsIGljb246IFwiZGlzY292ZXJcIiwgbGluazogXCJodHRwczovL2h1YW5namlhYmFvYWl5Yy5naXRlZS5pby92aXN1YWxnby9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIk1hcmtkb3duIE9ubGluZVwiLCBpY29uOiBcIm1hcmtkb3duXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9tYXJrZG93bi1lZGl0b3IvIFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiSnNvbiBPbmxpbmVcIiwgaWNvbjogXCJqc29uXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9qc29uL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwibTN1OCBQbGF5XCIsIGljb246IFwicHJldmlld1wiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vbTN1OFwifSxcbiAgICAgICAgICB7IHRleHQ6IFwiRGVjaW1hbCBvbmxpbmUgY29udmVyc2lvblwiLCBpY29uOiBcInRvb2xcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3Rvb2wvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJIVE1MIE9ubGluZVwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vaHRtbF9vbmxpbmUvXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTY4M0NcdTVGMEZcdTU3MjhcdTdFQkZcdThGNkNcdTYzNjJcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCJodHRwczovL2NvbnZlcnRpby5jby96aC9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NTcyOFx1N0VCRlx1OEY2Q1x1NjM2MjJcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCJodHRwczovL3d3dy5hY29udmVydC5jb20vY24vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJQeXRob25cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3B5dGhvbi8jL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUHl0aG9uXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9weXRob24vaW5kZXguaHRtbCMvXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJmb250c1wiLCBsaW5rOiBcImh0dHBzOi8vZm9udHNodWIucHJvL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiaWxvdmVpbWdcIiwgaWNvbjogXCItbG92ZVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3Lmlsb3ZlaW1nLmNvbS96aC1jblwifSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHtcbiAgICAgIC8vICAgdGV4dDogXCJcdTY1ODdcdTdBRTBcdTVFNzNcdTUzRjBcIixcbiAgICAgIC8vICAgY2hpbGRyZW46IFtcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiQ1NETlwiLCBsaW5rOiBcImh0dHBzOi8vYWl5dWVjaHVhbmcuYmxvZy5jc2RuLm5ldC9cIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1NzdFNVx1NEU0RVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9wZW9wbGUvYWl5dWVjaHVhbmdcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1NjM5OFx1OTFEMVwiLCBsaW5rOiBcImh0dHBzOi8vanVlamluLmNuL3VzZXIvMjMwNTA1MTIyMjM0NDA2MVwifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiXHU2MDFEXHU1NDI2XCIsIGxpbms6IFwiaHR0cHM6Ly9zZWdtZW50ZmF1bHQuY29tL3UvYWl5Y1wifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiNTFDVE9cdTUzNUFcdTVCQTJcIiwgbGluazogXCJodHRwczovL2Jsb2cuNTFjdG8uY29tL2FpeWNcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIm1lZGl1bVwiLCBsaW5rOiBcImh0dHBzOi8vbWVkaXVtLmNvbS9AYWl5dWVjaHVhbmdcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIm1lZGl1bVwiLCBsaW5rOiBcImh0dHBzOi8vbWVkaXVtLmJvcm5mb3J0aGlzLmNuXCJ9LFxuICAgICAgLy8gICAgIHsgdGV4dDogXCJcdTgxN0VcdThCQUZcdTRFOTFcdTc5M0VcdTUzM0FcIiwgbGluazogXCJodHRwczovL2Nsb3VkLnRlbmNlbnQuY29tL2RldmVsb3Blci91c2VyLzcxMTE2MTBcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1OTYzRlx1OTFDQ1x1NEU5MVx1NzkzRVx1NTMzQVwiLCBsaW5rOiBcImh0dHBzOi8vZGV2ZWxvcGVyLmFsaXl1bi5jb20vcHJvZmlsZS9leHBlcnQvYTY1b2QzbndvaGc0aVwifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiXHU1MzVBXHU1QkEyXHU1NkVEXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuY25ibG9ncy5jb20vYm9ybmZvcnRoaXMvXCJ9LFxuICAgICAgLy8gICAgIHsgdGV4dDogXCJcdTdCODBcdTRFNjZcIiwgbGluazogXCJodHRwczovL3d3dy5qaWFuc2h1LmNvbS91LzdkZWY4ODhiOGMxMlwifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiXHU1OEE4XHU1OTI5XHU4RjZFXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubW9kYi5wcm8vdS80ODI0NDFcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NzU1OVx1OEEwMFwiLCBsaW5rOiBcImh0dHBzOi8vY29tbWVudC5ib3JuZm9ydGhpcy5jbi9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NjBBNlx1NTE2RVx1NUMwRlx1NjgwOFwiLCBsaW5rOiBcImh0dHBzOi8vY29tbWVudC5ibG92ZXkuYXJ0L1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU4QkM0XHU4QkJBXHU3QkExXHU3NDA2XCIsIGxpbms6IFwiaHR0cHM6Ly9jb21tZW50LmJvcm5mb3J0aGlzLmNuL3VpXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJTdGFja292ZXJmbG93XCIsIGxpbms6IFwiaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS91c2Vycy8xOTU1MTE3My9haSVlNiU4MiVhNiVlNSU4OCU5YlwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiTWRuaWNlXCIsIGxpbms6IFwiaHR0cHM6Ly9tZG5pY2UuY29tL3VzZXIvNDE3NzI5NjM4MjI3XCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1OTY4Rlx1N0IxNDFcIiwgbGluazogXCIvcG9zdHMvMTIuaHRtbFwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU5NjhGXHU3QjE0MlwiLCBsaW5rOiBcIi9lc3NheXNcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NjQ0NFx1NUY3MVwiLCBpY29uOiBcImNhbWVyYWFkZFwiLCBsaW5rOiBcImh0dHBzOi8vaHVhbmdqaWFiYW9haXljLmdpdGVlLmlvL2ltZy9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlNlYXJjaFwiLCBsaW5rOiBcImh0dHBzOi8vY3Jhd2xlci5hbGdvbGlhLmNvbS9hZG1pbi9jcmF3bGVyc1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiXHU5ODg2XHU4MkYxXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2Jvcm5mb3J0aGlzL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiQW5kZXJzb25ISkIuZ2l0aHViLmlvXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCL0FuZGVyc29uSEpCLmdpdGh1Yi5pby9pc3N1ZXNcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIjF2MVwiLCBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNvbkhKQi8xdjEvaXNzdWVzXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCN1x1OEMzN1x1NkI0Q1x1NTIwNlx1Njc5MFwiLCBpY29uOiBcImdvb2dsZVwiLCBsaW5rOiBcImh0dHBzOi8vYW5hbHl0aWNzLmdvb2dsZS5jb20vYW5hbHl0aWNzL3dlYi8jL3AzNDU5MTE5NTQvcmVwb3J0cy9pbnRlbGxpZ2VudGhvbWVcIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIkFJXHU2MEE2XHU1MjFCXHUwMEI3XHU3NjdFXHU1RUE2XHU4MDU0XHU3NkRGXCIsIGljb246IFwiYmFpZHUtZmlsbFwiLCBsaW5rOiBcImh0dHBzOi8vdW5pb24uYmFpZHUuY29tL2JxdC8jL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiQUlcdTYwQTZcdTUyMUJcdTAwQjdsZWFybmt1XCIsIGljb246IFwiYmxvZ1wiLCBsaW5rOiBcImh0dHBzOi8vbGVhcm5rdS5jb20vYmxvZy9BbmRlcnNvbkhKQlwifSxcblxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTk2OEZcdTdCMTRcIiwgY2hpbGRyZW46IFt7IHRleHQ6IFwiQUlcdTYwQTZcdTUyMUJcdTk2OEZcdTdCMTQxXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9wb3N0cy8xMi5odG1sXCJ9LCB7IHRleHQ6IFwiXHU5NjhGXHU3QjE0MlwiLCBsaW5rOiBcIi9lc3NheXNcIn1dfSxcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIC8vIHsgXG4gICAgICAvLyAgIHRleHQ6IFwiR2l0XCIsXG4gICAgICAvLyAgIGNoaWxkcmVuOiBbXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIkdpdGh1YlwiLCBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNvbkhKQlwifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiR2l0ZWVcIiwgaWNvbjogXCJnaXRlZVwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0ZWUuY29tL2h1YW5namlhYmFvYWl5Y1wifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwidmVyY2VsXCIsIGljb246IFwiZ2l0ZWVcIiwgbGluazogXCJodHRwczovL3ZlcmNlbC5jb20vXCJ9LFxuICAgICAgLy8gICBdXG4gICAgICAvLyB9LFxuICAgICAgXG4gICAgLy8gXVxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJcdTc5QzFcdTY1NTlcdThCQTFcdTUyMTJcIixcbiAgLy8gICBpY29uOiBcIjF2MS00XCIsXG4gIC8vICAgbGluazogXCJodHRwczovL3dlYi5vbmxpbmUuYm9ybmZvcnRoaXMuY24vVGVzdGVyLzE1NTQuaHRtbFwiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJDb3Vyc2VcIixcbiAgLy8gICBpY29uOiBcImJhbmppa2V0YW5nXCIsXG4gIC8vICAgY2hpbGRyZW46IFtcbiAgLy8gICAgIHsgdGV4dDogXCJcdTdGNTFcdTY2MTNcdTRFOTFcdThCRkVcdTU4MDJcdTRFM0JcdTk4NzVcIiwgaWNvbjogXCJ6aHVhbmppYWtldGFuZy1qaWh1b1wiLCBsaW5rOiBcImh0dHBzOi8vc3R1ZHkuMTYzLmNvbS9wcm92aWRlci80ODAwMDAwMDIyNzcwMjUvY291cnNlLmh0bVwifSxcbiAgLy8gICAgIC8vIHsgdGV4dDogXCJBSVx1NjBBNlx1NTIxQlx1MDBCN1x1OEJCMlx1NUUwOFx1NEUzQlx1OTg3NVwiLCBpY29uOiBcInZpZXdcIiwgbGluazogXCJodHRwczovL20uc3R1ZHkuMTYzLmNvbS91c2VyLzExNDQyNDAwNDQuaHRtXCJ9LFxuICAvLyAgICAgeyB0ZXh0OiBcIjUxQ1RPXCIsIGljb246IFwiemh1YW5qaWFrZXRhbmctamlodW9cIiwgbGluazogXCJodHRwczovL2VkdS41MWN0by5jb20vbGVjdHVyZXIvMTM5NTI1NTIuaHRtbFwifSxcbiAgLy8gICAgIC8vIHsgdGV4dDogXCJcdTVGNTVcdThCRkVcdTYwQjJcdTYwRThcdTdFQ0ZcdTUzODZcIiwgaWNvbjogXCJ6aHVhbmppYWtldGFuZy1qaWh1b1wiLCBsaW5rOiBcIi9SZWNvcmRfdGhlX2NsYXNzXCJ9XG4gIC8vICAgXVxuICAvLyB9LFxuICAvLyB7IFxuICAvLyAgIHRleHQ6IFwiXHU1RjAwXHU2RTkwL1x1OEJBMlx1OTYwNVwiLFxuICAvLyAgIGljb246IFwiaml5dWthaXl1YW5qaWFucm9uZ2thaXl1YW5cIixcbiAgLy8gICBjaGlsZHJlbjogW1xuICAvLyAgICAgeyB0ZXh0OiBcIlx1NUYwMFx1NkU5MFx1NUU5M1wiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImh0dHBzOi8vcHlwaS5vcmcvdXNlci9Cb3JuZm9ydGhpcy9cIiB9LFxuICAvLyAgICAgeyB0ZXh0OiBcIkhUTUxcdTZBMjFcdTcyNDgvXHU2M0QyXHU0RUY2XCIsIGljb246IFwid2ViMVwiLCBsaW5rOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9BbmRlcnNvbkhKQi9ib290c3RyYXBtYlwiIH0sXG4gIC8vICAgICB7IHRleHQ6IFwiRmVlZCBKc29uXCIsIGljb246IFwicnNzXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9mZWVkLmpzb25cIiB9LFxuICAvLyAgICAgeyB0ZXh0OiBcIkZlZWQgQXRvbVwiLCBpY29uOiBcInJzc1wiLCBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY24vYXRvbS54bWxcIiB9LFxuICAvLyAgICAgeyB0ZXh0OiBcIkZlZWQgUnNzXCIsIGljb246IFwicnNzXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9yc3MueG1sXCIgfSxcbiAgLy8gICBdXG4gIC8vIH0sXG4gIHsgXG4gICAgdGV4dDogXCJGcmllbmRzaGlwXCIsXG4gICAgaWNvbjogXCJwZW5neW91cXVhbjNcIiwgXG4gICAgY2hpbGRyZW46IFtcbiAgICAgIHtcbiAgICAgICAgdGV4dDogXCJcdTVGMDBcdTUzRDFcdTY3MkNcdTdBRDlcIiwgXG4gICAgICAgIC8vIGljb246IFwiZGlhZ3JhbVwiLFxuICAgICAgICAvLyBsaW5rOiBcImh0dHBzOi8vYm9ybmZvcnRoaXMuY25cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiVnVlXCIsIGljb246IFwidnVlanNcIiwgbGluazogXCJodHRwczovL3YyLnZ1ZXByZXNzLnZ1ZWpzLm9yZy96aC9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcImhvcGVcdTRFM0JcdTk4OThcIiwgaWNvbjogXCJ2dWVcIiwgbGluazogXCJodHRwczovL3Z1ZXByZXNzLXRoZW1lLWhvcGUuZ2l0aHViLmlvL3YyL3poL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiV2FsaW5lXCIsIGljb246IFwid2FsaW5lXCIsIGxpbms6IFwiaHR0cHM6Ly93YWxpbmUuanMub3JnL1wifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiaWNvbmZvbnRcIiwgbGluazogXCJodHRwczovL3d3dy5pY29uZm9udC5jbi9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIkxlYW5jbG91ZFwiLCBsaW5rOiBcImh0dHBzOi8vbGVhbmNsb3VkLmFwcC9cIn0sXG4gICAgICAgICAgLy8geyB0ZXh0OiBcIlx1NTNEOFx1NjZGNFx1NjVFNVx1NUZEN1wiLCBpY29uOiBcInRpbWVcIiwgbGluazogXCIvY2hhbmdlbG9nXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJWZXJjZWxcIiwgbGluazogXCJodHRwczovL3ZlcmNlbC5jb20vZGFzaGJvYXJkXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJ0dXJpbmdhcGlcIiwgbGluazogXCJodHRwOi8vd3d3LnR1cmluZ2FwaS5jb20vXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCIxdjFcdTVCOThcdTdGNTFcIiwgaWNvbjogXCIxdjEtNFwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LmNsYXNzMXYxLmNvbS9cIn0sXG4gICAgICAgICAgeyB0ZXh0OiBcIlx1NTNDQlx1NjBDNVx1OTRGRVx1NjNBNVwiLCBpY29uOiBcInBlbmd5b3VmaWxsXCIsIGxpbms6IFwiL2ZyaWVuZHNoaXAtbGlua1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiXHU2NTg3XHU3QUUwXHU2RDg5XHU1M0NBXHU4RDQ0XHU2NTk5XCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCL0Jvcm5mb3J0aGlzRGF0YVwifSxcbiAgICAgICAgICAvLyB7IHRleHQ6IFwiUVFcdTVGMDBcdTY1M0VcdTVFNzNcdTUzRjBcIiwgaWNvbjogXCJRUTFcIiwgbGluazogXCJodHRwczovL29wZW4udGVuY2VudC5jb20vXCJ9LFxuICAgICAgICAgIC8vIHsgdGV4dDogXCJcdTVGQUVcdTRGRTFcdTUxNkNcdTRGMTdcdTUzRjdcIiwgaWNvbjogXCJRUTFcIiwgbGluazogXCIvV2VjaGF0U2hhcmUvaW5kZXguaHRtbFwifSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgICB7IFxuICAgICAgICB0ZXh0OiBcIlx1NUJBMVx1N0Y4RVwiLFxuICAgICAgICBpY29uOiBcImV5ZVwiLFxuICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgIHsgdGV4dDogXCJVbnNwbGFzaFwiLCBpY29uOiBcInBpY1wiLCBsaW5rOiBcImh0dHBzOi8vdW5zcGxhc2guY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwiRHJpYmJibGVcIiwgaWNvbjogXCJlbW9qaVwiLCBsaW5rOiBcImh0dHBzOi8vZHJpYmJibGUuY29tL1wifSxcbiAgICAgICAgICB7IHRleHQ6IFwib3BlbnByb2Nlc3NpbmdcIiwgaWNvbjogXCJWSXNoZWppXCIsIGxpbms6IFwiaHR0cHM6Ly9vcGVucHJvY2Vzc2luZy5vcmcvXCJ9LFxuICAgICAgICAgIHsgdGV4dDogXCJkcmliYmJsZVwiLCBpY29uOiBcImNodWFuZ3lpXCIsIGxpbms6IFwiaHR0cHM6Ly9kcmliYmJsZS5jb20vXCJ9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgeyBcbiAgICAgICAgdGV4dDogXCJcdTVGMDBcdTZFOTAvXHU4QkEyXHU5NjA1XCIsXG4gICAgICAgIGljb246IFwiaml5dWthaXl1YW5qaWFucm9uZ2thaXl1YW5cIixcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7IHRleHQ6IFwiT3BlbiBsaWJyYXJ5XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiaHR0cHM6Ly9weXBpLm9yZy91c2VyL0Jvcm5mb3J0aGlzL1wiIH0sXG4gICAgICAgICAgeyB0ZXh0OiBcIkhUTUwgVGVtcGxhdGVcIiwgaWNvbjogXCJ3ZWIxXCIsIGxpbms6IFwiaHR0cHM6Ly9naXRodWIuY29tL0FuZGVyc29uSEpCL2Jvb3RzdHJhcG1iXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiRmVlZCBKc29uXCIsIGljb246IFwicnNzXCIsIGxpbms6IFwiaHR0cHM6Ly9ib3JuZm9ydGhpcy5jbi9mZWVkLmpzb25cIiB9LFxuICAgICAgICAgIHsgdGV4dDogXCJGZWVkIEF0b21cIiwgaWNvbjogXCJyc3NcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL2F0b20ueG1sXCIgfSxcbiAgICAgICAgICB7IHRleHQ6IFwiRmVlZCBSc3NcIiwgaWNvbjogXCJyc3NcIiwgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL3Jzcy54bWxcIiB9LFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB0ZXh0OiBcIkFJXHU1QjlFXHU5QThDXHU1QkE0XCIsXG4gICAgICAgIGljb246IFwiZ2VtaW5pLWFpXCIsXG4gICAgICAgIGxpbms6IFwiaHR0cHM6Ly9haS5ib3JuZm9ydGhpcy5jbi9cIlxuICAgICAgfVxuICAgICAgLy8geyBcbiAgICAgIC8vICAgdGV4dDogXCJcdTYwQTZcdTUyMUJcdTg5QzZcdTk4OTFcdTVFNzNcdTUzRjBcIiwgXG4gICAgICAvLyAgIGljb246IFwicGxheVwiLFxuICAgICAgLy8gICBjaGlsZHJlbjogW1xuICAgICAgLy8gICAgIHsgdGV4dDogXCJcdTU0RDRcdTU0RTlcdTU0RDRcdTU0RTlcIiwgbGluazogXCJodHRwczovL3NwYWNlLmJpbGliaWxpLmNvbS80MDU5NjE3MDVcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIllvdVR1YmVcIiwgbGluazogXCJodHRwczovL3d3dy55b3V0dWJlLmNvbS9jaGFubmVsL1VDVDUyNUZrNzR3X2w5UGswNk94a0x4Z1wifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiXHU2Mjk2XHU5N0YzXCIsIGxpbms6IFwiaHR0cHM6Ly93d3cuZG91eWluLmNvbS91c2VyL01TNHdMakFCQUFBQVhNaWV6YzFUbUJ4ejB6RnhlcW1XSG8zSnBjZUxYbE1DaFRMVTRjSEZNQ0FcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1ODk3Rlx1NzREQ1x1ODlDNlx1OTg5MVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3Lml4aWd1YS5jb20vaG9tZS8yMDQ5MDg4OTI4MTAwMDYxXCJ9LFxuICAgICAgLy8gICAgIHsgdGV4dDogXCJcdTRFQ0FcdTY1RTVcdTU5MzRcdTY3NjFcIiwgbGluazogXCJodHRwczovL3d3dy50b3V0aWFvLmNvbS9jL3VzZXIvdG9rZW4vTVM0d0xqQUJBQUFBMGxMNUFCMXFjcWpIVFJ6WnNrVmVwSXBIcV9HbGFEWnFTczVERzFxalJwQ0J4eVhFbmlTR0lHaUlJRUZYclhtZS8/c291cmNlPW1pbmVfaG9tZSZsb2dfZnJvbT0xYzcyNmRkYmM2NWY2XzE2NTUzNzYzNDU0OTEmd2lkPTE2NTUzNzY0MDA2NjRcIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIkNTRE4gXHU4OUM2XHU5ODkxXCIsIGxpbms6IFwiaHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzMzMjU0NzY2P3R5cGU9dmlkZW9cIn0sXG4gICAgICAvLyAgICAgeyB0ZXh0OiBcIlx1NzdFNVx1NEU0RVx1ODlDNlx1OTg5MVwiLCBsaW5rOiBcImh0dHBzOi8vd3d3LnpoaWh1LmNvbS9wZW9wbGUvYWl5dWVjaHVhbmcvenZpZGVvc1wifSxcbiAgICAgIC8vICAgICB7IHRleHQ6IFwiXHU2NDQ0XHU1RjcxXHU4QkZFXHU3QTBCXCIsIGxpbms6IFwiaHR0cHM6Ly9saXN0LnlvdWt1LmNvbS9hbGJ1bWxpc3Qvc2hvdy9pZF82ODg1NzA1MFwifSxcbiAgICAgIC8vICAgXVxuICAgICAgLy8gfSxcbiAgICBdLFxuICB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJOb3dcIixcbiAgLy8gICBpY29uOiBcInBsYW5lXCIsIFxuICAvLyAgIGxpbms6IFwiL05vd1wiLFxuICAvLyB9LFxuICAvLyB7XG4gIC8vICAgdGV4dDogXCJcdTU5N0RcdTU5NDdcdTYyMTFcdTY3MDBcdThGRDFcdTUwNUFcdTU1NjVcdUZGMUZcIixcbiAgLy8gICBpY29uOiBcInBsYW5lXCIsXG4gIC8vICAgY2hpbGRyZW46IFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgdGV4dDogXCJOb3dcIixcbiAgLy8gICAgICAgaWNvbjogXCJwbGFuZVwiLCBcbiAgLy8gICAgICAgbGluazogXCIvTm93Lm1kXCIsXG4gIC8vICAgICB9LFxuICAvLyAgICAge1xuICAvLyAgICAgICB0ZXh0OiBcIlBsYW5cIixcbiAgLy8gICAgICAgaWNvbjogXCJwbGFuZVwiLCBcbiAgLy8gICAgICAgbGluazogXCIvcGxhblwiLFxuICAvLyAgICAgfSxcbiAgLy8gICBdXG4gIC8vIH0sXG4gIFxuICBcbiAgLy8ge1xuICAvLyAgIHRleHQ6IFwiXHU4QzM3XHU2QjRDXHU1QjY2XHU2NzJGXHU1MkE5XHU2MjRCXCIsXG4gIC8vICAgaWNvbjogXCJjaHJvbWVcIiwgXG4gIC8vICAgbGluazogXCIvdnBuXCIsXG4gIC8vIH0sXG4gIC8vIFwiL3BvcnRmb2xpb1wiXG5dKTtcbiIsICJjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZGlybmFtZSA9IFwiL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3NcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9ib3JuZm9ydGhpcy9EZXNrdG9wL2Jvcm5mb3J0aGlzLmNuL2RvY3MvLnZ1ZXByZXNzL3NpZGViYXIudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2Jvcm5mb3J0aGlzL0Rlc2t0b3AvYm9ybmZvcnRoaXMuY24vZG9jcy8udnVlcHJlc3Mvc2lkZWJhci50c1wiO2ltcG9ydCB7IHNpZGViYXIgfSBmcm9tIFwidnVlcHJlc3MtdGhlbWUtaG9wZVwiO1xuXG5leHBvcnQgY29uc3QgemhTaWRlYmFyID0gc2lkZWJhcih7XG5cdFwiL2VuL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9cIjogW1xuXHRcdFwiXCIsXG5cdFx0Ly8geyB0ZXh0OiBcIkhvbWVcIiwgaWNvbjogXCJzaG91eWVcIiwgbGlrZTogXCJcIn0sXG5cdFx0Ly8geyB0ZXh0OiBcIkFib3V0IE1lXCIsIGljb246IFwic2hvdXllXCIsIGxpa2U6IFwiaW50cm9cIn0sXG5cdFx0XCJpbnRyb1wiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMXYxIEFib3V0XCIsXG5cdFx0XHRpY29uOiBcIjF2MS0zXCIsXG5cdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NzlDMVx1NjU1OVx1N0IxNFx1OEJCMFwiLFxuXHRcdFx0XHRcdGljb246IFwiMXYxLTRcIixcblx0XHRcdFx0XHRsaW5rOiBcIi8xdjEvXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlB5dGhvblx1NEUwMFx1NUJGOVx1NEUwMFx1NjU1OVx1NUI2NlwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0bGluazogXCJvbmVweXRob25cIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiUHl0aG9uIDF2MVwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0bGluazogXCJweXRob24xdjFcIixcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NEY1M1x1N0NGQlx1OEJGRVwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0bGluazogXCIxdjEtdHhrXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdFwiTm90aWNlXCIsXG5cdFx0XHRcdFwiQ2xhc3MtZ3VpZGVcIixcblx0XHRcdFx0XCJhaS1tb2RlbFwiLFxuXHRcdFx0XHQvLyBcIlNjYWxlLW9mLWNoYXJnZXNcIixcblx0XHRcdFx0XCJtYXRoXCIsXG5cdFx0XHRcdC8vIFwiVklQXCIsXG5cdFx0XHRcdFwiQUktZHJhd2luZ1wiLFxuXHRcdFx0XHQvLyB7XG5cdFx0XHRcdC8vIFx0dGV4dDogXCJDb2x1bW5cIixcblx0XHRcdFx0Ly8gXHRpY29uOiBcImNvbHVtbnN6aHVhbmxhblwiLFxuXHRcdFx0XHQvLyBcdGxpbms6IFwiL2NvbHVtbi5tZFwiLFxuXHRcdFx0XHQvLyB9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkxpZmVcIixcblx0XHRcdGljb246IFwibGlmZVwiLFxuXHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImZyaWVuZHNoaXAtbGlua1wiLFxuXHRcdFx0XHRcInBsYW5cIixcblx0XHRcdFx0XCJOb3dcIixcblx0XHRcdFx0XCJhYm91dGJsb2dcIixcblx0XHRcdFx0XCJ3aHktYmxvZ1wiLFxuXHRcdFx0XHRcImVzc2F5c1wiLFxuXHRcdFx0XHRcInBhc3N3b3JkXCIsXG5cdFx0XHRcdC8vIFwiY2hhdGdwdFwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0Ly8ge1xuXHRcdC8vIFx0dGV4dDogXCJPdGhlclwiLFxuXHRcdC8vIFx0aWNvbjogXCJ0b29sXCIsXG5cdFx0Ly8gXHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHQvLyBcdGNoaWxkcmVuOiBbXG5cdFx0Ly8gXHRcdFwiUmVjb3JkX3RoZV9jbGFzc1wiLFxuXHRcdC8vIFx0XHQvLyBcInZwblwiLFxuXHRcdC8vIFx0XHRcImhvbWVcIixcblx0XHQvLyBcdFx0XCJEb3dubG9hZFwiLFxuXHRcdC8vIFx0XVxuXHRcdC8vIH0sXG5cdFx0eyB0ZXh0OiBcIlx1N0Y1MVx1N0FEOVx1NTIwNlx1NEVBQlwiLCBpY29uOiBcIkpDXzA1NFwiLCBsaW5rOiBcImxlYXJuaW5nX3dlYi9cIiB9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQWR2ZXJ0aXNpbmdcIixcblx0XHRcdGljb246IFwiZ3VhbmdnYW9wYWlcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXG5cdFx0XHRwcmVmaXg6IFwiYWR2ZXJ0aXNpbmdcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiUHl0aG9uMXYxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cdFwiL2NvbHVtbi9yZXNlYXJjaC1hYmlsaXR5L1wiOiBbXG5cdFx0XCIwMC1XaHktZG8teW91LW5lZWQtdG8taGF2ZS1yZXNlYXJjaC1za2lsbHNcIlxuXHRdLFxuXHRcIi8xdjEvODgtU2ltcGxlLXN3aW1taW5nLWxlZWNoL1wiOiBbXG5cdFx0eyB0ZXh0OiBcImxlY3R1cmUwMVwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImxlY3R1cmUwMVwiIH0sXG5cdFx0eyB0ZXh0OiBcImxlY3R1cmUwMlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImxlY3R1cmUwMlwiIH0sXG5cdFx0eyB0ZXh0OiBcIkV4YW1cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJsZWN0dXJlMDNcIiB9LFxuXHRcdHsgdGV4dDogXCJFeGFtMlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcImxlY3R1cmUwNFwiIH0sXG5cdF0sXG5cdFwidHJhdmVsXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL2NvbHVtbi9BSVx1NTkyN1x1NkEyMVx1NTc4Qlx1NUI5RVx1NjIxOFx1OUFEOFx1NjI0Qlx1OEJGRS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEXCIsXG5cdFx0XHRpY29uOiBcInJlbmdvbmd6aGluZW5nXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAwLVx1NUYwMFx1N0JDN1x1OEJDRC1cdTVGMDBcdTUzRDFcdTVERTVcdTdBMEJcdTVFMDhcdTU5ODJcdTRGNTVcdThGREJcdTk2MzZcdTRFM0FBSVx1NUU5NFx1NzUyOFx1NTc4Qlx1NEVCQVx1NjI0RFx1RkYxRlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFMDBcdTdBRTBcdUZGMUFcdTVDMEZcdThCRDVcdTcyNUJcdTUyMDBcdUZGMENcdTc0MDZcdTg5RTNcdTU3RkFcdTc4NDBcdTY5ODJcdTVGRjVcIixcblx0XHRcdGljb246IFwicmVuZ29uZ3poaW5lbmdcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtXHU2RDFFXHU1QkRGXHU2NzJDXHU4RDI4XHVGRjFBXHU0RUNFXHU1REU1XHU3QTBCXHU1QjY2XHU4OUQyXHU1RUE2XHU3NzBCQ2hhdEdQVFx1NEUzQVx1NEVDMFx1NEU0OFx1NEYxQVx1NUQxQlx1OEQ3N1wiLFxuXHRcdFx0XHRcIjAyLVx1NUI2Nlx1NTk3RFx1NjNEMFx1NzkzQVx1NURFNVx1N0EwQlx1RkYwQ1x1OEY3Qlx1Njc3RVx1OUE3RVx1OUE2RFx1NTkyN1x1NkEyMVx1NTc4QlwiLFxuXHRcdFx0XHRcIjAzLVx1NjNBMlx1N0QyMlx1NjY3QVx1ODBGRFx1NEY1M1x1NEUxNlx1NzU0Q1x1RkYxQUxhbmdDaGFpblx1NEUwRVJBR1x1NjhDMFx1N0QyMlx1NTg5RVx1NUYzQVx1NzUxRlx1NjIxMFwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdThEODVcdTcxQzNcdTVCOUVcdTYyMThcdUZGMENcdTZERjFcdTVFQTZcdTczQTlcdThGNkMgQUkgXHU2QTIxXHU1NzhCXCIsXG5cdFx0XHRpY29uOiBcInJlbmdvbmd6aGluZW5nXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjA0LVx1NjcyQ1x1NTczMFx1OTBFOFx1N0Y3Mlx1RkYxQVx1NTk4Mlx1NEY1NVx1NjcyQ1x1NTczMFx1NTMxNlx1OTBFOFx1N0Y3Mlx1NUYwMFx1NkU5MFx1NTkyN1x1NkEyMVx1NTc4QkNoYXRHTE0zLTZCXHVGRjFGXCIsXG5cdFx0XHRcdFwiMDUtXHU1OTI3XHU2QTIxXHU1NzhCXHU1RkFFXHU4QzAzXHVGRjFBXHU1OTgyXHU0RjU1XHU1N0ZBXHU0RThFQ2hhdEdMTTMtNkJfTG9yYVx1Njc4NFx1NUVGQVx1NTdGQVx1NjcyQ1x1NkNENVx1NUY4Qlx1NUUzOFx1OEJDNlx1NTkyN1x1NkEyMVx1NTc4Qlx1RkYxRlwiLFxuXHRcdFx0XHRcIjA2LVJBR1x1NUI5RVx1NjIxOFx1RkYxQVx1NTdGQVx1NEU4RUNoYXRHTE0zLTZCK0xhbmdDaGFpbitGYWlzc1x1NjQyRFx1NUVGQVx1NEYwMVx1NEUxQVx1NTE4NVx1OTBFOFx1NzdFNVx1OEJDNlx1NUU5M1wiXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlRpcHNcIixcblx0XHRcdGljb246IFwicmVuZ29uZ3poaW5lbmdcIixcblx0XHRcdHByZWZpeDogXCJUaXBzXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVdpbmRvd3Mtc3NoLW1hY29zLWNvbm5lY3RcIixcblx0XHRcdFx0XCIwMi1naXQtaHVnZ2luZ2ZhY2UtZXJyb3JcIixcblx0XHRcdFx0XCIwMy1sbGFtYWNwcFwiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vQUlcdTU5MjdcdTZBMjFcdTU3OEJcdTk4NzlcdTc2RUVcdTg0M0RcdTU3MzBcdTVCOUVcdTYyMTgvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFx1RkYwODFcdThCQjJcdUZGMDlcIixcblx0XHRcdGljb246IFwicmVuZ29uZ3poaW5lbmdcIixcblx0XHRcdGxpbms6IFwiMDAtXHU1RjAwXHU3QkM3XHU4QkNEXHVGRjVDXHU2NjZFXHU5MDFBXHU1RjAwXHU1M0QxXHU4MDA1XHU5MDQ3XHU0RTBBQUlcdTY1RjZcdTRFRTNcdUZGMENcdTU5ODJcdTRGNTVcdTc4MzRcdTVDNDBcdUZGMUZcIlxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFMDBcdTdBRTAgXHU1N0ZBXHU2NzJDXHU1MzlGXHU3NDA2XHVGRjA4NFx1OEJCMlx1RkYwOVwiLFxuXHRcdFx0aWNvbjogXCJyZW5nb25nemhpbmVuZ1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1cdTUzOUZcdTc0MDZcdUZGMUFcdTRFMDBcdTRFMkFcdTRGOEJcdTVCNTBcdThCQjJcdTZFMDVcdTY5NUFUcmFuc2Zvcm1lclx1NTM5Rlx1NzQwNi5tZFwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1VuaXR5LWNhc3VhbC1tb2JpbGUtZ2FtZS1kZXZlbG9wbWVudC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0XCIwMC1cdTRFQ0UwXHU1RjAwXHU1OUNCXHU1MDVBXHU2RTM4XHU2MjBGXCIsXG5cdFx0XCIwMS1cdTkxNERcdTdGNkVcdTVGMDBcdTUzRDFcdTczQUZcdTU4ODNcIixcblx0XHRcIjAyLVx1NUJGQ1x1NTE2NVx1NjU3NFx1NzQwNlx1N0QyMFx1Njc1MFwiLFxuXHRcdFwiMDMtXHU5ODc5XHU3NkVFXHU4OUM0XHU1MjEyXHU0RTBFXHU2NUI5XHU2Q0Q1XCIsXG5cdFx0XCIwNC0yRFx1NEZFRlx1ODlDNlx1ODlEMlx1NkUzMlx1NjdEM1x1OEJCRVx1N0Y2RVwiLFxuXHRcdFwiMDUtXHU1MTY4XHU2NUIwXHU4RjkzXHU1MTY1XHU3Q0ZCXHU3RURGLWlucHV0LXN5c3RlbVwiLFxuXHRcdFwiMDYtXHU1QjlFXHU3M0IwXHU1NDExXHU1MjREXHU4REYzXHU4REMzXCIsXG5cdFx0XCIwNy1cdTUyMUJcdTVFRkFcdTUyQThcdTc1M0JcIixcblx0XHRcIjA4LVx1ODFFQVx1OTAwMlx1NUU5NFx1NzZGOFx1NjczQVx1NjNBN1x1NTIzNlwiLFxuXHRcdFwiMDktXHU1QjlFXHU3M0IwXHU1REU2XHU1M0YzXHU3OUZCXHU1MkE4XCIsXG5cdFx0XCIxMC1cdTUyMUJcdTVFRkFcdTVERTZcdTUzRjNcdTc5RkJcdTUyQThcdTUyQThcdTc1M0JcIixcblx0XHRcIjExLVx1NTIxQlx1NUVGQVx1NTczQVx1NjY2Ri1cdTgzNDlcdTU3NkFcIixcblx0XHRcIjEyLVx1NTIxQlx1NUVGQVx1NTczQVx1NjY2Ri1cdTlBNkNcdThERUZcIixcblx0XHRcIjEzLVx1OTY4Rlx1NjczQVx1NzUxRlx1NjIxMFx1NzI2OVx1NEY1M1wiLFxuXHRcdFwiMTQtXHU1MjFCXHU1RUZBXHU1NzNBXHU2NjZGLVx1NUMwRlx1NkNCM1wiLFxuXHRcdFwiMTUtXHU2NUUwXHU5NjUwXHU5NjhGXHU2NzNBXHU3NTFGXHU2MjEwXHU1NzMwXHU1NkZFXCIsXG5cdF0sXG5cdC8vIFwiL2NvbHVtbi9BSS1MYXJnZS1tb2RlbC9MYW5nQ2hhaW4tcHJhY3RpY2UtY2xhc3MvXCI6IFtcblx0Ly8gXHRcIlwiLFxuXHQvLyBcdFwiMDFcIixcblx0Ly8gXSxcblx0XCIvY29sdW1uL2MtY291cnNlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY1NTlcdTdBMEJcIixcblx0XHRcdGljb246IFwieW9uZ3lhblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1N0VDM1x1NEU2MFwiLFxuXHRcdFx0aWNvbjogXCJzaGVxdS1qaWh1b1wiLFxuXHRcdFx0cHJlZml4OiBcInByYWN0aWNlL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1jLWZ1bmN0aW9uXCIsXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cdFwiL21lZGl1bS9cIjogZmFsc2UsXG5cdFwiL2NvbHVtbi9TdGFibGVEaWZmdXNpb24vXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0aWNvbjogXCJodWlodWFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTVCOUVcdTczQjBcdTdFRDhcdTc1M0JcdTZBMjFcdTU3OEJcdTgxRUFcdTc1MzFcdUZGMUZcIiwgaWNvbjogXCJTVkdcIiwgbGluazogXCIwMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJBSSBcdTdFRDhcdTc1M0JcdTRGNUNcdTU0QzFcdTk2QzZcIiwgaWNvbjogXCJTVkdcIiwgbGluazogXCIwMlwiIH0sXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NzBFRFx1OEVBQlx1N0JDNzpBSSBcdTdFRDhcdTc1M0JcdTUyMURcdTRGNTNcdTlBOENcIixcblx0XHRcdGljb246IFwiaHVpaHVhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtV2ViVUkgXHU3Njg0IE4gXHU1OTI3XHU3RUQ4XHU1NkZFXHU1MjlGXHU4MEZEXCIsIGljb246IFwiU1ZHXCIsIGxpbms6IFwiMDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItXHU1OTgyXHU0RjU1XHU2NkY0XHU3Q0JFXHU1MUM2XHU1NzMwXHU2M0E3XHU1MjM2XHU3RUQ4XHU3NTNCXHU5OENFXHU2ODNDXHU1NDhDXHU1MTg1XHU1QkI5XHVGRjFGXCIsIGljb246IFwiU1ZHXCIsIGxpbms6IFwiMDRcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDMtXHU4RkRCXHU5NjM2XHU1RTk0XHU3NTI4XHVGRjFBXHU1NkZFXHU3NTFGXHU1NkZFXHU2MjgwXHU1REU3XHU0RTBFXHU1MjFCXHU0RjVDXHU3OTNFXHU1MzNBXHU1MjFEXHU2M0EyXCIsIGljb246IFwiU1ZHXCIsIGxpbms6IFwiMDVcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtXHU1QjlFXHU2MjE4XHU5ODc5XHU3NkVFXHVGRjA4XHU0RTAwXHVGRjA5XHVGRjFBXHU3NTI4IExvUkEgXHU1MjM2XHU0RjVDXHU0RTAwXHU0RTJBXHU0RjYwXHU4MUVBXHU1REYxXHU3Njg0XHU2RjJCXHU3NTNCXHU2NTQ1XHU0RThCXCIsIGljb246IFwiU1ZHXCIsIGxpbms6IFwiMDZcIiB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTU3RkFcdTc4NDBcdTdCQzc6QUkgXHU3RUQ4XHU3NTNCXHU1MzlGXHU3NDA2XHU2M0VEXHU3OUQ4XCIsXG5cdFx0XHRpY29uOiBcImh1aWh1YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIjA1LVx1NjVFN1x1NzUzQlx1NUUwOEdBTlx1RkYxQVx1NTkyOVx1NzUxRlx1NjcwOVx1N0YzQVx1OTY3N1x1OEZEOFx1NjYyRlx1NUI2Nlx1ODI3QVx1NEUwRFx1N0NCRVx1NkU1Qlx1RkYxRlwiLCBpY29uOiBcIlNWR1wiLCBsaW5rOiBcIjA3XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA2LVx1OThBMFx1ODk4Nlx1ODAwNVx1NjI2OVx1NjU2M1x1NkEyMVx1NTc4Qlx1RkYxQVx1NzZGNFx1ODlDMlx1NTNCQlx1NzQwNlx1ODlFM1x1NTJBMFx1NTY2QVx1NEUwRVx1NTNCQlx1NTY2QVwiLCBpY29uOiBcIlNWR1wiLCBsaW5rOiBcIjA4XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA3LUFJR0MgXHU3Njg0XHU2ODM4XHU1RkMzXHU5QjU0XHU2Q0Q1XHVGRjFBXHU2NDFFXHU2MUMyIFRyYW5zZm9ybWVyXCIsIGljb246IFwiU1ZHXCIsIGxpbms6IFwiMDlcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDgtXHU1REU3XHU3NTI4XHU3OTVFXHU3RUNGXHU3RjUxXHU3RURDXHVGRjFBXHU1OTgyXHU0RjU1XHU3NTI4VU5ldFx1OTg4NFx1NkQ0Qlx1NTY2QVx1NThGMFwiLCBpY29uOiBcIlNWR1wiLCBsaW5rOiBcIjEwXCIgfSxcblx0XHRcdF1cblx0XHR9LFxuXHRdLFxuXHRcIi9jb2x1bW4vWmVyby1CYXNlZC1EYXRhLVRoaW5raW5nLUNvdXJzZS9cIjogW1xuXHRcdFwiMDFcIixcblx0XHRcIjAyXCIsXG5cdF0sXG5cdFwiLzF2MS81My1GYW5GYW4vXCI6IFtcblx0XHRcIjAxXCIsXG5cdF0sXG5cdFwiLzF2MS81Mi1QYW5kb3JhL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTZFMzhcdTYyMEZcdTVGMDBcdTUzRDFcIixcblx0XHRcdGljb246IFwiaWRlYTJcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDItZ2FtZVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTk4OThcdTc2RUVcIixcblx0XHRcdGljb246IFwieW9uZ3lhblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1xdWl6XCJcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS80OS1DYW9ZdWd1YW5nL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvMzctSkluZ1dlbm4vXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS8zNi1SaWNhcmRvL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcIlByb2plY3QtQVwiLFxuXHRcdFwiUHJvamVjdC1CXCIsXG5cdFx0XCJQcm9qZWN0LUItdHdvXCIsXG5cdFx0XCIwMS1rYW9zaGlcIixcblx0XSxcblx0XCIvMXYxLzMzLWNoZW55YW95YW8vXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZXdvcmtcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRwcmVmaXg6IFwiMjAyM3llYXJcIiwgIC8vIFx1NTI0RFx1N0YwMCxcdThGRDlcdTkwRThcdTUyMDZcdTc2RUVcdTVGNTVcdTc2ODRcdTY1ODdcdTRFRjZcdTkwRkRcdTU3MjggMjAyM3llYXIgXHU2NTg3XHU0RUY2XHU1OTM5XHU0RTBCXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUFzc2lnbm1lbnQwMVwiLFxuXHRcdFx0XHRcIjAyLUFzc2lnbm1lbnQwMlwiLFxuXHRcdFx0XHRcIjAzLXFpemhvbmthb1wiLFxuXHRcdFx0XHRcIjA0LWh3M1wiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDYtQXNzaWdubWVudDRcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvYmxvZy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL2NwcC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDKytcdTY1NTlcdTdBMEJcIixcblx0XHRcdGljb246IFwibGFuZ3VhZ2UtY3BwXCIsXG5cdFx0XHRwcmVmaXg6IFwiY3BwLXR1dG9yaWFsL1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLWNwcC1pbnRyb1wiLFxuXHRcdFx0XHRcIjAyLWNwcC1lbnZpcm9ubWVudC1zZXR1cFwiLFxuXHRcdFx0XHRcIjAzLWNwcC1iYXNpYy1zeW50YXhcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDUFAgXHU2NzgxXHU5MDFGXCIsXG5cdFx0XHRpY29uOiBcImxhbmd1YWdlLWNwcFwiLFxuXHRcdFx0cHJlZml4OiBcImNwcF9ydW1lbi9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTg4NjVcdTUxNDVcIixcblx0XHRcdGljb246IFwibGFuZ3VhZ2UtY3BwXCIsXG5cdFx0XHRwcmVmaXg6IFwic3VwcGxlbWVudC9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1jcHAta2V5d29yZC1pbnRyb1wiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL2RvY3VtZW50LXN0eWxlLWd1aWRlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTRFMkRcdTY1ODdcdTYyODBcdTY3MkZcdTY1ODdcdTY4NjNcdTc2ODRcdTUxOTlcdTRGNUNcdTg5QzRcdTgzMDNcIixcblx0XHRcdGljb246IFwiZG9jc1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJ0aXRsZVwiLFxuXHRcdFx0XHRcInRleHRcIixcblx0XHRcdFx0XCJwYXJhZ3JhcGhcIixcblx0XHRcdFx0XCJudW1iZXJcIixcblx0XHRcdFx0XCJtYXJrc1wiLFxuXHRcdFx0XHRcInN0cnVjdHVyZVwiLFxuXHRcdFx0XHRcInJlZmVyZW5jZVwiLFxuXHRcdFx0XHRcImZpbGVuYW1lLXNob3VsZC1iZS1sb3dlcmNhc2VcIixcblx0XHRcdFx0XCJjYW1lbGNhc2VcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9ubHAvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQmFzZVwiLFxuXHRcdFx0aWNvbjogXCJhLTI5NF9ubHBmXCIsXG5cdFx0XHRwcmVmaXg6IFwiYmFzZS9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9Qcm9iYWJpbGl0eS10aGVvcnkvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEXCIsXG5cdFx0XHRpY29uOiBcIk1hdGhPcGVyYXRpb25zXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1Z1ZS1HZXQtc3RhcnRlZC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0XCIwMVwiLFxuXHRdLFxuXHRcIi9jb2x1bW4vTW9rLWFza2VkL1wiOiBbXG5cdFx0XCJcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NkM2MFx1NUVGQVx1NUYzQVx1MDBCN1x1NTIxQlx1NEUxQVx1NjI0Qlx1OEJCMFwiLFxuXHRcdFx0cHJlZml4OiBcIkVudHJlcHJlbmV1cmlhbC1ub3Rlcy9cIixcblx0XHRcdGljb246IFwiYS1iaWppYmVuYmlqaVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjIwMjIvMDFcIixcblx0XHRcdFx0XCIyMDIyLzAyXCIsXG5cdFx0XHRcdFwiMjAyMi8wM1wiLFxuXHRcdFx0XHRcIjIwMjIvMDRcIixcblx0XHRcdFx0XCIyMDIyLzA1XCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvODUtQW15WGlhby9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL0NTL2Jhc2UvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTdGQVx1Nzg0MFx1NTE2NVx1OTVFOFwiLFxuXHRcdFx0aWNvbjogXCJjXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFwiMDVcIixcblx0XHRcdFx0XCIwNlwiLFxuXHRcdFx0XHRcIjA3XCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlRpcHNcIixcblx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJ0aXBzM1wiLFxuXHRcdFx0XHRcInRpcHMxXCIsXG5cdFx0XHRcdFwidGlwczJcIixcblx0XHRcdF1cblx0XHR9XG5cblx0XSxcblx0XCIvMXYxLzkwLUdhbmdsaW9uL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vUnVzdC9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEXCIsXG5cdFx0XHRpY29uOiBcInJ1c3RcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1N0ZBXHU3ODQwXHU3QkM3ICgxMVx1OEJCMilcIixcblx0XHRcdGljb246IFwicnVzdFwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFwiMDVcIixcblx0XHRcdFx0XCIwNlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJUaXBzXCIsXG5cdFx0XHRpY29uOiBcInJ1c3RcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlRpcHNcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtRnVuY3Rpb25hbC1Qcm9ncmFtbWluZ1wiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9sZXR0ZXIvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQWJhbG9uZVwiLFxuXHRcdFx0aWNvbjogXCJibG9nXCIsXG5cdFx0XHRwcmVmaXg6IFwiQWJhbG9uZS9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCJcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMjAyM1x1NUU3NFwiLFxuXHRcdFx0aWNvbjogXCJsZXR0ZXJcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMjAyMy8wMVwiLFxuXHRcdFx0XHRcIjIwMjMvMDJcIixcblx0XHRcdFx0XCIyMDIzLzAzXCIsXG5cdFx0XHRcdFwiMjAyMy8wNFwiLFxuXHRcdFx0XHRcIjIwMjMvMDVcIixcblx0XHRcdFx0Ly8gXCIyMDIzL2xpa2VcIiwgIC8vIHR0XG5cdFx0XHRcdC8vIFwiMjAyMy9oZWFydFwiLCAgLy8gdHRcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMjAyNFx1NUU3NFwiLFxuXHRcdFx0aWNvbjogXCJsZXR0ZXJcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdC8vIFwiMjAyNC9pbXBvcnRhbmNlXCIsICAvLyBra1xuXHRcdFx0XHQvLyBcIjIwMjQvb25lLWlzLWFsbFwiLCAgLy8ga2tcblx0XHRcdFx0XCIyMDI0LzEyLWdpZnRcIixcblx0XHRcdFx0XCJsaWZlLzIwMjQtWWVhci1FdmVyeURheS1NZXNzYWdlXCIsXG5cdFx0XHRcdFwibGlmZS9Db29rLWZvci10aGUtd2lmZVwiLFxuXHRcdFx0XHRcImxpZmUvV2VkZGluZy1waG90b3NcIixcblx0XHRcdFx0XCJsaWZlL2NoYW5nZVwiLFxuXHRcdFx0XHRcImxpZmUvb3ZlclwiLFxuXHRcdFx0XHRcImxpZmUvbXYtY2hhbmdlXCIsXG5cdFx0XHRcdFwibGlmZS8yMDI0LU1vbmV5XCIsXG5cdFx0XHRcdFwibGlmZS9tZXNzYWdlXCIsXG5cdFx0XHRcdFwibGlmZS8yMDI0MDUwMlwiLFxuXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NjAwMFx1NUI1NVwiLFxuXHRcdFx0aWNvbjogXCJnaWZ0XCIsXG5cdFx0XHRwcmVmaXg6IFwicHJlZ25hbmN5XCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInByZWduYW5jeS1sb2dcIixcblx0XHRcdFx0XCJNYXR0ZXJzLW5lZWRpbmctYXR0ZW50aW9uXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkJvb2sgV3JpdGVcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0cHJlZml4OiBcImJvb2std3JpdGVcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCJ3cml0ZS1kYXRhXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiTm90ZUJvb2tcIixcblx0XHQvLyBcdGljb246IFwibGV0dGVyXCIsXG5cdFx0Ly8gXHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHQvLyBcdGNoaWxkcmVuOiBbXG5cdFx0Ly8gXCIyMDIzL2hlYXJ0XCIsXG5cdFx0Ly8gXCIyMDIzL2xpa2VcIixcblx0XHQvLyBdXG5cdFx0Ly8gfVxuXHRdLFxuXHRcIi9jb2x1bW4vUHl0aG9uLUZsYXNrL1wiOiBbXG5cdFx0XCJcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlB5dGhvbiBGbGFzayBXZWJcdTVGMDBcdTUzRDFcdTUxNjVcdTk1RThcdTRFMEVcdTVCOUVcdTYyMThcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJQcm9qZWN0MS8wMS5tZFwiLFxuXHRcdFx0XHRcIlByb2plY3QxLzAyLm1kXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9lbmxpZ2h0ZW4vXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMjAyM1x1NUU3NFwiLFxuXHRcdFx0aWNvbjogXCJkb25nd3V0dWJpYW8teGlhbnhpbmctdHV6aVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMjAyM1x1OERFOFx1NUU3NFx1NkYxNFx1OEJCMlx1RkY1Q1x1OEZEOVx1NEUyQVx1NjAxRFx1OERFRlx1NjcwOVx1NTQyRlx1NTNEMVx1RkYwMVx1MzAwQ1x1NTE2OFx1NjU4N1x1N0EzRlx1MzAwRFwiLCBpY29uOiBcImlkZWEyXCIsIGxpbms6IFwiMjAyMy1GcmllbmQtb2YtVGltZS1FbmxpZ2h0ZW5cIiB9LFxuXHRcdFx0XVxuXHRcdH1cblxuXHRdLFxuXHRcIi9jb2x1bW4vYm9vay9UaGUtVGhyZWUtQm9keS1Qcm9ibGVtL1wiOiBbXG5cdFx0eyB0ZXh0OiBcIlx1NEUwOVx1NEY1M1x1OTk5Nlx1OTg3NVwiLCBpY29uOiBcImJvb2tcIiwgbGluazogXCJSRUFETUUubWRcIiB9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTA5XHU0RjUzMTpcdTU3MzBcdTc0MDNcdTVGODBcdTRFOEJcIixcblx0XHRcdGljb246IFwiYm9vazFcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcdTdCMkNcdTRFMDBcdTkwRTgtXHU1NzMwXHU3NDAzXHU1RjgwXHU0RThCLzAxXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1N0FFMDpcdTc5RDFcdTVCNjZcdThGQjlcdTc1NENcIixcblx0XHRcdFx0XHRpY29uOiBcImJvb2sxXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiXHU3QjJDXHU0RTAwXHU5MEU4LVx1NTczMFx1NzQwM1x1NUY4MFx1NEU4Qi8wMlwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblxuXHRcdFx0XVxuXHRcdH0sXG5cblx0XSxcblx0XCIvbGVhcm5pbmdfd2ViL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcIk9wZW4tc291cmNlXCIsXG5cdFx0XCJMZWFybmluZy1XZWJzaXRlc1wiLFxuXHRcdFwiQnJvd3NlclwiLFxuXHRcdFwiUmVzb3VyY2UtV2Vic2l0ZVwiLFxuXHRcdFwiRGVzaWduLXdlYnNpdGVzLXRvLXNoYXJlXCIsXG5cdFx0XCJQZXJzb25hbFwiLFxuXHRcdFwiYmxvZ1wiLFxuXHRdLFxuXHRcIi8xdjEvNDYtSmVubnkvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS8yNy0xMTE5MjMvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OTg5OFx1NzZFRVwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRcdFwiMDRcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQW5zd2VyXCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0cHJlZml4OiBcIkFuc3dlclwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1BbnN3ZXJcIixcblx0XHRcdFx0XCIwMi1BbnN3ZXJcIixcblx0XHRcdFx0XCIwMy1BbnN3ZXJcIixcblx0XHRcdFx0XCIwNC1BbnN3ZXJcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8yNi1TaG9vcC9cIjogW1xuXHRcdFwiMDEtcXVlc3Rpb25cIlxuXHRdLFxuXHRcIi8xdjEvMjQtQm9yZ2hpL1wiOiBbXG5cdFx0XCIwMVwiLFxuXHRcdFwiMDJcIixcblx0XHRcIjAzXCIsXG5cdF0sXG5cdFwiLzF2MS8yMS1ZdVhpbnlpL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gXHU1NkRFXHU5ODdFXCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLWZ1bmN0aW9uXCIsXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cdFwiLzF2MS80My1Kb0p1bllhbi9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiRmluYWwgcmV2aWV3XCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyLVVuaXQxXCIsXG5cdFx0XHRcdFwiMDMtVW5pdDJcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8yMi1Eb25nWXVoYW5nL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQcm9ibGVtXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLWxhYjAxXCIsXG5cdFx0XHRcdFwiMDItbGFiMDJcIixcblx0XHRcdFx0XCIwMy1OWVUtVGFuZG9uLVNjaG9vbC1vZi1FbmdpbmVlcmluZ1wiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtSG9tZXdvcmswMlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjA0LU5ZVS1UYW5kb24tU2Nob29sLW9mLUVuZ2luZWVyaW5nLUhvbWV3b3JrMDJcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDUtSG9tZXdvcmswM1wiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjA1LUhXMDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDYtSG9tZXdvcmswNFwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjA2LUhXMDRcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDctRXhhbS0xLVJldmlldy1DUy0xMTE0LVNwcmluZy0yMDIyXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMDctRXhhbS0xLVJldmlldy1DUy0xMTE0LVNwcmluZy0yMDIyXCIgfSxcblx0XHRcdFx0XCIwOC1DUy1VWS0xMTE0LUludHJvLXRvLVByb2dyYW1taW5nLVByb2JsZW0tU29sdmluZ1wiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJBbnN3ZXJcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRwcmVmaXg6IFwiQW5zd2VyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtbGFiMDFfYW5zd2VyXCIsXG5cdFx0XHRcdFwiMDItTllVLVRhbmRvbi1TY2hvb2wtb2YtRW5naW5lZXJpbmdcIixcblx0XHRcdFx0eyB0ZXh0OiBcIjA0LUhvbWV3b3JrMDJcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwNC1OWVUtVGFuZG9uLVNjaG9vbC1vZi1FbmdpbmVlcmluZy1Ib21ld29yazAyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA1LUhvbWV3b3JrMDNcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwNS1IVzAzXCIgfSxcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS80MC15dXNodS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwieW9uZ3lhblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIkZpbmFsLVByb2plY3QtSy1NZWFucy1DbHVzdGVyaW5nXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU2Nob29sXCIsXG5cdFx0XHRpY29uOiBcImdvbmdzaVwiLFxuXHRcdFx0cHJlZml4OiBcIjIwMzQtcHl0aG9uLWJyaXNcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJJbnRyb2R1Y3RvcnkgU2NpZW50aWZpYyBDb21wdXRpbmcgLSBTQ0lGMTAwMDFcIiwgaWNvbjogXCJnaXRodWJcIiwgbGluazogXCIwMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJJbnRyb2R1Y3RvclwiLCBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcIjAyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIkludHJvZHVjdGMxXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiMDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiSW50cm9kdWNjaW5nIC0gU0NJRjEwMDAxXCIsIGljb246IFwiZ2l0aHViXCIsIGxpbms6IFwiMDRcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwicXVpelwiLCBpY29uOiBcImdpdGh1YlwiLCBsaW5rOiBcIjA1XCIgfSxcblx0XHRcdF1cblx0XHR9LFxuXG5cdF0sXG5cdFwiLzF2MS8xNi1tZG01MDUvXCI6IFtcblx0XHRcIlwiLFxuXHRcdFwiMDFcIixcblx0XHRcIjAyXCIsXG5cdFx0XCIwM1wiLFxuXHRdLFxuXHRcIi8xdjEvMTgtSmFzb24vXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MzVBXHU1QkEyXHU2NDJEXHU1RUZBXCIsXG5cdFx0XHRpY29uOiBcImJsb2dcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiVW5pdHlcIixcblx0XHRcdGljb246IFwidW5pdHlcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDRcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU2QzQ3XHU2MDNCXCIsXG5cdFx0XHRpY29uOiBcImJsb2dcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJjb21tYW5kXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vQ2hhdEdQVC1NaWRqb3VybmV5L1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIxLiBBSSBcdTUyNERcdTZDQkZcdThCRkVcIixcblx0XHRcdGljb246IFwicmVuZ29uZ3poaW5lbmdcIixcblx0XHRcdC8vIGljb246IFwicmVuZ29uZ3poaW5lbmdkYW5hb1wiLFxuXHRcdFx0Ly8gaWNvbjogXCJpY29uLXJnYl9qaXFpeHVleGlzdWFuZmF5aW5xaW5nXCIsXG5cdFx0XHRwcmVmaXg6IFwiQUktbGVhZGluZy1lZGdlXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiXHU0RjYwXHU3Njg0IEFJIFx1NTI2Rlx1OUE3RVwiLCBpY29uOiBcImNoYXQxXCIsIGxpbms6IFwiMDFcIiB9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjIuIEFJIFx1N0VEOFx1NzUzQlx1RDgzQ1x1REZBOFwiLFxuXHRcdFx0aWNvbjogXCJodWFodWFcIixcblx0XHRcdHByZWZpeDogXCJIb3ctdG8tdXNlLUFJLWZvci1wYWludGluZy9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJcdTUyNERcdThBMDBcdUZGNUNcdTRGNjBcdTc2ODRcdTRFMTNcdTVDNUVcdThCQkVcdThCQTFcdTVFMDhcIiwgaWNvbjogXCJodWFiaVwiLCBsaW5rOiBcIjAxXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAxXHVGRjVDQUkgXHU3RUQ4XHU3NTNCXHU2NUI5XHU2Q0Q1XHU2NjJGXHU0RUMwXHU0RTQ4XHVGRjFGXCIsIGljb246IFwiaHVhYmlcIiwgbGluazogXCIwMlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMlx1RkY1Q1x1NjAwRVx1NjgzN1x1NEUzQVx1NjI1M1x1OTAyMFx1NTkxQVx1OThDRVx1NjgzQ1x1NUY2Mlx1OEM2MT9cIiwgaWNvbjogXCJodWFiaVwiLCBsaW5rOiBcIjAzXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAzXHVGRjVDXHU2MDBFXHU2ODM3XHU3RUQ5XHU1QkEwXHU3MjY5XHU1MjFCXHU5MDIwUVx1NzI0OFx1NUY2Mlx1OEM2MT9cIiwgaWNvbjogXCJodWFiaVwiLCBsaW5rOiBcIjA0XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA0XHVGRjVDXHU2MDBFXHU2ODM3XHU1QjlBXHU1MjM2XHU0RjYwXHU3Njg0XHU0RTEzXHU1QzVFXHU1OEMxXHU3RUI4XHVGRjFGXCIsIGljb246IFwiaHVhYmlcIiwgbGluazogXCIwNVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNVx1RkY1Q1x1NjAwRVx1NEU0OD1cdTY4MzdcdTVGRUJcdTkwMUZcdTRFMEFcdTYyNEJcdTU0QzFcdTcyNEMgbG9nbyBcdThCQkVcdThCQTFcdUZGMUZcIiwgaWNvbjogXCJodWFiaVwiLCBsaW5rOiBcIjA2XCIgfSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMy4gXHU2RTA1XHU1MzU1XCIsXG5cdFx0XHRpY29uOiBcInpoYW53YWl0dWlndWFuZ2d1YW5nZ2Fvc2h1anVcIixcblx0XHRcdHByZWZpeDogXCJNb2RlbHMvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImxpc3RcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjQuIFx1NTJBMFx1OTkxMFwiLFxuXHRcdFx0aWNvbjogXCJjaGF0XCIsXG5cdFx0XHRwcmVmaXg6IFwiU3RhYmxlRGlmZnVzaW9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiNS4gUHVibGljXCIsXG5cdFx0XHRpY29uOiBcIm15c3FsXCIsXG5cdFx0XHRwcmVmaXg6IFwicHVibGljXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIi9jb2x1bW4vQ2hhdEdQVC1NaWRqb3VybmV5L0hvdy10by11c2UtQUktZm9yLXBhaW50aW5nLzAwXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMi1kcmF3LXByb21wdFwiLFxuXHRcdFx0XHRcIjAzLUNoYXRHUFQtbGlzdFwiLFxuXHRcdFx0XHRcIjA0LUNoYXRHUFQtUm9sZS1wcmVzdXBwb3NpdGlvblwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDaGF0R1BUIFByb21wdFwiLFxuXHRcdFx0aWNvbjogXCJyZW5nb25nemhpbmVuZ2RhbmFvXCIsXG5cdFx0XHRwcmVmaXg6IFwid3VlbmRhL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1JbnRyb2R1Y3Rpb25cIlxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1B5dGhvbi1kYXRhLXZpc3VhbGl6YXRpb24vXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1Njg0OFx1NEY4Qlx1NEUwQVx1NjI0QiBQeXRob24gXHU2NTcwXHU2MzZFXHU1M0VGXHU4OUM2XHU1MzE2XCIsXG5cdFx0XHRpY29uOiBcImhvbWVcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNYXRwbG90bGliIFB5dGhvbiBcdTY1NzBcdTYzNkVcdTUzRUZcdTg5QzZcdTUzMTZcIixcblx0XHRcdGljb246IFwiaG9tZVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiTWF0cGxvdGxpYlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiMC5cdTRFQ0JcdTdFQ0RcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCIxLlx1NzUzQlx1NTZGRVx1NTE0M1x1N0QyMFwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XHRcdFwiMDRcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRdLFxuXHRcIi8xdjEvMzAtVGFuZ1J1amlhL1wiOiBbXG5cdFx0XCJcIixcblx0XSxcblx0XCIvMXYxLzI5LVd1bGlsaS9cIjogW1xuXHRcdFwiXCIsXG5cdF0sXG5cdFwiLzF2MS8xNS1MYW50ZXJuX0ZzL1wiOiBbXG5cdFx0XCJcIixcblx0XSxcblx0XCIvY29sdW1uL0NvbXB1dGVyLWJhc2ljLXByYWN0aWNhbC1jb3Vyc2UvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEICgxXHU4QkIyKVwiLFxuXHRcdFx0aWNvbjogXCJjYW96dW94aXRvbmdcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMFwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTRFRTVcdTUzRjJcdTRFM0FcdTkyNzQgKDNcdThCQjIpXCIsXG5cdFx0XHRpY29uOiBcImNhb3p1b3hpdG9uZ1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwMi0xXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1Nzg2Q1x1NEVGNi1cdTgyQUZcdTcyNDcoXHU2MjRCXHU1MTk5TWluaUNQVSkoMTBcdThCQjIpXCIsXG5cdFx0XHRpY29uOiBcImNhb3p1b3hpdG9uZ1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XSxcblx0XCIvMXYxLzYyLVN1ekloQW4vXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkhvbWVXb3JrXCIsXG5cdFx0XHRpY29uOiBcImVtcGxveWVlLXJhbmtcIixcblx0XHRcdHByZWZpeDogXCJIb21ld29ya1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJMYWIyXCIsXG5cdFx0XHRcdFwiTGFiM1wiLFxuXHRcdFx0XHRcIkxhYjRcIixcblx0XHRcdFx0XCJMYWI1XCIsXG5cdFx0XHRcdFwiTGFiNlwiLFxuXHRcdFx0XHRcIkxhYjctU3RyZWV0LUNyYXBzXCIsXG5cdFx0XHRcdFwiSG9tZXdvcmsxXCIsXG5cdFx0XHRcdFwiSG9tZXdvcmsyXCIsXG5cdFx0XHRcdFwiSG9tZXdvcmszXCIsXG5cdFx0XHRcdFwiSG9tZXdvcmszLTFcIixcblx0XHRcdFx0XCJIb21ld29yazRcIixcblx0XHRcdFx0XCJIb21ld29yazVcIixcblx0XHRcdFx0XCJIb21ld29yazZcIixcblx0XHRcdFx0XCJIb21ld29yazdcIixcblxuXHRcdFx0XVxuXHRcdH0sXG5cdF0sXG5cdFwiLzF2MS8zOS14aWFvaG9uc2h1L1wiOiBbXG5cdFx0eyB0ZXh0OiBcIjAxLVx1NEUyQVx1NjAyN1x1N0I3RVx1NTQwRFwiLCBpY29uOiBcImEtamliaWppbGlhbnhpYmlhbmppXCIsIGxpbms6IFwiUkVBRE1FLm1kXCIgfSxcblx0XHR7IHRleHQ6IFwiMDItWU9ZTyBcdTdFQzNcdTRFNjBcdTk4OThcIiwgaWNvbjogXCJhLWppYmlqaWxpYW54aWJpYW5qaVwiLCBsaW5rOiBcInExXCIgfSxcblx0XHR7IHRleHQ6IFwiMDItXHU2NkI0XHU4RTgxXHU3Njg0XHU4MDAxXHU5NEMxXCIsIGljb246IFwiYS1qaWJpamlsaWFueGliaWFuamlcIiwgbGluazogXCJxMlwiIH0sXG5cdFx0XCJxM1wiLFxuXHRcdFwicTRcIixcblx0XHRcInE1XCIsXG5cdFx0XCJxNlwiLFxuXHRcdFwicTdcIixcblx0XSxcblx0XCIvMXYxLzM0LVdhbmdRaWVuL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCNTRcdTc1OTFcIixcblx0XHRcdGljb246IFwiZmFua3VpZmFxc1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMS1mdXhpXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8zOC1jb2lzaW5pL1wiOiBbXG5cdFx0XCJcIixcblx0XSxcblx0XCIvMXYxLzI4LUdhb1RpYW5RaS9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIyMDIzIFNlbWVzdGVyMVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1XMDAtV29ya3NoZWV0LTAtQnVpbGRpbmctYmxvY2tzXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1N0I1NFx1NzU5MVwiLFxuXHRcdFx0aWNvbjogXCJmYW5rdWlmYXFzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiUXVlc3Rpb24wMVwiLFxuXHRcdFx0XHRcIjAxLVRoZS1DdWxwcml0XCIsXG5cdFx0XHRcdFwiMDItQ2FubmVyLWNhblwiLFxuXHRcdFx0XHRcIjAzLURvZGd5LUJyb3RoZXJzLVByaWNlLUxpc3RcIixcblx0XHRcdFx0XCIwNC1DaGVzcy1Qcm9ibGVtLXY0XCIsXG5cdFx0XHRcdFwiMDUtQWxsLVF1ZXN0aW9uXCIsXG5cdFx0XHRcdFwiMDYtQXNzaWdubWVudDAxXCIsXG5cdFx0XHRcdFwiMDgtUHJhY3RpY2UtTWlkLVNlbWVzdGVyLVRlc3QtQXByaWwtMjAyM1wiLFxuXHRcdFx0XHRcIjA5LWZ1eGkwMVwiLFxuXHRcdFx0XHRcIjExLVAyLVByb2plY3QyLUZvQ2RsZVwiLFxuXHRcdFx0XHRcIjEyLVByb2plY3QtQW5zd2VyXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlJldmlld1wiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwNy1yZXZpZXctcXVlc3Rpb25cIixcblx0XHRcdFx0XCIxMC11bmltZWxiLUNPTVAxMDAwMS1NaWQtdGVybS1yZXZpZXdcIixcblx0XHRcdFx0XCIxMy1leGFtLTIwMTlzMVwiLFxuXHRcdFx0XHRcIjE0LVByYWN0aWNlLUV4YW0tTWF5MjAyM1wiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDXCIsXG5cdFx0XHRpY29uOiBcImNwcFwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjE2LUMxXCIsXG5cdFx0XHRcdFwiMTctcXVpelwiLFxuXHRcdFx0XHRcIjE4LW1pZGRsZS1xdWl6XCIsXG5cdFx0XHRcdFwiMTktbG9vay1saWtlXCIsXG5cdFx0XHRcdFwiMjAtUXVpelwiLFxuXHRcdFx0XHRcIi9jb2x1bW4vUHl0aG9uLWNvcmUtdGVjaG5vbG9neS1hbmQtcHJhY3RpY2UvQWxnb3JpdGhtLzAyXCIsXG5cdFx0XHRcdFwiMjEtcHJvamVjdDAxXCIsXG5cdFx0XHRcdFwiMjItUHJhY3RpY2UtUXVpelwiLFxuXHRcdFx0XHRcIjIzLUNvdXJzZXdvcmswMi1BLUdhbWUtSW1wbGVtZW50ZWQtd2l0aC1Ua2ludGVyXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OTg3OVx1NzZFRVwiLFxuXHRcdFx0aWNvbjogXCJnaXRodWJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlByb2plY3QvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVByb2plY3QxLU1hdGNoaW5nLUdhbWVcIixcblx0XHRcdFx0XCIwMi1Qcm9qZWN0Mi1Gb0NkbGVcIixcblx0XHRcdFx0XCIwMy1jb21wMTAwMDItRm91bmRhdGlvbnMtb2YtQWxnb3JpdGhtcy1TZW1lc3RlcjItMjAyMy1Bc3NpZ25tZW50MVwiLFxuXHRcdFx0XHRcIjA0LWNvbXAxMDAwMi1Gb3VuZGF0aW9ucy1vZi1BbGdvcml0aG1zLVNlbWVzdGVyMi0yMDIzLUFzc2lnbm1lbnQyXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlBvaW50XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJteXNxbFwiLFxuXHRcdFx0XHRcdHByZWZpeDogXCJwb2ludC9cIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCIwMC1saXN0XCIsXG5cdFx0XHRcdFx0XHRcIjAxLXR5cGVkZWZcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6ICdKYXZhJyxcblx0XHRcdGljb246ICdqYXZhJyxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMjQtU2hhZG93VGF4aVwiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vQ2hhdEdQVC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDaGF0Qm90XCIsXG5cdFx0XHRpY29uOiBcInJlbmdvbmd6aGluZW5nXCIsXG5cdFx0XHRwcmVmaXg6IFwiQ2hhdGJvdFwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDaGF0R1BUIE1hbnVhbFwiLFxuXHRcdFx0aWNvbjogXCJjaGF0XCIsXG5cdFx0XHRwcmVmaXg6IFwiQ2hhdEdQVE1hbnVhbC9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDaGF0UFBUXCIsXG5cdFx0XHRpY29uOiBcIlBQVFwiLFxuXHRcdFx0cHJlZml4OiBcIkNoYXRQUFRcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL0RhdGEtU3RydWN0dXJlcy1hbmQtQWxnb3JpdGhtcy9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwMS1SZWN1cnNpb25cIixcblx0XHRcdGljb246IFwiZ3VpZGFuZ1wiLFxuXHRcdFx0cHJlZml4OiBcIjAxLVJlY3Vyc2lvbi9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtSGFub2lcIixcblx0XHRcdFx0XCIwMi1Gcm9nLUp1bXBpbmctU3RhaXJzXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vY2xhbmctdHV0b3JpYWwvXCI6IFtcblx0XHRcIlwiLFxuXHRcdFwiaW50cm9cIixcblx0XHRcInN5bnRheFwiLFxuXHRcdFwidmFyaWFibGVcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkxhYlwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRpY29uOiBcImN5dXlhblwiLFxuXHRcdFx0cHJlZml4OiBcIkxhYlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRcdFwiMDlcIixcblx0XHRcdFx0XCIxMFwiLFxuXHRcdFx0XHRcIjExXCIsXG5cdFx0XHRcdFwiMTJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiRkFRXCIsXG5cdFx0XHRpY29uOiBcImN5dXlhblwiLFxuXHRcdFx0cHJlZml4OiBcIkZBUVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL2Rvd25sb2FkL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcIlx1NjcwMFx1NTk3RFx1NzUyOFx1NzY4NE1hcmtkb3duXHU3RjE2XHU4RjkxXHU1NjY4VHlwb3JhXHU3ODM0XHU4OUUzXHU2MzA3XHU1MzU3XCIsXG5cdF0sXG5cdFwiL2NvbHVtbi9EamFuZ28tZmFzdC1kZXZlbG9wbWVudC1wcmFjdGljZS9cIjogW1xuXHRcdC8vIFwiXCIsXG5cdFx0eyB0ZXh0OiBcIkRqYW5nb1x1OTk5Nlx1OTg3NVwiLCBpY29uOiBcImRqYW5nb1wiLCBsaW5rOiBcIi9jb2x1bW4vRGphbmdvLWZhc3QtZGV2ZWxvcG1lbnQtcHJhY3RpY2UvXCIgfSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkRqYW5nbyBcdTVCNjZcdTRFNjBcdTdCMTRcdThCQjBcIixcblx0XHRcdGljb246IFwiZGphbmdvXCIsXG5cdFx0XHRwcmVmaXg6IFwiRGphbmdvLVN0dWR5LU5vdGVzXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDA6XHU0RUNFRGphbmdvXHU1MTY1XHU2MjRCXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJkamFuZ29cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjAxLURqYW5nb1x1NTE2NVx1OTVFOFwiLCBpY29uOiBcImRqYW5nb1wiLCBsaW5rOiBcIjAxLVN0YXJ0LXdpdGgtRGphbmdvXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwMi1cdTc1MjhcdTYyMzdcdThEMjZcdTYyMzdcIiwgaWNvbjogXCJkamFuZ29cIiwgbGluazogXCIwMi1EamFuZ28tVXNlclwiIH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTIxRFx1OEJDNkRqYW5nbyAoNFx1OEJCMilcIixcblx0XHRcdGljb246IFwiZGphbmdvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiXHU4QkZFXHU3QTBCXHU0RUNCXHU3RUNEXCIsIGljb246IFwiZGphbmdvXCIsIGxpbms6IFwiY2hhcHRlcjAxLzAxLWRqYW5nby1pbnRyb1wiIH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiRGphbmdvIFRpcHNcIixcblx0XHRcdGljb246IFwiZGphbmdvXCIsXG5cdFx0XHRwcmVmaXg6IFwiVGlwc1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIkRqYW5nbyBcdTY2RjRcdTYzNjJcdTY1NzBcdTYzNkVcdTVFOTNcdTRFM0EgTXlzcWxcIiwgaWNvbjogXCJkamFuZ29cIiwgbGluazogXCIwMS1EamFuZ28tY2hhbmdlcy10aGUtZGF0YWJhc2UtdG8tbXlzcWxcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiRGphbmdvIFx1NUI5RVx1NzNCMFx1OEJDNFx1OEJCQVx1N0NGQlx1N0VERlwiLCBpY29uOiBcImRqYW5nb1wiLCBsaW5rOiBcIjAyLURqYW5nby1jb21tZW50c1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJcdTU5ODJcdTRGNTVcdTdGMTZcdTUxOTlcdTgxRUFcdTVCOUFcdTRFNDlcdTc2ODRcdTZBMjFcdTY3N0ZcdTY4MDdcdTdCN0VcdTU0OENcdThGQzdcdTZFRTRcdTU2NjhcIiwgaWNvbjogXCJkamFuZ29cIiwgbGluazogXCIwMy1jdXN0b20tdGVtcGxhdGUtdGFnc1wiIH0sXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OTY4Rlx1N0IxNFx1NjU1OVx1N0EwQlwiLFxuXHRcdFx0aWNvbjogXCJkamFuZ29cIixcblx0XHRcdHByZWZpeDogXCJnb3NzaXBcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRcdFwiMDRcIixcblx0XHRcdFx0XCIwNVwiLFxuXHRcdFx0XHRcIjA2XCIsXG5cdFx0XHRcdFwiMDdcIixcblx0XHRcdFx0XCIwOFwiLFxuXHRcdFx0XHRcIjA5XCIsXG5cdFx0XHRcdFwiMTBcIixcblx0XHRcdFx0XCIxMVwiLFxuXHRcdFx0XHRcIjEyXCIsXG5cdFx0XHRcdFwiMTNcIixcblx0XHRcdFx0XCIxNFwiLFxuXHRcdFx0XHRcIjE1XCIsXG5cdFx0XHRcdFwiTWFya2Rvd25cIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL3BvcHVsYXItc2NpZW5jZS9cIjogW1xuXHRcdFwiXCIsXG5cdFx0XCIwMS1Ib3ctZG9lcy1PQlMtbXVsdGlwbGV4LXB1c2hcIixcblx0XSxcblx0Ly8gXCIvYmxvZy9UaGUtcHVibGljLWNsYXNzL1wiOiBbXG5cblx0Ly8gXHR7IFwidGV4dFwiOiBcIjAxLVx1NTIxRFx1OEJDNktpdHRlblwiLCBsaW5rOiBcIjAxLVx1NTIxRFx1OEJDNktpdHRlblwiLH1cblx0Ly8gXSxcblx0XCIvY29sdW1uL2dpdC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUxNjVcdTk1RThcdTU3RkFcdTc4NDBcIixcblx0XHRcdGljb246IFwiZ2l0XCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImJhc2UvMDFcIixcblx0XHRcdFx0XCJiYXNlLzAyXCIsXG5cdFx0XHRcdFwiYmFzZS8wM1wiLFxuXHRcdFx0XHRcImJhc2UvMDRcIixcblxuXHRcdFx0XVxuXHRcdH1cblxuXHRdLFxuXHRcIi9jb2x1bW4vc3ZnLXR1dG9yaWFsL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcInN2Zy1pbnRyb1wiLFxuXHRcdFwic3ZnLWV4YW1wbGVcIixcblx0XHRcInN2Zy1pbmh0bWxcIixcblx0XHRcInN2Zy1yZWN0XCIsXG5cdFx0XCJzdmctY2lyY2xlXCIsXG5cdFx0XCJzdmctZWxsaXBzZVwiLFxuXHRcdFwic3ZnLWxpbmVcIixcblx0XHRcInN2Zy1wb2x5Z29uXCIsXG5cdFx0XCJzdmctcG9seWxpbmVcIixcblx0XHRcInN2Zy1wYXRoXCIsXG5cdFx0XCJzdmctdGV4dFwiLFxuXHRcdFwic3ZnLXN0cm9rZVwiLFxuXHRdLFxuXHRcIi9jb2x1bW4vUHl0aG9uLXByYWN0aWNlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTU4QThcdTVDMTRcdTY3MkNcdTU5MjdcdTVCNjYgUHl0aG9uXCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJUaGUtVW5pdmVyc2l0eS1vZi1NZWxib3VybmUvZXhhbS0yMDE2czFcIixcblx0XHRcdFx0XCJUaGUtVW5pdmVyc2l0eS1vZi1NZWxib3VybmUvZXhhbS0yMDE5czJcIixcblx0XHRcdFx0XCJUaGUtVW5pdmVyc2l0eS1vZi1NZWxib3VybmUvZXhhbS0yMDIyLW9ubGluZVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCNTRcdTY4NDhcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTU4QThcdTVDMTRcdTY3MkNcdTU5MjdcdTVCNjYgQW5zd2VyXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcImV4YW0tMjAxNnMxLXNvbHV0aW9uXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiQW5zd2VyL1RoZS1Vbml2ZXJzaXR5LW9mLU1lbGJvdXJuZS9leGFtLTIwMTZzMS1zb2x1dGlvblwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiZXhhbS0yMDE3czEtc29sdXRpb25cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJBbnN3ZXIvVGhlLVVuaXZlcnNpdHktb2YtTWVsYm91cm5lL2V4YW0tMjAxN3MxLXNvbHV0aW9uXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJleGFtLTIwMThzMS1zb2x1dGlvblwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIkFuc3dlci9UaGUtVW5pdmVyc2l0eS1vZi1NZWxib3VybmUvZXhhbS0yMDE4czEtc29sdXRpb25cIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcImV4YW0tMjAxOXMxLXNvbHV0aW9uXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiQW5zd2VyL1RoZS1Vbml2ZXJzaXR5LW9mLU1lbGJvdXJuZS9leGFtLTIwMTlzMS1zb2x1dGlvblwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiZXhhbS0yMDE5czItc29sdXRpb25cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJBbnN3ZXIvVGhlLVVuaXZlcnNpdHktb2YtTWVsYm91cm5lL2V4YW0tMjAxOXMyLXNvbHV0aW9uXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJleGFtLTIwMjItc29sdXRpb25cIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCJBbnN3ZXIvVGhlLVVuaXZlcnNpdHktb2YtTWVsYm91cm5lL2V4YW0tMjAyMi1zb2x1dGlvblwiIH0sXG5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9CYXNpYy1jb3Vyc2Utb2YtYXJ0aWZpY2lhbC1pbnRlbGxpZ2VuY2UvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRCAoMVx1OEJCMilcIixcblx0XHRcdGljb246IFwicmVuZ29uZ3poaW5lbmdcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiZGV0YWlsL2NoYXB0ZXIwMS8wMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY1NzBcdTVCNjZcdTU3RkFcdTc4NDAgKDdcdThCQjIpXCIsXG5cdFx0XHRpY29uOiBcInJlbmdvbmd6aGluZW5nXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImNoYXB0ZXIwMi8wMVwiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vRmluYWwtQ3V0LVByby9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiUXVlc3Rpb25cIixcblx0XHRcdGljb246IFwiaWNvbl9hbnN3ZXJcIixcblx0XHRcdHByZWZpeDogXCJRdWVzdGlvbi9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtUXVlc3Rpb24xXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vdmlkZW9fbG9naW5nL1wiOiBbXG5cdFx0XCJcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NzgxNFx1N0E3Nlx1RDgzRVx1REREMFwiLFxuXHRcdFx0aWNvbjogXCJyZWFkaW5nYW5kd3JpdGluZ2Fib29rd2l0aGlua2FuZGFmZWF0aGVyXCIsXG5cdFx0XHRwcmVmaXg6IFwiUXVlc3Rpb25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtQXBvbGxvXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlBsYW5cIixcblx0XHRcdGljb246IFwiZ3VhbmdnYW8xXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInVwZGF0ZV9wbGFuXCJcblx0XHRcdF1cblx0XHR9LFxuXHRcdC8vIHtcblx0XHQvLyBcdHRleHQ6IFwiR2lmdHNcIixcblx0XHQvLyBcdGljb246IFwiZ2lmdFwiLFxuXHRcdC8vIFx0cHJlZml4OiBcImdpZnRzL1wiLFxuXHRcdC8vIFx0Y2hpbGRyZW46IFtcblx0XHQvLyBcdFx0XCJ2cG5cIlxuXHRcdC8vIFx0XVxuXHRcdC8vIH1cblx0XSxcblx0XCIvY29sdW1uL3NoYW5nc2hvdS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiU2hhbmdzaG91XCIsXG5cdFx0XHRpY29uOiBcImhvbWVcIixcblx0XHRcdGxpbms6IFwic2hhbmdzaG91XCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEVDRVx1NEUwQVx1MzAwQ1x1NjI0Qlx1MzAwRFx1NTIzMFx1MzAwQ1x1NEUwQVx1MzAwRFx1NjI0QlwiLFxuXHRcdFx0aWNvbjogXCJlbXBsb3llZS1yYW5rXCIsXG5cdFx0XHRwcmVmaXg6IFwiRnJvbS11cHBlci1oYW5kLXRvLW1hc3Rlci1oYW5kL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY3MDlcdTY1NDhcdThCQURcdTdFQzNcdTRGNjBcdTc2ODRcdTc4MTRcdTdBNzZcdTgwRkRcdTUyOUJcIixcblx0XHRcdGljb246IFwiY2hhdFwiLFxuXHRcdFx0cHJlZml4OiBcInJlc2VhcmNoLWFiaWxpdHkvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAwLVdoeS1kby15b3UtbmVlZC10by1oYXZlLXJlc2VhcmNoLXNraWxsc1wiLFxuXHRcdFx0XHRcIjAxLVRocmVlLWVzc2VudGlhbC10eXBlcy1vZi1hd2FyZW5lc3MtZm9yLXJlc2VhcmNoXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEUwQVx1NjI0Qlx1RkYxQVx1NjU1OVx1NEY2MFx1NTk4Mlx1NEY1NVx1NUZFQlx1OTAxRlx1NjM4Q1x1NjNFMVx1NEUwMFx1OTg3OVx1NjI4MFx1ODBGRFwiLFxuXHRcdFx0aWNvbjogXCJibG9nXCIsXG5cdFx0XHRwcmVmaXg6IFwiR2V0dGluZy1TdGFydGVkLVRlYWNoaW5nLVlvdS1Ib3ctdG8tUXVpY2tseS1NYXN0ZXItYS1Ta2lsbC9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDAtSW50cm9kdWN0aW9uLVdoZXJldmVyLXlvdS13YW50LXRvLWdvLXN0YXJ0LWZyb20td2hlcmUteW91LWFyZVwiLFxuXHRcdFx0XHRcIjAxLVBhcnQtMS1HZXR0aW5nLXRoZS1IYW5nLW9mLUl0XCIsXG5cblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi9EZWVwU2Vlay1BcHBsaWNhdGlvbi1EZXZlbG9wbWVudC1QcmFjdGljYWwtR3VpZGUvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0aWNvbjogXCJyZW5nb25nemhpbmVuZ1wiLFxuXHRcdFx0bGluazogXCJcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1MjREXHU3RjZFXHU4QkZFXHU3QTBCXHVGRjFBXHU1RkVCXHU5MDFGXHU1MTY1XHU5NUU4IERlZXBTZWVrIFx1NEVFNVx1NTNDQSBBSSBcdTVGMDBcdTUzRDFcdTVGQzVcdTU5MDdcdTYyODBcdTY3MkZcIixcblx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMFwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vQW4taW50cm9kdWN0b3J5LXByb2dyYW1taW5nLWNsYXNzLXRoYXQtYW55b25lLWNhbi1sZWFybi9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEICgxXHU4QkIyKVwiLFxuXHRcdFx0aWNvbjogXCJjb2RlXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImRldGFpbC9jaGFwdGVyMDEvMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4QkVEXHU4QTAwXHU1N0ZBXHU3ODQwXHU3QkM3ICgxM1x1OEJCMilcIixcblx0XHRcdGljb246IFwiY29kZVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJkZXRhaWwvY2hhcHRlcjAyLzAxXCJcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdC8vIFwiL2Jsb2cvdnVlcHJlc3MvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL3BzL1wiOiBbXG5cdFx0XCIwMVwiLFxuXHRcdFwiMDJcIixcblx0XSxcblx0XCIvMXYxLzc5LVN1S3VuZ3Jhbi9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL1B5dGhvbi1jb3JlLXRlY2hub2xvZ3ktYW5kLXByYWN0aWNlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0RcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDBcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTdGQVx1Nzg0MFx1N0JDN1wiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRcdFwiMDlcIixcblx0XHRcdFx0XCIxMFwiLFxuXHRcdFx0XHRcIjExXCIsXG5cdFx0XHRcdFwiMTJcIixcblx0XHRcdFx0XCIxM1wiLFxuXHRcdFx0XHRcIjE0XCIsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdThGREJcdTk2MzZcdTdCQzdcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMTVcIixcblx0XHRcdFx0XCIxNlwiLFxuXHRcdFx0XHRcIjE3XCIsXG5cdFx0XHRcdFwiMThcIixcblx0XHRcdFx0XCIxOVwiLFxuXHRcdFx0XHRcIjIwXCIsXG5cdFx0XHRcdFwiMjFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU3VwcGxlbWVudFwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcInN1cHBsZW1lbnQvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLXdoeS1hcmdzLWt3YXJnc1wiLFxuXHRcdFx0XHRcIjAyLWlmLW5vdFwiLFxuXHRcdFx0XHRcIjAzLXB5dGhvbi1kaWN0aW9uYXJ5LWNvbXByZWhlbnNpb24tZ3VpZGUtYW5kLWV4YW1wbGVzXCIsXG5cdFx0XHRcdFwiMDQtUHl0aG9uLUxvZ2ljLVBpdGZhbGxzLUNoYW5naW5nLUxpc3RzXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkJpbmFyeS1zZWFyY2hcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCJCaW5hcnktc2VhcmNoXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAwXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCJwcmFjdGljZVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJBbGdvcml0aG1cIixcblx0XHRcdGljb246IFwic2h1anVqaWVnb3UxXCIsXG5cdFx0XHRwcmVmaXg6IFwiQWxnb3JpdGhtL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMFx1RkYxQVx1NEY2MFx1OTcwMFx1ODk4MVx1NEU4Nlx1ODlFM1x1NzY4NFx1N0I5N1x1NkNENVx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0XHRcdGljb246IFwieW9uZ3lhblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXG5cblx0XHRcdFx0XCIxMlwiLFxuXHRcdFx0XHRcIjEzXCIsXG5cdFx0XHRcdFwiMTRcIixcblx0XHRcdFx0XCIxNVwiLFxuXHRcdFx0XHRcIjE5XCIsXG5cdFx0XHRcdFwiNDBcIixcblx0XHRcdF1cblxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OTY4Rlx1N0IxNFwiLFxuXHRcdFx0aWNvbjogXCJpZGVhXCIsXG5cdFx0XHRwcmVmaXg6IFwiQ2FzdWFsLWVzc2F5L1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1iaW5hcnktdHJlZVwiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvNjQtTUtRL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gQW5hbHl0aWNzXCIsXG5cdFx0XHRpY29uOiBcImRldlwiLFxuXHRcdFx0cHJlZml4OiBcIklFT1JFNDUwMl8wMDFfMjAyM18zLVB5dGhvbi1mb3ItQW5hbHl0aWNzL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiR2V0dGluZyBTdGFydGVkXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJsYWJvcmF0b3J5bGFiXCIsXG5cdFx0XHRcdFx0cHJlZml4OiBcIkdldHRpbmctU3RhcnRlZC9cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCIwMS1QcmVwYXJlLWZvci1UZWNobm9sb2dpY2FsLVN1Y2Nlc3NcIixcblx0XHRcdFx0XHRcdFwiMDItT2JzZXJ2ZS1Qcm9wZXItTmV0aXF1ZXR0ZVwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiVE9PTFMgRk9SIEFOQUxZVElDU1wiLFxuXHRcdFx0aWNvbjogXCJkZXZcIixcblx0XHRcdHByZWZpeDogXCJJRU9SRTQ1MDFfMDAxXzIwMjNfMy1UT09MUy1GT1ItQU5BTFlUSUNTXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCIwMSAtIEZ1bmRhbWVudGFsc1wiLFxuXHRcdFx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLFxuXHRcdFx0XHRcdHByZWZpeDogXCIwMS1GdW5kYW1lbnRhbHNcIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCIwMS1Ib3ctdG8tQ29tcGxldGUtdGhlLUhvbWV3b3Jrc1wiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvOTctTG95YWwvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS82NS1paGF0ZXNpbGVudGxldHRlclwiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvNjktT3V5YW5nWWlqaWUvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS85Ni1Gb3VyLWRpbWVuc2lvbmFsL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJMYWJcIixcblx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJDU0NBMjAtTGFiMVwiLFxuXHRcdFx0XHRcIkNTQ0EyMC1MYWIyXCIsXG5cdFx0XHRcdFwiQ1NDQTIwLUxhYjNcIixcblx0XHRcdFx0XCJDU0NBMjAtTGFiNFwiLFxuXHRcdFx0XHRcIkNTQ0EyMC1MYWI1XCIsXG5cdFx0XHRcdC8vIFwiQ1NDQTIwLUxhYjZcIixcblx0XHRcdFx0Ly8gXCJDU0NBMjAtTGFiN1wiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJIb21lV29ya1wiLFxuXHRcdFx0aWNvbjogXCJsaWFueGlcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlJldmlld1wiLFxuXHRcdFx0aWNvbjogXCJpZGVhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjIwMjJGX1RUMlwiLFxuXHRcdFx0XHRcInl1ZmFcIlxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzYzLUJpTExMTC9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwiZG9jXCIsXG5cdFx0XHRwcmVmaXg6IFwiSG9tZXdvcmsvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIkVjb25vbWV0cmljLVB5dGhvbi1MYWItQXNzaWdubWVudDFcIlxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL0FJLUxhcmdlLW1vZGVsL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDA6IEFJIFx1NTkyN1x1NkEyMVx1NTc4QlwiLFxuXHRcdFx0aWNvbjogXCJtb3hpbmdcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJHUFQgXHU2NzY1XHU0RTg2XCIsIGljb246IFwiY2hhdDFcIiwgbGluazogXCIwMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJcdTRGNjBcdTc2ODRcdThEMzRcdThFQUJcdTUyQTlcdTc0MDZcIiwgaWNvbjogXCJjaGF0MVwiLCBsaW5rOiBcIjAyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLVx1OEJBOVx1NjIxMVx1NEVFQ1x1NUI2Nlx1NEYxQVx1NTQ4Q0FJXHU4QkY0XHU4QkREXCIsIGljb246IFwiY2hhdDFcIiwgbGluazogXCIwM1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTU5ODJcdTRGNTVcdTUyMjlcdTc1MjhcdTU5MjdcdThCRURcdThBMDBcdTZBMjFcdTU3OEJcdTUwNUFcdTYwQzVcdTYxMUZcdTUyMDZcdTY3OTBcdUZGMUZcIiwgaWNvbjogXCJjaGF0MVwiLCBsaW5rOiBcIjA0XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAzLVx1NURFN1x1NzUyOFx1NjNEMFx1NzkzQVx1OEJFRFx1RkYwQ1x1OEJGNFx1OEJGNFx1OEJERFx1NUMzMVx1ODBGRFx1NTA1QVx1NEUyQVx1ODA0QVx1NTkyOVx1NjczQVx1NTY2OFx1NEVCQVwiLCBpY29uOiBcImNoYXQxXCIsIGxpbms6IFwiMDVcIiB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJMYW5nQ2hhaW4gXHU1N0ZBXHU3ODQwXHU0RUNCXHU3RUNEXHU1M0NBXHU2ODQ4XHU0RjhCXHU4QkIyXHU4OUUzXCIsXG5cdFx0XHRpY29uOiBcIm1lc3NhZ2UtbGFuZ3VhZ2VcIixcblx0XHRcdHByZWZpeDogXCJMYW5nQ2hhaW4vNTEvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAwXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTJBMFx1OTkxMFwiLFxuXHRcdFx0aWNvbjogXCJyZWFkaW5nYW5kd3JpdGluZ2Fib29rd2l0aGlua2FuZGFmZWF0aGVyXCIsXG5cdFx0XHRwcmVmaXg6IFwiZXh0cmFfbWVhbC9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3N0U1XHU4QkM2XHU3MEI5XHU4ODY1XHU1MTQ1XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJzaGVxdS1qaWh1b1wiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjAxLTFcIixcblx0XHRcdFx0XHRcdFwiMDEtMlwiLFxuXHRcdFx0XHRcdFx0XCIwMS0zXCIsXG5cdFx0XHRcdFx0XHRcIjAxLTRcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU2NjdBXHU4MEZEXHU1QkEyXHU2NzBEXCIsXG5cdFx0XHRpY29uOiBcInpodWFuamlha2V0YW5nLWppaHVvXCIsXG5cdFx0XHRwcmVmaXg6IFwiQUktY3VzdG9tZXItc2VydmljZVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJMYW5nQ2hhaW4gXHU1QjlFXHU2MjE4XHU4QkZFXCIsXG5cdFx0XHRpY29uOiBcInNoZXF1LWppaHVvXCIsXG5cdFx0XHRwcmVmaXg6IFwiTGFuZ0NoYWluLXByYWN0aWNlLWNsYXNzXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cdFwiL2NvbHVtbi9UZWFjaGVyLWNlcnRpZmljYXRlL1wiOiBbXG5cdFx0XCIwMVwiLFxuXHRcdFwiMDJcIixcblx0XHRcIjAzXCIsXG5cdF0sXG5cdFwiLzF2MS80OC1Cb2IvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL2NvbHVtbi9UdXJ0bGUvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1N0ZBXHU3ODQwXHU2NTU5XHU3QTBCXCIsXG5cdFx0XHRpY29uOiBcIlR1cnRsZVwiLFxuXHRcdFx0cHJlZml4OiBcIkJhc2UtVHVydGxlXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vXHU2NDQ0XHU1RjcxXHU1MTY1XHU5NUU4XHU4QkZFL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0QgKDFcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiY2FtZXJhYWRkXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzIwLUZyYW5rL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTk4OThcdTc2RUVcIixcblx0XHRcdGljb246IFwiZG9jc1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTdCNTRcdTY4NDhcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCJhbnN3ZXJcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiQW5zd2VyMVwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzEzLWxpdXlpdG9uXCI6IFtcblx0XHRcIlwiLFxuXHRcdFwiMDFcIixcblx0XHRcIjAyXCIsXG5cdF0sXG5cdFwiLzF2MS8wNC1Ub21teVRpYW5cIjogW1xuXHRcdFwiMDFcIixcblx0XHRcIjAyLVBST0pFQ1QtNC1SRVZJRVctRVhFUkNJU0VTXCIsXG5cdFx0XCIwMy1LZWVwLXdvcmtpbmctb24teW91ci1taWR0ZXJtLXNpdGVzXCIsXG5cdFx0XCIwNC1IVzA0XCIsXG5cdFx0XCIwNS13ZWItbm90ZWJvb2tcIixcblx0XHRcIjA2LUFuc3dlclwiLFxuXHRcdFwiMDctSG9tZXdvcmswNVwiLFxuXHRcdFwiMDgtTGFiOFwiLFxuXHRcdFwiMDktSG9tZXdvcmswNlwiLFxuXHRcdFwiMTAtSG9tZXdvcmswN1wiLFxuXHRcdFwiMTEtSG9tZXdvcmswOFwiLFxuXHRcdFwiMTItQ1MtVVktMTExNC1QeXRob25cIixcblx0XHRcIjEzLVx1NjdFNVx1N0YzQVx1ODg2NVx1NkYwRlwiLFxuXHRcdFwiMTItSG9tZVdvcmswOVwiLFxuXHRcdFwiMTMtSG9tZXdvcmsxMFwiLFxuXHRcdFwiMTQtUmV2aWV3XCIsXG5cdF0sXG5cblx0XCIvMXYxLzAzLURhbm5pZVwiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTk2MzZcdTZCQjVcdTRFMDA6UHl0aG9uXHU1N0ZBXHU3ODQwXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFwiMDVcIixcblx0XHRcdFx0XCIwNlwiLFxuXHRcdFx0XHRcIjA3XCIsXG5cdFx0XHRcdFwiMDhcIixcblx0XHRcdFx0XCIwOVwiLFxuXHRcdFx0XHRcIjEwXCIsXG5cdFx0XHRcdFwiMTFcIixcblx0XHRcdFx0XCIxMlwiLFxuXHRcdFx0XHRcIjEzXCIsXG5cdFx0XHRcdFwiMTRcIixcblx0XHRcdFx0XCIxNVwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1ItQ291cnNlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJSIFx1NUZFQlx1OTAxRlx1NTE2NVx1OTVFOFwiLFxuXHRcdFx0aWNvbjogXCJtb3hpbmdcIixcblx0XHRcdHByZWZpeDogXCJiYXNlL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvNjgtR1VJLVpoaXlpLUVuZ2luZWVyaW5nL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJIb21lV29ya1wiLFxuXHRcdFx0aWNvbjogXCJsYWJvcmF0b3J5bGFiXCIsXG5cdFx0XHRwcmVmaXg6IFwiSG9tZVdvcmtcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJFeGVyY2lzZXMgMVwiLCBpY29uOiBcImxpbnV4XCIsIGxpbms6IFwiMDEtVmFyaWFibGVzLWFzc2lnbm1lbnQtYW5kLW9wZXJhdG9yLXByZWNlZGVuY2VcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiRXhlcmNpc2VzIDJcIiwgaWNvbjogXCJsaW51eFwiLCBsaW5rOiBcIjAyLUNvbnRyb2wtc3RhdGVtZW50c1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJFeGVyY2lzZXMgM1wiLCBpY29uOiBcImxpbnV4XCIsIGxpbms6IFwiMDMtVHlwZXMtdHlwZS1jb252ZXJzaW9ucy1hbmQtZmxvYXRpbmctcG9pbnQtYXJpdGhtZXRpY1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNC1NYXRoXCIsIGljb246IFwibGludXhcIiwgbGluazogXCIwNC1NYXRoXCIgfSxcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS83My1NS1EvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS83Ni1KaWFueGluLUJlcmtlbGV5LU9wdG9lbGVjdHJvbmljcy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvbGV0dGVyLzM2LXN0cmF0YWdlbVwiOiBbXG5cdFx0XCJcIixcblx0XHRcIjAxXCIsXG5cdFx0XCIwMlwiLFxuXHRdLFxuXG5cdFwiLzF2MS82MC13dWRpL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJIb21lV29ya1wiLFxuXHRcdFx0aWNvbjogXCJpZGVhMlwiLFxuXHRcdFx0cHJlZml4OiBcIkhvbWVXb3JrL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJFeGVyY2lzZTBcIixcblx0XHRcdFx0XCJFeGVyY2lzZTFcIixcblx0XHRcdFx0XCJFeGVyY2lzZTJcIixcblx0XHRcdFx0XCJFeGVyY2lzZTNcIixcblx0XHRcdFx0XCJFeGVyY2lzZTRcIixcblx0XHRcdFx0XCJFeGVyY2lzZTVcIixcblx0XHRcdFx0XCJFeGVyY2lzZTZcIixcblx0XHRcdFx0XCJFeGVyY2lzZTdcIixcblx0XHRcdFx0XCJtYTQwN19BVDIzX2Fzc2Vzc2VkY3ctaW5zdHJ1Y3Rpb25zXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlF1ZXN0aW9uXCIsXG5cdFx0XHRpY29uOiBcIm15c3FsXCIsXG5cdFx0XHRwcmVmaXg6IFwiUXVlc3Rpb24vXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlF1ZXN0aW9uMVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdF0sXG5cdFwiLzF2MS81OS14XzEwL1wiOiBbXG5cdFx0XCIwMVwiLFxuXHRcdFwiMDJcIixcblx0XHRcIjAzXCIsXG5cdF0sXG5cdFwiLzF2MS81OC1zYmh3L1wiOiBcInN0cnVjdHVyZVwiLFxuXG5cdFwiL2NvbHVtbi9tYWNPUy1UaXBzL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcIjAxLW1hY09TXHU1MTY1XHU5NUU4XHU2MzA3XHU1MzU3XCIsXG5cdFx0XCIwMi1tYWNPU1x1NUUzOFx1NzUyOFx1NUZFQlx1NjM3N1x1OTUyRVwiLFxuXHRcdFwiMDMtbWFjT1NcdTVFMzhcdTg5QzFcdTk1RUVcdTk4OThcIixcblx0XHRcIjA0LW1hY09TXHU4RjZGXHU0RUY2XHU2RTA1XHU1MzU1XCIsXG5cdFx0XCIwNS1tYWNPU1x1OEY2Rlx1NEVGNlx1ODFFQVx1NzUyOFwiLFxuXHRcdFwiMDYtbWFjT1NcdThGNkZcdTRFRjZcdTYyODBcdTVERTdcIixcblx0XHRcIjA3LW1hY09TXHU2NTc0XHU3NDA2XHU2MjgwXHU1REU3XCIsXG5cdFx0XCIwOC1tYWNPU1x1NjU0OFx1NzM4N1x1NjMwN1x1NTM1N1wiLFxuXG5cdF0sXG5cdFwiLzF2MS81NC1CYW5hbmFZdVNodS9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNQVRIMjAwMTdcIixcblx0XHRcdGljb246IFwiTWF0aE9wZXJhdGlvbnNcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIk1BVEgyMDAxN1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIldlbGNvbWUgUGFnZVwiLCBpY29uOiBcInNodWp1amllZ291XCIsIGxpbms6IFwiMDFcIiB9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJMZWN0dXJlIE5vdGVzXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJndWlkYW5nXCIsXG5cdFx0XHRcdFx0cHJlZml4OiBcIkxlY3R1cmUtTm90ZXMvXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJMZWN0dXJlIDBcIiwgaWNvbjogXCJlbXBsb3llZS1yYW5rXCIsIGxpbms6IFwiTGVjdHVyZTBcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIkxhYiAxXCIsIGljb246IFwiZW1wbG95ZWUtcmFua1wiLCBsaW5rOiBcIkxhYjFcIiB9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPdGhlclwiLFxuXHRcdFx0aWNvbjogXCJsYWJvcmF0b3J5bGFiXCIsXG5cdFx0XHRwcmVmaXg6IFwiT3RoZXJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0Ly8gXCIwN1wiLFxuXHRcdFx0XHQvLyBcIjA4XCIsXG5cblx0XHRcdFx0eyB0ZXh0OiBcIlRlc3QgMSBEYXRhIFNjaWVuY2UgMVwiLCBpY29uOiBcIk1hdGhPcGVyYXRpb25zXCIsIGxpbms6IFwiMDhcIiB9LFxuXHRcdFx0XHRcIjA5XCIsXG5cdFx0XHRcdFwiMTBcIixcblx0XHRcdFx0XCIxMVwiLFxuXHRcdFx0XHRcIjEyXCIsXG5cdFx0XHRcdFwiMTNcIixcblx0XHRcdFx0XCIxNC1UZXN0NFwiLFxuXHRcdFx0XHRcIjE1XCIsXG5cdFx0XHRcdFwiMTZcIixcblx0XHRcdFx0XCIxN1wiLFxuXHRcdFx0XHRcIjE4XCIsXG5cdFx0XHRcdFwiQXNzZXNzbWVudC1OZWFyZXN0LWFuZC1GdXJ0aGVzdFwiLFxuXHRcdFx0XHRcIlNDSUYzMDAwNS1Gb3Jlc3QtRmlyZS1NaW5pLVByb2plY3RcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU3RhdGlzdGljcyAyIDIwMjNcIixcblx0XHRcdGljb246IFwiY2liLXJcIixcblx0XHRcdHByZWZpeDogXCJTdGF0aXN0aWNzMjIwMjNcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIlByYWN0aWNhbCAxXCIsIGljb246IFwiTWF0aE9wZXJhdGlvbnNcIiwgbGluazogXCIwMS1TdGF0aXN0aWNzMi1Db21wdXRlci1QcmFjdGljYWwxXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIlByYWN0aWNhbCAyXCIsIGljb246IFwiTWF0aE9wZXJhdGlvbnNcIiwgbGluazogXCIwMi1TdGF0aXN0aWNzMkNvbXB1dGVyUHJhY3RpY2FsMlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJQcmFjdGljYWwgM1wiLCBpY29uOiBcIk1hdGhPcGVyYXRpb25zXCIsIGxpbms6IFwiMDMtU3RhdGlzdGljczNDb21wdXRlclByYWN0aWNhbDNcIiB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJBbGdvcml0aG1zIGFuZCBNYWNoaW5lIExlYXJuaW5nIDIwMjNcIixcblx0XHRcdGljb246IFwic2hvdXllXCIsXG5cdFx0XHRwcmVmaXg6IFwiQWxnb3JpdGhtcy1hbmQtTWFjaGluZS1MZWFybmluZy0yMDIzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJjb3Vyc2V3b3JrIDFcIiwgaWNvbjogXCJNYXRoT3BlcmF0aW9uc1wiLCBsaW5rOiBcIkFzc2Vzc2VkLWNvdXJzZXdvcmsxXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcImNvdXJzZXdvcmsgMlwiLCBpY29uOiBcIk1hdGhPcGVyYXRpb25zXCIsIGxpbms6IFwiQXNzZXNzZWQtY291cnNld29yazJcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiY291cnNld29yayAzXCIsIGljb246IFwiTWF0aE9wZXJhdGlvbnNcIiwgbGluazogXCJBc3Nlc3NlZC1jb3Vyc2V3b3JrM1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJjb3Vyc2V3b3JrIDRcIiwgaWNvbjogXCJNYXRoT3BlcmF0aW9uc1wiLCBsaW5rOiBcIkFzc2Vzc2VkLWNvdXJzZXdvcms0XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcImNvdXJzZXdvcmsgNVwiLCBpY29uOiBcIk1hdGhPcGVyYXRpb25zXCIsIGxpbms6IFwiQXNzZXNzZWQtY291cnNld29yazVcIiB9LFxuXHRcdFx0XHRcIkFzc2Vzc21lbnQxXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlJldmlld1wiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdHByZWZpeDogXCJSZXZpZXdcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtQWxnb3JpdGhtXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvNjEtWHVYaW4tTm9yYS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTMyXHUzMDBDXHU0RTcxXHUzMDBEXHU4QkIyXCIsXG5cdFx0XHRpY29uOiBcIm1lc3NhZ2UtbGFuZ3VhZ2VcIixcblx0XHRcdHByZWZpeDogXCJTdHJpbmctZGlzb3JkZXJseS10YWxrXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlF1ZXN0aW9uXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRdLFxuXHQvLyBcIi9WcG4tY2xhc2gtd2luLW1hYy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzcyLXpoYW5nYm9ydWlcIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzQxLVpoZW5nSGFveXVhbi9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiT2xkXCIsXG5cdFx0XHRpY29uOiBcInpodWFuamlha2V0YW5nLWppaHVvXCIsXG5cdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMi1DUy1VWS0xMTE0LUZpbmFsLVJldmlld1wiLFxuXHRcdFx0XHRcIjAzLUxhYjFcIixcblx0XHRcdFx0XCIwNC1MYWIzXCIsXG5cdFx0XHRcdFwiMDYtVG9waWNcIixcblx0XHRcdFx0XCIwNy1kaC1NaWR0ZXJtLUV4YW1cIixcblx0XHRcdFx0XCIwOC1mdXhpXCIsXG5cdFx0XHRcdFwiMDktZnV4aTJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLFxuXHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiSG9tZVdvcmtcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazFcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazJcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrMlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazNcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrM1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazRcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrNFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazVcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrNVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazZcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrNlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazdcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrN1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJIb21ld29yazhcIiwgaWNvbjogXCJteXNxbFwiLCBsaW5rOiBcIkhvbWV3b3JrOFwiIH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIkxhYiBBbnN3ZXJcIixcblx0XHRcdFx0XHRpY29uOiBcInNoZXF1LWppaHVvXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0cHJlZml4OiBcIkFuc3dlclwiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiSG9tZXdvcmsxLUFuc3dlclwiLCBpY29uOiBcInpodWFuamlha2V0YW5nLWppaHVvXCIsIGxpbms6IFwiSG9tZXdvcmsxLUFuc3dlclwiIH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzc3LXhpYW94aWFueXVlL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvNzgtc2NvdHQtZ3VhbjIwMDgvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS83NS1jaGVuL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvNzAtV3VZdWUvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkhvbWVXb3JrXCIsXG5cdFx0XHRpY29uOiBcImxhbmd1YWdlLWZvcnRyYW5cIixcblx0XHRcdHByZWZpeDogXCJIb21lV29ya1wiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1Ib21lV29yazFcIixcblx0XHRcdFx0XCIwMi1Ib21lV29yazNcIixcblx0XHRcdFx0XCIwMy1Ib21lV29yazRcIixcblx0XHRcdFx0XCIwNC1Ib21lV29yazVcIixcblx0XHRcdFx0XCIwNS1Ib21lV29yazZcIixcblx0XHRcdFx0XCIwNi1Ib21lV29yazdcIixcblx0XHRcdFx0XCIwNy1Ib21lV29yazhcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUXVlc3Rpb25cIixcblx0XHRcdGljb246IFwic2hlcXUtamlodW9cIixcblx0XHRcdHByZWZpeDogXCJRdWVzdGlvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJRdWVzdGlvbjFcIixcblx0XHRcdFx0XCJRdWVzdGlvbjJcIixcblx0XHRcdFx0XCJRdWVzdGlvbjNcIixcblx0XHRcdFx0XCJRdWVzdGlvbjRcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cblx0XCIvMXYxLzY2LWRvdWJhby9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzY3LURvbmNpYy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzU2LVlZLVVuaXZlcnNpdHktb2YtUGVubnN5bHZhbmlhL1wiOiBbXG5cdFx0XCJIb21ld29yazNcIixcblx0XSxcblx0XCIvMXYxLzU3LVJlbi1YaW54aW5nLWdhdGVjaC1lZHUtVVNBL1wiOiBcInN0cnVjdHVyZVwiLFxuXHQvLyBbXG5cdC8vIFx0XCJQYXJ0MFwiLFxuXHQvLyBcdFwiUi1odzAxXCIsXG5cdC8vIFx0XCIwMS1NaWR0ZXJtLUV4YW0tUGFydC0yLUNvbXB1dGF0aW9uXCIsXG5cdC8vIF0sXG5cdFwiLzF2MS81NS1Nb29uY2FrZS1lYXNvbi9cIjogW1xuXHRcdFwiMDEtaHcxXCIsXG5cdF0sXG5cblx0XCIvMXYxLzM1LUxpdVlpcmFvL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJRdWl6XCIsXG5cdFx0XHRpY29uOiBcImxpYW54aVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIixcblx0XHRcdFx0XCIwMS1XaGlsZVwiLFxuXHRcdFx0XHRcIjAyLVByb2dyYW1taW5nLUFzc2lnbm1lbnQyXCIsXG5cdFx0XHRcdFwiMDMtQXNzaWdubWVudDJfTXVsdGlwbGVDaG9pY2VcIixcblx0XHRcdFx0XCIwNC0xMDA0X2Fzc2lnbm1lbnQyX3Byb2dyYW1taW5nXCIsXG5cdFx0XHRcdFwiMDUtRmluYWwtUHJvamVjdFwiLFxuXHRcdFx0XHRcIjA2LWNvZGluZ2JhdFwiLFxuXHRcdFx0XHRcIjA3LU1BVExBQi1UdXRvcmlhbC1mb3ItQ2FsY3VsdXMtSUlJLVBhcnQtMVwiLFxuXHRcdFx0XHRcIjA4LXVpYy1weXRob24tYWxsLXF1aXpcIixcblx0XHRcdFx0XCIwOS1tb25pa2FvXCIsXG5cdFx0XHRcdFwiMTAtbGlhbnhpXCIsXG5cdFx0XHRcdFwiMTEtcXVpejdcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS80NS13YW5neHVlcm91L1wiOiBbXG5cdFx0XCIwMVwiXG5cdF0sXG5cdFwiLzF2MS8yMy1nZW5nbWlhby9cIjogW1xuXHRcdFwiMDFcIixcblx0XHRcIjAyXCIsXG5cdF0sXG5cdFwiLzF2MS8xMi1UME1ublwiOiBbXG5cdFx0XCIwMS1EaXBsb21hLWluLUluZm9ybWF0aW9uLVRlY2hub2xvZ3lcIixcblx0XHRcIjAxXCIsXG5cdF0sXG5cdFwiLzF2MS8wNy1BSnVOXCI6IFtcblx0XHRcIjAxLVcxNC1Xb3Jrc2hlZXQtMTQtRmlsZS1JTy1hbmQtQ1NWLUZpbGVzXCIsXG5cdFx0XCIwMi1XdWdzXCIsXG5cdFx0XCIwMy1FeGFtLUZvdW5kYXRpb25zLW9mLUNvbXB1dGluZy1DT01QMTAwMDFfMjAyMl9TTTJcIixcblx0XSxcblx0XCIvMXYxLzA2LUtBSS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTAwXHUzMDAxV2ViXCIsXG5cdFx0XHRpY29uOiBcIndlYlwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtQXNzaWdubWVudC0xLVVuaXhcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIwMS1Bc3NpZ25tZW50LTEtVW5peFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1Bc3NpZ25tZW50Mi1IVE1MXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMDQtQXNzaWdubWVudDItSFRNTFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1Bc3NpZ25tZW50My1DU1NcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIwNS1Bc3NpZ25tZW50My1DU1NcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtQXNzaWdubWVudDQgUmFzdGVyIEdyYXBoaWNzXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMDgtQXNzaWdubWVudDQtUmFzdGVyLUdyYXBoaWNzXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA1LUFzc2lnbm1lbnQ1LVZlY3Rvci1HcmFwaGljc1wiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIjA5LUFzc2lnbm1lbnQ1LVZlY3Rvci1HcmFwaGljc1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNi1Bc3NpZ25tZW50IDY6IFdlYnNpdGUgTGF5b3V0XCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMTEtQXNzaWdubWVudC02LVdlYnNpdGUtTGF5b3V0XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA3LUZpbmFsLVByb2plY3RcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIxMy1GaW5hbC1Qcm9qZWN0XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA4LU1hY3JvLUFzc2lnbm1lbnQtMDEtSFRNTC1DU1MtSGVsbG9Xb3JsZFwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIjE2LU1hY3JvLUFzc2lnbm1lbnQtMDEtSFRNTC1DU1MtSGVsbG9Xb3JsZFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwOS1NYWNybyBBc3NpZ25tZW50IDAyOiBFdmVyeXRoaW5nIGlzIEF3ZXNvbWUhXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMTctTWFjcm8tQXNzaWdubWVudDAyLUV2ZXJ5dGhpbmctaXMtQXdlc29tZVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMC1MYWIwMS13ZWJcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIxOS1MYWIwMS13ZWJcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTEtTGFiMDItd2ViXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMjAtTGFiMDItd2ViXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjEyLUxhYjAzLXdlYlwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIjIxLUxhYjAzLXdlYlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMy1Hb3R0YSBDYXRjaCBlbSBBbGwhXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMjItTWFjcm8tQXNzaWdubWVudC0wMy1Hb3R0YS1DYXRjaC1lbS1BbGxcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTQtTGFiMDQtd2ViXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMjMtTGFiMDQtd2ViXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjE1LUFzc2lnbm1lbnQwNFwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIjI0LU1hY3JvLUFzc2lnbm1lbnQwNC1IYXJyeS1Qb3R0ZXItYW5kLXRoZS1DaGFtYmVyLW9mLXRoZS1ET01cIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTYta2Fvc2hpXCIsIGljb246IFwid2ViXCIsIGxpbms6IFwiMjYta2Fvc2hpXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjE3LUFzc2lnbm1lbnQwNVwiLCBpY29uOiBcIndlYlwiLCBsaW5rOiBcIjI3LUFzc2lnbm1lbnQwNVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxOC1NaWNyby1Bc3NpZ25tZW50MDZcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIyOS1NaWNyby1Bc3NpZ25tZW50MDZcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTktQXNzaWdubWVudDA2LU1hdGNoaW5nLUdhbWVcIiwgaWNvbjogXCJ3ZWJcIiwgbGluazogXCIzMC1Bc3NpZ25tZW50MDYtTWF0Y2hpbmctR2FtZVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIyMC1Bc3NpZ25tZW50IDA3OiBTZXJ2ZXItc2lkZSBRdWl6emluZyBTeXN0ZW1cIiwgaWNvbjogXCJwaHBcIiwgbGluazogXCIzMS1Bc3NpZ25tZW50MDctU2VydmVyLXNpZGUtUXVpenppbmctU3lzdGVtXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjIxLU1pY3JvIEFzc2lnbm1lbnQgMDdcIiwgaWNvbjogXCJwaHBcIiwgbGluazogXCIzMi1NaWNyby1Bc3NpZ25tZW50MDdcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMjItTWljcm8gQXNzaWdubWVudCAwOFwiLCBpY29uOiBcInBocFwiLCBsaW5rOiBcIjMzLU1pY3JvLUFzc2lnbm1lbnQwOFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIzNC1Bc3NpZ25tZW50IDA4XCIsIGljb246IFwicGhwXCIsIGxpbms6IFwiMzQtQXNzaWdubWVudC0wOC1JbnRlcmFjdGl2ZS1EYXRhYmFzZVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIzNS1Bc3NpZ25tZW50IDA5OiBMZXQncyBDaGF0XCIsIGljb246IFwicGhwXCIsIGxpbms6IFwiMzUtQXNzaWdubWVudDA5LUxldHMtQ2hhdFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIzNi1Bc3NpZ25tZW50IDEwOiBOb2RlLmpzOiBMZXQncyBDaGF0XCIsIGljb246IFwicGhwXCIsIGxpbms6IFwiMzYtQXNzaWdubWVudDEwLU5vZGVqc1wiIH0sXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NEU4Q1x1MzAwMUphdmFcIixcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItUGFydC0xLUJpcnRoLURhdGUtQXBwbGljYXRpb24tMzAtcHRzXCIsIGljb246IFwiamF2YVwiLCBsaW5rOiBcIjAyLVBhcnQtMS1CaXJ0aC1EYXRlLUFwcGxpY2F0aW9uLTMwLXB0c1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1NYWMtV2luZG93c1x1NTQ3RFx1NEVFNFx1ODg0Q1x1N0YxNlx1NTE5OUphdmFcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMDMtTWFjLVdpbmRvd3NcdTU0N0RcdTRFRTRcdTg4NENcdTdGMTZcdTUxOTlKYXZhXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA2LVdlYXZpbmctYS1LaWxpbS1DYXJwZXQtQXBwbGljYXRpb25cIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMDYtV2VhdmluZy1hLUtpbGltLUNhcnBldC1BcHBsaWNhdGlvblwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNy1Bc3NpZ25tZW50LTMtamF2YVwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIwNy1Bc3NpZ25tZW50LTMtamF2YVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwOC1Bc3NpZ25tZW50NC1IYW5nbWFuLUdhbWVcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMTAtQXNzaWdubWVudDQtSGFuZ21hbi1HYW1lXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA5LUFzc2lnbm1lbnQzLUJhdHRsZXNoaXBcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMTItQXNzaWdubWVudDMtQmF0dGxlc2hpcFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMC1Bc3NpZ25tZW50NlwiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIxNC1Bc3NpZ25tZW50NlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMS1ncm91cC1od1wiLCBpY29uOiBcImphdmFcIiwgbGluazogXCIxNS1ncm91cC1od1wiIH0sXG5cdFx0XHRcdC8vIHsgdGV4dDogXCIxMi1Qb3N0Zml4LUNhbGN1bGF0b3JcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMjUtUG9zdGZpeC0yQ2FsY3VsYXRvclwiIH0sXG5cdFx0XHRcdC8vIHsgdGV4dDogXCIxMy1RdWV1ZUFzc2lnbm1lbnRcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMjgtUXVldWVBc3NpZ25tZW50XCIgfSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTA5XHUzMDAxXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XCIsXG5cdFx0XHRpY29uOiBcInNodWp1amllZ291LTAxXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCIwMS1EYXRhLVN0cnVjdHVyZXMtUHJvZ3JhbW1pbmctQXNzaWdubWVudC0xLU9PUC1SZXZpZXdcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMTgtRGF0YS1TdHJ1Y3R1cmVzLVByb2dyYW1taW5nLUFzc2lnbm1lbnQtMS1PT1AtUmV2aWV3XCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVBvc3RmaXgtMkNhbGN1bGF0b3JcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMjUtUG9zdGZpeC0yQ2FsY3VsYXRvclwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1RdWV1ZUFzc2lnbm1lbnRcIiwgaWNvbjogXCJqYXZhXCIsIGxpbms6IFwiMjgtUXVldWVBc3NpZ25tZW50XCIgfSxcblxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTU2REJcdTMwMDFcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTAvXHU1RTkzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwibXlzcWxcIixcblx0XHRcdHByZWZpeDogXCJEYXRhYmFzZS1EZXNpZ24tYW5kLUltcGxlbWVudGF0aW9uLVNlY3Rpb24wMDFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCIwMS1zY2hlZHVsZVwiLCBpY29uOiBcImljb25fU1FMXCIsIGxpbms6IFwiMDEtc2NoZWR1bGVcIiB9LFxuXHRcdFx0XHRcIjAyLVJhdy1EYXRhLU11bmdpbmdcIixcblx0XHRcdFx0XCIwMy1RdWl6XCIsXG5cdFx0XHRcdFwiMDMtc3ByZWFkc2hlZXRcIixcblx0XHRcdFx0XCIwNC1TUUwtQ1JVRFwiLFxuXHRcdFx0XHRcIjA1LURhdGEtTm9ybWFsaXphdGlvbi1hbmQtRW50aXR5LVJlbGF0aW9uc2hpcC1EaWFncmFtbWluZ1wiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDUtRXhhbSAxXCIsIGljb246IFwiaWNvbl9TUUxcIiwgbGluazogXCIwNS1FeGFtMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNi1FeGFtIDJcIiwgaWNvbjogXCJpY29uX1NRTFwiLCBsaW5rOiBcIjA2LUV4YW0yXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA3LUFpckJuQiBNb25nb0RCIEFuYWx5c2lzXCIsIGljb246IFwiaWNvbl9TUUxcIiwgbGluazogXCIwNy1BaXJCbkItTW9uZ29EQi1BbmFseXNpc1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwOC1wYW5kYXMtZXhwbG9yYXRpb25cIiwgaWNvbjogXCJpY29uX1NRTFwiLCBsaW5rOiBcIjA4LXBhbmRhcy1leHBsb3JhdGlvblwiIH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIk5vdGVzXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJOb3RlYm9va1wiLFxuXHRcdFx0XHRcdHByZWZpeDogXCJOb3Rlc1wiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcInN1Ym1pdFwiLFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIkNvdXJzZSBpbnRyb1wiLCBpY29uOiBcImEtYmlqaWJlbmJpamkxXCIsIGxpbms6IFwiQ291cnNlLWludHJvXCIgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXG5cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTk0XHUzMDAxQyBcdTdDRkJcdTdFREZcdThCQkVcdTdGNkVcIixcblx0XHRcdGljb246IFwiY1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXG5cdFx0XHRcdHsgdGV4dDogXCJBc3NpZ25tZW50IDFcIiwgaWNvbjogXCJhLWJpamliZW5iaWppMVwiLCBsaW5rOiBcIjM3LUMtQXNzaWdubWVudDFcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiQXNzaWdubWVudCAyXCIsIGljb246IFwiYS1iaWppYmVuYmlqaTFcIiwgbGluazogXCIzOC1Qcm9ncmFtbWluZy1Bc3NpZ25tZW50MlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCJBc3NpZ25tZW50IDNcIiwgaWNvbjogXCJhLWJpamliZW5iaWppMVwiLCBsaW5rOiBcIjM5LVByb2dyYW1taW5nQXNzaWdubWVudDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiUGFydDEgTWFpbiBNZW1vcnlcIiwgaWNvbjogXCJhLWJpamliZW5iaWppMVwiLCBsaW5rOiBcIjQwLUNhY2hlLVByb2plY3QtUGFydDEtTWFpbi1NZW1vcnlcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiUGFydDIgTWFpbiBNZW1vcnlcIiwgaWNvbjogXCJhLWJpamliZW5iaWppMVwiLCBsaW5rOiBcIjQxLUNhY2hlLVByb2plY3QtUGFydDItTDItQ2FjaGVcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiUGFydDMgTWFpbiBNZW1vcnlcIiwgaWNvbjogXCJhLWJpamliZW5iaWppMVwiLCBsaW5rOiBcIjQyLUNhY2hlLVByb2plY3QtUGFydDMtTDEtQ2FjaGVcIiB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJTUUxcIixcblx0XHRcdGljb246IFwibXlzcWxcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Ly8gcHJlZml4OiBcIlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCI0NC1Ib21ld29yazEtc3FsXCIsXG5cdFx0XHRcdFwiNDUtSG9tZXdvcmsyLXNxbFwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJPdGhlclwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Ly8gcHJlZml4OiBcIlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCI0Ny1GYWxsLTIwMjQtTWFjaGluZS1MZWFybmluZy1GaW5hbC1Db21wZXRpdGlvbi1HdWlkZWxpbmVzXCIsXG5cdFx0XHRcdFwiNDYtQ1NDSS1TSFUzNjAtTWFjaGluZS1MZWFybmluZy1Ib21ld29yazRcIixcblx0XHRcdFx0XCI1MC1UZXh0LVBvc3RcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS81OS1DaGVueGktSHVhbmcvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS83MS1ZYW5nWmljaGVuL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvMzEtWmhhbmdTaHVvdGVuZy9cIjogW1xuXHRcdFwiXCIsXG5cdFx0XCIwMS1hc3NpZ25tZW50M1wiLFxuXHRdLFxuXHRcIi8xdjEvMTEtTWFMaW5cIjogW1xuXHRcdFwiMDEtSmF2YS1Id1wiLFxuXHRcdFwiMDItbWlucHJvamVjdFwiLFxuXHRcdFwiMDMtQ291cnNld29yay0yLVdvcmxkLW9mLVp1dWxcIixcblx0XSxcblx0XCIvMXYxLzMyLUZZTi9cIjogW1xuXHRcdFwiXCIsXG5cdFx0XCIwMVwiLFxuXHRdLFxuXHRcIi8xdjEvMDktbGl1amlhaHVpXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkphdmFcIixcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1Db3Vyc2V3b3JrLTEtUHJvcGVydHktVmlld2VyXCIsXG5cdFx0XHRcdFwiMDEtQ291cnNld29yay0xLVByb3BlcnR5LVZpZXdlci16aFwiLFxuXHRcdFx0XHRcIjAyLUNvdXJzZXdvcmstMi1Xb3JsZC1vZi1adXVsXCIsXG5cdFx0XHRcdFwiMDMtQ291cnNld29yay0yLVdvcmxkLW9mLVp1dWwtWkhcIixcblx0XHRcdFx0XCIwNC1DVzEtMjAyMy1CcmllZlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzA4LUxpb25HdW9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIEhXXCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1Ib21ld29yay1Qcm9ibGVtLUROQS1zZXF1ZW5jaW5nXCIsXG5cdFx0XHRcdFwiMDItSG9tZXdvcmstUHJvYmxlbS0yLUFyY3RpYy1JY2VcIixcblx0XHRcdFx0XCIwMy1Ib21ld29yay1Qcm9ibGVtLTMtRmluZGluZy1hbi1leG9wbGFuZXRcIixcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8wMi15dWViYW9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIyMDIyXHU1RTc0XCIsXG5cdFx0XHRpY29uOiBcImppaHVhMlwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLVBsYW5cIixcblx0XHRcdF0sXG5cdFx0fVxuXHRdLFxuXHRcIi8xdjEvMDUtUGF0cmljay9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiSG9tZVdvcmtcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUNJVFMxNDAxLUNvbXB1dGF0aW9uYWwtVGhpbmtpbmctd2l0aC1QeXRob25cIixcblx0XHRcdFx0XCIwMi1DUy1zaGFvc2h1YWktUHl0aG9uLWNzXCIsXG5cdFx0XHRcdFwiMDMtQ0lUUzE0MDEtQ29tcHV0YXRpb25hbC1UaGlua2luZy13aXQtUHl0aG9uXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vSmF2YS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIEphdmEgXHU3RjE2XHU3QTBCXHU1N0ZBXHU3ODQwXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDJcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDNcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDRcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDVcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDZcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDdcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDhcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMDlcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTBcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTJcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTNcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTRcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTVcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTZcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTdcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMThcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMTlcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMjBcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMjFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDEvMjJcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1N0FFMCBKYXZhXHU5NzYyXHU1NDExXHU1QkY5XHU4QzYxXHU3RjE2XHU3QTBCXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjNcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjRcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjVcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjZcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjdcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjhcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMjlcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzBcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzJcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzNcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzRcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzVcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzZcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzdcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzhcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvMzlcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvNDBcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvNDFcIixcblx0XHRcdFx0XCJjaGFwdGVyMDIvNDJcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZRQVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRpY29uOiBcImphdmFcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiRlFBLzAxLVdoeS1kby1zd2l0Y2gtY2FzZS1zdGF0ZW1lbnRzLW5lZWQtdG8taW5jbHVkZS1icmVha3NcIixcblx0XHRcdFx0XCJGUUEvMDItSmF2YS1TdHJpbmctdG8taW50LVRyYW5zbGF0ZVwiLFxuXHRcdFx0XHRcIkZRQS8wMy1mb3ItZ2VuZXJhdGUtcmhvbWJ1c1wiLFxuXHRcdFx0XHRcIkZRQS8wNS1KYXZhLXRyaW0oKVx1NjVCOVx1NkNENVwiLFxuXHRcdFx0XHRcIkZRQS8wNi1pbnN0YW5jZS1vYmplY3RcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4ODY1XHU1MTQ1XCIsXG5cdFx0XHRpY29uOiBcImphdmFcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJzdXBwbGVtZW50LzAxLUphdmEtU3RyaW5nLWNvbnRhaW5zLU1ldGhvZFwiLFxuXHRcdFx0XHRcInN1cHBsZW1lbnQvMDItSmF2YS1TdHJpbmctY2hhckF0LU1ldGhvZFwiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUXVpelwiLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiUXVpei9xdWl6MDFcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlRlc3RcIixcblx0XHRcdGljb246IFwiamF2YVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiVGVzdC9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1OTg5OFx1NzZFRVwiLFxuXHRcdFx0XHRcdGljb246IFwieW9uZ3lhblwiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcInRlc3QwMVwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjU0XHU2ODQ4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJrZXB1amlhb3l1XCIsXG5cdFx0XHRcdFx0cHJlZml4OiBcIkFuc3dlci9cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJ0ZXN0MDEtYW5zd2VyXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1N0VDM1x1NEU2MFx1OTg5OFwiLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRwcmVmaXg6IFwicHJhY3RpY2VcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1BcnJheS1leGVyY2lzZVwiXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vdGlhbmNoaS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NTE2NVx1OTVFOFx1NEUwRVx1NUI5RVx1OERGNVwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJQeXRob24vUHl0aG9uMDFcIlxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8yNS1DeW50aGlhL1wiOiBbXG5cdFx0eyB0ZXh0OiBcIjAxLVx1NTNEOFx1OTFDRlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjAxLm1kXCIgfSxcblx0XHR7IHRleHQ6IFwiMDItXHU1MjFEXHU4QkM2XHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMDIubWRcIiB9LFxuXHRcdHsgdGV4dDogXCIwMy1cdTY1NzBcdTVCNTdcdTU3OEJcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwMy5tZFwiIH0sXG5cdF0sXG5cdFwiLzF2MS8xOS16aGFvamlud2VpL1wiOiBbXG5cdFx0XCJcIixcblx0XHRcIjAxXCIsXG5cdFx0XCIwMlwiLFxuXHRcdFwiMDNcIixcblx0XSxcblx0XCIvMXYxLzEwLWphdmEtbm90ZS9cIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIEphdmFcdTdGMTZcdTdBMEJcdTU3RkFcdTc4NDAgKDMwXHU4QkIyKVwiLFxuXHRcdFx0aWNvbjogXCJqYXZhXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCJcblx0XHRcdF1cblxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzE3LVIvXCI6IFtcblx0XHRcIlwiLFxuXHRcdFwiMDFcIixcblx0XSxcblx0XCIvMXYxLzAxLVRob21hcy1ody1ub3RlL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTY0MkRcdTVFRkFcdTRFMkFcdTRFQkFcdTUzNUFcdTVCQTJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMi1Db2Nvc1wiLFxuXHRcdFx0XHRcIjAzLXdlYjAyXCIsXG5cdFx0XHRcdFwiMDQtd2ViMDNcIixcblx0XHRcdFx0XCIwNS13ZWIwNFwiLFxuXHRcdFx0XHRcIjA2LXdlYjA1XCIsXG5cdFx0XHRcdFwiMDctd2ViMDZcIixcblx0XHRcdFx0XCIwOC13ZWIwN1wiLFxuXHRcdFx0XHRcIjA5LXdlYjA4XCIsXG5cdFx0XHRcdFwiMTAtd2ViMDlcIixcblx0XHRcdFx0XCIxMS13ZWIxMFwiLFxuXHRcdFx0XHRcIjEyLXdlYjExXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlB5dGhvbiBcdTU3RkFcdTc4NDBcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1WYXJpYWJsZVwiLFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItXHU1MjFEXHU4QkM2XHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMTMtUHl0aG9uMDFcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTQtXHU3QjJDXHU0RThDXHU4MjgyLVx1NTIxRFx1OEJDNlx1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4QlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjE0LVx1N0IyQ1x1NEU4Q1x1ODI4Mi1cdTUyMURcdThCQzZcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEJcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTUtXHU2NTcwXHU1QjU3XHU1NzhCXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMTUtXHU2NTcwXHU1QjU3XHU1NzhCXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjE2LVx1NUI1N1x1N0IyNlx1NEUzMlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjE2LXB5dGhvbi1zdHJpbmdcIiB9LFxuXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vcHl0aG9uNjAvXCI6IFtcblx0XHR7IHRleHQ6IFwiRGF5IDFcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwMVwiIH0sXG5cdFx0eyB0ZXh0OiBcIkRheSAyXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMDJcIiB9LFxuXHRcdHsgdGV4dDogXCJEYXkgM1wiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjAzXCIgfSxcblx0XHR7IHRleHQ6IFwiRGF5IDRcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwNFwiIH0sXG5cdFx0eyB0ZXh0OiBcIkRheSA1XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMDVcIiB9LFxuXHRcdHsgdGV4dDogXCJEYXkgNlwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjA2XCIgfSxcblx0XHR7IHRleHQ6IFwiRGF5IDdcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIwN1wiIH0sXG5cdFx0eyB0ZXh0OiBcIkRheSA4XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMDhcIiB9LFxuXHRcdHsgdGV4dDogXCJEYXkgOVwiLCBpY29uOiBcInB5dGhvblwiLCBsaW5rOiBcIjA5XCIgfSxcblx0XHR7IHRleHQ6IFwiRGF5IDEwXCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiMTBcIiB9LFxuXHRcdHsgdGV4dDogXCJEYXkgMTFcIiwgaWNvbjogXCJweXRob25cIiwgbGluazogXCIxMVwiIH0sXG5cdF0sXG5cdFwiL2FyY2hpdmVzL1wiOiBcInN0cnVjdHVyZVwiLFxuXHQvLyBcIi9ibG9nL2NyYXdsZXIvXCI6IFwic3RydWN0dXJlXCIsXG5cdC8vIFwiL2Jsb2cvMjAyMi9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL2RhdGFfYW5hbHlzaXNcIjogW1xuXHRcdHtcblx0XHRcdHRleHQ6IFwicHllY2hhcnRzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwicHllY2hhcnRzLzAxXCIsXG5cdFx0XHRcdFwicHllY2hhcnRzLzAyXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZBUVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIkZBUS8wMS1FeGNlbFx1NEUyRCQubWRcIixcblx0XHRcdFx0XCJGQVEvMDJcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNYXRoIEJhc2VcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLVx1NUU3M1x1NTc0N1x1NURFRVwiLCBpY29uOiBcInpodXpodWFuZ3R1XCIsIGxpbms6IFwiTWF0aC8wMS1tZWFuLWRldmlhdGlvblwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTY4MDdcdTUxQzZcdTVERUVcdTU0OENcdTY1QjlcdTVERUVcIiwgaWNvbjogXCJ6aHV6aHVhbmd0dVwiLCBsaW5rOiBcIk1hdGgvMDItc3RhbmRhcmQtZGV2aWF0aW9uXCIgfVxuXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MDQ1XHU4QkIyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIkludHJvZHVjdGlvbiAoTGVjdHVyZSAxKVwiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIkRhdGEtYW5hbHlzaXMtcHJhY3RpY2UtNDUtbGVjdHVyZXMvUGhhc2Utb25lLzAxXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJNb2R1bGUgMjogRGF0YSBBbmFseXNpcyBBbGdvcml0aG1zICgyMCBsZWN0dXJlcylcIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJEYXRhLWFuYWx5c2lzLXByYWN0aWNlLTQ1LWxlY3R1cmVzL1BoYXNlLXRocmVlLzAxXCIsXG5cdFx0XHRcdFx0XHRcIkRhdGEtYW5hbHlzaXMtcHJhY3RpY2UtNDUtbGVjdHVyZXMvUGhhc2UtdGhyZWUvMDJcIixcblx0XHRcdFx0XHRcdFwiRGF0YS1hbmFseXNpcy1wcmFjdGljZS00NS1sZWN0dXJlcy9QaGFzZS10aHJlZS8wM1wiLFxuXHRcdFx0XHRcdFx0XCJEYXRhLWFuYWx5c2lzLXByYWN0aWNlLTQ1LWxlY3R1cmVzL1BoYXNlLXRocmVlLzA0LTFcIixcblx0XHRcdFx0XHRcdFwiRGF0YS1hbmFseXNpcy1wcmFjdGljZS00NS1sZWN0dXJlcy9QaGFzZS10aHJlZS8wNC0yXCIsXG5cdFx0XHRcdFx0XHRcIkRhdGEtYW5hbHlzaXMtcHJhY3RpY2UtNDUtbGVjdHVyZXMvUGhhc2UtdGhyZWUvMTdcIixcblx0XHRcdFx0XHRcdFwiRGF0YS1hbmFseXNpcy1wcmFjdGljZS00NS1sZWN0dXJlcy9QaGFzZS10aHJlZS8xOFwiLFxuXHRcdFx0XHRcdFx0XCJEYXRhLWFuYWx5c2lzLXByYWN0aWNlLTQ1LWxlY3R1cmVzL1BoYXNlLXRocmVlLzI0XCIsXG5cdFx0XHRcdFx0XHRcIkRhdGEtYW5hbHlzaXMtcHJhY3RpY2UtNDUtbGVjdHVyZXMvUGhhc2UtdGhyZWUvMjVcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTg4NjVcdTUxNDVcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJzdXBwbGVtZW50LzAxLVx1NjcwMFx1OEZEMVx1OTBCQlx1N0I5N1x1NkNENUtOTlwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0Ly8gXCIvbGVhcm5pbmdfd2ViL1wiOiBbXG5cdC8vIFx0XCJcIixcblx0Ly8gXHRcIjAxXCIsXG5cdC8vIF0sXG5cdFwiL2NvbHVtbi9kYXRhLXN0cnVjdHVyZS9cIjogW1xuXHRcdHtcblx0XHRcdC8vIHRleHQ6IFwiXHU5NjM2XHU2QkI1XHU0RTAwXHVGRjFBXHU3Qjk3XHU2Q0Q1XHU0RTBFXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU1N0ZBXHU3ODQwXCIsXG5cdFx0XHR0ZXh0OiBcIlx1N0I5N1x1NkNENVx1NEUwRVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NTdGQVx1Nzg0MFwiLFxuXHRcdFx0aWNvbjogXCJlbXBsb3llZS1yYW5rXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTU0NjggXHU3RUJGXHU2MDI3XHU2N0U1XHU2MjdFXHU2Q0Q1XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJzaHVqdWppZWdvdVwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1N0FFMCBcdTZCMjJcdThGQ0VcdTU5MjdcdTVCQjZcdTY3NjVcdTUyMzBcdTdCOTdcdTZDRDVcdTRFMEVcdTY1NzBcdTYzNkVcdTdFRDNcdTY3ODRcdTc2ODRcdTRFMTZcdTc1NENcIixcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcIndlZWsxLzAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJ3ZWVrMS8wMlwiLFxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVx1NEU0Qlx1N0Y4RVwiLFxuXHRcdFx0aWNvbjogXCJsYWJvcmF0b3J5bGFiXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0XHRcdGljb246IFwic2h1anVqaWVnb3VcIixcblx0XHRcdFx0XHRwcmVmaXg6IFwiVGhlLWJlYXV0eS1vZi1kYXRhLXN0cnVjdHVyZXMtYW5kLWFsZ29yaXRobXMvXCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTVGMDBcdTdCQzdcdThCQ0RcIiwgaWNvbjogXCJzaHVqdWppZWdvdS0wMVwiLCBsaW5rOiBcIjAwLVx1NUYwMFx1N0JDN1x1OEJDRC1cdTRFQ0VcdTRFQ0FcdTU5MjlcdThENzctXHU4REU4XHU4RkM3XHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU0RTBFXHU3Qjk3XHU2Q0Q1XHU4RkQ5XHU5MDUzXHU1NzRFXCIgfVxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU1MTY1XHU5NUU4XHU3QkM3XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJzaHVqdWppZWdvdVwiLFxuXHRcdFx0XHRcdHByZWZpeDogXCJUaGUtYmVhdXR5LW9mLWRhdGEtc3RydWN0dXJlcy1hbmQtYWxnb3JpdGhtcy9cIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjAxLVx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NTQ4Q1x1N0I5N1x1NkNENVx1RkYxRlwiLCBpY29uOiBcInNodWp1amllZ291LTAxXCIsIGxpbms6IFwiMDEtXHU0RTNBXHU0RUMwXHU0RTQ4XHU4OTgxXHU1QjY2XHU0RTYwXHU2NTcwXHU2MzZFXHU3RUQzXHU2Nzg0XHU1NDhDXHU3Qjk3XHU2Q0Q1XCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwMi1cdTlBRDhcdTY1NDhcdTU3MzBcdTVCNjZcdTRFNjBcIiwgaWNvbjogXCJzaHVqdWppZWdvdS0wMVwiLCBsaW5rOiBcIjAyLVx1NTk4Mlx1NEY1NVx1NjI5M1x1NEY0Rlx1OTFDRFx1NzBCOVx1RkYwQ1x1N0NGQlx1N0VERlx1OUFEOFx1NjU0OFx1NTczMFx1NUI2Nlx1NEU2MFx1NjU3MFx1NjM2RVx1N0VEM1x1Njc4NFx1NEUwRVx1N0I5N1x1NkNENVx1RkYxRlwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiMDMtXHU1OTBEXHU2NzQyXHU1RUE2XHU1MjA2XHU2NzkwXHVGRjA4XHU0RTBBXHVGRjA5XCIsIGljb246IFwic2h1anVqaWVnb3UtMDFcIiwgbGluazogXCIwMy1cdTU5MERcdTY3NDJcdTVFQTZcdTUyMDZcdTY3OTBcdUZGMDhcdTRFMEFcdUZGMDlcdUZGMUFcdTU5ODJcdTRGNTVcdTUyMDZcdTY3OTBcdTMwMDFcdTdFREZcdThCQTFcdTdCOTdcdTZDRDVcdTc2ODRcdTYyNjdcdTg4NENcdTY1NDhcdTczODdcdTU0OENcdThENDRcdTZFOTBcdTZEODhcdTgwMTdcdUZGMUZcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjA0LVx1NTkwRFx1Njc0Mlx1NUVBNlx1NTIwNlx1Njc5MFx1RkYwOFx1NEUwQlx1RkYwOVwiLCBpY29uOiBcInNodWp1amllZ291LTAxXCIsIGxpbms6IFwiMDQtXHU1OTBEXHU2NzQyXHU1RUE2XHU1MjA2XHU2NzkwXHVGRjA4XHU0RTBCXHVGRjA5XHVGRjFBXHU2RDQ1XHU2NzkwXHU2NzAwXHU1OTdEXHUzMDAxXHU2NzAwXHU1NzRGXHUzMDAxXHU1RTczXHU1NzQ3XHUzMDAxXHU1NzQ3XHU2NDRBXHU2NUY2XHU5NUY0XHU1OTBEXHU2NzQyXHU1RUE2XCIgfSxcblxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU1N0ZBXHU3ODQwXHU3QkM3XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJzaHVqdWppZWdvdVwiLFxuXHRcdFx0XHRcdHByZWZpeDogXCJUaGUtYmVhdXR5LW9mLWRhdGEtc3RydWN0dXJlcy1hbmQtYWxnb3JpdGhtcy9cIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjA1LVx1NEUzQVx1NEVDMFx1NEU0OFx1NjU3MFx1N0VDNFx1NEVDRTBcdTVGMDBcdTU5Q0JcdTdGMTZcdTUzRjc/XCIsIGljb246IFwic2h1anVqaWVnb3UtMDFcIiwgbGluazogXCIwNS1cdTY1NzBcdTdFQzRcdUZGMUFcdTRFM0FcdTRFQzBcdTRFNDhcdTVGODhcdTU5MUFcdTdGMTZcdTdBMEJcdThCRURcdThBMDBcdTRFMkRcdTY1NzBcdTdFQzRcdTkwRkRcdTRFQ0UwXHU1RjAwXHU1OUNCXHU3RjE2XHU1M0Y3XHVGRjFGXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwNi1cdTk0RkVcdTg4NjhcdTMwMENcdTRFMEFcdTMwMERcIiwgaWNvbjogXCJzaHVqdWppZWdvdS0wMVwiLCBsaW5rOiBcIjA2LVx1OTRGRVx1ODg2OFx1RkYwOFx1NEUwQVx1RkYwOVx1RkYxQVx1NTk4Mlx1NEY1NVx1NUI5RVx1NzNCMExSVVx1N0YxM1x1NUI1OFx1NkREOFx1NkM3MFx1N0I5N1x1NkNENVx1RkYxRlwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiMDctXHU5NEZFXHU4ODY4XHUzMDBDXHU0RTBCXHUzMDBEXCIsIGljb246IFwic2h1anVqaWVnb3UtMDFcIiwgbGluazogXCIwNy1cdTk0RkVcdTg4NjhcdUZGMDhcdTRFMEJcdUZGMDlcdUZGMUFcdTU5ODJcdTRGNTVcdThGN0JcdTY3N0VcdTUxOTlcdTUxRkFcdTZCNjNcdTc4NkVcdTc2ODRcdTk0RkVcdTg4NjhcdTRFRTNcdTc4MDFcdUZGMUZcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjA4LVx1NjgwOFwiLCBpY29uOiBcInNodWp1amllZ291LTAxXCIsIGxpbms6IFwiMDgtXHU2ODA4XHVGRjFBXHU1OTgyXHU0RjU1XHU1QjlFXHU3M0IwXHU2RDRGXHU4OUM4XHU1NjY4XHU3Njg0XHU1MjREXHU4RkRCXHU1NDhDXHU1NDBFXHU5MDAwXHU1MjlGXHU4MEZEXHVGRjFGXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwOS1cdTk2MUZcdTUyMTdcIiwgaWNvbjogXCJzaHVqdWppZWdvdS0wMVwiLCBsaW5rOiBcIjA5LVx1OTYxRlx1NTIxN1x1RkYxQVx1OTYxRlx1NTIxN1x1NTcyOFx1N0VCRlx1N0EwQlx1NkM2MFx1N0I0OVx1NjcwOVx1OTY1MFx1OEQ0NFx1NkU5MFx1NkM2MFx1NEUyRFx1NzY4NFx1NUU5NFx1NzUyOFwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiMTAtXHU5MDEyXHU1RjUyXHVGRjFBXHU2MjdFXHU1MjMwXHUyMDFDXHU2NzAwXHU3RUM4XHU2M0E4XHU4MzUwXHU0RUJBXHUyMDFEXCIsIGljb246IFwic2h1anVqaWVnb3UtMDFcIiwgbGluazogXCIxMC1cdTkwMTJcdTVGNTJcdUZGMUFcdTU5ODJcdTRGNTVcdTc1MjhcdTRFMDlcdTg4NENcdTRFRTNcdTc4MDFcdTYyN0VcdTUyMzBcdTIwMUNcdTY3MDBcdTdFQzhcdTYzQThcdTgzNTBcdTRFQkFcdTIwMURcdUZGMUZcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjIxLVx1NTRDOFx1NUUwQ1x1N0I5N1x1NkNENVx1RkYwOFx1NEUwQVx1RkYwOVwiLCBpY29uOiBcInNodWp1amllZ291LTAxXCIsIGxpbms6IFwiMjEtXHU1NEM4XHU1RTBDXHU3Qjk3XHU2Q0Q1XHU0RTBBLVx1NTk4Mlx1NEY1NVx1OTYzMlx1NkI2Mlx1NjU3MFx1NjM2RVx1NUU5M1x1NEUyRFx1NzY4NFx1NzUyOFx1NjIzN1x1NEZFMVx1NjA2Rlx1ODhBQlx1ODEzMVx1NUU5M1x1RkYxRlwiIH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlRpcHNcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0aWNvbjogXCJzaGVxdS1qaWh1b1wiLFxuXHRcdFx0cHJlZml4OiBcIlRpcHNcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDEtQ2xpbWJpbmctdGhlLVN0YWlyc1wiLFxuXHRcdFx0XHRcIjAyLUphdmEtU3RhY2tcIixcblx0XHRcdFx0XCIwMy1iaW5hcnlzZWFyY2gtdG8tbG9nMm5cIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwic3VwcGxlbWVudFwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRpY29uOiBcImFsaXNpc1wiLFxuXHRcdFx0cHJlZml4OiBcInN1cHBsZW1lbnRcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiYmlnLU8tcHJvb2YtYW5kLWJpZy1cdTAzOThwcm9vZlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJNYWtlcll1ZVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRpY29uOiBcIndvcmtzaGVldFwiLFxuXHRcdFx0cHJlZml4OiBcIk1ha2VyWXVlXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIndlZWsxLXB5dGhvbi1iYXNpY3MtYW5kLWxpbmtlZC1saXN0c1wiLFxuXHRcdFx0XHRcIndlZWsxLXNvbHV0aW9uXCIsXG5cdFx0XHRcdFwid2VlazItbGlua2VkLWxpc3RzLWFic3RyYWN0LWRhdGEtdHlwZXNcIixcblx0XHRcdFx0XCJXZWVrMy1Bc3ltcHRvdGljLWFuYWx5c2lzLTFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQWxnb3JpdGhtIEdlbmVyYWxcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0aWNvbjogXCJ6aHVhbmppYWtldGFuZy1qaWh1b1wiLFxuXHRcdFx0cHJlZml4OiBcIkFsZ29yaXRobS1HZW5lcmFsLTE2XCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAwLUVyYS1vZi1IdW1hbi1NYWNoaW5lLUludGVyYWN0aW9uLVVuZGVyc3RhbmRpbmctQWxnb3JpdGhtcy1mb3ItU3VjY2Vzc1wiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gXHU3Qjk3XHU2Q0Q1XCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0cHJlZml4OiBcIlB5dGhvbi1EU0FcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMC1jaGFwdGVyLWNvbXB1dGF0aW9uYWwtY29tcGxleGl0eVwiLFxuXHRcdFx0XHRcIjAxLWJvZ29zb3J0LXNvcnRpbmctYWxnb3JpdGhtc1wiLFxuXHRcdFx0XHRcIjAyLUluc2VydGlvbi1Tb3J0XCIsXG5cdFx0XHRcdFwiMDMtbGluZWFyLXNlYXJjaFwiLFxuXHRcdFx0XHRcIjA0LWJpbmFyeS10cmVlXCIsXG5cdFx0XHRcdFwiMDUtUHJpbXMtYWxnb3JpdGhtXCIsXG5cdFx0XHRcdFwiMDYtS3J1c2thbC1hbGdvcml0aG1cIixcblx0XHRcdFx0XCIwNy1oYXNoX21hcFwiLFxuXHRcdFx0XVxuXHRcdH1cblxuXG5cdF0sXG5cdFwiL2NvbHVtbi9BSS1wcmFjdGljZS1jbGFzcy1mb3ItZnJvbnQtZW5kLWVuZ2luZWVycy9cIjogW1xuXHRcdFwiMDFcIlxuXHRdLFxuXHRcIi8xdjEvOTUtRGlvdGFpL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvOTQtR3JlZ3JlXy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzUxLVllRGFubmluZy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzkyLWx6dGMxNzUxL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vVGVuc29yRmxvdy9cdTk2RjZcdTU3RkFcdTc4NDBcdTVCOUVcdTYyMThcdTY3M0FcdTU2NjhcdTVCNjZcdTRFNjAvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRCAoMVx1OEJCMilcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJcIlxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUxQzZcdTU5MDdcdTdCQzcgKDRcdThCQjIpXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XHRcIjAzXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vUHJvZ3JhbW1pbmd0aGlua2luZy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvZGVkYW8vMDEtWHVlLVpoYW9mZW5ncy1lY29ub21pY3MtY2xhc3MvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OEJGRVx1NTI0RFx1NUZDNVx1OEJGQigxXHU4QkIyKVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXHRcIi9jb2x1bW4vRmlmdGhfYnJvdGhlcl9waG90b2dyYXBoeV9jbGFzcy9cIjogW1xuXHRcdFwiXCIsXG5cdF0sXG5cdFwiL0NvZGUxdjEvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiY2hhcHRlcjFcIixcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cblx0XHRcdF1cblx0XHR9LFxuXHRcdFwiY2hhbmdlbG9nXCIsXG5cdFx0XCJEZXZlbG9wbWVudC1wbGFuXCJcblx0XHQvLyB7XG5cdFx0Ly8gXHR0ZXh0OiBcIkNoYW5nZWxvZ1wiLFxuXHRcdC8vIFx0aWNvbjogXCJ0aW1lXCIsXG5cdFx0Ly8gXHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHQvLyBcdGNoaWxkcmVuOiBbXG5cdFx0Ly8gXHRcdFwiY2hhbmdlbG9nXCIsXG5cdFx0Ly8gXHRdXG5cdFx0Ly8gfSxcblxuXHRdLFxuXHRcIi9jb2x1bW4vUFBUL1wiOiBbXG5cdFx0XCJub3RlXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDA6XHU5NkY2XHU1N0ZBXHU3ODQwXHU1QjY2XHU0RTYwIFBQVFwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEU4QzpQUFQgXHU2NTM5XHU0RTExXHU4QkExXHU1MjEyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCJcblx0XHRcdF1cblx0XHR9LFxuXHRdLFxuXHRcIi9wb3N0cy9cIjogXCJzdHJ1Y3R1cmVcIixcblx0Ly8gXCIvcG9zdHMvaHRtbFwiOiBcInN0cnVjdHVyZVwiLFxuXHQvLyBcIi9PcGVuX3VwX3lvdXJfcGF0dGVybi9cIjogW1xuXHQvLyBcdFwiMDFcIixcblx0Ly8gXHRcIjAyXCJcblx0Ly8gXSxcblx0XCIvT3Blbl91cF95b3VyX3BhdHRlcm4vXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL2NvbHVtbi93ZWIvXCI6IFtcblx0XHRcImNhdGFsb2d1ZVwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiV2ViIFx1NTI0RFx1N0FFRlx1NTE2NVx1OTVFOFx1NjI2Qlx1NzZGMlx1OEJGRVx1N0EwQlwiLFxuXHRcdFx0aWNvbjogXCIyNGdsLWZvbGRlck9wZW5cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIFdlYiBcdTY5ODJcdThGRjBcIixcblx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcImJhc2UvXCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wMVwiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFOENcdTdBRTAgSFRNTCBcdTUxNjVcdTk1RThcIixcblx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wM1wiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDRcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA1XCIsXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wNlwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTA5XHU3QUUwIENTUyBcdTUxNjVcdTk1RThcIixcblx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8wN1wiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMDhcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzA5XCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkNcdTU2REJcdTdBRTAgSmF2YVNjcmlwdCBcdTUxNjVcdTk1RThcIixcblx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcImJhc2UvYmFzZV8xMFwiLFxuXHRcdFx0XHRcdFx0XCJiYXNlL2Jhc2VfMTFcIixcblx0XHRcdFx0XHRcdFwiYmFzZS9iYXNlXzEyXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUyNERcdTdBRUZcdTVERTVcdTdBMEJcdTVFMDgyMDIyXHU3MjQ4XCIsXG5cdFx0XHRpY29uOiBcIjI0Z2wtZm9sZGVyT3BlblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTk2MzZcdTZCQjVcdTRFMDBcdUZGMUFcdTUyNERcdTdBRUZcdTU3RkFcdTc4NDBcdTUxNjVcdTk1RThcIixcblx0XHRcdFx0XHRpY29uOiBcIjI0Z2wtZm9sZGVyT3BlblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDMVx1NTQ2ODogSFRNTDUgXHU1N0ZBXHU3ODQwXHU4QkVEXHU2Q0Q1XHU0RTBFXHU2ODA3XHU3QjdFXCIsXG5cdFx0XHRcdFx0XHRcdGljb246IFwibmV0d29ya1wiLFxuXHRcdFx0XHRcdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1NTI0RFx1N0Y2RVx1NUYxNVx1NUJGQ1x1OEJGRVx1RkYwOFx1OEJGRVx1NTI0RFx1NUZDNVx1NzcwQlx1RkYwOVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU3QUUwIFx1OEJGRVx1N0EwQlx1N0I4MFx1NEVDQlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwiV2ViXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzAyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDNcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzJcdTdBRTAgXHU1MjREXHU3QUVGXHU1RjAwXHU1M0QxXHU4ODRDXHU2MEM1XHU0RTBFXHU4QkZFXHU3QTBCXHU0RjUzXHU3Q0ZCXHU0RUNCXHU3RUNEXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHQvLyBjb2xsYXBzYWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18wNlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMDhcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzNcdTdBRTAgXHU1RjAwXHU1M0QxXHU1REU1XHU1MTc3XHU1NDhDXHU3M0FGXHU1ODgzXHU1MUM2XHU1OTA3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzA5XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMTBcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18xMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDNFx1N0FFMCBcdThCRkVcdTdBMEJcdTYwM0JcdTdFRDNcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMTJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0XHRcdFx0XVxuXHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogXCJIVE1MNVx1OEJFRFx1NkNENVx1NEUwRVx1NTdGQVx1Nzg0MFx1NjgwN1x1N0I3RVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU3QUUwIFx1OEJGRVx1N0EwQlx1N0I4MFx1NEVDQlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGljb246IFwiV2ViXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18xM1wiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzJcdTdBRTAgXHU4QkE0XHU4QkM2XHU0RTkyXHU4MDU0XHU3RjUxXHUzMDBDXHU0RTg2XHU4OUUzXHU1MzczXHU1M0VGXHUzMDBEXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWNvbjogXCJXZWJcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzE0XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDM1x1N0FFMCBcdTU3RkFcdTc4NDBcdThCRURcdTZDRDVcdTRFMEVcdTcyNzlcdTYwMjdcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpY29uOiBcIldlYlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMTVcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18xNlwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XCJ0eGsvd2VlazEvdHhrXzE3XCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcInR4ay93ZWVrMS90eGtfMThcIixcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFwidHhrL3dlZWsxL3R4a18xOVwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdFx0XHR9LFxuXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH0sXG5cblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU3NTM1XHU1QjUwXHU2NTU5XHU4Rjg1XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiYm9vay9odG1sLTAxXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZBUVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIkZBUS8wMS1IVE1MXHU1NkZFXHU3MjQ3XHU1RTc2XHU2MzkyXHU2NjNFXHU3OTNBXCIsXG5cdFx0XHRcdFwiRkFRLzAyLWZvb3RlclwiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvMXYxLzgxLWd1aXpoaXlpL1wiOiBcInN0cnVjdHVyZVwiLFxuXG5cdFwiLzF2MS84Ny1GaW5hbC1hc3NpZ25tZW50L1wiOiBcInN0cnVjdHVyZVwiLFxuXG5cdFwiL2NvbHVtbi9lYXN5X3NxbC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTgwMDFcdTUzRjhcdTY3M0FcdTVFMjZcdTRGNjBcdThGN0JcdTY3N0VcdTczQTlcdThGNkMgU1FMXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQzFcdTdBRTA6XHU1N0ZBXHU3ODQwXHU2NTU5XHU3QTBCXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJqaWVkaWFuc3FsXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwib2xkLWhhbmQvMDEtSXMtaXQtbmVjZXNzYXJ5LXRvLWxlYXJuLVNRTC1hdC10aGlzLXRpbWVcIixcblx0XHRcdFx0XHRcdFwib2xkLWhhbmQvMDItVW5kZXJzdGFuZC10aGUtcmVsYXRpb25zaGlwLWJldHdlZW4tZGF0YWJhc2VzLWFuZC10aGUtU1FMLWxhbmd1YWdlXCIsXG5cdFx0XHRcdFx0XHRcIm9sZC1oYW5kLzAzLVByZWxpbWluYXJ5LXN0dWR5LW9mLWRhdGFiYXNlLVRoZS11c2Utb2Ytc2ltcGxlLXF1ZXJ5LXN0YXRlbWVudHNcIixcblx0XHRcdFx0XHRdXG5cblx0XHRcdFx0fSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU1FML015U1FMIFx1OTZGNlx1NTdGQVx1Nzg0MFx1NEVDRVx1NTE2NVx1OTVFOFx1NTIzMFx1N0NCRVx1OTAxQVwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU4MjgyOkludHJvZHVjdGlvbiBhbmQgSW5zdGFsbGF0aW9uXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJqaWVkaWFuc3FsXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiRWFzeS1TcWwtTXlzcWwvXHU3QjJDMVx1ODI4Mi1JbnRyb2R1Y3Rpb24tYW5kLUluc3RhbGxhdGlvbi8wMS1XaGF0LURhdGFiYXNlXCIsXG5cdFx0XHRcdFx0XHRcIkVhc3ktU3FsLU15c3FsL1x1N0IyQzFcdTgyODItSW50cm9kdWN0aW9uLWFuZC1JbnN0YWxsYXRpb24vMDItc3FsLWFuZC1ub3NxbFwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiU1FMXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCJTUUxcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDAtc3FsLXR1dG9yaWFsXCIsXG5cdFx0XHRcdFwiMDEtc3FsLWludHJvXCIsXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJTUUwgXHU0RjUzXHU3Q0ZCXHU4QkZFXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwibXlzcWxcIixcblx0XHRcdHByZWZpeDogXCJTeXN0ZW1hdGljLWNvdXJzZVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS13aHktZGF0YWJhc2VcIixcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlNRTCBUaXBzXCIsXG5cdFx0XHRpY29uOiBcIm15c3FsXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCJUaXBzXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxLUVSXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XSxcblx0XCIvY29sdW1uL3Bob3RvZ3JhcGh5L1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTU2NjhcdTY3NTBcdTU3RkFcdTc4NDBQbHVzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NUI2Nlx1NTI0RFx1NzNFRFwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNhYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIlwiLFxuXHRcdFx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcdFx0XCIwMlwiLFxuXHRcdFx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcdFx0XCIwNVwiLFxuXHRcdFx0XHRcdFx0XCIwNlwiLFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXHRcdFx0XVxuXHRcdH1cblxuXHRdLFxuXHRcIi9jb2x1bW4vcGRmL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJJVFx1N0M3QlwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIlwiLFxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cdFwiL2NvbHVtbi90aWppZS9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTcyNUJcdTVCQTJcdTdGNTFcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU1MzRFXHU0RTNBXHU2NzNBXHU4QkQ1XCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2FibGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwibmt3X2h3MDFcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDJcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDNcIixcblx0XHRcdFx0XHRcdFwibmt3X2h3MDRcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTAwXHU2NzJDXHU5MDFBXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlB5dGhvblx1OEJFRFx1OEEwMFx1NTE2NVx1OTVFOFwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTlcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTk4N0FcdTVFOEZcdTdFRDNcdTY3ODRcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcInlidF9weTAxXCIsXG5cdFx0XHRcdFx0XHRcInlidF9weTAyXCIsXG5cdFx0XHRcdFx0XHRcInlidF9weTE4XCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU2M0E3XHU1MjM2XHU3RUQzXHU2Nzg0XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHQvLyBjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJ5YnRfcHkwM1wiLFxuXHRcdFx0XHRcdFx0XCJ5YnRfcHkwNFwiLFxuXHRcdFx0XHRcdFx0XCJ5YnRfcHkwNlwiLFxuXHRcdFx0XHRcdFx0XCJ5YnRfcHkwOFwiLFxuXHRcdFx0XHRcdFx0XCJ5YnRfcHkwOVwiLFxuXHRcdFx0XHRcdFx0XCJ5YnRfcHkxMFwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NUZBQVx1NzNBRlx1N0VEM1x1Njc4NFwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwieWJ0X3B5MDVcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MDdcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTFcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTJcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTNcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTRcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTVcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTZcIixcblx0XHRcdFx0XHRcdFwieWJ0X3B5MTdcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHQvLyBcInlidF9weTIwXCIsXG5cdFx0XHRcdC8vIFwieWJ0X3B5MjFcIixcblx0XHRcdFx0Ly8gXCJ5YnRfcHkyMlwiLFxuXHRcdFx0XHQvLyBcInlidF9weTIzXCIsXG5cdFx0XHRcdC8vIFwieWJ0X3B5MjRcIixcblx0XHRcdFx0Ly8gXCJ5YnRfcHkyNVwiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1QjU3XHU4MjgyXHU4REYzXHU1MkE4XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiYnl0ZWRhbmNlXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NUI1N1x1ODI4Mlx1OERGM1x1NTJBOFx1NjI4MFx1NjcyRlx1NEU2MFx1OTg5OFx1N0IyQ1x1NEUwMFx1NjcxRihcdTRFMEEpXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMDFcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzAyXCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8wM1wiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMDRcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzA1XCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8wNlwiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMDdcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzA4XCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8wOVwiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMTBcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NUI1N1x1ODI4Mlx1OERGM1x1NTJBOFx1NjI4MFx1NjcyRlx1NEU2MFx1OTg5OFx1N0IyQ1x1NEUwMFx1NjcxRihcdTRFMEEpXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMTFcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzEyXCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8xM1wiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMTRcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzE1XCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8xNlwiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMTdcIixcblx0XHRcdFx0XHRcdFwiYnl0ZWRhbmNlLzE4XCIsXG5cdFx0XHRcdFx0XHRcImJ5dGVkYW5jZS8xOVwiLFxuXHRcdFx0XHRcdFx0XCJieXRlZGFuY2UvMjBcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU0RTJEXHU1QzcxXHU1OTI3XHU1QjY2XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwic3lzdVwiLFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTMwMENQeXRob25cdTMwMERcdTU3RkFcdTc4NDAyMDIyXHU3RUE3XCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJzeXN1LzAxXCIsXG5cdFx0XHRcdFx0XHRcInN5c3UvMDJcIixcblx0XHRcdFx0XHRcdFwic3lzdS8wM1wiLFxuXHRcdFx0XHRcdFx0XCJzeXN1LzA0XCIsXG5cdFx0XHRcdFx0XHRcInN5c3UvMDVcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH1cblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU3RUJEXHU3RUE2XHU1OTI3XHU1QjY2XCIsXG5cdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwibnl1XCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XSxcblx0XCIvMXYxLzUwLVNUb21wL1wiOiBcInN0cnVjdHVyZVwiLFxuXG5cdFwiL2NvbHVtbi9jb29rZGlubmVyL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi8xdjEvODAtUWluZ2ZlbmcvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL2NvbHVtbi9weWF1dG8vZ2trL1wiOiBbXG5cdFx0XCJcIixcblx0XHQvLyB7IHRleHQ6IFwiXHU1MTZDXHU0RjE3XHU1M0Y3XCIsIGxpbms6IFwiMDFcIn0sXG5cdF0sXG5cdFwiL2NvbHVtbi9weWF1dG8vXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU0RTAwOlx1NTI5RVx1NTE2Q1x1ODFFQVx1NTJBOFx1NTMxNiBCQVNFXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NEUwMFx1MzAwMSBQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1MjlFXHU1MTZDXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDJcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFOENcdTMwMDFQeXRob24gXHU3M0FGXHU1ODgzXHU1Qjg5XHU4OEM1XCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDNcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDRcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTRFMDlcdTMwMDFQeXRob24gXHU4MUVBXHU1MkE4XHU1MzE2XHU1OTA0XHU3NDA2IEV4Y2VsXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDVcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDZcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDdcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDhcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMDlcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTBcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTFcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTJcIixcblx0XHRcdFx0XHRcdFwiYXV0b19iYXNlMTNcIixcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9XG5cblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEU4QzpcdThCRkVcdTUyNERcdTUxQzZcdTU5MDdcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJhdXRvXzAxXCIsXG5cdFx0XHRcdFwiYXV0b18wMlwiLFxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8xMDEtU2FsbHltaXN0eS9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL3RraW50ZXIvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkZRQVwiLFxuXHRcdFx0Ly8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdThCQkVcdTdGNkVcdTUyMDZcdTdFQzRcdTY2MkZcdTU0MjZcdTUzRUZcdTRFRTVcdTYyOThcdTUzRTBcdUZGMENcdTlFRDhcdThCQTRcdTUwM0NcdTY2MkYgZmFsc2UsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdC8vICAgbGluazogXCJodHRwczovL2Jvcm5mb3J0aGlzLmNuL29uZXB5dGhvbi5odG1sXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInRlYXJvZmZcIixcblx0XHRcdF1cblx0XHR9LF0sXG5cdFwiL2NvbHVtbi9tZC9cIjogW1xuXHRcdFwiXCIsXG5cdFx0e1xuXHRcdFx0Ly8gXHU1RkM1XHU4OTgxXHU3Njg0XHVGRjBDXHU1MjA2XHU3RUM0XHU3Njg0XHU2ODA3XHU5ODk4XHU2NTg3XHU1QjU3XG5cdFx0XHR0ZXh0OiBcIk1hcmtkb3duIFx1NUZFQlx1OTAxRlx1NTE2NVx1OTVFOFx1NjU1OVx1N0EwQlwiLFxuXHRcdFx0Ly8gXHU1M0VGXHU5MDA5XHU3Njg0LCBcdTUyMDZcdTdFQzRcdTY4MDdcdTk4OThcdTVCRjlcdTVFOTRcdTc2ODRcdTU2RkVcdTY4MDdcblx0XHRcdGljb246IFwiY3JlYXRpdmVcIixcblx0XHRcdC8vIFx1NTNFRlx1OTAwOVx1NzY4NCwgXHU1MjA2XHU3RUM0XHU2ODA3XHU5ODk4XHU1QkY5XHU1RTk0XHU3Njg0XHU5NEZFXHU2M0E1XG5cdFx0XHRsaW5rOiBcIi9jb2x1bW4vbWQvXCIsXG5cdFx0XHQvLyBcdTUzRUZcdTkwMDlcdTc2ODQsIFx1OEJCRVx1N0Y2RVx1NTIwNlx1N0VDNFx1NjYyRlx1NTQyNlx1NTNFRlx1NEVFNVx1NjI5OFx1NTNFMFx1RkYwQ1x1OUVEOFx1OEJBNFx1NTAzQ1x1NjYyRiBmYWxzZSxcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Ly8gXHU1RkM1XHU4OTgxXHU3Njg0XHVGRjBDXHU1MjA2XHU3RUM0XHU3Njg0XHU1QjUwXHU5ODc5XHU3NkVFXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XSxcblx0XHR9LF0sXG5cdFwiLzF2MS84My1MdVhpbmdqaXUvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS84NC1aL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXHU2MDFEXHU3RUY0XHU0RTBFXHU1QjlFXHU2MjE4MjNcdThCQjIvXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiL0Jvb2tzL1wiOiBbXG5cdFx0eyB0ZXh0OiBcIlx1NzZFRVx1NUY1NVwiLCBpY29uOiBcImJvb2tcIiwgbGluazogXCJSRUFETUUubWRcIiB9LFxuXHRcdC8vIFwiXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwMS1cdTY3MkNcdTRFNjZcdTdFQTBcdTk1MTlcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiMDEtQm9va0NvcnJlY3RzRXJyb3JzL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjAyLVx1ODg2NVx1NTE0NVx1NjU4N1x1N0FFMFwiLFxuXHRcdFx0aWNvbjogXCJib29rXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCIwMi1TdXBwbGVtZW50YXJ5QXJ0aWNsZXMvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCIwMS1cdTdGMTZcdTdBMEJcdTYwMURcdTdFRjRcIixcblx0XHRcdFx0XHRpY29uOiBcInJlYWRcIixcblx0XHRcdFx0XHRwcmVmaXg6IFwiVGhpbmtpbmcvXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwMS1cdThCQTFcdTdCOTdcdTY3M0FcdTIwMUNcdTVGNTNcdTY1NTlcdTYzODhcdUZGMUZcdTIwMURcIiwgaWNvbjogXCJyZWFkXCIsIGxpbms6IFwiMDEtQ2FuLWNvbXB1dGVycy1iZS11bml2ZXJzaXR5LXByb2Zlc3NvcnNcIiB9LFxuXHRcdFx0XHRcdFx0XCIwMi1BcmUtd2FyLXJvYm90cy1yZWxpYWJsZVwiLFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIjAzLVx1NEY2MFx1NzcxRlx1NzY4NFx1NUI4OVx1NTE2OFx1NTQxN1x1RkYxRlwiLCBpY29uOiBcInJlYWRcIiwgbGluazogXCIwMy1Ib3ctZGlkLWhhY2tlcnMtc3RlYWwteW91ci1sdWNreS1tb25leVwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiMDQtXHU4MUVBXHU1MkE4XHU5QTdFXHU5QTc2XHVGRjBDXHU4RkQ4XHU1NzI4XHU4REVGXHU0RTBBXCIsIGljb246IFwicmVhZFwiLCBsaW5rOiBcIjA0LVdoeS1oYXZlbnQtc2VsZi1kcml2aW5nLWNhcnMtYmVjb21lLXdpZGVzcHJlYWQteWV0XCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCIwNS1cdTY3M0FcdTU2NjhcdTgwRkRcdTUzREJcdTUzRDhcdTU0MTdcdUZGMUZcIiwgaWNvbjogXCJyZWFkXCIsIGxpbms6IFwiMDUtQWxsLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLXR1cm5zLW91dC10by1iZS12ZXJ5LXdlYWtcIiB9LFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIjAyLVB5dGhvbiBcdTdGMTZcdTdBMEJcIixcblx0XHRcdFx0XHRwcmVmaXg6IFwiUHl0aG9uL1wiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIjAzLVNoYXJlXCIsXG5cdFx0XHRcdFx0cHJlZml4OiBcIlNoYXJlL1wiLFxuXHRcdFx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdFx0XHR9XG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwMy1cdTY3MkNcdTRFNjZcdTdFQzNcdTRFNjBcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiMDMtVGFyZ2V0ZWRQcmFjdGljZS9cIixcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwNC1cdTY3MkNcdTRFNjZcdThENDRcdTZFOTBcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiMDQtQm9va1Jlc291cmNlcy9cIixcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwNS1cdTRFMEVcdTUxRkFcdTcyNDhcdTc5M0VcdTZDOUZcdTkwMUFcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiMDUtTGlhaXNpbmctd2l0aC10aGUtcHVibGlzaGVyL1wiLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjA2LVx1NTFGQVx1NzI0OFx1NUJBM1x1OEJCMlwiLFxuXHRcdFx0aWNvbjogXCJib29rXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCIwNi1wdWJsaXNoaW5nLWFuZC1zcGVha2luZy9cIixcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIwNy1Db2RlTWFyayBcdTVCNjZcdTRFNjBcdTdDRkJcdTdFREZcIixcblx0XHRcdGljb246IFwiYm9va1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRwcmVmaXg6IFwiMDctQ29kZU1hcmsvXCIsXG5cdFx0XHRjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcblx0XHR9XG5cdF0sXG5cdFwiLzF2MS8xMDAtTGVvL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vUHl0aG9uLVByb2dyYW1taW5nLUNvdXJzZS9cIjogW1xuXHRcdFwiUHJlZmFjZVwiLFxuXHRcdHsgdGV4dDogXCJQeXRob24gXHU4QkZFXHU3QTBCXHU4ODY4XCIsIGljb246IFwicHl0aG9uXCIsIGxpbms6IFwiQ2xhc3NTY2hlZHVsZVwiIH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDBcdUZGMUFcdTdGMTZcdTdBMEJcdTYwMURcdTdFRjRcIixcblx0XHRcdHByZWZpeDogXCJQMDEtUHJvZ3JhbW1pbmctdGhpbmtpbmdcIixcblx0XHRcdGljb246IFwicmVhZGluZ2FuZHdyaXRpbmdhYm9va3dpdGhpbmthbmRhZmVhdGhlclwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHQvLyBjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1N0FFMFx1RkY1Q1x1NEY1NVx1NEUzQVx1N0YxNlx1N0EwQlx1NjAxRFx1N0VGNFx1RkYxRlwiLFxuXHRcdFx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjAxLVdoeS1sZWFybi10by1wcm9ncmFtXCIsXG5cdFx0XHRcdFx0XHRcIjAyLVByb2dyYW1taW5nLXRoaW5raW5nLW1ha2VzLWtpZHMtc21hcnRlclwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1N0FFMFx1RkY1Q1x1NjcwMFx1N0I4MFx1NTM1NVx1NzY4NFx1N0YxNlx1N0EwQlx1NTNGMlwiLFxuXHRcdFx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjAzLVBlb3BsZS1zdGFydGVkLXByb2dyYW1taW5nLW92ZXItODAwLXllYXJzLWFnb1wiLFxuXHRcdFx0XHRcdFx0XCIwNC1XaHktaXMtdGhlLUZhdGhlci1vZi10aGUtQ29tcHV0ZXItYS1mcmF1ZFwiLFxuXHRcdFx0XHRcdFx0XCIwNS1Ib3ctY291bGQtdGhlLUZhdGhlci1vZi1hcnRpZmljaWFsLUludGVsbGlnZW5jZS1lbmQtd2FyXCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTA5XHU3QUUwXHVGRjVDXHU3RjE2XHU3QTBCXHU2MDFEXHU3RUY0XHVGRjBDXHU2NTU5XHU0RjYwXHU2MDFEXHU4MDAzXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJibG9nXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiMDYtSG93LWNhbi1tb2JpbGUtcGhvbmVzLWdpdmUtdXMtYmVhdXR5XCIsXG5cdFx0XHRcdFx0XHRcIjA3LUhvdy1kby15b3UtdGVhY2gtYS1jb21wdXRlci10by1yZWNvZ25pemUtYS1wdXBweVwiLFxuXHRcdFx0XHRcdFx0XCIwOC1Zb3UtY2FuLW1lYXN1cmUtdGhlLWhlaWdodC1vZi1hLXB5cmFtaWQtYnktbG9va2luZy1hdC1pdHMtc2hhZG93XCIsXG5cdFx0XHRcdFx0XHRcIjA5LUNvbXB1dGVycy1kb250LWV2ZW4ta25vdy10aGUtbnVtYmVyLTJcIixcblx0XHRcdFx0XHRcdFwiMTAtSG93LWRvZXMtYS1jb21wdXRlci1hbmFseXplLWEtcHJvYmxlbVwiLFxuXHRcdFx0XHRcdFx0XCIxMS1DYW4tU2lyaS11bmRlcnN0YW5kLXlvdVwiLFxuXHRcdFx0XHRcdFx0XCIxMi1Db21wdXRlcnMtY2FuLWxlYXJuLWJ5LXRoZW1zZWx2ZXNcIixcblx0XHRcdFx0XHRcdFwiMTMtSG93LXRvLWNhdGNoLWEtcm9ib3Qtc3B5LXdpdGgtcHJvZ3JhbW1pbmctdGhpbmtpbmdcIixcblx0XHRcdFx0XHRcdFwiMTQtSG93LWRvLXlvdS1wcm92ZS15b3VyZS1ub3QtYS1yb2JvdFwiLFxuXHRcdFx0XHRcdFx0XCIxNS1NYW4tdnMtbWFjaGluZS1tYW4tbG9zZXMtdGhlLWZpcnN0LWJhdHRsZVwiLFxuXHRcdFx0XHRcdFx0XCIxNi1NYW4tbWFjaGluZS13YXItdGhlLWNvbXB1dGVyLXN0ZWFsLXRoZS10cmlja1wiLFxuXHRcdFx0XHRcdFx0XCIxNy1XaHktZG9udC10aGUtd2FpdGVycy1pbi10aGUtcmVzdGF1cmFudC1jb29rXCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU1NkRCXHU3QUUwXHVGRjVDXHU3NTI4XHU3Qjk3XHU2Q0Q1XHVGRjBDXHU4OUUzXHU1MUIzXHU3NTFGXHU2RDNCXHU5NkJFXHU5ODk4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJibG9nXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiMTgtSG93LXRvLWNhbGN1bGF0ZS1QSS13aXRoLWEtaGFuZGZ1bC1vZi1yaWNlXCIsXG5cdFx0XHRcdFx0XHRcIjE5LUhvdy10by1tYWtlLWEtcGFyYWxsZWwtY29tcHV0aW5nLXNjcmFtYmxlZC1lZ2ctZGlzaFwiLFxuXHRcdFx0XHRcdFx0XCIyMC1Ib3ctdG8tY2hvb3NlLXRoZS1jbGFzcy1tb25pdG9yLWluLXRoZS1mYWlyZXN0LXdheVwiLFxuXHRcdFx0XHRcdFx0XCIyMS1XaWxsLXRoZS13b3JsZC1jb21lLXRvLWFuLWVuZC1pbi0yMDM4XCIsXG5cdFx0XHRcdFx0XHRcIjIyLUNhbi1jb21wdXRlci1wcm9ncmFtcy1yZWFsbHkta2lsbC1wZW9wbGVcIixcblx0XHRcdFx0XHRcdFwiMjMtV2hvLWV4YWN0bHktaXMtdGhlLWF1dGhvci1vZi1EcmVhbS1vZi10aGUtUmVkLUNoYW1iZXJcIixcblx0XHRcdFx0XHRcdFwiMjQtTGl0dGxlLWFudHMtY2FuLWFsc28td3JpdGUtYWxnb3JpdGhtc1wiLFxuXHRcdFx0XHRcdFx0XCIyNS1Ib3ctdG8tYnVpbGQtY2Fycy13aXRoLXRoZS1pZGVhLW9mLWVzdGFibGlzaGluZy1hcmNoaXZlc1wiLFxuXHRcdFx0XHRcdFx0XCIyNi1XaG8ta25vd3MteW91LWJlc3QtU2VhcmNoXCIsXG5cdFx0XHRcdFx0XHRcIjI3LVdoby1rbm93cy15b3UtYmVzdC1SZWNvbW1lbmRlZFwiLFxuXHRcdFx0XHRcdF0sXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEU5NFx1N0FFMFx1RkY1Q1x1NEVCQVx1NURFNVx1NjY3QVx1ODBGRFx1NjcyQVx1Njc2NVwiLFxuXHRcdFx0XHRcdGljb246IFwiYmxvZ1wiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcIjI4LUNhbi1jb21wdXRlcnMtYmUtdW5pdmVyc2l0eS1wcm9mZXNzb3JzXCIsXG5cdFx0XHRcdFx0XHRcIjI5LUFyZS13YXItcm9ib3RzLXJlbGlhYmxlXCIsXG5cdFx0XHRcdFx0XHRcIjMwLUhvdy1kaWQtaGFja2Vycy1zdGVhbC15b3VyLWx1Y2t5LW1vbmV5XCIsXG5cdFx0XHRcdFx0XHRcIjMxLVdoeS1oYXZlbnQtc2VsZi1kcml2aW5nLWNhcnMtYmVjb21lLXdpZGVzcHJlYWQteWV0XCIsXG5cdFx0XHRcdFx0XHRcIjMyLUFsbC1hcnRpZmljaWFsLWludGVsbGlnZW5jZS10dXJucy1vdXQtdG8tYmUtdmVyeS13ZWFrXCJcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFOENcdUZGMUFQeXRob24gXHU1QzBGXHU1NDk2XHU1MTdCXHU2MjEwXCIsXG5cdFx0XHRpY29uOiBcInJlYWRpbmdhbmR3cml0aW5nYWJvb2t3aXRoaW5rYW5kYWZlYXRoZXJcIixcblx0XHRcdC8vIHByZWZpeDogXCJOb3RlQm9vay9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzAwLU5ld3Byb2plY3RcIixcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU3QUUwIFx1NTNEOFx1OTFDRlx1NTQ4Q1x1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4QlwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDBcdTgyODJcdTRFMjhcdTUzRDhcdTkxQ0ZcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTEtUHl0aG9uLVN0YXJ0ZXItSm91cm5leS8wMS1WYXJpYWJsZVwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RThDXHU4MjgyXHU0RTI4XHU1MjFEXHU4QkM2XHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMDItSW50cm9kdWN0aW9uLXRvLURhdGEtVHlwZXNcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1ODI4Mlx1NEUyOFx1N0FFMFx1ODI4Mlx1NkQ0Qlx1OEJENVx1NEUwMFwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vcTFcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NTZEQlx1ODI4Mlx1NEUyOFx1N0I1NFx1Njg0OFwiLCBpY29uOiBcImFuc3dlcl9mb250XCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2Fuc3dlcjFcIiB9LFxuXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkNcdTRFOENcdTdBRTAgXHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXHVGRjA4XHU0RTBBXHVGRjA5XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1ODI4Mlx1NEUyOFx1NjU3MFx1NTAzQ1wiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzAzLU51bWVyaWMtdHlwZVwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RThDXHU4MjgyXHU0RTI4XHU1QjU3XHU3QjI2XHU0RTMyXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMDQtcHl0aG9uLXN0cmluZ1wiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU0RjVDXHU0RTFBXHU0RTAwXHU0RTI4XHU5NUVFXHU3QjU0XHU1RjBGXHU3QjgwXHU1Mzg2XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9odzFcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1ODI4Mlx1NEUyOFx1N0FFMFx1ODI4Mlx1NkQ0Qlx1OEJENVx1NEU4Q1wiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vcTJcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NTZEQlx1ODI4Mlx1NEUyOFx1N0I1NFx1Njg0OFwiLCBpY29uOiBcImFuc3dlcl9mb250XCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2Fuc3dlcjJcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEU5NFx1ODI4Mlx1NEUyOFx1NEY1NVx1NEUzQVx1OEZFRFx1NEVFM1x1RkYxRlwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzA1LTAtaXRlcmFibGVcIiB9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTA5XHU3QUUwIFx1NjU3MFx1NjM2RVx1N0M3Qlx1NTc4Qlx1RkYwOFx1NEUyRFx1RkYwOVwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDBcdTgyODJcdTRFMjhcdTUyMTdcdTg4NjhcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTEtUHl0aG9uLVN0YXJ0ZXItSm91cm5leS8wNS1weXRob24tbGlzdFwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RThDXHU4MjgyXHU0RTI4XHU1MTQzXHU3RUM0XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMDYtcHl0aG9uLXR1cGxlXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDlcdTgyODJcdTRFMjhcdTdBRTBcdTgyODJcdTZENEJcdThCRDVcdTRFMDlcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL3EzXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTU2REJcdTgyODJcdTRFMjhcdTdCNTRcdTY4NDhcIiwgaWNvbjogXCJhbnN3ZXJfZm9udFwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9hbnN3ZXIzXCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NTZEQlx1N0FFMCBcdTY1NzBcdTYzNkVcdTdDN0JcdTU3OEJcdUZGMDhcdTRFMEJcdUZGMDlcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4XHU1QjU3XHU1MTc4XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMDctcHl0aG9uLWRpY3RcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1ODI4Mlx1NEUyOFx1OTZDNlx1NTQwOFwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzA4LXB5dGhvbi1zZXRcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1ODI4Mlx1NEUyOFx1N0FFMFx1ODI4Mlx1NkQ0Qlx1OEJENVx1NTZEQlwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vcTRcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NTZEQlx1ODI4Mlx1NEUyOFx1N0I1NFx1Njg0OFwiLCBpY29uOiBcImFuc3dlcl9mb250XCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2Fuc3dlcjRcIiB9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU0RTk0XHU3QUUwIGlmIFx1Njc2MVx1NEVGNlx1NTIyNFx1NjVBRFwiLFxuXHRcdFx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDBcdTgyODJcdTRFMjhcdTVFMDNcdTVDMTRcdTg4NjhcdThGQkVcdTVGMEZcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTEtUHl0aG9uLVN0YXJ0ZXItSm91cm5leS8wOS1weXRob24tYm9vbFwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RThDXHU4MjgyXHU0RTI4aWYgXHU2NzYxXHU0RUY2XHU1MjI0XHU2NUFEXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMTAtcHl0aG9uLWlmXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDlcdTgyODJcdTRFMjhcdTdBRTBcdTgyODJcdTZENEJcdThCRDVcdTRFOTRcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL3E1XCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTU2REJcdTgyODJcdTRFMjhcdTdCNTRcdTY4NDhcIiwgaWNvbjogXCJhbnN3ZXJfZm9udFwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9hbnN3ZXI1XCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NTE2RFx1N0FFMCB3aGlsZSBcdTVGQUFcdTczQUZcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4d2hpbGUgXHU1RkFBXHU3M0FGXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMTEtcHl0aG9uLXdoaWxlXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFOENcdTgyODJcdTRFMjhcdTdBRTBcdTgyODJcdTZENEJcdThCRDVcdTUxNkRcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL3E2XCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDlcdTgyODJcdTRFMjhcdTdCNTRcdTY4NDhcIiwgaWNvbjogXCJhbnN3ZXJfZm9udFwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9hbnN3ZXI2XCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEUwM1x1N0FFMCBmb3IgXHU1RkFBXHU3M0FGXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1ODI4Mlx1NEUyOGZvciBcdTVGQUFcdTczQUZcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTEtUHl0aG9uLVN0YXJ0ZXItSm91cm5leS8xMi1weXRob24tZm9yXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTRGNUNcdTRFMUFcdTRFOENcdTRFMjhcdThGRDBcdTUyQkZcdTk4ODRcdTZENEJcdThGNkZcdTRFRjZcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2h3MlwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RThDXHU4MjgyXHU0RTI4XHU3QUUwXHU4MjgyXHU2RDRCXHU4QkQ1XHU0RTAzXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9xN1wiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTA5XHU4MjgyXHU0RTI4XHU3QjU0XHU2ODQ4XCIsIGljb246IFwiYW5zd2VyX2ZvbnRcIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vYW5zd2VyN1wiIH0sXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTdCMkNcdTUxNkJcdTdBRTAgXHU1MUZEXHU2NTcwXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwMFx1ODI4Mlx1NEUyOFx1NTFGRFx1NjU3MFwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzEzLWZ1bmN0aW9uXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFOENcdTgyODJcdTRFMjhcdTdBRTBcdTgyODJcdTZENEJcdThCRDVcdTUxNkJcIiwgaWNvbjogXCJ5b25neWFuXCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL3E4XCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTdCMkNcdTRFMDlcdTgyODJcdTRFMjhcdTdCNTRcdTY4NDhcIiwgaWNvbjogXCJhbnN3ZXJfZm9udFwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9hbnN3ZXI4XCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NEU1RFx1N0FFMCBcdTdDN0JcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4XHU5NzYyXHU1NDExXHU1QkY5XHU4QzYxXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMTQtY2xhc3NcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1ODI4Mlx1NEUyOFx1N0FFMFx1ODI4Mlx1NkQ0Qlx1OEJENVx1NEU1RFwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vcTlcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEUwOVx1ODI4Mlx1NEUyOFx1N0I1NFx1Njg0OFwiLCBpY29uOiBcImFuc3dlcl9mb250XCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2Fuc3dlcjlcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1OTg3OVx1NzZFRVx1NEY1Q1x1NEUxQVx1NEUyOFx1NUJGOVx1OEJERFx1NUYwRlx1NUJGOVx1NjIxOFx1NkUzOFx1NjIwRlx1OEJCRVx1OEJBMVwiLCBpY29uOiBcInlvbmd5YW5cIiwgbGluazogXCJQMDItMi1iYXNlcXVlc3Rpb24vaHdfd29yZF9nYW1lXCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NTM0MVx1N0FFMCBcdTY1ODdcdTRFRjZcdTY0Q0RcdTRGNUNcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4XHU2NTg3XHU0RUY2XHU2NENEXHU0RjVDXCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMTUtcHl0aG9uLWZpbGUtb3BlcmF0aW9uXCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQ1x1NTM0MVx1NEUwMFx1N0FFMCBcdTk1MTlcdThCRUZcdTRFMEVcdTVGMDJcdTVFMzhcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4XHU5NTE5XHU4QkVGXHU0RTBFXHU1RjAyXHU1RTM4XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0xLVB5dGhvbi1TdGFydGVyLUpvdXJuZXkvMTYtcHl0aG9uMy1lcnJvcnMtYW5kLWV4Y2VwdGlvbnNcIiB9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiXHU3QjJDXHU1MzQxKlx1N0FFMCBcdTdFRDNcdTRFMUFcdTZENEJcdThCRDVcIixcblx0XHRcdFx0XHRpY29uOiBcInB5dGhvblwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiXHU3QjJDXHU0RTAwXHU4MjgyXHU0RTI4XHU3RUQzXHU0RTFBXHU2RDRCXHU4QkQ1XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIlAwMi0yLWJhc2VxdWVzdGlvbi9xMTBcIiB9LFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1N0IyQ1x1NEU4Q1x1ODI4Mlx1NEUyOFx1N0I1NFx1Njg0OFwiLCBpY29uOiBcImFuc3dlcl9mb250XCIsIGxpbms6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL2Fuc3dlcjEwXCIgfSxcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIk90aGVyXCIsXG5cdFx0XHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5LzAwLVRPRE8tTElTVFwiLFxuXHRcdFx0XHRcdFx0XCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5L0FsbFwiLFxuXHRcdFx0XHRcdFx0XCJQMDItMS1QeXRob24tU3RhcnRlci1Kb3VybmV5L1ByYWN0aWNlXCIsXG5cdFx0XHRcdFx0XVxuXHRcdFx0XHR9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFMDlcdUZGMUFBc3NpZ25tZW50XCIsXG5cdFx0XHRpY29uOiBcImFzc2lnbm1lbnRcIixcblx0XHRcdHByZWZpeDogXCJQMDMtQXNzaWdubWVudC9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0XHQvLyBbXG5cdFx0XHQvLyBcdFwiQXNzaWdubWVudDFcIixcblx0XHRcdC8vIFx0XCJBc3NpZ25tZW50MS1Tb2x1dGlvblwiLFxuXHRcdFx0Ly8gXHRcIkFzc2lnbm1lbnQyXCIsXG5cdFx0XHQvLyBcdFwiQXNzaWdubWVudDItU29sdXRpb25cIixcblx0XHRcdC8vIFx0XCJBc3NpZ25tZW50M1wiLFxuXHRcdFx0Ly8gXHRcIjAxLUZpbGUtSU8tYW5kLUNTVi1GaWxlc1wiLFxuXHRcdFx0Ly8gXVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTU2REJcdUZGMUFQcm9qZWN0c1wiLFxuXHRcdFx0aWNvbjogXCJzaGVxdS1qaWh1b1wiLFxuXHRcdFx0cHJlZml4OiBcIlAwNC1Qcm9qZWN0cy9cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEU5NFx1RkYxQUFJXHU1OTI3XHU2QTIxXHU1NzhCXHU1MjFEXHU0RjUzXHU5QThDXCIsXG5cdFx0XHRpY29uOiBcInJlbmdvbmd6aGluZW5nXCIsXG5cdFx0XHRwcmVmaXg6IFwiUDA1LUFJLWxhcmdlLW1vZGVsL1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU1MTZEXHVGRjFBXHU2NTcwXHU2MzZFXHU1MjA2XHU2NzkwXCIsXG5cdFx0XHRpY29uOiBcInpodXpodWFuZ3R1XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdHByZWZpeDogXCJQMDYtZGF0YV9hbmFseXNpcy9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlAwMVx1RkYxQVx1NjU3MFx1NjM2RVx1NjAxRFx1N0VGNFx1OEJGRVx1MzAwQ1x1NTI0RFx1N0Y2RVx1MzAwRFwiLFxuXHRcdFx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHByZWZpeDogXCJQMDYtMC0wLUJhc2ljLURhdGEtVGhpbmtpbmctQ291cnNlL1wiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlAwMlx1RkYxQVx1NjU3MFx1NjM2RVx1NjAxRFx1N0VGNFx1OEJGRVx1MzAwQ1x1NjgzOFx1NUZDM1x1MzAwRFwiLFxuXHRcdFx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHByZWZpeDogXCJQMDYtMS1kYXRhLWFuYWx5c2lzLXRoaW5raW5nLWNvdXJzZS9cIixcblx0XHRcdFx0XHRjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIlxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJQMDNcdUZGMUFcdTY1NzBcdTYzNkVcdTUyMDZcdTY3OTBcdTRGNTNcdTdDRkJcdThCRkVcIixcblx0XHRcdFx0XHQvLyB0ZXh0OiBcIlx1OTYzNlx1NkJCNVx1NEUwMFx1RkYxQVx1NUZFQlx1OTAxRlx1NjM4Q1x1NjNFMVx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFx1NUZDNVx1NTkwN1x1NjI4MFx1ODBGRFwiLFxuXHRcdFx0XHRcdGljb246IFwibGFib3JhdG9yeWxhYlwiLCAgLy8gbGFib3JhdG9yeWxhYiAvLyB5b25neWFuXG5cdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdHtcblx0XHRcdFx0XHRcdFx0dGV4dDogXCJcdTdCMkMxXHU1NDY4IFx1OEQ3MFx1OEZEQlx1NjU3MFx1NjM2RVx1NTIwNlx1Njc5MFwiLFxuXHRcdFx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRcdFx0aWNvbjogXCJsYWJvcmF0b3J5bGFiXCIsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJXZWVrMVwiLFxuXHRcdFx0XHRcdFx0XHRcdFwiV2VlazRcIlxuXHRcdFx0XHRcdFx0XHRdXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIHRleHQ6IFwiXHU1Mzc3XHU1MTZEXHVGRjFBXHU1OTgyXHU0RjU1XHU2MjEwXHU0RTNBXHU2NzA5XHU2NTQ4XHU1QjY2XHU0RTYwXHU3Njg0XHU5QUQ4XHU2MjRCXCIsXG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NEUwMzpcdTYyMTBcdTRFM0FcdTY3MDlcdTY1NDhcdTVCNjZcdTRFNjBcdTc2ODRcdTlBRDhcdTYyNEJcIixcblx0XHRcdHByZWZpeDogXCJQMDctSG93LXRvLWJlY29tZS1hbi1leHBlcnQtaW4tZWZmZWN0aXZlLWxlYXJuaW5nL1wiLFxuXHRcdFx0aWNvbjogXCJ6aHVhbmppYWtldGFuZy1qaWh1b1wiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogXCJzdHJ1Y3R1cmVcIixcblx0XHR9LFxuXHRcdHtcblx0XHRcdC8vIHRleHQ6IFwiXHU1Mzc3XHU0RTAzXHVGRjFBXHU2NzA5XHU2NTQ4XHU4QkFEXHU3RUMzXHU0RjYwXHU3Njg0XHU3ODE0XHU3QTc2XHU4MEZEXHU1MjlCXCIsXG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTE2QjpcdTY3MDlcdTY1NDhcdThCQURcdTdFQzNcdTc4MTRcdTdBNzZcdTgwRkRcdTUyOUJcIixcblx0XHRcdHByZWZpeDogXCJQMDgtcmVzZWFyY2gtYWJpbGl0eS9cIixcblx0XHRcdGljb246IFwic2l3ZWkxXCIsIC8vIHpodWFuamlha2V0YW5nLWppaHVvXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTRFNURcdUZGMUFGUUFcIixcblx0XHRcdHByZWZpeDogXCJQMDktRkFRL1wiLFxuXHRcdFx0aWNvbjogXCJmYW5rdWlmYXFzXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTUzNzdcdTUzNDFcdUZGMUFTaGFyZVwiLFxuXHRcdFx0cHJlZml4OiBcIlAxMC1TaGFyZS9cIixcblx0XHRcdGljb246IFwic2hhcmUxXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NzdFNVx1OEJDNlx1NTM2MVx1NzI0N1x1MDBCN1x1N0IxNFx1OEJCMFwiLFxuXHRcdFx0XHRcdGljb246IFwiY2FyZFwiLFxuXHRcdFx0XHRcdC8vIGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHByZWZpeDogXCJDYXJkL1wiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiMDEtXHU1M0Q4XHU5MUNGXHU3N0U1XHU4QkM2XHU1MzYxXHU3MjQ3XCIsIGljb246IFwieW9uZ3lhblwiLCBsaW5rOiBcIjAxLVZhcmlhYmxlXCIgfSxcblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9LFxuXHRcdFx0XHR7XG5cdFx0XHRcdFx0dGV4dDogXCJcdTY3MDlcdThEQTNcdTc2ODRcdTk4NzlcdTc2RUVcIixcblx0XHRcdFx0XHRpY29uOiBcInlvdXF1XCIsXG5cdFx0XHRcdFx0Ly8gY29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0cHJlZml4OiBcIkludGVyZXN0aW5nLXByb2plY3QvXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1NjBGM1x1NkNENVx1RDgzRFx1RENBMVwiLFxuXHRcdFx0XHRcdGljb246IFwiaWRlYVwiLFxuXHRcdFx0XHRcdHByZWZpeDogXCJJZGVhL1wiLFxuXHRcdFx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXHRcdFx0XHR9LFxuXHRcdFx0XVxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTM0MVx1NEUwMFx1RkYxQVJlZ2V4IFx1NUI2Nlx1NEU2MFwiLFxuXHRcdFx0cHJlZml4OiBcIlAxMS1yZWdleC1pbnRyby1jb3Vyc2UvXCIsXG5cdFx0XHRpY29uOiBcInJlZ2V4XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTM0MVx1NEU4Q1x1RkYxQVx1NTkyN1x1NkEyMVx1NTc4Qlx1NUI4OVx1NTE2OFx1NUI5RVx1NjIxOFx1OEJGRVwiLFxuXHRcdFx0cHJlZml4OiBcIlAxMi1sbG0tc2VjdXJpdHktaGFuZHMtb24tY291cnNlL1wiLFxuXHRcdFx0aWNvbjogXCJhbnF1YW5cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU1MzQxXHU0RTA5XHVGRjFBXHU0RTJBXHU0RUJBXHU1MzVBXHU1QkEyXHU2NDJEXHU1RUZBXCIsXG5cdFx0XHRwcmVmaXg6IFwiUDEzLXBlcnNvbmFsLWJsb2ctYnVpbGRpbmcvXCIsXG5cdFx0XHRpY29uOiBcIndlYlwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtV2FsaW5lIFx1OEJDNFx1OEJCQVx1NjQyRFx1NUVGQVwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCIwMS13YWxpbmUtc2VydmVyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVx1NjQyRFx1NUVGQVx1NUM1RVx1NEU4RVx1ODFFQVx1NURGMVx1NzY4NFx1NUU3M1x1NTNGMFwiLCBpY29uOiBcImJsb2dcIiwgbGluazogXCIwMi1CbG9nLWJ1aWxkXCIgfSxcblx0XHRcdF0sXG5cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU1MzQxXHU1NkRCXHVGRjFBQ2xhdWRlIENvZGUgXHU1REU1XHU3QTBCXHU1MzE2XHU1QjlFXHU2MjE4XCIsXG5cdFx0XHRwcmVmaXg6IFwiUDE0LWNsYXVkZS1jb2RlLWVuZ2luZWVyaW5nLXByYWN0aWNlL1wiLFxuXHRcdFx0aWNvbjogXCJjbGF1ZGUxXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTM0MVx1NEU5NFx1RkYxQU9wZW5DbGF3IFx1OTg3OVx1NzZFRVx1NUI5RVx1NjIxOFwiLFxuXHRcdFx0cHJlZml4OiBcIlAxNS1PcGVuQ2xhdy9cIixcblx0XHRcdGljb246IFwibG9uZ3hpYTJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0e1xuXHRcdFx0XHRcdHRleHQ6IFwiT3BlbkNsYXcgXHU3Q0ZCXHU3RURGXHU1QjlFXHU2MjE4XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJsb25neGlhMlwiLFxuXHRcdFx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0XHRcdHByZWZpeDogXCJvcGVuY2xhdy1jb3JlLXByaW5jaXBsZXMtcHJhY3RpY2UvXCIsXG5cdFx0XHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFx0XSxcblx0XHRcdFx0fSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLU9wZW5DbGF3IFx1NUI4OVx1ODhDNVwiLCBpY29uOiBcImxvbmd4aWEyXCIsIGxpbms6IFwiMDEtaW5zdGFsbC1zdGVwXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLU9wZW5DbGF3IFx1NjYyRlx1NEVDMFx1NEU0OFwiLCBpY29uOiBcImxvbmd4aWEyXCIsIGxpbms6IFwiMDEtb3BlbmNsYXctd2hhdC1pc1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1PcGVuQ2xhdyBXU0xcIiwgaWNvbjogXCJsb25neGlhMlwiLCBsaW5rOiBcIjAyLW9wZW5jbGF3LXdzbC1pbnN0YWxsXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA0LU9wZW5DbGF3IFx1OTBFOFx1N0Y3MlwiLCBpY29uOiBcImxvbmd4aWEyXCIsIGxpbms6IFwiMDMtT3BlbkNsYXctc3RlcC11cFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNS1cdTczQTlcdThGNkMgU2tpbGxzXCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIwNC1PcGVuQ2xhdy1Ta2lsbHNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDYtRkFRXCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIwNS1PcGVuQ2xhdy1GQVFcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDctT3BlbkNsYXcgXHU2ODQ4XHU0RjhCXCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIwNi1vcGVuY2xhdy1jYXNlLXN0dWRpZXNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDgtXHU5OERFXHU0RTY2XHU2M0QyXHU0RUY2XHU2NTU5XHU3QTBCXCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIwNy1vcGVuY2xhdy1sYXJrLXRvb2xzXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA5LU9wZW5DbGF3IFx1NTIzNlx1NEY1Q1x1NUJBMlx1NjcwRFwiLCBpY29uOiBcImxvbmd4aWEyXCIsIGxpbms6IFwiMDgtb3BlbmNsYXctZWNvbW1lcmNlLWN1c3RvbWVyLXNlcnZpY2VcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTAtT3BlbkNsYXdcdTUzRUZcdTRFRTVcdThCQTlcdTU5MjdcdTUzODJcdTY1MzZcdTYyNEJcdTRFNDhcdUZGMUZcIiwgaWNvbjogXCJsb25neGlhMlwiLCBsaW5rOiBcIjA5LW9wZW5jbGF3LXVwZGF0ZS1zaGVsbC1jcmlzaXNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTEtT3BlbkNsYXcgXHU1QkY5XHU2M0E1XHU5NDg5XHU5NDg5XHUzMDBDXHU1Rjg1XHU1QjlBXHUzMDBEXCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIxMC1vcGVuY2xhdy1kaW5ndGFsay1pbnRlZ3JhdGlvblwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMi1cdTdFRDlcdTUxRTBcdTRFMkFcdTRFRDhcdThEMzlcdTdDODlcdTRFMURcdTVCODlcdTg4QzUgT3BlbkNsYXcgXHU1NDBFXHU3Njg0XHU0RTAwXHU0RTlCXHU1RkMzXHU1Rjk3XCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIxMS1PcGVuQ2xhdy1UaGlua1wiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIxMy1cdTRFM0FcdTRFQzBcdTRFNDhcdTlGOTlcdTg2N0VcdTRFMERcdTYyMTBcdTcxOUZcdTRFQ0RcdTg5ODFcdTUxNDhcdTc1MjhcdThENzdcdTY3NjVcdUZGMUZcIiwgaWNvbjogXCJsb25neGlhMlwiLCBsaW5rOiBcIjEyLXdoeS11c2UtbG9ic3Rlci1iZWZvcmUtaXQtaXMtbWF0dXJlXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjE0LVx1NjY3QVx1NzI1QiBBUEkgXHU5MDgwXHU4QkY3XHU2RDRCXHU4QkM0XCIsIGljb246IFwibG9uZ3hpYTJcIiwgbGluazogXCIxMy1uaXVhcGktdGVzdFwiIH0sXG5cdFx0XHRdLFxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTM0MVx1NTE2RFx1RkYxQUFJXHU3RUQ4XHU3NTNCXHU1QjlFXHU2MjE4XCIsXG5cdFx0XHRwcmVmaXg6IFwiUDE2LWFpLWRyYXdpbmctY29yZS10ZWNoLWFuZC1wcmFjdGljZS9cIixcblx0XHRcdGljb246IFwiQUlodWF0dTFcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1Mzc3XHU1MzQxXHU0RTAzXHVGRjFBXHU5NkY2XHU5NUU4XHU2OURCIEFJIFx1NTA1QVx1NUY3MVx1N0JDN1wiLFxuXHRcdFx0cHJlZml4OiBcIlAxNy1haS1jb3Vyc2UtcmVzb3VyY2VzL1wiLFxuXHRcdFx0aWNvbjogXCJ3b3JraW5nRGlyZWN0b3J5XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBcInN0cnVjdHVyZVwiLFxuXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM3N1x1NTM0MVx1NTE2Qlx1RkYxQUNvZGV4IFx1NUI5RVx1NjIxOFwiLFxuXHRcdFx0cHJlZml4OiBcIlAxOC1Db2RleC9cIixcblx0XHRcdGljb246IFwiZGFtb3hpbmdcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFwic3RydWN0dXJlXCIsXG5cblx0XHR9LFxuXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTRFMTNcdTk4NzlcdTdFQzNcdTRFNjBcIixcblx0XHRcdHByZWZpeDogXCJQMDItMi1iYXNlcXVlc3Rpb24vXCIsXG5cdFx0XHRpY29uOiBcImEtamliaWppbGlhbnhpYmlhbmppXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwic3BlY2lhbF92YXJpYWJsXCIsXG5cdFx0XHRcdFwic3BlY2lhbF95dW5zdWFuZnVcIixcblx0XHRcdFx0XCJzcGVjaWFsX2ZvclwiLFxuXHRcdFx0XHRcInNwZWNpYWxfd2hpbGVcIixcblx0XHRcdFx0XCJzcGVjaWFsX2xpc3RcIixcblx0XHRcdFx0XCJzcGVjaWFsX2Z1bmN0aW9uXCIsXG5cdFx0XHRcdFwic3BlY2lhbF9jbGFzc1wiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU2MjgwXHU1REU3XHU3MEI5XHU2MkU4XCIsXG5cdFx0XHRwcmVmaXg6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL1wiLFxuXHRcdFx0aWNvbjogXCJpZGVhXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwic2tpbGxfcHljaGFybTFcIixcblx0XHRcdFx0XCJza2lsbF9pcHl0aG9uMVwiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU4ODY1XHU1MTQ1XHU3N0U1XHU4QkM2XCIsXG5cdFx0XHRwcmVmaXg6IFwiUDAyLTItYmFzZXF1ZXN0aW9uL1wiLFxuXHRcdFx0aWNvbjogXCJzaXdlaTFcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJyZXF1aXJlbWVudHNcIixcblx0XHRcdFx0XCJyYWRpeF9wb2ludFwiLFxuXHRcdFx0XHRcImZvcm1hdFwiXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJDUy1QWTEwMSBMYWJcIixcblx0XHRcdGljb246IFwiYS1qaWJpamlsaWFueGliaWFuamlcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIkxhYlwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIkNTLVBZMTAxIExhYiAxXCIsIGljb246IFwiZW1wbG95ZWUtcmFua1wiLCBsaW5rOiBcIkxhYjAxXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIkNTLVBZMTAxIExhYiAyXCIsIGljb246IFwiZW1wbG95ZWUtcmFua1wiLCBsaW5rOiBcIkxhYjAyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIkNTLVBZMTAxIExhYiAzXCIsIGljb246IFwiZW1wbG95ZWUtcmFua1wiLCBsaW5rOiBcIkxhYjAzXCIgfSxcblxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiQ1NfUFkxMDEgTGFiIFNvbHV0aW9uXCIsXG5cdFx0XHRpY29uOiBcImxhYm9yYXRvcnlsYWJcIixcblx0XHRcdHByZWZpeDogXCJMYWItU29sdXRpb25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJMYWIwMS1Tb2x1dGlvblwiLFxuXHRcdFx0XHRcIkxhYjAyLVNvbHV0aW9uXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlB5dGhvbl90dXRvcmlhbFwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdHByZWZpeDogXCJQeXRob25fdHV0b3JpYWwvXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdC8vIFwiXCIsXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlB5dGhvbiBcdTU3RkFcdTc4NDBcIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCJcIixcblx0XHRcdFx0XHRdXG5cdFx0XHRcdH0sXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlB5dGhvbiBcdTkwMUFcdTc1MjhcdTY1NTlcdTdBMEJcIixcblx0XHRcdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQyAxIFx1N0FFMCBcdTUxNjVcdTk1RThcdTUxQzZcdTU5MDdcIixcblx0XHRcdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTAxXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTAyXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTAzXCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTA0XCIsXG5cdFx0XHRcdFx0XHRcdF0sXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdFx0e1xuXHRcdFx0XHRcdFx0XHR0ZXh0OiBcIlx1N0IyQyAyIFx1N0FFMCBcdTkwMUFcdTc1MjhcdThCRURcdThBMDBcdTcyNzlcdTYwMjdcIixcblx0XHRcdFx0XHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRcdFx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTA1XCIsXG5cdFx0XHRcdFx0XHRcdFx0XCJta19weTA2XCIsXG5cdFx0XHRcdFx0XHRcdF1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRdLFxuXHRcdFx0XHR9XG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cblx0XHRcdHRleHQ6IFwiUHl0aG9uIFx1NUI5RVx1NjIxODpcdTRFQ0UgMCBcdTUyMzAgMSBcdTY0MkRcdTVFRkFcdTc2RjRcdTY0QURcdTg5QzZcdTk4OTFcdTVFNzNcdTUzRjBcIixcblx0XHRcdGljb246IFwiZmxhc2tcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlB5dGhvbi1pbi1BY3Rpb24tQnVpbGRpbmctYS1MaXZlLVN0cmVhbWluZy1WaWRlby1QbGF0Zm9ybS1mcm9tLVNjcmF0Y2gvXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRcdFwiMDVcIixcblx0XHRcdFx0XCIwNlwiLFxuXHRcdFx0XHRcIjA3XCIsXG5cdFx0XHRcdFwiMDhcIixcblx0XHRcdF1cblxuXHRcdH0sXG5cdF0sXG5cdFwiL2NvbHVtbi9lZHVjYXRpb24vXCI6IFtcblx0XHRcIjAxXCIsXG5cdFx0XCIwMlwiLFxuXHRdLFxuXHRcIi9ZdWVjaHVhbmdzLUZhbWlseS1FZHVjYXRpb25IYW5kYm9vay9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvMXYxLzkzLUxpcXVpZExlb24vXCI6IFwic3RydWN0dXJlXCIsXG5cdFwiLzF2MS80Ny1xaXV6aGVuL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJQeXRob24gXHU1MUIyXHU1MjNBXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwicHl0aG9uXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImRvY3NcIixcblx0XHRcdFx0XCIwMVwiLFxuXHRcdFx0XHRcIjAyXCIsXG5cdFx0XHRcdFwiMDNcIixcblx0XHRcdFx0XCIwNFwiLFxuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRcdFwiMDZcIixcblx0XHRcdFx0XCIwNy1RdWVzdGlvbjFcIixcblx0XHRcdFx0XCIwN1wiLFxuXHRcdFx0XHRcIjA4XCIsXG5cdFx0XHRcdFwiMDlcIixcblx0XHRcdFx0XCIxMFwiLFxuXHRcdFx0XHRcIjExXCIsXG5cdFx0XHRcdFwiMTJcIixcblx0XHRcdFx0XCIxM1wiLFxuXHRcdFx0XHRcIjE0XCIsXG5cdFx0XHRcdFwiMTVcIixcblx0XHRcdFx0XCIxNlwiLFxuXHRcdFx0XHRcIjE3XCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NTM1QVx1NUJBMlx1NjQyRFx1NUVGQVwiLFxuXHRcdFx0aWNvbjogXCJ3ZWIxXCIsXG5cdFx0XHRwcmVmaXg6IFwiQmxvZy9cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMTgtd2ViLWxvZ1wiLFxuXHRcdFx0XVxuXHRcdH1cblx0XSxcblx0XCIvY29sdW1uL1x1NkNCQlx1NjEwOFx1NUZDM1x1NzQwNlx1NUI2Ni9cIjogXCJzdHJ1Y3R1cmVcIixcblx0XCIvY29sdW1uL21pYW5zaGkvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1N0EwQlx1NUU4Rlx1NTQ1OFx1N0VDM1x1N0VBN1x1NjUzQlx1NzU2NVwiLFxuXHRcdFx0aWNvbjogXCJlbXBsb3llZS1yYW5rXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjA1XCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1OTc2Mlx1OEJENVx1NjUzQlx1NzU2NVwiLFxuXHRcdFx0aWNvbjogXCJzaGlwaW5taWFuc2hpXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcIjAxXCIsXG5cdFx0XHRcdFwiMDJcIixcblx0XHRcdFx0XCIwM1wiLFxuXHRcdFx0XHRcIjA0XCIsXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cdFwiL2NvbHVtbi9Qcm9ncmFtbWluZy1hbGdvcml0aG0tc3luY2hyb25pemF0aW9uL1wiOiBbXG5cdFx0XCIwMVwiLFxuXHRcdFwiMDJcIixcblx0XHRcIjAzXCIsXG5cdFx0XCIwNFwiLFxuXHRcdFwiMDVcIixcblx0XHRcIjA2XCIsXG5cdFx0XCIwN1wiLFxuXHRcdFwiMDhcIixcblx0XHRcIjA5XCIsXG5cdFx0XCIxMFwiLFxuXHRcdFwiMTFcIixcblx0XHRcIjEyXCIsXG5cdFx0XCIxM1wiLFxuXHRcdFwiMTRcIixcblx0XHRcIjE1XCIsXG5cdFx0XCIxNlwiLFxuXHRcdFwiMTdcIixcblx0XSxcblx0XCIvY29sdW1uL3BsYXliYWNrL1wiOiBbXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIyMDIyXHU1RTc0XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiXCIsXG5cdFx0XHRcdFwiMDEtVG9tbXlcIixcblx0XHRcdFx0XCIwMi1MS1dcIixcblx0XHRcdFx0XCIwMy0yMDIyMDYxMFwiLFxuXHRcdFx0XSxcblx0XHR9XG5cdF0sXG5cblx0XCIvY29sdW1uL2phdmFzY3JpcHQtdHV0b3JpYWxcIjogW1xuXHRcdFwiXCIsXG5cdFx0XCJwcmVmYWNlXCIsXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIxLiBcdTUxNjVcdTk1RThcdTdCQzdcIixcblx0XHRcdGljb246IFwiMjRnbC1mb2xkZXJPcGVuXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiYmFzaWMvaW50cm9kdWN0aW9uXCIsXG5cdFx0XHRcdFwiYmFzaWMvaGlzdG9yeVwiLFxuXHRcdFx0XHRcImJhc2ljL2dyYW1tYXJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMi4gXHU2NTcwXHU2MzZFXHU3QzdCXHU1NzhCXCIsXG5cdFx0XHRpY29uOiBcIjI0Z2wtZm9sZGVyT3BlblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInR5cGVzL2dlbmVyYWxcIixcblx0XHRcdFx0XCJ0eXBlcy9udWxsLXVuZGVmaW5lZC1ib29sZWFuXCIsXG5cdFx0XHRcdFwidHlwZXMvbnVtYmVyXCIsXG5cdFx0XHRcdFwidHlwZXMvc3RyaW5nXCIsXG5cdFx0XHRcdFwidHlwZXMvb2JqZWN0XCIsXG5cdFx0XHRcdFwidHlwZXMvZnVuY3Rpb25cIixcblx0XHRcdFx0XCJ0eXBlcy9hcnJheVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCIzLiBcdThGRDBcdTdCOTdcdTdCMjZcIixcblx0XHRcdGljb246IFwiMjRnbC1mb2xkZXJPcGVuXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwib3BlcmF0b3JzL2FyaXRobWV0aWNcIixcblx0XHRcdFx0XCJvcGVyYXRvcnMvY29tcGFyaXNvblwiLFxuXHRcdFx0XHRcIm9wZXJhdG9ycy9ib29sZWFuXCIsXG5cdFx0XHRcdFwib3BlcmF0b3JzL2JpdFwiLFxuXHRcdFx0XHRcIm9wZXJhdG9ycy9wcmlvcml0eVwiLFxuXHRcdFx0XSxcblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiNC4gXHU4QkVEXHU2Q0Q1XHU0RTEzXHU5ODk4XCIsXG5cdFx0XHRpY29uOiBcIjI0Z2wtZm9sZGVyT3BlblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImZlYXR1cmVzL2NvbnZlcnNpb25cIixcblx0XHRcdFx0XCJmZWF0dXJlcy9lcnJvclwiLFxuXHRcdFx0XHRcImZlYXR1cmVzL3N0eWxlXCIsXG5cdFx0XHRcdFwiZmVhdHVyZXMvY29uc29sZVwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCI1LiBcdTY4MDdcdTUxQzZcdTVFOTNcIixcblx0XHRcdGljb246IFwiMjRnbC1mb2xkZXJPcGVuXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwic3RkbGliL29iamVjdFwiLFxuXHRcdFx0XHRcInN0ZGxpYi9hdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFwic3RkbGliL2FycmF5XCIsXG5cdFx0XHRcdFwic3RkbGliL3dyYXBwZXJcIixcblx0XHRcdFx0XCJzdGRsaWIvYm9vbGVhblwiLFxuXHRcdFx0XHRcInN0ZGxpYi9udW1iZXJcIixcblx0XHRcdFx0XCJzdGRsaWIvc3RyaW5nXCIsXG5cdFx0XHRcdFwic3RkbGliL21hdGhcIixcblx0XHRcdFx0XCJzdGRsaWIvZGF0ZVwiLFxuXHRcdFx0XHRcInN0ZGxpYi9yZWdleHBcIixcblx0XHRcdFx0XCJzdGRsaWIvanNvblwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCI2LiBcdTk3NjJcdTU0MTFcdTVCRjlcdThDNjFcdTdGMTZcdTdBMEJcIixcblx0XHRcdGljb246IFwiMjRnbC1mb2xkZXJPcGVuXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwib29wL25ld1wiLFxuXHRcdFx0XHRcIm9vcC90aGlzXCIsXG5cdFx0XHRcdFwib29wL3Byb3RvdHlwZVwiLFxuXHRcdFx0XHRcIm9vcC9vYmplY3RcIixcblx0XHRcdFx0XCJvb3Avc3RyaWN0XCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjcuIFx1NUYwMlx1NkI2NVx1NjRDRFx1NEY1Q1wiLFxuXHRcdFx0aWNvbjogXCIyNGdsLWZvbGRlck9wZW5cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJhc3luYy9nZW5lcmFsXCIsXG5cdFx0XHRcdFwiYXN5bmMvdGltZXJcIixcblx0XHRcdFx0XCJhc3luYy9wcm9taXNlXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjguIERPTVwiLFxuXHRcdFx0aWNvbjogXCIyNGdsLWZvbGRlck9wZW5cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJkb20vZ2VuZXJhbFwiLFxuXHRcdFx0XHRcImRvbS9ub2RlXCIsXG5cdFx0XHRcdFwiZG9tL25vZGVsaXN0XCIsXG5cdFx0XHRcdFwiZG9tL3BhcmVudG5vZGVcIixcblx0XHRcdFx0XCJkb20vZG9jdW1lbnRcIixcblx0XHRcdFx0XCJkb20vZWxlbWVudFwiLFxuXHRcdFx0XHRcImRvbS9hdHRyaWJ1dGVzXCIsXG5cdFx0XHRcdFwiZG9tL3RleHRcIixcblx0XHRcdFx0XCJkb20vY3NzXCIsXG5cdFx0XHRcdFwiZG9tL211dGF0aW9ub2JzZXJ2ZXJcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiOS4gXHU0RThCXHU0RUY2XCIsXG5cdFx0XHRpY29uOiBcIjI0Z2wtZm9sZGVyT3BlblwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImV2ZW50cy9ldmVudHRhcmdldFwiLFxuXHRcdFx0XHRcImV2ZW50cy9tb2RlbFwiLFxuXHRcdFx0XHRcImV2ZW50cy9ldmVudFwiLFxuXHRcdFx0XHRcImV2ZW50cy9tb3VzZVwiLFxuXHRcdFx0XHRcImV2ZW50cy9rZXlib2FyZFwiLFxuXHRcdFx0XHRcImV2ZW50cy9wcm9ncmVzc1wiLFxuXHRcdFx0XHRcImV2ZW50cy9mb3JtXCIsXG5cdFx0XHRcdFwiZXZlbnRzL3RvdWNoXCIsXG5cdFx0XHRcdFwiZXZlbnRzL2RyYWdcIixcblx0XHRcdFx0XCJldmVudHMvY29tbW9uXCIsXG5cdFx0XHRcdFwiZXZlbnRzL2dsb2JhbGV2ZW50aGFuZGxlcnNcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiMTAuIFx1NkQ0Rlx1ODlDOFx1NTY2OFx1NkEyMVx1NTc4QlwiLFxuXHRcdFx0aWNvbjogXCIyNGdsLWZvbGRlck9wZW5cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCJib20vZW5naW5lXCIsXG5cdFx0XHRcdFwiYm9tL3dpbmRvd1wiLFxuXHRcdFx0XHRcImJvbS9uYXZpZ2F0b3JcIixcblx0XHRcdFx0XCJib20vY29va2llXCIsXG5cdFx0XHRcdFwiYm9tL3htbGh0dHByZXF1ZXN0XCIsXG5cdFx0XHRcdFwiYm9tL3NhbWUtb3JpZ2luXCIsXG5cdFx0XHRcdFwiYm9tL2NvcnNcIixcblx0XHRcdFx0XCJib20vc3RvcmFnZVwiLFxuXHRcdFx0XHRcImJvbS9oaXN0b3J5XCIsXG5cdFx0XHRcdFwiYm9tL2xvY2F0aW9uXCIsXG5cdFx0XHRcdFwiYm9tL2FycmF5YnVmZmVyXCIsXG5cdFx0XHRcdFwiYm9tL2ZpbGVcIixcblx0XHRcdFx0XCJib20vZm9ybVwiLFxuXHRcdFx0XHRcImJvbS9pbmRleGVkZGJcIixcblx0XHRcdFx0XCJib20vd2Vid29ya2VyXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIjExLiBcdTk2NDRcdTVGNTVcdUZGMUFcdTdGNTFcdTk4NzVcdTUxNDNcdTdEMjBcdTYzQTVcdTUzRTNcIixcblx0XHRcdGljb246IFwiMjRnbC1mb2xkZXJPcGVuXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiZWxlbWVudHMvYVwiLFxuXHRcdFx0XHRcImVsZW1lbnRzL2ltYWdlXCIsXG5cdFx0XHRcdFwiZWxlbWVudHMvZm9ybVwiLFxuXHRcdFx0XHRcImVsZW1lbnRzL2lucHV0XCIsXG5cdFx0XHRcdFwiZWxlbWVudHMvYnV0dG9uXCIsXG5cdFx0XHRcdFwiZWxlbWVudHMvb3B0aW9uXCIsXG5cdFx0XHRcdFwiZWxlbWVudHMvdmlkZW9cIixcblx0XHRcdF1cblx0XHR9LFxuXG5cblxuXHRdLFxuXHRcIi9jb2x1bW4vaHRtbC10dXRvcmlhbFwiOiBbXG5cdFx0XCJcIixcblx0XHRcImludHJvXCIsXG5cdFx0XCJ1cmxcIixcblx0XHRcImF0dHJpYnV0ZVwiLFxuXHRcdFwiZW5jb2RlXCIsXG5cdFx0XCJzZW1hbnRpY1wiLFxuXHRcdFwidGV4dFwiLFxuXHRcdFwibGlzdFwiLFxuXHRcdFwiaW1hZ2VcIixcblx0XHRcImxpbmtcIixcblx0XHRcIm11bHRpbWVkaWFcIixcblx0XHRcImlmcmFtZVwiLFxuXHRcdFwidGFibGVcIixcblx0XHRcImZvcm1cIixcblx0XHRcImVsZW1lbnRzXCIsXG5cdFx0XCJtb2JpbGVcIixcblx0XSxcblxuXHRcIi8xdjEvODktbGl1eXVlL1wiOiBcInN0cnVjdHVyZVwiLFxuXHRcIi9jb2x1bW4vUHl0aG9uLXRoaW5raW5nL1wiOiBbXG5cdFx0XCJcIixcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NUYwMFx1N0JDN1x1OEJDRFwiLFxuXHRcdFx0aWNvbjogXCJkb2NzXCIsXG5cdFx0XHRwcmVmaXg6IFwidGhpbmtpbmcvXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiMDFcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiUHlnYW1lXCIsXG5cdFx0XHRpY29uOiBcIkdhbWVcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlB5Z2FtZVwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMS1QeWdhbWUtanVzdC1tZXRcIixcblx0XHRcdFx0XCIwMi1QZ2FtZS1waWN0dXJlLXByb2Nlc3NpbmdcIixcblx0XHRcdFx0XCIwMy1weWdhbWUta2V5Ym9hcmQtYW5kLW1vdXNlXCIsXG5cdFx0XHRcdFwiMDQtcHlnYW1lLW11c2ljLWNsYXNzXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlB5dGhvbiB0dXRvcmlhbFwiLFxuXHRcdFx0aWNvbjogXCJweXRob25cIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlB5dGhvbi10dXRvcmlhbFwiLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0XCIwMC1QeXRob24taW50cm9kdWN0aW9uXCIsXG5cdFx0XHRcdFwiMDEtUHl0aG9uLVZhcmlhYmxlXCIsXG5cdFx0XHRcdFwiMDItUHJlbGltaW5hcnktRGF0YVR5cGVcIlxuXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxuXG5cdFwiL2NvbXBhbnkvXCI6IFtcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIkNvbXBhbnlcIixcblx0XHRcdGljb246IFwiZ29uZ3NpXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcImNvbmZlcmVuY2UwMVwiLFxuXHRcdFx0XHRcImNvbmZlcmVuY2UwMlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJXZWJTaXRlXCIsXG5cdFx0XHRpY29uOiBcIndlYlwiLFxuXHRcdFx0cHJlZml4OiBcIldlYlNpdGVcIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiRGF0YVwiXG5cdFx0XHRdXG5cdFx0fVxuXG5cdF0sXG5cblx0XCIvY29sdW1uL2NyYXdsZXIvXCI6IFtcblx0XHRcIlwiLFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU1RjAwXHU3QkM3XHU4QkNEXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiU3BpZGVyXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHR7IHRleHQ6IFwiMDEtUHl0aG9uIFx1NzNBRlx1NTg4M1x1NjQyRFx1NUVGQVwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwiczFfMDFcIiB9LFxuXHRcdFx0XHQvLyBcInMxXzAxXCIsXG5cdFx0XHRcdHsgdGV4dDogXCIwMi1cdTRFM0FcdTRFQzBcdTRFNDhcdTUwNUFcdUZGMUZcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInMxXzAyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAzLVx1NjBBNlx1NTIxQlx1OTY4Rlx1N0IxNFwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwiczFfMDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtXHU1OTgyXHU0RjU1XHU4OEFCXHU1MkE4XHU4RkM3XHU0RTA3XHU2NTM2XHU1MTY1XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJzMV8wNFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNC1cdTcyMkNcdTg2NkJcdTYyODBcdTY3MkZcdTYyMTBcdTVDMzFcdTRFODZcdThGRDlcdTRFOUJcdTU1NDZcdTRFMUFcdTUxNkNcdTUzRjhcdTc2ODRcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInMxXzA1XCIgfSxcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU2QTIxXHU1NzU3XHU0RTAwXHVGRjFBXHU3MjJDXHU4NjZCXHU1N0ZBXHU3ODQwXHU1MzlGXHU3NDA2XCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGljb246IFwiU3BpZGVyXCIsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInMyXzAxXCIsXG5cdFx0XHRcdFwiczJfMDJcIixcblx0XHRcdFx0XCJzMl8wM1wiLFxuXHRcdFx0XHRcInMyXzA0XCIsXG5cdFx0XHRcdFwiczJfMDVcIixcblx0XHRcdFx0XCJzMl8wNlwiLFxuXHRcdFx0XHRcInMyXzA3XCIsXG5cdFx0XHRcdFwiczJfMDhcIixcblx0XHRcdFx0XCJzMl8wOVwiLFxuXHRcdFx0XHRcInMyXzEwXCIsXG5cdFx0XHRcdFwiczJfMTFcIixcblx0XHRcdFx0XCJzMl8xMlwiLFxuXG5cdFx0XHRdLFxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTZBMjFcdTU3NTdcdTRFOENcdUZGMUFcdTcyMkNcdTg2NkJcdTU3RkFcdTY3MkNcdTVFOTNcdTc2ODRcdTRGN0ZcdTc1MjhcIixcblx0XHRcdGljb246IFwiU3BpZGVyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiczNfMDFcIixcblx0XHRcdFx0XCJzM18wMlwiLFxuXHRcdFx0XHRcInMzXzAzXCIsXG5cdFx0XHRcdFwiczNfMDRcIixcblx0XHRcdFx0XCJzM18wNVwiLFxuXHRcdFx0XHRcInMzXzA2XCIsXG5cdFx0XHRcdFwiczNfMDdcIixcblx0XHRcdFx0XCJzM18wOFwiLFxuXHRcdFx0XHRcInMzXzA5XCIsXG5cdFx0XHRcdFwiczNfMTBcIixcblx0XHRcdF1cblx0XHR9LFxuXHRcdHtcblx0XHRcdHRleHQ6IFwiXHU2QTIxXHU1NzU3XHU0RTA5XHVGRjFBXHU1OTFBXHU3OUNEXHU1RjYyXHU1RjBGXHU3Njg0XHU3MjJDXHU1M0Q2XHU2NUI5XHU2Q0Q1XCIsXG5cdFx0XHRpY29uOiBcIlNwaWRlclwiLFxuXHRcdFx0Y29sbGFwc2libGU6IHRydWUsXG5cdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcInM0XzAxXCIsXG5cdFx0XHRcdFwiczRfMDJcIixcblx0XHRcdFx0XCJzNF8wNlwiLFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTg4NjVcdTUxNDVcIixcblx0XHRcdGljb246IFwiU3BpZGVyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHsgdGV4dDogXCIwMS1SZWZlcmVyIFx1Njg0OFx1NEY4QlwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwicmVwbGVuaXNoMDFcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDItXHU2NkY0XHU2NjdBXHU4MEZEXHU3Njg0XHU1RUY2XHU4RkRGXHU2M0QyXHU0RUY2XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJyZXBsZW5pc2gwMlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1cdTRFQ0VcdThGOTNcdTUxNjUgdXJsIFx1NTIzMFx1OTg3NVx1OTc2Mlx1NUM1NVx1NzNCMFx1NTNEMVx1NzUxRlx1NEU4Nlx1NEVDMFx1NEU0OFx1RkYxRlwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwicmVwbGVuaXNoMDNcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDQtU2Vzc2lvbiBcdTRFMEUgQ29va2llc1wiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwicmVwbGVuaXNoMDRcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDUtXHU3MjJDXHU4NjZCXHU1MjA2XHU2NzkwXHU1MjI5XHU1NjY4Olx1OEMzN1x1NkI0Q0Nocm9tZSBGMTJcdTYyOTNcdTUzMDVcdTUyMDZcdTY3OTBcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInJlcGxlbmlzaDA1XCIgfSxcblx0XHRcdF0sXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1Njc0Mlx1OEMwOFwiLFxuXHRcdFx0aWNvbjogXCJTcGlkZXJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0Y2hpbGRyZW46IFtcblx0XHRcdFx0eyB0ZXh0OiBcIjAxLVx1NEVDMFx1NEU0OFx1NjYyRlx1N0Y1MVx1N0VEQ1x1NzIyQ1x1ODY2QlwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwic3VwcGxlbWVudC93aGF0LWlzLXdlYi1jcmF3bGVyXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjAyLVx1NUZDNVx1NzdFNVx1NUZDNVx1NEYxQVx1NjM4Q1x1NjNFMUhUVFBcdTU3RkFcdTY3MkNcdTUzOUZcdTc0MDZcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInN1cHBsZW1lbnQvXHU1RkM1XHU3N0U1XHU1RkM1XHU0RjFBXHU2MzhDXHU2M0UxSFRUUFx1NTdGQVx1NjcyQ1x1NTM5Rlx1NzQwNlwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwMy1cdTRFM0FcdTRFQzBcdTRFNDhcdTUxOTlcdTdGNTFcdTdFRENcdTcyMkNcdTg2NkJcdTU5MjlcdTcxMzZcdTVDMzFcdTY2MkZcdTYyRTlQeXRob25cdTgwMENcdTc1MjhcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInN1cHBsZW1lbnQvd2h5LWlzLXB5dGhvbi1mb3ItY3Jhd2xlclwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNC1cdTUxOTlcdTdGNTFcdTdFRENcdTcyMkNcdTg2NkJcdTdBMEJcdTVFOEZcdTc2ODRcdTRFMDlcdTc5Q0RcdTk2QkVcdTVFQTZcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInN1cHBsZW1lbnQvdGhyZWUtc3RhdGUtb2YtY3Jhd2xlclwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNS1cdTVGRUJcdTY1MzZcdTRFMEJcdThGRDlcdTY3OUEgU2NyYXB5IFJlcXVlc3RzIFx1NTNFM1x1NTQ3M1x1NzY4NFx1NzIyQ1x1ODY2Qlx1MjAxQ1x1NTZERVx1OUI0Mlx1NEUzOVx1MjAxRFwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwic3VwcGxlbWVudC9DcmF3bGVyLVNwZWVkLTEwMVwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwNi1cdTZCNjNcdTUyMTlcdTg4NjhcdThGQkVcdTVGMEZcdThCRTZcdTg5RTNcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInN1cHBsZW1lbnQvcmVnZXhcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMDctcHlxdWVyeSBcdTc2ODRcdTVCODlcdTg4QzVcIiwgaWNvbjogXCJkZWJ1Z1wiLCBsaW5rOiBcInN1cHBsZW1lbnQvcHlxdWVyeS1pbnN0YWxsXCIgfSxcblx0XHRcdFx0eyB0ZXh0OiBcIjA4LWx4bWwgXHU3Njg0XHU1Qjg5XHU4OEM1XCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJzdXBwbGVtZW50L2x4bWwtaW5zdGFsbFwiIH0sXG5cdFx0XHRcdHsgdGV4dDogXCIwOS1Nb25nb0RCIFx1NzY4NFx1NUI4OVx1ODhDNVwiLCBpY29uOiBcImRlYnVnXCIsIGxpbms6IFwic3VwcGxlbWVudC9tb25nb2RiLWluc3RhbGxcIiB9LFxuXHRcdFx0XHR7IHRleHQ6IFwiMTAtXHU1OTFBXHU0RTJBXHU3QUQ5XHU3MEI5XHU1NDBDXHU2NUY2XHU2MjkzXHU1M0Q2XHVGRjAxXHU2MDBFXHU0RTQ4XHU1MDVBXHU1MjMwXHU3Njg0XHVGRjFGXCIsIGljb246IFwiZGVidWdcIiwgbGluazogXCJzdXBwbGVtZW50L21hbnktd2Vic2l0ZXNcIiB9LFxuXHRcdFx0XVxuXHRcdH0sXG5cdFx0e1xuXHRcdFx0dGV4dDogXCJcdTVGMDJcdTZCNjVcdTY1QjBcdTk1RkJcdTcyMkNcdTg2NkJcIixcblx0XHRcdGljb246IFwiU3BpZGVyXCIsXG5cdFx0XHRjb2xsYXBzaWJsZTogdHJ1ZSxcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdFwiUHJvamVjdDEtbmV3cy8wMS5tZFwiLFxuXHRcdFx0XHRcIlByb2plY3QxLW5ld3MvMDIubWRcIixcblx0XHRcdFx0XCJQcm9qZWN0MS1uZXdzLzAzLm1kXCIsXG5cdFx0XHRdXG5cdFx0fSxcblx0XHR7XG5cdFx0XHR0ZXh0OiBcIlx1NzIyQ1x1ODY2QjgwMFx1NEY4QlwiLFxuXHRcdFx0aWNvbjogXCJTcGlkZXJcIixcblx0XHRcdGNvbGxhcHNpYmxlOiB0cnVlLFxuXHRcdFx0cHJlZml4OiBcIlByYWN0aWNhbC1vcGVyYXRpb25cIixcblx0XHRcdGNoaWxkcmVuOiBbXG5cdFx0XHRcdHtcblx0XHRcdFx0XHR0ZXh0OiBcIlx1RDgzRFx1RENEOXJlcXVlc3RzXHU1RTkzK3JlXHU2QTIxXHU1NzU3XCIsXG5cdFx0XHRcdFx0aWNvbjogXCJcIixcblx0XHRcdFx0XHRjaGlsZHJlbjogW1xuXHRcdFx0XHRcdFx0XCIwMS0xMC1saW5lcy1vZi1jb2RlLXNldC0yMDAwLXBpY3R1cmVzLW9mLWJlYXV0aWZ1bC13b21lblwiLFxuXHRcdFx0XHRcdFx0eyB0ZXh0OiBcIlx1NTNEMVx1NzNCMDYwJVx1NTk3M1x1ODhDNVx1NTkyN1x1NEY2Q1x1NkUzOFx1OEQ3MFx1NTcyOGNvc3BsYXlcdTk4ODZcdTU3REZcIiwgaWNvbjogXCJTcGlkZXJcIiwgbGluazogXCIwMi1UaHJvdWdoLVB5dGhvbi1jcmF3bGVyLXdlLWZvdW5kLXRoYXQtNjAtb2Ytd29tZW5zLWJpZ3dpZ3Mtcm9hbS10aGUtY29zcGxheS1maWVsZFwiIH0sXG5cdFx0XHRcdFx0XHR7IHRleHQ6IFwiUHl0aG9uIFx1NTM0M1x1NzMyQlx1NTZGRVx1RkYwQ1x1N0I4MFx1NTM1NVx1NjI4MFx1NjcyRlx1NkVFMVx1OERCM1x1NEY2MFx1NzY4NFx1NjUzNlx1OTZDNlx1NjNBN1wiLCBpY29uOiBcIlNwaWRlclwiLCBsaW5rOiBcIjAzLVB5dGhvbi1UaG91c2FuZC1DYXRzLUNoYXJ0LWEtc2ltcGxlLXRlY2huaXF1ZS10by1zYXRpc2Z5LXlvdXItY29sbGVjdGlvbi1jb250cm9sXCIgfSxcblx0XHRcdFx0XHRcdHsgdGV4dDogXCJcdTkwQTNcdTdCQzdcdTUzNDNcdTczMkJcdTU2RkVcdTcyMkNcdTg2NkJcdTdBREZcdTg4QUJcdTUzQ0RcdTcyMkNcdTRFODYsXHU1OTBEXHU3NkQ4XHU4OUUzXHU1MUIzXCIsIGljb246IFwiU3BpZGVyXCIsIGxpbms6IFwiMDQtVGhhdC1hLXRob3VzYW5kLWNhdC1tYXAtY3Jhd2xlci13YXMtZXZlbi1hbnRpLWNyYXdsLXRvZGF5cy1yZXZpZXctdG8tc29sdmUtYS1saXR0bGUtUHl0aG9uLWNyYXdsZXItMTIwLWV4YW1wbGVzXCIgfSxcblxuXHRcdFx0XHRcdF1cblx0XHRcdFx0fVxuXG5cdFx0XHRdXG5cdFx0fVxuXHRdLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWdWLFNBQVMsd0JBQXdCOzs7QUNBbkMsU0FBUyxpQkFBaUI7OztBQ0F4QixTQUFTLGNBQWM7QUFFaFcsSUFBTSxXQUFXLE9BQU87QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU83QjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBO0FBQUEsSUFDRSxNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUEsSUFDTixNQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEVBZ0RSO0FBQUEsRUFDQTtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQTtBQUFBLFVBRVIsRUFBRSxNQUFNLGlCQUFpQixNQUFNLFVBQVUsTUFBTSw2QkFBNkI7QUFBQSxVQUM1RSxFQUFFLE1BQU0sa0JBQWtCLE1BQU0sWUFBWSxNQUFNLDZDQUE0QztBQUFBO0FBQUEsVUFFOUYsRUFBRSxNQUFNLGVBQWUsTUFBTSxRQUFRLE1BQU0sK0JBQThCO0FBQUEsVUFDekUsRUFBRSxNQUFNLGFBQWEsTUFBTSxXQUFXLE1BQU0sOEJBQTZCO0FBQUEsVUFDekUsRUFBRSxNQUFNLDZCQUE2QixNQUFNLFFBQVEsTUFBTSwrQkFBOEI7QUFBQSxVQUN2RixFQUFFLE1BQU0sZUFBZSxNQUFNLE9BQU8sTUFBTSxzQ0FBcUM7QUFBQTtBQUFBO0FBQUEsVUFHL0UsRUFBRSxNQUFNLFVBQVUsTUFBTSxVQUFVLE1BQU0sbUNBQWtDO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFJNUU7QUFBQSxNQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQWlDRTtBQUFBLEVBQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQXNDSjtBQUFBLElBQ0UsTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sVUFBVTtBQUFBLE1BQ1I7QUFBQSxRQUNFLE1BQU07QUFBQTtBQUFBO0FBQUEsUUFHTixVQUFVO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBU1IsRUFBRSxNQUFNLG1CQUFTLE1BQU0sU0FBUyxNQUFNLDRCQUEyQjtBQUFBLFVBQ2pFLEVBQUUsTUFBTSw0QkFBUSxNQUFNLGVBQWUsTUFBTSxtQkFBa0I7QUFBQSxVQUM3RCxFQUFFLE1BQU0sd0NBQVUsTUFBTSxVQUFVLE1BQU0saURBQWdEO0FBQUE7QUFBQTtBQUFBLFFBRzFGO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLFVBQVU7QUFBQSxVQUNSLEVBQUUsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLHdCQUF1QjtBQUFBLFVBQzlELEVBQUUsTUFBTSxZQUFZLE1BQU0sU0FBUyxNQUFNLHdCQUF1QjtBQUFBLFVBQ2hFLEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxXQUFXLE1BQU0sOEJBQTZCO0FBQUEsVUFDOUUsRUFBRSxNQUFNLFlBQVksTUFBTSxZQUFZLE1BQU0sd0JBQXVCO0FBQUEsUUFDckU7QUFBQSxNQUNGO0FBQUEsTUFDQTtBQUFBLFFBQ0UsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sVUFBVTtBQUFBLFVBQ1IsRUFBRSxNQUFNLGdCQUFnQixNQUFNLFVBQVUsTUFBTSxxQ0FBcUM7QUFBQSxVQUNuRixFQUFFLE1BQU0saUJBQWlCLE1BQU0sUUFBUSxNQUFNLDZDQUE2QztBQUFBLFVBQzFGLEVBQUUsTUFBTSxhQUFhLE1BQU0sT0FBTyxNQUFNLG1DQUFtQztBQUFBLFVBQzNFLEVBQUUsTUFBTSxhQUFhLE1BQU0sT0FBTyxNQUFNLGtDQUFrQztBQUFBLFVBQzFFLEVBQUUsTUFBTSxZQUFZLE1BQU0sT0FBTyxNQUFNLGlDQUFpQztBQUFBLFFBQzFFO0FBQUEsTUFDRjtBQUFBLE1BQ0E7QUFBQSxRQUNFLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxRQUNOLE1BQU07QUFBQSxNQUNSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBZUY7QUFBQSxFQUNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBOEJGLENBQUM7OztBQy9QaVYsU0FBUyxlQUFlO0FBRW5XLElBQU0sWUFBWSxRQUFRO0FBQUEsRUFDaEMsUUFBUTtBQUFBLEVBQ1IsS0FBSztBQUFBLElBQ0o7QUFBQTtBQUFBO0FBQUEsSUFHQTtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQTtBQUFBLE1BRU4sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFFBQ1A7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsUUFDUDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxRQUNQO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUE7QUFBQSxRQUVBO0FBQUE7QUFBQSxRQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BTUQ7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsTUFFTixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFFRDtBQUFBLElBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFZQSxFQUFFLE1BQU0sNEJBQVEsTUFBTSxVQUFVLE1BQU0sZ0JBQWdCO0FBQUEsSUFDdEQ7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUViLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUVEO0FBQUEsRUFDQSw2QkFBNkI7QUFBQSxJQUM1QjtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGtDQUFrQztBQUFBLElBQ2pDLEVBQUUsTUFBTSxhQUFhLE1BQU0sVUFBVSxNQUFNLFlBQVk7QUFBQSxJQUN2RCxFQUFFLE1BQU0sYUFBYSxNQUFNLFVBQVUsTUFBTSxZQUFZO0FBQUEsSUFDdkQsRUFBRSxNQUFNLFFBQVEsTUFBTSxVQUFVLE1BQU0sWUFBWTtBQUFBLElBQ2xELEVBQUUsTUFBTSxTQUFTLE1BQU0sVUFBVSxNQUFNLFlBQVk7QUFBQSxFQUNwRDtBQUFBLEVBQ0EsVUFBVTtBQUFBLEVBQ1YsK0RBQXVCO0FBQUEsSUFDdEI7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxxRUFBd0I7QUFBQSxJQUN2QjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLElBQ1A7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsaURBQWlEO0FBQUEsSUFDaEQ7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElB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SUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNULEVBQUUsTUFBTSxnRUFBYyxNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDaEQsRUFBRSxNQUFNLCtEQUFrQixNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDcEQsRUFBRSxNQUFNLHlFQUFrQixNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDcEQsRUFBRSxNQUFNLDBFQUFtQixNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDckQsRUFBRSxNQUFNLDhFQUFrQixNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsUUFDcEQsRUFBRSxNQUFNLDJGQUEwQixNQUFNLFNBQVMsTUFBTSxLQUFLO0FBQUEsTUFDN0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxzQ0FBc0M7QUFBQSxJQUNyQztBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04s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QUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFFBQVE7QUFBQTtBQUFBLFVBRVIsVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxvQkFBb0I7QUFBQSxJQUNuQjtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsMkNBQTJDO0FBQUEsSUFDMUM7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLDJCQUEyQjtBQUFBLElBQzFCO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHFCQUFxQjtBQUFBLElBQ3BCO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLDZDQUE2QztBQUFBO0FBQUEsSUFFNUMsRUFBRSxNQUFNLHNCQUFZLE1BQU0sVUFBVSxNQUFNLDRDQUE0QztBQUFBLElBQ3RGO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFVB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QUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSwwQkFBMEI7QUFBQSxJQUN6QjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHlCQUF5QjtBQUFBLElBQ3hCO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsRUFTRDtBQUFBLEVBQ0Esc0JBQXNCO0FBQUEsSUFDckI7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BRUQ7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EsNkRBQTZEO0FBQUEsSUFDNUQ7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSxvRUFBb0U7QUFBQSxJQUNuRTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUE7QUFBQSxFQUVBLFFBQVE7QUFBQSxJQUNQO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUNBLHNCQUFzQjtBQUFBLEVBQ3RCLGdEQUFnRDtBQUFBLElBQy9DO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixNQUFNO0FBQUEsTUFDTixVQUFVO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBR0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUdEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGdCQUFnQjtBQUFBLElBQ2Y7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFD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O0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLE1BQU07QUFBQSxNQUNOLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNUO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixRQUFRO0FBQUEsVUFDUixVQUFVO0FBQUEsWUFDVDtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsTUFFRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFN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QUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNULEVBQUUsTUFBTSx5QkFBVSxNQUFNLGVBQWUsTUFBTSx5QkFBeUI7QUFBQSxRQUN0RSxFQUFFLE1BQU0sMkNBQWEsTUFBTSxlQUFlLE1BQU0sNkJBQTZCO0FBQUEsTUFFOUU7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLFVBQVU7QUFBQSxZQUNUO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUVEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQUtBLDJCQUEyQjtBQUFBLElBQzFCO0FBQUE7QUFBQSxNQUVDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUE7QUFBQSxVQUVOLFVBQVU7QUFBQSxZQUNUO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQTtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFB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QUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFDRDtBQUFBLEVBQ0EscUJBQXFCO0FBQUEsRUFFckIsNkJBQTZCO0FBQUEsRUFFN0IscUJBQXFCO0FBQUEsSUFDcEI7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUVEO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFDQSx3QkFBd0I7QUFBQSxJQUN2QjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQTtBQUFBLFVBRU4sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFFRDtBQUFBLEVBQ0EsZ0JBQWdCO0FBQUEsSUFDZjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLEVBQ0Q7QUFBQSxFQUNBLGtCQUFrQjtBQUFBLElBQ2pCO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQTtBQUFBLFVBRU4sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQTtBQUFBLFVBRU4sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQTtBQUFBLFVBRU4sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtBQUFBO0FBQUEsVUFFTixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUE7QUFBQSxVQUVOLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BT0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFVBQ0Q7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sYUFBYTtBQUFBLFVBQ2IsTUFBTTtBQUFBLFVBQ04sVUFBVTtBQUFBLFlBQ1Q7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixNQUFNO0FBQUEsVUFDTixVQUFVO0FBQUEsWUFDVDtBQUFB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QUEsVUFDYixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNUO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxRQUNBO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUEsVUFDTixhQUFhO0FBQUEsVUFDYixVQUFVO0FBQUEsWUFDVDtBQUFBLFlBQ0E7QUFBQSxZQUNBO0FBQUEsWUFDQTtBQUFBLFlBQ0E7QUFBQSxVQUNEO0FBQUEsUUFDRDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBO0FBQUEsTUFFTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNULEVB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UUFDWDtBQUFBLFFBQ0E7QUFBQSxVQUNDLE1BQU07QUFBQSxVQUNOLE1BQU07QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxRQUNYO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBO0FBQUEsVUFFTixNQUFNO0FBQUE7QUFBQSxVQUNOLGFBQWE7QUFBQSxVQUNiLFVBQVU7QUFBQSxZQUNUO0FBQUEsY0FDQyxNQUFNO0FBQUEsY0FDTixhQUFhO0FBQUEsY0FDYixNQUFNO0FBQUEsY0FDTixVQUFVO0FBQUEsZ0JBQ1Q7QUFBQSxnQkFDQTtBQUFBLGNBQ0Q7QUFBQSxZQUNEO0FBQUEsVUFDRDtBQUFBLFFBQ0Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQTtBQUFBLE1BRUMsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUE7QUFBQSxNQUVDLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBQ1g7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDWDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLFFBQVE7QUFBQSxNQUNSLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsVUFDQyxNQUFNO0FBQUEsVUFDTixNQUFNO0FBQUE7QUFBQSxVQUVOLFFBQVE7QUFBQSxVQUNSLFVBQVU7QUFBQSxZQUNULEVBQUUsTUFBTSwyQ0FBYSxNQUFNLFdBQVcsTUFBTSxjQUFjO0FBQUEsVUFDM0Q7QUFBQSxRQUNEO0FBQUEsUUFDQTtBQUFBLFVBQ0MsTUFBTTtBQUFBLFVBQ04sTUFBTTtB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LE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLElBRVg7QUFBQSxJQUVBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVCxFQUFFLE1BQU0sa0JBQWtCLE1BQU0saUJBQWlCLE1BQU0sUUFBUTtBQUFBLFFBQy9ELEVBQUUsTUFBTSxrQkFBa0IsTUFBTSxpQkFBaUIsTUFBTSxRQUFRO0FBQUEsUUFDL0QsRUFBRSxNQUFNLGtCQUFrQixNQUFNLGlCQUFpQixNQUFNLFFBQVE7QUFBQSxNQUVoRTtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNO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QUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxFQUlEO0FBQUEsRUFDQSx5QkFBeUI7QUFBQSxJQUN4QjtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLElBQ0E7QUFBQSxJQUNBO0FBQUEsSUFDQTtBQUFBLEVBQ0Q7QUFBQSxFQUVBLG1CQUFtQjtBQUFBLEVBQ25CLDRCQUE0QjtBQUFBLElBQzNCO0FBQUEsSUFDQTtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sUUFBUTtBQUFBLE1BQ1IsYUFBYTtBQUFBLE1BQ2IsVUFBVTtBQUFBLFFBQ1Q7QUFBQSxNQUNEO0FBQUEsSUFDRDtBQUFBLElBQ0E7QUFBQSxNQUNDLE1BQU07QUFBQSxNQUNOLE1BQU07QUFBQSxNQUNOLGFBQWE7QUFBQSxNQUNiLFFBQVE7QUFBQSxNQUNSLFVBQVU7QUFBQSxRQUNUO0FBQUEsUUFDQTtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLFFBQ0E7QUFBQSxRQUNBO0FBQUEsTUFFRDtBQUFBLElBQ0Q7QUFBQSxFQUNEO0FBQUEsRUFFQSxhQUFhO0FBQUEsSUFDWjtBQUFBLE1BQ0MsTUFBTTtBQUFBLE1BQ04sTUFBTTtBQUFBLE1BQ04sVUFBVTtBQUFBLFFBQ1Q7QUFBQSxRQUNBO0FBQUEsTUFDRDtBQUFBLElBQ0Q7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixNQUFNO0FBQUEsTUFDTixRQUFRO0FBQUEsTUFDUixVQUFVO0FBQUEsUUFDVDtBQUFBLE1BQ0Q7QUFBQSxJQUNEO0FBQUEsRUFFRDtBQUFBLEVBRUEsb0JBQW9CO0FBQUEsSUFDbkI7QUFBQSxJQUNBO0FBQUEsTUFDQyxNQUFNO0FBQUEsTUFDTixhQUFhO0FBQUEsTUFDYixNQUFN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
