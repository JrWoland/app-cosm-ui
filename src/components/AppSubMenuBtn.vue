<template>
  <div @click.prevent="showMenu" class="menu-btn">
    <i class="fas fa-ellipsis-v"></i>
    <div v-click-outside="closeMenu" class="menu-list" v-if="isMenuVisible">
      <p class="menu-list__item" @click="$emit('item-menu-clicked', item)" v-for="(item, index) in items" :key="index">{{item}}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  emits: ['item-menu-clicked'],
  props: {
    items: {
      type: Array,
      default: () => ['Item']
    }
  },
  directives: {
    'click-outside': {
      beforeMount: (el, binding) => {
        el.clickOutsideEvent = (event: any) => {
          const className = event.target.classList.value
          if (className === 'fas fa-ellipsis-v' || className === 'menu-btn') return
          if (!(el === event.target || el.contains(event.target))) {
            binding.value()
          }
        }
        document.addEventListener('click', el.clickOutsideEvent)
      },
      unmounted: el => {
        document.removeEventListener('click', el.clickOutsideEvent)
      }
    }
  }
})
export default class AppSubMenuBtn extends Vue {
  isMenuVisible = false;

  closeMenu () {
    this.isMenuVisible = false
  }

  showMenu () {
    this.isMenuVisible = true
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/variables.scss";
.menu-btn {
  z-index: 1;
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
  width: max-content;
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
