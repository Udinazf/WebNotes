<template>
  <div>
      <button @click="isShow = !isShow">显示/隐藏</button>
      <!-- 动画 -->
      <!-- name的值对应xxx-enter-active，若没有name，默认是v-enter-active -->
      <!-- appear使得页面刷新后会有进入动画，否则没有 -->
      <!-- 页面元素没有transition这个标签 -->
      <transition name="hello" appear>
        <h1 v-show="isShow">你好啊！</h1>
      </transition>
      
  </div>
</template>

<script>
export default {
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
}
</script>

<style scoped>
h1{
    background-color: orange;
}

.hello-enter-active{
    animation: move 0.5s linear;
}

.hello-leave-active{
    animation: move 0.5s linear reverse;
}

@keyframes move {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>