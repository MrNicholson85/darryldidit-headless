<template>
  <h1 class="text-center pb-20">What I've Done!</h1>
  <div class="grid grid-cols-1 md:grid-cols-2 gap-7 mx-6 lg:mx-auto">
    <div v-for="project in projects">
      <NuxtLink :to="project.slug">
        <div>
          <div class="">
            <div v-for="feat_image in project._embedded">
              <div
                v-if="feat_image[0].source_url"
                class="project_card bg-[#5c3d99] h-[260px] lg:h-[450px] relative grid place-content-center w-full gap-7 bg-cover bg-top rounded-lg mb-8"
                :style="{
                  backgroundImage: 'url(' + feat_image[0].source_url + ')',
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
        </div>
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const { data: projects } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/project?_embed"
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
