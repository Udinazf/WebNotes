<template>
  <div>
    <button @click="isShow = !isShow">显示/隐藏</button>
    <!-- 动画 -->
    <!-- Animate.css，动画库https://animate.style -->
    <!-- 页面元素没有transition这个标签 -->
    <transition-group
      appear 
      name="animate__animated animate__bounce" 
      enter-active-class="animate__swing"
      leave-active-class="animate__backOutUp"
    >
      <h1 v-show="!isShow" key="1">你好啊！</h1>
      <h1 v-show="isShow" key="2">一起来学习吧！</h1>
    </transition-group>
  </div>
</template>

<script>
import 'animate.css'
export default {
  name: "Test2",
  data() {
    return {
      isShow: true,
    };
  },
};
</script>

<style scoped>
h1 {
  background-color: orange;
}

</style>