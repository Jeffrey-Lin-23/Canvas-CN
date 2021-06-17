<template>
    <div class="login_container">
        <div id="login_box">
            
             <div class="column">
    <h1>学生资讯系统</h1>
    <form method="get" class="ui large form">
      <div class="field_container">
        <div class="field">
          <div class="ui left icon input">
            <i class="user icon"></i>
            <input type="text" name="user" placeholder="输入账户" v-model="user">
          </div>
        </div>
        <div class="field">
          <div class="ui left icon input">
            <i class="lock icon"></i>
            <input type="password" name="password" placeholder="输入密码" v-model="password">
          </div>
        </div>
        <div class="ui fluid large teal submit button" @click.prevent="goto">Login</div>
      </div>

      

    </form>

  
  </div>
        </div>
    </div>
</template>
<script>
export default {
    name: 'Login',
    data(){
        return {
            user: '',
            password: '',
        };
    },
    methods:{
        goto(){
            if(this.user == 'student' && this.password == 'student'){
                alert('登陆成功');
                this.$router.push({
                    path: `/student/dashboard`,
                })
            }else{
                console.log(this.user);
                console.log(this.password);
                alert('用户名或密码错误');
            }
        }
    }
}
</script>

<style scoped>
.login_container{
    background-image: url('../assets/img/bg-login.jpg');
    background-size: 100%; 
    background-repeat:no-repeat;
    height: 100%;
}
#login_box{
    width: 450px;
    height: 300px;
    background-color: rgba(22, 2, 2, 0.7);
    border-radius: 3px;
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
h1{
    color: #fff;
    padding: 0;
    margin: 0;
    position:absolute;
    left: 50%;
    top: 10%;
    transform: translate(-50%);
}
.field_container{
    width: 90%;
    position:absolute;
    left: 5%;
    top: 100px;
   
}
</style>