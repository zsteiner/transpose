<template>
  <section>
    <CircleFifths />
    <select v-model="scaleName">
      <option v-for="scale in scales" :key="scale.value" :value="scale.value">{{
        scale.label
      }}</option>
    </select>
    <Scale :scale="originalScale" v-if="originalNote.note" />
    <Scale
      :scale="transposedScale"
      :transpose="transposeFactor"
      v-if="originalNote.note !== transposedNote.note"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Scale from '@/components/Scale.vue';
import scales from '@/constants/scales';
import transposeScale from '@/utils/transposeScale';

export default {
  name: 'TransposedScales',
  components: {
    CircleFifths,
    Scale,
  },
  data() {
    return {
      scaleName: 'major',
      scales: [
        { value: 'major', label: 'Major / Ionian' },
        { value: 'minor', label: 'Minor / Aeolian' },
        { value: 'majorPentatonic', label: 'Major Pentatonic' },
        { value: 'minorPentatonic', label: 'Minor Pentatonic' },
        { value: 'bluesMajor', label: 'Major Blues' },
        { value: 'bluesMinor', label: 'Minor Blues' },
        { value: 'dorian', label: 'Dorain' },
        { value: 'phyrygian', label: 'Phyrygian' },
        { value: 'lydian', label: 'Lydian' },
        { value: 'mixolydian', label: 'Mixolydian' },
        { value: 'locrian', label: 'Locrian' },
      ],
    };
  },
  computed: {
    ...mapState(['originalNote', 'transposedNote', 'transposeFactor']),
    selectedScale() {
      return scales[this.scaleName];
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
