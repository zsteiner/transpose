<template>
  <span v-if="note.displayFlat && display === 'both'">
    {{ note.displayFlat }}<span class="flat">{{ $options.symbols.flat }}</span>
    {{ ' / ' }}
    {{ note.displaySharp
    }}<span class="sharp">{{ $options.symbols.sharp }}</span>
    <div class="position">
      {{ note.position }}
    </div>
  </span>
  <span v-else-if="note.displayFlat && display === 'sharp'">
    {{ note.displaySharp
    }}<span class="sharp">{{ $options.symbols.sharp }}</span>
    <div class="position">
      {{ note.position }}
    </div>
  </span>
  <span v-else-if="note.displayFlat && display === 'flat'">
    {{ note.displayFlat }}<span class="flat">{{ $options.symbols.flat }}</span>
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
const symbols = {
  flat: '♭',
  sharp: '♯',
};

export default {
  name: 'Note',

  props: {
    note: {
      type: Object,
      default: () => ({}),
    },
    display: {
      type: String,
      default: '',
    },
  },

  symbols,
};
</script>

<style lang="scss">
.sharp,
.flat {
  bottom: 0.25em;
  font-size: 0.625em;
  position: relative;
}

.position {
  display: none;
  font-size: 0.75rem;
  margin-left: 0.25rem;
}
</style>
