<template>
  <div class="input-container">
    <input
      type="text"
      class="search"
      :placeholder="placeholder"
      :disabled="disabled"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <i class="lni lni-search-alt"></i>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component'

@Options({
  name: 'AppSearchBar',
  emits: ['update:modelValue'],
  props: {
    placeholder: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: String
    }
  }
})
export default class AppSearchBar extends Vue {}
</script>

<style lang="scss" scoped>
@import "../assets/scss/mixins.scss";
.input-container {
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.search {
  @include search-input;
  padding: 8px 24px 8px 8px;
}

i {
  position: absolute;
  padding-right: 8px;
  color: $secondary-font-color;
}
</style>
