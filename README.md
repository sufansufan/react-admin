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

## 路由配置
### 依赖配置
~~~
yarn add react-router react-router-dom react-router-config --save
~~~

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
