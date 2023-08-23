<template>  
    <div>
        <h2>Home组件内容</h2>
        <ul class="child">
            <li>
                <router-link  to="/home/message">我是MESSAGE</router-link>
            </li>
            <li>
                <router-link  to="/home/news">我是NEWS</router-link>
            </li>
        </ul>
        <div>
            <keep-alive >
                <router-view></router-view>
            </keep-alive>
        </div>
    </div>
</template>

<script>
export default {
    name:'Home'
}
</script>


<style scoped>
    .child {
        display: flex;
        justify-content: space-between;
    }
</style>