<script setup>
import { useRoute } from 'vue-router';
const route = useRoute()
</script>

<template>
  <nav
    class="bg-blue-900 px-[28px] py-[32px] w-full lg:h-[960px] lg:w-[96px] rounded-[20px] flex sm:flex-row md:flex-row lg:flex-col items-center justify-between">
    <div class="flex justify-between flex-row lg:flex-col items-center gap-[72px]">
      <img src="/img/tranding.svg" alt="" />
      <ul class="flex flex-row lg:flex-col items-center gap-10">
        <li>
          <router-link to="/">
            <svg width="20" height="21" viewBox="0 0 20 21"
              :class="route.name == 'Home' ? 'text-white' : 'text-[#5A698F]'" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M1 0.300018H8C8.6 0.300018 9 0.700018 9 1.30002V8.30002C9 8.90002 8.6 9.30002 8 9.30002H1C0.4 9.30002 0 8.90002 0 8.30002V1.30002C0 0.700018 0.4 0.300018 1 0.300018ZM1 11.3H8C8.6 11.3 9 11.7 9 12.3V19.3C9 19.9 8.6 20.3 8 20.3H1C0.4 20.3 0 19.9 0 19.3V12.3C0 11.7 0.4 11.3 1 11.3ZM19 0.300018H12C11.4 0.300018 11 0.700018 11 1.30002V8.30002C11 8.90002 11.4 9.30002 12 9.30002H19C19.6 9.30002 20 8.90002 20 8.30002V1.30002C20 0.700018 19.6 0.300018 19 0.300018ZM12 11.3H19C19.6 11.3 20 11.7 20 12.3V19.3C20 19.9 19.6 20.3 19 20.3H12C11.4 20.3 11 19.9 11 19.3V12.3C11 11.7 11.4 11.3 12 11.3Z"
                fill="currentColor" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Movies' }">
            <svg width="20" height="21" viewBox="0 0 20 21"
              :class="route.name == 'Movies' ? 'text-white' : 'text-[#5A698F]'" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M16.9556 0.300293H3.04444C1.36304 0.300293 0 1.66334 0 3.34474V17.2558C0 18.9372 1.36304 20.3003 3.04444 20.3003H16.9556C17.763 20.3003 18.5374 19.9795 19.1083 19.4086C19.6792 18.8377 20 18.0633 20 17.2558V3.34474C20 2.5373 19.6792 1.76293 19.1083 1.19199C18.5374 0.621046 17.763 0.300293 16.9556 0.300293ZM4 9.30029H2V7.30029H4V9.30029ZM4 11.3003H2V13.3003H4V11.3003ZM18 9.30029H16V7.30029H18V9.30029ZM18 11.3003H16V13.3003H18V11.3003ZM18 3.04029V4.30029H16V2.30029H17.26C17.4563 2.30029 17.6445 2.37826 17.7833 2.51703C17.922 2.65581 18 2.84403 18 3.04029ZM4 2.30029H2.74C2.54374 2.30029 2.35552 2.37826 2.21674 2.51703C2.07796 2.65581 2 2.84403 2 3.04029V4.30029H4V2.30029ZM2 17.5603V16.3003H4V18.3003H2.74C2.54374 18.3003 2.35552 18.2223 2.21674 18.0836C2.07796 17.9448 2 17.7566 2 17.5603ZM17.26 18.3003C17.6687 18.3003 18 17.969 18 17.5603V16.3003H16V18.3003H17.26Z"
                fill="currentColor" />
            </svg>

          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'TV' }">
            <svg width="20" height="21" viewBox="0 0 20 21"
              :class="route.name == 'TV' ? 'text-white' : 'text-[#5A698F]'" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M9.08 4.78138H20V20.3003H0V4.78138H4.92L2.22 1.50301L3.78 0.329391L7 4.20912L10.22 0.300293L11.78 1.50301L9.08 4.78138ZM2 6.72124V18.3604H12V6.72124H2ZM17 14.4807H15V12.5408H17V14.4807ZM15 10.601H17V8.66111H15V10.601Z"
                fill="currentColor" />
            </svg>
          </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'Bookmark' }">
            <svg width="18" height="21" viewBox="0 0 18 21"
              :class="route.name == 'Bookmark' ? 'text-white' : 'text-[#5A698F]'" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="M15.9267 0.300293C16.1294 0.300293 16.3233 0.339949 16.5083 0.419262C16.7991 0.533825 17.0305 0.714481 17.2023 0.961232C17.3741 1.20798 17.4601 1.48117 17.4601 1.7808V18.8198C17.4601 19.1194 17.3741 19.3926 17.2023 19.6394C17.0305 19.8861 16.7991 20.0668 16.5083 20.1813C16.3409 20.2518 16.147 20.2871 15.9267 20.2871C15.5037 20.2871 15.138 20.1461 14.8295 19.8641L9.00005 14.2593L3.17057 19.8641C2.85332 20.1549 2.4876 20.3003 2.07342 20.3003C1.87073 20.3003 1.67685 20.2606 1.49179 20.1813C1.20098 20.0668 0.969649 19.8861 0.797805 19.6394C0.625961 19.3926 0.540039 19.1194 0.540039 18.8198V1.7808C0.540039 1.48117 0.625961 1.20798 0.797805 0.961232C0.969649 0.714481 1.20098 0.533825 1.49179 0.419262C1.67685 0.339949 1.87073 0.300293 2.07342 0.300293H15.9267Z"
                fill="currentColor" />
            </svg>

          </router-link>
        </li>
      </ul>
    </div>
    <div class="rounded-full w-10 h-10">
      <a href="#">
        <img src="/img/image-avatar.png" alt="" />
      </a>
    </div>
  </nav>
</template>
