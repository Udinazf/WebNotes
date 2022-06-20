//引入Vue
import Vue from 'vue'
//引入App
import App from './App.vue'
//引入插件，，，$http
import vueResource from 'vue-resource'
//引入store
// 完整写法是import store from './store/index.js'
import store from './store'
//关闭Vue的生产提示
Vue.config.productionTip = false
//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	beforeCreate(){
		Vue.prototype.$bus = this // 安装全局事件总线($bus)
	}
})