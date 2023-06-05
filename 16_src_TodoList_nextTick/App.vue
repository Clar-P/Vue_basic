<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <List :todos="todos"></List>
                <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import pubsub from 'pubsub-js'
import MyHeader from './components/MyHeader.vue'
import List from './components/List.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name:'App',
    components:{MyHeader,List,MyFooter},
    data(){
        return {
            todos:JSON.parse(localStorage.getItem('todos'))  || []
        }
    },
    methods:{
        // 添加一个todo
        addTodo(todoObj){
            this.todos.unshift(todoObj)
        },
        // 取消或勾选一个todo
        checkTodo(id){
            this.todos.forEach((todo) => {
                if(todo.id === id) todo.done = !todo.done
            })
        },
        // 更新一个todo
        updateTodo(id,title){
            this.todos.forEach((todo) => {
                if(todo.id === id) todo.title = title
            })
        },
        // 删除一个id
        deleteTodo(_,id){
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        // 全选或取消全选
        checkAllTodo(e){
            this.todos.forEach((todo)=>{
                todo.done = e
            })
        },
        // 清除所有已经完成的todo
        clearAllTodo(){
            this.todos = this.todos.filter((todo) => {
                return !todo.done
            })
        }

    },
    watch:{
        todos:{
            deep:true,
            handler(value){
                localStorage.setItem('todos',JSON.stringify(value))
            }
        }
    },
    mounted(){
        this.$bus.$on('checkTodo',this.checkTodo)
        this.$bus.$on('updateTodo',this.updateTodo)
        this.pubId = pubsub.subscribe('deleteTodo',this.deleteTodo)
    },
    beforeDestroy(){
        this.$bus.off('checkTodo')
        this.$bus.off('updateTodo')
        pubsub.unsunscribe(this.pubId)
    }
}
</script>

<style>
    /* base */
    body {
        background-color: #fff;
    }

    .btn {
        display: inline-block;
        padding: 4px 12px;
        margin-bottom:0;
        font-size:14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 10px 0 rgba(255, 255, 255, 0.2),0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border:1px solid #bd362f
    }

    .btn-edit {
        color: #fff;
        background-color: skyblue;
        border:1px solid rgb(91, 162, 190);
        margin-right:5px
    }

    .btn-danger:hover {
        color:#fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline:none;
    }

    .todo-container {
        width:600px;
        margin:0 auto;
    }

    .todo-container .todo-wrap {
        padding:10px;
        border:1px solid #ddd;
        border-radius:5px;
    }
</style>

