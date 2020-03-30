<template>
  <section>
    <CircleFifths />
    <Scale :scale="original" v-if="originalNote.note" />
    <Scale :scale="transposed" v-if="transposedNote.note" />
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
      return scales.major[this.originalNote.note];
    },
    transposed() {
      return scales.major[this.transposedNote.note];
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
