<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ person.name }}</h2>
  <h2>年龄：{{ person.age }}</h2>
  <h3>工作：{{ person.job.type }}</h3>
  <h3>工资：{{ person.job.salary }}</h3>
  <h3>爱好：{{ person.hobby }}</h3>
  <h3>测试的数据c：{{ person.job.a.b.c }}</h3>
  <button @click="changeInfo">修改个人信息</button>
</template>

<script>
import { ref, reactive } from "vue";
export default {
  name: "App",
  setup() {
    // 数据
    // ref定义一个响应式的数据
    // ref加工后的数据是一个RefImpl实例对象
    /* let name = ref('梅哲仁');
    let age = ref(18);
    let job = reactive({
      type:'前端工程师',
      salary:'30k',
      a:{
        b:{
          c:666
        }
      }
    });
    let hobby = reactive(['吃饭','睡觉']); */

    let person = reactive({
      name: "梅哲仁",
      age: 18,
      job: {
        type: "前端工程师",
        salary: "30k",
        a: {
          b: {
            c: 666,
          },
        },
      },
      hobby: ['吃饭','睡觉']
    });

    // 方法
    function changeInfo() {
      // 以下修改页面无反应
      // name = '路人甲'
      // age = 20

      // 正确修改方式
      /* name.value = "路人甲";
      age.value = 20;
      console.log(name, age);

      job.type = "后端工程师";
      job.salary = "40k";
      job.a.b.c = 888;
      console.log(job); */

      person.name = "路人甲";
      person.age = 20;
      person.job.type = "后端工程师";
      person.job.salary = "40k";
      person.job.a.b.c = 888;
      person.hobby[0] = "打游戏";
    }

    // 返回一个对象（常用），对象中的属性、方法, 在模板中均可以直接使用。
    return {
      person,
      changeInfo,
    };
  },
};
</script>

