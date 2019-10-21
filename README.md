# react-admin
## 初始化项目
首先使用create-react-app脚手架工具初始化项目结构
~~~
creat-react-app react-admin
~~~
进去项目
~~~
cd react-admin
~~~
启动项目（项目中建议使用yarn）
~~~
yarn start
~~~
暴露配置文件
~~~
yarn eject
~~~

### 项目结构
~~~
├─api                 // 网路请求代码、工具类函数和相关配置
├─application         // 项目的核心功能
├─assets              // 字体配置全局配置静态文件配置
├─baseUI              // 基础UI路子
├─components          // 公共复用组件
├─layouts             // 静态页面布局
├─routes              // 路由配置文件
└─store               // redux相关配置文件
  app.js              // 跟组件
  index.js            // 入口文件
  serviceWorker.js    // PWA离线应用配置
  style.js            // 默认样式配置
~~~
### 默认样式和字体图标
本项目全部采用的styled-components来进行开发。 styled-components是前端组件组件进行拆分，对css进行工程化优势还是很明显的。
所以在进行项目的默认的全局的样式是style.js 而不是.css的文件

## Ant Design of React 的使用
~~~
yarn add antd
~~~

**修改.babelrc**
~~~
"plugins": [
  [
    "import", {
      "libraryName": "antd",
      "style": "css"
    }
  ]
]
~~~

## eslint使用

## redux配置
安装依赖
~~~
yarn add redux react-redux redux-immutable

redux => store/index.js
react-redux => App.js
redux-immutable => store/reducer.js
~~~

### immutable

Immutable Data 就是一旦创建，就不能再被更改的数据。对 Immutable 对象的任何修改或添加删除操作都会返回一个新的 Immutable 对象。Immutable 实现的原理是 Persistent Data Structure（持久化数据结构），也就是使用旧数据创建新数据时，要保证旧数据同时可用且不变。同时为了避免 deepCopy 把所有节点都复制一遍带来的性能损耗，Immutable 使用了 Structural Sharing（结构共享），即如果对象树中一个节点发生变化，只修改这个节点和受它影响的父节点，其它节点则进行共享

[详细文档阅读](https://segmentfault.com/a/1190000010676878) [文档Api](https://www.cnblogs.com/samwu/p/5457031.html)


## 路由配置
### 依赖配置
~~~
yarn add react-router react-router-dom react-router-config --save
~~~

**react-router-dom**

- withRouter
高阶组件中的withRouter, 作用是将一个组件包裹进Route里面, 然后react-router的三个对象history, location, match就会被放进这个组件的props属性中。
所以withRouter的作用就是, 如果我们某个东西不是一个Router, 但是我们要依靠它去跳转一个页面, 比如点击页面的logo, 返回首页, 这时候就可以使用withRouter来做.

### Suspense
在 16.6 版本之前，code-spliting 通常是由第三方库来完成的，比如 react-loadble(核心思路为: 高阶组件 + webpack dynamic import), 在 16.6 版本中提供了 Suspense 和 lazy 这两个钩子, 因此在之后的版本中便可以使用其来实现 Code Spliting。

> 目前阶段, 服务端渲染中的 code-spliting 还是得使用 react-loadable

**react-router-config**

react-router-config源码就是一个高阶函数，利用map函数生成静态路由

~~~
import React from "react";
import Switch from "react-router/Switch";
import Route from "react-router/Route";
const renderRoutes = (routes, extraProps = {}, switchProps = {}) => routes ? (
    <Switch {...switchProps}>
        {routes.map((route, i) => (
        <Route
          key={route.key || i}
          path={route.path}
          exact={route.exact}
          strict={route.strict}
          render={props => (
            <route.component {...props} {...extraProps} route={route} />
          )}
        />
      ))}
    </Switch>
  ) : null;
 export default renderRoutes;
~~~

### HashRouter

[文档阅读](https://juejin.im/post/5ac6f4a7f265da237314b08c)

## 填坑

**import' and 'export' may appear only with 'sourceType: module**
~~~
yarn add @babel/preset-stage-0 -D
yarn add @babel/preset-env -D
~~~
配置.babelrc
~~~
  "presets": ["react-app", "@babel/env"],
~~~

**删除package.json中的babel**
~~~
"babel": {
  presets: ['react-app']
}
~~~

## 欠缺

- react hooks各种定义
- router(react-router-dom) api阅读
- immutable api 多看几遍
- 动画库的掌握
