<template>
    <div class="left_side">
      
        <div class="help_content">
            <img src="../assets/img/help.png"/>
        </div>
    </div>
    <div class="right_side">
        <div class="right_content">
            <H2>问 题 反 馈</H2>
            <p>如果您有任何需要协助的问题，请于下方留下问题与联系方式，校方相关负责人将于两天内进行回复</p><br>
            <label style="font-size: 17px;"><b>联络邮箱</b></label><br>
            <div class="ui input">
               
                <input type="text" placeholder="Email" style="width: 600px;margin-top: 10px;margin-bottom: 20px;">
            </div><br>
            <label style="font-size: 17px;"><b>联络人</b></label><br>
            <div class="ui input">
               
                <input type="text" placeholder="Name" style="width: 600px;margin-top: 10px;margin-bottom: 20px;">
            </div><br>
            <label style="font-size: 17px;"><b>内容</b></label><br>
            <div class="ui form">
                <div class="field">
                  <textarea placeholder="请输入要询问的问题" style="width: 600px;margin-top: 15px;"></textarea>
                </div>
              </div>
            <br>
            <div class="ui blue submit button">提交</div>
              
        </div>
    </div>
</template>

<style scoped>
    .left_side{
        width: 40%;
        height: 100%;
    }
    .right_side{
        width: 60%;
        height: 100%;
        position: absolute;
        left: 41%;
        top: 0;
        
    }
    .help_content{
        position: relative;
        left: 0%;
        top:5%;
        width: 690px;
        height: 800px;
    }
    .right_content{
        position: relative;
        left: 10%;
        top: 10%;
    }
    h2{
        font-size: 28px;
        color: #000;
    }
    img{
    width: 100%;
    height: 100%;
}
</style>