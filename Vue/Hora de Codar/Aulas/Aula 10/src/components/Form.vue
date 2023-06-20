<template>
  <h2>Meu formulário</h2>
  <form action="">
    <div><InputText /></div>
    <div><InputText /></div>

    <InputSubmit />
  </form>
</template>

<script>
import InputText from "./form/InputText.vue";
import InputSubmit from "./form/Submit.vue";

export default {
  name: "FormVue",
  components: { InputText, InputSubmit },
};
</script>
