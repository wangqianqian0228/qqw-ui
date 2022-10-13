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
      fileds: [],
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

  methods: {},
};
</script>
<style lang="less"></style>
