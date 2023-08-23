

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
​		-vue.js 与 vue.runtime.xxx.js 的区别：
​			（1）vue.js 是完整版的 Vue，包含：核心功能+模板解析器
​			（2）vue.runtime.xxx.js 是运行版的 Vue,只包含：核心功能，没有模板解析器
​		-因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要
​				使用 render函数接收到的 createElement函数去指定具体内容

## vue.config.js配置文件

​		使用 vue inspect > output.js 可以查看到 Vue 脚手架的默认配置
​		使用 vue.config.js 可以对脚手架进行个性化定制.详情见：[配置参考 | Vue CLI 					(vuejs.org)](https://cli.vuejs.org/zh/config/#vue-config-js)



## ref属性

​		1.被用来给元素或子组件注册引用的信息（id的替代者）
​		2.应用在 html 标签上获取的是真实DOM元素，应用在组件标签上是组件实例对象（vc）
​		3.使用方式：
​			打标识：<h1 ref='xxx'>......</h1> 或 <School ref='xxx'> </School>
​			获取：this.$refs.xxx
​		

## 配置项props

​		功能：让组件接收外部传过来的数据		
​			(1).传递数据:
​					<Demo name="xxx" />
​			(2).接收数据:
​					第一种方式（只接收）：
​						props:[‘name’]
​					第二种方式（限制类型）：
​						props:{
​							name:Number
​						}
​					第三种方式（限制类型、限制必要性、指定默认值）：
​						props:{
​							name:{
​									type:String,  // 类型
​									required:true, // 必要性
​									default: ‘老王’ // 默认值						
​							}
​						}
​		备注：props是只读的，Vue底层会监视你对 props的修改，如果进行了修改，就会发出警告，
​					若业务需求确实需要修改，那么请复制 props 的内容到 data 中一份，然后去修改data
​					中的数据（用一个data变量代替props传入的数据来显示）

## mixin(混入)

​		功能：可以把多个组件共用的配置提取成一个混入对象
​		使用方式：
   		 第一步定义混合，例如：
​       		 {
​            		data(){...},
​           		 methods(){...},
​           		 ....
​      		  }
  	 	 第二步使用混合，例如：
​       	 	(1).全局混入: Vue.mixin(xxx)
​       		 (2).局部混入: mixin:[xxx]		
​	

## 插件

​		功能：用于增强Vue
​		本质：包含install 方法的一个对象，install 的第一个参数是 Vue,第二个以后的参数时插件使用者传递的数据
​		定义插件:
​				对象.install = function (Vue,options){
​						// 1. 添加全局过滤器
​								Vue.filter(...)

​						// 2.添加全局指令
​								Vue.directive(...)

​						// 3.配置全局混入
​								Vue.mixin(...)

​						// 4.添加实例方法
​								Vue.prototype.$myMethod = function (){ ... }

​								Vue.prototype.$myMethod = xxx						
​					}	

​		使用插件: Vue.use()		



## scoped 样式

​		作用：让样式在局部生效，防止冲突
​		写法： <style scoped>

## 		

## 总结 ToDoList案列

​		1.组件化编码流程：

​				（1）拆分静态组件：组件要按照功能点拆分，命名不要与html元素相冲突

​				（2）实现动态组件：考虑好数据的存放位置，数据是一个组件在用，还是一些组件在用：

​							1）一个组件在用：放在组件自身即可

​							2）一些组件在用：放在他们共同的父组件上（状态提升）

​				（3）实现交互：从绑定事件开始

​		2.props适用于：

​				（1）父组件 ===> 子组件   通信

​				（2）子组件 ===> 父组件   通信（要求父先给子一个函数）

​		3.使用 v-model 时要切记： v-model 绑定的值不能是 props 传过来的值，因为 props 是不可以修改的

​		4.props 传过来的若是对象类型的值，修改对象中的属性时 Vue 不会报错，但不推荐这样做



## webStorage

​		1.存储内容大小一般支持5MB左右（不同浏览器可能不一样）

​		2.浏览器端通过 Window.sessionStorage 和 Window.localStorage 属性来实现本地存储机制

​		3. 相关API：

​				1. xxxx.Storage.setItem( ‘key’ , ’value’ ) ;

​						该方法接收一个键和值作为参数，会把键值对添加到存储中，如果键名存在，则更新其对应的值

​				2. xxxx.Storage.getItem( ‘person’ )

​						该方法接收一个键名作为参数，返回键名对应的值

​				3. xxxx.Storage.remove( ‘key’ )

​						该方法接收一个键名作为参数，并把该键名从存储中删除

​				4.xxxx.Storage.clear(  )

​						该方法会清空存储中所有的数据

4. 备注：
	1. SessionStorage 存储的内容会随着浏览器窗口的关闭而消失
	2. LocalStorage 存储的内容，需要手动清除才会消失
	3. xxxStorage.getItem(xxx)如果 xxx 对应的 value获取不到，那么 getItem 的返回值是 null
	4. JSON.parse( null ) 的结果依然是 null





## 组件的自定义事件

​		1.一种组件间通信的方式，适用于：**子组件  ==> 父组件**

​		2.使用场景：A是父组件，B是子组件，B想给A传数据，那么就要在A中给B绑定自定义事件（事件的回调在A中）

​		3.绑定自定义事件：

​				1.第一种方式，在父组件中:   `<Demo @atguigu=“test” />`  或  `<Demo v-on:atguigu="test"/>` 

​				2.第二种方式，在父组件中：

```javascript
		<Demo ref="demo"/>
		...
		mounted(){
			this.$refs.xxx.$on('atguigu',this.test)
		}
```

​				3.若想让自定义事件只能触发一次，可以使用 once 修饰符 或 $once 方法。

​		4.触发自定义事件：`this.$emit(‘atguigu’,数据)`

​		5.解绑自定义事件：`this.$off(‘atguigu’)`

​		6.组件上也可以绑定原生DOM事件，需要适应 ==native== 修饰符。

​		7.注意：通过 `this.$refs.xxx.$on(‘atguigu’,回调)` 绑定自定义事件时，回调要么配置在==methods==中，要么用箭头函数，否则this指定会出问题

​			

## 全局事件总线（GlobalEventBus）

​		1.一种组件间通信的方式，适用于任意组件间通信。

​		2.安装全局事件总线：

```javascript
new Vue({
	...
	beforeCreate(){
		Vue.prototype.$bus = this //安装全局事件总线，$bus就是当前应用的vm
	},
	...
})
```

​		3.使用全局事件总线:

​				1).接收数据：A组件想接收数据，则在A组件中给 $bus 绑定自定义事件，事件的回调留在 A 组件自身

