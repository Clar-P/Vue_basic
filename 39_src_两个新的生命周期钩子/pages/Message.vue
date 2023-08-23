<template>
    <div>
        <ul class="nav">
            <li v-for="m in message" :key="m.id">
                <!-- 跳转路由并携带params参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{m.title}}</router-link> -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <!-- <router-link :to="{
                    /* path:'/home/message/detail', */  // params 对象写法时不能使用path.会报错,只能用name
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    
                </router-link> -->
                {{m.title}}
                <button @click="pushT(m)">push</button>
                <button @click="replaceT(m)">replace</button>
            </li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>

export default {
    name:'Message',
    data(){
        return {
            message:[
                {id:'001',title:'教父'},
                {id:'002',title:'功夫'},
                {id:'003',title:'无间道'}
            ]
        }
    },
    methods:{
        /* pushT(m){
            this.$router.push({
                name:'xiangqing',
                query:{
                    id:m.id,
                    title:m.title
                }
            })
        }, */
        replaceT(m){
            this.$router.replace({
                name:'xiangqing',
                params:{
                    id:m.id,
                    title:m.title
                }
            })
        }
    }
}
</script>

<style>

</style>