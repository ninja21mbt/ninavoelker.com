<template>
  <div id="app">
    <div id="button">
    <CentralButton />
    </div>
    <img src="../assets/spaceship.png">
  </div>
</template>

<script>
import CentralButton from "../components/CentralButton.vue";

export default {
  name: "Home",
  props: {},
  components: {
    CentralButton
  },
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");

#app {
    text-align: center;
      display: flex;
    align-items: center;
    justify-content: center;

    background-color: $eerie-black;
    background-image: url('../assets/space.jpg');
    background-blend-mode: color-dodge;
    color: $azureish-white;
    height: 100%;
  }


img{
  z-index: 100;
  height: 400px;
  position: absolute;
  right: -90px;
  bottom: -90px;
}
</style>