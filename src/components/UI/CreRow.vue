<script>
export default {
  name: "KareRow",
  computed:{
    styleClasses(){
      return []
    }
  }
};
</script>

<template>
  <div :class="styleClasses" class="row" >
    <slot />
  </div>
</template>
