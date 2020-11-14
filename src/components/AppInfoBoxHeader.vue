<template>
  <div class="info-box-header">
    <slot></slot>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppSubMenuBtn from './AppSubMenuBtn.vue'

@Options({
  name: 'AppInfoBoxHeader',
  components: { AppSubMenuBtn }
})
export default class AppInfoBoxHeader extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
.info-box-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 40px;
  border-bottom: 1px solid $main-border-color;
  text-align: right;
}
</style>
