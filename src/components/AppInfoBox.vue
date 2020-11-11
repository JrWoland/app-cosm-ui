<template>
  <div class="info-box">
    <slot name="header"/>
    <slot name="content"/>
  </div>
</template>

<script>
import { Vue } from 'vue-class-component'

export default class AppInfoBox extends Vue {}
</script>

<style lang="scss" scoped>
@import  '../assets/scss/variables.scss';
 .info-box {
    width: 100%;
    min-height: 100px;
    margin-top: 5px;
    padding: 10px;
    background-color: #fff;
    box-shadow: $main-box-shadow;
    border-radius: $main-border-radius;
 }
</style>
