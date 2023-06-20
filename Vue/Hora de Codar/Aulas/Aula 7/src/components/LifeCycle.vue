<template>
  <h1>Meu nome é: {{ nome }}</h1>
</template>

<script>
export default {
  name: "LifeCyCle",
  data() {
    return {
      nome: "ainda não sei",
    };
  },
  created() {
    setTimeout(() => {
      this.nome = "Alehandro";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.nome = "João";
    }, 3000);
  },
};
</script>