```javascript
methods(){
	demo(data){...}
}
...
mounted(){
	this.$bus.$on('xxx',this.demo)
}
```

​				2).提供数据：`this.$bus.$emit(‘xxx’,数据)`

​		4.最好在 beforeDestory 钩子中，用 $off 去解绑当前组件所用到的事件。



## 消息订阅与发布（pubsub）

​		1.一种组件间通信的方式，适用于任意组件间通信

​		2.使用步骤：

​				1）安装 pubsub `npm i pubsub-js`

​				2) 引入:  `import pubsub from ‘pubsub-js` 

​				3) 接收数据： A 组件想要接收数据，则在 A 组件中订阅消息，订阅的回调留在 A 组件自身

```javascript
		methods(){
			demo(data){...}
		}
         ...
         mounted(){
             this.pid = pubsub.subscribe('xxx',this.demo) // 订阅消息
         }
```

​				4)提供数据: `pubsub .publish(‘xxx’,数据)`

​				5)最好在 beforeDestroy 钩子中，用`pubsub.unsubscribe(pid)` 去取消订阅



## nextTick

​		1.语法: `this.$nextTick(回调函数)`

​		2.作用: 在下一次 DOM更新结束后执行其指定的回调

​		3.什么时候用：当数据改变后，要基于更新后的新DOM进行某些操作时，要在 nextTick 所指定的回调函数中执行



## Vue封装的过度与动画

​		1.作用：在插入、更新或移出DOM时，在合适的时候给元素添加样式类名

​		2.图示：

​						![image-20230605211341545](C:\Users\86135\Desktop\image-20230605211341545.png)

