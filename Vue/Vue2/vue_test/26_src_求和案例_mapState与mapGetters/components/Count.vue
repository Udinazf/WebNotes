<template>
  <div>
    <!-- 简化state中数据写法 -->
    <h1>当前求和为：{{ sum }}</h1>
    <h3>当前求和放大10倍为：{{ bigSum }}</h3>
    <h3>我在{{ school }}，学习{{ subject }}</h3>
    <!-- v-model.number强制类型转换为数字 -->
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">当前求和为奇数再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
import {mapState,mapGetters} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1, //用户选择的数字
    };
  },
  computed: {
    //靠程序员自己亲自去写计算属性
    /* sum(){
				return this.$store.state.sum
			},
			school(){
				return this.$store.state.school
			},
			subject(){
				return this.$store.state.subject
			}, */

    //借助mapState生成计算属性，从state中读取数据。（对象写法）
    // mapState()函数会生成一个对象，然后使用扩展运算符结构，获取里面的各计算属性
    // 模板中由{{he}}代替{{sum}}
    // ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

    //借助mapState生成计算属性，从state中读取数据。（数组写法）
    ...mapState(["sum", "school", "subject"]),

    /* ******************************************************************** */

    /* bigSum(){
				return this.$store.getters.bigSum
			}, */

    //借助mapGetters生成计算属性，从getters中读取数据。（对象写法）
    // ...mapGetters({bigSum:'bigSum'})

    //借助mapGetters生成计算属性，从getters中读取数据。（数组写法）
    ...mapGetters(["bigSum"]),
  },
  methods: {
    increment() {
      // commit直接联系mutations
      this.$store.commit("JIA", this.n);
    },
    decrement() {
      this.$store.commit("JIAN", this.n);
    },
    incrementOdd() {
      // dispatch联系actions
      this.$store.dispatch("jiaOdd", this.n);
    },
    incrementWait() {
      this.$store.dispatch("jiaWait", this.n);
    },
  },
  mounted() {
    const x = mapState({he:'sum',xuexiao:'school',xueke:'subject'})
    console.log(x);
  },
};
</script>

<style lang="css">
button {
  margin-left: 5px;
}
</style>