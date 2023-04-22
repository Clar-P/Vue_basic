<template>
  <div class="school">
     <h2 @click="showName">学生姓名:{{name}}</h2>
     <h2>学生性别:{{sex}}</h2>
  </div>
</template>

<script>
import {mixin,mixin2} from '../mixin.js'
export default {
    name:'Student',
    data(){
        return {
            name:'浦京',
            sex:'男'
        }
    },
    mixins:[mixin,mixin2]
} 
</script>
