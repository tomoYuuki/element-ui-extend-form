<template>
    <div id="app">
        <ElFormEasy
            ref="form"
            v-model="formData"
            :config="formConfig"
            :form-col-layout="formColLayout"
            @change="onChange"
        />
        <ElButton @click="onSubmit">
            提交
        </ElButton>
    </div>
</template>

<script>


export default {
    name: 'App',

    data() {
        return {
            counter: 1,
            formData: {
                name: ''
            },
            ajaxHobbies: [],
            formColLayout: {
                span: 24,
                // xl: 6, // >1920px 4个
                // lg: 8,
                // md: 12,
                // sm: 24,
                // xs: 24
            },
            formConfig: [
                {
                    label: '性别',
                    key: 'sex',
                    type: 'radio',
                    // props: {
                    //     disabled: true
                    // },
                    rules: [
                        { required: true }
                    ]
                },
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
                        'prefix': () => {
                            return this.ImageContainerExample()
                        },
                        'suffix': () => {
                            return this.ImageContainerExample()
                        },
                    }
                },
                {
                    label: '爱好',
                    key: 'hobbies',
                    type: 'select',
                    props: {
                    },
                    // disabled: () => {
                    //     return this.counter >  0 
                    // },
                    isDisabled: false,
                    isHidden: false,
                    typeData: [{ value: 1, label: '唱' }],
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
                                        return <el-option key={option.value} value={option.value} label={'我喜欢' + option.label}></el-option>
                                    })
                                }
                            </div>
                        },
                        // 'prefix': () => { 
                        //     return this.TextContainerExample()
                        // }
                    }
                },
                // {
                //     label: '自定义',
                //     render: () => {
                //         return (
                //             <span>test</span>
                //         )
                //     }
                // }
            ]
        }
    },
    mounted() {
        // 调用ajax
        this.queryHobbies()
        // 一些业务代码
        const hobbiesItem = this.formConfig.find(item => item.key == 'hobbies')
        hobbiesItem.isHidden = false
    },
    methods: {
        queryHobbies() {
            setTimeout(() => {
                this.ajaxHobbies = [{ value: 1, label: '唱' }, { value: 2, label: '跳' }, { value: 3, label: 'RAP', disabled: true }]
                // 一些业务代码
                const hobbiesItem = this.formConfig.find(item => item.key == 'hobbies')
                hobbiesItem.typeData = [...this.ajaxHobbies]
                // hobbiesItem.isDisabled =true
            }, 1000);


        },
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
