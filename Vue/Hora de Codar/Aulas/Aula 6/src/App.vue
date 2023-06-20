<template>
  <h1>Olá Mundo</h1>
  <PrimeiroComponent />
  {{ teste }}
</template>

<script>
import PrimeiroComponent from "./components/PrimeiroComponent.vue";

export default {
  name: "App",
  components: { PrimeiroComponent },
  data() {
    return {
      teste: "Testes",
    };
  },
};
</script>
