<template>
  <div class="photo-viewer-wrapper">
    <div class="window" id="photo-viewer">
      <div class="title-bar">
        <div class="title-bar-text">
          <img
            class="title-bar-icon"
            src="../assets/icons/images.png"
          />Unbenannt - imaging
        </div>
        <div class="title-bar-controls">
          <button aria-label="Close" v-on:click="closePhoto"></button>
        </div>
      </div>
      <div class="top-options">
        <ul>
          <li>Datei</li>
          <li>Bearbeiten</li>
          <li>Ansicht</li>
          <li>Seite</li>
          <li>Zoom</li>
          <li>Extras</li>
          <li>Anmerkung</li>
          <li>?</li>
        </ul>
      </div>
      <div class="icon-row_1-wrapper">
        <div class="icon-row_1">
          <div class="icon-row_1-group-1">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_1-group-2">
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_1-group-3">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_1-group-4">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_1-group-5">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
        </div>
        <select>
          <option selected>66%</option>
          <option>30%</option>
          <option>100%</option>
        </select>
      </div>
      <div class="icon-row_2-wrapper">
        <div class="icon-row_2">
          <div class="icon-row_2-group-1">
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-2">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-3">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-4">
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-5">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-6">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
          <div class="icon-row_2-group-7">
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
            <img src="../assets/icons/directory_open.png" />
          </div>
        </div>
      </div>
      <div class="window-body">
        <div class="image-field">
          <img :src="images[0]" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { closePhoto } from "../components/Windows98.vue";

export default {
  name: "PhotoViewer98",

  data: function () {
    return {
      images: [
        "../assets/lieblingsbilder/moabit.jpeg",
        "../assets/lieblingsbilder/quattro.jpg",
      ],
    };
  },

  methods: {
    closePhoto: function (event) {
      if (event) {
        closePhoto();
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

.photo-viewer-wrapper {
  #photo-viewer {
    z-index: 5;
    position: absolute;
    top: 10%;

    .title-bar {
      .title-bar-icon {
        height: 12px;
        margin-right: 8px;
      }
    }

    .top-options {
      ul {
        list-style: none;
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        padding: 4px 9px;
        box-shadow: inset 0px -1px #fff, inset 0px -2px grey,
          inset 0px -2px #dfdfdf;
        margin: 0;

        li {
          margin-right: 8px;
        }
      }
    }

    .icon-row_1-wrapper,
    .icon-row_2-wrapper {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      padding: 4px 0px 4px 8px;
      box-shadow: inset 0px -1px #fff, inset 0px -2px grey,
        inset 0px -2px #dfdfdf;

      .icon-row_1,
      .icon-row_2 {
        text-align: start;
        display: flex;
        flex-wrap: nowrap;

        div {
          margin-right: 8px;
        }

        img {
          height: 16px;
          box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px #dfdfdf,
            inset -2px -2px grey, inset 2px 2px #fff;
          background: silver;
          padding: 3px;
        }
        select {
          position: relative;
          right: 0;
        }
      }
    }

    .image-field {
      display: block;
      background: lightgrey;
      box-shadow: inset -1px -1px #fff, inset 1px 1px grey,
        inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
      padding: 6px;
      margin: 0;
      width: 500px;
      height: 400px;

      img {
        max-height: 100%;
        max-width: 100%;
      }
    }
  }
}
</style>