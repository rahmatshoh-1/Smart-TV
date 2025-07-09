<script setup>
defineProps({
  movie: {
    type: Object,
    required: true,
  },
})
</script>
<template>
  <div class="relative group cursor-grabbing w-[470px] h-[230px]">
    <button
      class="cursor-pointer absolute z-50 top-4 right-4 w-8 h-8 rounded-full bg-grey-500 flex items-center justify-center">
      <img class="w-3 h-[14px]"
        :src="movie.isBookmarked ? '/img/icon-bookmark-full.svg' : '/img/icon-bookmark-empty.svg'"
        alt="icon-bookmark-empty" />
    </button>
    <img class="rounded-lg w-full h-full object-cover" :src="movie.thumbnail.regular.small" alt="the-great-lands" />
    <div class="absolute h-full z-40 inset-0 bg-black/50 rounded-[8px] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button class="text-white p-2.5 bg-white/50 rounded-full cursor-pointer flex items-center ">
             <img src="/img/play.png" alt=""> <span class="mx-4">Play</span>
        </button>
      </div>
    <div class="absolute p-6 bottom-0 z-10 w-full h-[100px] rounded-b-lg bg-gradient-to-t from-black/75 to-transparent">
      <div class="flex flex-col my-2">
        <div class="flex items-center gap-5 text-preset-5">
          <p>{{ movie.year }} •</p>
          <p class="flex items-center">
            <img class="mr-2" src="/img/icon-category-movie.svg" alt="" /> {{ movie.category }}
          </p>
          <p>• {{ movie.rating }}</p>
        </div>
        <h3 class="text-preset-2 text-left font-medium leading-125">{{ movie.title }}</h3>
      </div>
    </div>
  </div>
</template>
