<template>
  <a-layout has-sider>
    <LayoutSider />
    <a-layout :style="{ marginLeft: (store.collapsed ? 80 : 200 ) + 'px' }">
      <LayoutHeader />
      <a-layout-content class="p-6 bg-gray-100 min-content-height">
        <slot />
      </a-layout-content>
      <!-- <a-layout-footer class="text-center">
        footer
      </a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script setup lang='ts'>
import LayoutSider from './components/LayoutSider.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import { useLayoutCollapsedStore } from '~~/stores/useLayoutCollapsedStore'

const store = useLayoutCollapsedStore()
</script>

<style scoped>
.min-content-height {
  min-height: calc(100vh - 64px);
}
</style>
