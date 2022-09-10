<template>
  <a-layout has-sider>
    <LayoutSider v-model:collapsed="collapsed" />
    <a-layout :style="{ marginLeft: (collapsed ? 80 : 200 ) + 'px' }">
      <LayoutHeader />
      <a-layout-content class="p-6 bg-gray-100">
        <slot />
      </a-layout-content>
      <!-- <a-layout-footer class="text-center">footer</a-layout-footer> -->
    </a-layout>
  </a-layout>
</template>

<script setup lang='ts'>
import LayoutSider from './components/LayoutSider.vue'
import LayoutHeader from './components/LayoutHeader.vue'

const collapsed = ref(false)

</script>

