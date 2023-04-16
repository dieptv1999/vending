<template>
  <div class="relative">
    <div class="fixed top-0 left-0 w-full flex justify-center items-center h-[96px] z-50 px-4 md:px-8
     bg-transparent lg:bg-transparent lg:shadow-none">
      <div class="max-w-screen-xl w-full flex justify-between items-center">
        <router-link to="/">
          <img :src="require('../assets/logo.png')" alt="logo" class="max-w-full w-full object-contain max-h-[74px] lg:max-w-[450px] lg:max-h-[94px]" v-motion-roll-top/>
        </router-link>
        <div v-tooltip="'Open list website'" class="text-5xl cursor-pointer" @click="() => changeShowMenu(true)">
          <TiThMenu class="text-white"/>
        </div>
      </div>
    </div>
    <div class="flex justify-center items-center h-[100vh] z-10 relative landing">
      <div class="w-full relative">
        <carousel :items-to-show="1" :autoplay="4000" :wrap-around="true">
          <slide v-for="slide in vfImages" :key="slide.id" class="">
            <div class="carousel__item overflow-hidden shadow-3xl h-[100vh] w-full">
              <img :src="slide.url" alt="" class="h-full w-full object-cover"/>
            </div>
          </slide>

          <template #addons>
            <navigation>
              <template #next>
                <div
                    class="p-2 text-lg lg:text-3xl lg:p-4 rounded-full bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-[#fa5b0f] text-white lg:translate-x-[-44px] z-50 animate-opacity-animation"
                >
                  <FaAngleRight/>
                </div>
              </template>
              <template #prev>
                <div
                    class="p-2 text-lg lg:text-3xl lg:p-4 rounded-full bg-black bg-opacity-20 hover:bg-opacity-100 hover:bg-[#fa5b0f] text-white lg:translate-x-[44px] z-50 animate-opacity-animation">
                  <FaAngleLeft/>
                </div>
              </template>
            </navigation>
            <!--          <pagination/>-->
          </template>
        </carousel>
        <div
            v-if="showMenu"
            class="absolute-center max-w-[550px] w-full z-10"
        >
          <div
              v-motion
              :initial="{
      opacity: 0,
      y: 100,
    }"
              :enter="{
      opacity: 1,
      y: 0,
    }"

              class="bg-white bg-opacity-40 backdrop-filter backdrop-blur-lg shadow-lg px-8 py-8 flex items-center
            flex-col space-y-4 h-full rounded-2xl"
          >
            <transition name="fadeOne">
              <CustomButton text="Book Data" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url1)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Game 1" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url2)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Game 2" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Web 1" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Web 2" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Ecatalog" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="National song" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
            </transition>
            <transition name="fadeTwo">
              <CustomButton text="Online servey" class-name="w-full text-lg font-semibold text-white flex justify-center"
                            :on-click="() => onClickModel(url3)" link="/"/>
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
        <!--      <div v-else-if="!showMenu" class="absolute-center max-w-[650px] w-full flex items-center justify-center">-->
        <!--        <DecodeText-->
        <!--            title="KEBUDAYAN"-->
        <!--            description="Seni Persembahan, Makanan Tradisional, Adat Resam Dan Lain-lain"-->
        <!--            text-button="Maklumat Lanjut"-->
        <!--            :on-click="() => changeShowMenu(true)"-->
        <!--        />-->
        <!--      </div>-->
      </div>
    </div>
  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import {Carousel, Slide, Navigation,} from 'vue3-carousel'
import {FaAngleLeft, FaAngleRight, UiCircleCloseO, TiThMenu} from "@kalimahapps/vue-icons";
import CustomButton from './CustomButton.vue';
import {useModal} from "vue-final-modal";
import DetailModal from '../components/DetailModal.vue'

export default {
  components: {
    // DecodeText,
    Carousel,
    Slide,
    // Pagination,
    Navigation,
    FaAngleLeft,
    FaAngleRight,
    CustomButton,
    UiCircleCloseO,
    TiThMenu,
  },
  setup() {
    const { open, patchOptions, close } = useModal({
      component: DetailModal,
      attrs: {
        url: '',
        onConfirm() {
          close()
        },
      },
      slots: {
        default: '<p>The content of the modal</p>',
      },
    })

    return {
      open,
      patchOptions,
      close,
    }
  },
  name: 'HelloWorld',
  props: {},
  data: () => ({
    vfOptions: {
      autoplay: true
    },
    showMenu: false
  }),
  methods: {
    onClickModel(url) {
      const closeC = () => this.close();
      this.patchOptions({
        attrs: {
          url,
          onConfirm() {
            closeC()
          },
        }
      })
      this.open();
    },
    changeShowMenu(val) {
      this.showMenu = val;
    }
  },
  computed:{
    url1(){
      return "https://pemetaanbudaya.jkkn.gov.my/"
    },
    url2(){
      return ""
    },
    url3(){
      return ""
    },
    vfImages() {
      return "https://pemetaanbudaya.jkkn.gov.my/template/img/slider/slider1.jpg,https://pemetaanbudaya.jkkn.gov.my/template/img/slider/slider2.jpg,https://pemetaanbudaya.jkkn.gov.my/template/img/slider/slider3.jpg"?.split(",").map((img, idx) => ({id: idx, url: img}))
    }
  }
}
</script>

<style scoped>

</style>
