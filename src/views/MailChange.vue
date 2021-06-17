<template>
    <div class="top_container">
      <button class="long_btn" style="position: absolute;left: 1%;top:10%;">
        全部课程<i class="caret down icon rightside"></i>
      </button>
      <button
        class="long_btn"
        style="position: absolute;left: 10%;top:10%;background-color: #fff;"
      >
        收件箱<i class="caret down icon rightside"></i>
      </button>
      <div class="ui icon  button" style="position: absolute;left: 61%;top:7%;">
        <i class="edit outline icon"></i>
      </div>
  
      <div class="ui icon buttons" style="position: absolute;left: 64%;top:7%;">
        <div class="ui button"><i class="reply icon"></i></div>
        <div class="ui button"><i class="reply all icon"></i></div>
        <div class="ui button"><i class="download icon"></i></div>
        <div class="ui button"><i class="trash icon"></i></div>
      </div>
      <div class="ui icon  button" style="position: absolute;left: 75%;top:7%;">
        <i class="cog icon"></i>
      </div>
      <div class="ui icon input" style="position: absolute;left: 78%;top:2%;">
        <input type="text" placeholder="Search..." />
        <i class="search icon"></i>
      </div>
    </div>
    <div class="left_container">
      <ul>
        <li @click="changePage">
          <div class="left_column"><input type="checkbox" /></div>
          <div class="middle_column"><p class="time">Dec 10, 2020</p><h4 class="tName"><b>黄教授，张三，李四，王...</b></h4><h5 class="tTitle">欢迎来到网络编程与实践课程</h5><p class="tContent">同学你好，欢迎你来到了31025-网络编程与实践的课程。我是你们的任课...</p></div>
          <div class="right_column"><i class="star outline icon tMark"></i></div>
        </li>
        <li class="active">
            <div class="left_column"><input type="checkbox" checked/></div>
          <div class="middle_column"><p class="time">Dec 10, 2020</p><h4 class="tName"><b>学生中心, 张三</b></h4><h5 class="tTitle">请尽快领取学生证</h5><p class="tContent">张三同学你好，你申请补发的学生证已制作完成，请尽快来学生中心领取。</p></div>
          <div class="right_column"><i class="star outline icon tMark"></i></div></li>
      </ul>
    </div>
    <div class="right_container">
  <div class="cTop">
  <h2>请尽快领取学生证 </h2><div  style="position: relative;left: 69%;top:35%; color: gray;">
      <i class=" reply link icon"></i>&nbsp;
      <i class=" cog link icon"></i>
    </div> 
    
  </div>
  <div class="cName">
  <i class="big circle user icon" style="position: relative;left: 1%;top:30%; color: gray;"></i>
  <div style="position: relative;left: 1%;top:20%;font-size: 12px;">学生中心,<span style="color: rgb(71, 71, 71);">张三</span><br/><span style="color: rgb(71, 71, 71);">学生行政中心</span></div>
  
  </div>
  
  <div class="cContent">
  <p>张三同学你好，</p><br>
  <p>你申请补发的学生证已制作完成，请尽快来学生中心领取。</p>
  <br>
  <p>学生中心</p>
  <p>12月10日</p>
  </div>
    </div>
  </template>

  <script>
    export default{
        methods:{
            changePage(){
                this.$router.push({
          path: "/student/mail",
        });
            }
        }
    }
</script>

  <style scoped>
  .cTop{
      width: 100%;
      height: 10%;
  
      border-bottom: 1px black solid;
      display: flex;
  }
  .cName{
      width: 100%;
      height: 10%;
      display: flex;
      
  }
  .cContent{
      width: 100%;
      height: 80%;
      padding: 1rem;
  }
  p,h2,h4, h5{
      margin: 0;
      padding: 0;
      font-family: 黑体;
  }
  h2{
      top: 25%;
      position: relative;
  }
  .tMark{
      top: 0%;
      position: relative;
      font-size: 12px;
      cursor: pointer;
      
  }
  .tName{
      top: 0%;
      position: relative;
      font-size: 12px;
  }
  .tTitle{
      top: 20%;
      position: relative;
      font-size: 14px;
  }
  .tContent{
      top: 20%;
      position: relative;
      font-size: 12px;
  }
  .time{
      top: 2%;
      position: relative;
      color: gray;
      font-size: 12px;
      font-family: 'Times New Roman', Times, serif;
        
  }
  input[type="checkbox"] {
    margin: 0.5rem;
    transform: scale(1.1);
    background-color: black;
  }
  .left_column {
    width: 10%;
    height: 100%;
    
    left: 0%;
    top: 0;
    position: relative;
  }
  .middle_column {
    width: 80%;
    height: 100%;
    
    padding: 0.3rem;
    display: flex;
    flex-direction: column;
  }
  .right_column {
    width: 10%;
    height: 100%;
    
    padding: 0.5rem;
  }
  .top_container {
    width: 100%;
    height: 6%;
    background-color: rgb(235, 233, 233);
    left: 0px;
    top: 0;
    position: absolute;
  }
  .left_container {
    width: 20%;
    height: 94%;
    left: 0px;
    top: 6%;
    position: absolute;
    border-right: 1px solid;
    border-color: gray;
  }
  .left_container ul {
    list-style: none;
    padding: 0;
    margin: 0;
    width: 100%;
    height: 100%;
  }
  .left_container ul li {
    width: 100%;
    height: 20%;
    display: flex;
    border-bottom: 1px gray solid;
    margin: 0;
  }
  .left_container ul li.active{
      background-color: #ecf5ff;
  }
  .left_container ul li:hover {
      border-right: 2px black solid;
  }
  .right_container {
    width: 80%;
    height: 94%;
    left: 20%;
    top: 6%;
    position: absolute;
    display: flex;
    flex-direction: column;
  }
  .long_btn {
    width: 9rem;
    height: 2rem;
    text-align: left;
    border: 0.5px gray solid;
    border-radius: 3px;
    font-size: 12px;
  }
  .rightside {
    float: right;
  }
  </style>
  