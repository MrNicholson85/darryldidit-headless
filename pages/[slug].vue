<template>
  <div class="container">
    <div v-for="project in projects" class="mx-6">
      <div v-if="project.slug == slug">
        <div class="relative">
          <div v-for="feat_image in project._embedded">
            <div
              v-if="feat_image[0].source_url"
              class="project_feat_image"
              :style="{
                backgroundImage: 'url(' + feat_image[0].source_url + ')',
              }"
            ></div>
          </div>
        </div>
        <div class="project_content">
          <div class="grid gap-y-[50px]">
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
          <div class="md:w-[500px]">
            <h3>{{ project.title.rendered }}</h3>
            <div>
              {{ project.acf.project.project_content.project_description }}
            </div>
            <div class="flex gap-5 mt-10">
              <div
                class="project_list_styles"
                v-for="skill in project.acf.project.project_content
                  .project_items"
                :style="{
                  borderColor: `${project.acf.project.project_media.project_color}`,
                }"
              >
                {{ skill.skills_used }}
              </div>
            </div>
            <div v-if="project.acf.project.project_content.project_cta.url">
              <a
                class="project_btn"
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
  </div>
</template>

<script setup lang="ts">
const { slug } = useRoute().params;
const { data: projects } = await useFetch(
  "https://darryldidit.com/wp-json/wp/v2/project?_embed"
);
</script>

<style scoped></style>
