<!--  -->
<template>
  <div class="parent">
    这是父组件
    <div>
      <son></son>
      <son1></son1>
      </div>
  </div>
</template>

<script>
import son from "./son.vue";
import son1 from "./son1.vue";
import {findComponentDownward} from '@/utils/assist'

export default {
  name: "parent",
  data() {
    return {
      name: "sss",
    };
  },

  components: { son, son1 },

  computed: {},

  mounted() {
    const child = findComponentDownward(this,'grandson1')
    // console.log('findComponentDownward',child)
  },

  methods: {
    testParent() {
      alert("i am parent");
    },
  },
};
</script>
<style lang="scss">
.parent {
  background: red;
}
</style>
