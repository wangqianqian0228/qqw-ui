<!--  -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col,index) in columns" :key="index">
            {{col.title}}
        </th>
      </tr>
    </thead>
  </table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    data: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less"></style>
