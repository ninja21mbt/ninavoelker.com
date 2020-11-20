<template>
  <div id="homeMobile">
    <div class="underconstruction">
      <h2>...this website is under construction</h2>
    </div>
    <div class="border">
      <div class="wrapper">
        <h1 class="title">Nina Voelker</h1>
        <p></p>
      </div>
    </div>
    <div class="hating">
      <h2>they see me coding they hatin' ...</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeMobile",
  components: {}
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");

#homeMobile {
  width: 100vw;
  height: 100%;
  background-color: $smokey-black;
  display: flex;
  justify-content: center;
  align-items: center;

  .underconstruction {
    position: absolute;
    top: 16px;
    font-size: 16px;
    width: 100%;
    padding: 16px 0px;
    background-color: rgba(221, 55, 55, 0.514);

    h2 {
      font-size: 16px;
    }
  }

  .hating {
    position: absolute;
    bottom: 16px;
    width: 100%;
    padding: 15px 0;
    background-color: rgba(221, 55, 55, 0.514);

    h2 {
      font-size: 16px;
    }
  }

  .border {
    width: 70%;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 15px;
    background-color: orange;
    // background-size: 200% 200%;
    // background-position: 0 100%;
    background: linear-gradient(
      60deg,
      aquamarine,
      lavender,
      hotpink,
      orange,
      yellow,
      lightgreen,
      lawngreen,
      turquoise
    );
    // animation: moveGradient 4s alternate infinite;

    .wrapper {
      background-color: $eerie-black;
      width: 90%;
      height: 90%;
      border-radius: 15px;
      padding: 24px;

      h1 {
        font-family: monoton;
        font-size: 32px;
      }

      p {
        font-size: 16px;
      }
    }
  }
}

// @keyframes moveGradient {
//   50% {
//     background-position: 100% 50%;
//   }
// }
</style>