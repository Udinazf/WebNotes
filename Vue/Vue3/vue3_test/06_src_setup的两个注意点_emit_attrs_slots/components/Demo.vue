<template>
	<h1>个人信息</h1>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<button @click="test">测试触发一下Demo组件的Hello事件</button>
</template>

<script>
	import {reactive} from 'vue'
	export default {
		name: 'Demo',
		props:['msg','school'],
		emits:['hello'],
		beforeCreate() {
			console.log('---beforeCreate---')
		},
		// 这里props是上面props接收的东西
		setup(props,context){
			// console.log('---setup---',this)  // this->undefined
			console.log('---setup---',props)
			console.log('---setup---',context)
			// console.log('---setup---',context.attrs) //相当与Vue2中的$attrs，通过组件标签传递过来但是没有被props接受的会放在attrs里面
			// console.log('---setup---',context.emit) //触发自定义事件的。
			console.log('---setup---',context.slots) //插槽
			//数据
			let person = reactive({
				name:'梅哲仁',
				age:18
			})

			//方法
			function test(){
				context.emit('hello',666)
			}

			//返回一个对象（常用）
			return {
				person,
				test
			}
		}
	}
</script>

