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

  data() {
    return {
      selection: 1,
      showPicker: false,
    };
  },

  computed: {
    ...mapState(['instrument1', 'instrument2']),
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

<style scoped>
.switcher {
  align-items: center;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: 8rem min-content 8rem;
  grid-template-rows: 8rem;
  justify-content: center;
  margin: 2rem auto 0;
}

.arrow {
  color: var(--info);
  font-size: 1em;
}

@media (width >= 45rem) {
  .switcher {
    gap: 2rem;
    grid-template-columns: 10rem min-content 10rem;
    grid-template-rows: 10rem;
  }

  .arrow {
    font-size: 2em;
  }
}
</style>
