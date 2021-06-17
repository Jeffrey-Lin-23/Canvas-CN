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
        <span style="color: gray;">2020上学期</span>
      </h4>
      <hr />
      <div style="float: right;">
        <button class="ui basic button"><i class="bell outline icon"></i>查看所有通知</button>
    </div>
    </div>
    <div class="left_menu" v-if="menuActive">
      <div class="ui secondary vertical pointing menu">
        <router-link class="item active" to="/student/31025"> 首页</router-link>
        
        <router-link class="item " to="/student/31025/outline">
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
        <h3>最新通知</h3>
        <div class="ui relaxed divided list" style="width:80%;">
            <div class="item">
              <i class="large user circle outline middle aligned icon"></i>
              <div class="content">
                <a class="header">管理员上传了课程1</a>
                <div class="description" style="color: gray; font-size: 12px;" >更新于10分钟前</div>
              </div>
            </div>
            <div class="item">
              <i class="large user circle outline middle aligned icon"></i>
              <div class="content">
                <a class="header">管理员将作业1截至日期设置为12月31日</a>
                <div class="description" style="color: gray; font-size: 12px;">更新于22分钟前</div>
              </div>
            </div>
            <div class="item">
              <i class="large user circle outline middle aligned icon"></i>
              <div class="content">
                <a class="header">管理员开放了新的讨论组</a>
                <div class="description" style="color: gray; font-size: 12px;">更新于34分钟前</div>
              </div>
            </div>
          </div>
          <h1>31025 网络编程与实践 </h1>
          <hr>
          <img src="../assets/img/coursepage.png" width="802">
          <p>本课程向学生介绍万维网（WWW）的详细信息以及基于网络的编程技能，使学生能够开发在万维网上运行的三层结构化电子商务应用程序。 </p>
          <h3>您的意见很重要</h3>
          <p>学生的反馈意见可以帮助我们不断改进该学科。
            
            以前的学生告诉我们：“感谢黄教授让我们实施了一些与现实情况非常相符的东西”，
            
            我们对这些反馈做出了回应，并承诺在未来，我们将尽最大努力为他们提供最新的编程技术和最有价值的案例研究。
            
            您可以在“早期反馈调查”（EFS）和“学生反馈调查”（SFS）中提供该主题的反馈，也可以与班上的导师或讲师讨论。</p>
            <h1>&nbsp;</h1>
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
.right_container{
  top: 10%;
  left: 20%;
  position: absolute;
  width: 60%;
  height: 90%;
}
</style>
