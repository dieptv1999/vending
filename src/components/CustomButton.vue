<template>
  <router-link
      :to="link"
      @click="onClick != null ? onClick() : () => {}"
      :class="'rounded-full bg-[#fa5b0f] px-6 py-2 shadow-xl font-poppins uppercase cursor-pointer ' + className">
    {{ text }}
  </router-link>
</template>

<script>
export default {
  name: "CustomButton",
  props: {
    text: String,
    className: String,
    link: String,
    onClick: {
      required: false,
      type: Function,
    },
  },
}
</script>

<style scoped>

</style>