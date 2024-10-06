<template>
  <NavBar />
  <Skills />
</template>

<script setup lang="ts">
const { locale, t } = useI18n();
const selectedLang = ref({ name: locale.value == 'en'?'English':'Spanish' });

const handleSelectChange = (e) => {
  const selectedValue =selectedLang.value.name 
  console.log('Selected value:', selectedLang.value.name);
  if (selectedValue == 'English') {
    locale.value = 'en'

  } else {
    locale.value = 'es'
  }
}
const langs = ref([
    { name: 'English' },
  { name: 'Spanish' }
]);
const items = ref([
  {
    label: 'Home',
  },
  {
    label: 'Projects',
  },
  {
    label: 'Skills',
  },
  {
    label: 'Contact',
  }
]);
</script>
<style scoped>
.p-splitbutton-dropdown {
  background-color: #f4f4f4;
}
</style>
