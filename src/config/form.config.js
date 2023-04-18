// TODO: 打算将页面与配置分离，但是插槽支持jsx有问题，所以目前只是没有插槽的情况下可以做到配置分离。如果仍需要使用jsx+插槽，可以在页面内去写配置，就不要分离出来了。

function ImageContainerExample() {
    return <el-image
        style="width:40px;"
        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg" />
}


export const formColLayout ={
    span:24,
    // xl: 6, // >1920px 4个
    // lg: 8,
    // md: 12,
    // sm: 24,
    // xs: 24
}
export const formConfig = [
    {
        label: '性别',
        key: 'sex',
        type: 'radio',
        // props: {
        //     disabled: true
        // },
        rules: [
            { required: true }
        ],
        
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
                return ImageContainerExample()
            },
            'suffix':() => {
                return ImageContainerExample()
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
        isDisabled:false,
        isHidden:false,
        typeData: [{value:1,label:'唱'}],
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
    }
]