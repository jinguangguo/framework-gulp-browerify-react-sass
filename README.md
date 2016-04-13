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

```
gulp server:start
```


### 本地构建

```
gulp deploy:debug;      # 开发模式
gulp deploy:prod;       # 产品模式
```


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


### UI库使用
> - 暂时使用[bootstrap](http://www.bootcss.com/), 通过重定义bootstrap-theme.css文件来实现定制化


### 项目目录

**app目录:**

```
├── component       # 基础公用组件，如dialog、alert、confirm、toast等，这里最好使用react
├── icomoon         # 字体库文件
├── img             # 图片
├── jsx             # react文件
├── scss            # scss文件
├── widget          # reactUI组件
└── index.html      # 页面入口，单页应用的入口文件
```

**gulp目录:**

```
├── server.js   # 本地开发
├── deploy.js   # 打包部署脚本
├── deploy目录
    ├── clean.js    # 清除上次部署的脚本
    ├── font.js     # 字体文件部署
    ├── html.js     # html文件部署
    ├── img.js      # 图片文件部署
    ├── js.js       # jsx文件部署
    ├── scss.js     # scss文件部署
```


### React开发

> - [React 编码规范](https://github.com/Minwe/style-guide/blob/master/React.js.md)
> - [React Router](https://github.com/rackt/react-router)
> - [React Bootstrap](http://react-bootstrap.github.io/)
> - [React on ES6+](http://babeljs.io/blog/2015/06/07/react-on-es6-plus/)


### 基于react的常用工具
> - [React Complementary Tools](https://github.com/facebook/react/wiki/Complementary-Tools)
> - [reapp-ui](https://github.com/reapp/reapp-ui)


### 整体技术方案学习
- [React 入门实例教程](http://www.ruanyifeng.com/blog/2015/03/react.html) - 阮一峰
- [React Demo](https://github.com/ruanyf/react-demos)- 阮一峰
- [React官网](https://facebook.github.io/react/)
- [React源码](https://github.com/facebook/react)
- [React Router](https://github.com/rackt/react-router)
- [React Bootstrap](http://react-bootstrap.github.io/)
- [Scss](http://sass-lang.com/)
- [ECMAScript 6入门](http://es6.ruanyifeng.com/)


### React组件的生命周期

Es组件生命周期——每个React组件在加载时都有特定的生命周期，在此期间不同的方法会被执行。下面简单介绍React组件的生命周期：

* componentWillMount
该方法会在组件render之前执行，并且永远只执行一次。

* componentDidMount
该方法会在组件加载完毕之后立即执行。此时，组件已经完成了DOM结构的渲染， 并可以通过 this.getDOMNode() 方法来访问。

* componentWillReceiveProps
组件接收到一个新的prop时会被执行，且该方法在初始render时不会被调用。

* shouldComponentUpdate
在组件接收到新的props或state时被执行。

* componentWillUpdate
在组件接收到新的props或者state但还没有render时被执行。 在初始化时不会被执行。

* componentDidUpdate
在组件完成更新后立即执行。在初始化时不会被执行。 一般会在组件完成更新后被使用。

* componentWillUnMount
在组件从DOM中unmount后立即执行。该方法主要用来执行一些必要的清理任务。


### React事件参数传递

使用ES5中的bind函数, 注意它返回的是一个函数, 能够改变其运行的作用域

```javascript
<div onClick={this.handleClick.bind(this, params)}>{item}</div>

```

### React组件间的通信

> - 父子通信: 直接通过props进行通信
> - 子父通信: 例如： GroceryList 组件有一些通过数组生成的子节点。当这些节点被点击的时候，你想要展示这个节点的名字：

```javascript
var GroceryList = React.createClass({
  handleClick: function(i) {
    console.log('You clicked: ' + this.props.items[i]);
  },

  render: function() {
    return (
      <div>
        {this.props.items.map(function(item, i) {
          return (
            <div onClick={this.handleClick.bind(this, i)} key={i}>{item}</div>
          );
        }, this)}
      </div>
    );
  }
});

React.render(
  <GroceryList items={['Apple', 'Banana', 'Cranberry']} />, mountNode
);
```

> - 没有父子关系通信: 对于没有 父-子 关系的组件间的通信，你可以设置你自己的全局事件系统。 在 componentDidMount() 里订阅事件，在 componentWillUnmount() 里退订，然后在事件回调里调用 setState()。

更多内容请参考官方介绍: [组件间的通信](http://reactjs.cn/react/tips/communicate-between-components.html)


### React单例和多例的写法

这里的多例, 指的是每一次都会重新执行组件的生命周期所用到的方法. 而单例只会执行一次.
我们可以使用简单的if判断来实现之.

```javascript

let bread = null;
if (this.state.isSingle === true) {
    bread = <Bread moduleName="企业管理" />;
} else {
    bread = <div className="nothing">没实例化</div>;
}

return (
    <div>
        { bread }
    </div>
);

```
这样, 随着state中的isSingle的切换, 每一次都会重新创建bread实例

单例的写法就很简单了, 直接写之

```javascript
return (
    <div>
        <Bread moduleName="企业管理" />
    </div>
);
```

### React中的DOM操作

Refs和getDOMNode()
为了和浏览器交互，你将需要对DOM节点的引用。每一个挂载的React组件有一个getDOMNode()方法，你可以调用这个方法来获取对该节点的引用。

```javascript
var MyComponent = React.createClass({
  handleClick: function() {
    // Explicitly focus the text input using the raw DOM API.
    this.refs.myTextInput.getDOMNode().focus();
  },
  render: function() {
    // The ref attribute adds a reference to the component to
    // this.refs when the component is mounted.
    return (
      <div>
        <input type="text" ref="myTextInput" />
        <input
          type="button"
          value="Focus the text input"
          onClick={this.handleClick}
        />
      </div>
    );
  }
});

React.render(
  <MyComponent />,
  document.getElementById('example')
);

```

更多内容请参考官方介绍: [浏览器中的工作原理](http://reactjs.cn/react/docs/working-with-the-browser.html)


### React中的双向绑定工具
ReactLink是一种简单表达React双向绑定的方式。

```javascript
var WithLink = React.createClass({
  mixins: [React.addons.LinkedStateMixin],
  getInitialState: function() {
    return {message: 'Hello!'};
  },
  render: function() {
    return <input type="text" valueLink={this.linkState('message')} />;
  }
});

```
更多内容请参考官方介绍: [双向绑定辅助工具](http://reactjs.cn/react/docs/two-way-binding-helpers.html)


### React中的Mixins
组件是 React 里复用代码最佳方式，但是有时一些复杂的组件间也需要共用一些功能。有时会被称为 跨切面关注点。React 使用 mixins 来解决这类问题。

```javascript
var SetIntervalMixin = {
  componentWillMount: function() {
    this.intervals = [];
  },
  setInterval: function() {
    this.intervals.push(setInterval.apply(null, arguments));
  },
  componentWillUnmount: function() {
    this.intervals.map(clearInterval);
  }
};

var TickTock = React.createClass({
  mixins: [SetIntervalMixin], // 引用 mixin
  getInitialState: function() {
    return {seconds: 0};
  },
  componentDidMount: function() {
    this.setInterval(this.tick, 1000); // 调用 mixin 的方法
  },
  tick: function() {
    this.setState({seconds: this.state.seconds + 1});
  },
  render: function() {
    return (
      <p>
        React has been running for {this.state.seconds} seconds.
      </p>
    );
  }
});

React.render(
  <TickTock />,
  document.getElementById('example')
);
```

更多内容请参考官方介绍: [可复用组件](http://reactjs.cn/react/docs/reusable-components.html)


### React Devtool

请参考: [New React Devtools Beta](https://facebook.github.io/react/blog/2015/08/03/new-react-devtools-beta.html)


### React发展

请参考: [React in 2015 - Retrospection](https://blog.risingstack.com/react-in-2015/)
请参考: [展望2016，REACT.JS 最佳实践](http://insights.thoughtworkers.org/react-js-best-practices-for-2016/)


