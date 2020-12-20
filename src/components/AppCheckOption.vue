<template>
  <div v-if="!isDynamic">
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

  <div class="dynamic" v-else>
    <select
      class="selectable-item-dynamic"
      :class="{ editable: isEditable }"
      @click="onDynamicClick"
      v-for="(option, index) in dynamicOptions"
      v-model="checkedList[index]"
      name="length"
      id="length"
      :key="index"
      :disabled="!isEditable"
    >
      <option v-for="option in availableOptions" :value="option" :key="option">
        {{ option }}
      </option>
    </select>
    <div>
      <button class="dynamic__btn" :class="{ editable: dynamicOptions !== 0  && isEditable}" @click.prevent="removeOption" :disabled="dynamicOptions === 0 || !isEditable">-</button>
      <button class="dynamic__btn" :class="{ editable: isEditable}" @click.prevent="addOption" :disabled="!isEditable">+</button>
    </div>
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
    },
    isDynamic: {
      type: Boolean,
      default: false
    }
  }
})
export default class AppCheckOption extends Vue {
  checkedList = [...this.checkedOptions];
  dynamicOptions = this.checkedList.length;

  onDynamicClick () {
    this.$emit('list-updated', this.checkedList)
  }

  addOption () {
    this.dynamicOptions++
    this.checkedList.push(null)
    this.$emit('list-updated', this.checkedList)
  }

  removeOption () {
    this.dynamicOptions--
    this.checkedList.pop()
    this.$emit('list-updated', this.checkedList)
  }

  click (option) {
    if (!this.isEditable) return
    if (!this.checkedList.includes(option)) {
      this.checkedList.push(option)
      this.$emit('list-updated', this.checkedList)
    } else {
      this.checkedList = this.checkedList.filter((item) => item !== option)
      this.$emit('list-updated', this.checkedList)
    }
  }
}
</script>

<style lang="scss">

.dynamic {
  width: 100%;
  &__btn {
    margin: 10px 5px;
    outline: none;
    border: none;
    border-radius: 50px;
    color: white;
    background-color: rgb(199, 199, 199);
    width: 80px;
    height:30px;
    font-size: 20px;
    &.editable {
       background-color: rgb(255, 57, 255);
       cursor: pointer;
     }
  }

  .selectable-item-dynamic:first-of-type {
    border-left: none;
  }
  .selectable-item-dynamic:last-child {
    border-right: none;
  }
}

.selectable-item-dynamic {
  border: none;
  border-right: 2px solid rgb(199, 199, 199);
  border-left: 2px solid rgb(199, 199, 199);
  color: rgb(199, 199, 199);
  font-size: 15px;
  font-weight: 400;
  user-select: none;
  padding: 5px;
  margin: 1px;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  border-bottom-right-radius: 3px;
  border-bottom-left-radius: 3px;
  &.editable {
    border-color: rgb(255, 57, 255);
    color:  rgb(255, 57, 255);
    cursor: pointer;
  }
}

.selectable-item {
  display: inline-block;
  border: 2px solid rgb(199, 199, 199);
  text-align: center;
  line-height: 1.7em;
  width: 2.7em;
  height: 2.7em;
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
