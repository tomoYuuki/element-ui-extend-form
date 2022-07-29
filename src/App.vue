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
                    ],
                    slots: {
                        'prefix':() => {
                            return this.ImageContainerExample()
                        },
                        'suffix':() => {
                            return this.ImageContainerExample()
                        },
                    }
                },
                {
                    label: '爱好',
                    key: 'hobbies',
                    type: 'select',
                    typeData: () => {
                        return [{value:1,label:'唱'},{value:2,label:'跳'},{value:3,label:'RAP',disabled:true}]
                    },
                    on: {
                        change(val) {
                            console.log(val)
                        }
                    },
                    slots: {
                        'default': (h, options) => {
                        
                            return <div>
                                {
                                    options.map(option => {
                                        return <el-option  key={option.value}  value={option.value} label={'我喜欢'+option.label}></el-option>
                                    })
                                }
                            </div>
                        },
                        // 'prefix': () => { 
                        //     return this.TextContainerExample()
                        // }
                    }
                },
                {
                    label: '自定义',
                    render: () => {
                        return (
                            <span>test</span>
                        )
                    }
                }
            ]
        }
    },

    methods: {
        TextContainerExample() {
            return <span>文本</span>  
        },
        ImageContainerExample() {
            return <el-image
                style="width:40px;"
                src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
        },
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
