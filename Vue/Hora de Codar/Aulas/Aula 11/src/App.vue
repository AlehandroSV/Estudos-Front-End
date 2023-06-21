<template>
  <h1>{{ nome }}</h1>
  <PrimeiroComponent />
  <LifeCycle />
  <PessoaVue />
</template>

<script>
import PrimeiroComponent from "./components/PrimeiroComponent.vue";
import LifeCycle from "./components/LifeCycle.vue";
import PessoaVue from "./components/Pessoa.vue";

export default {
  name: "App",
  components: { PrimeiroComponent, LifeCycle, PessoaVue },
  data() {
    return {
      nome: "Essa é minha APP",
    };
  },
};
</script>
