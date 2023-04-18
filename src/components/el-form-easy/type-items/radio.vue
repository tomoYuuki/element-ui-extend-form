<template>
    <!-- <ElRadio
        class="el-form-easy-type-radio"
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
    </ElRadio> -->
    <ElRadioGroup  
        class="el-form-easy-type-radio"
        :value="value"
        v-bind="config.props"
        @input="onInput"
    >
        <ElRadio :label="3">
            备选项
        </ElRadio>
        <ElRadio :label="6">
            备选项
        </ElRadio>
        <ElRadio :label="9">
            备选项
        </ElRadio>
    </ElRadioGroup>
</template>

<script>

export default {
    name: 'ElFormEasyTypeRadio',
    components: {
        ElRadio: () => import('element-ui/packages/radio/src/radio.vue'),
        ElRadioGroup:()=>import('element-ui/packages/radio/src/radio-group.vue'),
        // SlotContainer: ()=>import('@/components/slot-container')
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
