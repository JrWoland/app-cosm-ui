<template>
  <AppNav class="nav">
    <span class="nav-arrow" @click="action"><i class="lni lni-chevron-left"></i></span>
    <span class="name">{{ title }}</span>
  </AppNav>
</template>

<script>
import { Options, Vue } from 'vue-class-component'
import AppNav from '../components/AppNav.vue'

@Options({
  name: 'AppNavComposed',
  components: { AppNav },
  props: {
    action: {
      type: Function
    },
    title: {
      type: String,
      default: ''
    }
  }
})
export default class ClientCardView extends Vue { }
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
  .nav {
  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 24px;
  }

  .nav-arrow {
    color: $main-color;
    width: 20px;
  }

  .name{
    flex-grow: 1;
    text-align: center;
}
</style>
