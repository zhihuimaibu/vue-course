<template>
	<section>
			<h3>{{ fullName }}</h3>
			<base-badge
				:type="role"
				:caption="role.toUpperCase()"
			></base-badge>
			<p>{{ infoText }}</p>
	</section>
</template>

<script>
export default {
	props: ['fullName', 'infoText', 'role'],
};
</script>

