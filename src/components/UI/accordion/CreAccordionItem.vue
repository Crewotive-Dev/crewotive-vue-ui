<script>
export default {
  name: "CreAccordion",
  props: {
    variant: {
      required: false,
      type: String,
      default: ""
    },
    stayOpen: {
      required: false,
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      id: "accordion_"+Math.random().toString(16).substring(2,10),
    };
  },
  watch: {
    stayOpen(val){
      if(val){
        return this.$el.setAttribute("data-bs-parent",`#${this.parentID}`)
      }
      return this.$el.removeAttribute("data-bs-parent")
    }
  },
  computed:{
    parentID(){
      const parent = this.$parent
      if(parent) {
        if(["CreAccordion","cre-accordion"].includes(parent.$options._componentTag)){
          return parent.id
        }
      }
      return false
    },
    // headerStyleClasses(){
    //   const vm = this
    //   return [
    //     {
    //     }
    //   ]
    // },
    // bodyStyleClasses(){
    //   const vm = this
    //   return [
    //     {
    //     }
    //   ]
    // }
  }
};
</script>

<template>
  <div class="accordion-item">
    <span
      :id="`heading-${id}`"
      class="accordion-header"
    >
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        :data-bs-target="`#${id}`"
        aria-expanded="false"
        :aria-controls="id"
      >
        <slot name="accordion-header" />
      </button>
    </span>
    <div
      :id="id"
      class="accordion-collapse show"
      :data-bs-parent="stayOpen ? false : `#${parentID}` "
      :aria-labelledby="`heading-${id}`"
    >
      <div
        class="accordion-body"
      >
        <slot name="accordion-body" />
      </div>
    </div>
  </div>
</template>
