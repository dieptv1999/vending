<template>
  <div class="flex justify-center items-center h-[100vh] z-10 relative lg:px-8 landing">
    <div class="max-w-screen-xl w-full relative">
      <carousel :items-to-show="1">
        <slide v-for="slide in vfImages" :key="slide.id" class="">
          <div class="carousel__item rounded-none lg:rounded-3xl overflow-hidden shadow-3xl h-[100vh] lg:h-[80vh]">
            <img src="../assets/slider1.jpg" alt="" class="h-full object-cover rounded-none lg:rounded-3xl overflow-hidden"/>
          </div>
        </slide>

        <template #addons>
          <navigation>
            <template #next>
              <div class="p-2 text-lg lg:text-3xl lg:p-4 rounded-full bg-[#fa5b0f] text-white lg:translate-x-[24px] z-50">
                <FaArrowRightLong/>
              </div>
            </template>
            <template #prev>
              <div class="p-2 text-lg lg:text-3xl lg:p-4 rounded-full bg-[#fa5b0f] text-white lg:translate-x-[-24px] z-50">
                <FaArrowLeftLong/>
              </div>
            </template>
          </navigation>
          <!--          <pagination/>-->
        </template>
      </carousel>
      <div
          v-if="showMenu"
          class="absolute-center w-[350px] z-10"
      >
        <div
            v-motion
            :initial="{
      opacity: 0,
      y: 100,
    }"
            :enter="{
      opacity: 1,
      opacity: 1,
      y: 0,
    }"

            class="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg px-8 py-8 flex items-center
            flex-col space-y-6 h-full rounded-2xl"
        >
          <transition name="fadeOne">
            <CustomButton text="Book Data" class-name="w-full text-lg font-semibold text-white flex justify-center"
                          link="/detail"/>
          </transition>
          <transition name="fadeTwo">
            <CustomButton text="Game 1" class-name="w-full text-lg font-semibold text-white flex justify-center"
                          link="/detail"/>
          </transition>
          <div class="flex-1"></div>
          <div
              class="text-4xl text-slate-500 hover:text-slate-700 active:text-slate-500"
              @click="() => changeShowMenu(false)"
          >
            <UiCircleCloseO/>
          </div>
        </div>
      </div>
      <div v-else-if="!showMenu" class="absolute-center max-w-[650px] w-full flex items-center justify-center">
        <DecodeText
            title="KEBUDAYAN"
            description="Seni Persembahan, Makanan Tradisional, Adat Resam Dan Lain-lain"
            text-button="Maklumat Lanjut"
            :on-click="() => changeShowMenu(true)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation,} from 'vue3-carousel'
import {FaArrowLeftLong, FaArrowRightLong, UiCircleCloseO} from "@kalimahapps/vue-icons";
import CustomButton from './CustomButton';
import DecodeText from "@/components/DecodeText";

export default {
  components: {
    DecodeText,
    Carousel,
    Slide,
    // Pagination,
    Navigation,
    FaArrowLeftLong,
    FaArrowRightLong,
    CustomButton,
    UiCircleCloseO,
  },
  name: 'HelloWorld',
  props: {},
  data: () => ({
    vfOptions: {
      autoplay: true
    },
    vfImages: [
      {
        id: 1, url: '../assets/slider1.jpg'
      },
      {
        id: 2,
        url: '../assets/slider2.jpg'
      }, {
        id: 3,
        url: '../assets/slider1.jpg'
      }],
    vfTransitions: ['fade', 'cube', 'book', 'wave'],
    vfCaptions: [
      'Caption for image 1',
      'Caption for image 2',
      'Caption for image 3',
    ],
    showMenu: false
  }),
  methods: {
    getImage(imagePath) {
      return require(imagePath);
    },
    changeShowMenu(val) {
      this.showMenu = val;
    }
  },
}
</script>

<style scoped>

</style>
