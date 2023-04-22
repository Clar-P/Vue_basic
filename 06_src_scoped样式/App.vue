<template>
  <div>
    <h1  class="title">Nihao</h1>
    <Student></Student>
    <hr>
    <School></School>
  </div>
</template>

<script>
    // 引入student组件
import Student from './components/Student.vue'
import School from './components/School.vue'

export default {
    name:'App',
    components:{Student,School}
}
</script>

<style>
  .title{
    background-color: red;
  }
</style>

