经过仔细研究官方文档和配置文件，我发现了问题的根本原因和解决方案：
根本原因：
在 Docusaurus 的国际化配置中，defaultLocale 和 locales 的配置会影响路由的生成规则。当访问非默认语言时，Docusaurus 会在 URL 中添加语言前缀。但是，如果文件结构和配置不匹配，就会导致 404 错误。
具体问题：
当前配置中 defaultLocale 设置为 'zh'，这意味着中文是默认语言
英文作为非默认语言，需要有完整的翻译文件结构
但是目前的文件结构可能不完整或不正确

问题一：locales: ['en', 'zh'],默认的语言要在前面

问题二,'zh': {
label: '简体中文',
direction: 'ltr',
htmlLang: 'zh-CN',
calendar: 'gregory',
path: 'zh',
},
👇
zh: {
label: '简体中文',
direction: 'ltr',
htmlLang: 'zh-CN',
calendar: 'gregory',
path: 'zh',
},

问题三：确保英文翻译文件结构完整，执行 npm run write-translations -- --locale en

## 最后重新构建并启动项目

npm run build && npm run serve

现在，让我解释一下这个解决方案：
配置修改：
确保 defaultLocale 和 locales 配置正确
为每个语言添加了正确的 localeConfigs
确保 path 配置正确
文件结构：
生成了所有必要的翻译文件
复制了所有内容到对应的语言目录
保持了正确的目录结构
工作原理：
默认语言（中文）的 URL 不会有语言前缀
英文页面会带有 /en/ 前缀
所有内容都有对应的翻译文件
验证方法：
访问中文页面：http://localhost:3000/
访问英文页面：http://localhost:3000/en/
使用语言切换器测试切换功能
