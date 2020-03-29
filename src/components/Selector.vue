<template>
  <div class="selection">
    <button class="button" @click="handleClick">
      <Instrument :instrument="instrument" />
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
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.selection {
  overflow: auto;
  padding: 1rem;
  text-align: center;
}

.button {
  display: inline-block;
  padding: spacer(1);
  width: 10rem;
  height: 10rem;
  border: 1px solid lighten($info, 15%);
  border-radius: 0.25em;
  background-color: white;
  color: $default;
  vertical-align: top;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  transition: all 0.1s linear;
  -webkit-tap-highlight-color: transparent;

  &.is-selected,
  &:hover {
    box-shadow: 0 0 0 0.25rem $secondary;
    border-color: transparent;
    color: $secondary;
  }

  &--empty {
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
}
</style>
