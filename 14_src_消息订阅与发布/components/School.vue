<template>
  <div class="school">
     <h2>学校名称:{{name}}</h2>
     <h2>学生性别:{{address}}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'

export default {
    name:'School',
    data(){
        return {
            name:'云南大学',
            address:'昆明市'
        }
    },
    mounted(){
        // this.$bus.$on('hello',(data)=> {
        //     console.log('我是School组件，收到了数据',data);
        // })

    this.pubId = pubsub.subscribe('hello',(msgName,data)=>{
        console.log(this);
        // console.log('有人发布了hello消息，hello消息的回调执行了',msgName,data);
    })
    },
    beforeDestory(){
        // this.$bus.$off('hello')
        pubsub.unsubscribe(this.pubId)
    }
} 
</script>

<style scoped>
    .school{
        background-color: skyblue;
        padding: 5px;
        
    }
</style>