<template>
  <div>
     <h2>学校名称:{{name}}</h2>
     <h2>学生性别:{{address}}</h2>
     <button @click="test">点我测试一下hello</button>
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
    },
    methods:{
        test(){
            this.hello()
        }
    }
} 
</script>
