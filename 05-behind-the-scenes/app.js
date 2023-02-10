const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			// now we only store (directly) it when we need it
			this.message = this.$refs.userText.value;
			console.dir(this.$refs.userText);
		},
	},
	// 生命周期
	beforeCreate() {
		console.log('Before create');
	},
	created() {
		console.log('Created');
	},
	beforeMount() {
		console.log('Before mount');
	},
	mounted() {
		console.log('Mounted');
	},
	beforeUpdate() {
		console.log('Before update');
	},
	updated() {
		console.log('Updated');
	},
	beforeUnmount() {
		console.log('Before unmount');
	},
	unmounted() {
		console.log('Unmounted');
	},
});
const vm = app.mount('#app');

const app2 = Vue.createApp({
	data() {
		return {
			food: 'pizza'
		}
	}
});
app2.mount('#app2');

// 卸载实例
setTimeout(() => {
	app2.unmount();
}, 3000)


// 响应式原理，Proxy
const data = {
	message: 'Hello',
	longMessage: 'Hello world!'
}
const handler = {
	set(target, key, value) {
		if (key === 'message') {
			target.longMessage = value + 'World!'
		}
		target[key] = value;
	}
}
const proxy = new Proxy(data, handler)
proxy.message = 'Hello!!!!!'

console.log(proxy.longMessage);
console.log(proxy.message);
