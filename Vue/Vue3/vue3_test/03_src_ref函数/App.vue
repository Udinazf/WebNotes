<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h3>工作：{{ job.type }}</h3>
  <h3>工资：{{ job.salary }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import {ref} from 'vue'
export default {
  name: "App",
  setup() {
    // 数据
    // ref定义一个响应式的数据
    // ref加工后的数据是一个RefImpl实例对象
    let name = ref('梅哲仁');
    let age = ref(18);
    let job = ref({
      type:'前端工程师',
      salary:'30k'
    })

    // 方法
    function changeInfo(){
      // 以下修改页面无反应
      // name = '路人甲'
      // age = 20

      // 正确修改方式
      name.value = '路人甲'
      age.value = 20
      console.log(name,age)
      
      job.value.type = '后端工程师'
      job.value.salary = '40k'
      console.log(job.value)
    }

    // 返回一个对象（常用），对象中的属性、方法, 在模板中均可以直接使用。
    return {
      name,
      age,
      job,
      changeInfo,
    };
  },
};
</script>

