<template>
  <div class="info-box">
    <slot name="header" />
    <slot name="content" />
    <div class="spinner" v-if="loading">
      <flower-spinner
        class="spinner-item"
        :animation-duration="2000"
        :size="40"
        :color="'#FF3BEB'"
      />
    </div>
  </div>
</template>

<script>
import { Vue, Options } from 'vue-class-component'

@Options({
  props: {
    loading: {
      type: Boolean
    }
  }
})
export default class AppInfoBox extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.info-box {
  position: relative;
  width: 100%;
  min-height: 100px;
  margin-top: 5px;
  padding: 5px;
  background-color: #ffffff51;
  box-shadow: $main-box-shadow;
  border-radius: $main-border-radius;
  .spinner {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.871);
  }
}
</style>
