<template>
<div class="mainContain">
<i class="x icon icon" @click="closeItem"></i>
<h4>课程列表</h4><br/>
<hr style="left: 5%; top: 8%; position:absolute;"/>
<ul>
    <li @click="transferClose"><router-link to="/student/31025" >31025 网络编程与实践</router-link></li>
    <li @click="transferClose"><router-link to="/student/31025">31013 数据库分析管理</router-link></li>
    <li @click="transferClose"><router-link to="/student/31025" >31121 云计算概论</router-link></li>
    <li @click="transferClose"><router-link to="/student/31025" >31221 进阶数据结构</router-link></li>
</ul>
<hr style="left: 5%; top: 30%; position:absolute;" />
<router-link @click="transferClose" to="/student/dashboard" style="left: 12%; top: 33%; position:absolute;">全部课程</router-link>
</div>
</template>
<script>
    export default{
        methods:{
            closeItem(){
                this.$emit('close-item');
            },
            transferClose(){
                this.$emit('tranfer-close');
            }
        }
    }
</script>
<style scoped>
.mainContain{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
}
i{
    left: 90%;
    top: 10px;
    position: absolute;
    cursor: pointer;
}
h4{
    left: 5%;
    top: 5%;
    position: absolute;
    margin: 0;
}
hr{
    width: 90%;
}
ul{
    top:10%;
    left: -0.5rem;

    position: absolute;
}
li{
    list-style: none;
    margin-bottom: 1rem;
}
</style>