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
$list-border: 0.0625rem solid $info;
$size: 32rem;

.picker {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100vh;
  z-index: 1000;
  border-bottom: $list-border;

  @media (min-width: $medium) {
    top: 50%;
    left: 50%;
    height: $size;
    width: $size;
    margin-left: -#{$size / 2};
    margin-top: -#{$size / 2};
    border: $list-border;
  }

  ul {
    background: transparentize(white, 0.05);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
    height: 100%;
    margin: 0;
    overflow: scroll;
  }
}

.close {
  position: absolute;
  color: $primary;
  background: none;
  border: 0;
  font-size: 1.75rem;
  top: -1.325em;
  right: 0;

  &:hover,
  &:focus {
    outline: 0;
    color: $secondary;
  }
}

.item {
  position: relative;
  height: 7rem;
  text-align: center;
  border-bottom: $list-border;
  border-right: $list-border;

  &:nth-child(4n) {
    border-bottom: $list-border;
    border-right: 0;
  }

  &:nth-last-of-type(-n + 4) {
    border-bottom: 0;
  }
}

.button {
  text-align: inherit;
  background: none;
  border: 0;
  height: 100%;
  padding: 1rem;
  width: 100%;
}

.button:hover {
  color: $secondary;
}
</style>
