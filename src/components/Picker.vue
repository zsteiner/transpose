<template>
  <section class="picker">
    <button class="close" @click="handleClose">close</button>
    <ul>
      <li
        class="item"
        v-for="instrument in instruments"
        :key="instrument.iconName"
      >
        <button class="button" @click="selectInstrument(instrument.iconName)">
          <Instrument :instrument="instrument" stretch />
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import instruments from '@/constants/instruments';

import Instrument from '@/components/Instrument.vue';

export default {
  name: 'Picker',
  components: {
    Instrument,
  },
  data() {
    return {
      instruments,
    };
  },
  props: {
    selection: Number,
  },
  methods: {
    ...mapActions(['updateSelection']),
    handleClose() {
      this.$emit('click');
    },
    selectInstrument(instrument) {
      const { selection } = this;
      this.updateSelection({
        selection,
        instrument,
      });
      this.handleClose();
    },
  },
};
</script>

<style lang="scss" scoped>
@use "sass:color";

$list-border: 0.0625rem solid $info;
$size: 38rem;

.picker {
  border-bottom: $list-border;
  left: 0;
  max-height: 100vh;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;

  @media (min-width: $medium) {
    border: $list-border;
    left: 50%;
    margin-left: -#{$size / 2};
    margin-top: -#{$size / 2};
    max-height: $size;
    max-width: $size;
    top: 50%;
  }

  ul {
    background: color.adjust(white, $alpha: -0.05);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    height: 100%;
    list-style: none;
    margin: 0;
    overflow: scroll;
    padding: 0;
  }
}

.close {
  background: none;
  border: 0;
  color: $primary;
  font-size: 1.75rem;
  position: absolute;
  right: 0;
  top: -2em;

  &:hover,
  &:focus {
    color: $secondary;
    outline: 0;
  }
}

.item {
  border-bottom: $list-border;
  border-right: $list-border;
  height: 7rem;
  position: relative;
  text-align: center;

  &:nth-child(4n) {
    border-bottom: $list-border;
    border-right: 0;
  }

  &:nth-last-of-type(-n + 4) {
    border-bottom: 0;
  }
}

.button {
  background: none;
  border: 0;
  height: 100%;
  padding: 1rem;
  text-align: inherit;
  width: 100%;

  &:hover {
    color: $secondary;
  }
}
</style>
