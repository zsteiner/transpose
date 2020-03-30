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
      abcjs.renderAbc(
        this.$refs.scale,
        `K:${this.scale.key}\nL:4/4\n${this.scale.scale}\n"`,
        { responsive: 'resize' },
      );
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
