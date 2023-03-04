<script setup lang="ts">
import { onMounted, ref, computed } from 'vue';

import { getQuizes } from '../api'

import Card from '../components/QuizesList/Card.vue'
import Header from '../components/QuizesList/Header.vue'

import type { Quiz } from '@/types';

const quizes = ref<Quiz[]>([])
const query = ref('')
const isLoading = ref(false)

onMounted(() => {
  if (!quizes.value.length) {
    fetchQuizes()
  }
})

const visibleQuizes = computed(() => (
  [...quizes.value].filter(
    quiz => quiz.name.toLowerCase().includes(query.value.toLowerCase())
  ))
)

async function fetchQuizes(): Promise<void> {
  isLoading.value = true

  try {
    quizes.value = await getQuizes()    

  } catch (error) {
    console.log(error)
  }

  isLoading.value = false
}
</script>

<template>
  <div class="quizzes">
    <h3
      class="quizzes__message"
      v-if="isLoading"
    >
      Loading
    </h3>

    <template v-else>
      <Header @search="(newVal: string) => query = newVal" />

      <h3
        class="quizzes__message"
        v-if="!visibleQuizes.length"
        >
          Not found
      </h3>

      <div v-else class="quizzes__list">
        <Card
          v-for="quiz in visibleQuizes"
          :key="quiz.id"
          :quiz="quiz"
        />
      </div>
    </template>
  </div>
</template>

<style scoped lang="scss">
.quizzes {
  &__message {
    text-align: center;
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 36px;
    margin-top: 42px;
  }
}
</style>