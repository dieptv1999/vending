<template>
  <div></div>
  <router-view v-slot="{ Component }">
    <component :is="Component" :custom-prop="prop" />
  </router-view>
</template>

<script>

export default {
  name: "App",
  components: {}
}
</script>

<style scoped>

</style>