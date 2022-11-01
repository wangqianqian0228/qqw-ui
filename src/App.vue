<template>
  <div id="app">
    <!--  <div>
      <h3>普通button</h3>
      <qqw-button>按钮default</qqw-button>
      <qqw-button type="primary">按钮primary</qqw-button>
      <qqw-button type="success">按钮success</qqw-button>
      <qqw-button type="warning">按钮warning</qqw-button>
      <qqw-button type="danger">按钮danger</qqw-button>
      <qqw-button type="info">按钮info</qqw-button>
      <h3>带icon的button</h3>
      <qqw-button type="danger" icon="lianjie" icon-position="right">
        包含icon的按钮
      </qqw-button>
      <qqw-button type="primary" icon="sousuo"> </qqw-button>
      <h3>带loading状态下的button</h3>
      <qqw-button
        type="primary"
        icon="loading"
        loading
        @handleClick="handleClick"
      >
        111
      </qqw-button>
    </div> -->
    <!-- <div>
      <h3>按钮组</h3>
      <qqw-button-group>
        <qqw-button type="primary" icon="xiangzuojiantou"> 上一页</qqw-button>
        <qqw-button type="primary"> 中间页</qqw-button>
        <qqw-button type="primary" icon="xiangyoujiantou" icon-position="right"
          >下一页</qqw-button
        >
      </qqw-button-group>
    </div> -->
    <!--  <div>
      <h3>布局组件</h3>
      <qqw-col :gutter="20" class="container">
        <qqw-row :span="6">
          <div class="red">111</div>
        </qqw-row>
        <qqw-row :span="6">
          <div class="green">222</div>
        </qqw-row>
        <qqw-row :span="6">
          <div class="red">333</div>
        </qqw-row>
        <qqw-row :span="6">
          <div class="green">444</div>
        </qqw-row>
      </qqw-col>
      <h3>布局组件对齐</h3>
      <qqw-col justify="space-between">
        <qqw-row :span="6">
          <div class="red">111</div>
        </qqw-row>
        <qqw-row :span="6"><div class="green">222</div></qqw-row>
      </qqw-col>
    </div> -->
    <!-- <qqw-button type="primary" @click="visible=true">点击显示弹框</qqw-button>
    
    <qqw-dialog title="温馨提示" :visible.sync="visible" >
      122324324
      <template v-slot:footer>
        <qqw-button @click="visible=false">取消</qqw-button>
        <qqw-button type="primary" @click="visible=false">确定</qqw-button>
      </template>
    </qqw-dialog> -->
    <!--  v-model是一个语法糖： 
   <input v-model="name" placeholder="请输入姓名"></input>
   等价于:
    <input :value="name" @input="name=$event.target.value" placeholder="请输入姓名"></input> 
    name=$event.target.value 把文本框的值赋值给name
    -->
    <!-- <qqw-input 
    v-model="name" 
    placeholder="请输入姓名"
    clearable   
    ></qqw-input>
    <qqw-input v-model="password" type="password" placeholder="请输入密码" showPassChange></qqw-input>
 -->
    <!--  <qqw-switch
      v-model="active"
      activeColor="red"
      inactiveColor="green"
    ></qqw-switch>
    <qqw-switch v-model="active"></qqw-switch>
    <div>
      <grandParent></grandParent>
    </div> -->

    <div>
      <qqw-form :model="formValidate" :rules="ruleValidate" ref="form">
        <qqw-form-item label="姓名" prop="name">
          <qqw-input v-model="formValidate.name"></qqw-input>
        </qqw-form-item>
        <qqw-form-item label="邮箱" prop="mail">
          <qqw-input v-model="formValidate.mail"></qqw-input>
        </qqw-form-item>
      </qqw-form>
      <qqw-button type="primary" @click="handleSubmit">提交</qqw-button>
      <qqw-button type="primary" @click="handleReset">重置</qqw-button>
    </div>

    <!-- <div>
      <qqw-checkbox v-model="single">选项 1</qqw-checkbox>
    </div> -->

    <!-- <div>
      <h3>动态渲染 .vue 文件的组件—— Display</h3>
      <qqw-display :code="code"></qqw-display>
    </div> -->

    <div>
      <qqw-button type="primary" @click="showFirstAlert"
        >显示第一个提示框</qqw-button
      >
      <qqw-button type="primary" @click="showSecondAlert"
        >显示第二个提示框</qqw-button
      >
    </div>
  </div>
</template>
<script>
import grandParent from "./views/components/grandParent.vue";
import FormItem from "./packages/form/form-item.vue";
import Display from "./views/components/qqw-display.vue";
import defaultCode from "./utils/defaultcode";
export default {
  data() {
    return {
      code: defaultCode,
      visible: false,
      name: "",
      password: "",
      active: false,
      // 数据源
      formValidate: {
        name: "",
        mail: "",
      },
      // 校验规则
      ruleValidate: {
        name: [{ required: true, message: "用户名不能为空", trigger: "blur" }],
        mail: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { type: "email", message: "邮箱格式不对", trigger: "blur" },
        ],
      },
      single: false,
    };
  },
  methods: {
    showFirstAlert() {
      this.$Alert.info({
        content: "aaa",
        duration: 5,
      });
    },
    showSecondAlert() {
      this.$Alert.info({
        content: "bbb",
        duration: 10,
      });
    },
    // 表单的提交
    handleSubmit() {
      const validate = this.$refs.form.validate();
      validate.then((value) => {
        console.log("提交表单", value);
        value[0] ? alert(value[1]) : alert("提交成功");
      });
    },
    // 表单的重置
    handleReset() {
      // 所有表单重置
      this.$refs.form.resetFields();
    },
    closeDialog(value) {
      this.visible = value;
    },
    pushHistory() {
      const state = {
        title: "title",
        url: "#",
      };
      window.history.pushState(state, "title", "#");
    },
  },
  mounted() {
    this.pushHistory();
  },
  components: {
    grandParent,
    "qqw-form-item": FormItem,
    "qqw-display": Display,
  },
};
</script>

<style lang="scss">
.red {
  background: red;
}
.green {
  background: green;
}
.container {
  width: 80%;
  margin: 0 auto;
}
</style>
