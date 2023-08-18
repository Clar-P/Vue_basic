<template>
  <div class="container">
    <Category title="美食">
        <img src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00775-1826.jpg" alt="">
    </Category>
    <Category title="游戏">
        <ul>
            <li v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ul>    
    </Category>
    <Category title="电影">
        <video controls src="https://www.bilibili.com/video/BV1Zy4y1K7SH?t=1056.1&p=102"></video>
    </Category>
  </div>
</template>

<script>
import Category from './components/Category.vue';
export default {
    name:'App',
    components:{Category},
    data(){
        return{
            foods:['火锅','烧烤','小龙虾','牛排'],
            games:['王者荣耀','英雄联盟',' 绝地求生','守望先锋'],
            films:['《教父》','《暗战》','《东方快车谋杀案》','《让子弹飞》'],
        }
    }
}
</script>

<style>
    .container{
        display: flex;
        justify-content: space-around;
    }
    
    img{
      width: 100%;
    }
    video{
        width: 100%;
    }
</style>