<template>
  <div>
    <router-link to="/wtf" >
      <button>fiction</button>
    </router-link>
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

a {
  &:hover {
    text-shadow: 2px 2px 5px $eerie-black;
  }

  button {
    @include button;
    @include button-shadow;
    margin: 40px;
    border: 3px dotted $azureish-white;
    font-family: "Monoton", cursive;
    color: $azureish-white;
    font-size: 4em;
    text-shadow: 2px 2px 5px $azureish-white;
    text-decoration: none;

    &:hover {
      background-image: linear-gradient(50deg, blue, pink);
      background-origin: border-box;
      transition-duration: 0.5s;
      cursor: pointer;
    }
  }
@media screen and (max-width:"680px") {
  button{
    @include mobilebutton;
    font-size: 2em;
    border: 2px dotted $azureish-white;
  }
  }
}
</style>
