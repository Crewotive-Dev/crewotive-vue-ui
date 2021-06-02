<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  methods: {
    sayHello() {
      alert("Hello");
    },
  },
};
</script>
<template>
  <CreContainer>
    <CreRow>
      <CreCol col="6" sm="6" lg="12">
        <CreText> Hello </CreText>
        <CreButton label='myButton' v-bg.primary.10.gradient @click=sayHello() color=orange>Say Hello</CreButton>
      </CreCol>
      <CreCol>
        <CreText> Hello </CreText>
        <CreButton label='myButton' @click="sayHello()" color="primary" outline>Say Hello</CreButton>
        <CreButton label='myButton' @click="sayHello()" color="primary" outline>Say Hello</CreButton>
      </CreCol>
    </CreRow>
  </CreContainer>
</template>
