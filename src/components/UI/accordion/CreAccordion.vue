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
  <div class="accordion m-5" :class="styleClasses" id="accordionExample">
      <slot />
  </div>
</template>
