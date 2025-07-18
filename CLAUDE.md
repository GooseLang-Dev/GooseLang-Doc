# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## 项目概述

这是一个基于 Docusaurus 3.8.1 的多语言文档网站项目。项目支持中文和英文两种语言，默认语言为英文。

## 开发命令

### 安装依赖
```bash
npm install
# 或
yarn
```

### 开发和构建
```bash
# 启动开发服务器
npm start
# 或
yarn start

# 构建生产版本
npm run build
# 或
yarn build

# 本地预览构建结果
npm run serve
# 或
yarn serve

# 清理构建缓存
npm run clear
# 或
yarn clear
```

### 国际化相关
```bash
# 生成翻译文件
npm run write-translations
# 或
yarn write-translations

# 为特定语言生成翻译文件
npm run write-translations -- --locale en
# 或
yarn write-translations -- --locale en

# 生成文档标题ID
npm run write-heading-ids
# 或
yarn write-heading-ids
```

### 部署命令
```bash
# 使用SSH部署
USE_SSH=true npm run deploy
# 或
USE_SSH=true yarn deploy

# 使用GitHub用户名部署
GIT_USER=<Your GitHub username> npm run deploy
# 或
GIT_USER=<Your GitHub username> yarn deploy
```

## 项目架构

### 核心配置
- **docusaurus.config.js**: 主要配置文件，包含站点设置、国际化配置、主题配置等
- **sidebars.js**: 侧边栏配置文件
- **package.json**: 项目依赖和脚本配置

### 目录结构
- **docs/**: 文档内容目录
- **blog/**: 博客文章目录
- **src/**: 源代码目录
  - **components/**: React组件
  - **css/**: 样式文件
  - **pages/**: 页面文件
- **static/**: 静态资源目录
- **i18n/**: 国际化文件目录
  - **en/**: 英文翻译文件
  - **zh/**: 中文翻译文件

### 国际化配置
- 支持语言：英文(en)、中文(zh)
- 默认语言：英文
- 中文标签：简体中文
- 翻译文件位置：`i18n/[locale]/` 目录下

### 主题配置
- 使用 Docusaurus 经典主题
- 支持亮色和暗色主题
- 自定义CSS位置：`src/css/custom.css`
- 导航栏标题：我的文档
- 包含语言切换下拉菜单

## 系统要求

- Node.js >= 18.0
- 支持的浏览器配置在 package.json 的 browserslist 中定义