​		 3.写法：

​				1）准备好样式

​						元素进入的样式：

​							1、v-enter: 进入的起点

​							2、v-enter-active: 进入的过程中

​							3、v-enter-to: 进入的终点

​						元素离开的样式

​							1、v-leave：离开的起点

​							2、v-leave-active: 离开过程中

​							3、 v-leave-to: 离开的终点

​				2）使用`<transition>`包裹要过渡的元素，并配置name属性:

```javascript
		<transition name="hello">
			<h1 v-show="isShow"> 你好啊 </h1>
		</transition>
```

      3.    备注：若有多个元素需要过渡，则需要使用：`<transition-group>`, 且每个元素都要指定key值



## 配置代理

​		在根目录创建一个 Vue.config.js 文件

```js
		module.exports = {
            pages:{
                index:{
                    entry:'src/main.js' // 配置入口文件
                }
            },
            lintOnsave:false, // 关闭语法检查
            // 开启代理服务器（方法一有不足，一般用方法二）
            /*
            devServer:{
                proxy:'http://localhost:5000' // 配置自己要访问的服务器，vue会配置一个与浏览器同接口的服务器
            }
            */
       
```

​		方法一优先：配置简单，请求资源时直接发给前端（8080）即可，

​					缺点：不能配置多个代理，不能灵活的控制是否走代理

​					工作方式：配置了上述代理，当请求了前端不存在的资源时，则该请求会发给服务器（优先匹配前端资源）

​									即在vue-cli 的public或src中有就不会走代理

```js
		module.export = {
            // 开启代理服务器（方法二）
            devServer:{
                proxy:{
                    '/api1':{ // 匹配所有以'/api1'开头的请求路径
                        target:'http://localhost:5000', // 代理目标的基础路径
                        changeOrigin:true,
                        pathRewrite:{'^/api1' : ''} //将路径含有/api1部分去除
                    }，
                    '/api2':{ // 匹配所有以'api2'开头的请求路径
                    	target:'http://localhost:5005', // 代理目标的基础路径
                    changeOrigin :true
                    pathRecrite:{'^/api2':''}
                	}
                }
            }
        }
        
        
         /*
         	changeOrigin 设置为 true 时，服务器收到的请求头中的host值为： localhost:5000
         	changeOrigin 设置为 false 时，服务器收到的请求头中的host值为： localhost:8080
         	默认值是 true
         */
```

​			方法二：优点：可以配置多个代理，且可以灵活的控制请求是否走代理

​							缺点：配置略微繁琐，请求资源时必须加后缀

## vue-resource

​		是一个请求ajax的。不用了。改成axios



## 插槽

​		作用：让父组件可以向子组件指定位置插入html结构，也是一种组件间通信的方式，适用于 父组件 ==> 子组件

​		分类：默认插槽、具名插槽、作用域插槽

​		使用方式：

​				1、默认插槽

```js
		父组件中：
        	<Category>
            	<div>html结构</div>
            </Category>
		子组件中：
        	<template>
            	<div> 
            		定义插槽
					<slot>插槽默认内容。。</slot>
            	</div>
            </template>
```

​				2、具名插槽

​						用div包裹可以用 slot写法 ，用 template 包裹则可以用 v-slot:写法

```js
		父组件中;
			<Category>
				<template slot='center'>
					<slot>html结构1</slot>
            	</template>
            	<template v-slot:footer>
					<slot>html结构2</slot>
            	</template>
			</Category>
		子组件中：
        		<template>
            		<div> 
            			定义插槽
						<slot nama='center'>插槽默认内容。。</slot>
						<slot nama='footer'>插槽默认内容。。</slot>
            		</div>
            	</template>
```

​			3、作用域插槽

​					1.理解：数据在组件自身，但根据数据生成的结构需要组件的使用者来决定，（games数据在Category 组件中，但使用数据							所遍历出来的结构由APP组件决定）

​					2、

