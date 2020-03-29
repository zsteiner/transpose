<template>
  <section class="switcher">
    <Selector instrument="piano" @click="togglePicker" />
    <Icon class="arrow" icon="arrow-right" />
    <Selector instrument="alto-sax" @click="togglePicker" />
    <Picker v-if="showPicker" @click="togglePicker" />
  </section>
</template>

<script>
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
      showPicker: false,
    };
  },
  methods: {
    togglePicker() {
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
