<script setup>
import SearchBar from '@/components/Search.vue'
import MovieCard from '@/components/MovieCard.vue'
import { ref } from 'vue'
import data from '@/data/data.json'

const movies = ref(data.filter((item) => item.category === 'Movie'))
const search = (searchValue) => {
  if (searchValue.length > 0) {
    movies.value = movies.value.filter(
      (m) => m.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    )
  } else {
    movies.value = data.filter((item) => item.category === 'Movie')
  }
}
</script>

<template>
  <main class="container mx-auto">
    <SearchBar placeholder="Search for movies" @search="search" />
    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Movies</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
      </div>
    </section>
  </main>
</template>
