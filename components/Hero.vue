<template>
  {{ pages[4] }}
  <div class="grid grid-cols-2 h-[400px] place-content-center">
    <div class="">
      <h1 class="mb-3">Hi, I'm Darry Nicholson</h1>
      <p>
        A Front-end Web Developer, with a passion for creating customn Wordpress
        themes who moonlights as a Vue/Nuxt Developer, with a secret idenity of
        a VR/AR Developer. <span>#getSOME!</span>
      </p>
    </div>
    <div>image</div>
  </div>
</template>

<script setup>
const { data: pages } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/pages"
);
</script>

<style lang="scss" scoped></style>
