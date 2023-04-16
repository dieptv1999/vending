<template>
  <div></div>
  <router-view v-slot="{ Component }">
    <component :is="Component" :custom-prop="prop" />
  </router-view>
  <ModalsContainer />
</template>

<script>
import { ModalsContainer } from 'vue-final-modal'

export default {
  name: "App",
  components: {
    ModalsContainer,
  }
}
</script>

<style scoped>

</style>