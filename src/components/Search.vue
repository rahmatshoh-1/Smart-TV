<script setup>
import { ref } from 'vue'

defineProps({
  placeholder: {
    type: String,
    default: 'Search',
  },
})
const searchValue = ref('')
const emit = defineEmits(['search'])
</script>

<template>
  <div class="flex gap-[32px] text-white relative">
    <label for="search">
      <img src="/img/icon-search.svg" alt="search" />
    </label>
    <input
      v-model="searchValue"
      @input="emit('search', searchValue)"
      type="search"
      class="w-full border-b caret-red-500 border-b-transparent focus:border-b-[#5A698F] pb-2 outline-none pr-2 text-preset-2 font-light transition-colors duration-200"
      :placeholder="placeholder"
      id="search"
    />
  </div>
</template>
