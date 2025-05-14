<template>
  <div class="bg-frost-gradient ">
    <NavBar />
    <Introduction />
    <Experience />
    <Skills />
    <Cert />
    <Projects />
  </div>
</template>

<script setup lang="ts">


</script>
<style scoped>
@media screen and (max-width: 960px) {
  .customized-timeline .p-timeline-event:nth-child(even) {
    flex-direction: row;
  }

  .customized-timeline .p-timeline-event:nth-child(even) .p-timeline-event-content {
    text-align: left;
  }

  .customized-timeline .p-timeline-event-opposite {
    flex: 0;
  }
}
</style>
