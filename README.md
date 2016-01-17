系统通用架构脚手架
===================

### 技术选择
> - 构建工具 - gulp（gulp-browerify ...）
> - 开发框架 - react、react-router
> - 常用库 - jquery
> - 模块开发 - es6
> - 样式开发 - scss

### 开发方案
> - 没有使用后端模板引擎，所有请求皆为ajax请求
> - 使用单页应用，路由由前端控制，即通过设置react-router的方式

**优势和劣势**

> - 优势：前后端彻底分离，提高并行高发
> - 劣势：冗余脚本、首屏速度变慢

### 本地启动
gulp server:start

### 本地构建
> - gulp deploy:debug;// 	开发模式
> - gulp deploy:prod // 产品模式

### 常用工具库
> - underscore：http://www.css88.com/doc/underscore/
> - underscore.string：http://gabceb.github.io/underscore.string.site/
> - moment： http://momentjs.com/
> - url：https://github.com/websanova/js-url

还可以添加入cookie工具库等，优先使用现有的开源工具库，其次根据项目需要再自己写。
使用现有cdn服务器来进行加载：http://www.bootcdn.cn/

### icon使用
> - 优先使用现成字体库：http://fontawesome.io/
> - 使用阿里图标库：[http://iconfont.cn/](http://iconfont.cn/)，将图标的svg下载成功后，上传至[https://icomoon.io/](https://icomoon.io/)后，再下载复制于app/icomoon文件夹中即可


### 项目目录

 **app目录:**

```
├── component：基础公用组件，如dialog、alert、confirm、toast等，这里最好使用react
├── icomoon：字体库文件
├── img：图片
├── jsx：react文件
├── scss：scss文件
├── widget：reactUI组件
└── index.html：页面入口，单页应用的入口文件
```


### 规范

- [React 编码规范](https://github.com/Minwe/style-guide/blob/master/React.js.md)


### 基于react的常用工具
- [React Complementary Tools](https://github.com/facebook/react/wiki/Complementary-Tools)
- [reapp-ui](https://github.com/reapp/reapp-ui)


### 整体技术方案学习
- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html) - 阮一峰
- [React Demo](https://github.com/ruanyf/react-demos)- 阮一峰
- [React官网](https://facebook.github.io/react/)
- [React源码](https://github.com/facebook/react)
- [React Router](https://github.com/rackt/react-router)
- [Scss](http://sass-lang.com/)
- [ECMAScript 6入门](http://es6.ruanyifeng.com/)