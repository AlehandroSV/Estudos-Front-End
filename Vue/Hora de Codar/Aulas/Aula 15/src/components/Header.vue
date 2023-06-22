<template>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">Projeto</a></li>
    <li><a href="#">Contato</a></li>
  </ul>
</template>

<script>
export default {
  name: "HeaderItem",
};
</script>

<style scoped>
ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

li {
  margin-right: 0;
}

a:hover {
  color: crimson;
  transition: all 1000ms;
}

a {
  color: aquamarine;
}
</style>
