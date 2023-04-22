<template>
  <div class="grid grid-cols-2 gap-7">
    <div v-for="project in projects">
      <NuxtLink :to="project.slug">
        <div>
          <div>
            <div
              class="bg-[#5c3d99] h-[450px] w-full gap-7 bg-top bg-cover"
              :style="{
                backgroundImage:
                  'url(' +
                  project.acf.project.project_media.project_images[0]
                    .project_image.sizes.large +
                  ')',
              }"
            ></div>
          </div>
          <h3>{{ project.title.rendered }}</h3>
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: projects } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/project"
);

//console.log(projects);
</script>

<style scoped></style>
