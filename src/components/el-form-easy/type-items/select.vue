<template>
    <!-- :disabled="isDisabled(config)" -->
    <ElSelect
        class="el-form-easy-type-input"
        :value="value"
        :disabled="config.isDisabled"
        v-bind="config.props"
        style="width: 100%"
        v-on="config.on"
        @input="onInput"
    >
        <template
            v-for="[key,render] in Object.entries(config.slots || [])"
            v-slot:[key]
        >
            <SlotContainer
                :key="key"
                :render="render"
                :data="config.typeData"
            />
        </template>

        <ElOption
            v-for="option in config.typeData"
            :key="option.value"
            v-bind="option"
        />
        <!-- <ElOption 
            v-for="option in config.typeData()" 
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
        /> -->
    </ElSelect>
</template>

<script>

export default {
    name: 'ElFormEasyTypeInput',

    components: {
        ElSelect: () => import('element-ui/packages/select/src/select.vue'),
        ElOption: () => import('element-ui/packages/select/src/option.vue'),
        SlotContainer: ()=>import('@/components/slot-container')
    },
    
    props: {
        value: [String, Number],

        config: {
            type: Object,
            default: () => ({})
        },
    },
    computed: {
        isDisabled() {
            return item => {
                return typeof item.disabled === 'function' ? Boolean(item.disabled()) : item.disabled
            }
        }
    },

    methods: {
        onInput (val) {
            this.$emit('change', this.config.key, val)
        },
        
    }
}
</script>

<style lang="less" scoped>
// .el-form-easy-type-input {

// }
</style>
