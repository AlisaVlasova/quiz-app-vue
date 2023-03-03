<script setup lang="ts">
import { RouterLink } from 'vue-router'
const { quiz } = defineProps(['quiz'])
</script>

<template>
  <RouterLink
    :to="'/quiz/' + quiz.id"
    class="card"
    :key="quiz.id"
  >
    <img
      class="card__image"
      :src="quiz.img"
      :alt="quiz.name"
    >
    <div class="card__content">
      <h2 class="card__title">
        {{ quiz.name }}
      </h2>
      <p class="card__description">
        {{ quiz.questions.length }} questions
      </p>
    </div>
  </RouterLink>
</template>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  width: 250px;
  height: 200px;
  overflow: hidden;
  color: inherit;
  box-shadow: 0 1px 4px 0 var(--color-text);
  border-radius: 8px;
  text-decoration: none;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 2px 5px 0 var(--color-text);
  }

  &__image {
    height: 55%;
    object-fit: cover;
  }

  &__content {
    height: 100%;
    padding: 8px 16px;
  }

  &__title {
    margin: 0 0 8px;
  }

  &__description {
    margin: 0;
  }
}
</style>