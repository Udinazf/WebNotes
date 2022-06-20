<template>
	<div class="app">
		<h3>我是App组件</h3>
		<!-- suspense类比插槽，默认准备了两个插槽default和fallback -->
		<Suspense>
			<!-- 这里放着本应该展示的组件 -->
			<template v-slot:default>
				<Child/>
			</template>
			<!-- 这里展示“应急计划” -->
			<template v-slot:fallback>
				<h3>稍等，加载中...</h3>
			</template>
		</Suspense>
	</div>
</template>

<script>
	// import Child from './components/Child'//静态引入，app组件和child组件一起加载，app等child加载完才显示
	import {defineAsyncComponent} from 'vue'  // 定义一个异步组件
	const Child = defineAsyncComponent(()=>import('./components/Child')) //异步（动态）引入，网速慢时可以发现app先出来，child组件后出来
	export default {
		name:'App',
		components:{Child},
	}
</script>

<style>
	.app{
		background-color: gray;
		padding: 10px;
	}
</style>