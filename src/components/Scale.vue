<template>
  <div ref="scale" class="scale"></div>
</template>

<script>
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

export default {
  name: 'Scale',
  props: {
    scale: Object,
    transpose: Number,
  },
  computed: {
    transposeSteps() {
      return this.transpose * 3;
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
      abcjs.renderAbc(this.$refs.scale, `L:4/4\n${this.scale.scale}\n"`, {
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
