<template>
  <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
  <p v-else>Estou em busca de novas oportunidades.</p>
  <p>Utilizando as seguintes tecnologias.</p>
  <ul>
    <li>JavaScript</li>
    <li>TypeScript</li>
    <li>C#</li>
    <li>Nest</li>
    <li>Next</li>
  </ul>
  <p v-show="mostrar_email">Mande uma mensagem para o e-mail {{ email }}</p>
  <p>
    Para acessar meu portifólio basta
    <a v-bind:href="meu_link" target="_blank">clicar aqui</a>
  </p>
  <Picture />
</template>

<script>
import Picture from "./Picture.vue";

export default {
  name: "InfoPessoa",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      email: "alehandrosv.contato@gmail.com",
      meu_link: "https://google.com",
    };
  },
  components: { Picture },
};
</script>
