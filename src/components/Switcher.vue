<template>
  <section class="switcher">
    <Instrument />
    <Instrument />
  </section>
</template>

<script>
import Instrument from '@/components/Instrument.vue';
export default {
  name: 'Switcher',
  components: {
    Instrument,
  },
};
</script>

<style lang="scss" scoped>
.switcher {
  display: grid;
  grid-template-columns: 50% 50%;
  grid-gap: 2rem;
  margin: 2rem auto;
  max-width: 25rem;
}
</style>
