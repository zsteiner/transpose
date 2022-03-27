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

  components: {
    SvgIcon,
  },

  props: {
    icon: {
      type: String,
      default: 'piano',
      required: true,
    },
    inline: {
      type: Boolean,
    },
  },
};
</script>

<style module>
.icon {
  fill: currentcolor;
  height: 1em;
  position: relative;
  width: 1em;
}

.inline {
  bottom: -0.125em;
  margin-right: 0.25em;
}
</style>
