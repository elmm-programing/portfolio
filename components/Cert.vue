<template>
  <div class="container mx-auto p-4" id="certification">
    <h1 class="text-4xl font-bold mb-4">{{ 'Certifications' }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-1     ">
      <Card v-for="(cert, index) in certifications" :key="index" class="bg-frost-gradient-2 mt-4">
        <template #content>
          <div class="flex flex-col justify-center">
            <h1 class="text-center text-2xl">{{ cert.title }}</h1>
            <h1 class="text-center text-xl">{{ cert.company }}</h1>
            <h1 class="text-center">Expedition: {{ cert.issueDate }}</h1>
            <h1 class="text-center">Skills:[{{ cert.skills.toString() }}]</h1>
            <Button type="button" class="mt-5  text-white border-white" raised outlined as="a"
              :href="cert['certificateUrl']" target="_blank" rel="noopener" label="Certificate Url"
              icon="pi pi-external-link" />
          </div>

        </template>
      </Card>
    </div>
  </div>
</template>

<script setup lang="ts">
const certifications = ref([
  {
    certificateUrl: 'https://www.hackerrank.com/certificates/1c375d187eeb',
    title: 'JavaScript (Basic) Certificate',
    company: 'HackerRank',
    issueDate: 'may. 2024',
    credentialId: '1c375d187eeb',
    skills: ['JavaScript'],
  },
  {
    certificateUrl: 'https://www.hackerrank.com/certificates/a00313f5e469', // Placeholder URL
    title: 'JavaScript (Intermediate) Certificate',
    company: 'HackerRank',
    issueDate: 'may. 2024',
    credentialId: 'a00313f5e469',
    skills: ['JavaScript'],
  },
  {
    certificateUrl: 'https://www.linkedin.com/in/edwin-levinson-mej%C3%ADa-marcelino-738746201/details/certifications/1714874786257/single-media-viewer?type=DOCUMENT&profileId=ACoAADOLlJwBmA5l5Y_dZv5lelB-GrxfOFlyIZk', // Placeholder URL
    title: 'Master the Coding Interview: Data Structures + Algorithms',
    company: 'Zero To Mastery Academy',
    issueDate: 'abr. 2024',
    skills: ['Estructuras de datos', 'Algoritmos', 'Design Patterns'],
  },
  {
    certificateUrl: 'https://www.linkedin.com/in/edwin-levinson-mej%C3%ADa-marcelino-738746201/details/certifications/1714874945912/single-media-viewer?type=DOCUMENT&profileId=ACoAADOLlJwBmA5l5Y_dZv5lelB-GrxfOFlyIZk', // Placeholder URL
    title: "Go Programming (Golang): The Complete Developer's Guide",
    company: 'Zero To Mastery Academy',
    issueDate: 'ene. 2024',
    skills: ['Golang', 'Go'],
  },
  {
    certificateUrl: 'https://www.linkedin.com/in/edwin-levinson-mej%C3%ADa-marcelino-738746201/details/certifications/1714875111990/single-media-viewer?type=DOCUMENT&profileId=ACoAADOLlJwBmA5l5Y_dZv5lelB-GrxfOFlyIZk', // Placeholder URL
    title: 'Master the Coding Interview: System Design + Architecture',
    company: 'Zero To Mastery Academy',
    issueDate: 'dic. 2023',
    skills: ['Integration Testing', 'Diseño de sistemas', 'Design Patterns', 'Arquitectura de software'],
  },
  {
    certificateUrl: 'https://www.hackerrank.com/certificates/2edf56ac37eb',
    title: 'Go (Basic) Certificate',
    company: 'HackerRank',
    issueDate: 'jun. 2023',
    credentialId: '2edf56ac37eb',
    skills: ['Go'],
  },
  {
    certificateUrl: 'https://www.hackerrank.com/certificates/78039edd80fd',
    title: 'SQL (Intermediate) Certificate',
    company: 'HackerRank',
    issueDate: 'sept. 2022',
    credentialId: '78039edd80fd',
    skills: ['PostgreSQL', 'SQL'],
  },
  {
    certificateUrl: 'https://www.hackerrank.com/certificates/763bf8e777dd',
    title: 'SQL (Basic) Certificate',
    company: 'HackerRank',
    issueDate: 'ago. 2022',
    credentialId: '763bf8e777dd',
    skills: ['PostgreSQL', 'SQL'],
  },
]);
</script>
