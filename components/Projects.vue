<template>
  <div class="container mx-auto p-4" id="projects">
    <h1 class="text-4xl font-bold mb-4">{{ 'GitHub Repos' }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <Card v-for="(repo, index) in repos" :key="index" class="bg-frost-gradient-2 pt-4">
        <template #header>
          <!-- <img :src="skill.image" :alt="skill.name" width="50" height="50" class="mx-auto" /> -->
        </template>
        <template #content>
          <div class=" flex flex-col mx-auto">
            <h3 class="text-center md:text-xl"> {{ repo['name'] }}</h3>
            <Button type="button" class="mt-5  text-white border-white" raised outlined as="a" :href="repo['html_url']"
              target="_blank" rel="noopener" label="Github" icon="pi pi-github" />


          </div>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">

import type { GithubRepo } from "../types/GithubRepo";
const { data: repos } = useFetch<GithubRepo[]>(`https://api.github.com/users/elmm-programing/repos`)



</script>
<!-- <template> -->
<!--  <div id="projects"> -->
<!--       <div class="container mx-auto p-4 my-[8rem]"> -->
<!--       <h1 class="text-4xl font-bold mb-[1rem]">{{$t('Projects')}}</h1> -->
<!--      <p>{{ $t('+2 years of experience. Full Stack Developer from the Dominican Republic. Specialized in the development of web applications and with knowledge of backend, system design, software architecture and Data structures') }}</p> -->
<!--  <Button type="button" class="mt-5 text-white border-white"  raised outlined as="a" href="https://www.linkedin.com/in/edwin-levinson-mej%C3%ADa-marcelino-738746201/" target="_blank" rel="noopener"  label="Linkedin" icon="pi pi-linkedin"  /> -->
<!--  <Button type="button" class="mt-5 mx-3 text-white border-white"  raised outlined as="a" href="https://github.com/elmm-programing" target="_blank" rel="noopener"  label="Github" icon="pi pi-github"  /> -->
<!--       </div> -->
<!---->
<!--     </div>  -->
<!-- </template> -->
<!-- <script setup lang="ts"> -->
<!-- </script> -->
