<template>
  <div class="file_container">
    <div class="left_container">
      <ul class="mainul">
        <li>
          <h3>31025 网络编程与实践</h3>
          <ul>
            <li>软工2019级3班 03组</li>

            <li><router-link to="/student/group">-小组讨论</router-link></li>
            <li><a href="#">-文件共享</a></li>
          </ul>
        </li>
        <li>
          <h3>31013 数据库分析管理</h3>
          <ul>
            <li>软工2019级3班 05组</li>
            <li><router-link to="/student/group">-小组讨论</router-link></li>
            <li><a href="#">-文件共享</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <div class="right_container">
        <div class="top_container">
            <div class="t">
                <i class="big cloud icon"></i> <h2 style="margin:2px 1rem;font-size:20px;">31025 网络编程与实践 - 03组</h2>
                   
            </div>
            <div class="ui icon input" style="position: absolute;left: 70%;top:3%;">
                <input type="text" placeholder="搜索文件"  />
                <i class="search icon"></i>
              </div>
        </div>
        <div class="btn_nav">
            <div class="ui blue button" style=" top:0%; width: 120px; padding: 12px;" >
                <i class=" upload icon"></i> 新增文件
              </div>
              <div class="ui blue button" style="top:0%; width: 120px; padding: 12px;" >
                <i class=" download icon"></i> 压缩下载
              </div>
              <div class="ui blue button" style="top:0%; width: 80px; padding: 12px;" >
                <i class=" copy icon"></i> 复制
              </div>
              <div class="ui orange button" style="background-color: rgb(114, 114, 114);top:0%; width: 80px; padding: 12px;" >
                <i class=" trash icon"></i> 删除
              </div>
        </div>
        <table>
            <thead>
                <tr style="text-align: center;">
                    <td style="width: 300px;">文件名称</td>
                    <td style="width: 80px;">文件大小</td>
                    <td style="width: 250px;">上传时间</td>
                    <td style="width: 150px;">上传者</td>
                    <td style="width: 150px;">使用权限</td>
                </tr>
            </thead>
            <tbody>
                <tr >
                    <td style="text-align: left;"><i class="folder icon"></i> 参考资料</td>
                    <td></td>
                    <td style="text-align: center;">2021-01-15 16:07:59</td>
                    <td style="text-align: center;">刘亦诚</td>
                    <td style="text-align: center;">只读</td>
                </tr>
                <tr >
                    <td style="text-align: left;"><i class="folder icon"></i>作业一</td>
                    <td></td>
                    <td style="text-align: center;">2021-01-17 11:27:09</td>
                    <td style="text-align: center;">张希尧</td>
                    <td style="text-align: center;">全部权限</td>
                </tr>
                <tr >
                    <td style="text-align: left;"><i class="file icon"></i>作业要求</td>
                    <td style="text-align: center;">1.6 MB</td>
                    <td style="text-align: center;">2021-01-10 20:10:01</td>
                    <td style="text-align: center;">张希尧</td>
                    <td style="text-align: center;">全部权限</td>
                </tr>
                <tr style="height: 380px;">
                    
                </tr>
            </tbody>
          </table>
    </div>
  </div>
</template>

<script>

export default {
 
};
</script>
<style scoped>
table{
    height: 500px;
    left:1rem;
    top: 18%;
    position: absolute;
    border: solid 1px rgb(206, 204, 204);
}
.btn_nav{
    left: 3%;
    top: 11%;
    position: absolute;
    display: flex;
    flex-direction: row;
}
.t{
    left: 3%;
    top:3.5%;
    position: absolute;
    color: white;
    display: flex;
    flex-direction: row;
}
.top_container{
    width: 100%;
    height: 10%;
    background: #333342;
    
}
.file_container {
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
.right_container {
  width: 80%;
  height: 100%;
  left: 20%;
  top: 0%;
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
.rightul {
  list-style: none;
  padding: 0;
  margin: 0;
  margin-top: 1rem;
}
.rightul li {
  height: 110px;
  width: 100%;
  border: 1px solid rgb(189, 189, 189);
  margin-bottom: 1rem;
  box-shadow: 5px 5px 5px #888888;
}
h1 {
  font-size: 20px;
  top: 10px;
  left: 1rem;
  position: relative;
}
</style>
