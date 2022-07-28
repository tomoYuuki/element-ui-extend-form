// el-form-easy 入口文件
import ElFormEasy from '@/components/el-form-easy/index.vue'

export default  {
    install (Vue, options = {}) {
        const { ElementUI } = options
        console.log('ElementUI', ElementUI)

        if (!ElementUI) {
            throw new Error('ElementUI is required')
        }

        Vue.component(ElFormEasy.name, ElFormEasy)
    }
}
