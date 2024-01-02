<template>
  <span>
    {{ this.baseNote }}
    <span
      v-if="this.accidental"
      class="accidental"
    >
      {{ this.accidental }}
    </span>
    <span class="position">
      {{ this.note.position }}
    </span>
  </span>
</template>

<script lang="ts">
import { Note } from '@/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  name: 'Note',

  computed: {
    accidental() {
      if (this.isAccidental) {
        return this.isSharp ? '♯' : '♭';
      } else {
        return null;
      }
    },
    baseNote() {
      let baseNote;

      if (this.isAccidental) {
        baseNote = this.note[this.accidentalNote] || this.note.displayFlat;
      } else {
        baseNote = this.note.display;
      }

      return baseNote;
    },
    isAccidental() {
      return !!this.note?.previousNote;
    },
    isSharp() {
      return this.accidentalNote === 'displaySharp';
    },
    accidentalNote() {
      return this.previousNote
        ? this.note?.previousNote[this.previousNote?.note]
        : '';
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
