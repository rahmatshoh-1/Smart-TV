<script setup>
import Sidebar from '@/components/Sidebar.vue'
</script>
<template>
  <div class="flex flex-col lg:flex-row items-baseline justify-start my-[32px] gap-[32px]">
    <Sidebar />
    <main class="text-white">
      <slot />
    </main>
  </div>
</template>
