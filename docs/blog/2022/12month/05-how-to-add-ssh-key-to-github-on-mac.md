---
title: 如何在 Mac 上为 GitHub 设置 SSH Key（2022）
date: 2022-12-18 01:12:01
author: 小綿尾巴
isOriginal: true
category: 
    - github
tag:
    - github
icon: mac
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

SSH(Secure Shell) 是允许两台电脑之间通过安全连接进行数据交换的网络协议。

在本地电脑生成 SSH Key 私钥，再将 SSH Key 公钥添加到 GitHub，就实现了本地电脑和 GitHub 服务器安全连接，可以把本地仓库推送到 GitHub 远程仓库，或把 GitHub 远程仓库拉取到本地仓库，即两台电脑间的数据交换。

**Noted**：GitHub 在 2022 年 5 月添加了 SSH 安全性，以往添加 SSH Key 的教程在有些细节处可能不适用，这是 2022 年下半年添加 SSH Key 的教程。

## 生成 SSH Key

1. 点开 [ GitHub ](https://github.com/) 账号头像下的 `Settings`

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/github-setting_hu36b769aebcea935decf2430ed54e8ff5_76796_1320x0_resize_box_3-1332185.png)

2. 找到 `Settings` 下的 `SSH and GPG keys`，点击 `generating SSH keys`，点击后会打开一个新的页面。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/ssh-and-ggp-key_hu131f9c3e0a94150b6fbd34b674d84f78_301129_1320x0_resize_box_3-1332204.png)

3. 在新的页面中选择 `Generating a new SSH key and adding it to the ssh-agent`

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/generating-new-ssh-key_hu4ea39273c16500307782e0fe6449b0a9_264654_1320x0_resize_box_3-1332244.png)

4. 注意选择对应操作系统的教程。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/mac-ssh-key-guide_hu7f2165d8c95d233ffb38b2487ee336fa_495178_1320x0_resize_box_3-1332265.png)

5. 往下滑动页面会看到 GitHub 给出的 Mac 下生成 SSH Key 的指南，按照指南的步骤一步一步进行。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/ssh-key-guide_hu8008dcec60dfe751fd22487158baacd3_564367_1320x0_resize_box_3-1332296.png)

6. 打开终端（Terminal），复制粘贴以下文本到终端，把 `your_email@example.com` 替换成你注册 GitHub 时使用的邮箱，然后按下Enter键。

```shell
ssh-keygen -t ed25519 -C "your_email@example.com"
```

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/terminal-generating-ssh-key_hu1a97a115ba6c4f332978c0a6ba760f65_43360_1320x0_resize_box_3-1332327.png)

- 如果你不记得注册 GitHub 时使用的邮箱，可以从 `Settings` 中的 `Emails` 中查看。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/github-email_hu3b70f26d446af39e5d0e1c22f35f61fa_339926_1320x0_resize_box_3-1332353.png)

7. 出现 `Enter file in which to save the key(...)` ，按下 `Enter` 键，一直按 `Enter` 直到出现以下画面。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/generate-ssh-key-keep-enter_hufd4be2aa5ec48c535574dce507a9ae22_118260_1320x0_resize_box_3-1332376.png)

8. 🎉 恭喜你的 SSH Key 已经生成成功，接下来把生成的 SSH Key 添加到 ssh-agent。

## 添加 SSH Key 到 ssh-agent

1. 在终端（Terminal）中输入命令：

```shell
eval "$(ssh-agent -s)"
```

- 命令执行后终端会给出 **Agent pid**

2. 如果你使用的是[ **macOS Siera 10.12.2或以上的版本**](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，你需要修改 `~/.ssh/config` 文件来自动加载密钥到 ssh-agent 和储存 passphrases 到你的钥匙链。

- 首先，检查电脑中是否存在 `~/.ssh/config` 文件

```shell
open ~/.ssh/config
```

- 如果像我一样显示这个 config 文件不存在，则创建这个文件

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/check-ssh-config-file_hu851978db82bd99ff6d92eab78df0769c_23446_1320x0_resize_box_3.png)

```shell
touch ~/.ssh/config	
```

- 用编辑器打开 `~/.ssh/config` 文件

```shell
nano ~/.ssh/config
```

- 在 nano 窗口中复制粘贴以下代码：

```shell
Host *
	AddKeysToAgent yes
	UseKeychain yes
	IdentityFile ~/.ssh/id_ed25519
```

- 粘贴代码后按 `control+X` 退出编辑器

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/config-ssh-config-file_hu616cea8bc0c34d5b66c0e116fc9053e8_92104_1320x0_resize_box_3.png)

- 输入 `y` 保存更改

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/press-y_hufe205a79243e76590950fae8d2c88cdb_31210_1320x0_resize_box_3.png)



- 出现这个画面后再按 `Enter` 键

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/press-enter_hu5b99bdd9bdcc31b96a41140df1a6d346_33867_1320x0_resize_box_3.png)

3. 将 SSH Key 添加到 ssh-agent。如果你使用的是[ **Mac Monterey(12.0)及以上版本**](https://docs.github.com/cn/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent#adding-your-ssh-key-to-the-ssh-agent)，请使用以下命令（~~因为在Mac Monterey(12.0)及以上版本中，`-K` 标志已经被废弃，被 `--apple-use-keychain` 代替~~）。

```shell
ssh-add --apple-use-keychain ~/.ssh/id_ed25519
```

- 如果不是 Mac Monterey(12.0) 及以上版本，使用以下命令：

```shell
ssh-add -K ~/.ssh/id_ed25519
```

- 🎉 出现 `Identity added` 即表示添加成功。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/add-ssh-key-to-ssh-agent_hu61ce29338a356422b81fdf3c1fc34ff7_30427_1320x0_resize_box_3.png)

## 添加 SSH Key 到 GitHub

1. 在终端输入以下命令， `pbcopy` 会复制 SSH Key 内容到剪贴板

```shell
pbcopy < ~/.ssh/id_ed25519.pub
```

2. 再次打开 GitHub `Settings` 下的 `SSH and GPG Key` ，点击 `New SSH key`

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/new-ssh-key_hu1a0d9f00853f690c7179516d4ccdc015_290032_1320x0_resize_box_3.png)

3. 添加本机生成的 SSH Key 到 GitHub：

- 在 **Title** 中给这个 SSH Key 命名
- **Key Type** 选择 `Authentication Key`
- 在 **Key** 中 `Command+V` 粘贴刚刚复制的 SSH Key
- 添加后点击

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/patse-ssh-key_hu353948a22d2b775261070598a993ad44_87805_1320x0_resize_box_3.png)

4. 🎉 添加完成。

## 测试 SSH Key 是否添加成功

1. 选择一个要用 SSH Key clone 的仓库，复制这个仓库的 SSH 链接。

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/ssh-key-repository_hu4350254bf7e39f71438ec987d67bd4fc_224398_1320x0_resize_box_3.png)

2. 在终端输入:

```shell
git clone [ssh-url]
```

![img](./05-how-to-add-ssh-key-to-github-on-mac.assets/add-ssh-repository_hu02fc432d195bb76f6116cfdff780d462_81382_1320x0_resize_box_3.png)

1. 🎉 clone 成功即代表 SSH Key 添加成功。

## Reference

- [How to Set Up an SSH Key to GitHub on Mac](https://www.youtube.com/watch?v=_RsP81Et12s)

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)
