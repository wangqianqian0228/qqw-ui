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
    <!-- 
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
    </div> -->

    <!-- <div>
      <qqw-checkbox v-model="single">选项 1</qqw-checkbox>
    </div> -->

    <!-- <div>
      <h3>动态渲染 .vue 文件的组件—— Display</h3>
      <qqw-display :code="code"></qqw-display>
    </div> -->

    <!-- <div>
      <qqw-button type="primary" @click="showFirstAlert"
        >显示第一个提示框</qqw-button
      >
      <qqw-button type="primary" @click="showSecondAlert"
        >显示第二个提示框</qqw-button
      >
    </div> -->

    <div>
      <qqw-table :columns="columnsArr" :data="dataArr"></qqw-table>
    </div>
    <div>
      <qqw-table-slot :columns="columnsSlot" :data="dataSlot"> 
        <template v-slot:name="{row,index}">
          <!-- <input type="text"> -->
          <span>{{row.name}}</span>
        </template>
        <template v-slot:age="{row,index}">
          <!-- <input type="text"> -->
          <span>{{row.age}}</span>
        </template>

        <template v-slot:birthday="{row,index}">
          <!-- <input type="text"> -->
          <span>{{row.birthday}}</span>
        </template>

        <template v-slot:address="{row,index}">
          <!-- <input type="text"> -->
          <span>{{row.address}}</span>
        </template>

        <template v-slot:action="{index}">
          <!-- <input type="text"> -->
          
          <div v-if="index !== editIndex">
            <button>编辑</button>
          </div>
          <div v-else>
            <button>保存</button>
            <button>取消</button>
          </div>
        </template>
      </qqw-table-slot>
    </div>
    <!-- <div class="swiper-container">
     <Swiper :options="swiperOption">
      <SwiperSlide><img src="https://images.shobserver.com/news/690_390/2018/8/17/95466c97-3c83-4ee4-9d67-987f3f576925.jpg" alt="" style="height:200px"></SwiperSlide>
      <SwiperSlide><img src="https://images.shobserver.com/export_img/2022/11/5/b5ddfe6c-3dd7-44fe-9013-72b96dd6dea6.jpg" alt="" style="height:200px"></SwiperSlide>
      <SwiperSlide><img src="https://images.shobserver.com/export_img/2022/11/5/01e1554d-5083-46ec-bbd3-7f908d97b3c9.jpg" alt="" style="height:200px"></SwiperSlide>

     </Swiper>
    </div> -->
  </div>
</template>
<script>
import grandParent from "./views/components/grandParent.vue";
import FormItem from "./packages/form/form-item.vue";
import Display from "./views/components/qqw-display.vue";
import defaultCode from "./utils/defaultcode";
import table from "./packages/table/table.vue";
import TableSlot from "./packages/table/table-slot.vue";
import { columns, data } from "./packages/table/data";
import { columnsSlot, dataSlot } from "./packages/table/data.slot";
// import Swiper from "swiper/js/swiper";
import {
  Swiper,
  SwiperSlide,
} from "vue-awesome-swiper/dist/vue-awesome-swiper";
import "swiper/css/swiper.min.css";
export default {
  data() {
    return {
      imgList: [],
      swiperOption: {
        direction: "horizontal", // 滑动的方向(水平方向)
        loop: true, // 是否循环
        autoplay: {
          delay: 3000, // 自动播放的时长
        },
        slidesPerView: 3, // 设置可视区一共显示几张图片,设置auto,设置auto为自适应;
        centeredSlides: true, // 设置为true时,带有active-slide类名的图片会居中
        // spaceBetween: 4, //  每张图片之间的间隔
      },
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
      columnsArr: columns,
      dataArr: data,
      columnsSlot: columnsSlot,
      dataSlot: dataSlot,
      editIndex: -1
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
    // console.log("swiper", Swiper);
  },
  components: {
    grandParent,
    "qqw-form-item": FormItem,
    "qqw-display": Display,
    "qqw-table": table,
    "qqw-table-slot": TableSlot,
    Swiper,
    SwiperSlide,
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
.swiper-wrapper {
  // display:flex
}
.swiper-slide {
  transition: 300ms;
  transform: scale(0.8);
  height: 200px;
  // border: 1px solid;
  img {
    width: 100%;
    height: 100%;
  }
}
.swiper-slide-active {
  transform: scale(1);
}
// 如果想要两边的图片显示时缩小加上一下css代码
// 默认中间的图片会带有类名 : .swiper-slide-acive;
// 默认中间的图片的上一张图片会带有类 名:  .swiper-slide-prev ;
// 默认中间的图片的下一张会带有类名: .swiper-slide-next ;.
// .swiper-slide-active {
//   transform: scale(1.2);
// }
// .swiper-slide-next{
//   transform: scale(.8);
// }
// .swiper-slide-prev{
//   transform: scale(.8);
// }
</style>
