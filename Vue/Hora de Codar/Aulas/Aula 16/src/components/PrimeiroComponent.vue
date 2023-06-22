<template>
  <h1>Olá Vue</h1>
  <p>Meu nome é {{ nome }}</p>
  <MultiplosEventos />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
  <Reutilizacao />
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
import Reutilizacao from "./Reutilizacao.vue";
export default {
  components: { MultiplosEventos, Reutilizacao },
  name: "PrimeiroComponent",
  data() {
    return {
      nome: "Alehandro",
    };
  },
};
</script>
