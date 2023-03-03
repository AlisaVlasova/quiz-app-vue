<script setup lang="ts">
import { ref, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';

import { getQuizeById } from '@/api'

import Question from '@/components/Question/Question.vue';
import Header from '@/components/Question/Header.vue';

import type { Option, Quiz } from '@/types';

const route = useRoute();

const quiz = ref<Quiz>()
const currentQuestionId = ref(1)
const score = ref(0)

const isLoading = ref(false)
const isError = ref(false)
const isScoreVisible = ref(false)

const currentQuestion = computed(() => (
  quiz.value?.questions.find(item => item.id === currentQuestionId.value) || null
))

onMounted(async () => {
  await fetchQuiz()
})

async function fetchQuiz(): Promise<void> {
  isLoading.value = true

  try {
    quiz.value = await getQuizeById(+route.params.id)

  } catch (error) {
    console.log(error)
  }

  isLoading.value = false
}

function handleAnswer(answer: Option): void {
  if (answer.isCorrect) {
    score.value += 1
  }

  if (currentQuestionId.value === quiz.value?.questions.length) {
    isScoreVisible.value = true

    return
  }

  currentQuestionId.value += 1
}
</script>

<template>
  <div class="quiz">
    <template v-if="!quiz">
      <h3 v-if="isLoading">Loading</h3>

      <h3 v-else-if="isError">Error</h3>
    </template>

    <template v-else>
      <h2 v-if="isScoreVisible">
        Score: {{ score }} / {{ quiz.questions.length }}

        <RouterLink class="quiz__button" to="/">Try another quiz</RouterLink>
      </h2>

      <template v-else-if="currentQuestion">
        <Header
          class="quiz__header"
          :totalQuestionsCount="quiz.questions.length"
          :currentQuestionId="currentQuestionId"
        />
        <Question
          :key="currentQuestionId"
          :question="currentQuestion"
          @answer="handleAnswer"
        />
      </template>
    </template>
  </div>
</template>

<style scoped lang="scss">
.quiz {
  text-align: center;

  &__header {
    margin-bottom: 28px;
  }

  &__button {
    display: block;
    margin: 16px auto 0;
    width: fit-content;
    padding: 8px 12px;
    border: 1px solid var(--color-text);
    border-radius: 4px;
    color: var(--color-text);
    text-decoration: none;
  }
}
</style>
