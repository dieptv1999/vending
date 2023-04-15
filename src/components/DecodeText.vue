<template>
  <div class="flex flex-col items-center">
    <div class="text-white text-4xl lg:text-6xl uppercase font-extrabold font-raleway tracking-wider" v-motion-slide-bottom>
      {{title}}
    </div>
    <div class="text-center text-white w-full mt-2 mb-24 lg:mb-8 tracking-widest" v-motion-slide-bottom>
      {{description}}
    </div>
    <CustomButton
        :text="textButton"
        class-name="text-white font-semibold tracking-wide text-lg"
        link="/"
        :on-click="onClick"
        v-motion-slide-bottom
    />
  </div>
</template>

<script>
import CustomButton from "@/components/CustomButton";

export default {
  name: "DecodeText",
  props: {
    title: String,
    description: String,
    textButton: String,
    onClick: {
      required: true,
      type: Function,
    },
  },
  components: {
    CustomButton,
  }
}
</script>

<style scoped>

</style>