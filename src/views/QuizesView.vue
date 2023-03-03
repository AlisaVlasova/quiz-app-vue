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
    <Header @search="(newVal: string) => query = newVal" />

    <div v-if="visibleQuizes.length" class="quizzes__ist">
      <Card
        v-for="quiz in visibleQuizes"
        :key="quiz.id"
        :quiz="quiz"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.quizzes {
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 20px;
  }
}
</style>