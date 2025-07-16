<script setup>
import { ref } from 'vue'
import VideoPlayer from './VideoPlayer.vue'
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
const showPlayer = ref(false)

function playMovie() {
  showPlayer.value = true
}
</script>
<template>
  <div>
    <div class="relative group">
      <button
        class="cursor-pointer z-20 absolute top-4 right-4 w-8 h-8 rounded-full bg-grey-500 flex items-center justify-center">
        <img class="w-3 h-[14px]"
          :src="movie.isBookmarked ? '/img/icon-bookmark-full.svg' : '/img/icon-bookmark-empty.svg'"
          alt="icon-bookmark-empty" />
      </button>
      <img class="rounded-lg w-full h-full object-cover" :src="movie.thumbnail.regular.small" alt="the-great-lands" />
      <div
        class="absolute z-10 inset-0 bg-black/50 rounded-[8px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button @click="playMovie" class="text-white p-2.5 bg-white/50 rounded-full cursor-pointer flex items-center">
          <img src="/img/play.png" alt="" /> <span class="mx-4">Play</span>
        </button>
      </div>
    </div>

    <!-- 🎥 Плеер -->
    <VideoPlayer :source="movie.videoUrl || '/videos/1.mp4'" :visible="showPlayer" @close="showPlayer = false" />
    <div class="flex flex-col my-2">
      <div class="flex items-center gap-5 text-preset-5">
        <p>{{ movie.year }} •</p>
        <p class="flex items-center">
          <img class="mr-2" src="/img/icon-category-movie.svg" alt="" /> {{ movie.category }}
        </p>
        <p>• {{ movie.rating }}</p>
      </div>
      <h3 class="text-preset-3 text-left font-bold">{{ movie.title }}</h3>
    </div>
  </div>
</template>
