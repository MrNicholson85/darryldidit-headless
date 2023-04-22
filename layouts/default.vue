<template>
  <div>
    <Nav />
    <!-- Page Content -->
    <div>
      <slot />
    </div>
  </div>
</template>

<script setup>
import Nav from "~/components/Nav.vue";
</script>

<style lang="scss" scoped></style>
