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
  --logo-height: 2rem;
  --header-gap: var(--spacer);

  align-items: center;
  display: flex;
  gap: var(--header-gap);
  justify-content: center;
  text-align: center;
}

.logo {
  height: var(--logo-height);
  width: auto;
}

@media (width >= 45rem) {
  .header {
    --logo-height: 3rem;
    --header-gap: 2rem;
  }
}

.nav {
  align-items: center;
  display: flex;
  gap: var(--spacer);
}

.link {
  border-bottom: 0.25rem solid transparent;
  color: var(--secondary);
  padding: 0.5rem 0;
  text-decoration-line: none;
}

.link.router-link-exact-active {
  border-color: currentcolor;
}
</style>
