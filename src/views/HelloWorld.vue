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
    <CreAccordion>
      <CreAccordionItem>
        <div slot="accordion-header">header</div>
        <div slot="accordion-body">body</div>
      </CreAccordionItem>
    </CreAccordion>
    <CreRow cols=3>
      <CreCol col="6" sm="6" lg="12">
        <CreText> Hello </CreText>
        <CreButton label='myButton' @click=sayHello() variant=orange>Say Hello</CreButton>
      </CreCol>
      <CreCol>
        <CreText> Hello </CreText>
        <CreButton label='myButton' @click="sayHello()" variant="primary" outline>Say Hello</CreButton>
        <CreButton label='myButton' @click="sayHello()" variant="primary" outline>Say Hello</CreButton>
      </CreCol>
    </CreRow>
  </CreContainer>
</template>
