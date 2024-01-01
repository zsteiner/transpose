<template>
  <p class="message">
    <span v-if="showMessage">
      <strong>
        <Note
          :note="originalNote"
          display="both"
        />
      </strong>
      on the {{ instrument1.name }} sounds the same as
      <strong>
        <Note
          :note="transposedNote"
          display="both"
        />
      </strong>
      on the {{ instrument2.name }}.
    </span>
    <span v-if="instrument2.name && transposeFactor === 0"
      >There's no need to transpose.</span
    >
  </p>
</template>

<script lang="ts">
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
        this.instrument2.name &&
        this.originalNote &&
        this.transposedNote &&
        this.transposeFactor > 0
      );
    },
  },
};
</script>

<style scoped>
.message {
  font-size: 0.875rem;
  margin: 0;
  min-height: 2em;
}

@media (width >= 45rem) {
  .message {
    font-size: 1.5rem;
  }
}
</style>
