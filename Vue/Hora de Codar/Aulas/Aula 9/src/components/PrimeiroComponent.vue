<template>
  <h1>Olá Vue</h1>
  <p>Meu nome é {{ nome }}</p>
</template>

<script>
export default {
  name: "PrimeiroComponent",
  data() {
    return {
      nome: "Alehandro",
    };
  },
};
</script>
