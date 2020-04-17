<template>
  <div id="app">
    <div id="button">
      <CentralButton />
    </div>
    <img src="../assets/spaceship.png" />
  </div>
</template>

<script>
import CentralButton from "../components/CentralButton.vue";

export default {
  name: "Home",
  props: {},
  components: {
    CentralButton
  }
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
  background-image: url("../assets/space.jpg");
  background-blend-mode: color-dodge;
  color: $azureish-white;
  height: 100%;
}

#button {
  position: absolute;
}

img {
  z-index: 100;
  height: 400px;
  position: relative;
  right: -390px;
  bottom: -190px;

  &:hover {
    animation-name: animatespaceship;
    animation-duration: 0.2s;
    animation-iteration-count: infinite;
    cursor: pointer;
  }
}

@keyframes animatespaceship {
  0% {
    right: -390px;
    bottom: -190px;
  }

  25% {
    right: -383px;
    bottom: -183px;
  }

  75% {
    right: -390px;
    bottom: -183px;
  }

  100% {
    right: -383px;
    bottom: -183px;
  }
}
</style>