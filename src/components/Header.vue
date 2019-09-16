<template>
  <div class="container">
    <header class="header">
        <router-link :to="{ name: 'home' }" class="header__logo">
          Frontend Assignment | News
        </router-link>
    </header>
  </div>
</template>

<style lang="scss" scoped>
@media only screen and (max-width:36rem) {
  .header {
    &__logo {
      font-size: 1rem;
    }
  }
}
</style>
