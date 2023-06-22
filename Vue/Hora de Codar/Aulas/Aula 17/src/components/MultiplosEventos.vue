<template>
  <div>
    <button
      @click="
        primeiro('Primeiro evento'), segundo('Segundo evento'), terceiro()
      "
    >
      Ativar múltiplos eventos
    </button>
    <p>{{ multiplos_eventos }}</p>
  </div>
</template>

<script>
export default {
  name: "MultiplosEventos",
  data() {
    return {
      multiplos_eventos: "",
    };
  },
  methods: {
    primeiro(text) {
      this.multiplos_eventos = text;
    },
    segundo(text) {
      setTimeout(() => {
        this.multiplos_eventos = text;
      }, 1000);
    },
    terceiro() {
      setTimeout(() => {
        this.multiplos_eventos = "";
      }, 2000);
    },
  },
};
</script>
