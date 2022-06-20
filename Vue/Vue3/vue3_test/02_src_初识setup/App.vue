<template>
  <h1>个人信息</h1>
  <h2>姓名：{{ name }}</h2>
  <h2>年龄：{{ age }}</h2>
  <h2>性别：{{ sex }}</h2>
  <h2>a：{{ a }}</h2>
  <button @click="sayHello">说话(Vue3所配置的——sayHello)</button>
	<br>
	<br>
	<button @click="sayWelcome">说话(Vue2所配置的——sayWelcome)</button>
	<br>
	<br>
	<button @click="test1">测试一下在Vue2的配置中去读取Vue3中的数据、方法</button>
	<br>
	<br>
	<button @click="test2">测试一下在Vue3的setup配置中去读取Vue2中的数据、方法</button>
</template>

<script>
// 引入渲染函数
// import {h} from 'vue'

export default {
  name: "App",
  data() {
    return {
      sex: "男",
      a:'我是vue2中的a'
    };
  },
  methods: {
    sayWelcome() {
      alert("欢迎学习vue3");
    },
    test1() {
      console.log(this.sex);

      // 以下均可访问到，vue2中的配置可以访问到setup
      console.log(this.name);
      console.log(this.age);
      console.log(this.sayHello); 
    },
  },
  //此处只是测试一下setup，暂时不考虑响应式的问题。
  setup() {
    // 数据
    let name = "梅哲仁";
    let age = 18;
    // setup会覆盖vue2中的重名数据
    let a = '我是setup中的a';

    // 方法
    function sayHello() {
      alert(`我叫${name}，我${age}岁了，你好啊！`);
    }
    function test2() {
      console.log(name);
      console.log(age);
      console.log(sayHello);

      // 以下undefined，setup中无法访问到vue2中的配置
      console.log(this.sex);
      console.log(this.sayWelcome);
    }

    // 返回一个对象（常用），对象中的属性、方法, 在模板中均可以直接使用。
    return {
      name,
      age,
      sayHello,
      test2,
      a
    };

    // 返回一个函数（渲染函数）
    // return () => h('h1','测试返回一个渲染函数')
  },
};
</script>

