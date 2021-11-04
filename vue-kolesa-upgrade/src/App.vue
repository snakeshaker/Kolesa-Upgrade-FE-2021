<template>
  <div id="app">
    <div class="wrap">
      <div class="content-container">
        <header class="header">
            <div class="header__logo">
                <img src="@/assets/svg/kolesa-logo.svg" alt="Logo">
            </div>
            <form action="" class="header__form">
              <search></search>
            </form>
            <user></user>
        </header>
        <side-navigation></side-navigation>
        <router-view></router-view>
      </div>
    </div>
    <app-footer></app-footer>
  </div>
</template>

<script>
import Search from './layouts/components/Search.vue';
import SideNavigation from './layouts/components/sideNavigation.vue';
import User from './layouts/components/User.vue';
import AppFooter from './layouts/components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    Search,
    User,
    SideNavigation,
    AppFooter,
  },
};
</script>

<style lang="scss">
@import './assets/scss/style.scss';
</style>
