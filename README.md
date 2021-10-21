# Taro-React-Typescript-Template

Taro React Typescript脚手架。基于 taro 3.3.8 构建。

- 引入了Taro UI。

## 运行

使用的Node为v15.14.0。

```bash
yarn install
npx taro build --type h5 --watch
```

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


## 建议

对于在 Taro 中使用 TypeScript 有一些建议：

* 使用 tslint 作为编辑器内置的 linter
* 使用 eslint 命令行工具配合 `typescript-eslint-parser` 和 `eslint-config-taro`(见 [.eslintrc](./eslintrc)) 作为 `precommit` 或者 `prepush` 的钩子，在提交或 commit 或编译出现问题时检查代码是否符合 Taro 规范
* 不要在 TypeScript 使用 Redux 的 `connect` 装饰器，使用普通的函数写法,详情见: [#9951](https://github.com/DefinitelyTyped/DefinitelyTyped/issues/9951)
* 当你的项目不那么复杂时，可以不使用 Redux
