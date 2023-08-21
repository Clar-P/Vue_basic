<template>
    <div class="zong">
        <div class="posi">
            <div class="row">
                <div class="Header-up">
                    <div class="page-header"><h1>Vue Router Demo</h1></div>
                </div>
            </div>
            
            <div class="line"></div>

            <div class="left">
                    <div class="list-group">
                        <a class="list-group-item active" href="./about.html">About</a>
                        <div class="list-line"></div>
                        <a class="list-group-item" href="./home.html">Home</a>
                    </div>

                <div class="coll">
                    <div class="panel">
                        <div class="penal-body">
                            此处到底展示什么软件，得看用户点哪个导航项
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name:'App',
}
</script>

<style>
    .zong{
        margin: 0 auto;
    }
    .posi{
        width: 600px;
        margin:50px auto;
    }
    .line{
        width: 100%;
        height: 1px;
        margin: 20px auto;
        background-color: rgb(150, 150, 150);
    }
    .left{
        display: flex;
        justify-content: space-between;
    }
    .list-group{
        display: flex;
        flex-direction: column;
        width: 100px;
        height: 80px;
        justify-content: space-around;
        border: 1px solid rgb(150, 150, 150);
        border-radius: 4px;
        overflow: hidden;
    }
    .list-line{
        width: 100%;
        height: 1px;
        background-color: rgb(150, 150, 150);
    }
    a{
        text-decoration: none;
        display: block;
        color: rgb(150, 150, 150);
        font-size: 18px;
        width: 100%;
        line-height: 39px;
        height: 39.5px;
        padding-left: 10px;
    }
    a:active{
        background-color: aqua;
    }
    .coll{
        width: 400px;
        height: 600px;
    }

    
</style>