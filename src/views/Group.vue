<template>
  <div class="group_container">
    <div class="left_container">
      <ul class="mainul">
        <li>
          <h3>31025 网络编程与实践</h3>
          <ul>
            <li>软工2019级3班 03组 </li>
            <li>
                <a href="#">-小组讨论</a></li>
            <li><router-link to='/student/group/file'>-文件共享</router-link></li>
          </ul>
        </li>
        <li>
          <h3>31013 数据库分析管理</h3>
          <ul>
            <li>软工2019级3班 05组</li>
            <li><a href="#">-小组讨论</a></li>
            <li><router-link to='/student/group/file'>-文件共享</router-link></li>
          </ul>
        </li>
       
      </ul>
    </div>
    <div class="right_container">
      <h1>31025 网络编程与实践- 03组</h1>
      <hr style="margin-top: 2rem;"/>

      <div
        class="ui icon input"
        style="position: absolute;left: 42%;top:0%; width: 300px;"
      >
        <input type="text" placeholder="搜索内容" />
        <i class="search icon"></i>
      </div>
      <div
        class="ui blue button"
        style="position: absolute;left: 79.5%;top:0%; width: 120px; padding: 12px;"
      >
        <i class=" plus icon"></i> 添加讨论
      </div>
      <button
        class="ui basic icon button"
        style="position: absolute;left: 95%;top:0%; padding: 12px;"
      >
        <i class="cog icon"></i>
      </button>
      <ul class="rightul">
        <li>
          <discussion-card
            title="小测一讨论"
            repNo="15"
            time="2021-01-10"
            day="10天前"
          ></discussion-card>
        </li>
        <li>
          <discussion-card
            title="作业一分组"
            repNo="7"
            time="2021-01-01"
            day="19天前"
          ></discussion-card>
        </li>
        <li>
          <discussion-card
            title="课堂讨论"
            repNo="35"
            time="2020-12-28"
            day="23天前"
          ></discussion-card>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import DiscussionCard from "../components/disscusionCard.vue";
export default {
  components: { DiscussionCard },
};
</script>
<style scoped>
.group_container {
  width: 100%;
  height: 100%;
  top: -10px;
  position: absolute;
}
.left_container {
  width: 20%;
  height: 100%;
  box-shadow: 1px 0px 5px #888888;
}
.right_container{
    width: 60%;
    height: 100%;
    left: 21%;
    top:5%;
    position: absolute;
}

.mainul {
  list-style: none;
  padding: 0;
  left: 2rem;
  position: absolute;
  top: 5%;
}
.mainul > li {
  margin-bottom: 2rem;
}
ul {
  list-style: none;
  padding: 0;
}
h3 {
  color: gray;
  margin: 0;
  font-size: 17px;
}
.rightul{
    list-style: none;
    padding: 0;
    margin: 0;
    margin-top: 1rem;
  }
.rightul li{
    height: 110px;
    width: 100%;
    border: 1px solid rgb(189, 189, 189);
    margin-bottom: 1rem;
    box-shadow: 5px 5px 5px #888888;
  }
  h1{
      font-size: 20px;
      top:10px;
      left: 1rem;
      position: relative;
  }
</style>
