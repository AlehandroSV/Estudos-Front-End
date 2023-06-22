<template>
  <button @click="$emit('mudarImagem')">Mudar Imagem de Perfil</button>
</template>

<script>
export default {
  name: "MudarImagemPerfil",
  emits: ["mudarImagem"],
};
</script>
