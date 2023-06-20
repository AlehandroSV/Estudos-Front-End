<template>
  <h1>{{ nome }}</h1>
  <PrimeiroComponent />
  <LifeCycle />
</template>

<script>
import PrimeiroComponent from "./components/PrimeiroComponent.vue";
import LifeCycle from "./components/LifeCycle.vue";

export default {
  name: "App",
  components: { PrimeiroComponent, LifeCycle },
  data() {
    return {
      nome: "Essa é minha APP",
    };
  },
};
</script>
