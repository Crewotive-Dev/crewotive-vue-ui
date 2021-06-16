<script>
export default {
  name: "CreCarouselItem",
  props: {
    active:{
      required: false,
      type: Boolean,
      default: false
    },
    imgSrc:{
      required: false,
      type: String,
      default: ""
    },
    imgAlt:{
      required: false,
      type: String,
      default: "carousel image"
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return [
        {
          'active': vm.active
        }
      ]
    }
  }
};
</script>

<template>
  <div
    class="carousel-item"
    :class="styleClasses"
  >
    <img
      :src="imgSrc"
      class="d-block w-100"
      :alt="imgAlt"
    >
    <div class="carousel-caption d-none d-md-block">
      <slot name="carousel-caption" />
      <slot />
    </div>
  </div>
</template>
