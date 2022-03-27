<template>
  <div id="app">
    <Nav />
    <Switcher />
    <router-view />
  </div>
</template>

<script>
import Nav from '@/components/Nav.vue';
import Switcher from '@/components/Switcher.vue';

export default {
  name: 'App',
  components: {
    Nav,
    Switcher,
  },
};
</script>

<style lang="scss" scoped>
@font-face {
  font-family: "Source Serif Variable";
  font-stretch: normal;
  font-style: normal;
  font-weight: 200 900;
  src:
    url("/SourceSerifVariable-Roman.otf.woff2") format("woff2"),
    url("/SourceSerifVariable-Roman.otf.woff") format("woff");
}

@font-face {
  font-family: "Source Serif Variable";
  font-stretch: normal;
  font-style: italic;
  font-weight: 200 900;
  src:
    url("/SourceSerifVariable-Italic.otf.woff2") format("woff2"),
    url("/SourceSerifVariable-Italic.otf.woff") format("woff");
}

#app {
  font-family: "Source Serif Variable", "Source Serif", Georgia, serif;
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
@use "sass:color";

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
    background-color: color.adjust(white, $alpha: -0.5);
    bottom: 0;
    content: "";
    left: 0;
    position: fixed;
    right: 0;
    top: 0;
    z-index: 1;
  }
}
</style>
