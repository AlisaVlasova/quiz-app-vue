<script setup lang="ts">
import { ref, defineEmits, watch } from 'vue';

type Emit = {
  (e: 'search', newVal: string): void
}

const emit = defineEmits<Emit>()

const query = ref('')

watch(query, (newVal) => {
  emit('search', newVal)
})

</script>
 
<template>
	<header class="header">
		<h1 class="header__title">Quizes</h1>
		<input
			v-model.trim="query"
			class="header__search"
			type="text"
			placeholder="Search..."
		>
	</header>
</template>

<style scoped lang="scss">
.header {
	display: flex;
	justify-content: space-between;
	align-items: center;

	&__title {
		margin-right: 20px;
	}

	&__search {
		width: 100%;
		padding: 8px 12px;
		background: inherit;
		outline: none;
		border: 1px solid transparent;
		border-bottom: 1px solid var(--color-text);
		color: var(--color-text);
		transition: all 0.3s;

		&:active,
		&:focus {
			border: 1px solid var(--color-text);
		}
	}
}
</style>