<template>
  <div id="app">
    <div classe="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/chords">Chords</router-link> |
      <router-link to="/scales">Scales</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica,
    Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.nav {
  padding: 2rem;

  a {
    color: #2c3e50;
    border-bottom: 0.25rem solid transparent;

    &.router-link-exact-active {
      border-color: currentColor;
    }
  }
}
</style>
