<template>
  <p class="message">
    <span v-if="originalNote && transposedNote && transposeFactor > 0">
      <strong v-html="originalNote"></strong> on the
      {{ instrument1.name }} sounds the same as
      <strong v-html="transposedNote"></strong> on the {{ instrument2.name }}.
    </span>
    <span v-if="transposeFactor === 0">There's no need to transpose.</span>
  </p>
</template>

<script>
import { mapState } from 'vuex';
export default {
  name: 'TransposeMessage',
  props: {
    originalNote: String,
    transposedNote: String,
  },
  computed: {
    ...mapState(['instrument1', 'instrument2', 'transposeFactor']),
  },
};
</script>

<style lang="scss" scoped>
.message {
  font-size: 1.25rem;
  min-height: 4rem;
  margin-bottom: 3rem;
}
</style>
