<template>
  <a-sub-menu v-if="menu">
    <template
      v-if="menu.meta.iconComponent"
      #icon
    >
      <component :is="menu.meta.iconComponent" />
    </template>
    <template #title>
      {{ menuTitle }}
    </template>
    <template
      v-for="subMenu in menu.children"
      :key="subMenu.name"
    >
      <SubMenu
        v-if="subMenu.children && subMenu.children.length"
        :menu="subMenu"
      />
      <MenuItem
        v-else
        :menu="subMenu"
      />
    </template>
  </a-sub-menu>
</template>

<script setup lang='ts'>
import { RouteRecordNormalized, RouteRecordRaw } from 'vue-router'
import MenuItem from './MenuItem.vue'


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

