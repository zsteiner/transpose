<template>
  <div class="instrument">
    <span :class="{ icon: true, key: !instrument.icon && !empty }">
      <Icon :icon="displayIcon" />
    </span>
    <span class="name">{{ displayText }}</span>
  </div>
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
$icon-size: 3rem;

.icon {
  display: inline-block;
  font-size: $icon-size * 0.75;
  margin-bottom: spacer(0.5);

  @media (min-width: $medium) {
    font-size: $icon-size;
    margin-bottom: spacer(1);
  }
}

.name {
  display: block;
  font-size: 0.875rem;
}

.key {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: $icon-size * 0.5;
  height: $icon-size * 0.75;
  width: $icon-size * 0.75;
  padding: 0.5rem;
  background: lighten($info, 15%);
  padding: 0.5rem;
  border-radius: 50%;

  @media (min-width: $medium) {
    font-size: $icon-size * 0.75;
    margin-bottom: spacer(1);
  }
}
</style>
