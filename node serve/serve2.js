const express = require('express')
const app = express()
app.use((request,response,next) => {
    console.log('有人请求服务器了');
    console.log('请求的资源是',request.url);
    next()
})

app.get('/cars',(req,res) =>{
    const cars = [
        {id:'001',name:'ben',age:18},
        {id:'002',name:'audo',age:16},
        {id:'003',name:'bwm',age:19},
    ]
    res.send(students)
})

app.listen(5001)