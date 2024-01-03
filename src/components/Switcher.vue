<template>
  <section class="switcher">
    <Selector
      :instrument="instrument1"
      @click="togglePicker(1)"
    />
    <Icon
      class="arrow"
      icon="arrow-right"
    />
    <div class="buttonContainer">
      <Selector
        :instrument="instrument2"
        @click="togglePicker(2)"
      />
      <button
        v-show="instrument2"
        :class="{
          clearVisible: instrument2,
          clear: true,
        }"
        @click="clearSelection(2)"
      >
        clear selection
      </button>
    </div>
    <InstrumentPicker
      v-if="showPicker"
      :selection="selection"
      @close="togglePicker"
    />
  </section>
</template>

<script lang="ts">
import { mapState } from 'vuex';

import Icon from '@/components/Icon.vue';
import InstrumentPicker from '@/components/InstrumentPicker.vue';
import Selector from '@/components/Selector.vue';
import { mapActions } from 'vuex';

export default {
  name: 'Switcher',

  components: {
    Icon,
    InstrumentPicker,
    Selector,
  },

  data() {
    return {
      selection: 1,
      showPicker: false,
    };
  },

  computed: {
    ...mapState(['instrument1', 'instrument2']),
  },

  methods: {
    ...mapActions(['updateSelection']),

    clearSelection(selection) {
      this.updateSelection({
        selection: selection,
        instrument: null,
      });
    },

    togglePicker(selection) {
      this.selection = selection;
      this.showPicker = !this.showPicker;

      const noScrollClass = 'no-scroll';

      if (this.showPicker) {
        document.body.classList.add(noScrollClass);
      } else {
        document.body.classList.remove(noScrollClass);
      }
    },
  },
};
</script>

<style scoped>
.switcher {
  --switch-size: 8rem;
  --switch-gap: var(--spacer);

  align-items: center;
  display: grid;
  gap: var(--switch-gap);
  grid-template-columns: var(--switch-size) min-content var(--switch-size);
  justify-content: center;
}

.arrow {
  color: var(--info);
  font-size: var(--arrow-size, var(--spacer));
}

.buttonContainer {
  align-self: start;
  display: grid;
  gap: var(--spacer);
  grid-template-rows: 1fr auto;
}

.clear {
  background: none;
  border: 0;
  color: var(--link-light);
  font-size: 0.75rem;
  opacity: 0;
  text-decoration: underline;
  visibility: hidden;
}

.clearVisible {
  opacity: 1;
  visibility: visible;
}

@media (width >=45rem) {
  .switcher {
    --switch-gap: 3rem;
    --switch-size: 10rem;
    --arrow-size: 2rem;
  }
}
</style>
