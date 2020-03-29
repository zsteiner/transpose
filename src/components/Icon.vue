<template>
  <SvgIcon
    :class="{ [$style.icon]: true, [$style.inline]: inline }"
    :icon="icon"
    v-if="icon !== ''"
  />
</template>

<script>
import SvgIcon from 'vue-svgicon';
import '@/compiled-icons';

export default {
  name: 'Icon',
  props: {
    icon: {
      type: String,
      default: 'close',
      required: true,
    },
    inline: {
      type: Boolean,
    },
  },
  components: {
    SvgIcon,
  },
};
</script>

<style module>
.icon {
  fill: currentColor;
  height: 1em;
  position: relative;
  width: 1em;
}

.inline {
  bottom: -0.125em;
  margin-right: 0.25em;
}
</style>
