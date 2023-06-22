<template>
  <h2>Meu formulário</h2>
  <form action="" @submit="enviarFormulario($event)">
    <input type="text" v-model="name" />
    <input type="text" v-model="email" />

    <InputSubmit />
  </form>
</template>

<script>
import InputSubmit from "./form/Submit.vue";

export default {
  name: "FormVue",
  components: { InputSubmit },
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    enviarFormulario(e) {
      e.preventDefault();

      const name = this.name;
      const email = this.email;

      console.log("Formulário Enviado");
      console.log(name);
      console.log(email);
    },
  },
};
</script>
