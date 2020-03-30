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
  src: url('/SourceSerifVariable-Roman.ttf.woff2') format('woff2'),
    url('/SourceSerifVariable-Roman.ttf.woff') format('woff'),
    url('/SourceSerifVariable-Roman.ttf') format('truetype');
}

@font-face {
  font-family: 'Source Serif Variable';
  font-weight: 200 900;
  font-style: italic;
  font-stretch: normal;
  src: url('/SourceSerifVariable-Italic.ttf.woff2') format('woff2'),
    url('/SourceSerifVariable-Italic.ttf.woff') format('woff'),
    url('/SourceSerifVariable-Italic.ttf') format('truetype');
}

#app {
  font-family: 'Source Serif Variable', 'Source Serif', serif;
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

.no-scroll {
  overflow: hidden;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    background-color: transparentize(black, 0.25);
  }
}
</style>
