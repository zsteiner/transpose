<template>
  <section>
    <CircleFifths />
    <p>orginal: {{ originalScale }}</p>
    <Scale :scale="originalScale" v-if="originalNote.note" />
    <p>tranposed: {{ transposedScale }}</p>
    <Scale
      :scale="transposedScale"
      :transpose="transposeFactor"
      v-if="originalNote.note"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Scale from '@/components/Scale.vue';
import scales from '@/constants/scales';
import transposeScale from '@/utils/transposeScale';
// import writeNotation from '@/utils/writeNotation';

export default {
  name: 'TransposedScales',
  components: {
    CircleFifths,
    Scale,
  },
  computed: {
    ...mapState(['originalNote', 'transposedNote', 'transposeFactor']),
    selectedScale() {
      return scales.major;
    },
    originalScale() {
      const offset = this.originalNote.position - 1;
      return transposeScale(this.selectedScale, offset);
    },
    transposedScale() {
      const offset = this.originalNote.position - 1 + this.transposeFactor;
      return transposeScale(this.selectedScale, offset);
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
