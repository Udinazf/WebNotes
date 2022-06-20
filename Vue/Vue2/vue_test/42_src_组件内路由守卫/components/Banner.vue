<template>
  <div class="col-xs-offset-2 col-xs-8">
    <div class="page-header">
      <h2>Vue Router Demo</h2>
      <button @click="back">后退</button>
      <button @click="forward">前进</button>
      <button @click="test">测试一下go</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Banner",
  methods: {
    back(){
      // console.log(this.$router)
      this.$router.back()
    },
    forward(){
      this.$router.forward()
    },
    test(){
      // 传入数字若为正数，即往前走正数步，若是负数，则连续后退负数的数值步
      this.$router.go(-2)
    }
  },
};
</script>
