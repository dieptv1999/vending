<template>
  <div v-if="src != null" class="relative z-10 w-full h-full">
<!--    <vue-iframe-->
<!--        src="https://pemetaanbudaya.jkkn.gov.my/"-->
<!--        allow="camera *; geolocation *; microphone *; autoplay *"-->
<!--        frame-id="detail-iframe"-->
<!--        @load="onLoad"-->
<!--        name="detail-frame"-->
<!--        width="150px"-->
<!--        height="200px"-->
<!--    />-->
    <div
        id="iframe-wrapper"
        class="h-full w-full"
    >
      <iframe
          v-if="loaded"
          :src="src"
          :style="iframe.style"
          :height="iframe.style.height"
          :width="iframe.style.width"
          type="application/pdf"
          frameborder="0"
          @load="onLoad"
      ></iframe>
    </div>
  </div>
  <loading :active="loading"
           :can-cancel="true"
           :on-cancel="onCancel"
           color="#fa5b0f"
           background-color="#808080"
           opacity="0.1"
           :is-full-page="true"></loading>
  <div
      class="nc-BgGlassmorphism absolute inset-x-0 top-0 min-h-0 pl-10 py-32 flex flex-col overflow-hidden z-0"
      data-nc-id="BgGlassmorphism"
  >
    <span class="bg-[#ef233c] w-80 h-80 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96" />
    <span class="bg-[#04868b] w-80 h-80 ml-10 -mt-10 rounded-full mix-blend-multiply filter blur-3xl opacity-20 lg:w-96 lg:h-9w-96 nc-animation-delay-2000" />
  </div>
</template>

<script>
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

export default {
  name: "DetailPage",
  components: {
    Loading,
  },
  setup() {
  },
  data: () => ({
    detailIframe: null,
    loaded: false,
    loading: true,
    iframe: {
      style: null,
      wrapperStyle: null,
    }
  }),
  props: {
    src: String,
  },
  methods: {
    onLoad(frame) {
      this.detailIframe = frame.contentWindow
      this.onCancel()
    },
    onCancel() {
      this.loading = false;
    }
  },
  mounted() {
    this.iframe.style = {
      height: "100%",
      width: "100%",
    }
    this.iframe.wrapperStyle = {
      height: "100%",
      width: "100%",
    }
    this.loaded = true;
  }
}
</script>

<style scoped>

</style>