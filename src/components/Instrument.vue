<template>
  <span
    :class="[
      'instrument',
      {
        stretch: stretch,
      },
    ]"
  >
    <span
      :class="[
        'icon',
        {
          'key-icon': !instrument?.icon,
        },
      ]"
    >
      <Icon :icon="displayIcon" />
    </span>
    <span class="name">{{ displayText }}</span>
  </span>
</template>

<script lang="ts">
import Icon from '@/components/Icon.vue';
import { Instrument } from '@/types';
import { PropType } from 'vue';

export default {
  name: 'Instrument',

  components: {
    Icon,
  },

  props: {
    instrument: {
      type: Object as PropType<Instrument> | null,
      default: () => null,
    },
    stretch: Boolean,
  },

  computed: {
    isEmpty() {
      return !this.instrument;
    },
    displayIcon() {
      if (this.isEmpty) {
        return 'plus';
      }

      const { icon, iconName, key } = this.instrument;

      return icon ? iconName : key;
    },

    displayText() {
      return this.isEmpty ? 'add instrument' : this.instrument?.name;
    },
  },
};
</script>

<style scoped>
.instrument {
  --icon-size: 2.5rem;

  height: 100%;
}

.stretch {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.icon {
  display: inline-block;
  font-size: calc(var(--icon-size) * 0.75);
  line-height: 1;
  margin-bottom: 0.5rem;
}

.name {
  display: block;
  font-size: 0.875rem;
}

.key-icon {
  align-items: center;
  background: var(--info);
  border-radius: 50%;
  color: var(--white);
  display: inline-flex;
  font-size: var(--icon-size);
  height: 1em;
  justify-content: center;
  padding: 0.5rem;
  width: 1em;
}

@media (width >= 45rem) {
  .icon {
    font-size: var(--icon-size);
    margin-bottom: 0.5rem;
  }

  .key-icon {
    font-size: var(--icon-size);
    margin-bottom: 1rem;
  }
}
</style>
