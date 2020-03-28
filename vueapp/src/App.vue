<template>
  <div id="app">
    <CentralButton />
  </div>
</template>

<script>
import CentralButton from "./components/CentralButton.vue";

export default {
  name: "App",
  components: {
    CentralButton
  }
};
</script>

<style lang="scss">
@import "components/sass/_variables";
@import "components/sass/_mixins";

body {
  margin: 0;
  height: 100vh;

  #app {
    text-align: center;
    background-color: $eerie-black;
    background-image: url('./assets/space.jpg');
    background-blend-mode: color-dodge;
    color: $azureish-white;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
  }
}
</style>
