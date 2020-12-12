<template>
  <div>
    <span
      @click="click(option)"
      v-for="option in availableOptions"
      class="selectable-item"
      :class="{ editable: isEditable, checked: checkedList.includes(option) }"
      :key="option"
    >
      {{ option }}
    </span>
  </div>
</template>

<script>
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AppCheckOption',
  emits: ['list-updated'],
  props: {
    availableOptions: {
      type: Array,
      default: () => []
    },
    checkedOptions: {
      type: Array,
      default: () => []
    },
    isEditable: {
      type: Boolean,
      default: false
    }
  }
})
export default class AppCheckOption extends Vue {
  checkedList = [...this.checkedOptions]

  click (option) {
    if (!this.isEditable) return
    if (!this.checkedList.includes(option)) {
      this.checkedList.push(option)
      this.$emit('list-updated', this.checkedList)
    } else {
      this.checkedList = this.checkedList.filter(item => item !== option)
      this.$emit('list-updated', this.checkedList)
    }
  }
}
</script>

<style lang="scss">
.selectable-item {
  display: inline-block;
  border: 2px solid rgb(199, 199, 199);
  text-align: center;
  line-height: 1.7em;
  width: 2.7em;
  height:  2.7em;
  border-radius: 505px;
  margin: 5px;
  padding: 4px;
  font-size: 15px;
  font-weight: 400;
  user-select: none;

  &.checked {
  background-color: rgb(199, 199, 199);
  border: 2px solid rgb(199, 199, 199);
  color: #fff;
      &.editable {
      background-color: rgb(255, 57, 255);
      border: 2px solid rgb(255, 57, 255);
      cursor: pointer;
    }
  }
}

</style>
