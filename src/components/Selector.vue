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
.selection {
  display: flex;
  align-items: stretch;
  overflow: auto;
  padding: 1rem;
  text-align: center;
  align-self: stretch;
}

.button {
  display: block;
  width: 100%;
  padding: spacer(1);
  border: 0.0625rem solid lighten($info, 15%);
  border-radius: 0.25em;
  background-color: white;
  color: $default;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  transition: all 0.1s linear;
  -webkit-tap-highlight-color: transparent;

  &:focus,
  &.is-selected,
  &:hover {
    outline: 0;
    box-shadow: 0 0 0 0.25rem $secondary;
    border-color: transparent;
    color: $secondary;
  }
}

.empty {
  border: 0.25em dashed $info;
  color: $info;
  padding: spacer(0.25);

  &.is-selected,
  &:hover {
    box-shadow: none;
    border-color: $secondary;
    background-color: white;
    color: $secondary;
  }
}
</style>
