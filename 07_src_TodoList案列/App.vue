<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader :addTodo="addTodo"></MyHeader>
                <List :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"></List>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAllTodo="clearAllTodo"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue'
import List from './components/List.vue'
import MyFooter from './components/MyFooter.vue'

export default {
    name:'App',
    components:{MyHeader,List,MyFooter},
    data(){
        return {
            todos:[
                {id:'001',title:'考研',done:true},
                {id:'002',title:'考公',done:false},
                {id:'003',title:'转行',done:true}
            ]
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
        // 删除一个id
        deleteTodo(id){
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

