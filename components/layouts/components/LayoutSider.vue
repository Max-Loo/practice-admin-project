<template>
  <a-layout-sider
    :collapsed="collapsed"
    class="top-0 bottom-0 left-0 w-full h-screen mb-12"
    style="background-color: #374151; position: fixed;"
    collapsible
    :trigger="null"
  >
    <div class="flex flex-col w-full h-full">
      <!-- 顶部LOGO -->
      <div class="w-full h-16 px-4 py-3">
        <div class="w-full h-full bg-gray-200" />
      </div>
      <!-- 主体菜单 -->
      <LayoutMenu />
    </div>
  </a-layout-sider>
</template>

<script setup lang='ts'>
import LayoutMenu from './LayoutMenu/Index.vue'


const props = withDefaults(defineProps<{
  collapsed?: boolean
}>(), {
  collapsed: false,
})

</script>

