<template>
  <div class="selection">
    <button
      :class="{ button: true, empty: isEmpty }"
      @click="handleClick"
    >
      <Instrument
        :instrument="instrument"
        :is-empty="isEmpty"
      />
    </button>
  </div>
</template>

<script lang="ts">
import Instrument from '@/components/Instrument.vue';
import { Instrument as InstrumentType } from '@/types';
import { PropType } from 'vue';

export default {
  name: 'Selector',

  components: {
    Instrument,
  },

  props: {
    instrument: {
      type: Object as PropType<InstrumentType>,
      default: () => null,
    },
  },

  emits: ['click'],

  computed: {
    isEmpty() {
      return !this.instrument?.name;
    },
  },

  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style scoped>
.selection {
  align-items: stretch;
  align-self: stretch;
  display: flex;
  overflow: auto;
  padding: 1rem;
  text-align: center;
}

.button {
  background-color: var(--white);
  border: var(--border-width) solid var(--default-light);
  border-radius: 0.25em;
  color: var(--default);
  cursor: pointer;
  display: block;
  line-height: 1;
  padding: 1rem;
  -webkit-tap-highlight-color: transparent;
  text-align: center;
  transition: all 0.1s linear;
  width: 100%;
}

.button:focus,
.button.is-selected,
.button:hover {
  border-color: transparent;
  box-shadow: 0 0 0 0.25rem var(--secondary);
  color: var(--secondary);
  outline: 0;
}

.empty {
  border: 0.25em dashed var(--info);
  color: var(--info);
  padding: 0.25rem;
}

.empty.is-selected,
.empty:hover {
  background-color: var(--white);
  border-color: var(--secondary);
  box-shadow: none;
  color: var(--secondary);
}
</style>
