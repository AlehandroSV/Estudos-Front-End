<template>
  <HeaderVue :esta_logado="true" />
  <h1>{{ nome }}</h1>
  <PrimeiroComponent />
  <LifeCycle />
  <PessoaVue />
</template>

<script>
import PrimeiroComponent from "./components/PrimeiroComponent.vue";
import LifeCycle from "./components/LifeCycle.vue";
import PessoaVue from "./components/Pessoa.vue";
import HeaderVue from "./components/Header.vue";

export default {
  name: "App",
  components: { PrimeiroComponent, LifeCycle, PessoaVue, HeaderVue },
  data() {
    return {
      nome: "Essa é minha APP",
    };
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  color: #fff;
}

body {
  background: #2d2d2d;
}

a {
  color: aqua;
}

input {
  color: #000;
}

button {
  background: #2d2d2d;
  border: 1px solid #fff;
  padding: 0.5rem;
  border-radius: 5px;
}
</style>
