<template>
  <div>
    <button><router-link to="/wtf">spacy</router-link></button>
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
  margin: 40px; 
  border: 3px dotted $azureish-white;
  font-family: "Monoton", cursive;

  &:hover {
    background: $pumpkin-gradient;
    @include button-active;
    border: none;
  }

  a{
    color: $azureish-white;
    font-size: 5em;
    text-shadow: 2px 2px 5px $azureish-white;
    text-decoration: none;

    &:hover{
      text-shadow: 2px 2px 5px $eerie-black;
    }
  }
}
</style>
