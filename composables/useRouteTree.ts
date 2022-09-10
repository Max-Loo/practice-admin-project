import type { Ref } from 'vue'
import type { RouteRecordNormalized } from 'vue-router'

// 构建每一层子节点
function buildChildren (routes: RouteRecordNormalized[], count = 0): RouteRecordNormalized[] {
  // 边界条件
  if (routes.length <= 1) {
    return routes
  }
  // 将不同的路由分开
  const mapObj: {
    [key: string]: RouteRecordNormalized[]
  } = {}
  routes.forEach(route => {
    const nameList = route.name.toString().split('-')

    if (mapObj[nameList[count]]) {
      mapObj[nameList[count]].push(route)
    } else {
      mapObj[nameList[count]] = [route]
    }
  })
  // 构建子节点
  const children = Object.keys(mapObj).map(key => {
    // 找出每个分支的根节点
    const rootIndex = mapObj[key].findIndex(route => {
      const nameList = route.name.toString().split('-')
      return nameList.length === count + 1
    })
    const root = (mapObj[key].splice(rootIndex, 1))[0]
    // 递归构建子节点
    root.children = buildChildren(mapObj[key], count + 1)
    return root
  })

  return children
}

// 构建一整颗树
function buildTree (routes: RouteRecordNormalized[]): RouteRecordNormalized {
  // 先把特殊的顶部根节点找出来
  const rootIndex = routes.findIndex(route => route.path === '/')
  const root = routes[rootIndex]
  root.children = buildChildren([
    ...routes.slice(0, rootIndex),
    ...routes.slice(rootIndex + 1),
  ])

  return root
}

export default function useRouteTree () {
  const routes = useRouter().getRoutes()
  return buildTree(routes)
}