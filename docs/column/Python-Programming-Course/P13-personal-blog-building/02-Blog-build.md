---
title: 02-2026 年个人博客搭建，搭建属于自己的平台
icon: blog
date: 2026-01-31 14:20:34
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

## 1. 所需环境

- 安装 **Nodejs**：网站运行的本质软件；
- 安装 **VScode**：网站配置、更新部署等操作软件；
- 安装 **Typora**：网站文章编写软件；（唯一的付费软件，可以选择支持盗版～）
- 安装 **Snipaste**：截图、贴图软件，文章编写中图片操作的主力软件；（强力推荐每台电脑都默认安装此软件！）
- 安装 **Git**：用于和 Github 进行交互操作；（推送代码等）
- 注册 **GitHub** 账号：用于网站部署、存储代码等；（作用很强大，必须注册拿下！）
- 配置 GitHub 的 **SSH**，参考教程：[https://bornforthis.cn/blog/2024/7month/git-ssh.html](https://bornforthis.cn/blog/2024/7month/git-ssh.html)
- 「可选」购买 **域名**，便于大家访问网站；
    - 域名越直白越好；
    - 越短越好；
    - 可以参考：
        - **AI悦创**：`bornforthis.cn`；
        - 谷歌：`google.com`；
        - 淘宝：`taobao.com`；
        - 飞书：`feishu.cn`；
        - 抖音：`douyin.com`；
        - 京东：`jd.com`；
        - 微博：`weibo.com`；
    - 域名是可以随时修改，但是我们一般不推荐修改，为什么？——身份标识，例子：大家都知道淘宝域名（taobao.com），突然有一天淘宝换域名了，很多人都只停留在原本的域名，而不知道最新域名。

    ::: tip 正式开始之前需要准备

- 想好自己网站名称；
- 想好自己想要的域名并确认是否被占用，占用则换一个；
- 想想自己的 slogan，人嘛还是得有属于自己的座右铭；
- 设计自己的 logo；
- 选一个自己喜欢的背景；

:::

:::: tabs

@tab Github 注册

访问此链接进行注册：[https://github.com/signup?source=login](https://github.com/signup?source=login)

自己按照流程，一步步注册即可！

![](./02-Blog-build.assets/image-20260201101724116.png)

::::

## 2. 购买域名

- **Step 1**：访问阿里云万网：[https://wanwang.aliyun.com/](https://wanwang.aliyun.com/)

- **Step 2**：注册阿里云账号；

- **Step 3**：🔍搜索你想要的域名，看是否🉑买；

    ![](./02-Blog-build.assets/image-20260131144904677.png)

- **Step 4**：购买时会提示需要“**创建信息模版**”，按指引创建即可：

    ![](./02-Blog-build.assets/image-20260131145440312.png)

- **Step 5**：选择立即实名认证即可，按指引操作即可：

    ![](./02-Blog-build.assets/image-20260131145550902.png)

    ![](./02-Blog-build.assets/image-20260131145637221.png)

- **Step 6**：等待审核通过即可；

## 3. 本地网站初始化

### 3.1 启动终端

使用终端进入到目标路径，也就是你想把网站放在哪里。（换句话说：哪个磁盘、哪个文件夹。）

::: tabs

@tab Windows

@tab:active Mac

1. 假设放在电脑的桌面，我们可以在电脑桌面上创建一个新文件夹叫做：WebSite。（不要包含空格，因为很多编程项目对带有空格的名称处理，容易出问题。）

    ![](./02-Blog-build.assets/image-20260131150801525.png)

2. 鼠标选中新创建的文件夹（WebSite），**鼠标右键**——>最底部的“**服务**”——>选择“**新建位于文件夹位置的终端窗口**”：

    ![](./02-Blog-build.assets/image-20260131151838905.png)

:::



### 3.2 在终端初始化网站

- 我们使用的是开源主题：[https://theme-hope.vuejs.press/zh/](https://theme-hope.vuejs.press/zh/)

- 点击：快速上手

    ![](./02-Blog-build.assets/image-20260131152239741.png)

- 点击：[创建项目](https://theme-hope.vuejs.press/zh/get-started/create.html)

    ![](./02-Blog-build.assets/image-20260131152332021.png)

    

- 在终端输入主题文档提供的命令进行初始化网站：`pnpm create vuepress-theme-hope my-docs`

    ![](./02-Blog-build.assets/image-20260131152456725.png)

- 终端界面（上一步启动的终端），把命令改成：`pnpm create vuepress-theme-hope .`：

    键盘上下键选择“简体中文”，随后回车↩︎键：

    ![](./02-Blog-build.assets/image-20260131154621373.png)

    选择 pnpm：

    ![](./02-Blog-build.assets/image-20260131154840434.png)

    选择 vite：

    ![](./02-Blog-build.assets/image-20260131154901698.png)

    按下图进行设置即可：

    - **应用名称**：需要使用纯英文编写，自己的网站名称；
    - **设置应用描述**：自己的网站信息介绍，自己编写；
    - 其它按图片编写即可；

    ![](./02-Blog-build.assets/image-20260131155112369.png)

- 按照下面继续设置即可：

    ![](./02-Blog-build.assets/image-20260131155405948.png)

- 自己选择是否查看 demo 示例：

    ![](./02-Blog-build.assets/image-20260131155517847.png)

- 如何停止：使用 `Ctrl + C` 进行停止🤚

    ![](./02-Blog-build.assets/image-20260131155741866.png)



### 3.3 使用 Vscode 打开本网站项目

启动终端，使终端在网站文件夹下。使用前面的终端也是可以的，需要停止运行网站。

::: details 操作方法

鼠标选中新创建的文件夹（WebSite），**鼠标右键**——>最底部的“**服务**”——>选择“**新建位于文件夹位置的终端窗口**”：

![](./02-Blog-build.assets/image-20260131151838905.png)

:::

直接输入：`code .` 这样就可以直接启动 VScode。

已经成功使用 VScode 启动网站项目：

![](./02-Blog-build.assets/image-20260201102211450.png)

### 3.4 网站启动本地预览（网站本地启动）

:::: tabs

@tab 方法一：使用终端

启动终端，并保证终端路径在网站目录下，输入以下命令 `pnpm run docs:dev` 进行运行：

![](./02-Blog-build.assets/image-20260201104212586.png)

执行使用浏览器访问：

```bash
➜  Local:   http://localhost:8081/
➜  Network: http://192.168.3.198:8081/
```

默认是：

```bash
➜  Local:   http://localhost:8080/
➜  Network: http://192.168.3.198:8080/
```

我是因为启动了别的网站，所以启动就自动变成：8081。

@tab 方法二：使用 VScode 终端

直接在 VScode 做成“资源管理器”的空白位置，鼠标右键选择：**在集成终端中打开**

![](./02-Blog-build.assets/image-20260201104906817.png)

要学会总结，接下来的步骤就如法炮制了。输入启动命令：`pnpm run docs:dev`，故而方法二的本质就是“**使用的还是终端，只不过是借助 VScode 去调用（启动）终端**”。

![](./02-Blog-build.assets/image-20260201105346466.png)

::: tip **提问**：现在我为什么使用的端口是：`8082`（你如果按教程走，应该是 `8081`）？

其实原因前面讲过了，原本的端口被占用，只能进行使用下一个端口。

我们如何恢复使用默认端口 `8080` 呢？——关闭多余的网站不就行了。

**那么，我们应该如何把多余启动的网站进行关闭呢？**

:::

::::

### 3.5 关闭本地启动的网站

- **方法一**：直接叉掉终端，但是需要又得启动终端；
- **方法二**：在目标终端使用 `Ctrl + C` 即可退出。



## 4. 网站部署

### 4.1 GitHub 创建特定仓库

**Step 1**：新建仓库

![](./02-Blog-build.assets/image-20260201111422367.png)

- 输入仓库名称：`huangjiarongbao.github.io`；

    > 一个 GitHub 账号，只能创建一个这样的特定仓库，不过有其它方法绕开限制，后期分享。

- 仓库介绍；

- 仓库必须公开，不能私有。如果想要私有，得用其它方法保护源代码。

    > 原因很简单：因为免费版必须公开。

- 随后点击： Create repository 即可；

![](./02-Blog-build.assets/image-20260201111714605.png)

切换到 SSH：

![](./02-Blog-build.assets/image-20260201114220893.png)



### 4.2 本地电脑网站，绑定远程 GitHub 仓库（首次推送）

::: tip 补充：主题目前初始化自带 GitHub 部署脚本存在问题，需要使用如下内容直接覆盖。路径：`.github/workflows/deploy-docs.yml`

```yaml
name: 部署文档

on:
  push:
    branches:
      - main

permissions:
  contents: write

jobs:
  deploy-gh-pages:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3
        with:
          fetch-depth: 0
          # 如果你文档需要 Git 子模块，取消注释下一行
          # submodules: true

      - name: 安装 pnpm
        uses: pnpm/action-setup@v2
        with:
          run_install: true
          version: 10.5.2 # 指定 pnpm 版本，可以修改为最新的稳定版本

      - name: 设置 Node.js
        uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: pnpm


      - name: 构建文档
        env:
          NODE_OPTIONS: --max_old_space_size=8192
        run: |-
          pnpm run docs:build
          > src/.vuepress/dist/.nojekyll

      - name: 部署文档
        uses: JamesIves/github-pages-deploy-action@v4
        with:
          branch: gh-pages
          folder: src/.vuepress/dist
```

:::

![](./02-Blog-build.assets/image-20260202081025048.png)

打开网站终端（终端所在路径需要在网站当中），输入如下命令：

```bash
git init  # 初始化仓库
git add . # . 代表添加所有文件夹、文件
git commit -m "first commit"  # "first commit" 可以随便改，代表本次做了哪些修改，做个备注。不改，一直用这个也是可以的。
git branch -M main
git remote add origin git@github.com:huangjiarongbao/huangjiarongbao.github.io.git  # 用你自己的，每个 GitHub 都有自己的 
git push -u origin main
```

一条一条执行命令，即可。提交成功参考：

```bash
(base) ➜  WebSite git init
Initialized empty Git repository in /Users/huangjiabao/Desktop/WebSite/.git/
(base) ➜  WebSite git:(main) ✗ git add .
(base) ➜  WebSite git:(main) ✗ git commit -m "first commit"
[main (root-commit) 2051f89] first commit
 47 files changed, 5661 insertions(+)
 create mode 100644 .DS_Store
 create mode 100644 .github/workflows/deploy-docs.yml
 create mode 100644 .gitignore
 create mode 100644 package.json
 create mode 100644 pnpm-lock.yaml
 create mode 100644 src/.vuepress/config.ts
 create mode 100644 src/.vuepress/navbar.ts
 create mode 100644 src/.vuepress/public/CNAME
 create mode 100644 src/.vuepress/public/assets/icon/apple-icon-152.png
 create mode 100644 src/.vuepress/public/assets/icon/chrome-192.png
 create mode 100644 src/.vuepress/public/assets/icon/chrome-512.png
 create mode 100644 src/.vuepress/public/assets/icon/chrome-mask-192.png
 create mode 100644 src/.vuepress/public/assets/icon/chrome-mask-512.png
 create mode 100644 src/.vuepress/public/assets/icon/guide-maskable.png
 create mode 100644 src/.vuepress/public/assets/icon/ms-icon-144.png
 create mode 100644 src/.vuepress/public/assets/images/cover1.jpg
 create mode 100644 src/.vuepress/public/assets/images/cover2.jpg
 create mode 100644 src/.vuepress/public/assets/images/cover3.jpg
 create mode 100644 src/.vuepress/public/favicon.ico
 create mode 100644 src/.vuepress/public/logo.png
 create mode 100644 src/.vuepress/public/logo.svg
 create mode 100644 src/.vuepress/sidebar.ts
 create mode 100644 src/.vuepress/styles/config.scss
 create mode 100644 src/.vuepress/styles/index.scss
 create mode 100644 src/.vuepress/styles/palette.scss
 create mode 100644 src/.vuepress/theme.ts
 create mode 100644 src/README.md
 create mode 100644 src/demo/README.md
 create mode 100644 src/demo/disable.md
 create mode 100644 src/demo/encrypt.md
 create mode 100644 src/demo/layout.md
 create mode 100644 src/demo/markdown.md
 create mode 100644 src/demo/page.md
 create mode 100644 src/intro.md
 create mode 100644 src/posts/apple/1.md
 create mode 100644 src/posts/apple/2.md
 create mode 100644 src/posts/apple/3.md
 create mode 100644 src/posts/apple/4.md
 create mode 100644 src/posts/banana/1.md
 create mode 100644 src/posts/banana/2.md
 create mode 100644 src/posts/banana/3.md
 create mode 100644 src/posts/banana/4.md
 create mode 100644 src/posts/cherry.md
 create mode 100644 src/posts/dragonfruit.md
 create mode 100644 src/posts/strawberry.md
 create mode 100644 src/posts/tomato.md
 create mode 100644 tsconfig.json
(base) ➜  WebSite git:(main) git branch -M main
(base) ➜  WebSite git:(main) git remote add origin git@github-work:huangjiarongbao/huangjiarongbao.github.io.git
(base) ➜  WebSite git:(main) git remote add origin git@github-work:huangjiarongbao/huangjiarongbao.github.io.git
(base) ➜  WebSite git:(main) git push -u origin main
Enumerating objects: 62, done.
Counting objects: 100% (62/62), done.
Delta compression using up to 10 threads
Compressing objects: 100% (57/57), done.
Writing objects: 100% (62/62), 591.97 KiB | 1.93 MiB/s, done.
Total 62 (delta 6), reused 0 (delta 0), pack-reused 0 (from 0)
remote: Resolving deltas: 100% (6/6), done.
To github-work:huangjiarongbao/huangjiarongbao.github.io.git
 * [new branch]      main -> main
branch 'main' set up to track 'origin/main'.
(base) ➜  WebSite git:(main) 
```

> Tips：github-work 是我自己一台电脑，配置多个 SSH 的标记，无需 care。

### 4.3 激活 GitHub 部署

#### 4.3.1 第一步：点击 Setting

![](./02-Blog-build.assets/image-20260206112001499.png)

#### 4.3.2 第二步：点击 Pages

![](./02-Blog-build.assets/image-20260206112323952.png)

#### 4.3.3 第三步：选择 gh-pages 并 Save

![](./02-Blog-build.assets/image-20260206112450849.png)

#### 4.3.4 尝试访问部署网站

域名已经给出：[https://huangjiarongbao.github.io/](https://huangjiarongbao.github.io/)

![](./02-Blog-build.assets/image-20260206112636887.png)

![](./02-Blog-build.assets/image-20260206112739501.png)





### 4.4 更新网站

#### 4.4.1 方法一「推荐」

使用 VScode 进行提交即可，点击 VScode 左侧的 git 管理按钮：

![](./02-Blog-build.assets/image-20260202085815275.png)

![首次使用会弹出提示，选择：始终](./02-Blog-build.assets/image-20260408201430213.png)

![](./02-Blog-build.assets/image-20260408201502850.png)







#### 4.4.2 方法二

```bash
git add . # . 代表添加所有文件夹、文件
git commit -m "first commit"  # "first commit" 可以随便改，代表本次做了哪些修改，做个备注。不改，一直用这个也是可以的。
git push -u origin main
```



### 4.5 查看是否部署成功

先进到自己的 GitHub 仓库，点击 Action：

![](./02-Blog-build.assets/image-20260206113216330.png)







### 4.6 域名解析

#### 4.6.1 阿里云解析 GitHub 网站

**Step 1**：访问阿里云域名解析网站：[https://dnsnext.console.aliyun.com/authoritative](https://dnsnext.console.aliyun.com/authoritative)

![](./02-Blog-build.assets/image-20260206113609518.png)

**Step 2**：点击：添加记录

![image-20260206113932437](./02-Blog-build.assets/image-20260206113932437.png)

**Step 3**：添加解析 1

![](./02-Blog-build.assets/image-20260206114521400.png)

**Step 4**：添加解析 2

![](./02-Blog-build.assets/image-20260206114611816.png)

上面完成了阿里云域名要做的，现在我们来完成 GitHub 要做的。



#### 4.6.2 创建域名解析文件「`CNAME`」

在**路径**：`src/.vuepress/public` 下创建 `CNAME` 。

![](./02-Blog-build.assets/image-20260202092143336.png)

![写入你自己的域名](./02-Blog-build.assets/image-20260202092244716.png)

保存后，推送到 GitHub 仓库。

推送到 GitHub 后，会自动执行更新部署。

![](./02-Blog-build.assets/image-20260206115038399.png)

等待检测完成后，点击：

![](./02-Blog-build.assets/image-20260206115136234.png)

## 5. 网站更多配置

### 5.1 更新属于自己的 logo

可以借助 AI 设计生成属于自己的网站 logo，并把 logo 放入 `src/.vuepress/public`。MacOS 记得使用快捷键：`Command + Shift + 。` 即可显示隐藏文件、文件夹。

![](./02-Blog-build.assets/image-20260206120451554.png)

接着我们需要在 VScode 中进行配置 logo，配置文件路径：`src/.vuepress/theme.ts`。

![](./02-Blog-build.assets/image-20260206121220772.png)

::: warning 注意：在我们的网站当中，所有 `/` 代表从 `public` 开始。

也就是：`/my-logo.png` 其实网站会执行成：`src/.vuepress/public/my-logo.png`

:::



### 5.2 Vuepress 网站链接特点

#### 5.2.1 资源链接特点

- **Path**：`src/.vuepress/public/`

所有的文件、图片等，都需要放在路径 `public` 下，而部署之后生成的链接格式是：`https://bornforthis.cn/aiyc.svg`。

`/` 开始就代表从 `public` 文件夹开始。

::: tip 测验

在 public 当中，自行创建文件夹并放入全新的图片 or 文件，并发送链接到评论区。

:::

#### 5.2.2 文章链接特点

本网站所有文章均为 markdown 格式。

- **特点一**：在本网站使用的主题中，`README.md` 文件可以直接不写。

    **举个例子**：

    - **例子 1**：markdown 文章路径为：`src/README.md`——>对应的部署后的链接则表示为：`域名/README.md`（`域名/index.html`）——>最终简化成 【`域名/`】（bornforthis.cn） 代表主页。
    - **例子 2**：markdown 文章路径为：`src/OpenClaw/README.md`（OpenClaw 是文件夹）——>对应的部署后的链接则表示为：【`域名/文件夹名称/README.md`】（【`域名/文件夹名称/index.html`】）——>最终简化成 【`域名/文件夹名称/`】（【`bornforthis.cn/OpenClaw/`】） 代表主页。

    **补充知识点**：在 Web 前端当中，如果一个 HTML 文件命名为：`index.html` 则意味着是该网站的主页。

    **实际演示**：我在服务器中创建一个新站点，域名为：`1v1.bornforthis.cn`，如果在这个域名对应的文件夹下放入一个 html 的页面文件，命名 `index.html` ：

    ![](./02-Blog-build.assets/image-20260410200533721.png)

    实际访问链接：[https://1v1.bornforthis.cn/](https://1v1.bornforthis.cn/) 等价 [https://1v1.bornforthis.cn/index.html](https://1v1.bornforthis.cn/index.html)

    > HTML 使用 Gemini 生成：[https://gemini.google.com/share/b95aa7083c8f](https://gemini.google.com/share/b95aa7083c8f)

    所以好处不言而喻：主页就无需强制写明 `index.html`。

    如果不叫 `index.html` 呢？

    ![](./02-Blog-build.assets/image-20260410201045933.png)

    实际访问链接：[https://1v1.bornforthis.cn/code1v1.html](https://1v1.bornforthis.cn/code1v1.html) 等价 [https://1v1.bornforthis.cn/code1v1.html](https://1v1.bornforthis.cn/code1v1.html)

    **我们的网站是用 markdown 文章编写，网站内部代码拥有类似的处理逻辑**：

    ```python
    if "markdown_name.md" == "README.md":
        return "index.html"
    else:
        return "markdown_name.html"
    ```

- **特点 2**：什么时候 `/` 开始代表链接，什么时候代表 `public`？

    主要取决于你的实际路径，指向哪个，就访问哪个。（前提是：**网页路径与 public 路径不同**）

    如果网页路径与 public 相同，会访问哪个？—— ~~优先返回网页链接。~~ **如果是页面内跳转，则显示网站页面文章（刷新也会跳转到 public 下）。如果是直接访问该链接，则显示 public 下的内容。）**

    > 在页面内跳转时，优先访问网页文章。刷新、直接访问，则直接显示 public 下的同名内容。

    那如何写才能避免呢？答案早就在结论当中，编写链接时，想要百分百访问 public 链接，则直接写死链接，不要简写！（`域名/public下的内容`）

- **特点 3**：文章路径为：`src/python/variable.md`，实际链接为：`bornforthis.cn/python/variable.html`，在配置文件中编写，可以直接写成：`/python/variable`（`.md` 可以省略，也可以写）。



### 5.3 巧用 public 特性

可以借助 public 的特性，进行部署纯静态网页。

借助 AI 制作一个纯静态的网页版的【开心消消乐】：

```html
帮我做一个纯静态的开心消消乐游戏，内置 20 个关卡。
```

AI 帮我写的代码如下：

```html
import React, { useState, useEffect, useCallback } from 'react';

// --- 游戏基础配置 ---
const BOARD_SIZE = 8;
const CANDY_TYPES = ['🍎', '🍊', '🍇', '🍉', '🥝', '🫐'];

// --- 自动生成 20 个关卡的配置 ---
const LEVELS = Array.from({ length: 20 }, (_, i) => ({
  id: i + 1,
  targetScore: 1000 + i * 800,        // 目标分数逐渐增加
  moves: 15 + Math.floor(i / 2),      // 步数根据关卡稍微增加，但难度比例变高
}));

// --- 核心逻辑函数 (脱离组件避免重复渲染问题) ---

// 检查并获取所有匹配的索引 (横向和纵向)
const getMatches = (currentBoard) => {
  const matches = new Set();

  // 检查横向
  for (let r = 0; r < BOARD_SIZE; r++) {
    for (let c = 0; c < BOARD_SIZE - 2; c++) {
      let idx1 = r * BOARD_SIZE + c;
      let idx2 = r * BOARD_SIZE + c + 1;
      let idx3 = r * BOARD_SIZE + c + 2;
      if (
        currentBoard[idx1] &&
        currentBoard[idx1] === currentBoard[idx2] &&
        currentBoard[idx1] === currentBoard[idx3]
      ) {
        matches.add(idx1).add(idx2).add(idx3);
        // 继续向右检查是否有更长的连消 (4消，5消等)
        let k = 3;
        while (c + k < BOARD_SIZE && currentBoard[idx1] === currentBoard[r * BOARD_SIZE + c + k]) {
          matches.add(r * BOARD_SIZE + c + k);
          k++;
        }
      }
    }
  }

  // 检查纵向
  for (let c = 0; c < BOARD_SIZE; c++) {
    for (let r = 0; r < BOARD_SIZE - 2; r++) {
      let idx1 = r * BOARD_SIZE + c;
      let idx2 = (r + 1) * BOARD_SIZE + c;
      let idx3 = (r + 2) * BOARD_SIZE + c;
      if (
        currentBoard[idx1] &&
        currentBoard[idx1] === currentBoard[idx2] &&
        currentBoard[idx1] === currentBoard[idx3]
      ) {
        matches.add(idx1).add(idx2).add(idx3);
        // 继续向下检查是否有更长的连消
        let k = 3;
        while (r + k < BOARD_SIZE && currentBoard[idx1] === currentBoard[(r + k) * BOARD_SIZE + c]) {
          matches.add((r + k) * BOARD_SIZE + c);
          k++;
        }
      }
    }
  }

  return Array.from(matches);
};

// 生成一个没有初始匹配项的合法开局棋盘
const generateValidBoard = () => {
  let board = new Array(BOARD_SIZE * BOARD_SIZE).fill(null);
  for (let i = 0; i < board.length; i++) {
    let available = [...CANDY_TYPES].sort(() => Math.random() - 0.5); // 打乱顺序
    for (let type of available) {
      board[i] = type;
      // 临时检查放入该项后是否会产生匹配，如果不产生，则确认使用该水果
      if (getMatches(board).length === 0) {
        break;
      }
    }
  }
  return board;
};

// 处理重力掉落和填充新水果
const applyGravity = (currentBoard) => {
  let newBoard = [...currentBoard];
  for (let c = 0; c < BOARD_SIZE; c++) {
    let col = [];
    // 从下往上提取非空的元素
    for (let r = BOARD_SIZE - 1; r >= 0; r--) {
      if (newBoard[r * BOARD_SIZE + c] !== null) {
        col.push(newBoard[r * BOARD_SIZE + c]);
      }
    }
    // 顶部缺失的位置用新生成的随机水果填补
    while (col.length < BOARD_SIZE) {
      col.push(CANDY_TYPES[Math.floor(Math.random() * CANDY_TYPES.length)]);
    }
    // 将提取和生成的一列重新放回棋盘
    for (let r = BOARD_SIZE - 1; r >= 0; r--) {
      newBoard[r * BOARD_SIZE + c] = col[(BOARD_SIZE - 1) - r];
    }
  }
  return newBoard;
};

// 检查两个方块是否相邻
const checkAdjacent = (idx1, idx2) => {
  const r1 = Math.floor(idx1 / BOARD_SIZE);
  const c1 = idx1 % BOARD_SIZE;
  const r2 = Math.floor(idx2 / BOARD_SIZE);
  const c2 = idx2 % BOARD_SIZE;
  return (Math.abs(r1 - r2) === 1 && c1 === c2) || (Math.abs(c1 - c2) === 1 && r1 === r2);
};


export default function App() {
  // --- 状态管理 ---
  const [maxLevel, setMaxLevel] = useState(1);
  const [gameState, setGameState] = useState('menu'); // 'menu', 'playing', 'won', 'lost'
  
  const [currentLevel, setCurrentLevel] = useState(null);
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);
  const [moves, setMoves] = useState(0);
  
  const [selectedCell, setSelectedCell] = useState(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isUserSwapping, setIsUserSwapping] = useState(false);
  const [clearedIndices, setClearedIndices] = useState([]);

  // 初始化读取本地最高关卡记录
  useEffect(() => {
    try {
      const savedMax = localStorage.getItem('match3_maxLevel');
      if (savedMax) setMaxLevel(parseInt(savedMax, 10));
    } catch (e) {
      console.warn('Local storage disabled');
    }
  }, []);

  // 注入自定义动画 CSS
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      @keyframes popAnim {
        0% { transform: scale(1); opacity: 1; }
        50% { transform: scale(1.3); opacity: 0.8; }
        100% { transform: scale(0); opacity: 0; }
      }
      .anim-pop {
        animation: popAnim 0.3s ease-out forwards;
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  // --- 游戏控制 ---
  const startGame = (levelObj) => {
    setCurrentLevel(levelObj);
    setScore(0);
    setMoves(levelObj.moves);
    setBoard(generateValidBoard());
    setClearedIndices([]);
    setSelectedCell(null);
    setIsAnimating(false);
    setIsUserSwapping(false);
    setGameState('playing');
  };

  const handleLevelUnlock = (levelId) => {
    const nextMax = Math.max(maxLevel, levelId + 1);
    setMaxLevel(nextMax);
    try {
      localStorage.setItem('match3_maxLevel', nextMax.toString());
    } catch (e) { }
  };

  // --- 核心交互与连锁反应 ---

  // 尝试交换两个方块
  const trySwap = (idx1, idx2) => {
    setIsUserSwapping(true);
    let b = [...board];
    // 执行交换
    [b[idx1], b[idx2]] = [b[idx2], b[idx1]];
    setBoard(b);

    // 延迟一点时间检查是否合法，产生视觉上的交互反馈
    setTimeout(() => {
      const matches = getMatches(b);
      if (matches.length > 0) {
        // 合法交换：扣除步数，连消循环将由 useEffect 接管
        setMoves((m) => m - 1);
        setIsUserSwapping(false); 
      } else {
        // 非法交换：回退位置
        let revertB = [...b];
        [revertB[idx1], revertB[idx2]] = [revertB[idx2], revertB[idx1]];
        setBoard(revertB);
        setIsUserSwapping(false);
      }
    }, 300);
  };

  // 处理方块点击
  const handleCellClick = (index) => {
    if (gameState !== 'playing' || isAnimating || isUserSwapping) return;

    if (selectedCell === null) {
      setSelectedCell(index);
    } else {
      if (selectedCell === index) {
        setSelectedCell(null); // 取消选中
      } else if (checkAdjacent(selectedCell, index)) {
        trySwap(selectedCell, index);
        setSelectedCell(null);
      } else {
        setSelectedCell(index); // 点击了不相邻的，直接改选该方块
      }
    }
  };

  // 自动检测消除与掉落的连消循环 (级联效果)
  useEffect(() => {
    if (gameState !== 'playing' || isUserSwapping) return;

    const matches = getMatches(board);

    if (matches.length > 0) {
      setIsAnimating(true);
      setClearedIndices(matches);

      // 第一步：播放消除动画，计算分数
      const timer = setTimeout(() => {
        let b = [...board];
        matches.forEach(i => b[i] = null);
        
        // 计算得分：基础每块10分，大于3连有额外加成
        const newPoints = matches.length * 10 + (matches.length > 3 ? (matches.length - 3) * 20 : 0);
        setScore(s => s + newPoints);
        
        // 第二步：执行重力掉落并填充新水果
        const nextBoard = applyGravity(b);
        setClearedIndices([]);
        setBoard(nextBoard); // 这会触发下一个 useEffect，从而实现无限连消检查
      }, 300);

      return () => clearTimeout(timer);
    } else {
      setIsAnimating(false);
      
      // 当盘面稳定没有可消项时，判定输赢
      if (currentLevel) {
        if (score >= currentLevel.targetScore) {
          setGameState('won');
          handleLevelUnlock(currentLevel.id);
        } else if (moves <= 0) {
          setGameState('lost');
        }
      }
    }
  }, [board, gameState, isUserSwapping, score, moves, currentLevel]);


  // --- 视图渲染组件 ---

  // 1. 关卡菜单视图
  if (gameState === 'menu') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex flex-col items-center justify-center p-4">
        <div className="max-w-md w-full bg-white/20 backdrop-blur-md rounded-3xl p-6 shadow-2xl border border-white/30">
          <h1 className="text-4xl font-extrabold text-white text-center mb-8 drop-shadow-md">🍉 开心消消乐 🍇</h1>
          <div className="grid grid-cols-4 gap-4">
            {LEVELS.map((lvl) => {
              const isLocked = lvl.id > maxLevel;
              return (
                <button
                  key={lvl.id}
                  onClick={() => !isLocked && startGame(lvl)}
                  disabled={isLocked}
                  className={`
                    aspect-square rounded-2xl flex flex-col items-center justify-center font-bold text-lg transition-all
                    ${isLocked 
                      ? 'bg-gray-400/50 text-gray-200 cursor-not-allowed shadow-inner' 
                      : 'bg-white/90 text-purple-600 hover:scale-105 hover:bg-white shadow-lg active:scale-95'}
                  `}
                >
                  {isLocked ? '🔒' : lvl.id}
                </button>
              );
            })}
          </div>
          <div className="mt-8 text-center text-white/80 text-sm">
            提示：滑动(点击)相邻的水果使3个以上相连即可消除得分。
          </div>
        </div>
      </div>
    );
  }

  // 2. 游戏主视图
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-800 to-indigo-900 flex flex-col items-center justify-center p-2 sm:p-4">
      <div className="max-w-md w-full">
        
        {/* 顶部状态栏 */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 mb-4 flex justify-between items-center text-white shadow-lg border border-white/10">
          <div>
            <div className="text-sm text-indigo-200">第 {currentLevel.id} 关</div>
            <div className="text-2xl font-bold">{score} <span className="text-sm font-normal">/ {currentLevel.targetScore}</span></div>
          </div>
          <div className="text-right">
            <div className="text-sm text-pink-200">剩余步数</div>
            <div className={`text-3xl font-black ${moves <= 5 ? 'text-red-400 animate-pulse' : 'text-white'}`}>
              {moves}
            </div>
          </div>
        </div>

        {/* 游戏棋盘 */}
        <div className="bg-black/30 rounded-2xl p-2 shadow-2xl backdrop-blur-md relative touch-none select-none">
          <div 
            className="grid gap-1 sm:gap-2" 
            style={{ gridTemplateColumns: `repeat(${BOARD_SIZE}, minmax(0, 1fr))` }}
          >
            {board.map((item, index) => {
              const isSelected = selectedCell === index;
              const isCleared = clearedIndices.includes(index);
              return (
                <div
                  key={index}
                  onClick={() => handleCellClick(index)}
                  className={`
                    aspect-square rounded-xl flex items-center justify-center text-3xl sm:text-4xl cursor-pointer transition-transform duration-200
                    ${item ? 'bg-white/10' : 'bg-transparent'}
                    ${isSelected ? 'ring-4 ring-yellow-400 scale-110 z-10 bg-white/30' : ''}
                    ${isCleared ? 'anim-pop' : ''}
                    hover:bg-white/20
                  `}
                >
                  <div className="drop-shadow-md">{item}</div>
                </div>
              );
            })}
          </div>

          {/* 交互遮罩：防止动画播放时玩家点击 */}
          {(isAnimating || isUserSwapping) && (
            <div className="absolute inset-0 z-20"></div>
          )}
        </div>

        {/* 底部按钮 */}
        <div className="mt-6 flex justify-center">
          <button 
            onClick={() => setGameState('menu')}
            className="px-6 py-2 bg-white/10 text-white rounded-full hover:bg-white/20 transition-colors border border-white/20"
          >
            返回菜单
          </button>
        </div>

      </div>

      {/* 结算弹窗 (胜利/失败) */}
      {(gameState === 'won' || gameState === 'lost') && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-3xl p-8 max-w-sm w-full text-center shadow-2xl animate-bounce-in">
            <div className="text-6xl mb-4">
              {gameState === 'won' ? '🎉' : '💔'}
            </div>
            <h2 className="text-3xl font-bold mb-2 text-gray-800">
              {gameState === 'won' ? '闯关成功！' : '步数用尽！'}
            </h2>
            <p className="text-gray-500 mb-6">
              最终得分: <span className="font-bold text-indigo-600 text-lg">{score}</span>
            </p>
            
            <div className="flex flex-col gap-3">
              {gameState === 'won' && currentLevel.id < 20 ? (
                <button 
                  onClick={() => startGame(LEVELS[currentLevel.id])} // 下一关
                  className="w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  下一关
                </button>
              ) : gameState === 'won' && currentLevel.id === 20 ? (
                <div className="w-full py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-xl shadow-lg">
                  🏆 您已通关全部20关！
                </div>
              ) : (
                <button 
                  onClick={() => startGame(currentLevel)}
                  className="w-full py-3 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded-xl shadow-lg hover:opacity-90 active:scale-95 transition-all"
                >
                  重新挑战
                </button>
              )}
              
              <button 
                onClick={() => setGameState('menu')}
                className="w-full py-3 bg-gray-100 text-gray-600 font-bold rounded-xl hover:bg-gray-200 active:scale-95 transition-all"
              >
                返回菜单
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
```

把上面的代码。新建文件：`HappyMatch.html` 把代码粘贴进去。

随后进行网站部署，即可访问游戏：[https://bornforthis.cn/static_web/HappyMatch.html](https://bornforthis.cn/static_web/HappyMatch.html)







### 5.4 设置网站基本信息

文件路径：`src/.vuepress/config.ts`

![](./02-Blog-build.assets/image-20260201102929313.png)

::: code-tabs

@tab 待修改如下

```typescript {8-10}
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
```

@tab 我的修改示例

```typescript
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "AI悦创·Python一对一辅导",
  description: "跟 AI悦创一起学习 Python 编程，实现你的编程梦想！官方网站：https://bornforthis.cn",

  theme,

  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
```

:::

![修改之前](./02-Blog-build.assets/image-20260201110219125.png)

![修改之后](./02-Blog-build.assets/image-20260201110317836.png)



### 5.5 更改网页中心的 logo 和博客名称、Slogan

- **Path**：`src/README.md`

::: code-tabs

@tab 原始

```markdown
---
home: true
layout: Blog
icon: house
title: 博客主页
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroText: 你博客的名称
heroFullScreen: true
tagline: 你可以在这里放置你的口号与标语
projects:
  - icon: folder-open
    name: 项目名称
    desc: 项目详细描述
    link: https://你的项目链接

  - icon: link
    name: 链接名称
    desc: 链接详细描述
    link: https://链接地址

  - icon: book
    name: 书籍名称
    desc: 书籍详细描述
    link: https://你的书籍链接

  - icon: newspaper
    name: 文章名称
    desc: 文章详细描述
    link: https://你的文章链接

  - icon: user-group
    name: 伙伴名称
    desc: 伙伴详细介绍
    link: https://你的伙伴链接

  - icon: https://theme-hope-assets.vuejs.press/logo.svg
    name: 自定义项目
    desc: 自定义详细介绍
    link: https://你的自定义链接

footer: 自定义你的页脚文字
---

这是一个博客主页的案例。

要使用此布局，你应该在页面前端设置 `layout: Blog` 和 `home: true`。

相关配置文档请见 [博客主页](https://theme-hope.vuejs.press/zh/guide/blog/home.html)。
```

@tab 更改部分

```markdown
title: 博客主页
heroImage: https://theme-hope-assets.vuejs.press/logo.svg
heroText: 你博客的名称
tagline: 你可以在这里放置你的口号与标语
```

@tab 我改的

```markdown
title: 黄家宝
heroImage: /aiyc.svg
heroText: JiaBao.Huang
tagline: “I love the people I photograph”
```

:::

### 5.6 更改网站主页背景图片

- **Path**：`src/README.md`

::: code-tabs

@tab 直接新增加一个元信息，改成你自己图片路径

```markdown
bgImage: /img_home/079A23792.jpg
```

:::

### 5.7 删除主页多余标签&底部内容

- **Path**：`src/README.md`

![](./02-Blog-build.assets/image-20260410193428908.png)

![这些可以自己设置，也可以删除](./02-Blog-build.assets/image-20260410193527423.png)

![可以删除也可以选择修改](./02-Blog-build.assets/image-20260412190717695.png)

### 5.8 设置主页页脚

- **Path**：`src/README.md`

![](./02-Blog-build.assets/image-20260410193712090.png)

### 5.9 设置网站图标

#### 5.9.1 注册阿里巴巴矢量图&添加图标

- 链接：[https://www.iconfont.cn/](https://www.iconfont.cn/)

::: tabs

@tab 1. 创建项目

![](./02-Blog-build.assets/image-20260412201637655.png)

![](./02-Blog-build.assets/image-20260412201721277.png)

![](./02-Blog-build.assets/image-20260412201934821.png)

@tab 2. 搜集自己想要的图标

注意：本主题仅支持单色图标，有些彩色图标支持，但也只是显示单色。主要还是需要自行测试，图标是否可用。

![](./02-Blog-build.assets/image-20260412202031547.png)

![](./02-Blog-build.assets/image-20260412202135545.png)

![](./02-Blog-build.assets/image-20260412202215557.png)

![](./02-Blog-build.assets/image-20260412202257791.png)

@tab 3. 点击生成

![](./02-Blog-build.assets/image-20260412202424785.png)

![](./02-Blog-build.assets/image-20260412202446277.png)

![](./02-Blog-build.assets/image-20260412202504036.png)

![](./02-Blog-build.assets/image-20260412202530668.png)

:::

#### 5.9.2 添加链接

![](./02-Blog-build.assets/image-20260412202734884.png)

改成：

![](./02-Blog-build.assets/image-20260412202927604.png)

```typescript
con: {
    prefix: "iconfont icon-",
    assets: "//at.alicdn.com/t/c/font_5158903_y5tcb5gh6ko.css",
},
```

#### 5.9.3 使用图标

::: tabs

@tab 选择并复制图标

![](./02-Blog-build.assets/image-20260412203359596.png)

@tab 放到使用的地方

- 例如：菜单栏

    ![记得把前缀 icon- 删除](./02-Blog-build.assets/image-20260412203954815.png)

    ```typescript {3}
    {
        text: "Community", 
        icon: "openclaw", 
        children: [
            { text: "Python Online", icon: "python", link: "https://py.bornforthis.cn/" },
            { text: "Data Structure", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
            { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/"},
        ]
    }
    ```

    ![查看效果](./02-Blog-build.assets/image-20260412204200965.png)

- 例如：侧边栏、文章，只要有 `icon:` 的地方；

:::

#### 5.9.4 增加更多图标

- 添加自己需要的图标，流程和上面一致；

- 更新在线链接：

    ![](./02-Blog-build.assets/image-20260412204433117.png)

- 更新到网站配置当中；

### 5.10 设置菜单栏

- **Path**：`src/.vuepress/navbar.ts`

**把默认的内置菜单删除，仅保留如下结构：**

```typescript
import { navbar } from "vuepress-theme-hope";

export default navbar([
]);
```

便于后续自行修改定义，不会被内置默认的影响。

::: code-tabs

@tab 无嵌套菜单【冒号后面必须添加空格，否则会报错】

```typescript
{
    text: "Memoirs",  // 菜单名称
    icon: "blog",     // 菜单图标
    link: "/Memoirs.html",  // 菜单指向的链接
},
```

@tab 基础多菜单

```typescript
{
    text: "Community", 
    icon: "shequ-jihuo",   // 用你自己的 icon
    children: [
        { text: "Python Online", icon: "python", link: "https://py.bornforthis.cn/" },
        { text: "Data Structure", icon: "discover", link: "https://huangjiabaoaiyc.gitee.io/visualgo/"},
        { text: "Json Online", icon: "json", link: "https://bornforthis.cn/json/"},
        "https://bornforthis.cn/m3u8",  // 直接写链接，则直接显示链接。[不推荐]
        "/Memoirs.md", // 显示 markdown 文件中的 title
        
    ]
}
```

@tab 分组菜单

```typescript
{
    text: "Gemini 创意项目", 
    icon: "shequ-jihuo",   // 用你自己的 icon
    children: [
      {
        text: "分组 1：AR 艺术项目",  // 名称自己设置
        children: [
          { text: "Decimal online conversion", icon: "tool", link: "https://bornforthis.cn/tool/"},
          { text: "HTML Online", icon: "web", link: "https://bornforthis.cn/html_online/"},
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/#/"},
        ]
      },
      {
        text: "分组 2：棋牌类项目",  // 名称自己设置
        children: [
          { text: "Decimal online conversion", icon: "tool", link: "https://bornforthis.cn/tool/"},
          { text: "HTML Online", icon: "web", link: "https://bornforthis.cn/html_online/"},
          { text: "Python", icon: "python", link: "https://bornforthis.cn/python/#/"},
        ]
      },
    ]
}
```

:::

### 5.11 设置侧边栏

> 注意：侧边栏是在进入一篇文章或者目录时，才会显示出来！（在主页时，是不会显示出来）

前期先删除，使用如下自动生成的方法。

- **Path**：`src/.vuepress/sidebar.ts`

::: code-tabs

@tab 原始

```typescript
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    "intro",
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://ecosystem.vuejs.press/zh/plugins/markdown/revealjs/demo.html",
    },
  ],
});
```

@tab 先删除多余内容&并设置自动生成侧边栏

```typescript
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  "/": "structure"  // 代表：所有文章都自动生成一个、共用侧边栏。因为所有的文章都是从 / 开始
    				// https://bornforthis.cn/(⬅️这个斜杆)
});
```

:::

![](./02-Blog-build.assets/image-20260412193643360.png)

![侧边栏示例·长的样子](./02-Blog-build.assets/image-20260412191217674.png)

后期文章多了，进行分类。

::: code-tabs

@tab 现在的 sidebar.ts 内容

```typescript
import { sidebar } from "vuepress-theme-hope";

export default sidebar({
  // 写在这里面，注意：每个制定的侧边栏最后都需要在尾部添加 ,
});
```

@tab 非嵌套侧边栏（直接显示文章）

```typescript
// "/1v1/88-Simple-swimming-leech/" ——> 链接「路径」·其实就是你想要一组（一类）文章共同使用的侧边栏，并不是自动生成，而是自定义。（就是 Python 文章就使用 Python 的侧边栏，OpenClaw 就使用 OpenClaw 的侧边栏）｜类似自己想要分门别类
// 注意⚠️：这个链接，不能写成具体的 HTML 链接；
// 例如：https://bornforthis.cn/1v1/88-Simple-swimming-leech/lecture01.html❌
// 只能写：https://bornforthis.cn/1v1/88-Simple-swimming-leech/；✅
// 顾名思义：88-Simple-swimming-leech 是文件夹名称、lecture01.html 是 markdown 文件名称：lecture01.md
// 补充 1：这个链接是去掉自己的域名，部署之后网站会自动加上域名。例子：/1v1/88-Simple-swimming-leech/ 等价于 https://bornforthis.cn/1v1/88-Simple-swimming-leech/
// 补充 2：最后的 / 记得添加上；
// 补充 3：/1v1/ 在 src 文件夹下，但 src 文件夹不需要写出来；
"/1v1/88-Simple-swimming-leech/": [
    // 该路径对应的侧边栏内容，自己尝试一下就知道，就算现在文章不存在也不会报错。（不过主题内置了一些测试文章，可以拿来练手）
    { text: "AI悦创官方网站", icon: "python", link: "https://bornforthis.cn" },
    { text: "lecture02", icon: "python", link: "lecture02" }, // 文件夹 88-Simple-swimming-leech 下的 lecture02（lecture02.md）
    { text: "Exam", icon: "python", link: "good/lecture03" }, // 文件夹 88-Simple-swimming-leech 下的 good 文件夹下的 lecture03（lecture03.md）
    "lecture04", // 可以直接写成文件名称，上面的写法是为了：定义文章在侧边栏显示的名称和图标
],
```

@tab 嵌套侧边栏（分组标题）

```typescript
"/column/Python-Programming-Course/": [
    "Preface", // 可以直接写成 文件名称，对应的文章路径：/column/Python-Programming-Course/Preface.md
    {
        text: "卷一：编程思维",
        prefix: "P01-Programming-thinking",
        icon: "book",
        collapsible: true,  // 分组是否自动折叠起来
        // children: "structure",
        children: [
            {
                text: "第一章｜何为编程思维？",
                icon: "blog",
                collapsible: true,
                children: [
                    "01-Why-learn-to-program",
                    "02-Programming-thinking-makes-kids-smarter",
                ],
            },
        ]
    },
    // 不使用 prefix
    {
        text: "卷一：编程思维",
        icon: "book",
        collapsible: true,
        children: [
            {
                text: "第一章｜何为编程思维？",
                icon: "blog",  // 图标
                collapsible: true,
                children: [
                    "P01-Programming-thinking/01-Why-learn-to-program",
                    "P01-Programming-thinking/02-Programming-thinking-makes-kids-smarter",
                ],
            },
        ]
    },
],
```

@tab 自动生成

```typescript
"/column/Python-Programming-Course/": [
    "Preface", // 可以直接写成 文件名称，对应的文章路径：/column/Python-Programming-Course/Preface.md
    {
        text: "卷一：编程思维",
        icon: "book",
        collapsible: true,  // 分组是否自动折叠起来
        children: "structure",  // 文章标题需要会影响自动生成后的文章顺序
    },
],
```

:::

> 有人设置后，看不见效果。那此时需要好好思考一下：自定义侧边栏的目标是什么？为什么存在？——>是想要在访问特定目标路（链接）时显示该自定义侧边栏。所以想要看见设置的侧边栏效果，需要访问设定的链接，而不是主页！

### 5.12 设置 github 图标链接

![](./02-Blog-build.assets/image-20260412200550887.png)

- **Path**：`src/.vuepress/theme.ts`

::: code-tabs

@tab 原始

```typescript
repo: "vuepress-theme-hope/vuepress-theme-hope",
```

@tab 改成自己的

```typescript
repo: "AndersonHJB/bornforthis.cn",
```

:::

### 5.13 设置作者信息

- **Path**：`src/.vuepress/theme.ts`

::: code-tabs

@tab 原始

```typescript
author: {
    name: "Mr.Hope",
    url: "https://mister-hope.com",
},
```

@tab 修改后

```typescript
author: {
    name: "AndersonHJB",
    url: "https://bornforthis.cn/",
    email: "aiyuechuang@gmail.com"
},
```

:::

### 5.14 去除多余的社交信息或修改

- **Path**：`src/.vuepress/theme.ts`
- 改成自己有的即可，没有的可以直接删除或者注释

```typescript
// 博客相关
  blog: {
    description: "一个前端开发者",
    intro: "/intro.html",
    medias: {
      Baidu: "https://example.com",
      BiliBili: "https://example.com",
      Bitbucket: "https://example.com",
      Dingding: "https://example.com",
      Discord: "https://example.com",
      Dribbble: "https://example.com",
      Email: "mailto:info@example.com",
      Evernote: "https://example.com",
      Facebook: "https://example.com",
      Flipboard: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gitlab: "https://example.com",
      Gmail: "mailto:info@example.com",
      Instagram: "https://example.com",
      Lark: "https://example.com",
      Lines: "https://example.com",
      Linkedin: "https://example.com",
      Pinterest: "https://example.com",
      Pocket: "https://example.com",
      QQ: "https://example.com",
      Qzone: "https://example.com",
      Reddit: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
      Twitter: "https://example.com",
      Wechat: "https://example.com",
      Weibo: "https://example.com",
      Whatsapp: "https://example.com",
      Youtube: "https://example.com",
      Zhihu: "https://example.com",
      VuePressThemeHope: {
        icon: "https://theme-hope-assets.vuejs.press/logo.svg",
        link: "https://theme-hope.vuejs.press",
      },
    },
  },
```

### 5.15 设置网站 favicon 与大纲级别

- **Path**：`src/.vuepress/config.ts`

```typescript {9-10,14-16,18-24,29-33}
import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",  // 改成你自己的
  description: "vuepress-theme-hope 的博客演示",  // 改成你自己的

  theme,
  // 设置自己的图标
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],  // href 改成自己的图标路径
  ],
  // 编写网站简介、说明
  locales: {
    "/": {
      lang: "zh-CN",
      title: "AI悦创-Python一对一辅导",
      description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
    },
  },

  // 和 PWA 一起启用
  // shouldPrefetch: false,
  // 主题渲染的大纲标题级别
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
});
```



### 5.16 配置搜索功能

- 安装插件：

    ```bash
    pnpm add -D @vuepress/plugin-slimsearch@next
    ```

- 配置路径：``







### 5.17 配置评论

自行按照教程配置即可：[https://waline.js.org/guide/get-started/](https://waline.js.org/guide/get-started/)

### 5.18 文章加密

- **Path**：`src/.vuepress/theme.ts`
- **加密方式**：
    - 路径是明确博客，则加密指定文章；
    - 路径是文件夹，则加密整个文件夹；

```typescript
  // 加密配置
  encrypt: {
    config: {
      "/demo/encrypt.html": { hint: "密码提示", password: "这是写你的密码", },
      "/column/Python-Programming-Course/P15-OpenClaw/": ["这是写你的密码"],  // 文件夹加密
      "/letter/2023/05/demo.html": "这是写你的密码",  // 特定文章加密
    },
  },
```



## 6. 文章编写





## FAQ

### Q1：修改网站未生效

一般我们所做的任何修改，Vuepress 主题都能自动热重载（重新加载运行，实在理解不了，可以理解成：自动重启。）但是在某些情况下：新建文章、修改侧边栏图标等情况下，最新的效果无法在网页上体现出来。此时，解决的方法就是：手动关闭和启动一下。

如果手动关闭与启动之后，问题依然存在。表明所做的修改存在问题，需要撤销修改，试一试别的。





































要取消时，弹出的优惠

![](./02-Blog-build.assets/image-20260202185253455.png)







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