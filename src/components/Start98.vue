<template>
  <div class="start-wrapper">
    <div class="window" id="level_1">
      <div class="title-bar-wrapper">
        <div class="title-bar">
          <div class="title-bar-text">Windows98</div>
        </div>
      </div>
      <div class="window-body">
        <ul>
          <li>
            <img src="../assets/windows_update.png" />Windows Update
          </li>
          <li>
            <img src="../assets/programs.png" />Programs
          </li>
          <li>
            <img src="../assets/directory_favorites.png" />Favorites
          </li>
          <li>
            <img src="../assets/directory_open.png" />Documents
          </li>
          <li>
            <img src="../assets/gears.png" />Settings
          </li>
          <li>
            <img src="../assets/search_file.png" />Find
          </li>
          <li>
            <img src="../assets/help_book.png" />Help
          </li>
          <li id="run">
            <img src="../assets/hourglass.png" />Run...
          </li>
          <li>
            <img src="../assets/key.png" />Log of Hi...
          </li>
          <li>
            <img src="../assets/shut_down.png" />Shut Down
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Start98",
  methods: {}
};
</script>

<style lang="scss" scoped>
@import "./sass/_variables";
@import "./sass/_mixins";
@import url("https://unpkg.com/98.css");

.start-wrapper {
  #level_1 {
    width: 280px;
    height: auto;
  }


  .title-bar-wrapper {
    position: absolute;
    left: 0;
    writing-mode: vertical-rl;
    transform: scaleX(-1) scaleY(-1);
    height: 98%;
    width: 14px;
    padding-right: 3px;

    .title-bar{
        width: 14px;
        background: linear-gradient(navy,#1084d0);

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
          background-color: darkblue;
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
      }

      #run{
          border-bottom: 1px solid grey;
      }
    }
  }
}
</style>