<template>
  <div class="spaceship">
    <img id="spaceship" src="../assets/spaceship.png" v-on:mousedown="fly" v-on:mouseup="stop" />
    <div id="laser1" ref="laser1"></div>
    <div id="laser2" ref="laser2"></div>
  </div>
</template>

<script>
export default {
  name: "Spaceship",

  methods: {
    fly: function(event) {
      if (event) {
        let el = this.$refs["laser1"];
        let el2 = this.$refs["laser2"];
        el.style.setProperty("display", "block");
        el2.style.setProperty("display", "block");
      }
    },

    stop: function(event) {
      if (event) {
        let el3 = this.$refs["laser1"];
        let el4 = this.$refs["laser2"];
        el3.style.setProperty("display", "none");
        el4.style.setProperty("display", "none");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";

.spaceship {
  width: 100%;
  height: 100%;

  #spaceship {
    width: 370px;
    z-index: 100;
    position: absolute;
    right: 0px;
    top: 0;
    animation-name: animatespaceship;
    animation-duration: 0.2s;
    animation-iteration-count: 2;

    &:hover {
      animation-name: animatespaceship;
      animation-duration: 0.2s;
      animation-iteration-count: infinite;
      cursor: none;
      cursor: url("../assets/realactivecursor.png"), pointer;
    }
  }

  @media screen and (max-width: "680px") {
    #spaceship {
      display: none;
    }
  }

  @keyframes animatespaceship {
    0% {
      right: 0px;
      top: 0px;
    }

    25% {
      right: -5px;
      top: -5px;
    }

    75% {
      right: 0px;
      top: -5px;
    }

    100% {
      right: -5px;
      top: -5px;
    }
  }

  #laser1 {
    z-index: 100;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    right: 265px;
    background-color: red;
    box-shadow: 0 0 16px 13px darkred, 0 0 25px 16px white, 0 0 15px 19px red;
    display: none;
    animation-name: laser1;
    animation-duration: 0.3s;
    animation-iteration-count: infinite;
  }

  @keyframes laser1 {
    0% {
      top: 200px;
      right: 265px;
      height: 2px;
      width: 2px;
      box-shadow: 0 0 8px 6px darkred, 0 0 13px 8px white, 0 0 7px 5px red;
    }

    15% {
      top: 230px;
      right: 300px;
    }

    50% {
      top: 327px;
      right: 400px;
    }

    75% {
      top: 427px;
      right: 550px;
    }

    100% {
      top: 527px;
      right: 700px;
    }
  }

  #laser2 {
    z-index: 100;
    height: 5px;
    width: 5px;
    border-radius: 50%;
    position: absolute;
    top: 200px;
    right: 200px;
    display: none;
    background-color: red;
    box-shadow: 0 0 16px 13px darkred, 0 0 25px 16px white, 0 0 15px 19px red;

    animation-name: laser2;
    animation-duration: 0.3s;
    animation-iteration-count: infinite;
  }

  @keyframes laser2 {
    0% {
      top: 200px;
      right: 200px;
      height: 2px;
      width: 2px;
      box-shadow: 0 0 8px 6px darkred, 0 0 13px 8px white, 0 0 7px 5px red;
    }

    15% {
      top: 230px;
      right: 215px;
    }

    50% {
      top: 327px;
      right: 300px;
    }

    75% {
      top: 427px;
      right: 400px;
    }

    100% {
      top: 527px;
      right: 570px;
    }
  }
}
</style>
