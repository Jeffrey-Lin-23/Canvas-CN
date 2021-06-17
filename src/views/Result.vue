<template>
  <div class="result_container">
    <div class="top_container">
      <h2>
        课程成绩 &nbsp;<span style="font-size: 14px; color: rgb(168, 167, 167);"
          >Grade</span
        >
        <span style="float: right;"
          ><i
            class="small ellipsis vertical icon"
            style="color: rgb(160, 160, 160);cursor:pointer;"
          ></i
        ></span>
      </h2>

      <hr style="top:-5px;position: relative;" />
    </div>
    <div class="nav">
      <div class="ui basic dropdown button" style="width: 300px;">
        <div class="text">2020-2021第一学期</div>
        <i class="dropdown icon" style="float: right;"></i>
      </div>
      <div class="ui basic dropdown button" style="width: 150px;">
        <div class="text">所有周次</div>
        <i class="dropdown icon" style="float: right;"></i>
      </div>
      <div class="ui blue button" style="width: 100px;">
        <div class="text">应 用</div>
      </div>
      <div style="left: 24%;top:15%;position: relative;">
        <b>执行时间：</b>2020-12-20 至 2021-02-15
      </div>
    </div>
    <div class="main">
      <table class="ui celled structured table">
        <thead class="center aligned">
          <tr >
            <th >编号</th>
            <th >课程名称</th>
            <th  colspan="2">课程类型</th>
            <th  colspan="2">学时学分</th>
            <th >考试时间</th>
            <th >成绩发布</th>
            <th  colspan="2">教学评价</th>
            <th  colspan="2">课程成绩</th>
            <th  >异议</th>
          </tr>
        </thead>
        <tbody class="center aligned">
          <tr >
            <td>31025</td>
            <td>网络编程与实践</td>
            <td>学位课</td>
            <td>专业学位课程</td>
            <td>16</td>
            <td>1.0</td>
            <td>2021-01-05</td>
            <td>已发布</td>
            <td>已评价</td>
            <td><router-link class="item " to="/student/teacher-grade"><i class="eye icon"></i></router-link></td>
            <td class="positive">88</td>
            <td class="positive">合格</td>
            <td><i class="large plus square blue icon"></i></td>
          </tr>
          <tr >
            <td>31013</td>
            <td>数据库分析管理</td>
            <td>学位课</td>
            <td>专业学位课程</td>
            <td>16</td>
            <td>1.0</td>
            <td>2021-01-03</td>
            <td>已发布</td>
            <td>已评价</td>
            <td><router-link class="item " to="/student/teacher-grade"><i class="eye icon"></i></router-link></td>
            <td class="negative">58</td>
            <td class="negative">不合格</td>
            <td><i class="large plus square blue icon"></i></td>
          </tr>
          <tr >
            <td>31121</td>
            <td>云计算概论</td>
            <td>学位课</td>
            <td>专业学位课程</td>
            <td>16</td>
            <td>1.0</td>
            <td>2021-01-07</td>
            <td>已发布</td>
            <td>未评价</td>
            <td><router-link class="item " to="/student/question"><i class="edit icon"></i></router-link></td>
            <td><i class="eye slash outline icon"></i></td>
            <td><i class="eye slash outline icon"></i></td>
            <td></td>
          </tr>
          <tr >
            <td>31221</td>
            <td>进阶数据结构</td>
            <td>学位课</td>
            <td>专业学位课程</td>
            <td>16</td>
            <td>1.0</td>
            <td>2021-01-07</td>
            <td>未发布</td>
            <td>已评价</td>
            <td><router-link class="item " to="/student/teacher-grade"><i class="eye icon"></i></router-link></td>
            <td>-</td>
            <td>-</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
.result_container {
  width: 100%;
  height: 100%;
}
.top_container {
  width: 80%;
  height: 10%;
  position: absolute;
  top: 5%;
  left: 5%;
}
.nav {
  width: 80%;
  height: 40px;
  position: absolute;
  top: 13%;
  left: 5%;
  display: flex;
  flex-direction: row;
}
.nav > div {
  margin-right: 1rem;
}
.main {
  width: 80%;
  height: 60%;
  position: absolute;
  top: 23%;
  left: 5%;
}
</style>
