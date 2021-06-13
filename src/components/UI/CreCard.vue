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
      default: ''
    },
    imgSrc:{
      required: false,
      type: String,
      default: ""
    },
    imgAlt:{
      required: false,
      type: String,
      default: ""
    },
    imgOverlay:{
      required: false,
      type: Boolean,
      default: false
    },
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
        [`text-${vm.textVariant}`]: vm.textVariant
      }
    }
  }
};
</script>

<template>
  <div
    class="card overflow-hidden"
    :class="styleClasses"
  >
    <img
      v-if="imgSrc"
      :src="imgSrc"
      :alt="imgAlt"
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
      :class="{'card-img-overlay': imgOverlay}"
    >
      <slot
        name="card-body"
      />
    </div>
    <div
      v-if="!noFooter"
      class="card-footer"
    >
      <slot
        name="card-footer"
      />
    </div>
    <slot />
  </div>
</template>