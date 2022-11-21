<template>
    <ElInput
        class="el-form-easy-type-input"
        :value="value"
        v-bind="config.props"
        @input="onInput"
    >
        <template
            v-for="[key,render] in Object.entries(config.slots)"
            v-slot:[key]
        >
            <SlotContainer
                :key="key"
                :render="render"
            />
        </template>
    </ElInput>
</template>

<script>

export default {
    name: 'ElFormEasyTypeInput',
    components: {
        ElInput: () => import('element-ui/packages/input/src/input.vue'),
        SlotContainer: ()=>import('@/components/slot-container')
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
