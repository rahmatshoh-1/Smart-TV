<script setup>
import MovieCard from './MovieCard.vue'
import { ref } from 'vue'
import data from '@/data/data.json'

const movies = ref(data.filter((item) => item.category === 'Movie'))
</script>

<template>
  <section>
    <h1 class="text-preset-1 font-light mt-10 mb-8">Movies</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
      <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
    </div>
  </section>
</template>
