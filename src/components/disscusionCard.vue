<template>
    <div class="title"><a href="#"><b>{{title}}</b></a></div>
    <div class="day">{{day}}</div>
    <div class="rep">{{repNo}}则回复</div>
    <div class="time">{{time}}</div>
    
</template>
<script>
    export default {
        props:['title','repNo','time','day'],

    }
</script>

<style scoped>
    .title{
        top: 25%;
        left: 1rem;
        position: relative;
        font-size: 17px;
        font-family:微软雅黑;
    }
    .rep{
        top: 20%;
        left: 1rem;
        position: relative;
        font-size: 12px;
        font-family:微软雅黑;
        color: #666;
    }
    .time{
        top: 20%;
        left: 1rem;
        position: relative;
        font-size: 12px;
        font-family:微软雅黑;
        color: #666;
    }
    .day{
        top: 5%;
        left: 93%;
        position: relative;
        font-size: 12px;
        font-family:微软雅黑;
        color: #666;
    }
</style>