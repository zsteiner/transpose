<template>
  <span>
    {{ this.baseNote }}
    <span
      v-if="this.accidentalLabel"
      class="accidental"
    >
      {{ this.accidentalLabel }}
    </span>
    <span class="position">
      {{ this.note.position }}
    </span>
  </span>
</template>

<script lang="ts">
import { Note } from '@/types';
import { defineComponent, PropType } from 'vue';
import { getAccidentalNote, getBaseNote } from '@/utils/accidentals';

export default defineComponent({
  name: 'Note',

  computed: {
    accidentalLabel() {
      const { isAccidental, isSharp } = getAccidentalNote({
        note: this.note,
        previousNote: this.previousNote,
      });

      if (isAccidental) {
        return isSharp ? '♯' : '♭';
      } else {
        return null;
      }
    },
    baseNote() {
      return getBaseNote({
        note: this.note,
        previousNote: this.previousNote,
      });
    },
  },

  props: {
    note: {
      type: Object as PropType<Note>,
      required: true,
    },
    previousNote: {
      type: Object as PropType<Note>,
      default: () => {},
    },
  },
});
</script>

<style>
.accidental {
  bottom: 0.25em;
  font-size: 0.625em;
  position: relative;
}

.position {
  display: none;
  font-size: 0.75rem;
  margin-left: 0.25rem;
}
</style>
