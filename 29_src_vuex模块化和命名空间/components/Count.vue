<template>
  <div>
        <h1>当前数和为{{sum}}</h1>
        <h1>和放大十倍后的数为{{bigSum}}</h1>
        <h3>下方组件的总人数是:{{personList.length}}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">和为奇数再加</button>
        <button @click="jiaWait(n)">等一会再加</button>
        <h2>我要去{{ school }} 学{{ subject }}</h2>
  </div>
</template>

<script>
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name:'Count',
    data(){
        return{
            n:1
        }
    },
    computed:{
        ...mapState('countAbout',['sum','school','subject']),
        ...mapState('personAbout',['personList']),
        ...mapGetters('countAbout',['bigSum'])
    },
    methods:{
        ...mapActions('countAbout',['jiaOdd','jiaWait']),
        ...mapMutations('countAbout',['JIA','JIAN'])
    }
}
</script>

<style>

</style>