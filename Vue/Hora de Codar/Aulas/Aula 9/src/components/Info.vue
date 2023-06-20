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
</template>

<script>
export default {
  name: "InfoPessoa",
  data() {
    return {
      esta_trabalhando: false,
      mostrar_email: true,
      email: "alehandrosv.contato@gmail.com",
    };
  },
};
</script>
