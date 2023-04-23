<template>
  <div class="grid grid-cols-2 gap-8 place-content-center my-14">
    <div class="grid place-content-center">
      <h1 class="mb-3">{{ pages[4].acf.components[0].hero_title }}</h1>
      <p>{{ pages[4].acf.components[0].hero_content }}</p>
    </div>
    <div
      class="grayscale h-[650px] w-full bg-center bg-cover rounded-lg"
      :style="{
        backgroundImage: 'url(' + pages[4].acf.components[0].hero_image + ')',
      }"
    ></div>
  </div>
</template>

<script setup>
const { data: pages } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/pages"
);
</script>

<style lang="scss" scoped></style>
