<template>
  <section>
    <TransposeMessage />
    <CircleFifths />
    <Select
      name="scales"
      label="Scales"
      :options="options"
      v-model="scaleName"
    />
    <Notes
      :scale="originalScale"
      v-if="originalNote.note"
      :scaleKey="originalScaleKey"
      type="scale"
    />
    <Notes
      :scale="transposedScale"
      :scaleKey="transposedScaleKey"
      :transpose="transposeFactor"
      v-if="transposedNote.note && originalNote.note !== transposedNote.note"
      type="scale"
    />
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Notes from '@/components/Notes.vue';
import Select from '@/components/Select.vue';
import TransposeMessage from '@/components/TransposeMessage.vue';
import scaleKeys from '@/constants/scaleKeys';
import scales from '@/constants/scales';
import transposeScale from '@/utils/transposeScale';

export default {
  name: 'TransposedScales',
  components: {
    CircleFifths,
    Notes,
    Select,
    TransposeMessage,
  },
  data() {
    return {
      scaleName: 'major',
      options: [
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
        { value: 'gypsy', label: 'Spanish Gypsy' },
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
      const offset = this.transposedNote.position - 1;
      return transposeScale(this.selectedScale, offset);
    },
    originalScaleKey() {
      return scaleKeys[this.originalNote.note][this.scaleName];
    },
    transposedScaleKey() {
      if (this.transposedNote.note) {
        return scaleKeys[this.transposedNote.note][this.scaleName];
      } else {
        return null;
      }
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
