<template>
  <div id="app" class="app">
    <MainNav />
    <Switcher />
    <router-view />
  </div>
</template>

<script>
import MainNav from '@/components/MainNav.vue';
import Switcher from '@/components/Switcher.vue';

export default {
  name: 'App',

  components: {
    MainNav,
    Switcher,
  },
};
</script>

<style lang="scss" scoped>
.app {
  font-family: 'Source Serif Variable', 'Source Serif', Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  max-width: 75rem;
  padding: 1rem;
  text-align: center;
}
</style>

<style lang="scss">
*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
  margin: 0;
}

button {
  font-family: inherit;
}

html,
body {
  min-height: 100%;
}

.no-scroll {
  overflow: hidden;
  position: relative;
  z-index: 100;

  &::before {
    backdrop-filter: blur(0.325rem);
    background-color: color.adjust($white, $alpha: -0.5);
    content: '';
    inset: 0;
    position: fixed;
    z-index: 1;
  }
}
</style>
