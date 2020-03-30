<template>
  <section class="switcher">
    <Selector :instrument="instrument1" @click="togglePicker(1)" />
    <Icon class="arrow" icon="arrow-right" />
    <Selector :instrument="instrument2" @click="togglePicker(2)" />
    <Picker v-if="showPicker" :selection="selection" @click="togglePicker" />
  </section>
</template>

<script>
import { mapState } from 'vuex';

import Icon from '@/components/Icon.vue';
import Picker from '@/components/Picker.vue';
import Selector from '@/components/Selector.vue';

export default {
  name: 'Switcher',
  components: {
    Icon,
    Picker,
    Selector,
  },
  computed: {
    ...mapState(['instrument1', 'instrument2']),
  },
  data() {
    return {
      selection: 1,
      showPicker: false,
    };
  },
  methods: {
    togglePicker(selection) {
      this.selection = selection;
      this.showPicker = !this.showPicker;

      const noScrollClass = 'no-scroll';

      if (this.showPicker) {
        document.body.classList.add(noScrollClass);
      } else {
        document.body.classList.remove(noScrollClass);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  display: grid;
  grid-template-columns: 8rem min-content 8rem;
  grid-template-rows: 8rem;
  grid-gap: 1rem;
  margin: 2rem auto 0;
  justify-content: center;
  align-items: center;

  @media (min-width: $medium) {
    grid-template-columns: 15rem min-content 15rem;
    grid-template-rows: 15rem;
    grid-gap: 2rem;
  }
}
.arrow {
  color: $info;
  font-size: 2em;

  @media (min-width: $medium) {
    font-size: 4em;
  }
}
</style>
