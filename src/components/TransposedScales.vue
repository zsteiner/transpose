<template>
  <section>
    <CircleFifths />
    <Scale :scale="original" />
    <Scale :scale="transposed" />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Scale from '@/components/Scale.vue';
import scales from '@/constants/scales';

export default {
  name: 'TransposedScales',
  components: {
    CircleFifths,
    Scale,
  },
  computed: {
    ...mapState(['originalNote', 'transposedNote']),
    original() {
      return `L:4/4\n${scales.major[this.originalNote.note]}\n"`;
    },
    transposed() {
      return `L:4/4\n${scales.major[this.transposedNote.note]}\n"`;
    },
  },
};
</script>
<style lang="scss" scoped>
.scale {
  max-width: $medium;
  margin: auto;
}
</style>
