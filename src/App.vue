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

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  box-sizing: border-box;
}

.container {
  margin: 0 auto;
  padding: 1rem;
  max-width: 75rem;
  text-align: center;
}
</style>

<style>
button {
  font-family: inherit;
}
</style>
