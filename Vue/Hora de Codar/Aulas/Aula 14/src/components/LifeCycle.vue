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
    this.lifeCycle();
    setTimeout(() => {
      this.nome = "Alehandro";
    }, 2000);
  },
  mounted() {
    setTimeout(() => {
      this.nome = "João";
    }, 3000);
  },
  methods: {
    lifeCycle() {
      console.log("Executou");
    },
  },
};
</script>
