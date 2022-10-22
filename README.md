# Taro-Starter

[![action][ci-image]][ci-url] [![Release Date][rle-image]][rle-url] [![GitHub last commit][last-commit-image]][repository-url] [![tag][tag-image]][rle-url] [![license][license-image]][repository-url]

 <!-- [![Sourcegraph][sg-image]][sg-url]  -->
<!-- [![GitHub repo size][repo-size-image]][repository-url]
 -->
[ci-image]: https://github.com/funnyzak/taro-starter/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/funnyzak/taro-starter/actions
[license-image]: https://img.shields.io/github/license/funnyzak/taro-starter.svg?style=flat-square
[repository-url]: https://github.com/funnyzak/taro-starter
[repo-size-image]: https://img.shields.io/github/repo-size/funnyzak/taro-starter
[commit-activity-image]: https://img.shields.io/github/commit-activity/m/funnyzak/taro-starter?style=flat-square
[last-commit-image]: https://img.shields.io/github/last-commit/funnyzak/taro-starter?style=flat-square&lable=commit
[rle-image]: https://img.shields.io/github/release-date/funnyzak/taro-starter.svg?label=release
[rle-url]: https://github.com/funnyzak/taro-starter/releases/latest
[sg-url]: https://sourcegraph.com/github.com/funnyzak/taro-starter
[sg-image]: https://img.shields.io/badge/view%20on-Sourcegraph-brightgreen.svg?style=flat-square
[tag-image]: https://img.shields.io/github/tag/funnyzak/taro-starter.svg

基于 `Typescript、 React` 构建 `Taro` 应用脚手架。用于快速开始一个 `Taro` 项目开发。

[在线预览](https://funnyzak.github.io/taro-starter/)。

## Features

- Babel 支持
- Typescript 支持
- React 支持
- Sass 支持
- png|svg|jpg|jpeg|gif 引入支持
- git commit hooks, no 💩

## Environment

`Node` 建议使用 `Node 16` 或更高版本。开发工具建议使用 [VS Code](https://code.visualstudio.com/)。

## Usage

```bash

# clone the project
git clone git@github.com:funnyzak/taro-starter.git -b master ./taro-react-app

# enter the project directory and install dependency
cd ./taro-react-app && yarn

# develop h5
yarn dev:h5

# develop weapp
yarn dev:weapp

# build h5
yarn build:h5

# eslint
yarn eslint:check

# eslint:fix
yarn eslint:fix

# prettier check
yarn prettier:check

# prettier fix
yarn prettier:fix

# eslint and prettier check
yarn lint:check

# eslint and prettier fix
yarn lint:fix

# clean node_modules
yarn clean
```

More scripts, please see [package.json](./package.json)。

## Build

打包默认的输出目录为：**dist/[platform]**

```bash
# 打包H5 输出到: dist/ht
yarn build:h5

# 打包微信小程序, 输出到：dist/weapp
yarn build:weapp
```

## Structure

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
    │   ├── pages              // 页面
    │   ├── styles             // 公共样式
    │   └── utils              // 工具类
    ├── tsconfig.json          // typescript 编译配置
    └── tslint.json            // tslint 配置

## Q&A

### 如何打包或开发指定应用配置？

1. 在 `config/` 目录下，复制 `app_sample.js` 文件，重命名为 `app_youname.js`，并修改配置；
2. 修改配置文件的环境变量配置；
3. 使用 `npx cross-env APP_ENV=app_youname yarn dev:h5` 命令启动开发；
4. 使用 `npx cross-env APP_ENV=app_youname yarn build:h5` 命令进行打包（打包输出目录为 `dist/app/yourname`）。

### 升级Taro

```bash
# 升级 Taro CLI 工具:
yarn add -D @tarojs/cli@latest

# 更新项目中 Taro 相关的依赖:
npx taro update project

# 重新安装依赖:
rm -rf ./node_modules && npm install
```

### TypeScript 建议

- 使用 tslint 作为编辑器内置的 linter
- 使用 eslint 命令行工具配合 `typescript-eslint-parser` 和 `eslint-config-taro`(见 [.eslintrc](./eslintrc)) 作为 `precommit` 或者 `prepush` 的钩子，在提交或 commit 或编译出现问题时检查代码是否符合 Taro 规范
- 不要在 TypeScript 使用 Redux 的 `connect` 装饰器，使用普通的函数写法,详情见: [#9951](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951)
- 当你的项目不那么复杂时，可以不使用 Redux

## Reference

- [Babel](https://babel.docschina.org/docs/en/7.0.0/configuration/)
- [EsLint](https://eslint.org/docs/user-guide/configuring/)
- [Eslintignore](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
- [TSconfig](https://www.typescriptlang.org/tsconfig/)
- [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
- [gitignore](https://git-scm.com/docs/gitignore)
- [webpack](https://webpack.docschina.org/guides/getting-started/)
- [prettier](https://prettier.io/docs/en/index.html)

## Contribution

如果你有任何的想法或者意见，欢迎提 Issue 或者 PR。

<a href="https://github.com/funnyzak/taro-starter/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=funnyzak/taro-starter" />
</a>

## License

MIT License © 2022 [funnyzak](https://github.com/funnyzak)
