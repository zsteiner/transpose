<template>
  <section>
    <TransposeMessage />
    <CircleFifths />
    <SelectList
      v-model="scaleName"
      name="scales"
      label="Scales"
      :options="scaleOptions"
    />
    <Notes
      v-if="originalNote.note"
      :scale="originalScale"
      type="scale"
    />
    <Notes
      v-if="transposedNote?.note && originalNote.note !== transposedNote.note"
      :scale="transposedScale"
      :transpose="transposeFactor"
      type="scale"
    />
  </section>
</template>

<script lang="ts">
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import Notes from '@/components/Notes.vue';
import SelectList from '@/components/SelectList.vue';
import TransposeMessage from '@/components/TransposeMessage.vue';
import { scales } from '@/constants/scales';
import transposeScale from '@/utils/transposeScale';
import { scaleOptions } from '@/constants/options';

export default {
  name: 'TransposedScales',

  components: {
    CircleFifths,
    Notes,
    SelectList,
    TransposeMessage,
  },

  data() {
    return {
      scaleName: 'major',
      scaleOptions,
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
  },
};
</script>

<style scoped>
.scale {
  margin: auto;
  max-width: var(--medium);
}
</style>
