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
  },
  mounted() {
    abcjs.renderAbc(this.$refs.scale, this.scale, { responsive: 'resize' });
  },
};
</script>
<style lang="scss" scoped>
.scale {
  max-width: $medium;
  margin: auto;
}
</style>
