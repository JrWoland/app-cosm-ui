<template>
    <nav class="app-navigation">
       <slot></slot>
    </nav>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AppNavSecondary'
})
export default class AppNavSecondary extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.app-navigation {
  position: fixed;
  top:0;
  left: 0;
  width: 100%;
  height: $nav-bar-height;
  background-color: #fff;
  text-align: left;
  box-shadow: $main-box-shadow;
  padding: 0px 10px;
  z-index: 1;
}
</style>
