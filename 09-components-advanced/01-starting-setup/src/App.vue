<template>
	<div>
		<the-header></the-header>
		<badge-list></badge-list>
		<user-info>
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		</user-info>
	</div>
</template>

<script>
export default {
	data() {
		return {
			activeUser: {
				name: 'Maximilian Schwarzmüller',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}

section {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

section div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

section h2 {
	margin: 0.5rem 0;
	color: #3a3a3a;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	display: flex;
	flex-direction: row;
}

li {
	margin-right: 1rem;
}
</style>