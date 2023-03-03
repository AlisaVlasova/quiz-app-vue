<script setup lang="ts">

type Props = {
  totalQuestionsCount: number,
  currentQuestionId: number,
}

const { totalQuestionsCount, currentQuestionId } = defineProps<Props>()
</script>

<template>
	<div class="header">
		<p class="header__progress">
			Question {{ currentQuestionId }} / {{ totalQuestionsCount }}
		</p>

		<div class="header__bar">
			<div
				class="header__bar-inner"
				:style="{ width: 100 * currentQuestionId / totalQuestionsCount + '%' }"
			></div>
		</div>
	</div>
</template>

<style scoped lang="scss">
.header {
	display: flex;
	align-items: center;

	&__progress {
		flex-shrink: 0;
		margin-right: 16px;
	}

	&__bar {
		padding: 2px;
		height: 10px;
		width: 100%;
		background: var(--color-text);
		border-radius: 4px;

		&-inner {
			height: 100%;
			border-radius: 4px;
			background: var(--vt-c-black);
			transition: all 0.3s;
		}
	}
}
</style>