<template>
  <div>
    <el-form-creator
      ref="form"
      :form-data="formData"
      :field-list="fieldList"
      :operator-list="operatorList"
      :rules="rules"
    ></el-form-creator>
  </div>
</template>
<script>
import ElFormCreator from '@/components/ElFormCreator'
export default {
  name: 'form-demo',
  components: {
    ElFormCreator
  },
  props: {},
  data() {
    return {
      formData: {},
      fieldList: [
        {
          type: 'input',
          label: '名称',
          key: 'name',
          props: {
            clearable: true
          },
          events: {},
          display: true
        },

        {
          type: 'select',
          label: '性别',
          typeData: () => {
            return [
              {
                value: 1,
                label: '男'
              },
              {
                value: 2,
                label: '女'
              }
            ]
          },
          props: {
            clearable: true
          },
          key: 'sex',
          display: true
        }
      ],
      operatorList: [
        {
          type: '',
          label: '返 回',
          func: () => {
            this.$router.back()
          }
        },
        {
          type: 'primary',
          label: '提 交',
          func: this.submitForm
        }
      ],
      rules: []
    }
  },
  computed: {},
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {}
}
</script>
<style lang="less" scoped></style>
