<template>
  <div class="selection">
    <button :class="{ button: true, empty: isEmpty }" @click="handleClick">
      <Instrument :instrument="instrument" :empty="isEmpty" />
    </button>
  </div>
</template>

<script>
import Instrument from '@/components/Instrument.vue';

export default {
  name: 'Selector',
  components: {
    Instrument,
  },
  props: {
    instrument: {
      type: Object,
      default: () => {},
      required: true,
    },
  },
  computed: {
    isEmpty() {
      return !this.instrument.name;
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

.selection {
  align-items: stretch;
  align-self: stretch;
  display: flex;
  overflow: auto;
  padding: 1rem;
  text-align: center;
}

.button {
  background-color: white;
  border: 0.0625rem solid color.adjust($info, $lightness: 15%);
  border-radius: 0.25em;
  color: $default;
  cursor: pointer;
  display: block;
  line-height: 1;
  padding: spacer(1);
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: all 0.1s linear;
  width: 100%;

  &:focus,
  &.is-selected,
  &:hover {
    border-color: transparent;
    box-shadow: 0 0 0 0.25rem $secondary;
    color: $secondary;
    outline: 0;
  }
}

.empty {
  border: 0.25em dashed $info;
  color: $info;
  padding: spacer(0.25);

  &.is-selected,
  &:hover {
    background-color: white;
    border-color: $secondary;
    box-shadow: none;
    color: $secondary;
  }
}
</style>
