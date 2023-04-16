<template>
  <VueFinalModal
      class="flex justify-center items-center"
      content-class="flex flex-col p-4 bg-white dark:bg-black rounded border border-gray-100 dark:border-gray-800"
  >
    <div class="w-[90vw] h-[90vh] relative">
    <detail-page :src="url" />
    </div>
  </VueFinalModal>
</template>

<script>
import { VueFinalModal } from 'vue-final-modal'
import DetailPage from "@/pages/DetailPage";

export default {
  name: "DetailModal",
  components: {
    VueFinalModal,
    DetailPage,
  },
  props: {
    url: String,
  }
}
</script>