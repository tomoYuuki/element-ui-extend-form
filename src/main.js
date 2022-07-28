import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import ElFormEasy from './components/el-form-easy'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.component(ElFormEasy.name, ElFormEasy)

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App)
}).$mount('#app')
