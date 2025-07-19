---
sidebar_position: 1
id: installation
title: 开发部署
---

# 🚀 开发部署安装指南

欢迎使用 GooseLang-Dev 安装指南！这份全面的指南将逐步指导您设置开发环境。

## 📋 前置条件

在安装 GooseLang-Dev 之前，请确保您的系统已安装以下前置条件：

- **操作系统**: Linux（推荐 Ubuntu/Debian）、macOS 或带 WSL2 的 Windows
- **包管理器**: `apt`（Ubuntu/Debian）或您系统的等效工具
- **网络访问**: 稳定的互联网连接，用于下载依赖项
- **磁盘空间**: 至少 2GB 的可用空间用于完整安装

## 🔄 系统更新

首先，让我们确保您的系统安装了最新的软件包和安全补丁：

```bash
# 更新软件包列表
sudo apt-get update

# 将现有软件包升级到最新版本
sudo apt-get upgrade -y
```

> **💡 提示**: 定期运行这些命令有助于防止兼容性问题和安全漏洞。

## 📦 安装 Node.js 和 npm

Node.js 和 npm 是运行 GooseLang-Dev 应用程序所必需的。我们将使用包管理器安装它们：

```bash
# 一起安装 Node.js 和 npm
sudo apt-get install nodejs npm -y

# 验证安装
node --version
npm --version
```

> **🔍 验证**: 您应该看到 Node.js 和 npm 的版本号。如果看到"command not found"，安装可能失败。

## 🗄️ 安装 MongoDB

MongoDB 作为 GooseLang-Dev 的数据库后端。请参考官方 MongoDB 安装指南：

**📖 官方指南**: https://www.mongodb.com/docs/manual/administration/install-community/

### 快速 MongoDB 安装（Ubuntu/Debian）：

```bash
# 导入 MongoDB 公共 GPG 密钥
wget -qO - https://www.mongodb.org/static/pgp/server-7.0.asc | sudo apt-key add -

# 添加 MongoDB 仓库
echo "deb [ arch=amd64,arm64 ] https://repo.mongodb.org/apt/ubuntu jammy/mongodb-org/7.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-7.0.list

# 更新软件包数据库
sudo apt-get update

# 安装 MongoDB
sudo apt-get install -y mongodb-org

# 启动 MongoDB 服务
sudo systemctl start mongod

# 启用 MongoDB 开机自启
sudo systemctl enable mongod

# 验证 MongoDB 正在运行
sudo systemctl status mongod
```

> **⚠️ 注意**: 如果您的 Ubuntu 版本不同，请将 `jammy` 替换为相应版本（例如 Ubuntu 20.04 使用 `focal`）。

## 🛠️ 项目设置

现在让我们设置 GooseLang-Dev 项目本身：

### 步骤 1：导航到项目目录

```bash
# 切换到 GooseLang-Dev 目录
cd /GooseLang-Dev

# 验证您在正确的目录中
pwd
ls -la
```

### 步骤 2：安装依赖项

```bash
# 使用 yarn 安装所有项目依赖项
yarn install

# 或者如果您喜欢使用 npm
npm install
```

> **⏱️ 时间**: 此步骤可能需要几分钟，具体取决于您的网络速度和系统性能。

### 步骤 3：安装默认 UI 插件（可选）

此插件为前端开发提供默认用户界面：

```bash
# 安装默认 UI 插件
yarn gooselang addon add @gooselang/ui-default

# 验证安装
yarn gooselang addon list
```

> **🎨 前端开发**: 如果您计划处理用户界面或需要完整的开发环境，请安装此插件。

## 🚀 运行应用程序

### 启动后端服务器

后端提供 API 和核心功能：

```bash
# 以调试模式启动后端，支持文件监视
yarn debug --port=2333 --watch

# 替代方案：以生产模式启动
yarn start --port=2333
```

> **🔍 调试模式**: `--watch` 标志在文件更改时启用自动重启，非常适合开发。

### 启动前端开发服务器

> **📋 先决条件**: 确保已安装默认 UI 插件（见上面的步骤 3）。

```bash
# 启动前端开发服务器
yarn build:ui:dev

# 或者用于生产构建
yarn build:ui
```

> **🌐 访问**: 启动后，您通常可以在 `http://localhost:3000`（前端）和 `http://localhost:2333`（后端 API）访问应用程序。

## ⚙️ 安装后步骤

### 设置超级管理员用户

通过应用程序注册用户后，您可以将他们提升为超级管理员状态：

```bash
# 将 ID 为 2 的用户设为超级管理员
yarn gooselang cli user setSuperAdmin 2

# 验证更改
yarn gooselang cli user list
```

> **🔑 超级管理员**: 超级管理员拥有所有功能的完全访问权限，可以管理其他用户。

## 🔧 故障排除

### 常见问题和解决方案

如果首次运行后端时遇到错误，请尝试以下解决方案：

#### 问题 1：行尾问题（Windows/WSL）

```bash
# 安装 dos2unix 工具
sudo apt-get install dos2unix

# 转换 gooselang 脚本中的行尾
dos2unix /GooseLang-Dev/packages/gooselang/bin/gooselang.js

# 再次尝试运行后端
yarn debug --port=2333 --watch
```

#### 问题 2：权限被拒绝

```bash
# 使脚本可执行
chmod +x /GooseLang-Dev/packages/gooselang/bin/gooselang.js

# 再次尝试运行
yarn debug --port=2333 --watch
```

#### 问题 3：端口已被使用

```bash
# 检查什么在使用该端口
sudo lsof -i :2333

# 如果需要，终止进程
sudo kill -9 <PID>

# 或使用不同的端口
yarn debug --port=2334 --watch
```

#### 问题 4：MongoDB 连接问题

```bash
# 检查 MongoDB 是否正在运行
sudo systemctl status mongod

# 如果未运行，启动 MongoDB
sudo systemctl start mongod

# 检查 MongoDB 日志
sudo journalctl -u mongod -f
```

> **📞 支持**: 如果您继续遇到问题，请查看项目的 GitHub issues 页面或文档以获取其他故障排除步骤。

## ✅ 验证清单

安装后，验证一切是否正常工作：

- [ ] 系统软件包已更新
- [ ] Node.js 和 npm 已安装并正常工作
- [ ] MongoDB 正在运行且可访问
- [ ] 项目依赖项已安装
- [ ] 后端服务器启动无错误
- [ ] 前端开发服务器启动无错误
- [ ] 您可以在浏览器中访问应用程序
- [ ] 超级管理员用户已配置（如需要）

---

**🎉 恭喜！** 您已成功安装和配置 GooseLang-Dev。您现在可以开始开发了！

更多信息，请查看[用户指南](/guide/intro)或[API 文档](/docs/api)。
