<script>
export default {
  name: "CreCarousel",
  data() {
    return {
      id: "carousel_"+Math.random().toString(16).substring(2,10)
    };
  },
  props: {
    buttons:{
      required: false,
      type: Boolean,
      default: true
    }
  },
  computed:{
    styleClasses(){
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
  <div
    :id="id"
    class="carousel slide overflow-hidden"
    :class="styleClasses"
  >
    <div class="carousel-inner">
      <slot />
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="`#${id}`"
      v-if="buttons"
      data-bs-slide="prev"
    >
      <span
        class="carousel-control-prev-icon"
        aria-hidden="true"
      />
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="`#${id}`"
      v-if="buttons"
      data-bs-slide="next"
    >
      <span
        class="carousel-control-next-icon"
        aria-hidden="true"
      />
    </button>
  </div>
</template>
