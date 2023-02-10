var abc = '45325';
const vm = Vue.createApp({
	data() {
		return {
			result: 0,
		}
	},
	watch: {
		getRes() {
			console.log('watcher ....');
			const that = this;
			setTimeout(function () {
				console.log('asdfasf');
				that.result = 0;
			}, 5000);
		}
	},
	computed: {
		getRes() {
			if (this.result > 37) {
				return 'Too much!';
			} else if (this.result < 37) {
				return 'Not there yet';
			} else return this.result;
		},
	},
	methods: {
		add(num) {
			this.result = this.result + num;
		},
		getR() {
			alert('werawer');
		}
	}
}).mount('#assignment')