<template>
  <a-menu-item
    v-if="menu"
    :key="menu.name"
  >
    <template
      v-if="menu.meta && menu.meta.iconComponent"
      #icon
    >
      <component :is="menu.meta && menu.meta.iconComponent" />
    </template>
    <router-link :to="menu.path">
      {{ menuTitle }}
    </router-link>
  </a-menu-item>
</template>

<script setup lang='ts'>
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'

const props = defineProps<{
  menu?: RouteRecordNormalized | RouteRecordRaw
}>()

// 路由的标题
const menuTitle = computed(() => {
  const {
    name,
    meta,
  } = props.menu || {}
  return meta.title || name
})
</script>
