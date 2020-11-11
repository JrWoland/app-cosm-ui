<template>

  <div @click="toggleMenu" class="menu-btn">
    <i class="fas fa-ellipsis-v"></i>
    <div @click="toggleMenu" class="menu-list" v-show="showMenu">
      <p @click="toggleMenu" v-for="(item, index) in items" :key="index">{{item}}</p>
    </div>
  </div>

</template>

<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  props: {
    items: {
      type: Array,
      default: () => ['Item']
    }
  }
})
export default class AppSubMenuBtn extends Vue {
  showMenu = false;

  toggleMenu () {
    console.log(this.showMenu)
    this.showMenu = !this.showMenu
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.menu-list {
 position: absolute;
 padding: 10px;
 background-color: #fff;
 text-align: left;
 top: 30px;
 right: 0;
 box-shadow: $main-box-shadow;
}
.menu-btn {
  position: relative;
  width: min-content;
  height: min-content;
  padding: 5px 13px;
  border-radius: 50%;
  &:hover {
    background-color: #ddd;
    cursor: pointer;
  }
}
</style>
