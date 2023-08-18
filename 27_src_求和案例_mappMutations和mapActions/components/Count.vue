<template>
    <div>
        <h1>当前求和为{{sum}}</h1>
        <h1>当前和放大十倍为{{bigSum}}</h1>
        <h1>我在{{school}}学{{subject }}</h1>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="JIA(n)">+</button>
        <button @click="JIAN(n)">-</button>
        <button @click="jiaOdd(n)">当前求和为奇数再加</button>
        <button @click="jiaWait(n)">等一等再加</button>
    </div>
</template>

<script>
// 引入
import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

export default {
    name:'Count',
    data(){
        return {
            n:1, // 用户选择的数字。默认开始是1
        }
    },
    methods:{
        // 程序员亲自写方法
        /* 
        increment(){
            this.$store.commit('JIA',this.n)
        },
        decrement(){
            this.$store.commit('JIAN',this.n)  
        }, 
        */

        // 借助mapMutations 生成对应的方法。方法中会调用commit 去联系mutations（对象写法）
        // ...mapMutations({increment:'JIA',decrement:'JIAN'}),

        // 借助mapMutations 生成对应的方法。方法中会调用commit 去联系mutations （数组写法）
        // 不简写就能不一样的命名，简写则组件中的名字要和mutations中的一样都是 JIA 和 JIAN
        //  如果都是increment 则 mutations中没有对应的方法
        ...mapMutations(['JIA','JIAN']),

        
        // 程序员亲自写方法
        /* incrementOdd(){
            this.$store.dispatch('jiaOdd',this.n)
        },
        incrementWait(){
            this.$store.dispatch('jiaWait',this.n)   
        } */

        // 借助mapActions 生成对应的方法。方法中会调用dispatch去联系actions(对象写法)
        // ...mapActions({incrementOdd:'jiaOdd',increment:'jiaWait'}),

        // 借助mapActions 生成对应的方法，方法中会调用dispatch去联系actions（数组写法）
        ...mapActions(['jiaOdd','jiaWait'])
    },
    computed:{
        // 借助 mapState生成计算属性，从state中读取数据。（对象方法）
        // ...mapState({sum:'sum',school:'school',subject:'subject'}) 计算属性名和数据名相同可以用简写形式，但用数组写法，看视频

        // 借助mapState生成计算属性，从state中读取数据。（数组写法）
        ...mapState(['sum','school','subject']),

        // 借助 mapGetters 生成计算属性，从getters中读取数据（对象写法）
        // ...mapGetters({bigSum:'bigSum'})
        // 借助mapGetters 生成计算属性，从getters中读取数据（数组写法）
        ...mapGetters(['bigSum'])
    } 
}

</script>

<style>

</style>