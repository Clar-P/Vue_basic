<template>
  <div class="school">
     <h1>{{msg}}</h1>
     <h2>学生姓名:{{name}}</h2>
     <h2>学生性别:{{sex}}</h2>
     <h2>学生年龄:{{myAge+1}}</h2>
     <button @click="updateAge">点我年龄加1</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            msg:'我是一个云南大学的学生',
            myAge:this.age
        }
    },
    methods: {
        updateAge(){
            this.myAge++
        }
    },
    // props:['name','age','sex']  //简单声明接收

    // 接收的同时对数据进行类型限制
    /*  
    props:{
        name:String,
        age:Number,
        sex:String
    }
    */

    // 接收的同时对数据：  进行类型限制 + 默认值的指定 + 必要性的限制
    props:{
        name:{
            type:String, // name 的类型是字符串
            required:true  // name是必要的
        },
        age:{
            type:Number,
            default:99 // 没传age时的默认值
        },
        sex:{
            type:String,
            required:true
        }
    }

} 
</script>
