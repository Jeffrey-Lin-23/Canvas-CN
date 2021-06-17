<template>
  <div class="btn_container"  @click='change' :id='uid'>
    <div class="wrap">
        <div class="ic">
            <i :class="['large', iconType, 'icon', 'active']"></i>
        </div>
        <div class="con">{{btnText}}</div>
    </div>
  </div>
</template>

<script>
export default {
    props: ['iconType', 'btnText','uid'],
    
    
    methods:{
        change(){
            this.$emit('change-target', this.uid);
            //console.log(this.uid);
        }
    }

}

</script>
<style scoped>
    .btn_container{
        cursor:pointer;
        width: 75px;
        height: 50px;
        background-color: #333342;
        color: #fff;
        text-align:center;
        font-size: 12px;
    }
    .btn_container:hover{
        background-color: rgb(43, 43, 43);
        color: rgb(255, 255, 255);
    }
    .wrap{
        margin: auto;
        top: 10%;
        position: relative;
        display: flex;
        flex-direction: column;
    }
    .ic{
        text-align:center;
    }
    .con{
        text-align:center;
    }
    .btn_container.active{
        background-color: #fff;
        color: #1a69a4;
    }
   
</style>