```js
			父组件中：
            		<Category>
						<template scope="scopedDate"> // scopeDate 名字可以随便取，接收的是子组件传来的全部数据组成的一个对象，所以使用games的时候要.games,也可以用结构赋值{games}
                            	// scope 接收子组件传来的数据
                            	<!-- 生成的是ul列表-->
                            	<ul>
                            		<li v-for="(g,index) in scopeDate.games" :key="index">{{g}}</li>
                            	</ul>
            			 </template>
					</Category>
					<Category>
						<template slot-scope="{{games}}">
                            	<!-- 生成的是h4标题-->
                            	<h4 v-for="g in {games}" :key='g'>{{g}}</h4>
            			 </template>
					</Category>
			子组件：
            		<template>
                			<div>
                				<slot :games='games'>
                                   //  还可以在开始标签中传输一些其他数据如：  msg="hello" ,会和games组成一个对象发送
                                   //  就像是props父传子倒过来子传父一样
                                   </slot> 
                			</div>
               		</template>

					<script>
                      		export default{
								name:'Category',
                                   props:['titile'],
                                   // 数据在子组件自身
                                   data(){
                                       return {
                                           games:['王者荣耀','英雄联盟','守望先锋','绝地求生']
                                       }
                                   }
							} 
                      </script>
```



## Vuex （vuex是为了组件间共享数据、状态，四个方法是为了在各自组件中写的方便）

​			vue2用 vuex 的3版本  vue3 用vuex 的4版本

​			安装： npm install vuex@3	引入 ： import Vuex from ‘vuex’			

​			是一个在vue中实现集中式状态（数据） 管理的插件，对vue应用中多个组件的共享状态进行集中式的管理，也是 一种组件间的	

​						通信方式，且适用于任意组件间的通信

​			当多个组件需要共享数据时使用

#### 			1、搭建vuex环境

​					1、创建文件：src 下创建一个 store 文件夹再创建一个 index.js文件 或者创建vuex文件夹创建store.js文件

​					index.js 文件：

```js
			// 引入vue
			import Vue from 'vue'
			// 引入vuex
			import Vuex from 'vuex'
			// 使用vuex插件
			Vue.use(Vuex)

			// 准备actions 对象-响应组件中用户的动作
			const actions = {}
            // 准备mutations对象 - 修改state中的数据
            const mutations = {}
            // 准备state对象 - 保存具体的数据
            const states = {}
            
			export default new Vuex.Store({
                actions,
                mutations,
                state
            })
```

​					2、 在main.js 中创建vm时传入store配置项

```js
			import Vue from 'vue'
			// 引入store文件
			import store from './store/index.js'

			// 创建 cm
			new Vue({
                el:'#app',
                render:h => h(App),
                store
            })
			
```

#### 2、基本使用：

​					1、初始化数据、配置actions、配置mutations、操作文件store.js

```js
				// 引入vue
				import Vue from 'vue'
				// 引入vuex
				import Vuex from 'vuex'
				// 使用vuex
				Vue.use(Vuex)
			
				const actions = {
                    // 响应组件中加的动作
                    jia(context,value){
                        context.commit('JIA',value)
                    }
                 }
                 const mutations = {
                    // 执行加
                    JIA(state,value){
                        state.sum += value
                    }
                 }
                
                // 初始化数据
                const state = {
                    sum:0
                }
                // 创建并暴露store
                export default new Vuex.Store({
                    actions,
                    mutations,
                    state
                })
				
```

​						2、组件中读取vuex中的数据：$store.state.sum  (在模板中使用不用加this，在script标签中如methods中要加this)

​						3、组件中修改vuex中的数据：```$store.dispatch(‘action中的方法’ , 数据) ``` 或```  $store.commit(‘mutations中的方法名’ , 						数据)```

​									若没有网络请求或其他业务逻辑，组件中也可以越过actions，即不写dispatch，直接编写commint

​									方法名一般在actions中用的小写，要给mutations的大写

#### 3、getters的使用：

​				概念：当state中的数据需要经过加工后再使用时，可以使用getters加工（像computed属性，但组件内的计算属性不能被其他组							件使用）

​				使用：在store.js中追加getters配置

```js
		  ...
		  const getters = {
		  	 bigSum(state){
		  	 		return state.sum *10
		  	 }
		  }
		  
		  // 创建并暴露store 
		  export default new Vuex.Store({
		  		... 
		  		getters
		  })
```

