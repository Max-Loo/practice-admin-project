<template>
  <a-layout-header
    class="flex items-center justify-between bg-white"
    style="padding: 0 24px;"
  >
    <MenuUnfoldOutlined
      v-if="store.collapsed"
      @click.stop="switchCollapsed"
    />
    <MenuFoldOutlined
      v-else
      @click.stop="switchCollapsed"
    />
    <MenuSearchModal :options="menuOptions" />
  </a-layout-header>
</template>

<script setup lang='ts'>
import MenuSearchModal from 'menu-search-modal'
import type { MenuSearchModalOption } from 'menu-search-modal'
import 'menu-search-modal/lib/MenuSearchModal/style.css'
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons-vue'
import { useLayoutCollapsedStore } from '~~/stores/useLayoutCollapsedStore'

const menuOptions = ref<MenuSearchModalOption[]>([])
const store = useLayoutCollapsedStore()
const { switchCollapsed } = store


</script>
