<template>
  <div class="instrument">
    <span :class="{ icon: true, key: !instrument.icon }">
      <Icon :icon="displayIcon" />
    </span>
    <span class="name">{{ instrument.name }}</span>
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
    instrument: Object,
  },
  computed: {
    displayIcon() {
      const { icon, iconName, key } = this.instrument;
      return icon ? iconName : key;
    },
  },
};
</script>

<style lang="scss" scoped>
$icon-size: 2rem;

.icon {
  display: inline-block;
  font-size: $icon-size;
  margin-bottom: spacer(1);
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
  font-size: 1.25rem;
  height: $icon-size;
  width: $icon-size;
  padding: 0.5rem;
  background: lighten($info, 15%);
  padding: 0.5rem;
  border-radius: 50%;
}
</style>
