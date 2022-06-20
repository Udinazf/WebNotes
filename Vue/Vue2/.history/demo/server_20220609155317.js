const express = require('express')

const app = express()

app.get('/')

app.listen(5005,(err)=>{
    if(!err) console.log('服务器启动成功了！')
})