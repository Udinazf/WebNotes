<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  /* beforeDestroy() {
		console.log('About组件即将被销毁了')
	},*/
  /* mounted() {
		console.log('About组件挂载完毕了',this)
		// 路由组件的vc身上会增加属性：route和router，其中route是各组件自己独有的路由信息，而router是所有路由组件共有的唯一的路由器
		window.aboutRoute = this.$route
		window.aboutRouter = this.$router
	},  */

  //通过路由规则，进入该组件时被调用
  beforeRouteEnter(to, from, next) {
    console.log("About--beforeRouteEnter", to, from);
    if (to.meta.isAuth) {
      //判断是否需要鉴权
      if (localStorage.getItem("school") === "atguigu") {
        next();
      } else {
        alert("学校名不对，无权限查看！");
      }
    } else {
      next();
    }
  },

  //通过路由规则，离开该组件时被调用
  beforeRouteLeave(to, from, next) {
    console.log("About--beforeRouteLeave", to, from);
    next();
  },
};
</script>
