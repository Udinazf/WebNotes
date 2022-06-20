// 这里会报错，因为需要脚手架
import App from './App.vue'

new Vue({
    el:'#root',
    template:`<App></App>`,
    components:{App}
})