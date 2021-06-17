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
          <span style="color: gray;">2020上学期</span> &gt; 成绩
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
          <router-link class="item " to="/student/31025/discussion">
            讨论
          </router-link>
          <router-link class="item active" to="/student/31025/mark">
            成绩
          </router-link>
        </div>
      </div>
      <div class="right_container">
        <h1>成绩</h1>
        <hr />
        <div class="lf_drop">
          <div>
            <h4>课程</h4>
            <div class="ui basic dropdown button" style="width: 300px;">
              <div class="text"> 31025- 网络编程与实践</div>
              <i class="dropdown icon" style="float: right;"></i>
            </div>
          </div>
          <div>
            <h4>排序</h4>
            <div class="ui basic dropdown button" style="width: 300px;">
              <div class="text">截止日期</div>
              <i class="dropdown icon" style="float: right;"></i>
            </div>
          </div>
          <div>
            <h4>&nbsp;</h4>
            <div class="ui blue button" style="width: 100px;">
              <div class="text">应用</div>
              
            </div>
          </div>
        </div>
        
        <table class="ui very basic table">
            <thead>
              <tr>
                <th>项目</th>
                <th>状态</th>
                <th>分数</th>
                <th>截止日期</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>小测一</td>
                <td><span style="color:#336699;">已完成</span></td>
                <td>8/10</td>
                <td>2020-11-30</td>
              </tr>
              <tr>
                <td>作业一</td>
                <td><span style="color:#cc3333">未完成</span></td>
                <td>-/30</td>
                <td>2020-12-20</td>
              </tr>
              <tr>
                <td>小测二</td>
                <td>未开放</td>
                <td>-/10</td>
                <td>2020-12-21</td>
              </tr>
              <tr>
                <td>作业二</td>
                <td>未开放</td>
                <td>-/50</td>
                <td>2021-01-10</td>
              </tr>
            </tbody>
          </table>
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
    .lf_drop{
      display: flex;
      flex-direction: row;
    }
    .lf_drop h4{
      margin: 1rem 0 5px 0;
    }
    .button{
      margin: 0 10px 1rem 0;
    }
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
  </style>
  