<template>
  <div class="container mx-auto p-4">
    <h1 class="text-4xl font-bold mb-4">{{$t('Skills')}}</h1>
    <div class="grid grid-cols-4 gap-4">
      <Card v-for="(skill, index) in skills" :key="index" class="bg-frost-gradient-2 pt-4" >
        <template #header>
          <img :src="skill.image" :alt="skill.name" width="50" height="50" class="mx-auto" />
        </template>
        <template #content>
          <h3 class="text-center">{{ skill.name }}</h3>
        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const skills = [
  { name: 'Golang', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Tailwind CSS', image: 'https://tailwindcss.com/_next/static/media/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg' },
  { name: 'Neovim', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg' },
  { name: 'Database Management', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Nuxt', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Pinia', image: 'https://pinia.vuejs.org/logo.svg' },
  { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Traefik', image: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPGRlZnM+CiAgICAgICAgPHBhdGggaWQ9ImEiIGQ9Ik0wIDBoNDB2NDBIMHoiLz4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPgogICAgICAgICAgICA8dXNlIHhsaW5rOmhyZWY9IiNhIi8+CiAgICAgICAgPC9tYXNrPgogICAgICAgIDxwYXRoIGQ9Ik0yMC4xNTYgNC4zNzVjMS41NzMgMCAyLjk3MiAxLjExIDIuOTcyIDIuNDc4cy0xLjMzMiAyLjQ3OS0yLjk3MiAyLjQ3OWEzLjg2IDMuODYgMCAwIDEtLjczNC0uMDkzLjk5Ljk5IDAgMCAwLS42ODcuMTFMOC4wOCAxNS40MTNhLjQ5Ni40OTYgMCAwIDAgLjAwMi44NjNsMTEuNTUgNi40ODljLjI5OS4xNjguNjY1LjE2OS45NjUuMDAybDExLjYxMi02LjQ2YS40OTYuNDk2IDAgMCAwIC4wMDQtLjg2NGwtMy42MjMtMi4wNThhLjk5Ljk5IDAgMCAwLS45Ny0uMDA1bC0zLjgyNCAyLjEyM2EuMzM4LjMzOCAwIDAgMC0uMTcyLjI1OWwtLjAwMi4wMzZjMCAxLjM2OC0xLjMzMSAyLjQ3OS0yLjk3MSAyLjQ3OS0xLjY0IDAtMi45NzItMS4xMS0yLjk3Mi0yLjQ3OSAwLTEuMzY3IDEuMzMxLTIuNDc4IDIuOTcyLTIuNDc4LjA2IDAgLjEzLjAwMy4yMS4wMWwuMTI1LjAxMi4xMzguMDE4YS45OS45OSAwIDAgMCAuNjE0LS4xMTZsNS42NTYtMy4xMzljLjQzNC0uMjQuOTU2LS4yNDggMS4zOTUtLjAyNGwuMDYuMDMxIDcuODk4IDQuNDg3YTEuNDg4IDEuNDg4IDAgMCAxIC4wNDEgMi41NjJsLS4wNTMuMDMxLTUuMjgzIDIuOTRhLjQ5Ni40OTYgMCAwIDAgLjAxLjg3MWw1LjIzMyAyLjc1NWMxLjAzOS41NDcgMS4wNjQgMi4wMjYuMDQ0IDIuNjA4TDIwLjg0NyAzNS40M2MtLjQ1Ny4yNi0xLjAxNi4yNi0xLjQ3MiAwTDMuNTcyIDI2LjQwMmMtMS4wMjEtLjU4My0uOTkzLTIuMDY2LjA1LTIuNjFsNS4yOS0yLjc2MmEuNDk2LjQ5NiAwIDAgMCAuMDEzLS44NzJMMy41NyAxNy4xNTJhMS40ODggMS40ODggMCAwIDEtLjA2LTIuNTU4bC4wNTMtLjAzMiAxMy4xNS03LjQ4M2EuOTkxLjk5MSAwIDAgMCAuNDQ0LS41MzRsLjAxNy0uMDUyYy40NjEtMS4zNzYgMS41MTItMi4xMTggMi45ODEtMi4xMTh6bTcuMzM3IDE4LjI1NkwyMSAyNi4zNjhsLS4wNi4wMzJjLS40NDEuMjI4LS45NjkuMjItMS40MDQtLjAyNmwtNi40NzMtMy42NTJhLjk4NS45ODUgMCAwIDAtLjk0MS0uMDE1TDguMzkgMjQuNjZhLjQ5Ny40OTcgMCAwIDAtLjAxNy44N2wxMS40IDYuNTI3YS45ODUuOTg1IDAgMCAwIC45NzkgMGwxMS40OTctNi41NzNhLjQ5Ny40OTcgMCAwIDAtLjAxNC0uODdsLTMuNzktMmEuOTg1Ljk4NSAwIDAgMC0uOTUzLjAxN3oiIGZpbGw9IiMyQUEyQzEiIGZpbGwtcnVsZT0ibm9uemVybyIgbWFzaz0idXJsKCNiKSIvPgogICAgPC9nPgo8L3N2Zz4K' },
  { name: 'AWS', image: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'Terraform', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
  { name: 'OpenTofu', image: 'https://opentofu.org/img/logo.svg' },
  { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
    { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Quarkus', image: 'https://design.jboss.org/quarkus/logo/final/SVG/quarkus_icon_rgb_default.svg' }
];

</script>
