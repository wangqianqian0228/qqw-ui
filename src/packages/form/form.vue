<!--  -->
<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
/*
form：
props: 数据源（对象），校验规则（对象）
fileds 缓存了所有的form-item，点击提交按钮和重置按钮，遍历所有form-item，然后调用form-item里面的validate方法。
 */
export default {
  name: "qqw-form",
  provide() {
    return {
      form: this,
    };
  },
  props: {
    model: {
      type: Object,
      default: () => {},
    },
    rules: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      fileds: [], // 用来缓存所有的form-item
    };
  },

  components: {},

  computed: {},
  created() {
    // 这里要注意一个细节，就是子组件的mouted先执行，再去执行父组件的mouted，所以父组件绑定$on事件的时候，不能写在mouted里面，要写在created里面。
    this.$on("on-form-item-add", function (filed) {
      this.fileds.push(filed);
    });
    this.$on("on-form-item-remove", function (filed) {
      this.fileds.splice(this.fileds.indexOf(filed), 1);
    });
    console.log("fileds", this.fileds);
  },
  mounted() {},

  methods: {
    // 表单的校验
    validate(callback) {
      let valid = false;
      let count = 0;
      return new Promise((resolve) => {
        // 让form-item逐个校验
        this.fileds.forEach((field) => {
          field.validate("", (errors='') => {
            if (errors) {
              //errors: 校验错误的信息
              valid = true;
              resolve([valid,errors]);
            }
            if (++count === this.fileds.length) {
              resolve([false,'']);
              if (typeof callback === "function") {
                callback(valid);
              }
            }
          });
        });
      });
    },
    // 重置表单
    resetFields(){
      this.fileds.forEach((filed)=>{
        filed.resetField()
      })
    }
  },
};
</script>
<style lang="less"></style>
