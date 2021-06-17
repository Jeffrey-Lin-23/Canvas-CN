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
          <span style="color: gray;">2020上学期</span> &gt; 课程
        </h4>
        <hr />
      </div>
      <div class="left_menu" v-if="menuActive">
        <div class="ui secondary vertical pointing menu">
          <router-link class="item " to="/student/31025"> 首页</router-link>
  
          <router-link class="item " to="/student/31025/outline">
            大纲
          </router-link>
          <router-link class="item active" to="/student/31025/module">
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
        <h1>课程</h1> 
        <hr />

        <div class="ui icon input" style="position: absolute;left: 75%;top:0%;">
          <input type="text" placeholder="搜寻课程"  />
          <i class="search icon"></i>
        </div>
        <ul>
            <li :key="item.title" v-for="item in modules"><module-list :title="item.title" :contents="item.contents"></module-list></li>
            
        </ul>
      </div>
    </div>
  </template>
  <script>
    import ModuleList from  "../components/ModuleList.vue";
  export default {
    components: { ModuleList},
    data() {
      return {
        menuActive: true,
        modules:[{
            title:'基础介绍',
            contents:["课程简介"],
        },{
            title:'课程1: 网络编程的基础认识',
            contents:["Html的历史","Html常用元素","DOM文件结构"],
        },{
            title:'课程2:样式表的引入',
            contents:["什么是CSS","Css常用语法"],
        },{
            title:'课程3:网站的基础交互',
            contents:["Javascript基础介绍","练习1:控制表单"],
        },{
            title:'小测一',
            contents:["小测:网络构成基础",],
        },
        {
            title:'课程4:网站的异步处理',
            contents:["异步处理常见方式","Ajax 概念介绍","Jquery的文件控制"],
        }
    ],
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
    width: 100%;
    margin: 0;
    padding: 0;
    top: 13%;
    position: absolute;
  }
 ul li {
  width: 100%;
  margin-bottom: 2rem;
}
  </style>
  