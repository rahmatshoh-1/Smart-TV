<script setup>
import SearchBar from '@/components/Search.vue'
import TrandingCard from '@/components/TrandingCard.vue'
import MovieCard from '@/components/MovieCard.vue'

import { ref } from 'vue'
import data from '@/data/data.json'

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

const movies = ref(data)
const search = (searchValue) => {
  if (searchValue.length > 0) {
    movies.value = movies.value.filter(
      (m) => m.title.toLowerCase().indexOf(searchValue.toLowerCase()) >= 0,
    )
  } else {
    movies.value = data
  }
}
</script>

<template>
  <main class="container mx-auto">
    <SearchBar placeholder="Search for movies or TV series" @search="search" />
    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Trending</h1>
      <Swiper :slides-per-view="'auto'" :space-between="40" class="trending-swiper">
        <SwiperSlide v-for="movie in movies" :key="movie.title" class="!w-auto">
          <TrandingCard :movie="movie" />
        </SwiperSlide>
      </Swiper>
    </section>

    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Recommended for you</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
      </div>
    </section>
  </main>
</template>
