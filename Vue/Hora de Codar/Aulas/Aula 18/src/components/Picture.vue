<template>
  <img :src="avatar" :alt="description" />
  <MudarImagem @mudar-imagem="trocarImagem" />
</template>

<script>
import MudarImagem from "./MudarImgPerfil.vue";
export default {
  name: "PictureUser",
  components: { MudarImagem },

  data() {
    return {
      avatar: "/user.png",
      description: "Alehandro Vidal",
    };
  },
  methods: {
    trocarImagem() {
      this.avatar = "/user2.png";
    },
  },
};
</script>
