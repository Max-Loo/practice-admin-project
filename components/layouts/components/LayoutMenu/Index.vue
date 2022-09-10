<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    class="flex-grow h-full overflow-x-hidden overflow-y-scroll custom-menu"
  >
    <template
      v-for="menu in menuList"
      :key="menu.name"
    >
      <SubMenu
        v-if="menu.children && menu.children.length"
        :menu="menu"
      />
      <MenuItem
        v-else
        :menu="menu"
      />
    </template>
  </a-menu>
</template>

<script setup lang='ts'>
import MenuItem from './components/MenuItem.vue'
import SubMenu from './components/SubMenu.vue'

const openKeys = ref<string[]>([])
const selectedKeys = ref<string[]>([])

const routeTree = useRouteTree()
const menuList = routeTree.children



</script>

<style scoped>
.custom-menu::-webkit-scrollbar {
  display: none;
}
</style>
