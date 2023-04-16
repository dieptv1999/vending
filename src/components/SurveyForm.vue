<template>
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
    <vue-base-input
        v-model:value="msg"
        v-model:is-valid="isValid"
        class="w-full"
        label="Username"
        input-type="text"
        :label-inside="true"
        :show-border="false"

    >
    </vue-base-input>

    <vue-base-input
        v-model:value="msg"
        v-model:is-valid="isValid"
        class="w-full"
        label="Password"
        input-type="text"
        :label-inside="true"
        :show-border="false"

    >
    </vue-base-input>
    <div class="flex-1"></div>
    <div
        class="text-4xl text-slate-500 hover:text-slate-700 active:text-slate-500"
        @click="() => changeShowSurvey(false)"
    >
      <UiCircleCloseO/>
    </div>
  </div>
</template>

<script>
import {UiCircleCloseO} from "@kalimahapps/vue-icons";
import vueBaseInput from 'vue-base-input'
import 'vue-base-input/src/assets/vue-base-input-tailwind-css.css';
import '../assets/input.scss'

export default {
  name: "SurveyForm",
  components: {
    vueBaseInput,
    UiCircleCloseO,
  },
  props: {
    changeShowSurvey: Function,
  },
  data () {
    return {
      msg: '',
      isValid: '',
    };
  },
  computed: {
    internalValue: {
      get: function () {
        return this.value;
      },
      set: function (val) {
        this.$emit('input', val);
      }
    }
  },
}
</script>

<style scoped>

</style>