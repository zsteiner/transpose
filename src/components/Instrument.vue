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
          'key-icon': !instrument.icon && !empty,
        },
      ]"
    >
      <Icon :icon="displayIcon" />
    </span>
    <span class="name">{{ displayText }}</span>
  </span>
</template>

<script>
import Icon from '@/components/Icon.vue';

export default {
  name: 'Instrument',
  components: {
    Icon,
  },
  props: {
    empty: Boolean,
    instrument: Object,
    stretch: Boolean,
  },
  computed: {
    displayIcon() {
      if (this.empty) {
        return 'plus';
      } else {
        const { icon, iconName, key } = this.instrument;
        return icon ? iconName : key;
      }
    },
    displayText() {
      return this.empty ? 'add instrument' : this.instrument.name;
    },
  },
};
</script>

<style lang="scss" scoped>
$icon-size: 2.5rem;

.instrument {
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
  font-size: $icon-size * 0.75;
  line-height: 1;
  margin-bottom: spacer(0.5);

  @media (min-width: $medium) {
    font-size: $icon-size;
    margin-bottom: spacer(0.5);
  }
}

.name {
  display: block;
  font-size: 0.875rem;
}

.key-icon {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: $icon-size;
  height: $icon-size;
  width: $icon-size;
  padding: 0.5rem;
  background: lighten($info, 15%);
  padding: 0.5rem;
  border-radius: 50%;

  @media (min-width: $medium) {
    font-size: $icon-size;
    margin-bottom: spacer(1);
  }
}
</style>
