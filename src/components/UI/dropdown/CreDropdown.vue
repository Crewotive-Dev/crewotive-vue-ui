<script>
export default {
  data() {
    return {
      key: '_'+Math.random().toString(16).substr(2,10),
    };
  },
  props:{
    variant:{
      required: false,
      type: String,
      default: 'primary'
    },
    tint: {
      required: false,
      type: [String, Number],
      default: "",
    },
    autoClose: {
      required: false,
      type: String,
      default: "true",
    },
    split: {
      required: false,
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      required: false,
      default: ""
    },
    position: {
      type: String,
      required: false,
      default: ""
    },
  },
  computed: {
    styleClasses(){
      const vm = this
      return {
        [`btn-${vm.variant}${vm.tint && '-'+vm.tint}`]: vm.variant,
        [`btn-${vm.size}`]: vm.size,
        [`dropdown-toggle`]: !vm.split
      }
    }
  },
  watch: {
    autoClose(){
      this.key='_'+Math.random().toString(16).substr(2,10)
    }
  }
}
</script>

<template>
  <div
    class="btn-group"
    :key="key"
    :class="{[`drop${position}`]: position}"
  >
    <button
      v-if="split && position=='start'"
      type="button"
      class="btn dropdown-toggle dropdown-toggle-split"
      :class="styleClasses"
      data-bs-toggle="dropdown"
      :data-bs-auto-close="autoClose"
      aria-expanded="false"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <button
      type="button"
      class="btn"
      :data-bs-toggle="!split && 'dropdown'"
      :data-bs-auto-close="!split && autoClose"
      @click.prevent="split && $emit('click')"
      aria-expanded="false"
      :class="styleClasses"
    >
      Action
    </button>
    <button
      v-if="split && position!='start'"
      type="button"
      class="btn dropdown-toggle dropdown-toggle-split"
      :class="styleClasses"
      data-bs-toggle="dropdown"
      :data-bs-auto-close="autoClose"
      aria-expanded="false"
    >
      <span class="visually-hidden">Toggle Dropdown</span>
    </button>
    <ul class="dropdown-menu">
      <slot />
    </ul>
  </div>
</template>

<style>

</style>