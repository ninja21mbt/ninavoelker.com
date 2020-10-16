<template>
  <div>
    <div class="button">
      <button class="button__main">
        <p class="text">{{ message[0] }}</p>
        <div class="backandforth">
        <button class="back" v-on:click="message[0]">&lt;</button>
        <button class="next" v-on:click="nexttext">&gt;</button>
        </div>
      </button>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "CentralButton",
  data: function() {
    return {
      message: [
        "Welcome to space! This galaxy is a fun and exciting place. Feel free to take a look around...",
        "Beware! Space is a magical place. Things can change around here without notice. You may want to visit them again after some time to experience them as a whole...",
        "This galaxy was formed not so long ago. It is in a state of constant evolution"
      ],
    };
  },

 // methods: {

  //   nexttext: function(event) {
  //     if(event) {
  //       console.log();
  //     }
  //   }
  // }
}
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";

@import url("https://fonts.googleapis.com/css?family=Monoton&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Inconsolata:wght@300&display=swap");

.button {

  &:hover {
    text-shadow: 2px 2px 5px $eerie-black;
    cursor: none;
    cursor: url("../assets/maincursor.png"), pointer;
  }

  .button__main {
    @include button;
    @include button-shadow;
    margin: 40px;
    border: 3px dotted $azureish-white;
    font-family: "Monoton", cursive;
    color: $azureish-white;
    text-shadow: 2px 2px 5px $azureish-white;
    text-decoration: none;
    display: flex;
    flex-direction: column;
    justify-content: center;

    .text {
      font-family: 'Inconsolata', monospace;
      overflow: hidden;
      font-size: 1.5em;
      margin: 0 auto;
      animation: letteranimation 4.5s steps(70, end);
    }

    @keyframes letteranimation {
      from { width: 0 }
      to { width: 100% }
    }

    &:hover {
      background-image: linear-gradient(50deg, blue, pink);
      background-origin: border-box;
      transition-duration: 0.5s;
      cursor: none;
      cursor: url("../assets/maincursor.png"), pointer;
    }

  .backandforth{     
      position: absolute;
      bottom: 70px;
      left: 50%;
      transform: translate(-50%, -50%);
           
    .next, .back{
      color: $azureish-white;
      padding: 20px;
      box-shadow: none;
      font-family: 'Inconsolata', monospace;
      font-size: 2em;
      background-color: transparent;
      &:hover{
        cursor: none;
        cursor: url("../assets/realactivecursor.png"), pointer;
      }
      }

      @media screen and (max-width: "680px") {
        .next, .back{
        border: none;
        }
      }
    }
  
  }
  @media screen and (max-width: "680px") {
    button {
      @include mobilebutton;
      font-size: 2em;
      border: 2px dotted $azureish-white;
    }
  }
}
</style>
