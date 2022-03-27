<template>
  <header class="header">
    <img class="logo" src="@/assets/transpose-logo.svg" />
    <nav class="nav">
      <router-link to="/">Notes</router-link>
      <router-link to="/chords">Chords</router-link>
      <router-link to="/scales">Scales</router-link>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Nav',
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  padding-top: 1.5rem;
  text-align: center;
}

.logo {
  width: auto;
  height: 3rem;
}

.nav {
  align-items: center;
  display: flex;

  a {
    color: $secondary;
    border-bottom: 0.25rem solid transparent;
    padding: 0.5rem 0;
    text-decoration-line: none;

    &:not(:last-of-type) {
      margin-right: 1rem;
    }

    &.router-link-exact-active {
      border-color: currentColor;
    }
  }
}
</style>
