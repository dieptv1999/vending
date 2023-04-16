<template>
  <div class="g-input">
    <VueInputUi
        v-model="internalValue"
        :label="label"
        :border-radius="2"
        :type="type"
        :size="size"
        :id="id"
        :required="required"
        :disabled="disabled"
        :clearable="clearable"
        :loader="loader" />
  </div>
</template>

<script>
import VueInputUi from 'vue-input-ui';
import 'vue-base-input/src/assets/vue-base-input-tailwind-css.css';

export default {
  name: 'g-input',
  components: { VueInputUi },
  props: {
    value: {
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    size: {
      type: String,
      default: null
    },
    label: {
      type: String,
      default: '[Label]'
    },
    id: {
      type: String,
      default: null
    },
    required: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    clearable: {
      type: Boolean,
      default: false
    },
    loader: {
      type: Boolean,
      default: false
    },
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
};
</script>

<style lang="scss">
.g-input {
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
}
</style>
