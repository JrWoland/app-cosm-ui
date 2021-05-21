<template>
  <div class="panel">
    <AppNav class="panel-nav">
      <router-link class="panel-nav__link" :to="{name: 'Panel'}">
        <i class="lni lni-home link-icon"></i>
        <span class="panel-nav__link-title">Panel</span>
      </router-link>
      <router-link class="panel-nav__link" :to="{name: 'ClientsList'}">
        <i class="lni lni-users link-icon"></i>
        <span class="panel-nav__link-title">Klienci</span>
      </router-link>
      <router-link class="panel-nav__link" :to="{name: 'Calendar'}">
        <i class="lni lni-calendar"></i>
        <span class="panel-nav__link-title">Kalendarz</span>
      </router-link>
      <span class="panel-nav__link panel-nav__link--logout" @click="logout">
        <i class="lni lni-unlock"></i>
        <span class="panel-nav__link-title">Wyloguj</span>
      </span>
    </AppNav>
    <router-view />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'
import AppNav from '../components/AppNav.vue'

@Options({
  name: 'AppMainView',
  components: { AppNav }
})
export default class Panel extends Vue {
  logout (): void {
    this.$store.dispatch('logout')
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.panel {
  margin-top: $nav-bar-height;
}
.panel-nav {
  display: flex;
  align-items: center;

  &__link {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: $font-color;
    font-size: 23px;
    width: 50px;
    height: 50px;
    margin: 2px 5px;
    &--logout {
      margin-left: auto;
    }
  }
  &__link-title {
    text-align: center;
    font-size: 12px;
  }
  &__link-icon {
    text-align: center;
    font-size: 8px;
  }
  a {
    &.router-link-exact-active {
      color: $main-color;
      border-radius: 50%
      // background-color: rgb(255, 235, 253);
    }
  }
}
</style>
