<template>
    <div>
        <h2>学生姓名:{{name}}</h2>
        <h2>年龄:{{age}}</h2>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data(){
            return {
                name:'浦京',
                age:23
            }
        }
    }
</script>


