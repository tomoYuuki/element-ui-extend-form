<template>
    <ElForm
        ref="form"
        class="el-form-easy"
        :model="_value"
        :size="size"
        :inline="inline"
        :disabled="disabled"
        :status-icon="statusIcon"
        :show-message="showMessage"
        :inline-message="inlineMessage"
        :hide-required-asterisk="hideRequiredAsterisk"
        :validate-on-rule-change="validateOnRuleChange"
        :label-position="labelPosition"
        :label-width="labelWidth"
        :label-suffix="labelSuffix"
        @validate="onValidate"
    >
        <ElFormItem
            v-for="(cfg, cfg_i) in config"
            :key="cfg_i"
            :label="cfg.label"
            :prop="cfg.key"
            :rules="cfg.rules"
        >
            <component
                :is="cfg.render ? { render: cfg.render } : typeItems[cfg.type]"
                :value="_value[cfg.key]"
                :config="cfg"
                @change="onChange"
            />
        </ElFormItem>
    </ElForm>
</template>

<script>
// 根据传入 config 的 type 按需引入组件
const typeItems = {
    input: () => import('./type-items/input.vue'),
}

export default {
    name: 'ElFormEasy',

    components: {
        ElForm: () => import('element-ui/packages/form/src/form.vue'),
        ElFormItem: () => import('element-ui/packages/form/src/form-item.vue')
    },

    props: {
        inline: Boolean,
        disabled: Boolean,
        statusIcon: Boolean,
        showMessage: Boolean,
        inlineMessage: Boolean,
        hideRequiredAsterisk: Boolean,
        validateOnRuleChange: Boolean,
        labelPosition: String,
        labelSuffix: String,

        size: {
            type: String,
            default: 'small'
        },

        labelWidth: {
            type: String,
            default: '100px'
        },

        value: {
            type: Object,
            default: () => ({})
        },

        config: {
            type: Array,
            default: () => []
        }
    },

    data() {
        return {
            typeItems
        }
    },

    computed: {
        _value: {
            get () {
                return this.value
            },
            set (val) {
                this.$emit('input', val)
            }
        }
    },

    // mounted () {
    //     console.log(this)
    // },

    methods: {
        onChange (key, val) {
            this.$set(this._value, key, val)
        },

        onValidate (valid) {
            this.$emit('validate', valid)
        },

        validate (callback) {
            this.$refs.form.validate(callback)
        },

        validateField (props, callback) {
            this.$refs.form.validateField(props, callback)
        },

        resetFields () {
            this.$refs.form.resetFields()
        },

        clearValidate (props) {
            this.$refs.form.clearValidate(props)
        }
    }
}
</script>

<style lang="less" scoped>
// .el-form-easy {

// }
</style>
