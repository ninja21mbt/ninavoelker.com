<template>
  <div id="app">
<router-view></router-view>
  </div>
</template>

<script>

export default {
  name: "App",
  components: {
  }
};
</script>

<style lang="scss">
@import "components/sass/_variables";
@import "components/sass/_mixins";

body {
  margin: 0;
  height: 100vh;
  overflow: hidden;
  
}
  #app {
    text-align: center;
      display: flex;
    align-items: center;
    justify-content: center;

    background-color: $eerie-black;
    background-image: url('./assets/space.jpg');
    cursor: url('./assets/cursor.png') default;
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
