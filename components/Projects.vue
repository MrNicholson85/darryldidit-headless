<template>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mx-6 lg:mx-auto">
    <div v-for="project in projects">
      <NuxtLink :to="project.slug">
        <div>
          <div>
            <div
              class="project_card bg-[#5c3d99] h-[450px] relative grid place-content-center w-full gap-7 bg-top bg-cover"
              :style="{
                backgroundImage:
                  'url(' +
                  project.acf.project.project_media.project_images[0]
                    .project_image.sizes.large +
                  ')',
              }"
            >
              <div
                class="project_item absolute place-content-center h-full w-full bg-[#000000a4]"
              >
                <h3>{{ project.title.rendered }}</h3>
                <div
                  class="text-center py-4 w-32 mx-auto"
                  :style="{
                    backgroundColor: `${project.acf.project.project_media.project_color}`,
                  }"
                >
                  View View
                </div>
              </div>
            </div>
          </div>
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

<style scoped>
.project_card .project_item {
  display: none;
  transition: ease-in-out all 0.1s;
}

.project_card:hover .project_item {
  display: grid;
}
</style>
