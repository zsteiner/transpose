<template>
  <section class="picker">
    <ul>
      <li class="item" v-for="instrument in instruments" :key="instrument.id">
        <button class="button" @click="selectInstrument(instrument.id)">
          <Icon class="icon" :icon="instrument.icon" />
          <span class="name">{{ instrument.name }}</span>
        </button>
      </li>
    </ul>
  </section>
</template>

<script>
import { mapActions } from 'vuex';
import instruments from '@/constants/instruments';

import Icon from '@/components/Icon.vue';

export default {
  name: 'Picker',
  components: {
    Icon,
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
      console.log('instrument', instrument);
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
$width: 32rem;

.picker {
  left: 50%;
  position: fixed;

  ul {
    background: transparentize(white, 0.05);
    margin-left: -#{$width / 2};
    display: grid;
    max-width: $width;
    grid-template-columns: repeat(4, 8rem);
    list-style: none;
    padding: 0;
    border: $list-border;
  }
}

.item {
  position: relative;
  height: 8rem;
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

.icon {
  font-size: 2rem;
  display: inline-block;
  margin-bottom: spacer(1);
}

.name {
  display: block;
}

.button {
  text-align: inherit;
  background: none;
  border: 0;
  height: 100%;
  width: 100%;
}
</style>
