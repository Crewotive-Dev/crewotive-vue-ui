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
  <KareContainer>
    <KareRow>
      <KareCol>
        <KareText> Hello </KareText>
        <KareButton @click="sayHello()" outline="primary">Say Hello</KareButton>
      </KareCol>
    </KareRow>
  </KareContainer>
</template>
