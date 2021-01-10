<template>
  <section>
    <TransposeMessage />
    <CircleFifths />
    <Select
      name="chords"
      label="Chords"
      :options="options"
      v-model="chordName"
    />
    <div class="chords">
      <Notes
        v-if="originalNote.note"
        :scale="originalChord"
        :scaleKey="originalScaleKey"
        type="chord"
      />
      <Notes
        v-if="transposedNote.note && originalNote.note !== transposedNote.note"
        :scale="transposedChord"
        :scaleKey="transposedScaleKey"
        :transpose="transposeFactor"
        type="chord"
      />
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Notes from '@/components/Notes.vue';
import Select from '@/components/Select.vue';
import TransposeMessage from '@/components/TransposeMessage.vue';
import chords from '@/constants/chords';
import scaleKeys from '@/constants/scaleKeys';
import transposeScale from '@/utils/transposeScale';

export default {
  name: 'TransposedChords',
  components: {
    CircleFifths,
    Notes,
    Select,
    TransposeMessage,
  },
  data() {
    return {
      chordName: 'major',
      options: [
        { value: 'major', label: 'Major', scale: 'major' },
        { value: 'power', label: 'Power Fifth', scale: 'major' },
        { value: 'suspended4th', label: 'Suspended 4th', scale: 'major' },
        { value: 'majorAdd9', label: 'Major (add 9)', scale: 'major' },
        { value: 'major7', label: 'Major 7', scale: 'major' },
        { value: 'major7Sharp', label: 'Major 7th Sharp 11th', scale: 'major' },
        { value: 'major9', label: 'Major 9th', scale: 'major' },
        { value: 'major13', label: 'Major 13th', scale: 'major' },
        { value: 'minor', label: 'Minor', scale: 'minor' },
        { value: 'minorAdd9', label: 'Minor Add 9th', scale: 'minor' },
        { value: 'minor6', label: 'Minor 6', scale: 'minor' },
        { value: 'minorAdd11', label: 'Minor Add 11', scale: 'minor' },
      ],
    };
  },
  computed: {
    ...mapState(['originalNote', 'transposedNote', 'transposeFactor']),
    selectedChord() {
      return chords[this.chordName];
    },
    originalChord() {
      const offset = this.originalNote.position - 1;
      return transposeScale(this.selectedChord, offset);
    },
    transposedChord() {
      const offset = this.transposedNote.position - 1;
      return transposeScale(this.selectedChord, offset);
    },
    originalScaleKey() {
      const scaleName = this.options.find((obj) => obj.value === this.chordName)
        .scale;
      return scaleKeys[this.originalNote.note][scaleName];
    },
    transposedScaleKey() {
      const scaleName = this.options.find((obj) => obj.value === this.chordName)
        .scale;
      if (this.transposedNote.note) {
        return scaleKeys[this.transposedNote.note][scaleName];
      } else {
        return null;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.chords {
  width: 100%;
  max-width: $medium;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(2, minmax(12rem, 50%));
  grid-gap: 1rem;
}
</style>
