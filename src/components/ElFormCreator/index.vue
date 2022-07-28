<template>
  <el-form
    ref="form"
    :model="formData"
    :rules="rules"
    label-width="120px"
    style="margin-top: 20px"
  >
    <div v-for="(item, index) in fieldList" :key="index">
      <el-col :span="item.col ? item.col : 24">
        <el-form-item
          v-if="isShow(item)"
          :prop="item.key"
          :rules="item.rules"
          :label="item.label"
          :required="item.required"
        >
          <!-- 自定义label  -->
          <template #label>
            <span>
              {{ item.label }}
            </span>
            <span v-if="item.hint">
              <el-popover
                placement="top-start"
                title="提示"
                width="300"
                trigger="hover"
                :content="item.hint"
              >
                <i slot="reference" class="el-icon-question" />
              </el-popover>
            </span>
          </template>
          <!-- @change主要是做一个赋值操作 -->
          <component
            :is="compChildName(item)"
            :item="item"
            :value="formData[item.key]"
            v-bind="{ ...item.props }"
            v-on="{ ...item.events }"
            @input="(value) => onInput(item.key, value)"
            @change="(value) => onChange(item.key, value)"
          />
        </el-form-item>
      </el-col>
    </div>

    <!-- 按钮组 -->
    <div class="center" style="margin-bottom: 20px">
      <el-button
        v-for="(buttonItem, index) in operatorList"
        :key="index"
        :type="buttonItem.type"
        :icon="buttonItem.icon"
        class="btn"
        @click="buttonItem.func"
      >
        {{ buttonItem.label }}
      </el-button>
    </div>
  </el-form>
</template>
<script>
import FormInput from '@/components/ElFormCreator/FormInput/index'
import FormSelect from '@/components/ElFormCreator/FormSelect/index'

export default {
  name: 'ElFormCreator',
  components: {
    FormInput,
    FormSelect
  },
  props: {
    formData: {
      type: Object,
      default: () => {}
    },
    fieldList: {
      type: Array,
      default: () => []
    },
    operatorList: {
      type: Array,
      default: () => []
    },
    rules: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {}
  },
  computed: {
    compChildName() {
      return (item) => {
        const name = {
          input: 'FormInput',
          select: 'FormSelect'
        }[item.type]
        return name
      }
    },
    isShow() {
      return (item) => {
        if (typeof item.display === 'boolean') {
          return item.display
        } else if (typeof item.display === 'function') {
          return item.display()
        } else {
          return true
        }
      }
    }
  },
  watch: {},
  created() {},
  mounted() {},
  beforeDestroy() {},
  methods: {
    onChange(key, value) {
      this.$set(this.formData, key, value)
      this.$forceUpdate()
    },
    onInput(key, value) {
      this.$set(this.formData, key, value)
      this.$forceUpdate()
    },
    // 校验
    validate() {
      return new Promise((resolve, reject) => {
        this.$refs.form.validate((valid) => {
          if (valid) {
            resolve({
              valid,
              formData: this.formData
            })
          } else {
            reject({
              valid,
              formData: null
            })
          }
        })
      })
    }
  }
}
</script>
<style lang="less" scoped>
.center {
  text-align: center;
}
</style>
