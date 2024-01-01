<template>
  <article class="container">
    <TransposedChords />
  </article>
</template>

<script lang="ts">
import TransposedChords from '@/components/TransposedChords.vue';

export default {
  name: 'Chords',
  components: {
    TransposedChords,
  },
};
</script>
