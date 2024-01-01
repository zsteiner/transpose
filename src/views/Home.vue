<template>
  <article class="container">
    <TransposeMessage />
    <CircleFifths />
  </article>
</template>

<script lang="ts">
import CircleFifths from '@/components/CircleFifths.vue';
import TransposeMessage from '@/components/TransposeMessage.vue';

export default {
  name: 'Home',
  components: {
    CircleFifths,
    TransposeMessage,
  },
};
</script>
