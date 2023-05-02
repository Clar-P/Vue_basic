<template>
  <div class="student">
     <h2>学生姓名:{{name}}</h2>
     <h2>学生性别:{{sex}}</h2>
     <button @click="sendStudentName">把学生姓名给School组件</button>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'Student',
    data(){
        return {
            name:'浦京',
            sex:'男',
        }
    },
    mounted(){
        // console.log('School',this.x);
    },
    methods:{
        sendStudentName(){
            // this.$bus.$emit('hello',this.name)
            pubsub.publish('hello',666)
        }
    }
} 
</script>

<style scoped>
    .student{
        background-color: orange; 
        padding: 5px; 
        margin-top: 20px; 
    }

</style>