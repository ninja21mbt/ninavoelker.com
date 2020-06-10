<template>
  <div id="body" ref="body">
  <div class="window" id="hellowindow">
    <div class="title-bar">
      <div class="title-bar-text">This is a Time Travel</div>
      <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
        <button aria-label="Close" v-on:click="closeTimeTravel"></button>
      </div>
    </div>
    <div class="window-body">
    <h1>Hello Stranger!</h1>
    <p>
      Congratulations! You succesfully used the power of the moon to travel back in time. <br>
      But do you have what it takes to go back to the future?
    </p>
    <button v-on:click="openWindow" class="okButton">Start</button>

    
    <div id="window" class="window" ref="window">
      <div class="title-bar">
        <div class="title-bar-text">Shutdown Windows</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize" v-on:click="maximize"></button>
          <button aria-label="Close" v-on:click="closeWindow"></button>
        </div>
      </div>
      <div class="window-body">
        <p>What do you want the computer to do?</p>

        <div class="field-row">
      <input id="radio5" type="radio" name="first-example" />
      <label for="radio5">explode</label>
    </div>
    <div class="field-row">
      <input id="radio6" type="radio" name="first-example" />
      <label for="radio6">go to space</label>
    </div>
    <div class="field-row" id="buttons">
    <button v-on:click="scared" class="okButton" >Ok</button>
    <button v-on:click="closeWindow">Cancel</button>
      </div>
      </div>
    </div>
    </div>
  </div>
    <router-link to="/" id="backbutton">
    <img src="../assets/delorean.png" alt="back to the future" id="delorean">
    </router-link>

    <div id="mobile">
      <h1>Sorry! Your device is not able to travel in time.</h1>
      <router-link to="/" id="mobilebutton">back to space</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Windows98",
  methods: {
      openWindow: function(event) {
          if (event) {
              let el = this.$refs['window'];
              el.style.setProperty("visibility", "visible");      
          }
      },

      closeWindow: function(event) {
          if (event) {
              let el = this.$refs['window'];
              el.style.setProperty("visibility", "hidden");
              el.style.setProperty("height", "unset");
              el.style.setProperty("width", "300px");
              el.style.setProperty("left", "50%")      
          }
      },

      closeTimeTravel: function(event) {
          if (event) {
              let el = this.$refs['body'];
              el.style.setProperty("visibility", "hidden");
              el.style.setProperty('z-index', '0');    
          }
      },

      maximize: function(event) {
          if(event) {
              let el = this.$refs['window'];
              el.style.setProperty("height", "98%");
              el.style.setProperty("width", "98%");
              el.style.setProperty("left", "0px");
              el.style.setProperty("postition", "relative");
              el.style.setProperty("z-index","150");
          }
      } ,

      scared: function(event) {
          if (event) {
              alert("Sorry! The Computer is too scared. Try a different one.")
          }
      }
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

#body {
  background-image: url('../assets/98background.png');
  background-size: 100% 100%;
  //background-attachment: fixed;
  color: black;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;

  #hellowindow{
    width: 50%;
    height: 30%;
    margin-top: 15%;
    h1 {
    font-size: 20px;
  }
  }

  #window{
      visibility: hidden;
      width: 300px;
      position: relative;
      left: 50%;
      margin: 5px;
      z-index: 100;
  }

  .okButton{
      border: 1px solid black;
  }

#buttons{
    display: flex;
    justify-content: flex-end;
}

#backbutton{
  position: absolute;
  bottom: 150px;
  right: 200px;

  img {
    height: 100px;
  }
}

#mobile{
  visibility: hidden;
}

@media screen and (max-width:"680px") {
  #mobile{
    background-color: black;
    z-index: 150;
    visibility: visible;
    position: absolute;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
      h1{
        color: rgb(248, 148, 17);
      }
  }

  .window{
    visibility: hidden;
  }
}

}
</style>