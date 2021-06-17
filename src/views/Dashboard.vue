<template>
  <div class="left_container">
    <div class="top_container">
      <h2>
        课程导览 &nbsp;<span style="font-size: 14px; color: rgb(168, 167, 167);"
          >Dashboard</span
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
    <div class="cardwrap">
      <div class="line">
        <div class="card">
          <Course-Card
            title="31025 网络编程与实践"
            des="掌握网络编程完成实践课程"
            :imgUrl="require('../assets/img/web.png')"
            not1=3
            not3=1
          ></Course-Card>
        </div>
        <div class="card">
          <Course-Card
            title="31013 数据库分析管理"
            des="分析数据库架构原理"
            :imgUrl="require('../assets/img/course02.png')"
          ></Course-Card>
        </div>
      </div>
      <div class="line">
        <div class="card">
          <Course-Card
            title="31121 云计算概论"
            des="全面介绍云计算发展的重要战略意义及落地延伸的必要性和紧迫性"
            :imgUrl="require('../assets/img/cloud.png')"
          ></Course-Card>
        </div>
        <div class="card">
          <Course-Card
            title="31221 进阶数据结构"
            des="数据结构理论进阶课程，领悟算法思想、理解算法对内存空间和性能"
            :imgUrl="require('../assets/img/advance.png')"
            not2=4
          ></Course-Card>
        </div>
      </div>
      
    </div>
  </div>
  <div class="right_container">
    <h3>公告</h3>
    <hr />
    <ul>
      <li :key="item.id" v-for="item in notices">
        <notice-card
          :id="item.id"
          :title="item.title"
          :code="item.code"
          :course="item.course"
          :date="item.date"
          @delete-notice="deleteNoticeItem"
          
        ></notice-card>
      </li>
    </ul>
  </div>
</template>
<script>
import CourseCard from "../components/CourseCard.vue";
import NoticeCard from "../components/NoticeCard.vue";
export default {
  components: { CourseCard, NoticeCard },
  data() {
    return {
      notices: [
        {
          id: 1,
          title: "黄教授更新了作业需求",
          code: 31121,
          course: "云计算概论",
          date: "2020-12-10 17:30",
        },
        {
          id: 2,
          title: "管理员新增注意事项",
          code: 31025,
          course: "数据库分析管理",
          date: "2020-12-01 10:19",
        },
        {
          id: 3,
          title: "感谢选择该课程",
          code: 31121,
          course: "云计算概论",
          date: "2020-11-30 13:40",
        },
      ],
    };
  },
  methods: {
    deleteNoticeItem(id) {
      var index = this.notices.findIndex(function(item) {
        return item.id == id;
      });
      this.notices.splice(index, 1);
    },
  },
};
</script>
<style scoped>
.left_container {
  width: 60%;
  height: 100%;
  position: absolute;
}
.right_container {
  width: 20%;
  height: 100%;
  left: 60%;
  top: 5%;
  position: absolute;
  padding: 6px;
}
.top_container {
  width: 90%;
  height: 10%;
  position: absolute;
  top: 5%;
  left: 5%;
}
.cardwrap{
  display: flex;
  position: absolute;
  top: 14%;
  left: 3.5%;
  flex-direction: column;
}
.line {
  display: flex;
  flex-direction: row;
  margin-bottom: 0.8rem;
}

.card {
  margin: 0.5rem;
}

ul {
  position: relative;
  left: -20px;
}
li {
  list-style-type: none;
  width: 100%;
  height: 110px;
}
</style>
