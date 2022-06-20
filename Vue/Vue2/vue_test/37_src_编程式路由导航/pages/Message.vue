<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带params参数，to的字符串写法 -->
        <!-- :表示双引号中是js代码，然后发现是模板字符串，就可以识别m.id等 -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">
          {{m.title.slice(0, 3) + "..."}}
        </router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带params参数，to的对象写法 -->
        <!-- 注意，这里params参数的to的对象写法里面只能使用命名路由name -->
        <router-link
          :to="{
            name: 'xiangqing',
            query: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title.slice(0, 3) + "..." }}
        </router-link>
        <button @click="pushShow(m)">push查看</button>
        <button @click="replaceShow(m)">replace查看</button>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
import axios from "axios";
import { nanoid } from "nanoid";
export default {
  name: "Message",
  data() {
    return {
      messageList: [],
    };
  },
  mounted() {
    this.messageList = [];
    for (let i = 0; i < 3; i++) {
      axios.get("https://api.uixsj.cn/hitokoto/get?type=social").then(
        (response) => {
          this.messageList.push({ id: nanoid(), title: response.data });
        },
        (error) => {
          alert(error.message);
        }
      );
    }
  },
  methods: {
    pushShow(m) {
      // console.log(this.$router)
      this.$router.push({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      });
    },
    replaceShow(m){
      this.$router.replace({
        name: "xiangqing",
        query: {
          id: m.id,
          title: m.title,
        },
      })
    }
  },
};
</script>

<style scoped>
button {
  margin-left: 10px;
}
</style>