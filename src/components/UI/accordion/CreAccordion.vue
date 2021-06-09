<script>
export default {
  name: "CreAccordion",
  data() {
    return {
      id: "accordion__"+Math.random().toString(16).substring(2,10)
    };
  },
  props: {
    flush:{
      required: false,
      type: Boolean,
      default: false
    }
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
    :id="id"
    class="accordion"
    :class="styleClasses"
  >
    <slot />
  </div>
</template>
