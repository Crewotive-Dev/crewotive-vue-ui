<script>
export default {
  name: "CreAccordion",
  props: {
    variant: {
      required: false,
      type: String,
      default: ""
    }
  },
  computed:{
    headerStyleClasses(){
      const vm = this
      return [
        {
        }
      ]
    },
    bodyStyleClasses(){
      const vm = this
      return [
        {
        }
      ]
    }
  }
};
</script>

<template>
  <div class="accordion-item">
    <h2
      id="headingTwo"
      class="accordion-header"
      :class="headerStyleClasses"
    >
      <button
        class="accordion-button"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#collapseTwo"
        aria-expanded="false"
        aria-controls="collapseTwo"
      >
        <slot name="accordion-header" />
      </button>
    </h2>
    <div
      id="collapseTwo"
      class="accordion-collapse show"
      aria-labelledby="headingTwo"
      data-bs-parent="#accordionExample"
    >
      <div
        class="accordion-body"
        :class="bodyStyleClasses"
      >
        <slot name="accordion-body" />
      </div>
    </div>
  </div>
</template>
