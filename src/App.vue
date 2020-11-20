<template>
  <div id="app">
    <div id="desktop">
    <router-view name="desktop"></router-view>
    </div>
    <div id="mobile">
      <router-view name="mobile"></router-view>
    </div>
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
  

  #app {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;

    background-color: $eerie-black;
    background-image: url('./assets/space.jpg');
    cursor: none;
    cursor: url('./assets/maincursor.png'), pointer;
    background-blend-mode: color-dodge;
    color: $azureish-white;
    height: 100%;

     #desktop{
      width: 100%;
      height: 100%;
      display: none;
      
      @media screen and (min-width: "768px") {
        display: block;
      }
    }

    #mobile{
      width: 100%;
      height: 100%;
      display: block;
      
      @media screen and (min-width: "768px") {
        display: none;
      }
    }
  }
}
</style>
