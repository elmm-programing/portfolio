<template>
  <section class="flex justify-center sticky top-0 z-50  mx-auto   ">
    <Menubar class="border-0 bg-transparent mx-auto bg-frost-gradient-1 rounded-full " :model="items">
      <template #start>
        <div class="flex flex-row  ">

          <h1>ELMM</h1>
          <i class="pi pi-code mt-1 ml-2"></i>
        </div>
      </template>
      <template #item="{ item, props }">

        <a v-ripple
          class="flex items-center hover:bg-frost-gradient-2 active:bg-frost-gradient-2 focus:bg-frost-gradient-2"
          v-bind="props.action">
          <span class="mx-2">{{ item.label }}</span>
        </a>
      </template>

    </MenuBar>

  </section>
</template>

<script setup lang="ts">

function scrollToSection(sectionId: string) {
  const section = document.getElementById(sectionId);
  const navbarHeight = document.querySelector('.sticky').offsetHeight; // Get the height of the sticky navbar
  const offset = navbarHeight + 20; // Adjust this value to set the offset
  if (section) {
    const sectionTop = section.getBoundingClientRect().top + window.scrollY;
    window.scrollTo({
      top: sectionTop - offset,
      left: 0,
      behavior: 'smooth',
    });
  }
}
const items = ref([
  {
    label: 'Home',
    command: () => scrollToSection('home')
  },
  {
    label: 'Experience',
    command: () => scrollToSection('experience')
  },
  {
    label: 'Skills',
    command: () => scrollToSection('skills')
  },
  {
    label: 'Certification',
    command: () => scrollToSection('certification')
  },

  {
    label: 'GitHub Repos',
    command: () => scrollToSection('projects')
  }

]);
</script>
