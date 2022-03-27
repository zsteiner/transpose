<template>
  <div class="wrapper">
    <select class="select input" :name="name" v-model="inputValue">
      <option disabled selected :value="label">
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

<script>
export default {
  name: 'Select',
  props: {
    label: {
      type: String,
      default: 'Input Label',
      required: true,
    },
    name: {
      type: String,
      default: 'inputlabel',
      required: true,
    },
    options: {
      type: Array,
      default: () => [],
      required: true,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    required: {
      type: Boolean,
      default: false,
    },
    selectedValue: {
      type: String,
    },
    value: {
      type: String,
      default: null,
    },
  },
  computed: {
    inputValue: {
      get() {
        return this.value;
      },
      set(newValue) {
        this.$emit('input', newValue);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  border: $border-width solid $info;
  color: $default;
  margin: 2rem auto 4rem;
  max-width: 25rem;
  min-width: 18rem;
  position: relative;

  input,
  select {
    color: $default;
  }
}

.input {
  border: $border-width solid transparent;
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
  padding: $input-padding;
  position: relative;
  width: 100%;
  z-index: 1;

  &:focus {
    outline: none;
  }
}
</style>
