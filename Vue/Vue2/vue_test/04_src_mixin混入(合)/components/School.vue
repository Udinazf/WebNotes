<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{address}}</h2>
    </div>
</template>

<script>
    // 引入一个混合（mixin)
    // import {hunhe,hunhe2} from '../mixin'

    export default {
        name:'School',
		data() {
			return {
				name:'bilibili',
				address:'online',
                // 混合时如果有与data中相同的数据，以data为主
				x:666
			}
		},
        // 局部混合
		// mixins:[hunhe,hunhe2],
    }
</script>

<style>

</style>