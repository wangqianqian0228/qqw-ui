<!--  -->
<template>
  <div class="son">我是第一个儿子</div>
</template>

<script>
import { findComponentUpward,findBrothersComponents } from "@/utils/assist";
export default {
  name: "son",
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {
    const component = findComponentUpward(this, "parent");
    const brothercom = findBrothersComponents(this,'son')
    // console.log("component", component.name);
    console.log('找到兄弟组件',brothercom)
  },

  methods: {},
};
</script>
<style lang="scss">
.son {
  display: inline-block;
  background: green;
}
</style>
