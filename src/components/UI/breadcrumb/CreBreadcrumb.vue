<script>
import {breadcrumbDivider} from '../../../assets/js/sassVariables'
export default {
  name: "CreBreadcrumb",
  props: {
    divider:{
      required: false,
      type: String,
      default: breadcrumbDivider
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return{
      }
    },
    styles(){
      const vm = this
      return {
        [`--cre-breadcrumb-divider`]: `'${vm.divider}'`
      }
    }
  }
};
</script>

<template>
  <nav
    :style="styles"
    aria-label="breadcrumb"
  >
    <ol class="breadcrumb">
      <slot />
    </ol>
  </nav>
</template>
