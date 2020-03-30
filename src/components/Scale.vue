<template>
  <section>
    <CircleFifths />
    <div ref="scale" class="scale"></div>
    <div ref="transpose" class="scale"></div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
import scales from '@/constants/scales';

import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

export default {
  name: 'Scale',
  components: {
    CircleFifths,
  },
  data() {
    return {
      scale: `L:4/4\n${scales.major.c}\n"`,
      transpose: `L:4/4\n${scales.major.a}\n"`,
    };
  },
  ...mapState(['transposeFactor']),
  mounted() {
    abcjs.renderAbc(this.$refs.scale, this.scale, { responsive: 'resize' });
    abcjs.renderAbc(this.$refs.transpose, this.transpose, {
      responsive: 'resize',
    });
  },
};
</script>
<style lang="scss" scoped>
.scale {
  max-width: $medium;
  margin: auto;
}
</style>
