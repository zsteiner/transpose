<template>
  <p class="message">
    <span v-if="originalNote && transposedNote">
      <strong v-html="originalNote"></strong> on the
      {{ instrument1.name }} sounds the same as
      <strong v-html="transposedNote"></strong> on the {{ instrument2.name }}.
    </span>
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
    ...mapState(['instrument1', 'instrument2']),
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
