import { defineStore } from 'pinia'

// 记录侧边栏是否折叠的全局状态
export const useLayoutCollapsedStore = defineStore('layoutCollapsed', {
  state: () => ({
    collapsed: false,
  }),
  actions: {
    switchCollapsed () {
      this.collapsed = !this.collapsed
    },
  },
})