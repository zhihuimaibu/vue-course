const app = Vue.createApp({
	data() {
		return {
			taskValue: '',
			tasks: [],
			display: true,
		}
	},
	computed: {
		buttonCaption() {
			return this.display ? 'Hide List' : 'Show List';
		}
	},
	methods: {
		addTask() {
			this.tasks.push(this.taskValue);
			this.taskValue = '';
		},
		toggleTaskList() {
			this.display = !this.display;
		}
	}
});
app.mount('#assignment');