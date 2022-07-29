<template>
    <ElSelect
        class="el-form-easy-type-input"
        :value="value"
        v-bind="config.props"
        v-on="config.on"
        @input="onInput"
    >
       <template
            v-for="[key,render] in Object.entries(config.slots)"
            v-slot:[key]
        >
            <SlotContainer
                :key="key"
                :render="render"
                :data="config.typeData()"
            />
        </template>
        <!-- <ElOption 
            v-for="option in config.typeData()" 
            :key="option.value"
            :label="option.label"
            :value="option.value"
            :disabled="option.disabled"
        /> -->
        <ElOption
            v-for="option in config.typeData()"
            :key="option.value"
            v-bind="option"
        />
      

    </ElSelect>
</template>

<script>

export default {
    name: 'el-form-easy-type-input',

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
