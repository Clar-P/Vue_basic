import Vue from 'vue'
import App from './App'

// 完整引入
//  引入ElementUI组件库
//  import ElementUI from 'element-ui'
// 引入ElementUI全部样式
// import 'element-ui/lib/theme-chalk/index.css'

Vue.config.productionTip = false

// 应用ElementUI
/* Vue.use(VueRouter) */

new Vue({
    el:'#app',
    render:h => h(App),
    router
})