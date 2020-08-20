<template>
  <section class="container">
    <p class="display">
      <Note
        v-for="(note, index) in scale"
        :key="index"
        :note="note"
        :display="scaleKey"
      />
    </p>
    <div ref="notes" class="notes"></div>
  </section>
</template>

<script>
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';
import Note from '@/components/Note.vue';
import writeNotation from '@/utils/writeNotation';

export default {
  name: 'Notes',
  props: {
    scale: Array,
    scaleKey: String,
    type: String,
  },
  components: {
    Note,
  },
  computed: {
    notation() {
      return writeNotation(this.scale, this.scaleKey);
    },
    syntax() {
      let notation = this.notation;
      if (this.type === 'chord') {
        notation = `[${this.notation}]`;
      }

      return `L:4/4\n${notation}\n"`;
    },
  },
  watch: {
    scale: function () {
      this.renderScale();
    },
  },
  mounted() {
    this.renderScale();
  },
  methods: {
    renderScale() {
      abcjs.renderAbc(this.$refs.notes, this.syntax, {
        responsive: 'resize',
        viewportHorizontal: true,
        paddingleft: 0,
        paddingright: 0,
        paddingtop: 0,
        paddingbottom: 0,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  max-width: $medium;
  margin: 0 auto;
}

.notes {
  width: 100%;
}

.display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(0, 1fr));
  margin: 2rem 0 1rem;
  font-size: 1.25rem;
  padding-left: 2.25rem;
  text-align: left;
}
</style>
