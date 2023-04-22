<template>
  <div>
    <Student name="马凯" :age='24' sex="男"></Student>
  </div>
</template>

<script>
    // 引入student组件
import Student from './components/Student.vue'

export default {
    name:'App',
    components:{Student}
}
</script>

