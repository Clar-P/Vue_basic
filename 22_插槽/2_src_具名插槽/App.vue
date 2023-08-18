<template>
  <div class="container">
    <Category title="美食">
        <img slot="center" src="https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00775-1826.jpg" alt="">
        <a slot="footer" href="http://www.atguigu.com"> 更多美食</a>
    </Category>

    <Category title="游戏">
        <ul slot="center">
            <li v-for="(g,index) in games" :key="index">{{ g }}</li>
        </ul>  
        <div class="foot"  slot="footer">
            <a href="http://www.atguigu.com">单级游戏</a> 
            <a href="http://www.atguigu.com">网络游戏</a> 
        </div> 
    </Category>

    <Category title="电影">
        <video controls slot="center" src="https://www.bilibili.com/video/BV1Zy4y1K7SH?t=1056.1&p=102"></video>
        <div class="foot" slot="footer">
            <a href="">经典</a>
            <a href="">热门</a>
            <a href="">推荐</a>
        </div>
        <h4 slot="footer">欢迎前来观看</h4>
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
    .container,.foot{
        display: flex;
        justify-content: space-around;
    }
    
    img{
      width: 100%;
    }
    video{
        width: 100%;
    }
    h4{
        text-align: center;
    }
    
</style>