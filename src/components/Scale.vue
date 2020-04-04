<template>
  <section class="scale-container">
    <p class="display">
      <span v-for="(note, index) in scale" :key="index" v-html="note.display" />
    </p>
    <div ref="scale" class="scale"></div>
  </section>
</template>

<script>
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';
import writeNotation from '@/utils/writeNotation';

export default {
  name: 'Scale',
  props: {
    scale: Array,
    transpose: Number,
  },
  computed: {
    notatedScale() {
      return writeNotation(this.scale);
    },
    transposeSteps() {
      return this.transpose ? this.transpose * 3 : 0;
    },
    scaleNotation() {
      return `L:4/4\n${this.notatedScale}\n"`;
    },
  },
  watch: {
    scale: function() {
      this.renderScale();
    },
  },
  mounted() {
    this.renderScale();
  },
  methods: {
    renderScale() {
      abcjs.renderAbc(this.$refs.scale, this.scaleNotation, {
        responsive: 'resize',
        visualTranspose: this.transposeSteps,
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.scale-container {
  max-width: $medium;
  margin: 0 auto;
}

.scale {
  width: 100%;
}

.display {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(4rem, 1fr));
  grid-gap: 0.5rem;
  margin: 2rem 0 0;
  font-size: 1.25rem;
  padding: 0 1rem;
  text-align: center;
}
</style>
