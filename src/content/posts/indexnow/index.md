---
title: 为Astro添加IndexNow
published: 2026-02-15
description: '为Astro添加IndexNow，提高搜索引擎收录速度'
image: ''
tags: ['IndexNow']
category: '教程'
draft: false 
lang: ''
---
## 安装插件
在项目根目录下打开终端，输入以下命令安装插件：
```bash
pnpm install astro-indexnow
```

## 获取Indexnow API
打开[必应Indexnow页面](https://www.bing.com/indexnow)，滑到下面，点击“Get Started”，获取API密钥。
复制你的API密钥，在项目的public目录下创建一个与你的api密钥同名的txt文件，内容也是你的API密钥。  
例如：你的API密钥为
```
114514
```
那么你的文件路径为：
```
public/114514.txt
```
文件内容为：
```
114514
```

## 添加
在项目的`astro.config.mjs`文件中添加以下代码：
``` javascript
// astro.config.mjs
import { defineConfig } from "astro/config";
import indexnow from "astro-indexnow";

export default defineConfig({
  site: "https://example.com",
  integrations: [
    indexnow({
      key: process.env.INDEXNOW_KEY,
    }),
  ],
});
```
并在项目的`.env`文件中添加以下代码：
```
INDEXNOW_KEY=你的API密钥
INDEXNOW_ENDPOINT=https://www.bing.com/indexnow
```
:::tip
如果你使用的是Git部署，记得提交!.astro-indexnow-cache.json文件。
:::

## 配置环境变量
打开你部署的云平台，找到项目的环境变量配置页面，添加以下环境变量：
```
INDEXNOW_KEY=你的API密钥
INDEXNOW_ENDPOINT=https://www.bing.com/indexnow
```

## 测试
如果一切正常，那么你会在项目的构建日志看到这些:
```
[astro-indexnow] [astro-indexnow] submitting 17 changed URLs in 1 batch(es)
[astro-indexnow] [astro-indexnow] IndexNow submission complete
```
## 完成
完成这些步骤之后，你的博客就会自动提交索引到必应了。