<template>
  <div id="app">
    <div id="button">
      <CentralButton />
    </div>

    <img id="spaceship" src="../assets/spaceship.png" v-on:mousedown="fly" v-on:mouseup="stop" />
    <div id="laser" ref="laser"></div>
    <div id="laser2" ref="laser2"></div>

    <router-link to="/98">
      <img id="moon" src="../assets/moon.png" />
    </router-link>

    <img id="meteor" src="../assets/meteor.png" />
  </div>
</template>

<script>
import CentralButton from "../components/CentralButton.vue";

export default {
  name: "Home",
  components: {
    CentralButton
  },
  methods: {
    fly: function(event) {
      if (event) {
        let el = this.$refs["laser"];
        let el2 = this.$refs["laser2"];
        el.style.setProperty("visibility", "visible");
        el2.style.setProperty("visibility", "visible");
      }
    },

    stop: function(event) {
      if (event) {
        let el3 = this.$refs["laser"];
        let el4 = this.$refs["laser2"];
        el3.style.setProperty("visibility", "hidden");
        el4.style.setProperty("visibility", "hidden");
      }
    }
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

// --------------------- spaceship spaceship spaceship ----------------------------
#spaceship {
  z-index: 50;
  height: 400px;
  position: relative;
  right: -390px;
  bottom: -190px;
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
    height: 200px;
    right: -130px;
    bottom: -230px;
    animation-name: mobilespaceship;
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

#laser {
  z-index: 100;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  position: relative;
  bottom: -300px;
  background-color: red;
  box-shadow: 0 0 16px 13px darkred, 0 0 25px 16px white, 0 0 15px 19px red;
  visibility: hidden;
  animation-name: laser;
  animation-duration: 0.01s;
  animation-iteration-count: infinite;
}

@keyframes laser {
  0% {
    bottom: -300px;
  }

  50% {
    left: -40px;
    bottom: -420px;
  }

  100% {
    left: -400px;
    bottom: -800px;
  }
}

#laser2 {
  z-index: 100;
  height: 5px;
  width: 5px;
  border-radius: 50%;
  position: relative;
  bottom: -280px;
  left: -100px;
  visibility: hidden;

  background-color: red;
  box-shadow: 0 0 16px 13px darkred, 0 0 25px 16px white, 0 0 15px 19px red;

  animation-name: laser2;
  animation-duration: 0.001s;
  animation-iteration-count: infinite;
}

@keyframes laser2 {
  0% {
    left: -100px;
    bottom: -280px;
  }

  50% {
    left: -600px;
    bottom: -350px;
  }

  100% {
    left: -1500px;
    bottom: -550px;
  }
}

// --------------------- moon moon moon ----------------------------

#moon {
  z-index: 20;
  position: absolute;
  top: 70px;
  left: 5px;
  height: 300px;
  transition-property: all;
  animation-name: wobble;
  animation-duration: 1s;
  animation-iteration-count: 2;
  transition-duration: 1s;

  &:hover {
    // filter: invert(100);
    filter: brightness(150%);
    animation-name: wobble;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    cursor: none;
    cursor: url("../assets/realactivecursor.png"), pointer;
  }

  &:active {
    animation-name: active;
    animation-iteration-count: 1;
    animation-duration: 0.5s;
    cursor: none;
    cursor: url("../assets/realactivecursor.png"), pointer;
  }
}

@media screen and (max-width: "680px") {
  #moon {
    height: 200px;
    left: 50px;
    top: 50px;

    &:hover {
      animation-name: mobilewobble;
      animation-duration: 1s;
      animation-iteration-count: infinite;
    }

    &:active {
      animation: none;
    }
  }
}

@keyframes wobble {
  0% {
    height: 300px;
  }

  25% {
    height: 310px;
  }

  50% {
    height: 330px;
  }

  100% {
    height: 300px;
  }
}

@keyframes mobilewobble {
  0% {
    height: 200px;
  }

  25% {
    height: 210px;
  }

  50% {
    height: 220px;
  }

  100% {
    height: 200px;
  }
}

@keyframes active {
  0% {
    height: 300px;
  }

  100% {
    height: 380px;
  }
}


/*-------------------meteor----------------------*/

#meteor {
  position: absolute;
  top: -60px;
  width: 400px;
  height: 200px;
  right: 200px;

  &:hover {
    cursor: none;
    cursor: url("../assets/realactivecursor.png"), pointer;
  }
}
</style>