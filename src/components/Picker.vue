<template>
  <section class="picker">
    <ul>
      <li
        class="item"
        v-for="instrument in instruments"
        :key="instrument.iconName"
      >
        <button class="button" @click="selectInstrument(instrument.iconName)">
          <Instrument :instrument="instrument" />
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
$size: 28rem;

.picker {
  top: 50%;
  left: 50%;
  position: fixed;
  height: $size;
  width: $size;
  margin-left: -#{$size / 2};
  margin-top: -#{$size / 2};
  overflow: scroll;
  border: $list-border;
  z-index: 1000;

  ul {
    background: transparentize(white, 0.05);
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    list-style: none;
    padding: 0;
    margin: 0;
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
  width: 100%;
}
</style>