​					组件中读取数据：  $store.getters.bigSum

#### 4、四个map方法 (不用也行，四个方法是为了简写组件中的重复部分)

​				最好都用map方法简写，不简写在模块化vuex时要配置很长一串很麻烦

​				mapState 与 mapGetters 方法用来映射state与getters中的数据给组件中的计算属性

​				1、mapState

```js
			computed:{
				// 借助mapState 生成计算属性：sum、 school、 subject（ 对象写法，不简写时使用）
                // 对象里键表示计算属性中要用的属性名，名表示在对应的数据中的键名
                ...mapState({sum:'sum', school:'school', subject:'subject'}),
                 // 借助mapState 生成计算属性： sum、school、subject (简写时采用数组写法)
                 ...mapState(['sum','school','subject']),
			}
```

​				2、mapGetters 

```js
			computed:{
				// 借助mapGetters 生成计算属性：bigSum(对象写法)
				...mapGetters({bigSum:'bigSum'})
				// 借助mapGeeters 生成计算属性：bigSum（数组写法）
				...mapGetters(['bigSum'])
			}
```

​				3、mapActions 用于帮助我们生成与actions对话的方法，即包含：$store.dispatch( xx) 的函数

```js
			methods:{
				// 靠mapActions 生成：incrementOdd 、 incrementWait (对象形式)
				...mapActions({incrementOdd:'jiaOdd',incrementWait:'jiaWait'})
				
				// 靠mapActions 生成 ：incrementOdd 、 incrementWait (数组形式)
				...mapActions(['jiaOdd','jiaWait'])
			}
```

​				4、 mapMutations 用于帮助我们生成与mutations对话的方法，即：包含 $store.commit(xxx) 的函数

```js
			methods:{
				// 靠mapMutaions 生成：increment 、 decrement （对象形式）
				...mapMutations({increment:'JIA',decrement:'JIAN'})
				
				// 靠mapMutation 生成 : increment、 decrement （数组形式）
				...mapMutations(['JIA','JIAN'])
			}
```

​				mapActions 与 mapMutations 使用时，若需要传递参数，需要在模板中绑定事件时传递好参数，否则参数时事件对象

#### 5、模块化+命名空间

​		1、 目的：让代码更好维护，让多种数据分类更加明确

​						多个功能类型的数据和方法杂糅在一起一多就麻烦，可以分类将这些数据和状态分类成不同模块类别

​						原来的全部放到一套actions,mutations,state,getters, 模块化就是分成几类，每一类里都有一套

​						每一套里不用担心重名问题，都是局部命名

​		2、修改 store.js

```js
		const countAbout = {
			namespaced:true,  // 开启命名空间
			actions:{
				//可以直接用context.state，不用担心与其他套冲突
			},
			state:{x:1,y:2},
			mutations:{...},
			getters:{
				bigSum(state){
				return state.sum * 10
				}
			}
		}

		const personAbout = {
            namespaced:true, // 开启命名空间
            state:{...},
            mutations:{...},
            actions:{...},
            getters:{...}
        }
                     
        const store = new Vuex.Store({
            modules:{
                countAbout,
                personAbout
            }
        })
                       
           
```

​				3、开启命名空间后，组件中读取state数据

```js
		// 方式一： 自己直接读取
		this.$store.state.personAbout.list
		// 方式二： 借助mapState读取：
		...mapState('countAbout',['sum','school','subject'])
		// 还要引入其他类的就再写一个，其他map方法也是一样
		...mapState('personAbout',['personList'])
```

​			4、 开启命名空间后，组件中读取getters数据

```js
		// 方式一：自己直接读取
		return this.$store.getters['personAbout/firstPersonName'] // '类/getters名'
		// 方式二： 借助mapGetters读取
		...mapGetters('countAbout',['bigDSum'])  // 前面写类，后面写要的getters名，数组写法,与没有模块化时一样的
		...mapGetters('countAbout',{bigSum:'bigSum'}) // 对象写法
```

​			5、开启命名空间后，组件中调用dispatch

