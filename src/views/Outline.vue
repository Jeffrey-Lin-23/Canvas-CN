<template>
  <div class="course_container">
    <div class="top_container">
      <h4 style="left: 1.5%; top:10px; position: relative;">
        <i
          class="large bars icon "
          style="cursor: pointer;"
          @click="toggle"
        ></i>
        &nbsp; &nbsp;&nbsp;31025 网络编程与实践 -
        <span style="color: gray;">2020上学期</span> &gt; 大纲
      </h4>
      <hr />
    </div>
    <div class="left_menu" v-if="menuActive">
      <div class="ui secondary vertical pointing menu">
        <router-link class="item " to="/student/31025"> 首页</router-link>

        <router-link class="item active" to="/student/31025/outline">
          大纲
        </router-link>
        <router-link class="item" to="/student/31025/module">
          课程
        </router-link>
        <router-link class="item" to="/student/31025/assignment">
          作业
        </router-link>
        <router-link class="item " to="/student/31025/discussion">
          讨论
        </router-link>
        <router-link class="item " to="/student/31025/mark">
          成绩
        </router-link>
      </div>
    </div>
    <div class="right_container">
      <h1>课程大纲</h1>
      <hr />
      <p>请点击下方链接下载对应文件：</p>
        <ul class="file_con">
            <li><a href="#">31025-网络编程与实践-课程目标.pdf</a></li>
            <li><a href="#">31025-网络编程与实践-课程安排.pdf</a></li>
            <li><a href="#">31025-网络编程与实践-作业说明.pdf</a></li>
        </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuActive: true,
    };
  },
  methods: {
    toggle() {
      this.menuActive = !this.menuActive;
    },
  },
};
</script>
<style scoped>
.course_container {
  width: 100%;
}
.top_container {
  top: 3px;
  left: 1%;
  position: absolute;
  width: 80%;
  height: 5%;
}
.left_menu {
  width: 20%;
  left: 1%;
  top: 10%;
  position: absolute;
}
.right_container {
  top: 10%;
  left: 20%;
  position: absolute;
  width: 60%;
  height: 90%;
}
.file_con{
  
  list-style: none;
  margin: 0;
  padding: 0;
}
.file_con>li{
  border: solid 1px #000;
  padding: 10px;
  margin-bottom: 10px;
  list-style: inside;
}
</style>
