<template>
  <div class="start-wrapper">
    <div class="window" id="level_1" v-on:mouseover="closeLevel2" >
      <div class="title-bar-wrapper">
        <div class="title-bar">
          <div class="title-bar-text">Windows98</div>
        </div>
      </div>
      <div class="window-body">
        <ul>
          <li v-on:click="openPictures">
            <img src="../assets/icons/windows_update.png" />Windows Update
          </li>
          <li>
            <img src="../assets/icons/programs.png" />Programs
          </li>
          <li v-on:click="openLevel2">
            <img src="../assets/icons/directory_favorites.png"  />Favorites
            <span>&#9654;</span>
          </li>
          <li>
            <img src="../assets/icons/directory_open.png" />Documents
          </li>
          <li>
            <img src="../assets/icons/gears.png" />Settings
          </li>
          <li>
            <img src="../assets/icons/search_file.png" />Find
          </li>
          <li>
            <img src="../assets/icons/help_book.png" />Help
          </li>
          <li id="run">
            <img src="../assets/icons/hourglass.png" />Run...
          </li>
          <li>
            <img src="../assets/icons/key.png" />Log of Hi...
          </li>
          <li>
            <img src="../assets/icons/shut_down.png" />Shut Down
          </li>
        </ul>
      </div>
    </div>
    <div class="window" id="level_2" ref="level_2">
      <div class="window-body">
        <ul>
          <li v-on:click="openPictures"> <img src="../assets/icons/directory_open.png" />Photos</li>
          <li> <img src="../assets/icons/search_file.png" />Windows Explorer</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { openPictures } from "../components/Windows98.vue";

export default {
  name: "Start98",

  methods: {
    openLevel2: function(event) {
      if (event) {
        let el = this.$refs["level_2"];
        el.style.setProperty("display", "block");
      }
    },

    closeLevel2: function(event) { 
      if (event) {
        let el = this.$refs["level_2"];
        el.style.setProperty("display", "none");
      }
    },
    openPictures: function(event) {
      if (event) {
      openPictures()
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

.start-wrapper {
  display: flex;

  #level_1 {
    width: 280px;
    height: auto;

    .title-bar-wrapper {
      position: absolute;
      left: 0;
      writing-mode: vertical-rl;
      transform: scaleX(-1) scaleY(-1);
      height: 98%;
      width: 14px;
      padding-right: 3px;

      .title-bar {
        width: 14px;
        background: linear-gradient(navy, #1084d0);

        .title-bar-text {
          margin: 0;
        }
      }
    }

    .window-body {
      text-align: start;
      margin: 0;

      ul {
        padding: 0;
        margin-left: 20px;

        li {
          height: 38px;
          list-style: none;
          display: flex;
          align-items: center;

          &:hover {
            background-color: navy;
            color: white;
          }

          img {
            height: 30px;
            width: 30px;
            margin-right: 10px;
            padding-left: 4px;
          }

          &:first-child {
            border-bottom: 1px solid grey;
          }

          span {
            position: absolute;
            right: 8px;
          }
        }

        #run {
          border-bottom: 1px solid grey;
        }
      }
    }
  }

  #level_2 {
    width: 280px;
    margin-top: 55px;
    height: 80px;
    display: none;
    z-index: 100;
    position: relative;
    left: -8px;

    .window-body {
      text-align: start;
      margin: 0;

      ul {
        padding: 0;
        margin-left: 0;

        li {
          height: 28px;
          list-style: none;
          display: flex;
          align-items: center;
          padding-left: 8px;

          &:hover {
            background-color: navy;
            color: white;
          }


            img{
                height: 28px;
                width: 28px;
                margin-right: 10px;
                padding: 1px;
            }
        }
      }
    }
  }
}
</style>