```js
		// 方式一： 自己直接dispatch
		this.$store.dispatch('personAbout/addPersonWang',person) // 格式与getters一样
		// 方式二： 借助mapActions
		...mapActions('countAbout',{incrementOdd:'jiaOdd',incrementWait:'jiaWait'}) // 也可以用数组写法
```

​			6、 开启命名空间后，组件中调用commit

```js
		// 方式一： 自己直接commit
		this.$store.commit('personAbout/ADD_PERSON',person)
		// 方式二： 借助mapMutations
		...mapMutations('personAbout',['ADD_PERSON'])  // dispatch和commit传的参数和没用模块化一样直接在绑定事件中传
		...mapMutations('countAbout',['JIA','JIAN']) // 可commit给不同类
```

#### 	6、可以拆分index.js

​			全部类都在index.js中写比较杂，可以把不同的类分别定义在不同的js文件中，然后暴露，在index.js中引入就像、

​			如在index.js中：

```js
import countOptions from './count.js'
import personOptions from './person.js'
```

​			分别在两个 js 文件中：

```js
export default {
	namespaced:true,
	state:{...},
	getters:{...},
	....
}
```

#### 	7、自我总结

​		引入vuex是为了多组件之间共享数据状态及操作，搭建store

​		注意组件中不简写模块和绑定方法时的格式，可以用map方法来简写省略很多事， 包括模块化后的都很方便，即方式二对比方式一

​		要开启了命名空间才能在map方法中直接写分成的类名即可，如 'personAbout'。后面的数组和对象写法不变，很方便！

​		...map前面的... 是es6语法,多自我搭建几次试试

​		不模块化像：      														模块化后像：

```js
		{  state,								{   state{	a类
 store	{	mutations,							 {		  {	 b类
		{	actions,					store	{		  {  ....
		{   getters								 {	mutations { a 类
												{			{ b类
												{   。。。
```

​			我是根据模块化后不用简写形式觉得的： 格式先  $store 再 getters 再 类名 personAbout

```js
     return this.$store.getters['personAbout/firstPersonName']
```

​			但老师是说模块化后是:   那我觉得这样应该是先 $store  再类名  personAbout  再 getters,但不是，管他呢

```js
	store {   a类 {   state
		  {		 {	 mutations
		  {		 {   ...
		  {	  b类 {  state
		  {		  {  mutations
		  {	  	  {  ...
		  {   ...
```





## 路由

​			1、理解：一个路由（route）就是一组映射关系（key-value）。多个路由需要路由器（router）进行管理

​			2、前端路由： key是路径、value 是组件

### 	1、基本使用

​			1、安装vue-router., 命令：``` npm i vue-router ```安装的是最新的，vue2需要安装3版本 npm i vue-router@3

​			2、在main.js文件应用插件：``` Vue.use(VueRouter)``` 在```new Vue({   })``` 中添加router配置项 （同 store）

​			3、src下创建 router 文件夹，创建 index.js 文件夹管理 router

​			3、编写router配置项：

```js
		// 引入VueRouter
		import VueRouter from 'vue-router'
		// 引入组件
		import About from '../components/About'
		import Home from '../components/Home'
		
		// 创建router实例对象，去管理一组一组的路由规则
		const router = new VueRouter({
			routes:[
				{
					path:'/about',
					component:About   // component 单数，吃亏写了复数半天找不到问题
				},
				{
					path:'/home',
					component:Home
				}
			]
		})
		
        // 暴露router
        export default router
```

​			4、 实现切换 （active-class 可配置高亮样式，即选中状态下的样式）

```vue
			<router-link active-class="active" to="/about">About</router-link>  // to 用来指定路径位置
```

​			5、指定展示位置

```vue
			<router-view> </router-view>
```

### 	2、几个注意点：

​			1、路由组件通常存放在```pages```文件夹中，一般组件通常存放在```components```文件夹中

​			2、通过切换，“隐藏”了的路由组件，默认是被销毁掉的，需要的时候再去挂载

​			3、每个组件都有自己的``` $store``` 属性，立面存储着自己的路由信息

​			4、整个应用都只有一个router ,可以通过组件的 ```$router``` 属性获取到

### 	3、多级路由（嵌套路由）

​			1、配置路由规则，使用children 配置项：

