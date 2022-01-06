<template>
  <div id="app">
  <h3>普通button</h3>

    <qqw-button>按钮default</qqw-button>
    <qqw-button type="primary">按钮primary</qqw-button>
    <qqw-button type="success">按钮success</qqw-button>
    <qqw-button type="warning">按钮warning</qqw-button>
    <qqw-button type="danger">按钮danger</qqw-button>
    <qqw-button type="info">按钮info</qqw-button>
    <!-- <qqw-icon icon="sousuo"></qqw-icon> -->
  <h3>带icon的button</h3>
    <qqw-button type="danger" icon="lianjie" icon-position="right"> 包含icon的按钮 </qqw-button>
    <qqw-button type="primary" icon="sousuo">  </qqw-button>
  <!-- 带loading状态下的button -->
  <h3>带loading状态下的button</h3>

  <qqw-button 
    type="primary" 
    icon="loading" 
    loading
    @handleClick="handleClick">
    111
  </qqw-button>

  <!-- 按钮组 -->
  <h3>按钮组</h3>
  <qqw-button-group>
    <qqw-button type="primary" icon="xiangzuojiantou"> 上一页</qqw-button>
    <qqw-button type="primary" > 中间页</qqw-button>
    <!-- <qqw-button type="primary" > 中间页</qqw-button> -->

    
    <qqw-button 
      type="primary" 
      icon="xiangyoujiantou" 
      icon-position="right">下一页</qqw-button>
  </qqw-button-group>

  <h3>布局组件</h3>
  <qqw-col :gutter="20"  class="container">
    <qqw-row :span="6">
      <div class="red">111</div>
    </qqw-row>
    <qqw-row :span="6" >
      <div class="green">
        222
      </div>
    </qqw-row>
    <qqw-row :span="6">
      <div class="red">333</div>
    </qqw-row>
    <qqw-row :span="6" >
      <div class="green">
        444
      </div>
    </qqw-row>
  </qqw-col>
  <h3>布局组件对齐</h3>
  <qqw-col justify="space-between">
    <qqw-row :span="6">
      <div class="red">111</div>
    </qqw-row>
    <qqw-row :span="6"><div class="green">222</div></qqw-row>

  </qqw-col>
  </div>
</template>
<script>
export default{
  methods:{
    handleClick(e){
      console.log(e.target.innerText)
    }
  },
  mounted(){
    console.log(111111)
  }
}
</script>

<style lang="scss">
.red{
  background: red;
}
.green{
  background: green;
}
.container{
  width: 80%;
  margin: 0 auto;
}
</style>
