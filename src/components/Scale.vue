<template>
  <section>
    <div id="scale" class="scale"></div>
    <div id="transpose" class="scale"></div>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import scales from '@/constants/scales';

import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

export default {
  name: 'Scale',
  data() {
    return {
      scale: `L:4/4\n${scales.major.c}\n"`,
      transpose: `L:4/4\n${scales.major.a}\n"`,
    };
  },
  ...mapState(['transposeFactor']),
  mounted() {
    abcjs.renderAbc('scale', this.scale, { responsive: 'resize' });
    abcjs.renderAbc('transpose', this.transpose, {
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