```js
		routes:[
			{
				path:'/about',
				component:About
			},
			{
				path:'/home',
				component:Home,
				children:[  // 通过children配置子级路由
					{
						path:'message',   // 一定不要写：/message
						component:Message
					},
					{
						path:'news',   // 不要写: /news
						component:News
					}
				]
			}
		]
```

​			2、跳转（要写完整路径）

```vue
		<router-link to="/home/news"> News </router-link>
```

### 	4、路由的query参数

​			1、传递参数

```vue
		<!-- 跳转并携带query参数，to的字符串写法 -->
		<router-link :to="/home/message/detail?id=666&title=你好">跳转</router-link>
		<!-- 跳转并携带query参数，to的对象写法 -->
		<router-link :to="{
           	path:'/home/message/detail',
            query；{
                    id:666,
                    title:'你好'
             }
         }">
            跳转
		</router-link>
```

​			2、接收参数：

```
		在调用的组件中用 this.&route.query 获取
		{{  }}  中不用写this
		this.$route.query
```

### 		5、命名路由

​				1、作用：当 router-link 中to属性中的 path 太长时，可以简化路由的跳转

​				2、使用	

​						①给路由命名：

```js
				{
					path:'/demo',
					compnent:Demo,
					children:[
						{
							path:'test',
							component:[
								name:'hello'   // 给路由命名
								path:'welcome',
								component:Hello
							]
						}
					]
				}
```

​						②跳转简化：	

```vue
				<!-- 简化前，需要写完整的路径 -->
				<router-link to="/demo/test/welcome">跳转</router-link>
				
				<!-- 简化后，直接通过名字跳转 -->
				<router-link :to="{name:'hello'}">跳转</router-link>  // 就是简化路径书写to要注意: 并且要写成对象式

				<!-- 简化写法配合传递query参数 -->
				<router-link
                       :to="{
                             name:'hello',
                            query:{
                            	id=666,
                            	title:'浦京'
                            }
                  }">
                    跳转
				</router-link>
```



### 	6、路由的params参数

​			1、配置路由，声明接收params参数

```js
		{
			path:'/home',
			component:Home,
			children:[
				{
					path:'news',
					component:News
				},
				{
					path:'message',
					component:Message,
					children:[
						{
							name:'xiangqing',
							path:'detail/:id/:title',  // 使用占位符声明接收params参数
							component:Detail
						}
					]
				}
			]
		}
```

​			2、传递参数

```vue
		<!-- 跳转并携带params参数，to的字符串写法 -->
		<router-link :to="home/message/detail/555/你好"> 跳转 </router-link>
	
		<!-- 跳转并携带params参数，to的对象写法 -->
		<router-link 
               :to="{
                    name:'xiangqing',
                    params:{
                    	id:666,
                    	title:'你好'
                    }
               }"   	   
         > 跳转 </router-link>
            
```

​						特别注意： 路由携带params参数时，若使用to的对象写法，则不能使用path配置项，必须使用name配置

​									即使用对象写法必须先命名

​			3、接收参数：

​						```this.$route.params.id```     ```$route.params.title```



### 	7、路由的props配置

​				作用：让路由组件更方便的收到参数

```js
			{
				name:'xiangqing',
				path:'detail/:id',
				component:Detail,
				
				// 第一种写法：props值为对象，该对象中所有的key-value的组合最终都会通过props传给Detail组件
				// 缺点： 传递的是死数据
				props:{a:900}
				
				// 第二种写法：props值为布尔值，布尔值为true，则把路由收到的所有params参数通过props传递给Detail组件
				// 缺点，只能用于params
				props:true
				
				// 第三种写法：props值为函数，该函数返回的对象中每一组key-value都会通过props传给Detail组件
				// 优点：params和 query 都能用props接收，使用params时记得配置时使用占位符
				props(router){
					return {
						id:$route.query.id
						// 使用params时用 id:$route.params.id
					}
				}
			}
```

​				注：记得在接收数据的组件用props接收

​						==使用   query    和   params  时一定一定要确定props为函数时读取是用   ```$route.query   ``` 还是  ```  $route.params.id```==



### 	8、 <router-link> 的replace属性

​			1、作用： 控制路由跳转时操作浏览器历史记录的模式

