<template>

  <div @click="toggleMenu" class="menu-btn">
    <div class="menu-icon">
      <i class="fas fa-ellipsis-v"></i>
    </div>
    <div class="menu-list" v-show="showMenu">
      <p class="menu-list__item" @click="$emit('item-menu-clicked', item)" v-for="(item, index) in items" :key="index">{{item}}</p>
    </div>
  </div>

</template>

<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  emits: ['item-menu-clicked'],
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
    this.showMenu = !this.showMenu
    // if (this.showMenu) {
    //   document.body.addEventListener('click', function () {
    //     console.log('weszło', this.showMenu)

    //     this.showMenu = false
    //   }.bind(this))
    // }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
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
.menu-list {
  position: absolute;
  background-color: #fff;
  text-align: left;
  top: 30px;
  right: 0;
  box-shadow: 0px 2px 7px 0px #ddd;

  &__item {
    padding: 10px 20px;
    width: 100%;
    height: 100%;
    margin: 0;
    &:hover {
      background-color: #ddd;
    }
  }
}
</style>
