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
    box-shadow:
    0 0 60px 30px $azureish-white,
    0 0 100px 60px #00bfff,
    0 0 140px 90px $saffron;
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
