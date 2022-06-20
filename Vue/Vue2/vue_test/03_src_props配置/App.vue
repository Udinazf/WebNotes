<template>
  <div>
      <!-- age是数字，前面加 冒号是v-bind绑定，这样双引号里面就是表达式，传过去不是字符串 -->
      <Student name="李四" sex="女" :age="18"/>
      <Student name="王五" sex="男"/>
  </div>
</template>

<script>
    import Student from './components/Student.vue'
    export default {
        name:'App',
        components:{
            Student
        },
        
    }
</script>
