<!--  -->
<template>
  <table>
    <thead>
      <!-- tr:行 -->
      <tr>
        <th v-for="(col, index) in columns" :key="index">{{ col.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, rowIndex) in data" :key="rowIndex">
        <td v-for="(col, index) in columns" :key="index">
          <template v-if="col.render">
            <Render
              :row="row"
              :column="col"
              :index="rowIndex"
              :render="col.render"
              :that="context"
            ></Render>
          </template>
          <template v-else>
            {{ row[col.key] }}
          </template>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import Render from "./render";
export default {
  name: "qqw-table",
  inheritAttrs: false,
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
      editName: "", // 第一列输入框
      editAge: "", // 第二列输入框
      editBirthday: "", // 第三列输入框
      editAddress: "", // 第四列输入框
      editIndex: -1, // 当前编辑的行数
    };
  },

  components: {
    Render,
  },

  computed: {},

  mounted() {
    console.log("111", this.$attrs);
  },

  methods: {},
};
</script>
<style lang="scss">
table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  empty-cells: show;
  border: 1px solid #e9e9e9;
}
table th {
  background: #f7f7f7;
  color: #5c6b77;
  font-weight: 600;
  white-space: nowrap;
}
table td,
table th {
  padding: 8px 16px;
  border: 1px solid #e9e9e9;
  text-align: left;
}
</style>
