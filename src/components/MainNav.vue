<template>
  <header class="header">
    <Logo class="logo" />
    <nav class="nav">
      <router-link
        class="link"
        to="/"
        >Notes</router-link
      >
      <router-link
        class="link"
        to="/chords"
        >Chords</router-link
      >
      <router-link
        class="link"
        to="/scales"
        >Scales</router-link
      >
    </nav>
  </header>
</template>

<script lang="ts">
import Logo from '@/assets/transpose-logo.svg?component';

export default {
  name: 'MainNav',

  components: {
    Logo,
  },
};
</script>

<style scoped>
.header {
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  padding-top: 1.5rem;
  text-align: center;
}

.logo {
  height: 3rem;
  width: auto;
}

.nav {
  align-items: center;
  display: flex;
}

.link {
  border-bottom: 0.25rem solid transparent;
  color: var(--secondary);
  padding: 0.5rem 0;
  text-decoration-line: none;
}

.link:not(:last-of-type) {
  margin-right: 1rem;
}

.link.router-link-exact-active {
  border-color: currentcolor;
}
</style>
