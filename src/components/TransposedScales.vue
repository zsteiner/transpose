<template>
  <section>
    <CircleFifths />
    <!-- <Scale :scale="original" v-if="originalNote.note" /> -->
    <!-- <Scale
      :scale="original"
      :transpose="transposeFactor"
      v-if="transposedNote.note"
    /> -->
    <p>orginal: {{ original }}</p>
    <p>tranposed: {{ transposed }}</p>
  </section>
</template>

<script>
import { mapState } from 'vuex';
import CircleFifths from '@/components/CircleFifths.vue';
// import Scale from '@/components/Scale.vue';
import scales from '@/constants/scales';

export default {
  name: 'TransposedScales',
  components: {
    CircleFifths,
    // Scale,
  },
  computed: {
    ...mapState(['originalNote', 'transposedNote', 'transposeFactor']),
    original() {
      return scales.major;
    },
    transposed() {
      return scales.major;
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
