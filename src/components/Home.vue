<template>
  <div id="app">
    <div id="button">
      <CentralButton />
    </div>
    <div id="Windows98" ref="Windows98">
    <Windows98 />
    </div>
    <img id="spaceship" src="../assets/spaceship.png" v-on:mousedown="fly" v-on:mouseup="stop" />
    <div id="laser" ref="laser"></div>
    <div id="laser2" ref="laser2"></div>
    
    <img id="moon" src="../assets/moon.png" v-on:click="openTimeTravel"/>
  </div>
</template>

<script>
import CentralButton from "../components/CentralButton.vue";
import Windows98 from "../components/Windows98.vue";


export default {
  name: "Home",
   components: {
      CentralButton,
      Windows98
    },
  methods: {
    fly: function(event) {
      if (event) {
        let el = this.$refs['laser'];
        let el2 = this.$refs['laser2'];
        el.style.setProperty("visibility", "visible");
        el2.style.setProperty("visibility", "visible");
      }},

    stop: function(event) {
      if (event) {
        let el3 = this.$refs['laser'];
        let el4 = this.$refs['laser2'];
        el3.style.setProperty("visibility", "hidden");
        el4.style.setProperty("visibility", "hidden");
      }
    },

    openTimeTravel: function(event) {
          if (event) {
              let el = this.$refs['Windows98'];
              el.style.setProperty("visibility", "visible");      
          }
      },

      closeTimeTravel: function(event) {
          if (event) {
              let el = this.$refs['Windows98'];
              el.style.setProperty("visibility", "hidden");      
          }
      }
  },
   
  }
;
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

#Windows98{
  position: absolute;
  z-index: 100;
  width: 80%;
  height: 80%;
  visibility: hidden;

}

#spaceship {
  z-index: 50;
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

#moon{
    z-index: 20;
    position: absolute;
    top: 70px;
    left: -80px;
    height: 450px;
    transition-property: all;

    &:hover{
        filter: invert(100);
        transition-duration: 0.5s;
        cursor: pointer;
    }
}
</style>