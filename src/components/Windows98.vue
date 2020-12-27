<template>
  <div id="body" ref="body">
    <div class="closefield" v-on:click="closeStart"></div>
    <div class="startbutton" v-on:click="openStart"></div>
    <div id="start" ref="start">
      <Start98 />
    </div>
    <div id="pictures" ref="pictures">
      <Pictures98 />
    </div>
    <div id="directory" v-on:click="openPictures">
       <img src="../assets/icons/directory_open.png"  />Lieblingsbilder
      </div>

    <div class="window" id="hellowindow" ref="hellowindow">
      <div class="title-bar">
        <div class="title-bar-text">Welcome!</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize" ></button>
          <button aria-label="Maximize" ></button>
          <button aria-label="Close" v-on:click="closeTimeTravel"></button>
        </div>
      </div>
      <div class="window-body">
        <h1>Hello Stranger!</h1>
        <p>Congratulations! You succesfully used the power of the moon to travel back in time. <br>
           Alot of time has passed since a human came back here. It became a little rusty over time, but 
           some things still seem to work...
        </p>
        <button v-on:click="closeTimeTravel" class="okButton">Start</button>

      </div>
    </div>
    <router-link to="/" id="backbutton" title="back to the future">
      <img src="../assets/delorean.png" alt="back to the future" id="delorean" />
    </router-link>

    <div id="mobile">
      <h1>
        Sorry!
        <br />Your device is not able to travel in time.
      </h1>
      <router-link to="/" id="mobilebutton">back to space</router-link>
    </div>
  </div>
</template>

<script>
import Start98 from "../components/Start98.vue";
import Pictures98 from "../components/Pictures98.vue";
import { closeLevel2 } from "../components/Start98.vue";

export default {
  name: "Windows98",
  components: {
    Start98,
    Pictures98
  },
  methods: {
    openStart: function(event) {
      if (event) {
        let el = this.$refs["start"];
        el.style.setProperty("display", "block");
      }
    },

    closeStart: function(event) {
      if (event) {
        let el = this.$refs["start"];
        el.style.setProperty("display", "none");
        closeLevel2();
      }
    },

    openPictures: function(event) {
      if (event) {
        let el = this.$refs["pictures"];
        el.style.setProperty("display", "block");
      }
    },

    closePictures: function(event) {
      if (event) {
        let el = this.$refs["pictures"];
        el.style.setProperty("display", "none");
      }
    },

    closeTimeTravel: function(event) {
      if (event) {
        let el = this.$refs["hellowindow"];
        el.style.setProperty("visibility", "hidden");
        el.style.setProperty("z-index", "0");
      }
    },
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

#body {
  background-image: url("../assets/98background.png");
  background-size: 100% 100%;
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  cursor: none;
  cursor: url("../assets/98cursor.png"), pointer;

  .closefield {
    position: absolute;
    top: 0;
    width: 100%;
    bottom: 40px;
  }

  .startbutton {
    position: absolute;
    left: 0;
    bottom: 0;
    height: 30px;
    width: 60px;
  }

  #start {
    position: absolute;
    bottom: 18px;
    left: 0;
    display: none;
    z-index: 2;
  }

  #directory{
    z-index: 500;
  }

  #pictures {
    display: none;
    position: absolute;
    top: 10%;
    z-index: 600;
  }

  #hellowindow {
    width: 40%;
    height: 25%;
    margin-top: 15%;
    z-index: 10;
    h1 {
      font-size: 20px;
    }
  }

  #window {
    visibility: hidden;
    width: 300px;
    position: relative;
    left: 50%;
    margin: 5px;
    z-index: 100;
  }

  .okButton {
    border: 1px solid black;
  }

  #buttons {
    display: flex;
    justify-content: flex-end;
  }

  #backbutton {
    position: absolute;
    bottom: 150px;
    right: 200px;

    img {
      height: 100px;
    }
  }

  #mobile {
    visibility: hidden;
    position: absolute;
  }

  @media screen and (max-width: "680px") {
    #mobile {
      background-color: $eerie-black;
      z-index: 150;
      visibility: visible;
      left: 0px;
      top: 0px;
      right: 0px;
      bottom: 0px;
      h1 {
        color: $pumpkin;
        font-size: 35px;
      }
      a {
        text-decoration: none;
        color: $azureish-white;
        padding: 15px;
        font-size: 20px;
        border: 2px dotted $smashed-pumpkin;
        border-radius: 5px;
      }
    }

    .window {
      visibility: hidden;
    }
  }
}
</style>