<template>
    <div class="ui card course" >
        <div class="image">
          <img :src="imgUrl" />
        </div>
        <div class="content">
          <router-link class="header" to="/student/31025">{{title}}</router-link>
          
          <div class="meta">
            <span class="date">2020下学期</span>
          </div>
          <div class="description">
            {{ des }}
          </div>
        </div>
        <div class="extra content">
          <a style="position: relative;left: 10%;">
            <i class=" bullhorn icon" style="font-size: 16px;"></i>
            <span class="number" v-if="not1>0">{{not1}}</span>
          </a>
          <a style="position: relative;left: 34%;">
            <i class=" file alternate outline icon" style="font-size: 16px;"></i>
            <span class="number" v-if="not2>0">{{not2}}</span>
          </a>
          <a style="position: relative;left: 60%;">
            <i class="  envelope outline icon" style="font-size: 16px;"></i>
            <span class="number" v-if="not3>0">{{not3}}</span>
          </a>
        </div>
      </div>
</template>

<script>
    
    export default{
        props:['title', 'des','imgUrl','not1','not2','not3'],
        data(){
            return{
                
                
            };
        },
    }
</script>
<style scoped>
.course{
  box-shadow: 2px 2px 2px #888888;
  cursor: pointer;
}
.course:hover{
  box-shadow: 5px 5px 5px #888888;
}
a .number{
            position: absolute;
            left: 65%;
            top: -6px;
            background-color: #4183c4;
            color: #fff;
            line-height: 12px;
            width: 12px;
            border-radius: 12px;
            text-align: center;
            font-size: 10px;
}
</style>