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
  font-family: 'Source Serif Variable';
  font-weight: 200 900;
  font-style: normal;
  font-stretch: normal;
  src: url('/SourceSerifVariable-Roman.otf.woff2') format('woff2'),
    url('/SourceSerifVariable-Roman.otf.woff') format('woff');
}

@font-face {
  font-family: 'Source Serif Variable';
  font-weight: 200 900;
  font-style: italic;
  font-stretch: normal;
  src: url('/SourceSerifVariable-Italic.otf.woff2') format('woff2'),
    url('/SourceSerifVariable-Italic.otf.woff') format('woff');
}

#app {
  font-family: 'Source Serif Variable', 'Source Serif', 'Georgia', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 75rem;
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
    content: '';
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: transparentize(white, 0.5);
    backdrop-filter: blur(5px);
    z-index: 1;
  }
}
</style>
