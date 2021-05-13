<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>
<template>
  <KareContainer>
    <KareRow>
      <KareCol>
        <KareText> Hello </KareText>
      </KareCol>
    </KareRow>
  </KareContainer>
</template>
