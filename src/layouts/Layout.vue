<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>
<template>
  <div class="container mx-auto">
    <div class="flex flex-col lg:flex-row gap-8 my-8 md:px-4">
      <Sidebar />
      <main class="text-white w-full max-w-screen-xl mx-auto px-4">
        <slot />
      </main>
    </div>
  </div>
</template>
