<template>
  <div class="container">
    <header
      class="grid gap-y-3 md:flex justify-center md:justify-between h-[70px] items-center md:mx-6 my-5 md:my-0"
    >
      <div class="font-bold uppercase">
        <NuxtLink :to="`/`">Darryl Did It!</NuxtLink>
      </div>
      <div class="flex justify-between w-[153px] md:w-[142px]">
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
    </header>
  </div>
</template>

<script setup>
import GitIcon from "~~/assets/images/icon-github.svg";
import FemIcon from "~~/assets/images/icon-frontend-mentor.svg";
import LdIcon from "~~/assets/images/icon-linkedin.svg";
import TwIcon from "~~/assets/images/icon-twitter.svg";
</script>

<style lang="scss" scoped></style>
