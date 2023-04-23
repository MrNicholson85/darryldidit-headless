<template>
  <div>
    <Nav />
    <!-- Page Content -->
    <div>
      <slot />
    </div>

    <Footer />
  </div>
</template>

<script setup>
import Nav from "~/components/Nav.vue";
import footer from "~/components/footer.vue";
</script>

<style lang="scss" scoped></style>