​			2、浏览器的历史记录有两种写入方式：分别为 ```push``` 和 ```replace```  , push 是追加历史记录，replace是替换当前记录，路由跳转时

​						默认为push

​					理解：栈结构即像子弹匣一样，push是往上堆历史记录，replace是替换当前的记录，

​			3、如何开启replace模式： ``` <router-link replace  ....> News </router-link>```



### 9、编程式路由导航

​			1、作用：不借助 ``` <router-link>``` 实现路由跳转，让路由跳转更加灵活

​			2、具体编码：

```js
			// $router 
			this.$router.push({
				name:'xiangqing',
				params:{
					id:xxx,
					title:xxx
				}
			})
			
			this.$router.replace({
				name:'xiangqing',
				params:{
					id:xxx,
					title:xx
				}
			})

			this.$router.forward()  // 前进
			this.$router.back()  // 后退
			this.$router.go(n)  传一个数字，正数表示前进n步，负数表示后退n步
```



### 10、缓存路由组件

​			1、作用：让不展示的路由组件保持挂栽，不被销毁

​			2、具体编码：,包裹最大的组件展示区，include不写表示所有组件，==写的是组件名==

```vue
		<keep-alive include='News'>
			<router-link> </router-link>
		<keep-alive>
```

​			3/多个组件要缓存用数组：  :include=“[ ‘News’, ‘Message’ ]”



### 11、两个新的生命周期钩子

​			1、作用：路由组件所独有的两个钩子，用于捕获路由组件的激活状态

​			2、具体名字：

​						1、 ```activated```  路由组件被激活时触发

​						2、 ```deactivated```  路由组件失活时触发



### 12、 路由守卫

​		1、作用： 对路由进行权限控制

​		2、分类：全局路由、独享路由、组件内路由

​		3、全局路由：

```js
		// 全局前置路由：初始化时、每次路由切换前执行
		router.beforeEach((to,from,next) => {
			console.log('前置路由',to,from)
			if(to.meta.isAuth){  // 判断当前路由是否需要权限认证 ,在路由的meta配置项中设置
				if(localStorage.getItem('school') === 'atguigu' ){  // 进行权限控制的具体规则
					next()  // 放行
				}else{
					alert('暂无权限查看')
				}
			}else{
				next()  // 放行
			}
		})
		
		// 全局后置守卫，初始化时执行、每次路由切换后执行
		router.afterEach((to,from) => {
			console.log('后置理由',to,from)  // 没有next
			if(to.meta.title){
				document.title = to.meta.title
			}else{
				document.title = '硅谷商城' // 修改网页的title
			}
		})
```

​				==是否需要某某权限都在meta配置中设置，一般 isAuth 表示是否需要权限认证==

​		4、独享守卫：在要设置独享路由的某个组件下设置beforeEnter 配置项

```js
		beforeEnter(to,from,next() => {
			console.log('前置路由',to,from)
			if(to.meta.isAuth){  // 判断当前路由是否需要权限认证 ,在路由的meta配置项中设置
				if(localStorage.getItem('school') === 'atguigu' ){  // 进行权限控制的具体规则
					next()  // 放行
				}else{
					alert('暂无权限查看')
				}
			}else{
				next()  // 放行
			}
		})
```

​			5、组件内守卫

```js
		// 进入守卫：通过路由规则，进入该组件时调用
		beforeRouteEnter(to,from,next){
		
		},
		// 离开守卫：通过路由规则，离开该组件时被调用
		beforeRouteLeave(to,from,next){
		
		}
```



### 13、路由器的两种工作模式

​		1、对于一个url来说，什么时hash值？  ——  #以及后面的内容就是hash值

​		2、hash值不会包含在HTTP请求中，即：hash值不会带给服务器

​		3、hash模式：

​					1、地址中永远带着 # 号。不美观

​					2、若以后将地址通过第三方手机app分享，若app校验严格，则地址会被标记为不合法。

​					3、兼容性较好

​		4、 history模式：

​					1、地址干净，美观

​					2、兼容性和hash模式相比较差

​					3、应用部署上线时需要后端人员支持，解决刷新页面服务端404的问题











