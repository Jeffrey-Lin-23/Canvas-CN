<template>
    <div class="question_container">
      <div class="top_container">
        <span
          >张三，您好！为持续改进课程教学，提高学生培养质量，非常感谢您提供回馈！</span
        >
      </div>
      <div class="main">
        <table class="ui celled structured table">
          <tr class="active">
            <td colspan="8">一、对授课老师教学水平的评价_宋敏</td>
          </tr>
          <tr>
            <td colspan="8" style="color: rgb(34, 110, 252);">
              1--极不满意; 5--非常满意。 LO (Learning Objectives,
              培养目标)，CO（Course Objective，课程目标）
            </td>
          </tr>
          <tr class="center aligned">
              <td  width=100px>序号</td>
              <td width=200px>一级指标</td>
              <td width=500px>二级指标</td>
              <td width=600px>评价等级</td>
          </tr>
          <tr class="center aligned">
              <td>1</td>
              <td>LO&CO</td>
              <td>达到教学大纲规定中的LO和CO</td>
              <td><img src="../assets/img/bar1.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>2</td>
              <td>授课内容</td>
              <td>符合教学大纲内容</td>
              <td><img src="../assets/img/bar2.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>3</td>
              <td>授课尺度</td>
              <td>重点与难度适中</td>
              <td><img src="../assets/img/bar2.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>4</td>
              <td>授课风格</td>
              <td>如善于调动和把握课堂气氛、有效控制节奏</td>
              <td><img src="../assets/img/bar1.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>5</td>
              <td>表达能力</td>
              <td>如讲解清晰、易于理解、逻辑性强</td>
              <td><img src="../assets/img/bar1.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>6</td>
              <td>课堂互动</td>
              <td>恰如其分，课堂学习轻松愉快</td>
              <td><img src="../assets/img/bar2.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>7</td>
              <td>课外作业</td>
              <td>作业的量和难度适中、效果和作用好</td>
              <td><img src="../assets/img/bar1.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>8</td>
              <td>知识效用</td>
              <td>对学生自身工作具有指导意义</td>
              <td><img src="../assets/img/bar2.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>9</td>
              <td>意外惊喜</td>
              <td>收获超出期待或对做人做事大有益处</td>
              <td><img src="../assets/img/bar2.png" width="480" height="38"/></td>
          </tr>
          <tr class="center aligned">
              <td>10</td>
              <td>整体评价</td>
              <td>您对授课老师的整体满意度</td>
              <td><img src="../assets/img/bar1.png" width="480" height="38"/></td>
          </tr>
          
        </table>
      </div>
    </div>
  </template>
  <script>
      export default{
          methods:{
              goto(){
                  this.$router.push({
              path: '/student/result2',
            });
              },
          }
      }
  </script>
  <style scoped>
  .question_container {
    width: 100%;
    height: 100%;
  }
  .top_container {
    width: 80%;
    height: 50px;
    position: absolute;
    top: 5%;
    left: 5%;
    border: solid 1px grey;
    text-align: center;
    line-height: 50px;
  }
  .main {
    width: 80%;
    position: absolute;
    top: 15%;
    left: 5%;
  }
  </style>
  