<template>
  <p v-if="esta_trabalhando">Estou trabalhando no momento.</p>
  <p v-else>Estou em busca de novas oportunidades.</p>
  <p>Utilizando as seguintes tecnologias. (Front-End)</p>
  <ul>
    <li v-for="(tecnologias, index) in front_end" :key="index">
      {{ tecnologias }}
    </li>
  </ul>

  <p>Utilizando as seguintes tecnologias. (Back-End)</p>
  <ul>
    <li v-for="tecnologias in back_end" :key="tecnologias.id">
      {{ tecnologias.name }}
    </li>
  </ul>
  <div>
    <button @click="showEmail">{{ texto_button_email }}</button>
  </div>
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
      esta_trabalhando: this.estaTrabalhando,
      mostrar_email: false,
      meu_link: "https://google.com",
      texto_button_email: "Mostrar E-Mail",
      back_end: [
        { id: 1, name: "JavaScript" },
        { id: 2, name: "TypeScript" },
        { id: 3, name: "C#" },
        { id: 4, name: ".NET" },
        { id: 5, name: "Nest" },
      ],
      front_end: [
        "JavaScript",
        "TypeScript",
        "C#",
        "Next",
        "React",
        "React Native",
        "Vue",
        "Nuxt",
        "Etc...",
      ],
    };
  },
  components: { Picture },
  methods: {
    showEmail() {
      this.mostrar_email = !this.mostrar_email;

      if (!this.mostrar_email) {
        this.texto_button_email = "Mostrar E-Mail";
      } else {
        this.texto_button_email = "Esconder E-Mail";
      }
    },
  },
  props: {
    email: String,
    estaTrabalhando: Boolean,
  },
};
</script>
