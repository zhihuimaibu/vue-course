const app = Vue.createApp({
	data() {
		return {
			inputClass: '',
			isVisible: true,
			inlineColor: ''
		}
	},
	computed: {
		toggle() {
			return {
				visible: this.isVisible,
				hidden: !this.isVisible
			}
		}
	},
	methods: {
		display() {
			this.isVisible = !this.isVisible;
		}
	}
});
app.mount('#assignment');