<template>
  <div id="body">
    <router-link to="/" >{{ message[Math.floor(Math.random() * message.length)] }}</router-link>
  </div>
</template>
<script>
export default {
  name: "Flickeringfont",
  data: function() {
    return {
      message: [
        "Almost before we knew it, we had left the ground",
        "All their equipment and instruments are alive.",
        "Silver mist suffused the deck of the ship.",
        "Then came the night of the first falling star.",
        "I watched the storm, so beautiful yet terrific.",
        "It was going to be a lonely trip back."
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap");

#body {
  background-color: black;
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: flex-start;

  a {
    color: white;
    text-decoration: none;
    margin: 1em;
    text-shadow: 0.1rem 0 0.1rem #00bfff, -0.125rem 0 0.1rem #f97509;
    font-family: "Love Ya Like A Sister", cursive;
    font-size: 6em;
    animation-duration: 0.1s;
    animation-name: textflicker;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  @keyframes textflicker {
    from {
      text-shadow: 2px 0 0 #00bfff, -3px 0 0 #f97509;
    }
    to {
      text-shadow: 2.5px 0.5px 2px #00bfff, -1px -0.5px 2.5px #f97509;
    }
  }
}
</style>