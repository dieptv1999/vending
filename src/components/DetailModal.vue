<template>
  <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"
  >
    <div class="w-[90vw] h-[90vh] relative">
      <detail-page :src="url"/>
      <div
          class="absolute top-0 right-0 h-[50px] w-[50px] flex justify-center items-center z-50 bg-white text-white text-2xl bg-opacity-20"
          @click="onConfirm()"
      >
        <CoCloseLg />
      </div>
    </div>
  </VueFinalModal>
</template>

<script>
import {VueFinalModal} from 'vue-final-modal'
import DetailPage from "@/pages/DetailPage";
import { CoCloseLg } from "@kalimahapps/vue-icons";

export default {
  name: "DetailModal",
  setup() {
    // eslint-disable-next-line no-unused-vars
  },
  components: {
    VueFinalModal,
    DetailPage,
    CoCloseLg,
  },
  props: {
    url: String,
    onConfirm: Function
  }
}
</script>