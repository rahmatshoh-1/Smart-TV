<template>
  <div
    v-if="visible"
    class="fixed inset-0 bg-black/90 flex items-center justify-center z-50"
  >
    <div class="relative w-full max-w-4xl p-4">
      <button
        @click="$emit('close')"
        class="absolute top-2 right-2 text-white text-3xl z-50 cursor-pointer"
        aria-label="Close video player"
      >
        ✕
      </button>

      <!-- Простой <video> элемент для инициализации Plyr -->
      <video
        ref="videoRef"
        class="w-full rounded-xl overflow-hidden"
        controls
        playsinline
        preload="auto"
      ></video>
    </div>
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import Plyr from 'plyr'
import 'plyr/dist/plyr.css'

const props = defineProps({
  source: {
    type: String,
    required: true,
  },
  visible: {
    type: Boolean,
    required: true,
  },
})

const videoRef = ref(null)
let player = null

const initPlayer = () => {
  if (player) {
    player.destroy()
    player = null
  }

  player = new Plyr(videoRef.value, {
    autoplay: true,
    controls: ['play', 'progress', 'current-time', 'fullscreen'],
  })

  player.source = {
    type: 'video',
    sources: [
      {
        src: props.source,
        type: 'video/mp4',
      },
    ],
  }

  player.play().catch((err) => {
    console.warn('Autoplay blocked or error:', err)
  })
}

watch(
  () => props.visible,
  (isVisible) => {
    if (isVisible) {
      setTimeout(() => {
        if (videoRef.value) {
          initPlayer()
        }
      }, 50) // Даем DOM прогрузиться
    } else {
      if (player) {
        player.pause()
        player.destroy()
        player = null
      }
    }
  }
)

onBeforeUnmount(() => {
  if (player) {
    player.destroy()
    player = null
  }
})
</script>
