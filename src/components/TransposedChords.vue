<template>
  <section class="layout-selection">
    <TransposeMessage />
    <CircleFifths />
    <div class="layout-tools">
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
          type="chord"
        />
        <Notes
          v-if="
            transposedNote?.note && originalNote.note !== transposedNote.note
          "
          :scale="transposedChord"
          :transpose="transposeFactor"
          type="chord"
        />
      </div>
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
  },
};
</script>

<style scoped>
.chords {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(2, minmax(12rem, 50%));
}
</style>
