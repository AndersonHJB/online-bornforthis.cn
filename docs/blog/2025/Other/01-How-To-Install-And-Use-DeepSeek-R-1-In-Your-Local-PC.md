---
title: How To Install And Use DeepSeek R-1 In Your Local PC
date: 2025-02-01 14:50:06
author: AI悦创
isOriginal: true
icon: blog
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

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*zx-GHqEweCJGMsbrUPwF5A.jpeg)

everyone seems to be talking about [DeepSeek](https://www.deepseek.com/) R-1, the new open-source AI language model made by a Chinese AI firm, DeepSeek. Some users claim it’s on par with, or even better than, OpenAI’s o1 in terms of reasoning capabilities.

Currently, DeepSeek is free to use, which is great news for users, but it does raise some questions. With the surge in user volume, how are they managing the server costs?

Hardware running costs cannot be cheap, right?

The one logical here would be — data. Data is the lifeblood of AI models. They’re probably collecting user data in some way that benefits their quant trading model or for some other form of monetization.

So, if you’re concerned about data privacy but still still want to use R1 without sharing your data, the best way is to run the model locally.

## What is DeepSeek R-1?

A couple of days back, Deepseek R-1 was unveiled as a fully open-sourced model, meaning anyone can take the underlying codebase, adapt it, and even fine-tune it to their own needs.

From a technical standpoint, Deepseek R-1 (often abbreviated as R1) stems from a large base model called DeepSeek-V3. The lab then refined this model through a combination of supervised fine-tuning (SFT) on high-quality human-labeled data and reinforcement learning (RL).

The result is a chatbot that can handle intricate prompts, reveal the reasoning steps behind complex questions (sometimes more transparently than other models), and even render code in the chat interface for quick testing.

It’s honestly very impressive, especially for a model that’s open-source.

## **How To Run It Locally**

To run DeepSeek R-1 locally, we’ll be using a tool called [Ollama](https://ollama.com/).

Ollama is a free, open-source tool that allows users to run large language models (LLMs) locally on their computers. It is available for macOS, Linux, and Windows.

Head to the official Ollama website and click on the “Download” button. Install it on your system.

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/image-20250201143733319.png)

To confirm that the installation is successful, open a terminal and run the following command:

```bash
ollama -v
```

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*zTdFvWVP2Rs2GdaIlMCWYw.png)

You should see the version number of the Ollama instead of an error.

Under the Models tab, search for the keyword “deepseek” and you should see the “deepseek-r1” on the first item on the search list.

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/image-20250201143937019.png)

Click on it and down the Models section, you’ll notice that there are multiple model sizes from 5 billion to 671 billion parameters. As a rule of thumb, larger models require more powerful GPUs to run.

- [https://ollama.com/library/deepseek-r1](https://ollama.com/library/deepseek-r1)

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/image-20250201144126577.png)

Smaller models like the 8 billion parameter version can run on GPUs with 8GB of VRAM. Larger models need significantly more resources (refer to the VRAM and GPU requirements section below).

To download and run the 8 billion parameter model, use the following command:

```bash
ollama run deepseek-r1:8b
```

The model will start downloading (around 4.9GB). Ensure you have enough disk space before proceeding.

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*gxvP-CwIT5GToQwYyMdTiw.png)

Once downloaded, the model will run locally on your machine. You can chat with it immediately.

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*tPN9mqSy9gGegy4G1DS04g.png)

Let’s test it with this example prompt:

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*49R_g2EpAUy--zMcnN2gUg.png)

> **Prompt:** What is DeepSeek R-1?
>
> **Response:** DeepSeek-R-1 is an AI assistant developed by the Chinese company DeepSeek. It is designed to provide responses and assistance across a wide range of topics, including but not limited to mathematics, coding, natural language processing, and more. If you have any questions or need help with something, feel free to ask!

Awesome. It’s fast and it still works even if I disconnect my laptop from the Wifi. Note that even if you are connected to the internet, it still cannot access the web.

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*Es2y3T-gjhHhluIHTLN2NQ.png)

> **Prompt:** What’s latest price of AAPL?
>
> **Response:** As an AI assistant, I don’t have real-time data access, so I can’t provide the latest stock price for Apple Inc. (AAPL). For the most accurate and up-to-date information, I recommend checking financial news platforms or your brokerage service.

**Other things Ollama can do:**

## GPU and VRAM Requirements

The VRAM requirements for DeepSeek-R1 depend on factors like model size, parameter count, and quantization techniques. Below is a detailed overview of the VRAM needs for DeepSeek-R1 and its distilled models, along with recommended GPUs:

![](./How-To-Install-And-Use-DeepSeek-R-1-In-Your-Local-PC.assets/1*506HP_2__HB_5jHpLHm-OQ.png)

Key notes on VRAM usage:

## Why Run It Locally?

Sure, the web chatbot and mobile app for DeepSeek are free and incredibly convenient. You don’t need to set anything up, and features like DeepThink and web search are baked right in. But there are a few reasons why running it locally might be a better choice:

**Privacy**

**Offline Access**

**Future-Proofing**

**Flexibility**

## Final Thoughts

At this point, it’s still unclear how DeepSeek handles user data. If you’re not too worried about data privacy, using the web or mobile app might be the way to go since they’re easier to use and offer features like DeepThink and web search. But if you’re someone who cares about where your data ends up, running the model locally is a good alternative to consider.

DeepSeek models are designed to run well even on hardware that isn’t super powerful. While larger models like DeepSeek-R1-Zero need distributed GPU setups, the distilled versions make it possible to run things smoothly on a single GPU with much lower requirements.

If you don’t like using the terminal, you can always add a simple UI with tools like [Gradio](https://github.com/AK391/ai-gradio) or [Chatbox AI](https://chatboxai.app/en). I’ll write a guide on setting that up in the next article. For now, I hope this post helps you get started. Let me know your thoughts or if you’ve run into any issues, feel free to share them in the comments.

欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！

::: details 公众号：AI悦创【二维码】

![](/gzh.jpg)

:::

::: info AI悦创·编程一对一

AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web 全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh

C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh

方法一：[QQ](http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes)

方法二：微信：Jiabcdefh

:::

![](/zsxq.jpg)

[.](https://medium.com/generative-ai/how-to-install-and-use-deepseek-r-1-in-your-local-pc-b77bc20f7566)







