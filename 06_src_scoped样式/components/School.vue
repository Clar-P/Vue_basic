<template>
  <div class="demo">
     <h2>学校名称:{{name}}</h2>
     <h2>学生性别:{{address}}</h2>
  </div>
</template>

<script>

export default {
    name:'School',
    data(){
        return {
            name:'云南大学',
            address:'昆明市'
        }
    }
} 
</script>

<style scoped>
    .demo{
        background-color: skyblue;
    }
</style>