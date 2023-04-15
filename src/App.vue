<template>
  <div class="relative">
    <div class="fixed top-0 left-0 w-full flex justify-center items-center h-[76px] z-50 px-4 md:px-8
     bg-white lg:bg-transparent bg-opacity-80 backdrop-filter backdrop-blur-xl shadow-lg lg:shadow-none">
      <div class="max-w-screen-xl w-full flex justify-between items-center">
        <router-link to="/">
        <img :src="require('./assets/logo.png')" alt="logo" class="max-w-[90px] max-h-[44px]" v-motion-roll-top/>
        </router-link>
        <div class="text-4xl cursor-pointer">
        <TiThMenu class="text-[#fa5b0f]" />
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { TiThMenu  } from "@kalimahapps/vue-icons";

export default {
  name: "App",
  components: {
    TiThMenu
  }
}
</script>

<style scoped>

</style>