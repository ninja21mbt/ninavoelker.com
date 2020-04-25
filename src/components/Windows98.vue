<template>
  <div id="body">
    <div class="title-bar">
      <div class="title-bar-text">This is a Time Travel</div>
      <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
        <button aria-label="Close" v-on:click="closeTimeTravel"></button>
      </div>
    </div>
    <h1>Hello World!</h1>
    <button v-on:click="openWindow">Start</button>

    
    <div id="window" class="window" ref="window">
      <div class="title-bar">
        <div class="title-bar-text">Shutdown Windows</div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
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
  }

}
</style>