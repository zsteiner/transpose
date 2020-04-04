<template>
  <div ref="scale" class="scale"></div>
</template>

<script>
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

export default {
  name: 'Scale',
  props: {
    scale: String,
    transpose: Number,
  },
  computed: {
    transposeSteps() {
      return this.transpose ? this.transpose * 3 : 0;
    },
    scaleNotation() {
      const { scale } = this;
      return `L:4/4\n${scale}\n"`;
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
.scale {
  max-width: $medium;
  margin: auto;
}
</style>
