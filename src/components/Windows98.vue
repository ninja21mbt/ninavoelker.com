<template>
  <div id="body" ref="body" class="window">
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
  background-color: grey;
  color: black;
  height: 100%;
  width: 100%;
  h1 {
    font-size: 20px;
  }

  #window{
      visibility: hidden;
      width: 300px;
      position: relative;
      left: 50%;
      margin: 5px;
  }

  .okButton{
      border: 1px solid black;
  }

#buttons{
    display: flex;
    justify-content: flex-end;
}

}
</style>