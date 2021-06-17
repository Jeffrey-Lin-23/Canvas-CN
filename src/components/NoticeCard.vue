<template>
    <div class="container">
        <h4><i class="volume down icon"></i>&nbsp;<a href="#">{{title}}</a><a href="#" @click.prevent='deleteItem' ><i class="x icon icon" style="float: right;color: black;"></i></a></h4>
        <p>{{code}}</p>
        <p>{{course}}</p>
        <p>工程学院</p>
        <p>{{date}}  &nbsp; |</p>

    </div>
</template>
<script>
    export default{
        props:['id','title', 'code', 'course','date' ],
        methods:{
            deleteItem(){
                this.$emit('delete-notice', this.id);
            }
        }
    }
</script>
<style scoped>
    .container{
        width: 100%;
        height: 100%;
        padding-top: 5px;
    }
    h4{
        margin-bottom: 0;
    }
    p{
        left: 25px;
        position: relative;
        margin: 0;
        font-family: 黑体;
        color: gray;
    }
</style>