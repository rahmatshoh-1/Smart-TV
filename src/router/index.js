import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import MoviesView from '@/views/MoviesView.vue'
import TvView from '@/views/TvView.vue'
import BookmarkView from '@/views/BookmarkView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/bookmark',
      name: 'Bookmark',
      component: BookmarkView,
    },
    {
      path: '/tv',
      name: 'TV',
      component: TvView,
    },
    {
      path: '/movies',
      name: 'Movies',
      component: MoviesView,
    },
  ],
})

export default router
