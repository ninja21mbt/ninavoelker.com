<template>
  <div id="app">
    <div id="button">
      <CentralButton />
    </div>
    <div id="spaceship">
    <Spaceship />
    </div>
    <router-link to="/98">
      <img id="moon" src="../assets/moon.png" />
    </router-link>
    <router-link to="/wtf" >
    <img id="meteor" src="../assets/meteor.png" />
    </router-link>
  </div>
</template>

<script>
import CentralButton from "../components/CentralButton.vue";
import Spaceship from "../components/Spaceship.vue";

export default {
  name: "Home",
  components: {
    CentralButton,
    Spaceship
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
  background-image: url("../assets/space.jpg");
  background-blend-mode: color-dodge;
  color: $azureish-white;
  height: 100%;
  width: 100vw;
}

#button {
  position: absolute;
}

// --------------------- spaceship spaceship spaceship ----------------------------

#spaceship{
  z-index: 100;
  position: absolute;
  right: 0px;
  bottom: 0px;
  height: 70vh;
  width: 50vw;
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
    display: none;
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

@media screen and (max-width: "680px") {
  #meteor{
    display: none;
  }
}
</style>