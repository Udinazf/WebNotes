<template>
  <div class="app">
    <h1>{{ msg }}，学生姓名是：{{studentName}}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或v-on） -->
    <!-- <Student v-on:atguigu="getStudentName"/> -->
    <!-- <Student @atguigu="getStudentName" @demo="m1"/> -->
	<!-- 只触发一次 -->
    <!-- <Student @atguigu.once="getStudentName"/> -->

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第二种写法，使用ref） -->
    <!-- 组件里使用原生的事件会被认为是自定义事件，需要emit；若加上修饰符.native，则识别为原生dom事件 -->
    <Student ref="student" @click.native="show"/>
  </div>
</template>

<script>
import School from "./components/School";
import Student from "./components/Student";
export default {
  name: "App",
  components: { School, Student },
  data() {
    return {
      msg: "你好啊！",
      studentName:''
    };
  },
  methods: {
    getSchoolName(name) {
      console.log("App收到了学校名：", name);
    },
    getStudentName(name,...params) {
      console.log("App收到了学生名：", name,params);
      this.studentName = name
    },
	  m1(){
	    console.log('demo事件被触发了！')
	  },
    show(){
			alert('触发了粉色框的点击事件')
		}
  },
  mounted() {
	/* // 这种方更灵活，可以设置等待3秒后再绑定事件
    setTimeout(() => {
      //   绑定atguigu事件
      this.$refs.student.$on("atguigu", this.getStudentName);
    }, 3000); */

	// 绑定自定义事件
    this.$refs.student.$on("atguigu", this.getStudentName);
	// 绑定自定义事件（一次性）
    // this.$refs.student.$once("atguigu", this.getStudentName);
  },
};
</script>

<style scoped>
.app {
  background-color: grey;
  padding: 5px;
}
</style>