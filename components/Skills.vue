<template>
  <div class="container mx-auto p-4" id="skills">
    <h1 class="text-4xl font-bold mb-4">{{ $t('Skills') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
      <Card v-for="(skill, index) in skills" :key="index" class="bg-frost-gradient-2 pt-4">
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
  { name: 'JavaScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TypeScript', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Vue.js', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg' },
  { name: 'React', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Tailwind CSS', image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/tailwindcss.svg' },
  { name: 'Nuxt', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nuxtjs/nuxtjs-original.svg' },
  { name: 'Next.js', image: 'https://cdn.jsdelivr.net/npm/simple-icons@3.13.0/icons/next-dot-js.svg' },
  { name: 'HTML', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'Neovim', image: 'https://upload.wikimedia.org/wikipedia/commons/3/3a/Neovim-mark.svg' },
  { name: 'Golang', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg' },
  { name: 'Docker', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Database Management', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'Git', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'Pinia', image: 'https://pinia.vuejs.org/logo.svg' },
  { name: 'Linux', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg' },
  { name: 'Postman', image: 'https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg' },
  { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'PostgreSQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'AWS', image: 'https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg' },
  { name: 'SQL', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
  { name: 'MongoDB', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
  { name: 'Java', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
  { name: 'Spring Boot', image: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg' },
  { name: 'Quarkus', image: 'https://design.jboss.org/quarkus/logo/final/SVG/quarkus_icon_rgb_default.svg' }
];

</script>
