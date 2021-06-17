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
        <span style="color: gray;">2020上学期</span> &gt; 作业
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
        <router-link class="item active" to="/student/31025/assignment">
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
      <h1>作业</h1>
      <hr />
      <div class="ui icon input" style="position: absolute;left: 75%;top:0%;">
        <input type="text" placeholder="搜寻作业"  />
        <i class="search icon"></i>
      </div>
      <div class="module">
        <div class="header" @click="expand"><p ><i :class="assActive ? 'caret down' : 'caret up'
        " class=" icon"></i>未完成作业</p></div>
        <ul v-if="assActive">
          
          <li><i class="large clipboard outline icon"></i>
            <div class="ass_title"><a href="#">作业二:租赁平台搭建 (使用Vue.js)</a></div>
            <div class="ass_description">Open &nbsp;|&nbsp;
                Due Jan 10 at 23:59  &nbsp;|&nbsp;
                - / 50 pts</div></li>
        </ul>
      </div>
      <br/>
      <div class="module">
        <div class="header" @click="comExpand"><p ><i :class="assActive ? 'caret down' : 'caret up'
        " class=" icon"></i>已完成作业</p></div>
        <ul v-if="comActive">
          <li>
            <i class="large clipboard outline icon"></i>
            <div class="ass_title"><a href="#">作业一:小型商业网站搭建</a></div>
            <div class="ass_description">Closed &nbsp;|&nbsp;
                Due Dec 10 at 23:59  &nbsp;|&nbsp;
                28 / 30 pts</div>
          </li>
         
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuActive: true,
      assActive:true,
      comActive:true,
    };
  },
  methods: {
    toggle() {
      this.menuActive = !this.menuActive;
    },expand(){
      this.assActive = !this.assActive;  
    },comExpand(){
      this.comActive = !this.comActive;
    }
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
br{
  margin-bottom: 2rem;
}
.module {
  padding: 0;
  margin: 2rem, 0;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.26);
}
.module .header {
  width: 100%;
  height: 40px;
  background-color: rgb(250, 250, 250);
  cursor: pointer;
}
.module .header p {
  line-height: 40px;
  margin-left: 1rem;
  font-weight: bold;
}
.module ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
.module ul li {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
}
.module ul li:hover {
  background-color: rgb(240, 255, 251);
}
.module ul li i {
  line-height: 60px;
  margin-left: 1rem;
}
.ass_title {
  position: relative;
  left: 5%;
  top: -5px;
  font-weight: bold;
  font: large;
}
.ass_description{
 position: relative;
  left: 5%;
  top: -7px;
  font-size: 10px;
  color: gray;
}
</style>
