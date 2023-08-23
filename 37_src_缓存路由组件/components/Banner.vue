<template>
    <div class="Header-up">
        <div class="page-header">
            <h1>Vue Router Demo</h1>
            <button @click="back">后退</button>
            <button @click="forward">前进</button>
            <button @click="test">测试一下go</button>
        </div>
    </div>
</template>

<script>
export default {
    name:'Banner',
    methods:{
        forward(){
            this.$router.forward()
        },
        back(){
            this.$router.back()
        },
        go(){
            this.$router.go(2)
        }
    }
}
</script>

<style>

</style>