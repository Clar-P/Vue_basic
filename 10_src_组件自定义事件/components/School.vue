<template>
  <div class="school">
     <h2>学校名称:{{name}}</h2>
     <h2>学生性别:{{address}}</h2>
     <button @click="sendSchoolName">把学校名给App</button>
  </div>
</template>

<script>

export default {
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:'云南大学',
            address:'昆明市'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name)
        }
    }
} 
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        
    }
</style>