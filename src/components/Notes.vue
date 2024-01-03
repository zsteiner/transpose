<template>
  <section class="container">
    <p
      :class="[
        'display',
        {
          'display-chord': type === 'chord',
        },
      ]"
    >
      <Note
        v-for="(note, index) in scale"
        :key="index"
        :note="note"
        :previous-note="scale[index - 1]"
        :next-note="scale[index + 1]"
      />
    </p>
    <div
      ref="notes"
      class="notes"
    ></div>
  </section>
</template>

<script lang="ts">
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';
import Note from '@/components/Note.vue';
import writeNotation from '@/utils/writeNotation';
import { PropType } from 'vue';
import { Note as NoteType } from '@/types';

export default {
  name: 'Notes',

  components: {
    Note,
  },

  props: {
    scale: {
      type: Array as PropType<NoteType[]>,
      default: () => [],
    },
    scaleKey: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },

  computed: {
    syntax() {
      return `L:4/4\nK:C\n${writeNotation(this.scale)}\n`;
    },
  },

  watch: {
    scale() {
      this.renderScale();
    },
  },

  mounted() {
    this.renderScale();
  },

  methods: {
    renderScale() {
      const responsive = this.type === 'scale' ? 'resize' : null;

      abcjs.renderAbc(this.$refs.notes, this.syntax, {
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
        viewportHorizontal: false,
        responsive,
      });
    },
  },
};
</script>

<style scoped>
.container {
  padding-block-end: 4rem;
}

.notes {
  width: 100%;
}

.display {
  --notes-left-offset: 1.25rem;

  display: grid;
  font-size: 1.25rem;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  padding-left: var(--notes-left-offset);
  text-align: left;
}

@media (width >= 45rem) {
  .display {
    --notes-left-offset: 2.25rem;
  }
}

.display-chord {
  padding-right: 3.5rem;
}
</style>
