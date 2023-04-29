<template>
  <div class="student">
     <h2>学生姓名:{{name}}</h2>
     <h2>学生性别:{{sex}}</h2>
     <h2>当前求和为{{ number }}</h2>
     <button @click="add">点我number++</button>
     <button @click="sendStudentName">把学校名给App</button>
     <button @click="unbind">解绑atguigu事件</button>
     <button @click="death">点我销毁Student组件实例对象</button>
  </div>
</template>

<script>
export default {
    name:'Student',
    data(){
        return {
            name:'浦京',
            sex:'男',
            number:0
        }
    },
    methods:{
        add(){
            console.log('add 回调被调用了');
            this.number++
        },
        sendStudentName(){
            // 触发Student组件实例身上的atguigu事件
            this.$emit('atguigu',this.name,666,888,999)
            // this.$emit('demo')
            this.$emit('click')
        },
        unbind(){
            this.$off('atguigu') // 解绑一个自定义事件
            // this.$off(['atguigu','demo']) // 解绑多个自定义事件
            // this.$off() // 所有的自定义事件都解绑
        },
        death(){
            this.$destroy() // 销毁了当前的Student组件的实例，销毁后所有的Student实例的自定义事件全都不奏效了
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