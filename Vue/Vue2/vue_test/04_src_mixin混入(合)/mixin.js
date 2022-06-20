export const hunhe = {
    methods: {
        showName(){
            alert(this.name)
        }
    },
    mounted() {
		console.log('你好啊,有一个组件挂载完毕！共四个，一个vm，三个vc')
	},
}

export const hunhe2 = {
	data() {
		return {
			x:100,
			y:200
		}
	},
}