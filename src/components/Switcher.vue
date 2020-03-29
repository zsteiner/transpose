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
    },
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  display: grid;
  grid-template-columns: 15rem min-content 15rem;
  grid-gap: 2rem;
  margin: 2rem auto;
  justify-content: center;
  align-items: center;
}
.arrow {
  color: $info;
  font-size: 4em;
}
</style>
