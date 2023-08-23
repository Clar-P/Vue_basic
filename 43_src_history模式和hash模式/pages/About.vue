<template>
    <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:'About',

    // 通过路由规则进入该组件时被调用（不通过路由规则如 about设置为一般组件进入）
    beforeRouteEnter(to,from,next){
        console.log('About--beforeRouterEnter',to,from)
        if(to.meta.isAuth){
            if(localStorage.getItem('school') === 'atguigu'){
                next()
            }else{
                alert('学校名不对，无权限')
            }
        }else{
            next()
        }
    },

    // 通过路由规则，离开该组件时被调用
    beforeRouteLeave(to,from,next){
        console.log('About--beforeRouterLeave',to,from);
        next()
    }
}
</script>