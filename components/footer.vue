<template>
  <div class="flex justify-between my-10">
    <div>
      © {{ new Date().getFullYear() }} Darryl Nicholson. All Rights Reserved.
    </div>
    <div
      class="flex gap-6 md:gap-8 z-10 mx-auto md:mx-0 w-[153px] md:w-[192px] md:pr-[30px]"
    >
      <a href="https://github.com/MrNicholson85" target="_blank"
        ><img :src="GitIcon"
      /></a>
      <a
        href="https://www.frontendmentor.io/profile/MrNicholson85"
        target="_blank"
        ><img :src="FemIcon"
      /></a>
      <a href="https://www.linkedin.com/in/darrylnicholson/" target="_blank"
        ><img :src="LdIcon"
      /></a>
    </div>
  </div>
</template>

<script setup>
import GitIcon from "~~/assets/images/icon-github.svg";
import FemIcon from "~~/assets/images/icon-frontend-mentor.svg";
import LdIcon from "~~/assets/images/icon-linkedin.svg";
import TwIcon from "~~/assets/images/icon-twitter.svg";
</script>

<style scoped></style>
