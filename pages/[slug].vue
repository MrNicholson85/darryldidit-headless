<template>
  <div class="container">
    <div v-for="project in projects" class="mx-6">
      <div
        v-if="project.slug == slug"
        class="grid gap-y-10 md:flex justify-between gap-x-6"
      >
        <div class="grid gap-y-[30px]">
          <div
            v-for="image in project.acf.project.project_media.project_images"
            class="bg-[#5c3d99] project_bg rounded-lg overflow-hidden"
            :style="{
              backgroundColor: `${project.acf.project.project_media.project_color}`,
            }"
          >
            <img class="w-full" :src="image.project_image.sizes.large" />
          </div>
        </div>

        <div class="w-[300px]">
          <h3>{{ project.title.rendered }}</h3>
          <div>
            {{ project.acf.project.project_content.project_description }}
          </div>
          <div class="flex gap-5 mt-10">
            <div
              class="border-[#38a3a5] border-b-[2px] pb-[5px] font-semibold"
              v-for="skill in project.acf.project.project_content.project_items"
              :style="{
                borderColor: `${project.acf.project.project_media.project_color}`,
              }"
            >
              {{ skill.skills_used }}
            </div>
          </div>
          <div v-if="project.acf.project.project_content.project_cta.url">
            <a
              class="mt-10 grid w-full text-center h-[50px] bg-[#38a3a5] place-content-center text-base hover:bg-[#2b7d7f] uppercase font-bold"
              :style="{
                backgroundColor: `${project.acf.project.project_media.project_color}`,
              }"
              :href="project.acf.project.project_content.project_cta.url"
              target="_blank"
              >{{ project.acf.project.project_content.project_cta.title }}</a
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { data: projects } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/project"
);

const title = projects;
</script>

<style scoped></style>
