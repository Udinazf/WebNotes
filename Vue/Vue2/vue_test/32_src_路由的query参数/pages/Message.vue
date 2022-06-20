<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- 跳转路由并携带query参数，to的字符串写法 -->
        <!-- :表示双引号中是js代码，然后发现是模板字符串，就可以识别m.id等 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">
          {{m.title.slice(0, 3) + "..."}}
        </router-link>&nbsp;&nbsp; -->

        <!-- 跳转路由并携带query参数，to的对象写法 -->
        <router-link
          :to="{
            path: '/home/message/detail',
            query: {
              id: m.id,
              title: m.title,
            },
          }">
          {{ m.title.slice(0, 3) + "..." }}
        </router-link>
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
      messageList: [
        { id: "001", title: "消息001" },
        { id: "002", title: "消息002" },
        { id: "003", title: "消息003" },
      ],
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
};
</script>

<style>
</style>