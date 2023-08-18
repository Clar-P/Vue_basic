<template>
  <div class="category" slot-scope="games">
    <h3>{{title}}分类</h3>
    <!-- 定义一个插槽，（挖个坑等着组件的使用者进行填充） -->
    <slot :games="games" msg="helle">我是一些默认值，当使用者没有传递具体结构时我会出现</slot>
  </div>
</template>

<script>
export default {
    name:'Category',
    props:["title"],
    data(){
      return{
          games:['王者荣耀','英雄联盟',' 绝地求生','守望先锋'],
      }
    }
}
</script>

<style>
    .category{
        background-color: skyblue;
        width: 200px;
        height: 300px;
    }
    h3{
      background-color: yellow;
      text-align: center;
    }
</style>