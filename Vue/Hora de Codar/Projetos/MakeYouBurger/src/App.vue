<template>
  <NavBar :logo="logo_src" :alt="app_name" />
  <router-view />
  <Footer />
</template>

<style>
* {
  font-family: Arial, Helvetica, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
  height: 100vh;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222;
}
</style>

<script>
import NavBar from "./components/NavBar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { NavBar, Footer },
  data() {
    return {
      logo_src: "/img/logo.png",
      app_name: "Make Your Burguer",
    };
  },
};
</script>
