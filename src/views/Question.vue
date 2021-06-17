<template>
  <div class="question_container">
    <div class="top_container">
      <span style="margin-left: 6rem;"
        >张三，您好！为持续改进课程教学，提高学生培养质量，请您如实填写下表，我们十分需要您的需求和建议！</span
      >
      <div class="ui blue button" style="width: 200px;margin-left: 6rem;" @click="goto">
        <div class="text">评价意见提交</div>
      </div>
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
            <td rowspan="2" width=100px>序号</td>
            <td colspan="2">评价指标</td>
            <td colspan="5">评价等级</td>
        </tr>
        <tr class="center aligned">
            <td width=200px>一级指标</td>
            <td width=600px>二级指标</td>
            <td width=50px>5</td>
            <td width=50px>4</td>
            <td width=50px>3</td>
            <td width=50px>2</td>
            <td width=50px>1</td>
            
        </tr>
        <tr class="center aligned">
            <td>1</td>
            <td>LO&CO</td>
            <td>达到教学大纲规定中的LO和CO</td>
            <td><input type="radio" name="q1" value="5"/></td>
            <td><input type="radio" name="q1" value="4"/></td>
            <td><input type="radio" name="q1" value="3"/></td>
            <td><input type="radio" name="q1" value="2"/></td>
            <td><input type="radio" name="q1" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>2</td>
            <td>授课内容</td>
            <td>符合教学大纲内容</td>
            <td><input type="radio" name="q2" value="5"/></td>
            <td><input type="radio" name="q2" value="4"/></td>
            <td><input type="radio" name="q2" value="3"/></td>
            <td><input type="radio" name="q2" value="2"/></td>
            <td><input type="radio" name="q2" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>3</td>
            <td>授课尺度</td>
            <td>重点与难度适中</td>
            <td><input type="radio" name="q3" value="5"/></td>
            <td><input type="radio" name="q3" value="4"/></td>
            <td><input type="radio" name="q3" value="3"/></td>
            <td><input type="radio" name="q3" value="2"/></td>
            <td><input type="radio" name="q3" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>4</td>
            <td>授课风格</td>
            <td>如善于调动和把握课堂气氛、有效控制节奏</td>
            <td><input type="radio" name="q4" value="5"/></td>
            <td><input type="radio" name="q4" value="4"/></td>
            <td><input type="radio" name="q4" value="3"/></td>
            <td><input type="radio" name="q4" value="2"/></td>
            <td><input type="radio" name="q4" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>5</td>
            <td>表达能力</td>
            <td>如讲解清晰、易于理解、逻辑性强</td>
            <td><input type="radio" name="q5" value="5"/></td>
            <td><input type="radio" name="q5" value="4"/></td>
            <td><input type="radio" name="q5" value="3"/></td>
            <td><input type="radio" name="q5" value="2"/></td>
            <td><input type="radio" name="q5" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>6</td>
            <td>课堂互动</td>
            <td>恰如其分，课堂学习轻松愉快</td>
            <td><input type="radio" name="q6" value="5"/></td>
            <td><input type="radio" name="q6" value="4"/></td>
            <td><input type="radio" name="q6" value="3"/></td>
            <td><input type="radio" name="q6" value="2"/></td>
            <td><input type="radio" name="q6" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>7</td>
            <td>课外作业</td>
            <td>作业的量和难度适中、效果和作用好</td>
            <td><input type="radio" name="q7" value="5"/></td>
            <td><input type="radio" name="q7" value="4"/></td>
            <td><input type="radio" name="q7" value="3"/></td>
            <td><input type="radio" name="q7" value="2"/></td>
            <td><input type="radio" name="q7" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>8</td>
            <td>知识效用</td>
            <td>对学生自身工作具有指导意义</td>
            <td><input type="radio" name="q8" value="5"/></td>
            <td><input type="radio" name="q8" value="4"/></td>
            <td><input type="radio" name="q8" value="3"/></td>
            <td><input type="radio" name="q8" value="2"/></td>
            <td><input type="radio" name="q8" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>9</td>
            <td>意外惊喜</td>
            <td>收获超出期待或对做人做事大有益处</td>
            <td><input type="radio" name="q9" value="5"/></td>
            <td><input type="radio" name="q9" value="4"/></td>
            <td><input type="radio" name="q9" value="3"/></td>
            <td><input type="radio" name="q9" value="2"/></td>
            <td><input type="radio" name="q9" value="1"/></td>
        </tr>
        <tr class="center aligned">
            <td>10</td>
            <td>整体评价</td>
            <td>您对授课老师的整体满意度</td>
            <td><input type="radio" name="q10" value="5"/></td>
            <td><input type="radio" name="q10" value="4"/></td>
            <td><input type="radio" name="q10" value="3"/></td>
            <td><input type="radio" name="q10" value="2"/></td>
            <td><input type="radio" name="q10" value="1"/></td>
        </tr>
        <tr class="active">
            <td colspan="8">二、您的需求和建议</td>
          </tr>
          <tr>
            <td colspan="8"><div class="ui form">
                <div class="field">
                  <textarea placeholder="请输入您的需求和建议" style="width: 100%;margin: 15px 0;"></textarea>
                </div>
              </div></td>
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
