<template>
  <div>
		<h1 class="title">你好啊</h1>
		<School/>
		<Student/>
	</div>
</template>

<script>
// 不使用scope 样式类名相同引起冲突时，引入的顺序会影响最终呈现结果，后引入的会覆盖之前的样式
    import School from './components/School'
    import Student from './components/Student'
    export default {
		name:'App',
		components:{School,Student}
	}
</script>

<style scoped>
	.title{
		color: red;
	}
</style>