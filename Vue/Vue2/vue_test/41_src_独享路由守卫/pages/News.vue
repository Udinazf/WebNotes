<template>
  <ul>
    <li :style="{ opacity }">欢迎学习Vue</li>
    <li>news001<input type="text" /></li>
    <li>news002<input type="text" /></li>
    <li>news003<input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  /* beforeDestroy() {
    console.log("News组件即将被销毁了");
    clearInterval(this.timer)
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  }, */
  // news组件出现即激活
  activated() {
    console.log("News组件被激活了");
    this.timer = setInterval(() => {
      console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  // news消失被切走，但没有被销毁时失活
  deactivated() {
    console.log("News组件失活了");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>