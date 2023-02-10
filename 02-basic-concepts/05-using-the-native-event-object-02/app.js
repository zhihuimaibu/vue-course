const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
			// fullname: '',
		};
	},
	watch: {
		counter(value) {
			if (value > 50) {
				const that = this;
				setTimeout(function () {
					that.counter = 0;
				}, 2000)
			}
		}
	},
	computed: {
		setFullName() {
			console.log('sdfasdf');
			return this.name + this.lastName;
		}
	},
	methods: {
		setName(event, lastName) {
			this.name = event.target.value + ' ' + lastName;
		},
		confirmName() {
			if (this.name === '' || this.lastName === '') {
				this.confirmedName = '';
			} else {
				this.confirmedName = this.name + ' ' + this.lastName;
			}
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		resetName() {
			this.name = '';
		}
	}
});

// `this` points to the vm instance
const vm = app.mount('#events');
// vm.counter
// vm.$data.counter;
