<template>
  <h2>Essa é a descrição da pessoa: {{ nome }}</h2>
  <Form />
  <Info />
</template>

<script>
import Info from "./Info.vue";
import Form from "./Form.vue";

export default {
  name: "PessoaVue",
  data() {
    return {
      nome: "Alehandro",
    };
  },
  components: { Info, Form },
};
</script>
