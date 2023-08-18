const express = require('express')
const app = express()


app.use((request,response,next) => {
    console.log('有人请求服务器了');
    console.log('请求的资源是',request.url);
    next()
})

app.get('/students',(req,res) =>{
    const students = [
        {id:'001',name:'tom',age:18},
        {id:'002',name:'jerry',age:16},
        {id:'003',name:'tony',age:19},
    ]
    res.send(students)
})

app.listen(5000,()=>{console.log('服务器已启动');})