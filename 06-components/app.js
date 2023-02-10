const app = Vue.createApp({
	data() {
		return {
			friendContracts: [{
				id: 'Manuel Lorenz',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'manuel@localhost.com'
			},
			{
				id: 'Julie Jones',
				name: 'Julie Jones',
				phone: '097876 543 221',
				email: 'julie@localhost.com'
			}
			]
		}
	},
}
);

app.component('friend-contract', {
	template: `
		<li>
		<h2>{{contract.name}}</h2>
		<button @click="toggleDetail">
				Show Details
		</button>
		<ul v-if="detailsAreVisiable">
				<li><strong>Phone:</strong> {{contract.phone}}</li>
				<li><strong>Email:</strong> {{contract.email}}</li>
		</ul>
	</li>
	`,
	data() {
		return {
			detailsAreVisiable: false,
			contract: {
				id: 'Manuel Lorenz',
				name: 'Manuel Lorenz',
				phone: '01234 5678 991',
				email: 'manuel@localhost.com'
			}
		}
	},
	methods: {
		toggleDetail() {
			this.detailsAreVisiable = !this.detailsAreVisiable;
		}
	}
});

app.mount('#app')