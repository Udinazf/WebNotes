const express = require('express')
const app = express()

app.use((request,response,next) => {
    console.log('有人请求服务器2了');
    // console.log('请求的资源是：',request.url);
    // console.log('请求来自于',request.get('Host'));
    next()
})

app.get('/cars',(request,response) => {
    const cars = [
        {id:'001',brand:'奥迪',price:1100000},
        {id:'002',brand:'奔驰',price:1220000},
        {id:'003',brand:'宝马',price:1330000}
    ]
    response.send(cars)
})

app.listen(5001,(err) => {
    if(!err) console.log('服务器2启动成功了，请求汽车信息地址为：http://localhost:5001/cars')
})