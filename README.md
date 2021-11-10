# Taro-React-Quick-Start [![Release Version](https://img.shields.io/github/release/funnyzak/taro-react-quick-start.svg)](https://github.com/funnyzak/taro-react-quick-start/releases/latest) [![Latest Release Download](https://img.shields.io/github/downloads/funnyzak/taro-react-quick-start/latest/total.svg)](https://github.com/funnyzak/taro-react-quick-start/releases/latest) [![Total Download](https://img.shields.io/github/downloads/funnyzak/taro-react-quick-start/total.svg)](https://github.com/funnyzak/taro-react-quick-start/releases)

基于 Typescript、 React 构建 Taro 应用的脚手架。

Taro 版本为 `3.3.12`。

- babel 支持
- typescript 支持
- react 支持
- sass 支持
- png|svg|jpg|jpeg|gif 引入支持
- git commit hooks, no 💩

### 示例

- Github Page：[点这里打开](https://funnyzak.github.io/taro-react-quick-start/h5/)

- 最新 Releases：[点这里下载](https://github.com/funnyzak/taro-react-quick-start/releases)

## 环境

使用的 Node 的构建版本为 **v14.2.0**，为避免冲突，建议使用此版本。建议可以使用 **_nvm_** 管理 Node 版本。

## 启动

```bash
# 如有必要，安装node版本并切换node版本
nvm install 14.2.0 && nvm use 14.2.0

# 下载最新
git clone git@github.com:funnyzak/taro-react-quick-start.git -b master ./taro-react-app

# 安装依赖
cd ./taro-react-app && npm install

# 开发启动
npx taro build --type h5 --watch
# or
npm run dev:h5
```

然后，即可启动 H5 开发服务。

## 打包

打包默认的输出目录为：**dist/[platform]**

```bash
# 打包H5 输出到: dist/ht
npm run build:h5

# 打包微信小程序, 输出到：dist/weapp
npm run build:weapp
```

更多脚本命令查看 **package.json** .

## 目录

    ├── babel.config.js        // babel 配置
    ├── config                 // 开发和构建打包webpack配置
    │   ├── dev.js             // 开发配置
    │   ├── index.js           // 默认配置
    │   └── prod.js            // 生产构建配置
    ├── global.d.ts            // typescript 全局声明文件
    ├── package.json           // 包信息
    ├── project.config.json    // 公共程序配置
    ├── public                 // 静态资源文件夹
    ├── src                    // 源码
    │   ├── api                // api接口
    │   ├── app.config.ts      // 根程序配置
    │   ├── app.scss           // 入口全局样式
    │   ├── app.ts             // 入口main文件
    │   ├── components         // 公共组件
    │   ├── config             // 项目全局配置包含变脸配置
    │   ├── types              // 定义声明
    │   ├── images             // 图片
    │   ├── index.html         // 打包html模板
    │   ├── interfaces         // 接口定义
    │   ├── pages              // 页面
    │   ├── styles             // 公共样式
    │   └── utils              // 工具类
    ├── tsconfig.json          // typescript 编译配置
    └── tslint.json            // tslint 配置

## 版本升级

```bash
# 升级 Taro CLI 工具:
npm i @tarojs/cli@latest

# 更新项目中 Taro 相关的依赖:
npx taro update project

# 重新安装依赖:
rm -rf ./node_modules && npm install
```

## 参考

- [Babel Config](https://babel.docschina.org/docs/en/7.0.0/configuration/)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [webpack](https://webpack.docschina.org/guides/getting-started/)
- [prettier](https://prettier.io/docs/en/index.html)

## 建议

对于在 Taro 中使用 TypeScript 有一些建议：

- 使用 tslint 作为编辑器内置的 linter
- 使用 eslint 命令行工具配合 `typescript-eslint-parser` 和 `eslint-config-taro`(见 [.eslintrc](./eslintrc)) 作为 `precommit` 或者 `prepush` 的钩子，在提交或 commit 或编译出现问题时检查代码是否符合 Taro 规范
- 不要在 TypeScript 使用 Redux 的 `connect` 装饰器，使用普通的函数写法,详情见: [#9951](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951)
- 当你的项目不那么复杂时，可以不使用 Redux

## Author

| [![twitter/funnyzak](https://s.gravatar.com/avatar/c2437e240644b1317a4a356c6d6253ee?s=70)](https://twitter.com/funnyzak 'Follow @funnyzak on Twitter') |
| ------------------------------------------------------------------------------------------------------------------------------------------------------ |

| [funnyzak](https://yycc.me/)

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
