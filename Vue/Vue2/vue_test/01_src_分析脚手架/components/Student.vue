<template>
	<div>
		<h2>学生姓名：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
	</div>
</template>

<script>
	export default {
		// 组件名需要使用多个个单词驼峰命名，只写Student会报错
		name:'StudentName',
		data(){
			return {
				name:'张三',
				age:18
			}
		}
	}
</script>