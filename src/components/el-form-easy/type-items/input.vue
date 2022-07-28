<template>
    <ElInput
        class="el-form-easy-type-input"
        :value="value"
        v-bind="config.props"
        @input="onInput"
    />
</template>

<script>
export default {
    name: 'el-form-easy-type-input',

    components: {
        ElInput: () => import('element-ui/packages/input/src/input.vue')
    },
    
    props: {
        value: [String, Number],

        config: {
            type: Object,
            default: () => ({})
        },
    },

    methods: {
        onInput (val) {
            this.$emit('change', this.config.key, val)
        }
    }
}
</script>

<style lang="less" scoped>
// .el-form-easy-type-input {

// }
</style>
