---
title: 01-OpenClaw 安装教程「适合：Mac、Windows」
icon: blog
date: 2026-02-03 10:42:38
author: AI悦创
isOriginal: true
sticky: false
star: false
article: true
timeline: true
image: false
navbar: true
sidebarIcon: true
comment: true
lastUpdated: true
editLink: true
backToTop: true
toc: true
---

::: center

### 【保姆级教程】手把手教你安装 OpenClaw 并接入飞书，让AI在聊天软件里帮你干活

:::

::: tip 更新记录📝

- [x] 2026-02-08 22:16:26：飞书配置部分待改进，OpenClaw 部分没有大问题了。

:::

你好，我是悦创。

这里先做一下简单的科普：`OpenClaw` 的名字经历了三次变更，第一次叫做 `ClawdBot`，后来因为名字跟 `Claude` 太过相似，被 `Claude` 告侵权，遂改名 `MoltBot` 。

但是后来在改名过程中遭遇域名和社交账号被抢注，甚至出坑同名加密货币割韭菜的情况，导致名称传播受阻。

最终定名为：**OpenClaw**。

所以，名字经历先后顺序为：ClawdBot -> MoltBot -> OpenClaw

大家不要因为名字困惑了，怀疑是不是自己下错软件了，他们都是同一个。

## 1. 什么是 OpenClaw？

### 1.1 真正“能干活”的个人 AI 助手

**OpenClaw（前身为 Clawdbot）** 是一款在 **2026 年迅速走红的开源个人 AI 助手**，在 GitHub 上已收获 **10 万+ Star**。  

它和你熟悉的那些“只会聊天”的 AI，有着本质上的不同。

### 1.2 🚀 它和传统 AI 的根本差异

- **不是只会说，而是真的会做**：不仅能回答问题，还能直接在你的电脑上执行操作。

- **全天候在线的数字助理**：你休息时，它依然在后台替你完成任务。

- **完全开源 & 永久免费**：没有黑箱，代码透明，所有数据牢牢掌握在自己手中。

- **全平台指挥，一句话下达任务**：海外支持：WhatsApp、Telegram、Discord、Slack、iMessage；国内支持：飞书、钉钉等主流办公与即时通讯工具  

### 1.3 🤖 OpenClaw 能为你做什么？

它不是“陪你聊天”的机器人，而是**真正会在你电脑上动手干活的 AI**。

- 你说一句：“**帮我整理一下上个月的邮件**”  

    它就开始自动分类、归档、清理。

- 你已经入睡：它仍在后台运行，退订垃圾广告、预约行程、巡检日志、定位 Bug……

- 你在任何一个聊天软件里：给它发条消息，它就立刻执行。

### 1.4 ✨ 一句话总结

**把事情交给它就行了。**

从整理文件、处理邮件，到自动化任务，甚至联动智能家居控制灯光—— OpenClaw 都会在后台默默完成。

它不是助手的“概念版”，而是你电脑里真正存在的 **JARVIS 级 AI 管家**。  

一个**超级智能、能落地、能执行的个人 AI 助理**。

令我感到遗憾的是：还不能达到真正的“手”不能自动识别各种软件，要是可以识别就可以扩展更多功能。（至少还不能发微信～）

## 2. 安装 Node.js

下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)

![Windows](./01-install-step.assets/d1396425d8d4091851286c7655ca68c6-20260205134026020.png)

自行选择 Mac 或 Windows 进行下载、安装，安装步骤默认操作即可。

## 3. 开始安装「MacOS & Windows」

### 3.1 Mac 和 Windows 说明

Mac 直接启动终端即可，Windows 需要按如下指示操作：

1. 设置 PowerShell 执行权限

    1. 按 `Win` 键，搜索 **PowerShell**
    2. 右键点击 **Windows** **PowerShell**
    3. 选择 **以管理员身份运行**
    4. 点击 **是** 确认

    ![](./01-install-step.assets/14b7a3d968595e9b226fc2da53efe6a6.png)

2. 在管理员 PowerShell 窗口中，依次执行以下两条命令：

    ```bash
    # 第一条命令：允许当前用户运行本地和下载的脚本
    Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
    # 第二条命令：允许当前用户运行本地和下载的脚本
    Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
    ```

    > **安全提示**：这些命令只会影响您自己的账户，不会影响系统安全或其他用户。

    ![](./01-install-step.assets/c8779ffa0b6a72c6b91c3c1825453f58.png)

