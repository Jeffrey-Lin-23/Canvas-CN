<template>
  <div class="main_container">
    <div class="left_column">
      <div class="menu">
        <menu-btn
          iconType="user circle"
          btnText="账 户 "
          uid="profile"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="th list"
          btnText="主 页"
          uid="dashboard"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="book"
          btnText="课 程"
          uid="course"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="calendar alternate outline"
          btnText="日 程 表"
          uid="agenda"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="envelope"
          btnText="邮 箱 "
          uid="mail"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="comments"
          btnText="讨论小组"
          uid="group"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="chart pie"
          btnText="成 绩"
          uid="result"
          @change-target="changePage"
        ></menu-btn>
        <menu-btn
          iconType="question circle"
          btnText="帮 助 "
          uid="help"
          @change-target="changePage"
        ></menu-btn>
      </div>
    </div>
    <div class="courseMenu" id="courseMenu"  v-if="courseShow">
      <course-menu @close-item="handleClose" @tranfer-close="transferClose"></course-menu>
    </div>
    <div class="content_container" @click="handleClose">
      <router-view />
    </div>
  </div>
</template>
<script>
import MenuBtn from "../components/MenuBtn.vue";
import CourseMenu from "../components/CourseMenu.vue"
export default {
  components: { MenuBtn, CourseMenu },
  data() {
    return {
      previousPage: "",
      target: "dashboard",
      courseShow:false,
    };
  },
  methods: {
    changePage(t) {
      if (this.target != t) {
        this.previousPage = this.target;
        this.target = t;
        document.getElementById(t).classList.add("active");
        document.getElementById(this.previousPage).classList.remove("active");
        if (this.target != "course") {
          this.courseShow = false;
          var url = "/student/" + this.target;
          this.$router.push({
            path: url,
          });
        }else{
          this.courseShow = true;
        }
      }
    },
    handleClose(){
      if(this.courseShow){
        document.getElementById(this.previousPage).classList.add("active");
        document.getElementById(this.target).classList.remove("active");
        this.target = this.previousPage;
        this.previousPage="course";
        this.courseShow = false;
      }
    },
    transferClose(){
      if(this.courseShow){
        this.previousPage="course";
        this.target = "dashboard";
        document.getElementById(this.target).classList.add("active");
        document.getElementById(this.previousPage).classList.remove("active");
        
        this.courseShow = false;
      }
    }
  },
  mounted() {
    document.getElementById(this.target).classList.add("active");
  },
};

</script>
<style scoped>
*{
  font-family: 苹方超细黑;
}
.main_container {
  width: 100%;
  height: 100%;
}
.left_column {
  width: 75px;
  height: 100%;
  background-color: #333342;
  position: fixed;
}
.menu {
  width: 100%;
  top: 60px;
  position: absolute;
}
.content_container {
  left: 75px;
  top: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  overflow-y: auto;
}
.courseMenu {
  width: 20%;
  height: 100%;
  background-color:#fff;
  left: 75px;
  z-index: 999;
  top: 0;
  position: fixed;
  box-shadow: 1px 0px 5px #888888;
}
</style>
