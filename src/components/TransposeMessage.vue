<template>
  <p class="message">
    <span v-if="showMessage">
      <strong><Note :note="originalNote" display="both" /></strong> on the
      {{ instrument1.name }} sounds the same as
      <strong><Note :note="transposedNote" display="both" /></strong> on the
      {{ instrument2.name }}.
    </span>
    <span v-if="this.instrument2.name && transposeFactor === 0"
      >There's no need to transpose.</span
    >
  </p>
</template>

<script>
import { mapState } from 'vuex';
import Note from '@/components/Note.vue';

export default {
  name: 'TransposeMessage',
  components: {
    Note,
  },
  computed: {
    ...mapState([
      'instrument1',
      'instrument2',
      'originalNote',
      'transposeFactor',
      'transposedNote',
    ]),
    showMessage() {
      return (
        this.instrument2.name
        && this.originalNote
        && this.transposedNote
        && this.transposeFactor > 0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.message {
  font-size: 0.875rem;
  min-height: 2em;
  margin: 0;

  @media (min-width: $medium) {
    font-size: 1.5rem;
  }
}
</style>
