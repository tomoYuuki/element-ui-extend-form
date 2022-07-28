import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import ElFormEasy from './components/el-form-easy/index.js'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(ElementUI)
Vue.use(ElFormEasy, {
    ElementUI
})

Vue.config.productionTip = false

new Vue({
    render: (h) => h(App)
}).$mount('#app')
