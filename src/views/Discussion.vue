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
          <span style="color: gray;">2020上学期</span> &gt; 讨论
        </h4>
        <hr />
      </div>
      <div class="left_menu" v-if="menuActive">
        <div class="ui secondary vertical pointing menu">
          <router-link class="item " to="/student/31025"> 首页</router-link>
  
          <router-link class="item " to="/student/31025/outline">
            大纲
          </router-link>
          <router-link class="item " to="/student/31025/module">
            课程
          </router-link>
          <router-link class="item " to="/student/31025/assignment">
            作业
          </router-link>
          <router-link class="item active" to="/student/31025/discussion">
            讨论
          </router-link>
          <router-link class="item " to="/student/31025/mark">
            成绩
          </router-link>
        </div>
      </div>
      <div class="right_container">
        <h1>讨论区</h1>
        <hr />

        <div class="ui icon input" style="position: absolute;left: 42%;top:0%; width: 300px;" >
          <input type="text" placeholder="搜索内容"  />
          <i class="search icon"></i>
        </div>
        <div class="ui blue button" style="position: absolute;left: 79.5%;top:0%; width: 120px; padding: 12px;" >
          <i class=" plus icon"></i> 新增讨论
        </div>
        <button class="ui basic icon button" style="position: absolute;left: 95%;top:0%; padding: 12px;" ><i class="cog icon"></i></button>
        <ul>
          <li><discussion-card title="小测一讨论" repNo="15" time="2021-01-10" day="10天前"></discussion-card></li>
          <li><discussion-card title="作业一分组" repNo="7" time="2021-01-01" day="19天前"></discussion-card></li>
          <li><discussion-card title="课堂讨论" repNo="35" time="2020-12-28" day="23天前"></discussion-card></li>
        </ul>
        
      </div>
    </div>
  </template>
  <script>
    import DiscussionCard from  "../components/disscusionCard.vue";
  export default {
    components: {DiscussionCard},
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
  ul{
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }
  ul li{
    height: 110px;
    width: 100%;
    border: 1px solid rgb(189, 189, 189);
    margin-bottom: 1rem;
    box-shadow: 5px 5px 5px #888888;
  }
  </style>
  