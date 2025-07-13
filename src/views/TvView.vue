<script setup>
import SearchBar from '@/components/Search.vue'
import MovieCard from '@/components/MovieCard.vue'
import axios from 'axios'
import { ref, onMounted } from 'vue'

const loading = ref(false)
const movies = ref([])
const allMovies = ref([])

async function getMovies() {
  try {
    loading.value = true
    const response = await axios.get('http://api.testilac.beget.tech/api/movie')
    let data = response.data
    // Парсим поле thumbnail у каждого фильма
    data = data.map((item) => {
      return {
        ...item,
        thumbnail: JSON.parse(item.thumbnail),
      }
    })
    allMovies.value = data.filter((item) => item.category === 'TV Series')
    movies.value = [...allMovies.value] // копия массива
  } catch (error) {
    console.error('Ошибка при загрузке фильмов:', error)
  }finally{
    loading.value = false
  }
}

function search(searchValue) {
  if (searchValue.length > 0) {
    movies.value = allMovies.value.filter((movie) =>
      movie.title.toLowerCase().includes(searchValue.toLowerCase()),
    )
  } else {
    movies.value = [...allMovies.value]
  }
}

onMounted(() => {
  getMovies()
})
</script>

<template>
  <div>
    <SearchBar placeholder="Search for TV series" @search="search" />
    <section>
      <h1 class="text-preset-1 font-light mt-10 mb-8">TV Series <span v-if="loading" class="text-2xl text-[#FC4747]"> - Loading</span></h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        <MovieCard v-for="movie in movies" :key="movie.title" :movie="movie" />
      </div>
    </section>
  </div>
</template>
