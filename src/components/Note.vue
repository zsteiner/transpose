<template>
  <span>
    {{ this.display }}
    <span class="accidental">
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

const symbols = {
  flat: '♭',
  sharp: '♯',
};

export default defineComponent({
  name: 'Note',

  data: () => ({
    accidental: null,
  }),

  computed: {
    display() {
      const previousNote = this.previousNote?.note;
      const isAccidental = !!this.note?.previousNote;

      let baseNote;

      if (isAccidental) {
        const isSharpOrFlat = this.note?.previousNote[previousNote];

        baseNote =
          this.note[isSharpOrFlat] || this.note?.previousNote.displayFlat;

        this.setAccidental(isSharpOrFlat === 'displaySharp');
      } else {
        baseNote = this.note.display;
      }

      return baseNote;
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

  methods: {
    setAccidental(isSharp: boolean) {
      this.accidental = isSharp ? symbols.sharp : symbols.flat;
    },
  },

  symbols,
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
