<template>
  <h1>Olá Vue</h1>
  <p>Meu nome é {{ nome }}</p>
  <MultiplosEventos />
</template>

<script>
import MultiplosEventos from "./MultiplosEventos.vue";
export default {
  components: { MultiplosEventos },
  name: "PrimeiroComponent",
  data() {
    return {
      nome: "Alehandro",
    };
  },
};
</script>
