<script setup>
import SearchBar from '@/components/Search.vue'
import MovieCard from '@/components/MovieCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const loading = ref(false)
const allMovies = ref([])
const allSeries = ref([])
const movies = ref([])
const series = ref([])

async function getMovies() {
  try {
    loading.value = true
    const response = await axios.get('https://cu16821.tw1.ru/api/movie')
    let data = response.data
    // Парсим поле thumbnail у каждого фильма
    data = data.map((item) => {
      return {
        ...item,
        thumbnail: JSON.parse(item.thumbnail),
      }
    })
    allMovies.value = data.filter((item) => item.category === 'Movie')
    allSeries.value = data.filter((item) => item.category === 'TV Series')

    movies.value = [...allMovies.value] // копия массива
    series.value = [...allSeries.value]
  } catch (error) {
    console.error('Ошибка при загрузке фильмов:', error)
  } finally {
    loading.value = false
  }
}

function search(searchValue) {
  if (searchValue.length > 0) {
    const query = searchValue.toLowerCase()
    movies.value = allMovies.value.filter((movie) => movie.title.toLowerCase().includes(query))
    series.value = allSeries.value.filter((series) => series.title.toLowerCase().includes(query))
  } else {
    movies.value = [...allMovies.value]
    series.value = [...allSeries.value]
  }
}

onMounted(() => {
  getMovies()
})
</script>

<template>
  <div>
    <SearchBar placeholder="Search for bookmarked shows" @search="search" />

    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">Bookmarked Movies <span v-if="loading" class="text-2xl text-[#FC4747]"> - Loading</span></h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in movies.slice(0, 9)" :key="movie.title" :movie="movie" />
      </div>
    </section>
    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">TV Series <span v-if="loading" class="text-2xl text-[#FC4747]"> - Loading</span></h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in series.slice(0, 3)" :key="movie.title" :movie="movie" />
      </div>
    </section>
  </div>
</template>
