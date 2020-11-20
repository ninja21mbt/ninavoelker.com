<template>
  <div class="pictures-wrapper">
    <div class="window" id="directory">
      <div class="title-bar">
        <div class="title-bar-text">Photos</div>
        <div class="title-bar-controls">
          <button aria-label="Close" v-on:click="closePictures"></button>
        </div>
      </div>
      <div class="window-body">
        <div class="content-field">
          <ul>
            <li>
              <img src="../assets/icons/directory_open.png" v-on:click="openPhoto" />Lieblingsbilder
            </li>
          </ul>
        </div>
      </div>
      <div class="photo-viewer" ref="photo">
        <PhotoViewer98 />
      </div>
    </div>
  </div>
</template>

<script>
import PhotoViewer98 from "../components/PhotoViewer98.vue";
import { closePictures } from "../components/Windows98.vue";


export default {
  name: "Pictures98",
  components: {
    PhotoViewer98
  },
  methods: {
    openPhoto: function(event) {
      if (event) {
        let el = this.$refs["photo"];
        el.style.setProperty("display", "block");
      }
    },

    closePhoto: function() {
        let el = this.$refs["photo"];
        el.style.setProperty("display", "none"); 
    },

    closePictures: function(event) {
      if (event) {
        closePictures();
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

.pictures-wrapper {
  #directory {
    .content-field {
      display: block;
      background: #fff;
      box-shadow: inset -1px -1px #fff, inset 1px 1px grey,
        inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
      padding: 6px;
      margin: 0;
      width: 400px;
      height: 400px;

      ul {
        list-style: none;
        text-align: left;

        li {
          display: flex;
          flex-direction: column;

          img {
            width: 60px;
            height: 60px;
            margin-bottom: 8px;
          }
        }
      }
    }

    .photo-viewer {
      display: none;
    }
  }
}
</style>