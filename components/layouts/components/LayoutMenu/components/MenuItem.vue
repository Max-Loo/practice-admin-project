<template>
  <a-menu-item
    v-if="menu"
    :key="menu.name"
  >
    <template
      v-if="menu.meta.iconComponent"
      #icon
    >
      <component :is="menu.meta.iconComponent" />
    </template>
    <nuxt-link :to="menu.path">
      {{ menuTitle }}
    </nuxt-link>
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
