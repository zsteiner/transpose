<template>
  <section>
    <TransposeMessage />
    <CircleFifths />
    <SelectList
      v-model="chordName"
      name="chords"
      label="Chords"
      :options="chordOptions"
    />
    <div class="chords">
      <Notes
        v-if="originalNote.note"
        :scale="originalChord"
        :scale-key="originalScaleKey"
        type="chord"
      />
      <Notes
        v-if="transposedNote?.note && originalNote.note !== transposedNote.note"
        :scale="transposedChord"
        :scale-key="transposedScaleKey"
        :transpose="transposeFactor"
        type="chord"
      />
    </div>
  </section>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Notes from '@/components/Notes.vue';
import SelectList from '@/components/SelectList.vue';
import TransposeMessage from '@/components/TransposeMessage.vue';
import chords from '@/constants/chords';
import { scaleKeys } from '@/constants/scaleKeys';
import transposeScale from '@/utils/transposeScale';
import { chordOptions } from '@/constants/options';

export default {
  name: 'TransposedChords',

  components: {
    CircleFifths,
    Notes,
    SelectList,
    TransposeMessage,
  },

  data() {
    return {
      chordName: 'major',
      chordOptions,
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
      const scaleName = this.chordOptions.find(
        (obj) => obj.value === this.chordName,
      ).scale;
      return scaleKeys[this.originalNote.note][scaleName];
    },

    transposedScaleKey() {
      const scaleName = this.chordOptions.find(
        (obj) => obj.value === this.chordName,
      ).scale;
      if (this.transposedNote?.note) {
        return scaleKeys[this.transposedNote.note][scaleName];
      }
      return null;
    },
  },
};
</script>

<style scoped>
.chords {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(12rem, 50%));
  margin: auto;
  max-width: var(--medium);
  width: 100%;
}
</style>
