<script>
export default {
  name: "CreAccordion",
  props: {
    accordionCount:{
      required: false,
      type: String,
      default: ""
    },
    flush:{
      required: false,
      type: Boolean,
      default: false
    },

  },
  computed:{
    styleClasses(){
      const vm = this
      return [
        {
          [`accordion-flush`]: vm.flush
        }
      ]
    }
  }
};
</script>

<template>
  <div
    id="accordionExample"
    class="accordion m-5"
    :class="styleClasses"
  >
    <slot />
  </div>
</template>
