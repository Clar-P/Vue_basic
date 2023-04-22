<template>
  <div class="school">
     <h2 @click="showName">学校名称:{{name}}</h2>
     <h2>学生性别:{{address}}</h2>
  </div>
</template>

<script>
// 引入混合
import {mixin,mixin2} from '../mixin.js'
export default {
    name:'School',
    data(){
        return {
            name:'云南大学',
            address:'昆明市',
            x:666
        }
    },
    mounted(){
        console.log('你好啊!!!');
    },
    mixins:[mixin,mixin2]
} 
</script>
