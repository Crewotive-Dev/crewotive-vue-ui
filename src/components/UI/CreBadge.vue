<script>
export default {
  name: "CreBadge",
  props: {
    label: {
      required: false,
      type: String,
      default: "Badge",
    }
  },
  computed:{
    styleClasses(){
      const vm = this
      return{}
    }
  }
};
</script>

<template>
  <span
    type="button"
    class="badge"
    :class="styleClasses"
  > {{ label }}
  </span>
</template>
