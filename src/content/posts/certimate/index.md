---
title: Certimate——开源的证书自动化工具
published: 2026-02-22
description: 'Certimate是一个开源的证书自动化工具，它可以帮助你自动为你的域名申请和管理证书。'
image: './cover (1).png'
tags: ['证书','自动化']
category: '工具'
draft: false 
lang: ''
---
## 介绍
Certimate是一款开源的证书自动化工具，可自动化为你的域名申请和管理证书，并将证书部署到任意支持的平台。  
::github{repo="certimate-go/certimate"}  

## 安装
以Windows为例，从[Github Release](https://github.com/certimate-go/certimate/releases)下载最新版本的Certimate可执行文件，将其解压到任意目录。  
在解压后的目录内打开终端，输入以下命令启动Certimate：
```cmd
certimate serve
```
:::tip
若使用Powershell执行时报错，可在命令前加上`./`后再次执行。
:::
默认账号为`admin@certimate.fun`，默认密码为`1234567890`。  

## 配置
用浏览器访问[http://localhost:8080](http://localhost:8080)，即可登录Certimate。  
登录后，找到“授权凭据”，按照自己的需要添加提供商，证书颁发渠道及通知渠道。  
完成后，点击“工作流”，创建一个空白工作流。![alt text](image.png)
在“开始”中配置定时触发时间并保存。  
点击橙色点，选择“申请证书”。![alt text](image-1.png)在里面配置好证书标识、域名、证书颁发机构、联系邮箱等。![alt text](image-2.png)![alt text](image-3.png)
点击“保存更改”，添加下一个节点，选择“部署”![alt text](image-4.png) 
在里面选择你的服务提供商，并按照提示配置好相关参数。![alt text](image-5.png)  
以Edgeone为例，在“待部署证书”中选择上一步的申请，在“站点ID”中填写你的Edgeone站点ID（如下图）![alt text](image-6.png)  
完整的配置如下：![alt text](image-7.png)
配置完成后，点击“发布更改”，即可完成配置，点击“运行”，即可开始自动申请和部署证书。
这样，你就有了一个简易的证书自动化工作流，它可以帮助你自动为你的域名申请和管理证书。
