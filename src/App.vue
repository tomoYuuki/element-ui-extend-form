<template>
    <div id="app">
        <ElFormEasy
            ref="form"
            v-model="formData"
            :config="formConfig"
            @change="onChange"
        />

        <ElButton @click="onSubmit">提交</ElButton>
    </div>
</template>

<script>
export default {
    name: 'App',

    data() {
        return {
            formData: {},
            formConfig: [
                {
                    label: '姓名',
                    key: 'name',
                    type: 'input',
                    // props: {
                    //     disabled: true
                    // },
                    rules: [
                        { required: true }
                    ]
                }
            ]
        }
    },

    methods: {
        onChange(formData) {
            console.log(formData)
        },

        onSubmit() {
            this.$refs.form.validate((valid) => {
                console.log('valid', valid)
            })
        }
    }
}
</script>

<style lang="less"></style>
