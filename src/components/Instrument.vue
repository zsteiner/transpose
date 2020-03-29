<template>
  <div class="selection">
    <button class="button">
      <span>{{ name }}</span>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Instrument',
  props: {
    name: {
      type: String,
      default: 'piano',
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.selection {
  overflow: auto;
  padding: 1rem;
  text-align: center;

  &__instrument {
    padding: spacer(0.5);
  }

  &__arrow {
    margin-top: 0.75em;
    color: $info;
    font-size: 4em;
  }
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

    .tr-button__icon {
      font-size: 2rem;
      margin-top: spacer(0.5);
    }

    .tr-button__name {
      font-size: 1.25rem;
      line-height: 1.25;
    }
  }

  &__icon {
    height: 4rem;
    width: 4rem;
    margin-bottom: spacer(0.5);

    &.icon--note {
      padding: 0.5rem;
    }
  }

  &__name {
    display: block;
    font-size: 1.5rem;
  }
}

.icon--note {
  fill: white;
  background: lighten($info, 15%);
  padding: 0.3rem;
  border-radius: 50%;
}
</style>
