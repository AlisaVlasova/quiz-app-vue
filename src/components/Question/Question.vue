<script setup lang="ts">
import { ref, watch } from 'vue';
import type { Option, Question } from '../../types';

type Props = {
  question: Question
}

type Emit = {
  (e: 'answer', answer: Option): void
}

const { question } = defineProps<Props>()
const emit = defineEmits<Emit>()

const answer = ref<Option | null>(null)

watch(answer, (newValue) => {
	if (!newValue) {
		return
	}

	setTimeout(() => {
  	emit('answer', newValue)
	}, 500)
})

</script>

<template>
	<div class="question">
		<h2 class="question__title">
				{{ question.text }}?
		</h2>

		<ul class="question__options">
			<li
				class="question__option option"
				:class="!!answer && answer.id === option.id && {
					'option--correct': option.isCorrect,
					'option--wrong': !option.isCorrect
				}"
				v-for="option in question.options"
				:key="option.id + question.id"
				@click.once="answer = option"
			>
			  <span class="option__variant">
					{{ option.label }}
				</span>
				
				<label class="option__label">
					{{ option.text }}
				</label>
			</li>
		</ul>
	</div>
</template>

<style scoped lang="scss">
.question {
	text-align: center;

	&__title {
		margin-bottom: 28px;
	}

	&__options {
		padding: 0;
		display: grid;
		grid-template-columns: 1fr 1fr;
		gap: 12px 8px;
	}
}

.option {
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 28px;
	padding: 4px 8px;
	border-radius: 16px;
	box-shadow: 0;
	border: 1px solid;
	list-style: none;
	cursor: pointer;
	transition: all 0.3s;

  &:hover {
    box-shadow: 0 1px 3px 0;
  }

	&--correct {
		color: green;
	}

	&--wrong {
		color: red;
	}

	&__variant {
		position: absolute;
		top: 0;
		left: 8px;
	}
}
</style>