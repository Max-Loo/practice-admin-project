<template>
  <div>
    <a-config-provider>
      <NuxtLayout name="default">
        <NuxtPage />
      </NuxtLayout>
    </a-config-provider>
  </div>
</template>

<script setup lang='ts'>
// https://github.com/nuxt/framework/issues/3141
window.onerror = function(e: string){
  if(e.includes('NotFoundError:')){
    document.location.reload()
    return true;
  }
}
</script>