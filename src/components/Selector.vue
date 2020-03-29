<template>
  <div class="selection">
    <button class="button" @click="handleClick">
      <Icon class="icon" :icon="icon" />
      <span class="name">{{ name }}</span>
    </button>
  </div>
</template>

<script>
import instruments from '@/constants/instruments';

import Icon from '@/components/Icon.vue';

export default {
  name: 'Selector',
  components: {
    Icon,
  },
  props: {
    instrument: {
      type: String,
      default: 'piano',
      required: true,
    },
  },
  computed: {
    icon() {
      const { instrument } = this;
      return instruments[instrument].icon;
    },
    name() {
      const { instrument } = this;
      return instruments[instrument].name;
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
};
</script>

<style lang="scss" scoped>
.selection {
  overflow: auto;
  padding: 1rem;
  text-align: center;
}

.button {
  display: inline-block;
  padding: spacer(1);
  width: 10rem;
  height: 10rem;
  border: 1px solid lighten($info, 15%);
  border-radius: 0.25em;
  background-color: white;
  color: $default;
  vertical-align: top;
  text-align: center;
  line-height: 1;
  cursor: pointer;
  transition: all 0.1s linear;
  -webkit-tap-highlight-color: transparent;

  &.is-selected,
  &:hover {
    box-shadow: 0 0 0 0.25rem $secondary;
    border-color: transparent;
    color: $secondary;
  }

  &--empty {
    border: 0.25em dashed $info;
    color: $info;
    padding: spacer(0.25);

    &.is-selected,
    &:hover {
      box-shadow: none;
      border-color: $secondary;
      background-color: white;
      color: $secondary;
    }
  }
}

.icon {
  height: 4rem;
  width: 4rem;
  margin-bottom: spacer(1);

  &.icon--note {
    padding: 0.5rem;
  }
}

.name {
  display: block;
  font-size: 1rem;
}

.icon--note {
  fill: white;
  background: lighten($info, 15%);
  padding: 0.3rem;
  border-radius: 50%;
}
</style>
