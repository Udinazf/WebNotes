<template>
	<h2>当前求和为：{{sum}}</h2>
	<button @click="sum++">点我+1</button>
	<hr>
	<h2>当前的信息为：{{msg}}</h2>
	<button @click="msg+='！'">修改信息</button>
	<hr>
	<h2>姓名：{{person.name}}</h2>
	<h2>年龄：{{person.age}}</h2>
	<h2>薪资：{{person.job.j1.salary}}K</h2>
	<button @click="person.name+='~'">修改姓名</button>
	<button @click="person.age++">增长年龄</button>
	<button @click="person.job.j1.salary++">涨薪</button>
</template>

<script>
	import {ref,reactive,watch} from 'vue'
	export default {
		name: 'Demo',
		setup(){
			//数据
			let sum = ref(0)
			let msg = ref('你好啊')
			let person = ref({
				name:'梅哲仁',
				age:18,
				job:{
					j1:{
						salary:20
					}
				}
			})
			
			console.log(person)

			// 这里监视的是ref定义的RefImpl对象sum
			watch(sum,(newValue,oldValue)=>{
				console.log('sum的值变化了',newValue,oldValue)
			})

			// 这里监视的是ref求助reactive定义的proxy对象person.value(可以通过控制台输出的person查看)，其监视是深层次的
			/* watch(person.value,(newValue,oldValue)=>{
				console.log('person的值变化了',newValue,oldValue) // 此处无法正确的获取oldValue
			}) */
			
			// 这里监视的是ref定义的RefImpl对象person
			watch(person,(newValue,oldValue)=>{
				console.log('person的值变化了',newValue,oldValue)
			},{deep:true})


			//返回一个对象（常用）
			return {
				sum,
				msg,
				person
			}
		}
	}
</script>

