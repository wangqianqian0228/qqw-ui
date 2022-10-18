<!--  -->
<template>
  <div>
    <label v-if="label" style="margin-right: 15px">{{ label }}:</label>
    <slot></slot>
    <div>{{validateMessage}}</div>
  </div>
</template>

<script>
/*
form-item：
props: label: 标签文本;
       prop: 对应form里面的model里面的属性
form-item只能对某一个表单进行校验，不能对所有表单进行校验，而进行全部校验功能需要在form中去完成。
 */
import emitter from "@/utils/emmiter";
import Schema from "async-validator";
export default {
  inject: ["form"],
  name: "qqw-form-item",
  mixins: [emitter],
  props: {
    label: {
      type: String,
      default: "",
    },
    prop: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      // 校验状态
      validateState: "",
      // 校验未通过message
      validateMessage: "",
    };
  },

  components: {},

  computed: {
    // 获取当前form-item要绑定的model数据
    fieldValue() {
      return this.form.model[this.prop];
    },
  },
  created() {
    this.setRules();
  },
  mounted() {
    if (this.prop) {
      this.dispatch("qqw-form", "on-form-item-add", this);
    }
  },
  destroyed() {
    if (this.prop) {
      this.dispatch("qqw-form", "on-form-item-remove", this);
    }
  },

  methods: {
    setRules() {
      // 怎么写哪个属性对应的哪条规则呢？
      this.$on("on-form-change", this.onFiledChange);
      this.$on("on-form-blur", this.onFiledBlur);
    },
    // 获取校验规则：为啥不用computed属性？
    getRules() {
      return this.form.rules[this.prop]; // 返回值为数组
    },
    // 输入框改变事件，根据prop来判断对哪个属性进行校验
    onFiledChange() {
      // console.log(111,this.fieldValue)
      this.validate("change");
    },
    // 失去焦点事件
    onFiledBlur() {
      this.validate("blur");
    },
    //
    /**
     * 校验数据
     * @params trigger 校验类型
     * @params callback 回调函数
     */
    validate(trigger, callback = function () {}) {
      this.validateState = "validating";
      const descriptor = {};
      descriptor[this.prop] = this.getRules();
      const validator = new Schema(descriptor);
      // console.log("descriptor", descriptor);
      const model = {};
      model[this.prop] = this.fieldValue;
      /**
       * @params source 要验证的对象
       * @params [options] 要处理的选项（对象）可选
       * @params callback 验证完成时的回调函数
       */
      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = errors ? "error" : "success";
        this.validateMessage = errors ? errors[0].message : "";
      });
      callback(this.validateMessage)
    },
    resetField(){
      this.form.model[this.prop] = '' // 可以自定义初始值
    }
  },
};
</script>
<style lang="less"></style>
