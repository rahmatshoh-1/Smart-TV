<script setup>
import SearchBar from '@/components/Search.vue'
import TrandingCard from '@/components/TrandingCard.vue'
import MovieCard from '@/components/MovieCard.vue'

import { ref, computed, onMounted } from 'vue'
import axios from 'axios'

import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'

// Основные состояния
const allMovies = ref([])
const movies = ref([])

// Загрузка фильмов
const getMovies = async () => {
  try {
    const response = await axios.get('http://api.testilac.beget.tech/api/movie')
    let data = response.data

    // Распарсим thumbnail, если нужно
    data = data.map(item => ({
      ...item,
      thumbnail: typeof item.thumbnail === 'string' ? JSON.parse(item.thumbnail) : item.thumbnail
    }))

    allMovies.value = data
    movies.value = [...data]
  } catch (error) {
    console.error('Ошибка при загрузке фильмов:', error)
  }
}

// Поиск
const search = (searchValue) => {
  const query = searchValue.toLowerCase()
  if (query.length > 0) {
    movies.value = allMovies.value.filter(m =>
      m.title.toLowerCase().includes(query)
    )
  } else {
    movies.value = [...allMovies.value]
  }
}

// Фильтры
const trendingMovies = computed(() =>
  movies.value.filter(m => m.isTrending)
)

const recommendedMovies = computed(() =>
  movies.value.filter(m => !m.isTrending)
)

// Загрузка при монтировании
onMounted(getMovies)
</script>

<template>
  <main>
    <SearchBar placeholder="Search for movies or TV series" @search="search" />
    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Trending</h1>
      <div class="overflow-hidden max-w-full">
        <Swiper :slides-per-view="'auto'" :space-between="40" class="trending-swiper">
          <SwiperSlide v-for="movie in trendingMovies" :key="movie.title" class="!w-auto">
            <TrandingCard :movie="movie" />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>

    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Recommended for you</h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in recommendedMovies" :key="movie.title" :movie="movie" />
      </div>
    </section>
  </main>
</template>
