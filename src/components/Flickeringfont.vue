<template>
  <div id="body">
    <router-link to="/">Almost before we knew it, we had left the ground.</router-link>

  </div>
</template>

<script>
export default {
  name: "Flickeringfont",
  props: {}
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://fonts.googleapis.com/css2?family=Love+Ya+Like+A+Sister&display=swap");


#body{
    background-color: black;
    height: 100vh;
    width: 100vw;
    display: flex;
    align-items: flex-start;

    a{
        color: white;
        text-decoration: none;
        margin: 1em;
        text-shadow: 0.06rem 0 0.06rem #00bfff, -0.125rem 0 0.06rem #f97509;
        font-family: 'Love Ya Like A Sister', cursive;
        font-size: 6em;
        animation-duration: 0.01s;
        animation-name: textflicker;
        animation-iteration-count: infinite;
        animation-direction: alternate;
    }

    @keyframes textflicker {
  from {
    text-shadow: 1px 0 0 #00bfff, -2px 0 0 #f97509;
  }
  to {
    text-shadow: 2px 0.5px 2px #00bfff, -1px -0.5px 2px #f97509;
  }
}
}

</style>