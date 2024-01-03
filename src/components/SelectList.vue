<template>
  <div class="wrapper">
    <select
      v-model="inputValue"
      class="select input"
      :name="name"
    >
      <option
        disabled
        selected
        :value="label"
      >
        {{ label }}
      </option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Option } from '@/types';
import { PropType } from 'vue';

export default {
  name: 'SelectList',

  props: {
    label: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array as PropType<Option[]>,
      required: true,
    },
    readonly: Boolean,
    required: Boolean,
    selectedValue: {
      type: String,
      default: '',
    },
  },

  emits: ['update:modelValue'],

  computed: {
    inputValue: {
      get() {
        return this.modelValue;
      },
      set(newValue) {
        this.$emit('update:modelValue', newValue);
      },
    },
  },
};
</script>

<style scoped>
.wrapper {
  border: var(--border-width) solid var(--info);
  color: var(--default);
  margin: 2rem auto 4rem;
  max-width: 25rem;
  min-width: 18rem;
  position: relative;
}

.wrapper input,
.wrapper select {
  color: var(--default);
}

.input {
  border: var(--border-width) solid transparent;
  height: 100%;
  overflow: hidden;
  width: 100%;
}

.select {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: transparent;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3E%3Cpath fill='%23007fb2' fill-rule='evenodd' d='M14.5452263,4 L16,5.499604 L8.24120675,13.497492 L8,13.248 L7.75879325,13.497492 L5.64881475e-13,5.499604 L1.45477373,4 L8,10.746 L14.5452263,4 Z'/%3E%3C/svg%3E%0A");
  background-position: right 1rem center;
  background-repeat: no-repeat;
  background-size: 1em;
  border: 0;
  cursor: pointer;
  display: block;
  font-size: 1rem;
  line-height: 1.25;
  outline: none;
  padding: var(--input-padding);
  position: relative;
  width: 100%;
  z-index: 1;
}

.select:focus {
  outline: none;
}
</style>
