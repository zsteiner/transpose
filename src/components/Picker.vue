<template>
  <div class="scrim">
    <section class="picker">
      <button
        class="close"
        @click="handleClose"
      >
        close
      </button>
      <ul>
        <li
          v-for="instrument in instruments"
          :key="instrument.iconName"
          class="item"
        >
          <button
            class="button"
            @click="selectInstrument(instrument.iconName)"
          >
            <Instrument
              :instrument="instrument"
              stretch
            />
          </button>
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="ts">
import { mapActions } from 'vuex';
import { instruments } from '@/constants/instruments';

import Instrument from '@/components/Instrument.vue';

export default {
  name: 'Picker',

  components: {
    Instrument,
  },

  props: {
    selection: {
      type: Number,
      required: true,
    },
  },

  emits: ['click'],

  data() {
    return {
      instruments,
    };
  },

  methods: {
    ...mapActions(['updateSelection']),

    handleClose() {
      this.$emit('click');
    },

    selectInstrument(instrument) {
      const { selection } = this;
      this.updateSelection({
        selection,
        instrument,
      });
      this.handleClose();
    },
  },
};
</script>

<style scoped>
.scrim {
  backdrop-filter: blur(0.25rem);
  background: var(--default-transparent);
  display: flex;
  inset: 0;
  position: fixed;
  z-index: 100;
}

.picker {
  --list-border: 0.0625rem solid var(--info);
  --size: 38rem;

  border-bottom: var(--list-border);
  margin: auto;
  position: relative;
}

.picker ul {
  background: rgb(255 255 255 / 95%);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  height: 100%;
  list-style: none;
  margin: 0;
  overflow: scroll;
  padding: 0;
}

.close {
  background: none;
  border: 0;
  color: var(--primary);
  font-size: 1.75rem;
  position: absolute;
  right: 0;
  top: -2em;
}

.close:hover,
.close:focus {
  color: var(--secondary);
  outline: 0;
}

@media (width >= 45rem) {
  .picker {
    border: var(--list-border);
    max-height: var(--size);
    max-width: var(--size);
  }
}

.item {
  border-bottom: var(--list-border);
  border-right: var(--list-border);
  height: 7rem;
  position: relative;
  text-align: center;
}

.item:nth-child(4n) {
  border-bottom: var(--list-border);
  border-right: 0;
}

.item:nth-last-of-type(-n + 4) {
  border-bottom: 0;
}

.button {
  background: none;
  border: 0;
  color: var(--default-light);
  height: 100%;
  padding: 1rem;
  text-align: inherit;
  width: 100%;

  &:hover {
    color: var(--secondary);
  }
}
</style>
