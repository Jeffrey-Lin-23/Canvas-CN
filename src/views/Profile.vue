<template>
  <div class="profile_container">
    <div class="top_container">
      
      <h4 style="left: 1.5%; top:10px; position: relative;"><i class="large bars icon " style="cursor: pointer;" @click="toggle"></i>
        &nbsp; &nbsp;&nbsp;张三的账号</h4>
      <hr />
      <button class="ui button" style="float: right;">更改资料</button>
    </div>
    <div class="left_menu" v-if="menuActive">
      <div class="ui secondary vertical pointing menu">
        <a class="item ">
          通知
        </a>
        <a class="item active">
          账号信息
        </a>
        <a class="item">
          文件
        </a>
        <a class="item">
          ePortfolios
        </a>
        <a class="item ">
          设定
        </a>
      </div>
    </div>
    <div class="right_container">
      <img src="../assets/img/profile1.jpg" width="150" height="150">
      <div class="right_content">
        <h1>张希尧</h1>
        
        <h3>基本资料</h3>
        <h4>生日: 1994年12月1日</h4>
        <h4>民族: 汉</h4>
        <h4>入学日期：2020年9月</h4>
        <h4>联系方式： zhangsan@school.edu.cn</h4>
        <h3>自我介绍</h3>
        <h4>该生尚未留下自我介绍</h4>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
    data(){
      return {
        menuActive:true,
      };
    },
    methods:{
      toggle(){
        this.menuActive = !this.menuActive; 
      }
    }
  };
</script>
<style scoped>
.profile_container {
  width: 100%;
}
.top_container{
  top: 3px;
  left: 1%;
  position: absolute;
  width: 70%;
  height: 5%;
}
.left_menu{
  width: 20%;
  left: 1%;
  top: 10%;
  position: absolute;
}
.right_container{
  top: 10%;
  left: 20%;
  position: absolute;
  width: 40%;
}
.right_content{
  left: 30%;
  top: 0;
  z-index: 1;
  position: absolute;
}
</style>
