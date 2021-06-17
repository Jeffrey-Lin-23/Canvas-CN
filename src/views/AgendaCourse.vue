<template>
    <div class="agenda_container">
      <div class="top_container">
        <img src="../assets/img/title1.png" width="435.4" height="65.8" style="position: absolute; top: 3px; left: 3rem;"/>
        <div class="top_right_container">
          <div class="ui small buttons" id="month_btn">
            <button class="ui grey button " @click="goto(`/student/agenda/course`)">课程</button>
            <button class="ui grey basic button" @click="goto(`/student/agenda`)">日程</button>
            <button class="ui grey basic button" @click="goto(`/student/agenda/exam`)">考试</button>
            </div>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <div class="ui tiny grey basic icon buttons" id="new_btn">
              <button class="ui button"><i class="plus icon"></i></button>
            </div>
        </div>
      </div>
      <div class="right_container">
          <img src="../assets/img/agenda_right.png" class="image"/>
      </div>
      <div class="main_container">
          <img src="../assets/img/cut1.png" class="image"/>
      </div>
    </div>
  </template>
  <script>
    export default{
      methods:{
        goto(u){
          this.$router.push({
                      path: u,
                  })
        }
      },
    }
  </script>
  
  <style scoped>
  .agenda_container {
    padding: 20px;
    width: 100%;
    height: 100%;
  }
  .top_container {
    border-bottom-style: solid;
    border-bottom-width: 1px;
    height: 40px;
    width: 75%;
    padding-bottom: 10px;
    top:10px;
  }
  #today_btn {
    left: 0;
    top: -5px;
    position: relative;
  }
  #left_btn {
    left: 25px;
    top: -5px;
    position: relative;
  }
  p {
    left: 195px;
    top: -25px;
    position: relative;
  }
  .top_right_container{
      float: right;
      top:-70px;
  }
  #new_btn {
    right: 0px;
    float: right;
    position: relative;
  }
  #month_btn {
    
    position: relative;
  }
  .right_container{
      
      
      width: 20%;
      height: 70%;
      left: 74%;
      top: 8%;
      position: relative;
  }
  .main_container{
      
  
      width: 70%;
      height: 90%;
      left: 40px;
      top: 60px;
      position: absolute;
  }
  .image{
      width: 100%;
      height: 100%;
  }
  </style>
  