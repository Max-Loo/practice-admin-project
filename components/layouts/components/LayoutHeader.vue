<template>
  <a-layout-header
    class="flex items-center justify-end bg-white"
  >
    <MenuSearchModal :options="menuOptions" />
  </a-layout-header>
</template>

<script setup lang='ts'>
import MenuSearchModal from 'menu-search-modal'
import type {MenuSearchModalOption} from 'menu-search-modal'
import 'menu-search-modal/lib/MenuSearchModal/style.css'


// const routes = u
const menuOptions = ref<MenuSearchModalOption[]>([])


</script>
