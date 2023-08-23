<template>
    <div>
        <ul class="nav">
            <li v-for="m in message" :key="m.id">
                <!-- 跳转路由并携带query参数，to的字符串写法 -->
                <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{m.title}}</router-link> -->

                <!-- 跳转路由并携带query参数，to的对象写法 -->
                <router-link :to="{
                    /* path:'/home/message/detail', */
                    name:'xiangqing',
                    query:{
                        id:m.id,
                        title:m.title
                    }
                }">
                    {{m.title}}
                </router-link>
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
    }
}
</script>

<style>

</style>