### 3.2 执行一键安装命令

- Mac 使用官方推荐命令，进行一键安装：

    ```bash
    curl -fsSL https://openclaw.ai/install.sh | bash
    ```

- Windows 在 PowerShell 执行如下命令：

    ```bash
    iwr -useb https://openclaw.ai/install.ps1 | iex
    ```

**安装过程会自动完成：**

- 检测系统环境
- 安装必要依赖（Node.js 等）
- 下载 OpenClaw 核心文件
- 配置环境变量
- 启动配置向导

> **注意**：如果前面你并没有自己提前安装 Node.js，但执行命令后，出现报错，可以自己到官网下载 node 安装包，自己安装 node 环境，注意版本最好在 `node v22.x` 以上， node 官网下载地址：[https://nodejs.org/zh-cn/download](https://nodejs.org/zh-cn/download)，若还是不懂怎么安装，可以添加我微信：`Jiabcdefh` 进行付费安装。

**Tisp**：下面截图是 Windows 界面，Mac 类似，就不提供截图了。

![](./01-install-step.assets/551a3aa7bbe198f9fe0d237391815fe0.png)

![](./01-install-step.assets/95ecbe13b5ef3059c0a52142a3cb2456.png)

## 4. 初始配置向导

安装完成后，会自动进入配置向导（`openclaw onboard`）。

### 4.1 风险告知

这一步主要是告诉你，使用 OpenClaw 可能会有一些风险。请问你是否继续？

按 向左方向键 ←，选择 `Yes`，按 `Enter` 回车确认：

![](./01-install-step.assets/0260e27eddc52b8afa833135d9992398.png)

### 4.2 选择 QiuickStart 模式

![](./01-install-step.assets/bca550a66426b3a1db6af995013d39f6.png)

### 4.3 配置 AI 模型 API Key

OpenClaw 需要连接到大语言模型才能工作。Openclaw 比较费token，国外模型成本高，门槛也高，这里我选择国内的智谱的 GLM 4.7

> 如果没有智谱的 API Key，点击官方地址自己注册账号获取 API key：[https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D](https://www.bigmodel.cn/invite?icode=kfX4Vy3FW818IlOHqfkX%2BlwpqjqOwPB5EXW6OL4DgqY%3D)

![](./01-install-step.assets/10fcfd0f783085daa1f8924e25d9d460.png)

输入自己的 API Key：

![](./01-install-step.assets/e9965f9944b31e8aefe5061ff4741e90.png)

### 4.4 选择 AI 模型

> 这里我选择默认的 GLM 4.7，也是智普当前的旗舰模型。

![](./01-install-step.assets/8368cb667c52c648f932a4facfed9051.png)

### 4.5 连接即时通讯平台

配置完 AI 模型后，OpenClaw 会询问你要连接哪个通讯平台？

![](./01-install-step.assets/ef05ad5c714b98ba8c9f3233d8982c97.png)

> OpenClaw 原生支持的即时通信平台主要是海外的 WhatsApp、Telegram、Discord、Slack、iMessage 等，国内用户不习惯，这里国产即时通信软件大厂也跟进了，现在钉钉，飞书等都已支持接入 OpenClaw

**后面**会带领大家把**飞书机器人接入 OpenClaw**，使大家可以通过飞书即可指挥 OpenClaw 为我们干活，但是飞书配置比较复杂，这里我们先选择跳过，后面我们可以通过继续进行配置：

![](./01-install-step.assets/6b614369cdbc199d4af4f4a9954b7a1f.png)

### 4.6 选择 Skills

这里也选择：No，暂不配置，后面通过UI界面进行配置：

![](./01-install-step.assets/d38ff4d317119cf94d0858159d3c2a2d.png)

### 4.7 是否开启 Hooks

操作步骤：先敲**空格**，表示选中当前项，再敲回车键。

![](./01-install-step.assets/61807691ca30de7076c260db2391071a.png)

### 4.8 启动服务并打开 UI 界面

此时它会自动再打开一个命令窗口来启动服务：

![](./01-install-step.assets/f707189e151dd94d0866b4aeef2977d0.png)

> 这个过程是在启动服务，可能会需要等一点时间。

Mac 系统不会打开新的命令窗口，只会在同一个窗口执行。

同时，大约过 30 秒左右，我们回到刚才的设置窗口，选择 `Open the Web UI` ，打开 `OpenClaw` 的 UI 界面：

![](./01-install-step.assets/d9b5573b91b1d23e055e5c14e137b0e0.png)

浏览器自动打开Web UI界面：

![](./01-install-step.assets/2d8e715c492817244a406b9f7e9e4734.png)

### 4.9 测试一下

![](./01-install-step.assets/2ef24cf22ca2935a853ac36647a56e0a.png)

## 5. 对接飞书机器人

我们需要先到飞书平台创建自己的机器人来接入 OpenClaw：

### 5.1 来到飞书开发者后台

飞书开放平台地址：[https://open.feishu.cn](https://open.feishu.cn)，没有飞书账号的，需要自己注册账号。

点击右上角进入 **开发者后台**：

![](./01-install-step.assets/image-20260207210611953.png)



### 5.2 创建应用

![](./01-install-step.assets/image-20260207210419880.png)

### 5.3 填写应用信息

![](./01-install-step.assets/image-20260207211329298.png)

### 5.4 给应用添加机器人

![](./01-install-step.assets/image-20260207211936364.png)

![](./01-install-step.assets/image-20260207212206316.png)

### 5.5 给应用配置权限

![](./01-install-step.assets/image-20260207212458855.png)

把即时通讯相关的权限全部开通：

![](./01-install-step.assets/image-20260207213002807.png)



### 5.6 创建版本并发布

![](./01-install-step.assets/image-20260207213136190.png)

![](./01-install-step.assets/image-20260207213440998.png)

![](./01-install-step.assets/image-20260207213511113.png)

![](./01-install-step.assets/image-20260207213733825.png)

![](./01-install-step.assets/image-20260207213751020.png)

### 5.7 来到飞书客户端进行审批

![](./01-install-step.assets/image-20260207215213262.png)

![](./01-install-step.assets/image-20260207215356512.png)

![](./01-install-step.assets/image-20260207215449975.png)

![](./01-install-step.assets/image-20260207215630796.png)



### 5.8 获取自己的应用凭证

![](./01-install-step.assets/image-20260207211716371.png)

### 5.9 安装飞书插件

**你可知道：写着写着 OpenClaw 就更新了，也支持了飞书功能。估计是有“大佬”，向 OpenClaw 官方投稿了，依然是以插件的形式存在。链接：[https://docs.openclaw.ai/channels/feishu](https://docs.openclaw.ai/channels/feishu)** 下面的图片因为已经做好，所以就不进行太多更新，整体是一致的。（国外的通讯软件也很好用，很好配置（推荐））

> OpenClaw 官方飞书投稿的教程，写的很烂～

并且在你初始化 OpenClaw 的时候，就会有飞书的选项。

![](./01-install-step.assets/image-20260208214213977.png)

并且选择进去后，会提示：是否下载。

![](./01-install-step.assets/image-20260208214305951.png)

---

【Mac 操作相同，打开终端】打开 powershell，输入以下命令，安装飞书插件：

```bash
# openclaw plugins install @m1heng-clawd/feishu
openclaw plugins install @openclaw/feishu

# 如果你的 OpenClaw 一开始使用 OpenClaw 是从仓库抓取下来，仓库已经内置。可以使用如下命令：
openclaw plugins install ./extensions/feishu
```

安装成功后，再打开一个新的命令窗口，开始配置飞书插件：

输入命令：

```bash
openclaw config
```

![](./01-install-step.assets/567445ed7cf002439e44f77e9e7ad90a.png)

选择渠道：

![](./01-install-step.assets/3dbdae7b25069bdfe7f5bcbd4a0634fd.png)

选择配置链接：

![](./01-install-step.assets/35d02d53878ad2f3aa09f71279cfc647.png)

![](./01-install-step.assets/9550e843a49b7ed311f6d715ea7e3245.png)

输入飞书的 AppID，AppSecrect：

![](./01-install-step.assets/676316126e050422a9b2395d20be46da.png)

域名选择中国的：

![](./01-install-step.assets/8aa9c4d451acbae2ea5800f2dcc5b1cc.png)

接受群组聊天：

![](./01-install-step.assets/958f7226ce5bfe767014d3942bf49723.png)

选择完成：

![](./01-install-step.assets/590ed2fd7b6a563221a31553ffa91e0a.png)

选择 Yes：

![](./01-install-step.assets/f8db083a967af077656d069297b2e161.png)

选择 open：

![](./01-install-step.assets/3c933df72703dcb7b9fea24396c9ad46.png)

选择继续，完成配置：

![](./01-install-step.assets/69b0e5b079fe326f58b24bdb260b495e.png)

重启服务，使配置生效。终端可以看到飞书插件已经配置成功：

![](./01-install-step.assets/36b60c07426a57db34e1dce3c413677c.png)

### 5.10 回到飞书后台设置事件回调

![](./01-install-step.assets/2e4615d5a8d26bc230bd6c2e7d5def73.png)

选择 `使用长连接接收事件` ：

![](./01-install-step.assets/7b5d00bef1adb8c5b0b53f9a515a429c.png)

可以看到添加事件按钮由原来的灰色不可点击变为可点击：

![](./01-install-step.assets/a42bceda12b9d8fdb9f008dd924b6afc.png)

添加接收消息事件：

![](./01-install-step.assets/65077b69aaa2c4ee5b589f00e7c3c0fa.png)

给应用开通获取通讯录基本信息的权限：

![](./01-install-step.assets/2404ec8274d1215aba70bdb917228e8a.png)

重新发布版本：

![](./01-install-step.assets/8c6db21d54d348948369730db8fe2293.png)

跟前面的步骤一样，发布为在线应用即可。

现在可以在 飞书中与 AI 助手对话了！

### 5.11 在飞书中与 OpenClaw 对话

来到飞书客户端或者手机飞书 app 上：

![](./01-install-step.assets/3635651a264194c78fdb899255269a70.png)

以下是 openclaw 文件夹下面的文档内的内容：

![](./01-install-step.assets/a684fc55523ceb76535afd37e8374b07.png)

![](./01-install-step.assets/image-20260208221329674.png)

### 5.12 访问 Web 控制面板

配置完成后，PowerShell 窗口底部会显示控制面板链接，格式类似：

```bash
Control UI: http://127.0.0.1:18789
```

1. 复制完整链接
2. 在浏览器中打开
3. 即可看到可视化UI管理界面

## 6. 常用命令速查

| 命令                     | 功能             |
| :----------------------- | :--------------- |
| `openclaw onboard`       | 重新进入配置向导 |
| `openclaw status`        | 查看运行状态     |
| `openclaw health`        | 健康检查         |
| `openclaw gateway start` | 启动服务         |
| `openclaw gateway stop`  | 停止服务         |
| `openclaw update`        | 更新到最新版本   |
| `openclaw doctor`        | 诊断问题         |
| `openclaw uninstall`     | 卸载 OpenClaw    |



## 7.FAQ

### Q1：npm 证书校验失败

![](./01-install-step.assets/image-20260206000443252.png)

![](./01-install-step.assets/994e49b54d542839ccf5861cd4507c67.png)

::: code-tabs

@tab 错误提示

```bash
➜  ~ curl -fsSL https://openclaw.ai/install.sh | bash

  🦞 OpenClaw Installer
  Welcome to the command line: where dreams compile and confidence segfaults.

✓ Detected: macos
✓ Homebrew already installed
✓ Node.js v23.11.0 found
✓ Git already installed
→ Installing OpenClaw (latest)...
→ npm install failed; cleaning up and retrying...
```

@tab 解决方法

```bash
npm config set strict-ssl false  # 关闭
npm config set strict-ssl true   # 开启
```

:::

## Q2：OpenClaw 不回复

我的修好了，忘记截图出问题的界面，图片来自：[https://zeabur.com/forum/posts/697ca71becc019f67a62eaac](https://zeabur.com/forum/posts/697ca71becc019f67a62eaac)

![](./01-install-step.assets/4074d730-e536-41a7-9230-6c5da1b882f2.jpg)

![](./01-install-step.assets/616e46e2-12d7-4f12-a865-48fffa367e4e.jpg)

如果你使用官方推荐的命令：`curl -fsSL https://openclaw.ai/install.sh | bash` 安装之后，出现如下现象：

- **现象一**：在你初始化安装时，出现类似提示：`npm install failed; cleaning up and retrying...`；（或者连准备安装 OpenClaw 的版本号都没显示出来）

    ![](./01-install-step.assets/994e49b54d542839ccf5861cd4507c67.png)

- **现象二**：已经按照官方安装方法，OpenClaw 一直不回复；

- **现象三**：就算换模型、给 API 充钱、卸载重新安装都不回复；

- **现象四**：安装 OpenClaw 提供的安装包安装后，一切显示正常，但是依然不回复；

经过长达两天不间断的排查，我发现：

- 使用国内源安装 brew、node 版本并不是最新的，虽然符合要求，但这显然不对劲！
- npm 所走的证书也问题；（使用命令：`npm config set strict-ssl false`）

可以考虑如下操作建议：

- **Step 1**：重装 Mac 系统；（可选｜便捷）

- **Step 2**：启动终端，安装 Xcode：输入命令 `xcode-select --install` 后，Mac 会弹出安装提示，点击安装即可；

- **Step 3**：下载 SwitchHosts：[https://switchhosts.vercel.app/zh](https://switchhosts.vercel.app/zh)；（可选｜在无法正常请求 GitHub 时需要开启）

    按下图配置，新建配置文件，名称随意：

    ![](./01-install-step.assets/image-20260205235728297.png)

    ```bash
    199.232.68.133 raw.githubusercontent.com
    199.232.68.133 user-images.githubusercontent.com
    199.232.68.133 avatars2.githubusercontent.com
    199.232.68.133 avatars1.githubusercontent.com
    ```

    这个软件，先安装不要启动。

- **Step 4：**推荐使用 brew 官方安装方法安装，国内安装方法虽然快速、方便，但是会存在一切无法预料的问题；

    - 官方命令：`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`；

    - 国内镜像命令：`/bin/zsh -c "$(curl -fsSL https://gitee.com/cunkai/HomebrewCN/raw/master/Homebrew.sh)"` 国内教程：[https://bornforthis.cn/blog/2022/02.html](https://bornforthis.cn/blog/2022/02.html)

    - 如果安装出现问题、卡顿：

        配置 git 代理：[解决git clone及huggingface下载等网络失败问题](https://bornforthis.cn/column/AI%E5%A4%A7%E6%A8%A1%E5%9E%8B%E5%AE%9E%E6%88%98%E9%AB%98%E6%89%8B%E8%AF%BE/Tips/02-git-huggingface-error.html)

        我使用的是 Clash Verge 所以是如下配置：

        ```bash
        git config --global http.proxy socks5://127.0.0.1:7897
        git config --global https.proxy socks5://127.0.0.1:7897
        
        # 后期想要取消 git 代理配置时，使用如下命令
        git config --global --unset http.proxy
        git config --global --unset https.proxy
        ```
        
        > 推荐你使用 Clash Verge 做你的代理软件，因为这样命令肯定和我一样。

- **Step 5**：brew 安装完成后，安装 Nodejs 使用命令：`brew install node` 进行安装；

- **Step 6**：接下来我们进行安装 OpenClaw：

    ```bash
    # 可以先尝试用这个方法进行安装
    curl -fsSL https://openclaw.ai/install.sh | bash
    
    # 不过我实际成功是使用如下命令
    # Install OpenClaw
    npm i -g openclaw
    
    # Meet your lobster
    openclaw onboard
    ```

- **Step 7**：接着按照 OpenClaw 的指示，一步步配置即可。

- 这样就莫名的解决了，希望你可以在评论区和我一起交流。

- 如果最后 npm 实在安装不了，再考虑 npm 换源。换源命令：`npm config set registry https://registry.npmmirror.com`  验证：`npm config get registry`

### Q3：通讯软件配置问题

配置通讯软件时，有时会出现网络问题。此时，推荐开启：**虚拟网卡**，保证命令行使用的网络，也走代理。











::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，招收学员面向国内外，国外占 80%。全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)