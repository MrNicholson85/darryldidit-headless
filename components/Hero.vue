<template>
  <div
    class="grid grid-cols-1 md:grid-cols-2 mx-6 gap-8 place-content-center my-14"
  >
    <div class="grid text-center md:text-left place-content-center">
      <h1 class="mb-3">{{ pages[4].acf.components[0].hero_title }}</h1>
      <p>{{ pages[4].acf.components[0].hero_content }}</p>
      <div
        class="border-[2px] mx-auto md:mx-0 hover:bg-[#ffffff91] border-white w-[200px] text-center mt-[25px] md:mt-[50px]"
        v-if="pages[4].acf.components[0].resume_download.url"
      >
        <a
          class="py-4 grid"
          :href="pages[4].acf.components[0].resume_download.url"
          target="_blank"
          download
          >Download Resume</a
        >
      </div>
    </div>
    <div
      class="hero_image"
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
