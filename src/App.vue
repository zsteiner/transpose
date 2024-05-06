<template>
  <div
    id="app"
    class="app"
  >
    <MainNav />
    <Switcher />
    <router-view />
  </div>
</template>

<script lang="ts">
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

<style scoped>
.app {
  display: grid;
  font-family: 'Source Serif Variable', 'Source Serif', Georgia, serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  gap: var(--layout-gap);
  margin: 0 auto;
  max-width: var(--medium);
  padding: var(--spacer) var(--spacer) 6rem;
}

.app >>> .layout-selection {
  align-content: center;
  display: grid;
  grid-template-rows: auto 1fr;
}

.app >>> .layout-tools {
  display: grid;
  gap: var(--layout-gap);
  padding-block-start: var(--layout-gap);
  width: 100%;
}
</style>

<style>
:root {
  --primary: #ff951e;
  --secondary: hsl(197deg 100% 35%);
  --warning: #ffca4c;
  --success: #39ea28;
  --default: hsl(220deg 3% 23%);
  --default-transparent: hsl(220deg 3% 23% / 10%);
  --default-light: hsl(220deg 3% 38%);
  --info: #959ea5;
  --white: #fff;
  --link-light: hsl(197deg 100% 50%);
  --medium: 45rem;
  --large: 75rem;
  --spacer: 1rem;
  --spacer-double: 2rem;
  --layout-gap: var(--spacer);
  --input-padding: 0.75rem 1rem;
  --border-width: 0.0625rem;
  --border-radius: 0.75rem;
}

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
}

.no-scroll::before {
  backdrop-filter: blur(0.325rem);
  background-color: rgb(255 255 255 / 25%);
  content: '';
  inset: 0;
  position: fixed;
  z-index: 1;
}

@media (width >= 45rem) {
  :root {
    --layout-gap: var(--spacer-double);
  }
}
</style>
