

# 笔记

------

## 脚手架文件结构：
    node_modules
    public
        favicon.ico:  页签图标
        index.html:  主页面
    src
        assets:  存放静态资源
            logo.png
        component:  存放组件
            HelloWorld.vue
        App.vue:  汇总所有的组件
        main.js:  入口文件
    .gitignore:  git版本管制忽略的配置
    babel.config.js:  babel的配置文件
    package.json:  应用包配置文件
    README.md:  应用描述文件
    package-lock.json:  包版本控制文件

## 关于不同版本的Vue：
	-vue.js 与 vue.runtime.xxx.js 的区别：
		（1）vue.js 是完整版的 Vue，包含：核心功能+模板解析器
		（2）vue.runtime.xxx.js 是运行版的 Vue,只包含：核心功能，没有模板解析器
	-因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要
		使用 render函数接收到的 createElement函数去指定具体内容

## vue.config.js配置文件

​		使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置
​		使用 vue.config.js 可以对脚手架进行个性化定制.详情见：(https://cli.vuejs.org/zh/config/#vue-config-js)

## ref属性

​	1.被用来给元素或子组件注册引用的信息（id的替代者）
​	2.应用在 html 标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
​	3.使用方式：
​		打标识：<h1 ref='xxx'>......</h1> 或 <School ref='xxx'> </School>
​		获取：this.$refs.xxx
​		
​			





​		

​		

​	
​		