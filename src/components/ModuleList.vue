<template>
    <div class="module">
        <div class="header" @click="expand"><p ><i :class="assActive ? 'caret down' : 'caret up'
        " class=" icon"></i>{{title}}</p></div>
        <ul v-if="assActive">
          <li :key="item" v-for="item in contents"><i class="large gray file alternate outline icon"></i>
            <div class="ass_title"><a href="#">{{item}}</a></div>
            </li>
           
        </ul>
      </div>
</template>

<script>
    export default {
        props:['title','contents'],
      data() {
        return {
          assActive:true,
        };
      },
      methods: {
        expand(){
          this.assActive = !this.assActive;  
        }
      },
    };
    </script>
<style scoped>
    .module {
  padding: 0;
  margin: 2rem, 0;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.26);
}
.module .header {
  width: 100%;
  height: 40px;
  background-color: rgb(240, 240, 240);
  border: 1px solid rgb(167, 167, 167);
  cursor: pointer;
}
.module .header p {
  line-height: 40px;
  margin-left: 1rem;
  font-weight: bold;
}
.module ul {
  list-style: none;
  width: 100%;
  margin: 0;
  padding: 0;
}
.module ul li {
  width: 100%;
  height: 60px;
  border-bottom: 1px solid gray;
  border-left: 5px solid rgb(180, 180, 180);
}
.module ul li:hover {
  background-color: rgb(240, 255, 251);
}
.module ul li i {
  line-height: 60px;
  margin-left: 1rem;
}
.ass_title {
  position: relative;
  left: 5%;
  top: 0;
  font-weight: bold;
  font: large;
}

</style>