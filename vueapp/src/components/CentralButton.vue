<template>
  <div>
    <button>Button</button>
  </div>
</template>

<script>
export default {
  name: "CentralButton",
  props: {}
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";

@import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");

button {
  @include button;
  @include button-shadow;
  color: $azureish-white;
  font-size: 1em;
  margin: 40px;
  font-size: 3em;
  text-shadow: 2px 2px 5px $azureish-white;
  border: 3px dotted $azureish-white;
  font-family: "Monoton", cursive;

  &:hover {
    background: $pumpkin-gradient;
    @include button-active;
    border: none;
    text-shadow: 2px 2px 5px $eerie-black;
  }
}
</style>
