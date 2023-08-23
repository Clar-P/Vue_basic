<template>
    <ul>
        <li>news001 <input type="text"></li>
        <li>news002 <input type="text"></li>
        <li>news003 <input type="text"></li>
        <li><h2 :style="{opacity}">你好啊</h2></li>
    </ul>
</template>

<script>
export default {
    name:'News',
    data(){
        return {
            opacity:1
        }
    },
    activated(){
        this.timer = setInterval(() => {
            this.opacity -= 0.1
            if(this.opacity <= 0) this.opacity = 1
        },100)
    },
    deactivated(){
        clearInterval(this.timer)
    }
}
</script>

<style>

</style>