<template>
  <span v-if="note.displayFlat && display === 'both'">
    {{ note.displayFlat }}<span class="flat">&#X266D;</span>
    {{ ' / ' }}
    {{ note.displaySharp }}<span class="sharp">&#X266F;</span>
    <div class="position">
      {{ note.position }}
    </div>
  </span>
  <span v-else-if="note.displayFlat && display === 'sharp'">
    {{ note.displaySharp }}<span class="sharp">&#X266F;</span>
    <div class="position">
      {{ note.position }}
    </div>
  </span>
  <span v-else-if="note.displayFlat && display === 'flat'">
    {{ note.displayFlat }}<span class="flat">&#X266D;</span>
    <div class="position">
      {{ note.position }}
    </div>
  </span>
  <span v-else>
    {{ note.display }}
    <div class="position">
      {{ note.position }}
    </div>
  </span>
</template>

<script>
export default {
  name: 'Note',
  props: {
    note: Object,
    display: String,
  },
};
</script>

<style lang="scss">
.sharp,
.flat {
  position: relative;
  font-size: 0.625em;
  bottom: 0.25em;
}

.position {
  font-size: 0.75rem;
  margin-left: 0.25rem;
  display: none;
}
</style>
