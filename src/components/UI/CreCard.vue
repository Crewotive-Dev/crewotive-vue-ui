<script>
export default {
  name: "CreCard",
  props: {
    noHeader:{
      required: false,
      type: Boolean,
      default: false
    },
    noBody:{
      required: false,
      type: Boolean,
      default: false
    },
    noFooter:{
      required: false,
      type: Boolean,
      default: false
    },
    textVariant:{
      required: false,
      type: String,
      default: ""
    },
    imgSrc:{
      required: false,
      type: String,
      default: ""
    },
    imgAlt:{
      required: false,
      type: String,
      default: "card image"
    },
    imgOverlay:{
      required: false,
      type: Boolean,
      default: false
    },
    imgOnSide:{
      required: false,
      type: Boolean,
      default: false
    },
    imgFit:{
      required: false,
      type: String,
      default: ""
    },
    imgPosition:{
      required: false,
      type: String,
      default: "before"
    },
    imgFitPosition:{
      required: false,
      type: String,
      default: ""
    },
  },
  computed:{
    cardClasses(){
      const vm = this
      return{
      }
    },
    imgClasses(){
      const vm = this
      return{
        'col-4': vm.imgOnSide && vm.imgSrc && !vm.imgOverlay,
          [`order-1`]: ['after'].includes(vm.imgPosition) && vm.imgSrc && !vm.imgOverlay ,
        [`object-${vm.imgFit}`]: vm.imgFit,
        [`object-${vm.imgFitPosition}`]: vm.imgFitPosition,
      }
    },
    bodyClasses(){
      const vm = this
      return{
        'card-img-overlay': vm.imgOverlay,
        [`text-${vm.textVariant}`]: vm.textVariant
      }
    },
  }
};
</script>

<template>
  <div
    class="card overflow-hidden"
    :class="cardClasses"
  >
    <div class="row g-0">
      <img
        v-if="imgSrc"
        :src="imgSrc"
        :alt="imgAlt"
        :class="imgClasses"
      >
      <div
        :class="{
          [`col-8`]: imgOnSide && imgSrc && !imgOverlay
        }"
      >
        <div
          v-if="!noHeader"
          class="card-header"
        >
          <slot
            name="card-header"
          />
        </div>

        <div
          v-if="!noBody"
          class="card-body"
          :class="bodyClasses"
        >
          <slot
            name="card-body"
          />
          <slot />
        </div>
        <div
          v-if="!noFooter"
          class="card-footer"
        >
          <slot
            name="card-footer"
          />
        </div>
      </div>
    </div>
  </div>
</template>