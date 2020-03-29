<template>
  <section class="switcher">
    <Instrument instrument="piano" />
    <Icon class="arrow" icon="arrow-right" />
    <Instrument instrument="alto-sax" />
  </section>
</template>

<script>
import Icon from '@/components/Icon.vue';
import Instrument from '@/components/Instrument.vue';
export default {
  name: 'Switcher',
  components: {
    Icon,
    Instrument,
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
