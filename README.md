# Taro-React-Quick-Start

## 说明

基于 Typescript React 构建 Taro 应用脚手架。

Taro 版本为 `3.3.8`。

-   babel 支持
-   typescript 支持
-   react 支持
-   sass 支持
-   png|svg|jpg|jpeg|gif 引入支持
-   git commit hooks, no 💩

## 环境

使用的 Node 的构建版本为 **v14.2.0**，为避免冲突，建议使用此版本。可以使用 **_nvm_** 管理 Node 版本。

## 使用

```bash
nvm install 14.2.0 && nvm use 14.2.0

npm install

# 开发启动
npx taro build --type h5 --watch
or
npm run dev:h5

# 打包
npm run build:h5

```

更多命令查看 **package.json** .

## 说明

### src/config

程序运行配置文件

### src/utils

工具库

### src/interfaces

接口定义

### src/pages

页面

### src/styles

公共样式

### src/components

公共组件

## 参考

-   [Babel Config](https://babel.docschina.org/docs/en/7.0.0/configuration/)
-   [EsLint](https://eslint.org/docs/user-guide/configuring/)
-   [eslintignore-file](https://eslint.org/docs/user-guide/configuring/ignoring-code#the-eslintignore-file)
-   [TSconfig](https://www.typescriptlang.org/tsconfig/)
-   [npmrc](https://docs.npmjs.com/cli/v7/configuring-npm/npmrc)
-   [gitignore](https://git-scm.com/docs/gitignore)
-   [webpack](https://webpack.docschina.org/guides/getting-started/)
-   [prettier](https://prettier.io/docs/en/index.html)

## 建议

对于在 Taro 中使用 TypeScript 有一些建议：

-   使用 tslint 作为编辑器内置的 linter
-   使用 eslint 命令行工具配合 `typescript-eslint-parser` 和 `eslint-config-taro`(见 [.eslintrc](./eslintrc)) 作为 `precommit` 或者 `prepush` 的钩子，在提交或 commit 或编译出现问题时检查代码是否符合 Taro 规范
-   不要在 TypeScript 使用 Redux 的 `connect` 装饰器，使用普通的函数写法,详情见: [#9951](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951)
-   当你的项目不那么复杂时，可以不使用 Redux

## License

MIT License © 2021 [funnyzak](https://github.com/funnyzak)
