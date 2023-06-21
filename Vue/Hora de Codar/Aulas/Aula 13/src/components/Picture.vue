<template>
  <img :src="avatar" :alt="description" />
</template>

<script>
export default {
  name: "PictureUser",
  data() {
    return {
      avatar: "/user.png",
      description: "Alehandro Vidal",
    };
  },
};
</script>
