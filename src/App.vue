<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import axios from "axios";
import { mapState } from "vuex";
import { async } from "q";

export default {
  name: "app",
  components: {
    Navbar
  }
};
</script>

<style>
html,
body,
main {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  background: #2f3542;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #42b983;
  margin-top: 0px;
  font-size: 12px;
}
.showError {
  width: 400px;
  background: #2f3542;
  font-size: 48px;
  display: flex;
  margin: 0 auto;
}

@media only screen and (max-width: 500px) {
  .showError {
    font-size: 28px;
    padding-left: 60px;
  }
}
</style>
