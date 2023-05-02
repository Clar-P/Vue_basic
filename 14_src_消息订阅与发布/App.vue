<template>
  <div class="app">
    <h1>{{msg}}</h1>
    <school></school>
    <Student></Student>
  </div>
</template>

<script>
    // 引入student组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{Student,School},
    data(){
      return {
        msg:'你好啊',
      }
    }
}
</script>

<style>
  .app{
    background-color: gray;
    padding: 5px;
  }
</style>

