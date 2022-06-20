<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :todos="todos" @addTodo="addTodo"/>
        <MyList :todos="todos" :checkTodo="checkTodo" :deleteTodo="deleteTodo"/>
        <MyFooter :todos="todos" @checkAllTodo="checkAllTodo" @clearAllDone="clearAllDone"/>
      </div>
    </div>
  </div>
</template>

<script>
// 不使用scope 样式类名相同引起冲突时，引入的顺序会影响最终呈现结果，后引入的会覆盖之前的样式
import MyHeader from "./components/MyHeader";
import MyList from "./components/MyList";
import MyFooter from "./components/MyFooter";

export default {
  name: "App",
  components: { MyHeader, MyList, MyFooter },
  data() {
    return {
      // 由于todos是MyHeader组件和MyFooter组件都在使用，所以放在App中（状态提升）
      // localStorage里面为null时,todos为[]
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods: {
    // 添加一个todo
    addTodo(todoObj){
      // console.log('我是App组件，我收到了数据：',x)
      this.todos.unshift(todoObj)
    },
    // 勾选or取消勾选一个todo
    checkTodo(id){
      this.todos.forEach(todo => {
        if(todo.id === id) todo.done = !todo.done
      });
    },
    // 删除一个todo
    deleteTodo(id){
      this.todos = this.todos.filter( todo => todo.id !== id)
    },
    // 全选or取消全选
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done)
    },
    // 清除所有已经完成的todo
    clearAllDone(){
      this.todos = this.todos.filter( todo => !todo.done)
    }

  },
  watch: {
    // 这里需要深度监视，要不然勾选无效
    todos:{
      deep:true,
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value))
      }
    }
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}

</style>