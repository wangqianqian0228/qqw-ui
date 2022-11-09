<!--  -->
<template>
  <table>
    <thead>
      <tr>
        <th v-for="(col, index) in columns" :key="index">
          {{ col.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <!-- tr:是有几行 -->
      <tr v-for="(row,rowIndex) in data" :key="rowIndex">
        <td v-for="(col,index) in columns" :key="index">
          <!-- render函数进行渲染 -->
          <template v-if="'render' in col">
            <Render :row="row"
              :column="col"
              :index="rowIndex"
              :render="col.render"
              :that="context"></Render>
          </template>
          <!-- 插槽渲染 -->
          <template v-else-if="'slot' in col">
            <slot :row="row" :column="col" :index="rowIndex" :name="col.slot"></slot>
          </template>
          <!-- 默认展示 -->
          <template v-else>
            {{row[col.key]}}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from './render'
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
    return {
      context: this,
      editIndex: -1
    };
  },

  components: {Render},

  computed: {},

  mounted() {},

  methods: {},
};
</script>
<style lang="less"></style>
