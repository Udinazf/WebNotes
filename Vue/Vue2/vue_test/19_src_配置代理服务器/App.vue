<template>
  <div id="root">
    <button @click="getStudents">获取学生信息</button>
		<button @click="getCars">获取汽车信息</button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "App",
  methods: {
    getStudents(){
      // 本服务器地址为http://localhost:8080，想要跨域获取http://localhost:5000的信息

      // 若这里get('http://localhost:8080/favicon.ico')，可以直接获取public文件夹下文件，不需要跨域
      // vue.config.js中有对端口5000的代理，这里实际上是跨域访问http://localhost:5000/students
      // 适用于开启服务器代理方式一
      axios.get('http://localhost:8080/students').then(
        response => {
          console.log('请求成功了',response.data)
        },
        error => {
          console.log('请求失败了',error.message)
        }
      )
    },
    // 适用于开启服务器代理方式二
    getCars(){
      axios.get('http://localhost:8080/demo/cars').then(
        response => {
          console.log('请求成功了',response.data)
        },
        error => {
          console.log('请求失败了',error.message)
        }
      )
    }
  },
};
</script>

