<template>
  <div id="experience" class="my-[2rem]">
    <div class="container flex flex-col mx-auto px-4">
      <h1 class="text-4xl font-bold mb-[4rem]    ">{{ 'Work Experience' }}</h1>
      <Timeline :value="events" layout="horizontal" class="hidden md:flex" align="top"
        :pt="{ eventOpposite: { class: 'hidden' } }">
        <template #marker="">
          <span class="flex w-3 h-3 items-center bg-white justify-center text-white rounded-full z-10 shadow-sm">
          </span>
        </template>
        <template #content="slotProps">
          <Card class="-mt-7   mb-5 bg-transparent" :class="{ '-ml-10 ': slotProps.index == (events.length - 1) }">
            <template #title>
              <h1 class="">{{ slotProps.item.role }}</h1>
            </template>
            <template #subtitle>
              <div class="flex flex-col w-[20rem]">
                <h1 class="text-wrap">{{ slotProps.item.company }}</h1>
              </div>

            </template>
            <template #content>
              <h1>{{ slotProps.item.date }}</h1>
            </template>
          </Card>
        </template>
      </Timeline>
      <Timeline :value="events" class="md:hidden" layout="vertical" align="top"
        :pt="{ eventOpposite: { class: 'hidden' } }">
        <template #marker="">
          <span class="flex w-3 h-3 items-center bg-white justify-center text-white rounded-full z-10 shadow-sm">
          </span>
        </template>
        <template #content="slotProps">
          <Card class="-mt-7   mb-5 bg-transparent">
            <template #title>
              <h1 class="">{{ slotProps.item.role }}</h1>
            </template>
            <template #subtitle>
              <div class="flex flex-col w-[20rem]">
                <h1 class="text-wrap">{{ slotProps.item.company }}</h1>
              </div>

            </template>
            <template #content>
              <h1>{{ slotProps.item.date }}</h1>
            </template>
          </Card>
        </template>
      </Timeline>

    </div>

  </div>
</template>
<script setup lang="ts">
let getOrientation = computed(() => {
  if (window.innerWidth < 768) {
    return 'vertical'
  }
  return 'horizontal'
});
const events = ref([
  { role: 'Intern', company: 'Ministry of Finance of the Dominican Republic', date: 'August 2022', icon: 'pi pi-cog', color: '#673AB7' },
  { role: 'Full Stack Developer', company: 'Ministry of Finance of the Dominican Republic', date: 'At the moment...', icon: 'pi pi-shopping-cart', color: '#9C27B0', image: 'game-controller.jpg' },
]);

</script>
